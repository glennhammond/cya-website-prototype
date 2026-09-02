# CYA Production Application 02 — Phases 06B / 06C Release Gate

**Status:** CODE + BUILD GATE PASSED · HOSTED VISUAL / ACCESSIBILITY GATE PENDING  
**Date:** 2 September 2026  
**Production branch:** `feat/cya-production-application-02`  
**Current qualified head:** `ac0dc8e23def79e539a8de1a4d668f2f941dd029`  
**Review PR:** #13 — CYA Production Application 02 — website release + photography pilot

## 1. Gate interpretation

Phases 06B and 06C require more than a successful build. The current implementation has passed the safe code/build gate, but the requested browser-tested release gate cannot truthfully be closed while the hosted Vercel preview remains behind an SSO flow that cannot be traversed by the available authenticated fetch path.

This document therefore separates:

1. **qualified now** — code, route, metadata, build and implementation checks supported by direct evidence;
2. **deferred hosted qualification** — visual, keyboard, zoom/reflow, assistive-technology and real-device checks that require a rendered interactive page;
3. **external/content dependencies** — evidence and decisions that cannot be manufactured in code.

No production promotion is authorised by this gate.

---

## 2. Phase 06B — Homepage Production Completion

### Current canonical page

**Page:** Home  
**URL:** `/`  
**Search role:** broad Corporate Yoga Australia / workplace wellbeing orientation  
**Primary conversion:** `/contact`  
**Supporting discovery:** situation-led needs, direct experiences, programs, Online Wellbeing, proof and Insights

### Qualified implementation

The homepage now reconciles the implemented site with the approved 05A reference rather than treating the Figma proof as a page template.

Implemented and retained:

- H1: **Work Wellness into Your Workday**;
- literal service/search support: workplace yoga, Pilates, mindfulness and tailored wellbeing programs for Australian organisations;
- core proposition: **We help organisations make wellbeing part of working life**;
- primary action: **Start planning**;
- secondary action: **Explore by need**;
- situation-led entry using **What would help you right now?**;
- editorial **Choose an experience directly** pathway;
- restrained observed-workday treatment: **The day was already full**;
- visible sequence: **Working moment → Useful interruption → Return**;
- Work Wellness explanation with the established work-design boundary;
- one-off-to-continuity progression;
- contextual Wellbeing Studio role;
- evidence/proof section;
- final planning conversion.

### Reconciliation correction completed

The older **What we offer / Explore our workplace wellbeing services** card catalogue was removed after the editorial Experience Pathway was restored. Keeping both created duplicate service discovery and weakened the approved editorial hierarchy.

This is not a sitewide prohibition on cards. Cards remain appropriate where they describe differences, progression or grouped information rather than duplicating navigation.

### Creative intensity

Home remains the strongest expression of **Workday, Interrupted**. It uses:

- work-context cue;
- Observed Workday headline;
- a useful-interruption / return sequence;
- Human Signal behaviour within the direct-experience pathway.

No universal Workday Window component or mandatory headline system has been introduced.

### Motion and reduced motion

No essential motion is present in the current homepage production implementation. The meaning of the creative sequence is fully available statically, so there is no current reduced-motion information loss.

A future commissioned motion hero must preserve an equivalent static state and respect `prefers-reduced-motion` before release.

### Code/build result

Latest Vercel build for `ac0dc8e…`:

- CYA pre-launch release controls — **PASS**;
- Next.js production compilation — **PASS**;
- TypeScript — **PASS**;
- static generation — **46/46 application routes generated**;
- Vercel deployment — **READY**.

### Remaining Home dependencies

1. The currently implemented hero file is not yet represented in the governed `media.ts` register. Before final publication it must either receive explicit rights/register evidence or be replaced by a governed/pilot asset.
2. The commissioned pilot hero still/motion pair remains the preferred long-term visual authority.
3. Full hosted visual/accessibility qualification remains pending.

**Phase 06B result:** **CODE/BUILD PASS · BROWSER GATE PENDING**

---

## 3. Phase 06C — Workplace Wellbeing Programs

### Current canonical page

**Page:** Workplace Wellbeing Programs  
**URL:** `/workplace-wellbeing-programs`

### Qualified implementation

The page retains procurement and decision-making clarity rather than becoming a second homepage.

Current strengths retained or improved:

- literal Workplace Wellbeing Programs H1 and metadata;
- explicit program composition across movement, mindfulness, workshops and Wellbeing Studio;
- workplace-context differentiation across office, operational, multi-site/distributed and hybrid delivery;
- planning, facilitator fit, access and proportionate reporting expectations;
- privacy-aware participation language;
- internal-champion boundaries;
- practical FAQs and direct planning conversion;
- restrained **Work context — Different workplaces. Different working days.** image caption;
- removal of forced no-wrap text behaviour that could impair responsive reflow;
- use of a governed participation asset rather than the earlier ungoverned image path.

### Creative intensity

Medium. The page uses work context and Human Signal logic to make program fit tangible, but does not duplicate the Home hero grammar or turn procurement content into a campaign treatment.

### Remaining dependency

The named Cromwell proof section still uses a representative image explicitly labelled temporary. A genuinely Cromwell-specific, client-cleared asset is required to make that proof expression visually specific. Alternatively the proof treatment must remain generic/representative.

**Programs result:** **CODE/BUILD PASS · SPECIFIC PROOF IMAGE + BROWSER GATE PENDING**

---

## 4. Phase 06C — Workplace Wellbeing Workshops & Expert Experiences

### Current canonical page

**Page:** Workplace Wellbeing Workshops & Expert Experiences  
**URL:** `/workplace-wellbeing-workshops`

### Qualified implementation

The page now has its own supporting-page expression:

- literal Workshops metadata and service schema preserved;
- review-only image placeholder removed;
- non-existent image candidate removed;
- governed, rights-cleared workplace Lunch & Learn image implemented;
- hero CTAs stack at narrow widths;
- workday caption: **A useful conversation, with somewhere to go next**;
- credibility is explained through topic relevance, expert authority and participation design;
- topic-led discovery remains prominent;
- continuation is framed as return/application rather than generic inspiration;
- Contact conversion remains direct.

### Creative intensity

Medium-low. This page uses observed working-life framing and continuation, while preserving the literal service proposition. It does not reproduce the Home Workday Window composition.

### Remaining dependency

Named expert profiles, qualifications or authority claims must only be added when current expert identity, credentials, role wording and publication permission are verified.

**Workshops result:** **CODE/BUILD PASS · EXPERT EVIDENCE + BROWSER GATE PENDING**

---

## 5. Workshop Monthly — controlled hold

No governed canonical **Workshop Monthly** page or URL has been verified in:

- the current Next.js production implementation;
- the current locked commercial route architecture;
- the earlier CYA website repositories searched for the exact page name.

Current CYA material supports the existence of monthly workshop/theme activity inside broader wellbeing offers, but that does not establish a standalone canonical commercial page.

Before a route is created, CYA must govern:

1. what Workshop Monthly is;
2. whether it is a buyer page, campaign/landing page, client activation page or content series;
3. its relationship to `/workplace-wellbeing-workshops`;
4. whether it has independent search intent and enough differentiated content to avoid cannibalisation;
5. its current offer/pricing/availability truth;
6. its conversion path and lifecycle.

**Workshop Monthly result:** **INTENTIONALLY NOT BUILT — PAGE-DEFINITION DECISION REQUIRED**

---

## 6. Hosted browser/accessibility gate still required

The following checks remain mandatory before Phases 06B/06C can be described as browser-tested release gates:

- representative desktop width;
- tablet width;
- mobile widths including 390px and 320px;
- horizontal-overflow check;
- actual image cropping/focal points;
- content order and spacing in real rendering;
- keyboard navigation and visible focus;
- menu/disclosure Escape and focus recovery;
- 200% and 400% zoom/reflow;
- VoiceOver smoke on Home and Programs at minimum;
- reduced-motion behaviour if motion is later introduced;
- Lighthouse/Core Web Vitals representative qualification.

### Current blocker

The current Vercel branch preview is `READY`, but preview access resolves to Vercel SSO even when using the available authenticated/share-link path. That prevents a trustworthy interactive hosted QA pass from this environment.

This is a **testing-access blocker**, not a build failure.

---

## 7. Release control

The current work is isolated in draft PR #13 and must feed into the existing RC04 release process.

It must **not** be merged straight to `main` or interpreted as approval to:

- replace the live Squarespace website;
- change DNS;
- enable indexing;
- enable analytics;
- activate production enquiry submission;
- bypass privacy/legal, WAF, HubSpot, conversion, performance or migration checks already governed by RC04.

---

## Gate outcome

### Phase 06B — Home
**PASS at code/build level · hosted browser gate pending**

### Phase 06C — Programs
**PASS at code/build level · proof-image and hosted browser gates pending**

### Phase 06C — Workshops
**PASS at code/build level · expert-evidence and hosted browser gates pending**

### Workshop Monthly
**controlled hold pending governed page definition**

The safe non-blocked production work has therefore progressed into Phases 06D and 06E, whose photography/motion pilot and permission/supplier packs are already present on the production branch.
