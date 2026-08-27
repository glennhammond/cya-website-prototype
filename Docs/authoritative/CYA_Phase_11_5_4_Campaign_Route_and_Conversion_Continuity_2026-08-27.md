# CYA SEO — Phase 11.5.4 Campaign Route & Conversion Continuity

**Date:** 27 August 2026

**Branch:** `phase-11-5-3-production-seo`

**Authority:** Owner route classification supplied 27 August 2026

**Qualification result:** **BLOCKED — route continuity implemented; conversion and enquiry plumbing still require verification**

## 1. Executive decision

Every identified campaign, operational-registration and thank-you URL is now preserved as an exact 200 route. No speculative campaign redirect has been introduced.

The campaign variants, Cromwell registration route and thank-you routes are `noindex,follow`, self-canonical and absent from the XML sitemap. `/online-wellbeing` remains the indexable canonical service page.

The production candidate is not launch-qualified yet. Google Ads conversion configuration has not been inspected, the public enquiry form still simulates submission rather than sending a lead, and fresh hosted browser QA has not been completed.

No production deployment, Vercel promotion or DNS change has been performed.

## 2. Route outcomes implemented

| Route/group | Outcome | Search treatment |
|---|---|---|
| `/workplace-yoga-australia` | Preserved as the Google Ads workplace-yoga landing route | `noindex,follow`; exact self-canonical |
| `/online-wellbeing` | Preserved as the substantive canonical service | Indexable; present in sitemap |
| Four Online Wellbeing campaign variants | Preserved as exact campaign-continuity routes | `noindex,follow`; exact self-canonicals |
| `/2026-wellbeing-program-1` | Preserved as an exact campaign-specific route | `noindex,follow`; exact self-canonical |
| `/program-registration` | Preserved as the Cromwell operational entry point | `noindex,follow`; exact self-canonical |
| Three thank-you routes | Preserved as exact conversion-continuity destinations | `noindex,follow`; exact self-canonicals |

The machine-readable authority is `config/phase-11-5-4-route-decisions.json`.

## 3. Tracking and operational continuity

- Restored production-only loading for Google Tag Manager container `GTM-PXV5ZCLG`.
- Restored production-only loading for Google Analytics measurement ID `G-7GY152D942`.
- Kept tracking disabled in local and Vercel Preview environments to avoid polluting production reporting.
- Preserved each thank-you URL exactly so existing page-view conversion rules can continue to match if configured that way.
- Updated the Cromwell hand-off to `https://studio.corporateyoga.com.au/login/signup.php`.
- Removed the ineffective legacy browser-storage pattern. Employee details cannot pass through `sessionStorage` to a separate domain, so the preserved registration page now sends users directly to the secure Studio signup process.

Tracking code continuity does not prove conversion continuity. The Google Ads **Goals → Conversions** configuration still needs to be checked for exact URL rules, tag firing and attribution settings.

## 4. Verification evidence

| Gate | Evidence | Result |
|---|---|---|
| Source/search architecture | 456 automated checks | PASS |
| ESLint | No findings | PASS |
| TypeScript | `tsc --noEmit` | PASS |
| Next.js production build | Next.js 16.3.3; 42 static/dynamic outputs generated | PASS |
| Rendered production HTTP | 273 checks covering 200s, canonicals, noindex, redirects, tracking IDs, sitemap and robots | PASS |
| Production dependency security | `npm audit --omit=dev` — 0 vulnerabilities | PASS |
| React quality review | New campaign routes remain static Server Components; the only unnecessary client-side storage pattern was removed | PASS |
| Fresh local browser visual check | Browser bootstrap attempted; Chrome download was blocked by the execution environment certificate chain | NOT COMPLETED |
| Fresh hosted browser check | No Phase 11.5.4 preview has been qualified | BLOCKED |
| Google Ads conversion configuration | Landing Pages export and Goals/Conversions evidence not yet supplied | BLOCKED |
| Public enquiry submission | `ConsultationForm` still uses simulated success/failure states and sends no lead | BLOCKED |

## 5. Full-story flow status

| Boundary | Status | Evidence |
|---|---|---|
| Campaign URL → rendered page | PASS | All ten noindex campaign/utility routes return 200 with exact self-canonicals |
| Registration entry → Studio | PASS at code/HTTP level | Route renders a direct action to the live Studio signup URL |
| Thank-you route → tracking loader | PASS at rendered-code level | Exact routes render and production HTML contains the existing GTM and GA identifiers |
| Ad click/form → real lead capture | FAIL | Public consultation form contains no server, HubSpot or other production submission request |
| Real lead → thank-you redirect/conversion | NOT VERIFIABLE | No production form response and no Google Ads conversion configuration evidence |

Verification stops at the first broken business-flow boundary: the public enquiry form does not submit a lead. Hosted visual and Google Ads evidence are still required after that implementation is resolved.

## 6. Launch gate result

### Gate A — route and crawl continuity

**PASS.** Route preservation, canonicals, noindex controls, sitemap exclusion and redirect non-interference are implemented and automated.

### Gate B — conversion continuity

**BLOCKED.** Exact thank-you URLs and tracking loaders exist, but Google Ads rules and real form-to-thank-you behaviour are unverified.

### Gate C — hosted browser

**BLOCKED.** A fresh preview must be tested on desktop and mobile, including keyboard access, campaign CTAs and the Cromwell hand-off.

### Gate D — production release

**NOT AUTHORISED.** No production promotion or DNS change may occur without an explicit later approval.

## 7. Inputs required to close Phase 11.5.4

1. Google Ads Landing Pages export and **Goals → Conversions** screenshots or equivalent configuration evidence.
2. The authorised production form destination and credentials/configuration already intended for this project, most likely the relevant HubSpot form or API workflow.
3. A fresh hosted preview qualification after the form path is implemented.
4. Explicit production approval only after the launch gate reports ready.

## 8. Current release instruction

**Do not deploy to production. Do not promote. Do not change DNS.**

The safe next implementation step is the real enquiry submission and thank-you redirect path. Once its destination is supplied, integrate it, run a new production build and rendered suite, qualify the hosted preview, compare the thank-you behaviour with Google Ads conversion rules, and then rerun the launch gate.
