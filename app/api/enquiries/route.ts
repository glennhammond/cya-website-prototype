import { NextResponse, type NextRequest } from "next/server";
import { interestOptions } from "@/content/consultation";
import { ATTRIBUTION_KEYS, type AttributionData } from "@/lib/attribution";
import { enquirySubmissionEnabled } from "@/lib/release";

const HUBSPOT_PORTAL_ID = process.env.CYA_HUBSPOT_PORTAL_ID?.trim() || "14575795";
const HUBSPOT_FORM_ID = process.env.CYA_HUBSPOT_FORM_ID?.trim() || "746ef219-510f-4faa-a7a3-40288155d936";
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryPayload = {
  name?: unknown;
  workEmail?: unknown;
  organisation?: unknown;
  locations?: unknown;
  interest?: unknown;
  timeframe?: unknown;
  context?: unknown;
  privacyConsent?: unknown;
  website?: unknown;
  sourcePage?: unknown;
  referrer?: unknown;
  attribution?: unknown;
};

function clean(value: unknown, maximum = 500) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function field(name: string, value: string) {
  return { objectTypeId: "0-1", name, value };
}

function validAttribution(value: unknown): AttributionData {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const source = value as Record<string, unknown>;
  const result: AttributionData = {};
  for (const key of ATTRIBUTION_KEYS) {
    const item = clean(source[key], 500);
    if (item) result[key] = item;
  }
  const landingPage = clean(source.landingPage, 2000);
  const capturedAt = clean(source.capturedAt, 100);
  const initialReferrer = clean(source.initialReferrer, 2000);
  const discoveryChannel = clean(source.discoveryChannel, 100);
  const discoverySource = clean(source.discoverySource, 100);
  if (landingPage) result.landingPage = landingPage;
  if (capturedAt) result.capturedAt = capturedAt;
  if (initialReferrer) result.initialReferrer = initialReferrer;
  if (discoveryChannel) result.discoveryChannel = discoveryChannel;
  if (discoverySource) result.discoverySource = discoverySource;
  return result;
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const expectedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return Boolean(expectedHost) && new URL(origin).host === expectedHost;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!enquirySubmissionEnabled()) {
    return NextResponse.json({ ok: false, error: "submission-disabled" }, { status: 503 });
  }

  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });
  }

  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const name = clean(body.name, 160);
  const workEmail = clean(body.workEmail, 254).toLowerCase();
  const organisation = clean(body.organisation, 200);
  const interest = clean(body.interest, 100);
  const planningContext = clean(body.context, 3000);

  if (!name || !EMAIL_PATTERN.test(workEmail) || (interest && !interestOptions.some((option) => option.value === interest)) || !planningContext || body.privacyConsent !== true) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, conversionEligible: false, submissionId: crypto.randomUUID() });
  }

  const interestLabel = interestOptions.find((option) => option.value === interest)?.label ?? "Not specified";
  const timing = clean(body.timeframe, 200) || "Not specified";
  const location = clean(body.locations, 500) || "Not specified";
  const attribution = validAttribution(body.attribution);
  const attributionSummary = ATTRIBUTION_KEYS.filter((key) => attribution[key]).map((key) => `${key}=${attribution[key]}`).join("; ");
  const discoveryContext = [
    `Interest: ${interestLabel}`,
    attribution.landingPage ? `Landing page: ${attribution.landingPage}` : "",
    attribution.discoveryChannel ? `Discovery channel: ${attribution.discoveryChannel}` : "",
    attribution.discoverySource ? `Discovery source: ${attribution.discoverySource}` : "",
    attribution.initialReferrer ? `Initial referrer: ${attribution.initialReferrer}` : "",
    clean(body.sourcePage, 2000) ? `Submission page: ${clean(body.sourcePage, 2000)}` : "",
    clean(body.referrer, 2000) ? `Referrer: ${clean(body.referrer, 2000)}` : "",
    attributionSummary ? `Attribution: ${attributionSummary}` : "",
  ].filter(Boolean).join("\n").slice(0, 5000);

  const fields = [
    field("cya_planning_name", name),
    field("email", workEmail),
    field("cya_planning_intention", planningContext),
    field("cya_planning_timing", timing),
    field("cya_planning_location", location),
    field("cya_discovery_context", discoveryContext),
  ];
  if (organisation) fields.push(field("company", organisation));

  const context: Record<string, string> = {
    pageName: "Contact / Start planning",
    pageUri: clean(body.sourcePage, 2000) || "https://www.corporateyoga.com.au/contact",
  };

  let response: Response;
  try {
    response = await fetch(HUBSPOT_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.now().toString(),
        fields,
        context,
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: "I understand Corporate Yoga Australia will use these details to respond to my enquiry and process them through HubSpot as described in the Privacy Policy.",
          },
        },
        skipValidation: true,
      }),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream-unavailable" }, { status: 502 });
  }

  if (!response.ok) {
    const correlationId = response.headers.get("x-hubspot-correlation-id");
    console.error("HubSpot enquiry submission failed", { status: response.status, correlationId });
    return NextResponse.json({ ok: false, error: "upstream-rejected" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, conversionEligible: true, submissionId: crypto.randomUUID() });
}
