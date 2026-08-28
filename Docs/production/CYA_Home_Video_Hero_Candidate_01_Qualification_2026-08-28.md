# CYA Homepage Video Hero — Candidate 01 Qualification

**Date:** 28 August 2026  
**Candidate branch:** `feat/home-video-hero-production-candidate-01`  
**Authority base:** `phase-14-integrated-production-candidate` at merge commit `78105045f3293100ffbd829807e7ce331a3731a0`  
**PR #4 state at grounding:** merged into Phase 14; no further merge action taken  
**Production cutover:** not authorised and not performed

## Result

**NOT YET QUALIFIED — implementation, asset, build, source/search and production-server checks pass; fresh visual browser qualification remains.**

This is a real working production candidate, not a strategy or moodboard deliverable. The remaining gate is deliberately narrow: observe the candidate in a capable browser at the specified desktop/mobile viewports and verify the two preference/failure states.

## Completed evidence

| Gate | Result | Evidence |
| --- | --- | --- |
| Authority grounding | PASS | Canonical repository confirmed; PR #4 merged; feature branch based on Phase 14 head `78105045` |
| Asset integrity | PASS | Both MP4 files decode end-to-end with FFmpeg and contain 336 frames at 24 fps |
| Desktop asset | PASS | H.264, 1280 × 720, 14.0 s, 3,122,811 bytes |
| Mobile asset | PASS | H.264, 720 × 1280, 14.0 s, 718,840 bytes; independently framed portrait edit |
| Desktop poster | PASS | WebP, 1600 × 900, 99,862 bytes |
| Mobile poster | PASS | WebP, 720 × 1280, 60,530 bytes |
| ESLint | PASS | No warnings or errors |
| TypeScript / Next.js production build | PASS | Next.js 16.3.3; 41/41 static pages generated |
| Source/search QA | PASS | 489 checks |
| Existing Phase 11.5.4 launch gate | PASS | Existing campaign, conversion, enquiry, publication and security controls preserved |
| Production-server home response | PASS | HTTP 200; exactly one H1; authorised headline and both actions present |
| Poster-first server render | PASS | Desktop and mobile poster sources in SSR; video absent from SSR and deferred until capability checks |
| Byte-range delivery | PASS | Mobile video returned HTTP 206 to a 1,024-byte range request; desktop returned `Accept-Ranges: bytes` |
| Reduced-motion design | SOURCE PASS | Video is not mounted when `prefers-reduced-motion: reduce` matches; poster remains |
| Reduced-data design | SOURCE PASS | Video is not mounted for Save-Data, `slow-2g` or `2g`; poster remains |
| Playback-failure design | SOURCE PASS | Playback rejection or media error removes video and exposes the persistent poster |
| Accessibility structure | SOURCE PASS | Decorative media is hidden from assistive technology; content remains semantic; actions remain links; no information exists only in motion |

## Visual evidence

- `Docs/production/evidence/CYA_Home_Hero_C01_Desktop_Filmstrip.jpg`
- `Docs/production/evidence/CYA_Home_Hero_C01_Mobile_Filmstrip.jpg`

The filmstrips confirm sequence order, crop intent and the return to the opening frame. They are edit evidence, not a substitute for rendered browser evidence.

## Remaining qualification gate

The local browser-verification CLI was present, but its managed browser daemon could not start in the execution environment and no installed Chromium executable was available. A browser screenshot or interaction result was therefore not fabricated.

Complete the following against the branch preview:

1. 1440 × 900: observe the complete 14-second loop; confirm headline, context panel, navigation and both actions retain sufficient contrast through all shots.
2. 390 × 844: observe the complete loop; confirm portrait subject visibility, no horizontal movement, no clipped content and usable actions.
3. Keyboard: tab through header navigation and both hero actions; confirm visible focus and correct destinations.
4. Reduced motion: emulate `prefers-reduced-motion: reduce`; confirm no video request and the mobile/desktop poster remains.
5. Failure fallback: block the MP4 request; confirm poster, heading and actions remain complete with no layout shift.
6. Runtime: confirm no hydration, media or application console errors.

## Figma state

No governing Figma frame was changed. The exact node-specific URL for the current authoritative homepage production frame was not available in the repository evidence, so the candidate is documented through the annotated motion specification and filmstrips in the asset/edit manifest. This preserves the instruction not to overwrite or promote the governing hero.

## Replacement list for Glenn

Replace the seven temporary image-based shots with Deb's moving footage using the shot meanings and timecodes in the asset/edit manifest. The component, copy, context panel, action structure, responsive source filenames, poster behaviour and preference/failure logic should remain unchanged unless Glenn separately approves a redesign.
