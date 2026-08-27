# CYA Website — Phase 14 Integrated Production Candidate Qualification

**Date:** 27 August 2026  
**Branch:** `phase-14-integrated-production-candidate`  
**Qualified runtime commit:** `5883b0285296d99f13eda4e6ad478e3d3237e826`

**Vercel deployment:** `dpl_81UmMu6nNkiJJ2fcSAfT7aYN3kGw`
**Qualification result:** **PASS — integrated production candidate is launch-ready; production cutover remains separately authorised**

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
| Rendered production HTTP smoke | PASS — 277 checks |
| Production dependency audit | PASS — 0 vulnerabilities |
| Vercel preview build | PASS — READY |
| Vercel preview runtime warnings/errors | PASS — none recorded |

## 3. Hosted desktop/browser evidence

Fresh hosted checks were performed against the exact integrated deployment and repeated against the repaired deployment for commit `5883b02`, not an earlier prototype alias.

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

## 4. Mobile remediation and closure

Glenn's first phone-width review correctly failed the candidate. It identified:

- horizontal page movement caused by mobile overflow;
- an oversized mobile logo/header composition;
- a mobile-menu `Plan with CYA` action that did not close the overlay and navigate reliably;
- an enquiry page with excessive pre-form content and an unnecessarily long field set;
- a stale/mismatched preview returning the generic 404 for `/workplace-yoga-australia`.

Commit `5883b02` corrected the mobile header sizing and overflow containment, closed the menu before CTA navigation, reduced the website form to the authorised HubSpot planning fields, and retained the Google Ads landing route. The repaired preview passed build, source, rendered, security, browser-console and Vercel-runtime checks.

Glenn completed the independent phone-width recheck and recorded **Mobile pass** on 28 August 2026. This closes `phase1154HostedBrowserQaPassed` as `true`.

## 5. Owner and live-business decisions already closed

- Google Ads campaign owner decision: **paused**.
- HubSpot notification owner decision: **Deb only**.
- The controlled launch enquiry reached HubSpot's spam review and was released by Glenn.
- The general and online success routes remain `/contact-thank-you` and `/contact-thank-you-online` respectively.

Google Ads enhanced conversions still reports a setup warning. This is a measurement-quality warning, not a website-release blocker.

## 6. Remaining release control

All Phase 11.5.4 launch-readiness gates now pass. The Google Ads enhanced-conversions warning and withheld Case Studies publication remain controlled, non-blocking warnings.

Production cutover is a separate destructive release action and remains unauthorised until Glenn explicitly approves the merge/promotion and Squarespace/DNS transition.

## 7. Release instruction

**Do not merge, promote to Vercel Production, replace Squarespace or change DNS yet.**

The candidate is qualified for the next governed phase: production-cutover planning and explicit release approval.
