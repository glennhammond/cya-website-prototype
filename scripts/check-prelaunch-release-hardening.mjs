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

assert.match(release, /CYA_INDEXING_ENABLED === "true"/);
assert.match(release, /CYA_ANALYTICS_ENABLED === "true"/);
assert.match(release, /CYA_ENQUIRY_SUBMISSION_ENABLED === "true"/);
assert.match(release, /VERCEL_ENV === "production"/);

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
  "CYA_INDEXING_ENABLED=false",
  "CYA_ANALYTICS_ENABLED=false",
  "CYA_ENQUIRY_SUBMISSION_ENABLED=false",
]) {
  assert.match(env, new RegExp(flag));
}

console.log("CYA pre-launch release controls: PASS");
