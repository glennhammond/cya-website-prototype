# CYA SEO — Phase 11.5.3 Production Integration, Redirect Resolution & Launch Qualification

**Date:** 27 August 2026  
**Branch:** `phase-11-5-3-production-seo`  
**Authority:** Phase 11.5.2 Launch SEO Intervention Pack  
**Qualification result:** **BLOCKED — business route confirmation required; production deployment not authorised**

## 1. Executive decision

The production source is technically integrated and healthy. Phase 11.5.3 is not yet launch-qualified because the current owner/use state of the Google Ads, Online Wellbeing, program-registration and thank-you routes has not been confirmed.

This is a deliberate safety stop. Redirecting or removing those routes without checking ads, emails, QR codes, registrations and active client journeys could break paid traffic or conversion flows.

No production deployment, Vercel promotion or DNS change has been performed.

## 2. Production integration completed

- Applied governed titles, descriptions and H1 ownership to Home, Workplace Yoga, Workplace Pilates, Meditation & Mindfulness, Workplace Wellbeing Programs, Movement and Workplace Wellbeing Workshops.
- Preserved Home as the broad corporate-yoga authority while retaining direct rendered links to the five primary service destinations.
- Added the governed `/expert-experiences` canonical service route with unique content, Service schema and internal links.
- Established `/about` as the canonical organisation route and changed `/about-us` to a one-hop permanent redirect.
- Added locked redirects for obsolete About, services and facilitator paths.
- Removed unapproved redirect rules for `/workplace-yoga-australia` and `/online-wellbeing-2026` pending owner confirmation.
- Strengthened Programs-to-Pilates, Programs-to-Expert-Experiences and governed article-to-service links.
- Updated the canonical search architecture, sitemap and navigation.
- Added a machine-readable Phase 11.5.3 route-decision register.
- Upgraded permanent source, rendered and launch-readiness automation to Phase 11.5.3 authority.

## 3. Locked redirect qualification

| Source | Final destination | Result |
|---|---|---|
| `/home` | `/` | PASS — 301, one hop |
| `/about-us` | `/about` | PASS — 301, one hop |
| `/personalised-wellbeing-programs` | `/workplace-wellbeing-programs` | PASS — 301, one hop |
| `/old-about-2` | `/about` | PASS — 301, one hop |
| `/old-bespoke-services` | `/workplace-wellbeing-programs` | PASS — 301, one hop |
| `/old-services` | `/workplace-wellbeing-programs` | PASS — 301, one hop |
| `/what-we-offer` | `/workplace-wellbeing-programs` | PASS — 301, one hop |
| `/our-instructors` | `/about` | PASS — 301, one hop |

Previously qualified backlink-preservation routes such as `/getting-started` → `/` and `/our-classes` → `/movement` remain intact and one hop.

## 4. Verification evidence

| Gate | Evidence | Result |
|---|---|---|
| Production dependency security | `npm audit --omit=dev --audit-level=high` — 0 vulnerabilities | PASS |
| Source/search architecture | 363 automated checks | PASS |
| ESLint | No findings | PASS |
| TypeScript | `tsc --noEmit` | PASS |
| Next.js production build | Next.js 16.3.3; 32 static pages generated | PASS |
| Rendered production HTTP | 219 checks covering 200s, canonicals, noindex controls, schemas, redirects, sitemap and robots | PASS |
| React quality review | New routes remain static Server Components; no unnecessary client state, waterfalls or bundle-heavy dependencies introduced | PASS |
| Fresh browser visual check | Local browser binary unavailable; Chrome download was blocked by the execution environment's certificate chain | NOT COMPLETED |
| Campaign/registration ownership | Route owners and active sources not yet confirmed | BLOCKED |

The existing Phase 11.4 hosted desktop/mobile/keyboard qualification remains valid for unchanged components and layouts. A short hosted visual re-check is still required for the new `/about` and `/expert-experiences` route outcomes before deployment.

## 5. Campaign and utility decision queue

The following routes remain explicitly unresolved and are not authorised for speculative redirect or retirement:

- `/workplace-yoga-australia`
- `/online-wellbeing`
- `/online-wellbeing-1`
- `/online-wellbeing-2026`
- `/online-wellbeing-landing-page`
- `/online-wellbeing-learn-more-here`
- `/2026-wellbeing-program-1`
- `/program-registration`
- `/contact-thank-you`
- `/contact-thank-you-online`
- `/contact-thank-you-online-1`

For each route, the owner must identify any active Google Ads destination, email/QR link, registration workflow, form success dependency, current users, traffic or meaningful backlink. The permitted outcomes are:

1. preserve as an active noindex route;
2. replace with an equivalent active route and update every source link;
3. one-hop 301 to the closest permanent service after closure; or
4. 410 only where there is no user, traffic, link or valid successor.

## 6. Launch gate result

### Gate A — pre-deployment

**BLOCKED.** Technical integration passes. Campaign/registration ownership and a final hosted visual re-check remain open.

### Gate B — production HTTP

**PASS on the local production candidate.** Public-host qualification cannot occur until an authorised deployment exists.

### Gate C — browser

**PARTIAL.** Rendered HTML and crawlable anchors pass. Fresh hosted desktop/mobile visual confirmation remains open.

### Gate D — search

**NOT STARTED.** This is post-deployment work: sitemap submission, GSC inspection and timestamp/deployment annotation.

## 7. Required human inputs

Glenn or the current campaign owner needs to provide only:

1. which decision-queue routes are still active, and where each is referenced; and
2. explicit approval before any production promotion or DNS cutover.

All remaining code, redirect implementation, automated requalification and PR preparation can proceed autonomously after item 1 is supplied.

## 8. Current release instruction

**Do not deploy. Do not promote the earlier Phase 11.4 Vercel candidate. Do not change DNS.**

Phase 11.5.3 changes production-runtime files, so the earlier runtime-equivalent Phase 11.4 deployment is no longer the release candidate. After the route decisions are closed, create a fresh Vercel preview from the Phase 11.5.3 head, run the hosted browser re-check, obtain explicit production approval, then follow the governed cutover runbook.
