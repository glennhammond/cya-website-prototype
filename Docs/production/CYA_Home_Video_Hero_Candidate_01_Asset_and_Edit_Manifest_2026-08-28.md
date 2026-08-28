# CYA Homepage Video Hero — Candidate 01 Asset and Edit Manifest

**Status:** temporary still-motion production candidate  
**Date:** 28 August 2026  
**Repository base:** `phase-14-integrated-production-candidate` at `78105045f3293100ffbd829807e7ce331a3731a0`  
**Feature branch:** `feat/home-video-hero-production-candidate-01`

## Candidate role

This candidate uses approved CYA website photography to establish the intended cinematic rhythm, responsive crop system, stable content treatment and replaceable production structure before Deb's final moving footage is available.

It is not represented as documentary evidence of a single client, event or continuous session. The sequence is deliberately decorative and carries no unique information.

## Production assets

| Asset | Specification | Size target | Role |
| --- | --- | --- | --- |
| `public/video/cya-home-hero-desktop.mp4` | H.264, 1280 × 720, 24 fps, 14.0 s, muted | ≤ 5–6 MB | Landscape desktop/tablet motion |
| `public/video/cya-home-hero-mobile.mp4` | H.264, 720 × 1280, 24 fps, 14.0 s, muted | ≤ 2–3 MB | Independently cropped portrait motion |
| `public/images/hero/cya-home-hero-poster-desktop.webp` | WebP, 1600 × 900 | smallest useful file | Desktop LCP/fallback/reduced-motion poster |
| `public/images/hero/cya-home-hero-poster-mobile.webp` | WebP, 720 × 1280 | smallest useful file | Mobile LCP/fallback/reduced-motion poster |

No WebM duplicate is included in Candidate 01. The H.264 assets are already small, broadly compatible and served only after capability checks; a second encoded set would add repository and maintenance weight without a demonstrated delivery advantage.

## Source and permission manifest

All source images are already in the authoritative repository and are covered by `Docs/authoritative/CYA_Phase_11_4_Photography_Clearance_Register_v1.0.md`. Glenn Hammond confirmed the governed CYA website image library approved for website publication on 26 August 2026. No external stock footage, watermarked media or third-party licence is used.

| Shot | Repository source | Source status | Candidate status |
| --- | --- | --- | --- |
| 1 and 7 | `public/images/selected/cya-home-hero-workplace-session.webp` | CYA library; publication approved | Temporary motion treatment |
| 2 | `public/images/selected/cya-movement-desk-stretch-office.webp` | CYA library; publication approved | Temporary motion treatment |
| 3 | `public/images/selected/cya-conferences-studio-remote-grid.webp` | CYA library; publication approved | Temporary motion treatment |
| 4 | `public/images/selected/cya-movement-facilitator-adjustment.webp` | CYA library; publication approved | Temporary motion treatment |
| 5 | `public/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp` | CYA library; publication approved | Temporary motion treatment |
| 6 | `public/images/selected/cya-studio-employee-home-practice.webp` | CYA library; publication approved | Temporary motion treatment |

## Edit-decision list

| Timecode | Shot and meaning | Motion/crop intent | Deb-footage replacement |
| --- | --- | --- | --- |
| 00:00–00:02 | Colleagues pause together in a workplace | Gentle settling move; centre-safe group | A genuine CYA workplace reset with two or more participants |
| 00:02–00:04 | Individual desk stretch | Direct working-day context; portrait crop holds the participant | A close, natural desk or standing reset in an office |
| 00:04–00:06 | Remote participation grid | Distributed-work participation | A CYA-facilitated online session or remote participant detail |
| 00:06–00:08 | Facilitator and participant | Human guidance and expert presence | Deb or a CYA facilitator guiding a participant or small group |
| 00:08–00:10 | Movement in an industrial workplace | Breadth beyond conventional offices | CYA delivery in warehouse, field or operational context |
| 00:10–00:12 | Quiet home practice | Flexible and hybrid-work continuity | A brief home or remote-working reset with natural context |
| 00:12–00:14 | Return to the opening workplace moment | Reverse settling move returns cleanly to frame one | Match Shot 1 framing/action so the loop remains unobtrusive |

## Motion specification for Figma production reference

- Create non-governing candidate frames labelled `Home / Video Hero C01 / Desktop / 1440` and `Home / Video Hero C01 / Mobile / 390`.
- Use the corresponding poster as the hero fill.
- Keep headline, supporting copy and both calls to action fixed across the full sequence.
- Apply a left-weighted deep neutral/teal tonal overlay strong enough to preserve white-text contrast across every shot.
- Represent the seven shots as a compact annotated filmstrip using the timecodes above.
- Mark all frames `CANDIDATE — TEMPORARY STILL-MOTION — NOT GOVERNING`.
- Do not promote the candidate over the current authoritative homepage frame until Glenn approves it.

## Replacement contract

Future Deb footage should replace shot sources, not component structure. Preserve:

- 14-second maximum approximate loop;
- five to seven moments of roughly two to three seconds each;
- 24 or 25 fps;
- muted H.264 output;
- desktop and independently composed mobile crops;
- first/last visual continuity;
- stable text, actions and context panel;
- poster and reduced-motion state;
- current public filenames where practical, allowing a media-only replacement commit.
