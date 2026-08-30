import assert from "node:assert/strict";
import fs from "node:fs";

const read = (path) => fs.readFileSync(path, "utf8");

const release = read("lib/release.ts");
const layout = read("app/layout.tsx");
const robots = read("app/robots.ts");
const config = read("next.config.ts");
const env = read(".env.example");
const analytics = read("components/AnalyticsConsentManager.tsx");
const attribution = read("components/AttributionCapture.tsx");
const contact = read("app/contact/page.tsx");
const form = read("components/ConsultationForm.tsx");
const enquiryRoute = read("app/api/enquiries/route.ts");
const retiredHelper = read("lib/retired-route.ts");
const privacyPolicy = read("app/privacy-policy/page.tsx");
const footer = read("components/SiteFooter.tsx");
const routeDecisions = JSON.parse(read("config/phase-11-5-4-route-decisions.json"));
const approvals = JSON.parse(read("config/launch-approvals.json"));

for (const flag of [
  "CYA_PRIVACY_POLICY_APPROVED === \"true\"",
  "CYA_HOSTING_DPA_CONFIRMED === \"true\"",
  "CYA_INDEXING_ENABLED === \"true\"",
  "CYA_ANALYTICS_ENABLED === \"true\"",
  "CYA_ENQUIRY_SUBMISSION_ENABLED === \"true\"",
]) {
  assert.ok(release.includes(flag), `release control missing: ${flag}`);
}
assert.match(release, /VERCEL_ENV === "production"/);
assert.match(release, /privacyPolicyApproved\(\)[\s\S]*CYA_ANALYTICS_ENABLED/);
assert.match(release, /privacyPolicyApproved\(\)[\s\S]*hostingDpaConfirmed\(\)[\s\S]*CYA_ENQUIRY_SUBMISSION_ENABLED/);

assert.match(layout, /releaseIndexingEnabled/);
assert.match(layout, /analyticsTrackingEnabled/);
assert.match(layout, /AnalyticsConsentManager/);
assert.doesNotMatch(layout, /<GoogleTagManager|<GoogleAnalytics|<AttributionCapture/);
assert.match(layout, /robots:/);
assert.match(layout, /index: false, follow: false/);

assert.match(analytics, /consent === "granted"/);
assert.match(analytics, /Allow analytics/);
assert.match(analytics, /Essential only/);
assert.match(analytics, /<GoogleTagManager/);
assert.match(analytics, /<GoogleAnalytics/);
assert.match(analytics, /<AttributionCapture/);
assert.match(analytics, /href="\/privacy-policy"/);
assert.match(attribution, /sessionStorage/);

assert.match(contact, /enquirySubmissionEnabled\(\)/);
assert.match(contact, /submissionEnabled=\{submissionEnabled\}/);
assert.match(form, /disabled=\{!submissionEnabled \|\| status === "submitting"\}/);
assert.match(form, /status === "success"/);
assert.match(form, /respond within two business days/);
assert.match(form, /readAnalyticsConsent\(\) === "granted"/);
assert.match(form, /event: "cya_lead_submission"/);
assert.match(form, /Submitting this form does not subscribe you to marketing communications/);
assert.match(form, /href="\/privacy-policy"/);
assert.doesNotMatch(form, /window\.location\.assign|PENDING_LEAD_STORAGE_KEY|hubspotutk/);

assert.match(enquiryRoute, /if \(!enquirySubmissionEnabled\(\)\)/);
assert.match(enquiryRoute, /status: 503/);
assert.match(enquiryRoute, /conversionEligible: false/);
assert.match(enquiryRoute, /conversionEligible: true/);
assert.doesNotMatch(enquiryRoute, /ipAddress|hubspotutk|successRoute/);
assert.match(enquiryRoute, /consentToProcess: true/);

assert.match(privacyPolicy, /Working draft — 29 August 2026/);
assert.match(privacyPolicy, /Deborah Gail Lewis, ABN 59 474 451 715/);
assert.match(privacyPolicy, /Submitting an enquiry does <strong>not<\/strong> subscribe you to marketing communications/);
assert.match(privacyPolicy, /robots: \{ index: false, follow: false \}/);
assert.doesNotMatch(privacyPolicy, /Pre-publication operational checks/);
assert.match(footer, /href="\/privacy-policy"/);
assert.ok(config.includes('source: "/privacy"') && config.includes('destination: "/privacy-policy"'));

assert.match(retiredHelper, /status: 410/);
assert.match(retiredHelper, /X-Robots-Tag/);
assert.match(retiredHelper, /noindex, nofollow/);
for (const route of [
  "app/program-registration/route.ts",
  "app/contact-thank-you/route.ts",
  "app/contact-thank-you-online/route.ts",
  "app/contact-thank-you-online-1/route.ts",
  "app/google-ads-lander/route.ts",
]) {
  assert.match(read(route), /retiredRouteResponse/);
}

for (const [source, destination] of [
  ["/workplace-yoga-australia", "/workplace-yoga"],
  ["/online-wellbeing-2026", "/online-wellbeing"],
  ["/online-wellbeing-1", "/online-wellbeing"],
  ["/online-wellbeing-landing-page", "/online-wellbeing"],
  ["/online-wellbeing-learn-more-here", "/online-wellbeing"],
  ["/2026-wellbeing-program", "/workplace-wellbeing-programs"],
  ["/2026-wellbeing-program-1", "/workplace-wellbeing-programs"],
  ["/2026-wellbeing-program-1-1", "/workplace-wellbeing-programs"],
]) {
  assert.ok(config.includes(`source: \"${source}\"`) && config.includes(`destination: \"${destination}\"`), `missing migration ${source}`);
}
assert.doesNotMatch(config, /source: "\/google-ads-lander"/);
assert.doesNotMatch(config, /source: "\/contact-thank-you/);

assert.equal(routeDecisions.version, "2.0");
assert.equal(routeDecisions.retiredRoutes.length, 5);
assert.ok(routeDecisions.campaignRoutes.every((route) => route.ownerConfirmed === true));

assert.equal(approvals.hostingDpaConfirmed, true, "Vercel Pro/DPA evidence must be recorded");
assert.equal(approvals.currentDesignReconciled, true, "current redesign snapshot must be reconciled");
for (const key of [
  "renderedServerQaPassed",
  "hostedBrowserQaPassed",
  "phase1154HostedBrowserQaPassed",
  "googleAdsConversionConfigurationChecked",
  "hubspotDebNotificationVerified",
  "productionEnquiryFormLiveSubmissionVerified",
  "privacyPolicyApproved",
  "analyticsConsentQualified",
  "migrationHttpQualified",
  "externalAccessibilityQualified",
  "performanceQualified",
  "studioHandoffQualified",
  "releaseIndexingApproved",
]) {
  assert.equal(approvals[key], false, `fresh release gate must remain open: ${key}`);
}

assert.match(robots, /releaseIndexingEnabled/);
assert.match(robots, /disallow: "\/"/);

for (const header of [
  "X-Content-Type-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "X-Frame-Options",
]) {
  assert.match(config, new RegExp(header));
}

for (const flag of [
  "CYA_PRIVACY_POLICY_APPROVED=false",
  "CYA_HOSTING_DPA_CONFIRMED=false",
  "CYA_INDEXING_ENABLED=false",
  "CYA_ANALYTICS_ENABLED=false",
  "CYA_ENQUIRY_SUBMISSION_ENABLED=false",
]) {
  assert.match(env, new RegExp(flag));
}

console.log("CYA pre-launch release controls: PASS");
