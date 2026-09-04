# CYA Production Application 02 — Phases 06B / 06C Release Gate

**Status:** CODE + BUILD + SUPPLIED-IMAGE GOVERNANCE PASSED · HOSTED INTERACTIVE GATE PENDING  
**Reconciled:** 4 September 2026  
**Production branch:** `feat/cya-production-application-02`  
**Review PR:** #13 — CYA Production Application 02 — website release + photography pilot

## Gate interpretation

Phases 06B and 06C require more than a successful build. Code, route, metadata and supplied-image governance can be qualified directly. Visual, keyboard, zoom/reflow and assistive-technology checks require a rendered interactive page.

All images supplied by Glenn Hammond for CYA production are confirmed approved for CYA use. That closes the previous supplied-image permission uncertainty.

The current Vercel preview remains behind an SSO flow that the available tool session cannot maintain as an interactive browser session. Hosted browser qualification therefore remains **pending**, not failed.

No production promotion is authorised by this gate alone.

---

## Phase 06B — Homepage

### Canonical

**Page:** Home  
**URL:** `/`

### Qualified now

- H1: **Work Wellness into Your Workday**;
- literal workplace-yoga/Pilates/mindfulness/program search support retained;
- core proposition retained;
- current Figma conversion hierarchy reconciled:
  - primary **Explore workplace wellbeing programs**;
  - secondary desktop **Start planning**;
  - programme CTA alone on mobile;
- situation-led entry and six approved planning options retained;
- direct-experience pathway retained;
- explicit Workday moment → useful interruption → return grammar retained;
- Work Wellness explanation and work-design boundary retained;
- Wellbeing Studio continuity, proof and final conversion retained;
- no essential motion introduced;
- current Deb/workplace hero formally governed as `media.homeHero`;
- supplied-image approval confirmed.

### Remaining gate

Hosted desktop/tablet/mobile visual qualification, keyboard/focus, zoom/reflow and final accessibility/browser equivalence.

**Phase 06B result:** **CODE/BUILD/IMAGE-GOVERNANCE PASS · INTERACTIVE BROWSER GATE PENDING**

---

## Phase 06C — Workplace Wellbeing Programs

### Canonical

**URL:** `/workplace-wellbeing-programs`

### Qualified now

- procurement-first hierarchy and search ownership retained;
- explicit program composition across movement, mindfulness, workshops and Wellbeing Studio;
- office, operational, distributed and hybrid contexts retained;
- planning, facilitator fit, access, reporting and privacy-aware participation retained;
- approved supplied imagery throughout;
- responsive/reflow safety retained;
- Cromwell program evidence remains textual and separately governed;
- the accompanying image is now described as general CYA workplace wellbeing imagery rather than a temporary Cromwell placeholder, so the page no longer implies that a generic image depicts Cromwell.

A genuinely Cromwell-specific photograph would still be a useful future proof enhancement, but it is not required to publish the current truthful treatment.

**Programs result:** **CODE/BUILD/IMAGE-GOVERNANCE PASS · INTERACTIVE BROWSER GATE PENDING**

---

## Phase 06C — Workplace Wellbeing Workshops & Expert Experiences

### Canonical

**URL:** `/workplace-wellbeing-workshops`

### Qualified now

- literal workshops metadata and service schema preserved;
- approved workplace Lunch & Learn image implemented;
- topic-led discovery preserved;
- credibility organised around topic relevance, expert authority and participation design;
- workday continuation expressed through useful return/application;
- direct Contact conversion retained;
- no requirement to publish named expert profiles at launch.

Named experts may be added later only when identity, credentials, scope wording and publication permission are verified.

**Workshops result:** **CODE/BUILD/IMAGE-GOVERNANCE PASS · INTERACTIVE BROWSER GATE PENDING**

---

## Workshop Monthly — controlled hold

No governed canonical Workshop Monthly URL is established in the production Search Architecture or current Next.js implementation.

Before implementation, CYA needs one explicit product/page decision:

- is Workshop Monthly an evergreen buyer offer;
- a recurring content/editorial series;
- a campaign/client-activation landing experience;
- or simply a delivery pattern inside Workplace Wellbeing Workshops / Programs?

The recommended default is **not to create another indexable SEO destination unless the offer is genuinely distinct, ongoing and commercially meaningful**.

**Workshop Monthly result:** **GLENN/CYA DECISION REQUIRED — NO ROUTE INVENTED**

---

## Hosted browser/accessibility gate still required

When interactive access is available, qualify:

- desktop;
- tablet;
- 390px and 320px mobile;
- horizontal overflow;
- image crops/focal points;
- content order and spacing;
- keyboard navigation and visible focus;
- menu/disclosure focus recovery;
- 200% and 400% zoom/reflow;
- VoiceOver smoke on Home and Programs at minimum;
- reduced-motion equivalence if motion is introduced;
- representative Lighthouse/Core Web Vitals.

### Current blocker

The Vercel deployment is build-ready, but the available authenticated fetch resolves into the Vercel SSO flow rather than a persistent interactive session.

This is a **testing-access limitation**, not a site build defect.

---

## Release control

The branch remains a draft production-review stream and must feed into the established controlled website release process. It must not be interpreted as approval to change DNS, bypass legal/security checks, enable production analytics/enquiry submission or skip migration/rollback controls.

## Gate outcome

### Home
**Code/build/supplied-image governance PASS · interactive browser gate pending**

### Programs
**Code/build/supplied-image governance PASS · interactive browser gate pending**

### Workshops
**Code/build/supplied-image governance PASS · interactive browser gate pending**

### Workshop Monthly
**Glenn/CYA page-role decision required**
