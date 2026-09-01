# CYA Production Application 02 — Phase 06A Release Map

**Status:** BASELINE COMPLETE — safe production work underway  
**Date:** 2 September 2026  
**Working branch:** `feat/cya-production-application-02`  
**Base authority commit:** `c75633e9ad79b7e721de22c92a888ceab0e56b31` (`feat/work-wellness-territory-02`)

## 1. Authority reconciliation

This release map preserves the approved hierarchy rather than reopening strategy.

Website architecture authority governs canonical pages, URL ownership, page-family jobs and search separation. Current creative authority governs the expression of those jobs through **Workday, Interrupted** and the behaviour **WORK CONTEXT → NOTICE → USEFUL ACTION → RETURN**.

The website pattern rule remains: **repeat the grammar; vary the composition**. A Workday Window, Observed Workday Headline, Human Signal or Time Cue is used only where it adds meaning. No universal component or mandatory treatment has been introduced.

## 2. Verified priority-page baseline

| Priority | Verified page | Canonical URL | Current state | Production gap / dependency | Release status |
|---|---|---|---|---|---|
| 1 | Home | `/` | Implemented in Next.js; metadata, H1, broad service orientation, situation-led entry, proof, services, continuity and Contact pathways present | Current hero file is used directly rather than through the governed `media.ts` register; final commissioned still/motion remains desirable. Hosted preview is protected by Vercel SSO, preventing a trustworthy rendered browser pass. | **Code/build ready; browser gate pending** |
| 2 | Workplace Wellbeing Programs | `/workplace-wellbeing-programs` | Strong procurement page with program composition, delivery contexts, participation, reporting, FAQ and Contact path | Cromwell-specific case-study image still required if the named Cromwell section is retained as a fully evidenced proof expression. Hybrid/multi-site photography remains weak. | **Code/build ready; proof-image dependency remains** |
| 3 | Workplace Wellbeing Workshops & Expert Experiences | `/workplace-wellbeing-workshops` | Canonical service/expert page. Earlier review placeholder referenced a non-existent image candidate. | Named expert evidence remains conditional on real expert information/permission. | **Production image fixed; build ready** |
| 4 | Workshop Monthly | **No governed canonical URL verified** | No Next.js route; absent from locked canonical commercial architecture; current public material uses monthly workshops/themes within broader offers rather than proving a standalone canonical page. | Requires a governed decision on page job, canonical URL, offer truth, search role, relationship to `/workplace-wellbeing-workshops`, and whether it is campaign/landing content rather than a canonical commercial page. | **Blocked by page-definition decision — do not invent route** |

## 3. Implemented safe production changes

### Home

Commit `129a85c2eff0895086baaf451e03a3a804857e13`

- preserved the approved H1 **Work Wellness into Your Workday**;
- preserved SEO metadata, information architecture and conversion paths;
- introduced the approved observed-workday line **The day was already full** within the homepage image expression;
- surfaced the human expression **What would help you right now?** at the situation-led decision point;
- removed public-facing shorthand uses of “CYA” from the revised copy;
- added no motion, so no new reduced-motion dependency was created.

Vercel build: **READY**.

### Workplace Wellbeing Workshops

Commit `7078a008b132dcf35ccf1feb3fabe7a55859d414`

- removed the review-only image-direction placeholder;
- replaced the non-existent candidate path with the governed, rights-cleared workplace Lunch & Learn image;
- strengthened the real-workday expression without cloning the homepage composition;
- retained topic-led discovery, expert credibility, service clarity and Contact conversion;
- made the hero CTAs stack safely on narrow screens.

Vercel build: **READY**.

### Workplace Wellbeing Programs

Commit `ff7b151f16c814d72d7a7ad8d013740c7c1033ee`

- retained the procurement-first hierarchy and search ownership;
- added a restrained work-context caption rather than duplicating the homepage treatment;
- removed forced no-wrap heading/body behaviour that could impair zoom/reflow;
- replaced an ungoverned participation image path with the governed `programsContinuity` asset;
- retained the explicit temporary Cromwell-image note rather than implying unsupported client-specific photography.

## 4. Photography dependencies exposed by the real pages

### Launch-critical

1. **Home hero / Workday Window** — current image is visually useful but should either be brought into the governed rights register or replaced with a new rights-cleared hero still/motion pair before final launch approval.
2. **Cromwell proof image** — if the named Cromwell program proof remains, use genuinely Cromwell-specific, permission-cleared photography rather than a representative image.

### High-value but not necessarily launch-blocking

3. **Hybrid work** — one frame that genuinely shows in-room and remote participation together.
4. **Multi-site / distributed work** — stronger visual evidence of coordination across different workplace contexts.
5. **Workday human signals** — hands, screens, posture, listening, note-taking, desk transitions and return-to-task details suitable for flexible crops.
6. **Still + motion continuity** — short documentary sequences that show work context, notice, useful action and credible return rather than a standalone wellness pose.

### Already adequately covered for the priority pages

7. Workshop / Lunch & Learn group photography has a governed usable asset and is not a first-order shoot gap.
8. Operational/high-vis and general facilitated-group imagery exist, though the pilot can improve resolution and compositional flexibility.

## 5. Content, proof and business decisions

| Decision | Consequence | Owner/action |
|---|---|---|
| Define **Workshop Monthly** | Determines whether any new route/page should exist and prevents cannibalising the governed Workshops destination | CYA governed website/content decision |
| Confirm current homepage hero usage rights/register status | Required to call the exact current hero launch-cleared | Add asset to governed media register with evidence, or replace with governed/new pilot asset |
| Confirm Cromwell image permission and suitable source | Removes explicit representative-image qualifier from Programs | Obtain and clear Cromwell-specific asset, or change proof presentation |
| Confirm named experts to publish | Workshops authority can become substantially stronger without invented profiles | Use only current experts with verified credentials, role wording and permission |

## 6. Technical and release blockers

### Current production branch

- Vercel compilation/deployment is passing.
- Vercel preview protection currently returns an SSO redirect, including through authenticated deployment fetch. This prevents a truthful hosted rendered-page browser gate for desktop/tablet/mobile at this moment.
- No new essential motion has been introduced.

### Existing formal go-live gate

The open RC04 release process still governs production cutover. Outstanding items there include legal approval, WAF/rate limiting, controlled HubSpot staging verification, full browser/device/accessibility qualification, performance/Core Web Vitals, conversion verification and production-domain migration/rollback checks. This workstream does not silently bypass those gates.

## 7. Recommended implementation sequence

1. Finish Home code treatment and preserve it as the family reference — **done at code/build level**.
2. Resolve Workshops review-image placeholder and establish its distinct supporting-page expression — **done at code/build level**.
3. Refine Programs for work context, governed imagery and reflow safety — **done at code level; build confirmation follows**.
4. Do **not** build Workshop Monthly until its governed page role is defined.
5. Translate the remaining Home/Programs/Workshops image dependencies into the Photography & Motion Pilot — Phase 06D.
6. Complete pilot rights, permissions, production coverage, asset workflow and cost options — Phase 06E.
7. When preview browser access is available, run the deferred rendered qualification across desktop, tablet, mobile, keyboard, zoom/reflow and reduced-motion equivalence.
8. Feed the qualified branch into the existing RC04 release-integration process rather than merging straight to `main`.
