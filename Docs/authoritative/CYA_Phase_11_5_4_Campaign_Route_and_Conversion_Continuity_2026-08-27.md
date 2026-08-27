# CYA SEO — Phase 11.5.4 Campaign Route & Conversion Continuity

**Date:** 27 August 2026

**Branch:** `phase-11-5-3-production-seo`

**Authority:** Owner route classification, Google Ads exports/screenshots and authorised HubSpot form supplied 27 August 2026

**Qualification result:** **BLOCKED — evidence and production plumbing integrated; live qualification remains**

## 1. Executive decision

Google Ads evidence now confirms `/workplace-yoga-australia` as the dominant post-tracking paid destination and confirms `/contact-thank-you` plus `/contact-thank-you-online` as conversion webpages. Those exact routes remain protected.

Online campaign variants, the 2026 campaign route and the Cromwell registration route remain preserved for non-Ads operational continuity. `/contact-thank-you-online-1` has no Google Ads conversion evidence and is consolidated by one-hop 301 to `/contact-thank-you-online`. Historical `/google-ads-lander` is governed by one-hop 301 to the protected paid lander.

The authorised HubSpot form is now integrated in code, including validated server-side submission, HubSpot visitor context, GCLID/UTM capture, governed success routes and a one-time GTM data-layer signal. No test submission was sent to the live CRM. Launch qualification still requires Deb-only notification verification, one controlled live submission, a fresh hosted browser pass and confirmation of the Google Ads campaign's intended enabled/paused state.

No production deployment, Vercel promotion or DNS change has been performed.

## 2. Route outcomes implemented

| Route/group | Outcome | Search treatment |
|---|---|---|
| `/workplace-yoga-australia` | Preserved as the Google Ads workplace-yoga landing route | `noindex,follow`; exact self-canonical |
| `/online-wellbeing` | Preserved as the substantive canonical service | Indexable; present in sitemap |
| Four Online Wellbeing campaign variants | Preserved for non-Ads campaign continuity; absent from the supplied Ads landing-page export | `noindex,follow`; exact self-canonicals |
| `/2026-wellbeing-program-1` | Preserved for non-Ads campaign continuity; absent from the supplied Ads landing-page export | `noindex,follow`; exact self-canonical |
| `/program-registration` | Preserved as the Cromwell operational entry point | `noindex,follow`; exact self-canonical |
| `/contact-thank-you` | Confirmed Google Ads conversion webpage; 20 recorded events | `noindex,follow`; exact self-canonical |
| `/contact-thank-you-online` | Confirmed Google Ads conversion webpage; one recorded event | `noindex,follow`; exact self-canonical |
| `/contact-thank-you-online-1` | No conversion evidence; consolidated to the confirmed online route | One-hop 301 to `/contact-thank-you-online` |
| `/google-ads-lander` | Historical paid destination used before conversion tracking existed | One-hop 301 to `/workplace-yoga-australia` |

The machine-readable authority is `config/phase-11-5-4-route-decisions.json`.

## 3. Tracking and operational continuity

- Restored production-only loading for Google Tag Manager container `GTM-PXV5ZCLG`.
- Restored production-only loading for Google Analytics measurement ID `G-7GY152D942`.
- Kept tracking disabled in local and Vercel Preview environments to avoid polluting production reporting.
- Preserved both evidenced thank-you URLs exactly so the existing webpage conversion action can continue to match.
- Integrated HubSpot portal `14575795`, form `746ef219-510f-4faa-a7a3-40288155d936` (`CYA - Plan with CYA - Website planning enquiry`).
- Routes successful general enquiries to `/contact-thank-you` and Wellbeing Studio enquiries to `/contact-thank-you-online`.
- Captures HubSpot visitor context, GCLID/GBRAID/WBRAID and UTM parameters across the session and submits them with source-page context.
- Emits `cya_lead_submission` once per successful browser submission for governed GTM configuration; direct thank-you-page visits do not emit this custom event.
- Updated the Cromwell hand-off to `https://studio.corporateyoga.com.au/login/signup.php`.
- Removed the ineffective legacy browser-storage pattern. Employee details cannot pass through `sessionStorage` to a separate domain, so the preserved registration page now sends users directly to the secure Studio signup process.

Google Ads configuration evidence confirms a primary Website conversion action named `Submit Lead Form - Thankyou Page`, created 16 February 2026, counted once, with data-driven attribution and the two protected CYA thank-you webpages. Google reports enhanced-conversion setup issues, and three of 24 historical events occurred on a Squarespace administration URL; historical platform totals therefore cannot be treated as verified leads.

## 4. Verification evidence

| Gate | Evidence | Result |
|---|---|---|
| Source/search architecture | 466 automated route, HubSpot, attribution and conversion-signal checks | PASS |
| ESLint | No findings | PASS |
| TypeScript | `tsc --noEmit` | PASS |
| Next.js production build | Next.js 16.3.3; 42 static/dynamic outputs generated | PASS |
| Rendered production HTTP | 275 production-server checks covering routes, redirects, validation, honeypot containment, tracking IDs, sitemap and robots | PASS |
| Production dependency security | `npm audit --omit=dev` — 0 vulnerabilities | PASS |
| React quality review | New campaign routes remain static Server Components; the only unnecessary client-side storage pattern was removed | PASS |
| Fresh local browser visual check | Browser bootstrap attempted; Chrome download was blocked by the execution environment certificate chain | NOT COMPLETED |
| Fresh hosted browser check | No Phase 11.5.4 preview has been qualified | BLOCKED |
| Google Ads conversion configuration | Landing-page exports plus conversion details/settings/webpages supplied and reconciled | PASS WITH TRACKING-QUALITY WARNING |
| Public enquiry submission | Authorised HubSpot endpoint and governed success routing integrated; no production CRM write performed during automated QA | PASS AT CODE/HTTP BOUNDARY |
| HubSpot notification/live submission | Deb-only notification and one controlled production submission not yet verified | BLOCKED |
| Google Ads campaign status | Screenshot shows Enabled/Eligible although Deb believed the campaign was paused | BLOCKED PENDING OWNER CHECK |

## 5. Full-story flow status

| Boundary | Status | Evidence |
|---|---|---|
| Campaign URL → rendered page | PASS | All ten noindex campaign/utility routes return 200 with exact self-canonicals |
| Registration entry → Studio | PASS at code/HTTP level | Route renders a direct action to the live Studio signup URL |
| Thank-you route → tracking loader | PASS at rendered-code level | Exact evidenced routes render and production HTML contains the existing GTM and GA identifiers |
| Ad click → attribution context | PASS at code level | Google click IDs and UTM values persist in same-origin session storage and are submitted to HubSpot |
| Form → real lead capture | PASS at code/HTTP boundary | Validated server route submits to the authorised HubSpot form and rejects invalid/cross-origin requests |
| Real lead → thank-you redirect/conversion | NOT YET LIVE-VERIFIED | Requires one controlled real submission after Deb-only notification is confirmed |

Verification now stops at the live-business boundary. Automated QA deliberately avoids creating a real CRM contact or notifying Deb. That single controlled test must be performed on the hosted candidate.

## 6. Launch gate result

### Gate A — route and crawl continuity

**PASS.** Route preservation, canonicals, noindex controls, sitemap exclusion and redirect non-interference are implemented and automated.

### Gate B — conversion continuity

**CONDITIONAL PASS.** Google Ads rules, exact evidenced thank-you routes and the production form path are integrated. A controlled live form-to-HubSpot-to-thank-you test remains mandatory.

### Gate C — hosted browser

**BLOCKED.** A fresh preview must be tested on desktop and mobile, including keyboard access, campaign CTAs and the Cromwell hand-off.

### Gate D — production release

**NOT AUTHORISED.** No production promotion or DNS change may occur without an explicit later approval.

## 7. Inputs required to close Phase 11.5.4

1. Verify the HubSpot form sends submission notifications to Deb only.
2. Run one controlled hosted submission and confirm: HubSpot submission/contact, Deb notification, correct success route and exactly one `cya_lead_submission` event.
3. Confirm whether `Corporate Yoga Australia – Lead Gen Yoga – Jan 2026` should be enabled or paused; do not rely on the selected report dates.
4. Repair or deliberately defer the Google Ads enhanced-conversion setup issue and exclude preview/admin activity from measurement.
5. Complete a fresh hosted desktop/mobile/keyboard qualification.
6. Obtain explicit production approval only after the launch gate reports ready.

## 8. Current release instruction

**Do not deploy to production. Do not promote. Do not change DNS.**

Push the qualified branch for a hosted preview. Before any production promotion, verify Deb-only HubSpot notification settings, perform one controlled lead submission, complete hosted browser QA, confirm the intended Google Ads campaign state and rerun the launch gate.
