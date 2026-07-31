# Corporate Yoga Australia — Prototype v1

A Next.js / TypeScript / Tailwind CSS prototype of the CYA release-one website, built to the Stage 3 Creative Direction and Experience Prototype brief.

Governing documents (highest authority first):

1. `Docs/CYA_Claude_Code_Prototype_v1_Build_Prompt.md`
2. `Docs/authoritative/CYA_Stage_2_Experience_and_Content_Definition_v1.0(1).pdf`
3. `Docs/authoritative/CYA_Stage_2_Wireframes_and_Mockups.pdf`
4. `Docs/authoritative/CYA_Website_Strategic_Source_of_Truth_v1.0.docx`
5. The approved definitive blueprint (`https://cya-website-blueprint-nu.vercel.app/`)
6. `Brand/Wellbeing_Studio_Brand_Style_Guide_v1.docx` and `Brand/02. Brand Assets.zip`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
- `public/brand/` — approved CYA logo assets

## Content governance / annotation mode

Every evidence-dependent claim, proof placeholder and photography placeholder carries an `EvidenceStatus`. Outside production builds, a "Show evidence status" toggle (bottom-right, off by default) reveals status badges across the site so evidence-required content is never mistaken for approved, publishable content.

## Status

Prototype build for internal review. Not for public release — see the final build report for evidence placeholders, unresolved dependencies and Debby review questions.
