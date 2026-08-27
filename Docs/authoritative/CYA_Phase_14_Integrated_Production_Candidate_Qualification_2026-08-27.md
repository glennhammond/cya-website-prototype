# CYA Website — Phase 14 Integrated Production Candidate Qualification

**Date:** 27 August 2026  
**Branch:** `phase-14-integrated-production-candidate`  
**Qualified commit:** `01834a717f36090d16d9dcf4af6b2bb57ef84293`  
**Vercel deployment:** `dpl_BuJdWTRT7teU3V6RwXC7QjUSbsZe`  
**Qualification result:** **BLOCKED — hosted desktop passes; fresh narrow-screen visual confirmation remains**

## 1. Candidate authority

This branch reconciles the Phase 13 Next.js production design with the later Phase 11.5.4 campaign-route, Google Ads, HubSpot and conversion-continuity implementation. Its remote Git tree is byte-for-byte identical to the locally qualified tree.

The candidate is a Vercel Preview only. The current Squarespace site, production Vercel target and DNS have not been changed.

## 2. Integrated technical qualification

| Gate | Result |
|---|---|
| ESLint | PASS |
| TypeScript | PASS |
| Phase 11.5.4 source/search QA | PASS — 472 checks |
| Next.js production build | PASS — 42 routes |
| Rendered production HTTP smoke | PASS — 275 checks |
| Production dependency audit | PASS — 0 vulnerabilities |
| Vercel preview build | PASS — READY |
| Vercel preview runtime warnings/errors | PASS — none recorded |

## 3. Hosted desktop/browser evidence

Fresh hosted checks were performed against the exact deployment for commit `01834a7`, not an earlier prototype alias.

The following routes rendered with one H1, the governed production canonical, the shared header/footer and no horizontal overflow:

- `/workplace-yoga`
- `/workplace-pilates`
- `/meditation-mindfulness`
- `/workplace-wellbeing-programs`
- `/movement`
- `/workplace-wellbeing-workshops`
- `/about`
- `/expert-experiences`
- `/workplace-yoga-australia`
- `/online-wellbeing`
- `/program-registration`
- `/contact`
- `/contact-thank-you`
- `/contact-thank-you-online`

Additional hosted journey checks:

- Home and priority pages render the Phase 13 design system and production imagery.
- The Services menu opens by keyboard and closes with Escape.
- `/workplace-yoga-australia` remains reachable, uses the current design and renders `noindex, follow`.
- Its consultation CTA reaches `/contact?interest=one-off`, with `one-off` selected in the enquiry form.
- `/program-registration` links directly to `https://studio.corporateyoga.com.au/login/signup.php`.
- `/contact` renders the real integrated enquiry form.
- Both governed thank-you routes remain reachable and render `noindex, follow`.
- Browser console findings were limited to the browser-control extension; no application-origin errors were observed.
- Vercel reported no preview runtime warnings, errors or fatal logs during the qualification window.

## 4. Owner and live-business decisions already closed

- Google Ads campaign owner decision: **paused**.
- HubSpot notification owner decision: **Deb only**.
- The controlled launch enquiry reached HubSpot's spam review and was released by Glenn.
- The general and online success routes remain `/contact-thank-you` and `/contact-thank-you-online` respectively.

Google Ads enhanced conversions still reports a setup warning. This is a measurement-quality warning, not a website-release blocker.

## 5. Remaining blocker

`phase1154HostedBrowserQaPassed` remains `false` because this fresh integrated deployment has not yet received an independently observed narrow-screen/mobile visual pass. Desktop rendering, keyboard behaviour, hosted routing, crawl controls and runtime health pass.

Do not mark the Phase 11.5.4 hosted-browser gate complete until the preview has been checked at a phone-width viewport for:

- Home header/menu and hero;
- Workplace Yoga;
- the consultation form;
- the Google Ads landing page;
- Cromwell registration hand-off;
- both thank-you routes;
- absence of horizontal overflow or clipped controls.

## 6. Release instruction

**Do not merge, promote to Vercel Production, replace Squarespace or change DNS yet.**

Once the narrow-screen check passes, set `phase1154HostedBrowserQaPassed` to `true`, rerun `npm run qa:launch`, commit the evidence closure and request explicit production-cutover approval.
