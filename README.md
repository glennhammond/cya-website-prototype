# Corporate Yoga Australia — Website 2027

The authoritative Next.js implementation repository for the Corporate Yoga Australia Website 2027 redesign and production programme.

> **Repository authority:** All CYA Website implementation, branch, preview and release work belongs in `glennhammond/cya-website-prototype`. The separate `glennhammond/cya-site` repository is deprecated historical evidence and must not be used for development or deployment.

## Governing documents

Current authority is applied in this order:

1. CYA Website 2027 — Authoritative Site Architecture v1.0
2. CYA Website — Search Architecture Authority v1.0
3. Current CYA brand and visual-identity authority
4. Approved Phase 07 visual direction and subsequent qualified production work
5. Wellbeing Studio continuity decisions for the CYA–Studio relationship

Historical wireframes, the Blueprint and older prototype material remain supporting evidence only. See `Docs/authoritative/CYA_Repository_Authority_and_Consolidation_2026-08-28.md` for the repository decision and recovered-work register.

### Search-specific authority

For **canonical URLs, search-intent ownership, migration/redirects, metadata, indexability, structured data, sitemap rules and internal search authority**, use:

- `Docs/authoritative/CYA_Search_Architecture_Phase_11_3_v1.0.md`
- `config/search-architecture.json`

Phase 11.3 supersedes older route/search assumptions where they conflict, but it does **not** replace the approved Stage 2 commercial and experience principles. One-off work remains welcomed; the site must not force a program sale; situation-led discovery remains important; and Wellbeing Studio remains CYA's connected delivery/continuity layer rather than a generic SaaS acquisition proposition.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/).

```bash
npm run build   # production build + typecheck
npm run lint    # ESLint
npm run start   # serve the production build
```

## Structure

- `app/` — routes (Next.js App Router)
- `components/` — shared UI components
- `content/` — typed, structured page content (see `lib/types.ts` for the `EvidenceStatus` content-governance contract)
- `lib/` — shared types and the dev-only annotation-mode provider
- `config/search-architecture.json` — Phase 11.3 canonical route/search/migration manifest
- `public/brand/` — approved CYA logo assets

## Content governance / annotation mode

Every evidence-dependent claim, proof placeholder and photography placeholder carries an `EvidenceStatus`. Outside production builds, a "Show evidence status" toggle (bottom-right, off by default) reveals status badges across the site so evidence-required content is never mistaken for approved, publishable content.

Phase 11.3 explicitly reuses this evidence-governance principle: search demand is never sufficient reason to publish a page whose real service, expert or evidence basis is not yet qualified.

## Status

Qualified production candidate under controlled consolidation. The live public website remains Squarespace until Glenn separately approves production promotion and DNS cutover.
