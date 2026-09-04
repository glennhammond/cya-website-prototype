# CYA Production Application 02 — Phase 06A Release Map

**Status:** BASELINE COMPLETE — safe production work underway  
**Reconciled:** 4 September 2026  
**Working branch:** `feat/cya-production-application-02`  
**Current implementation reference:** `bc0390bfe970f63318fa75f08c99111c7952d5ac`

## 1. Authority reconciliation

This release map preserves the approved hierarchy rather than reopening strategy.

Website architecture authority governs canonical pages, URL ownership, page-family jobs, search separation and conversion pathways. Current creative authority governs the expression of those jobs through **Workday, Interrupted** and the behaviour **WORK CONTEXT → NOTICE → USEFUL ACTION → RETURN**.

Current Figma homepage authority is **CYA Homepage — Art Direction v2.0**, desktop node `311:10` and mobile node `311:11` in **CYA Website 2027 — Production · Experience · Authority**. Figma is being treated as the current visual and hierarchy authority while the implemented information architecture, SEO ownership and useful production UX remain governed by the website/search authorities.

The website pattern rule remains: **repeat the grammar; vary the composition**. A Workday Window, Observed Workday Headline, Human Signal or Time Cue is used only where it adds meaning. No universal component or mandatory treatment has been introduced.

## 2. Verified priority-page baseline

| Priority | Verified page | Canonical URL | Current state | Production gap / dependency | Release status |
|---|---|---|---|---|---|
| 1 | Home | `/` | Implemented in Next.js; metadata, H1, situation-led entry, proof, service pathways, continuity and Contact pathways present. Current Figma hero hierarchy has been reconciled into production. | Current hero image `/images/selected/cya-home-hero-debby-workplace-movement.jpg` is visually approved in the current design direction but is not yet represented as a governed `media.*` asset in the 26 August photography clearance register. Hosted preview is protected by Vercel SSO, preventing a trustworthy interactive browser pass from the current tool environment. | **Code/build ready; image-governance and browser gates pending** |
| 2 | Workplace Wellbeing Programs | `/workplace-wellbeing-programs` | Strong procurement page with program composition, delivery contexts, participation, reporting, FAQ and Contact path. | Cromwell-specific case-study image remains required if the named Cromwell proof is retained as a fully evidenced expression. Hybrid/multi-site photography remains comparatively weak. | **Code/build ready; proof-image dependency remains** |
| 3 | Workplace Wellbeing Workshops & Expert Experiences | `/workplace-wellbeing-workshops` | Canonical workshops/expert-experiences destination with clear service role, governed Lunch & Learn image, topic-led discovery and conversion path. | Named expert evidence is conditional on real names, credentials, role wording and publication permission. | **Code/build ready; browser gate pending** |
| 4 | Workshop Monthly | **No governed canonical URL verified** | No Next.js route and no entry in the locked Search Architecture. | Requires a governed decision on page job, canonical URL, evergreen/current offer truth, search role, relationship to `/workplace-wellbeing-workshops`, and whether it is campaign/landing content rather than a canonical commercial page. | **Controlled hold — do not invent route** |

## 3. Safe production change completed during this reconciliation

### Home hero conversion hierarchy

Commit `bc0390bfe970f63318fa75f08c99111c7952d5ac`

Current Figma authority places **Explore workplace wellbeing programs** as the lead hero action and **Start planning** as the secondary desktop action, with the program action alone on mobile.

Production now matches that hierarchy:

- primary: **Explore workplace wellbeing programs** → `/workplace-wellbeing-programs`;
- secondary desktop: **Start planning** → `/contact`;
- mobile hero: program CTA only;
- the existing lighter hero, current workplace photograph, locked H1, information architecture and Workday, Interrupted grammar remain intact.

No essential motion has been introduced.

Vercel deployment for this implementation commit: **READY**. Pre-launch release controls, compilation, TypeScript and static-page generation all pass.

## 4. Current homepage reconciliation notes

The current Figma page includes an immediate brand-belief transition and a horizontal-swipe mobile treatment for the six planning options. Those are art-direction references, not instructions to replace useful production UX mechanically.

The production homepage currently retains:

- the approved two-line desktop H1 and natural mobile H1;
- the current Deb/workplace hero image and light-led composition;
- the explicit **Workday moment → Useful interruption → Return** grammar strip;
- the six approved planning options as a direct decision list;
- a Human Signal detail within the direct experience pathway;
- semantic clarification of Work Wellness;
- Wellbeing Studio continuity;
- proof and final planning conversion.

This remains consistent with 05F: governed grammar is repeated while composition is allowed to vary.

## 5. Photography dependencies exposed by the real pages

### Launch-critical

1. **Home hero publication governance** — the current hero file should be explicitly added to the governed photography register with supporting approval evidence, or replaced with an already governed/new commissioned asset before final launch approval.
2. **Cromwell proof image** — if the named Cromwell program proof remains, use genuinely Cromwell-specific, permission-cleared photography rather than a representative image.

### High-value pilot gaps

3. **Hybrid work** — one frame that genuinely shows in-room and remote participation together.
4. **Multi-site / distributed work** — stronger visual evidence of coordination across different workplace contexts.
5. **Workday Human Signals** — hands, screens, posture, listening, note-taking, desk transitions and return-to-task details suitable for flexible crops.
6. **Still + motion continuity** — documentary sequences that show work context, notice, useful action and credible return rather than a standalone wellness pose.
7. **Copy-safe and crop-safe coverage** — landscape, portrait, square and vertical-safe variants from the same genuine workday moments.

### Already adequately covered for these priority pages

8. Workshop / Lunch & Learn group photography has a governed usable asset and is not a first-order shoot gap.
9. Operational/high-vis and general facilitated-group imagery exist, though the pilot should improve compositional flexibility and return-to-work coverage.

## 6. Content, proof and business decisions

| Decision | Consequence | Required action |
|---|---|---|
| Define **Workshop Monthly** | Determines whether any new route/page should exist and prevents cannibalising the governed Workshops destination | Decide page job, URL, search role, offer truth and relationship to Workshops/Programs before implementation |
| Confirm current homepage hero rights/register status | Required before the exact current hero can be called launch-cleared | Add the asset to the governed media/clearance register with evidence, or replace it with a governed/new pilot asset |
| Confirm Cromwell image permission and source | Removes the representative-image qualifier from Programs | Obtain and clear a Cromwell-specific asset, or revise the proof presentation |
| Confirm named experts to publish | Workshops authority can become stronger without invented profiles | Use only current experts with verified credentials, wording and permission |

## 7. Technical and release gates

### Current production branch

- Vercel build/deployment is passing for implementation commit `bc0390bfe970f63318fa75f08c99111c7952d5ac`.
- `qa:release-controls` passes.
- Next.js 16.3.3 production compilation passes.
- TypeScript passes.
- 46 static pages generate successfully.
- GitHub/Vercel status is successful for the implementation commit.
- There are no unresolved Vercel Toolbar review threads on the branch.
- Vercel preview protection currently redirects to SSO. The available authenticated fetch cannot establish a persistent interactive browser session, so desktop/tablet/mobile visual QA, keyboard traversal, zoom/reflow and final accessibility/browser equivalence remain **unverified**, not passed.
- No preview-security weakening is authorised merely to make the test easier.

### Existing formal go-live gate

The established release/cutover process continues to govern production. This workstream does not silently bypass legal, security, browser/device/accessibility, performance, conversion, production-domain or rollback gates.

## 8. Recommended implementation sequence

1. Reconcile the current homepage conversion hierarchy to current Figma authority — **done; build-qualified**.
2. Keep Home as the visual family reference while preserving useful production IA — **done at code level**.
3. Retain the supporting Programs and Workshops implementations as distinct page-family expressions — **done at code level**.
4. Resolve current Home hero publication governance — **decision/evidence required**.
5. Resolve the Cromwell-specific proof image or revise the proof treatment — **asset/business dependency**.
6. Do **not** build Workshop Monthly until its governed page role is defined — **controlled hold**.
7. Use the genuine page gaps above to finalise the Photography & Motion Pilot and supplier brief — **06D/06E authority already drafted; reconcile to this map before supplier issue**.
8. When authenticated browser access is available, run the deferred desktop, tablet, mobile, keyboard, zoom/reflow and reduced-motion/browser gate.
9. Feed the qualified branch into the established release-integration process rather than merging directly to production.
