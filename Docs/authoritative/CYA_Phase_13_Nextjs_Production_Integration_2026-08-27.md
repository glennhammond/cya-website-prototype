# CYA Website 2027 — Phase 13 Next.js Production Integration

**Date:** 27 August 2026  
**Branch:** `phase-13-nextjs-production-integration`  
**Base:** `phase-11-5-3-production-seo` at `d7e6bd5`  
**Status:** implementation checkpoint qualified; release remains blocked

## Implemented

- Reconciled the existing Next.js 16 App Router repository with the Phase 09–12 Figma production authority.
- Replaced Urbanist and Open Sans with Instrument Sans through `next/font`.
- Mapped the qualified Figma colour roles into CSS custom properties, including paper, field-note, deep-teal, action-teal and accessible ochre roles.
- Reconciled global controls, focus treatment, spacing, radius and container measures.
- Rebuilt the three system-defining routes as distinct production compositions:
  - `/`
  - `/workplace-wellbeing-programs`
  - `/movement`
- Applied the qualified system across the remaining governed page families:
  - Workplace Yoga
  - Workplace Pilates
  - Meditation & Mindfulness
  - Workshops & Expert Experiences
  - Online Wellbeing
  - Case Studies
  - Insights
  - About
  - Contact
- Preserved structured data, canonical metadata, publication-status filtering, CYA photography, the accessible enquiry form and the Phase 11.5.3 migration/search safeguards.

## Authority conflicts — unresolved and deliberately unchanged

### C13-01 — About canonical

- Authoritative Site Architecture v1.0 and Figma Phases 01–12 specify `/about-us`.
- The current Phase 11.5.3 SEO implementation establishes `/about` and redirects `/about-us` to it.
- Phase 13 integrates the approved About composition without reversing the current route decision.
- **Status:** Blocked — requires explicit architecture/search authority resolution before route, redirect, sitemap, schema or internal-link changes.

### C13-02 — Expert Experiences canonical ownership

- Authoritative Site Architecture v1.0 and Figma Phases 01–12 place Expert Experiences inside `/workplace-wellbeing-workshops`.
- The current Phase 11.5.3 SEO implementation additionally establishes `/expert-experiences` as a canonical page.
- Phase 13 integrates the combined Workshops & Expert Experiences production composition without removing or redirecting the standalone route.
- **Status:** Blocked — requires explicit architecture/search authority resolution.

## Release blockers retained

Campaign and registration ownership remains unresolved for:

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

These routes have not been redirected, indexed or repurposed by Phase 13.

## Qualification evidence

- ESLint: **PASS**
- Next.js production build: **PASS** — 32 generated routes
- Phase 11.5.3 source/search QA: **PASS** — 369 checks
- Phase 11.5.3 rendered production smoke: **PASS** — 219 checks
- Production launch-readiness gate: **BLOCKED** — existing campaign/registration ownership dependency
- Cloud-browser visual capture: **BLOCKED by environment** — browser cannot access container-local loopback URLs; no preview deployment was created without explicit authority

## Controlled next action

Create a reviewable remote branch and preview deployment only after explicit approval to push. Use that hosted preview for desktop, tablet, mobile, keyboard, screen-reader and real-media visual qualification. Resolve C13-01 and C13-02 before merging route-contract changes.
