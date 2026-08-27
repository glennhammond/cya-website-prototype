import { NextResponse, type NextRequest } from "next/server";
import { interestOptions } from "@/content/consultation";
import { ATTRIBUTION_KEYS, type AttributionData } from "@/lib/attribution";

// HubSpot portal/form identifiers are not secrets. Runtime overrides allow the
// deployment configuration to stay explicit without breaking the already
// qualified CYA planning form when an override is absent.
const HUBSPOT_PORTAL_ID = process.env.CYA_HUBSPOT_PORTAL_ID?.trim() || "14575795";
const HUBSPOT_FORM_ID = process.env.CYA_HUBSPOT_FORM_ID?.trim() || "746ef219-510f-4faa-a7a3-40288155d936";
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryPayload = {
  name?: unknown;
  workEmail?: unknown;
  phone?: unknown;
  organisation?: unknown;
  role?: unknown;
  workforce?: unknown;
  locations?: unknown;
  interest?: unknown;
  timeframe?: unknown;
  deliveryMode?: unknown;
  context?: unknown;
  procurement?: unknown;
  privacyConsent?: unknown;
  website?: unknown;
  sourcePage?: unknown;
  referrer?: unknown;
  hubspotutk?: unknown;
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
  if (landingPage) result.landingPage = landingPage;
  if (capturedAt) result.capturedAt = capturedAt;
  return result;
}

function requestIp(request: NextRequest) {
  return clean(request.headers.get("x-forwarded-for")?.split(",")[0], 100);
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const expectedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return new URL(origin).host === expectedHost;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
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

  if (
    !name ||
    !EMAIL_PATTERN.test(workEmail) ||
    (interest && !interestOptions.some((option) => option.value === interest)) ||
    !planningContext ||
    body.privacyConsent !== true
  ) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const successRoute = interest === "studio" ? "/contact-thank-you-online" : "/contact-thank-you";

  // Quietly accept honeypot submissions without creating HubSpot records.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, successRoute, submissionId: crypto.randomUUID() });
  }

  const interestLabel = interestOptions.find((option) => option.value === interest)?.label ?? "Not specified";
  const procurement = clean(body.procurement, 2000);
  const intention = [planningContext, procurement ? `Procurement context: ${procurement}` : ""]
    .filter(Boolean)
    .join("\n\n");
  const timing = clean(body.timeframe, 200) || "Not specified";
  const location = [clean(body.locations, 500), clean(body.deliveryMode, 100)]
    .filter(Boolean)
    .join("; ") || "Not specified";
  const attribution = validAttribution(body.attribution);
  const attributionSummary = ATTRIBUTION_KEYS
    .filter((key) => attribution[key])
    .map((key) => `${key}=${attribution[key]}`)
    .join("; ");
  const discoveryContext = [
    `Interest: ${interestLabel}`,
    clean(body.role, 200) ? `Role: ${clean(body.role, 200)}` : "",
    clean(body.workforce, 100) ? `Workforce: ${clean(body.workforce, 100)}` : "",
    attribution.landingPage ? `Landing page: ${attribution.landingPage}` : "",
    clean(body.sourcePage, 2000) ? `Submission page: ${clean(body.sourcePage, 2000)}` : "",
    clean(body.referrer, 2000) ? `Referrer: ${clean(body.referrer, 2000)}` : "",
    attributionSummary ? `Attribution: ${attributionSummary}` : "",
  ].filter(Boolean).join("\n").slice(0, 5000);

  const fields = [
    field("cya_planning_name", name),
    field("email", workEmail),
    field("cya_planning_intention", intention),
    field("cya_planning_timing", timing),
    field("cya_planning_location", location),
    field("cya_discovery_context", discoveryContext),
  ];
  if (organisation) fields.push(field("company", organisation));
  const phone = clean(body.phone, 100);
  if (phone) fields.push(field("phone", phone));

  const context: Record<string, string> = {
    pageName: "Contact / Plan with CYA",
    pageUri: clean(body.sourcePage, 2000) || "https://www.corporateyoga.com.au/contact",
  };
  const hubspotutk = clean(body.hubspotutk, 200);
  const ipAddress = requestIp(request);
  if (hubspotutk) context.hutk = hubspotutk;
  if (ipAddress) context.ipAddress = ipAddress;

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
            text: "I understand CYA will process this enquiry in line with its privacy policy.",
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

  return NextResponse.json({ ok: true, successRoute, submissionId: crypto.randomUUID() });
}
