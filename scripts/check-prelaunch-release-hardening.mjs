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

for (const flag of [
  "CYA_PRIVACY_POLICY_APPROVED === \"true\"",
  "CYA_HOSTING_DPA_CONFIRMED === \"true\"",
  "CYA_INDEXING_ENABLED === \"true\"",
  "CYA_ANALYTICS_ENABLED === \"true\"",
  "CYA_ENQUIRY_SUBMISSION_ENABLED === \"true\"",
]) {
  assert.match(release, new RegExp(flag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
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
assert.match(attribution, /sessionStorage/);

assert.match(contact, /enquirySubmissionEnabled\(\)/);
assert.match(contact, /submissionEnabled=\{submissionEnabled\}/);
assert.match(form, /disabled=\{!submissionEnabled \|\| status === "submitting"\}/);
assert.match(form, /status === "success"/);
assert.match(form, /respond within two business days/);
assert.match(form, /readAnalyticsConsent\(\) === "granted"/);
assert.match(form, /event: "cya_lead_submission"/);
assert.doesNotMatch(form, /window\.location\.assign|PENDING_LEAD_STORAGE_KEY|hubspotutk/);

assert.match(enquiryRoute, /if \(!enquirySubmissionEnabled\(\)\)/);
assert.match(enquiryRoute, /status: 503/);
assert.match(enquiryRoute, /conversionEligible: false/);
assert.match(enquiryRoute, /conversionEligible: true/);
assert.doesNotMatch(enquiryRoute, /ipAddress|hubspotutk|successRoute/);
assert.match(enquiryRoute, /consentToProcess: true/);

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
