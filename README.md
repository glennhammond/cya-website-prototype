# Corporate Yoga Australia — Prototype v1

A Next.js / TypeScript / Tailwind CSS prototype of the CYA release-one website, built to the Stage 3 Creative Direction and Experience Prototype brief.

## Governing documents

General product, experience and content authority remains governed by the established prototype source hierarchy:

1. `Docs/CYA_Claude_Code_Prototype_v1_Build_Prompt.md`
2. `Docs/authoritative/CYA_Stage_2_Experience_and_Content_Definition_v1.0(1).pdf`
3. `Docs/authoritative/CYA_Stage_2_Wireframes_and_Mockups.pdf`
4. `Docs/authoritative/CYA_Website_Strategic_Source_of_Truth_v1.0.docx`
5. The approved definitive blueprint (`https://cya-website-blueprint-nu.vercel.app/`)
6. `Brand/Wellbeing_Studio_Brand_Style_Guide_v1.docx` and `Brand/02. Brand Assets.zip`

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

Prototype build for internal review. Not for public release — see the final build report for evidence placeholders, unresolved dependencies and Debby review questions.
