# CYA Website — Phase 11.4 Hosted Browser QA Closure

**Date:** 26 August 2026  
**Status:** PASS  
**Environment:** Vercel preview, branch `phase-11-3-search-authority`

## Human/browser checks completed

The hosted preview was reviewed on desktop and mobile before production cutover.

### Desktop

- Home loaded with correct logo, navigation, hero, typography, imagery and consultation CTA.
- Services dropdown opened correctly without clipping or overflow.
- Qualified service destinations were present and readable.

### Mobile

- Home rendered correctly at approximately 412px viewport width.
- Header, logo, hero, CTA and first content sections showed no blocking overflow or layout failure.
- Initial mobile navigation test exposed a genuine blocker: the menu panel was clipped because a viewport-fixed panel was being contained by the header's backdrop-filter containing block.
- The implementation was corrected by rendering the open mobile navigation panel through a React portal to `document.body`.
- Corrected commit: `795079fac3171dac28046ac30b7b42c426dfe97f`.
- Corrected Vercel deployment: `dpl_2FD3gkjf61iRqvNE3ZoEGviyh9WT` — READY.
- GitHub production QA on the corrected implementation passed dependency audit, search QA, lint, production build and rendered HTTP smoke.
- The corrected mobile menu was re-tested at approximately 412px and displayed the full navigation, service children, Member access and consultation CTA without clipping.
- Selecting Workplace Yoga closed the menu and routed correctly.
- Workplace Yoga rendered cleanly on mobile with breadcrumbs, responsive hero, service claims and CTAs intact.
- `Discuss a Yoga Session` correctly continued into the Contact journey with one-off-session context preserved.
- Contact form fields, select controls, textarea, optional fields and delivery-mode controls rendered without blocking overflow at mobile width.

### Keyboard/focus

Human keyboard-only verification confirmed:

- visible focus indication while tabbing;
- hamburger trigger operable from the keyboard;
- menu operable using keyboard activation;
- Escape closes the menu;
- focus returns appropriately to the menu trigger.

## Result

`hostedBrowserQaPassed` is authorised as **true**.

No remaining hosted-browser/UX launch blocker was identified during this qualification pass.

Non-blocking polish observations may be handled after launch, including future hero-image/crop refinement and minor mobile copy/contrast tuning where useful.

---

**Decision:** Phase 11.4 hosted browser QA gate is closed. Production cutover remains governed by the final launch-readiness gate and migration runbook.
