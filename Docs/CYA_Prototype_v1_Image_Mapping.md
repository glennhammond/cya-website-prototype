# CYA Prototype v1 — Image Mapping

This maps every real photograph implemented in this build to its route, section, source image and derivative. It also records where the abstract placeholder was deliberately **kept** rather than replaced, and why — approved architecture and copy are unchanged; this is an image-curation pass only.

19 real photographs are implemented. All derivatives live in `public/images/selected/`, are lowercase kebab-case, WebP, cropped to the component's existing 4:3 aspect ratio (no component/layout change), and were never upscaled beyond their source resolution.

Every implemented photo carries a dev-only annotation (visible only in annotation mode) drawn from: **Prototype image** · **Permission to confirm** · **Replace after photo shoot** · **Higher-resolution source required** — because none of this library's consent/permission status is documented (see audit). This mirrors the `EvidenceStatus` pattern already used for copy and proof.

---

## 1. Home (`/`)

### Hero
- **Current placeholder:** `Hero` component, `variant="workplace"`
- **Selected image:** `cya-home-hero-workplace-session.webp` ← `Workplace Wellness Lunch & Learn Session another Workspace Brisbane.jpg`
- **Reason:** The single strongest "workplace-real" image in the library — a real corporate meeting room, ~9-person diverse group, chair-based (fully accessible, no floor/flexibility assumption). Establishes CYA as broader than a yoga class in the very first image a visitor sees, without over-emphasising one modality.
- **Crop / focal point:** 4:3, anchored high (y≈0.40) to keep the seated group's faces and raised hands in frame; ceiling/screen band trimmed.
- **Alt text:** "A diverse group of colleagues in a meeting room, seated with hands together in a shared moment of calm."
- **Decorative or informative:** Informative — supports the hero's claim of real, credible workplace delivery.
- **Responsive behaviour:** Renders at 4:3 in both the two-column desktop layout and the stacked mobile layout (component already reflows this way); no separate mobile crop implemented (see §9 Known limitations).
- **Permission status:** Unknown — annotated "Permission to confirm."
- **Replacement priority:** High — this is the most visible placement on the site; prioritise a licensed/consented equivalent (or the future shoot's best group room shot) first.

### "One-off sessions are valuable" editorial feature
- **Selected image:** `cya-home-oneoff-desk-stretch.webp` ← `Wellbeing Workhops banner.jpg`
- **Reason:** A single, focused desk-stretch pair in a real office — visually reinforces "a well-designed workplace wellbeing experience" as one complete moment, matching this section's copy exactly.
- **Crop / focal point:** 4:3, centred on the two participants and the desk/laptop context.
- **Alt text:** "Two colleagues pausing at a desk for a guided stretch."
- **Decorative or informative:** Informative.
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

---

## 2. Workplace Wellbeing (`/workplace-wellbeing`)

### Hero
- **Selected image:** `cya-workplace-wellbeing-hero-warehouse-group.webp` ← `Workplace Wellness Lunch & Learn Session at a warehouse in Brisbane.webp`
- **Reason:** Deliberately distinct from the Home hero (no adjacent-page repetition) and answers the brief's "not a catalogue of yoga poses" instruction directly — a real warehouse, pallet racking visible, standing group movement. Broadens the page beyond an office-only reading of "workplace."
- **Crop / focal point:** 4:3, centred on the group with racking retained in the background for context.
- **Alt text:** "A team doing a standing stretch together on the floor of a warehouse."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** High.

### "How CYA works" editorial feature
- **Selected image:** `cya-people-debby-teacher-portrait.webp` ← `Debby Teacher(1).jpg`
- **Reason:** Brief specifically suggests "Debby Lewis or a CYA facilitator" for this slot; a warmer, seated portrait suits a supporting position (the more authoritative standing portrait is reserved for the About hero, per the brief's instruction not to use a casual portrait where a page needs authority).
- **Crop / focal point:** 4:3, face/torso prioritised over legs.
- **Alt text:** "Debby Lewis, seated and smiling, in a plant-filled studio space."
- **Permission status:** Named subject (CYA founder) — reasonably approved for CYA's own site use.
- **Replacement priority:** Low.

### "Coordinated delivery" editorial feature
- **Selected image:** `cya-workplace-wellbeing-lunch-learn-team.webp` ← `Lunch & Learn bringing Wellness to Workplaces.webp`
- **Reason:** Shows a real office Lunch & Learn moment with a high-visibility safety vest clearly visible in the group — a rare, valuable combination of "real office" and "not just desk workers" in one frame.
- **Crop / focal point:** 4:3, group centred, high-vis wearer retained in frame.
- **Alt text:** "A small team stretching together in an office breakout space, including a colleague in high-visibility workwear."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

---

## 3. Movement (`/workplace-wellbeing/movement`)

### Hero
- **Selected image:** `cya-movement-desk-stretch-office.webp` ← `Corporate Yoga Australia - Services - Workplace Wellness.webp`
- **Reason:** Directly illustrates the page's "work clothes welcome" copy — a man in business shirt and trousers stretching at his own desk. Male subject also broadens representation beyond the female-only pattern in much of the library.
- **Crop / focal point:** 4:3, re-cropped after first pass to add headroom above his raised hands; monitors/desk retained for office context.
- **Alt text:** "A man in business attire stretching at his desk between meetings."
- **Permission status:** Unknown — "Permission to confirm." Also "Higher-resolution source required" (web-optimised source is only 1000×1200 at 42KB).
- **Replacement priority:** High — good concept, needs a sharper source.

### "Not everyone who tries this at work" editorial feature
- **Selected image:** `cya-movement-group-industrial.webp` ← `Blog6.jpg`
- **Reason:** All-male group in an indoor industrial/sports facility — the strongest available counter to the brief's "isolate only young, flexible women" risk.
- **Crop / focal point:** 4:3, three figures retained, racking/court lines visible for context.
- **Alt text:** "A group of men doing a standing stretch together in an industrial facility."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

### "Inclusion and workplace adaptation" editorial feature
- **Selected image:** `cya-movement-facilitator-adjustment.webp` ← `1H2A4575.jpg`
- **Reason:** Explicitly shows "facilitators guiding rather than performing" (a brief requirement for this page) — a facilitator's hand gently supporting a participant's stretch, not a solo demonstration pose.
- **Crop / focal point:** 4:3, both faces and the guiding hand retained.
- **Alt text:** "A facilitator gently guiding a participant through a supported stretch."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

### Proof placeholder
- **Kept as abstract placeholder.** No image in the library constitutes verified delivery-quality or participant-feedback evidence for a specific engagement; using a generic photo here would misrepresent unverified content as proof. Status remains `evidence-required`.

---

## 4. Conferences and Events (`/conferences-events`)

### Hero
- **Selected image:** `cya-conferences-hero-facilitator-led-group.webp` ← `Yoga-class-with-Debby-Lewis-CYA-in-Gold-Coast.webp`
- **Reason:** Facilitator clearly visible and standing (leading, not just participating) with a full group reclining — reads credibly as an organised activation to an event organiser, the page's primary audience.
- **Crop / focal point:** 4:3, facilitator and front row retained.
- **Alt text:** "A facilitator leading a group relaxation session in a bright indoor space."
- **Permission status:** Named subject (Debby Lewis) — reasonably approved for CYA's own use; group members' consent undocumented.
- **Replacement priority:** Medium — a genuine conference/event-floor photo from the future shoot should replace this.

### "Pre/post-event Wellbeing Studio access" editorial feature
- **Selected image:** `cya-conferences-studio-remote-grid.webp` ← `online-wellbeing.webp`
- **Reason:** A video-call grid of diverse professionals visually supports the idea of extended digital access beyond the room, without implying a specific unbuilt feature.
- **Crop / focal point:** 4:3, centred on the tile grid.
- **Alt text:** "A grid of colleagues joining a wellbeing session remotely by video call."
- **Permission status:** Unknown — individual call participants' consent to appear in marketing is not documented. "Permission to confirm."
- **Replacement priority:** Medium.

### Proof placeholder
- **Kept as abstract placeholder** — no verified event-specific evidence exists yet (Strategic Source of Truth: "One-off / event proof — candidate required").

---

## 5. Programs (`/programs`)

### Hero
- **Selected image:** `cya-programs-hero-group-class.webp` ← `1H2A4605.jpg`
- **Reason:** A full class moving together (arms raised, in unison) works as a visual metaphor for coordinated, connected support — the page's core idea — without depicting a specific package.
- **Crop / focal point:** 4:3, upper-body/faces prioritised from the original tall portrait source.
- **Alt text:** "A small group moving together during a facilitator-led class."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

### "Why continuity can help" editorial feature
- **Selected image:** `cya-programs-continuity-group-repeat.webp` ← `1H2A4629.jpg`
- **Reason:** A different frame of a similar class moment — paired with the hero, it reads as "the same rhythm, a different week," reinforcing the continuity message visually.
- **Crop / focal point:** 4:3, faces and raised arms retained.
- **Alt text:** "Participants stretching together mid-class."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Low.

### "Multi-site support" editorial feature
- **Selected image:** `cya-programs-multisite-outdoor.webp` ← `Workplace Wellness Lunch & Learn Session outside in park Brisbane.webp`
- **Reason:** On full-resolution review this shows several participants in high-visibility safety vests exercising outdoors, with an unmistakably Australian setting — strong support for "delivery confirmed against real local capacity" across varied site types, indoor and outdoor, corporate and industrial.
- **Crop / focal point:** 4:3, at least four high-vis participants retained.
- **Alt text:** "A group in high-visibility workwear stretching together outdoors."
- **Permission status:** Unknown, low disclosure risk — "Permission to confirm."
- **Replacement priority:** Medium — a sharper, higher-resolution version of this exact scenario is a priority for the future shoot (see gap analysis).

### Proof placeholder
- **Kept as abstract placeholder** — recurring/multi-site renewal evidence is explicitly unconfirmed per the source documents.

---

## 6. Wellbeing Studio (`/wellbeing-studio`)

### Hero ("Wellbeing Studio member screens")
- **Kept as abstract placeholder.** The library's only genuine "member screens" material is the 16 `ws/` product screenshots, which show live/pilot copy the source strategy documents explicitly flag as unconfirmed (e.g. conflicting live-session details), plus facilitator likenesses in video thumbnails with no documented marketing-use consent. Using a generic photo here would misrepresent it as product UI; using the real screenshots would publish unapproved content. Both are avoided — see the audit's Wellbeing Studio section for the full reasoning.

### "Find something useful for the moment you're in" editorial feature
- **Selected image:** `cya-studio-employee-home-practice.webp` ← `corporate-yoga-australia-online-onsite-wellness.webp`
- **Reason:** A solo, quiet home-practice moment matches "employee value" copy about individual, self-directed use — deliberately calmer and less staged than the group-class imagery used elsewhere.
- **Crop / focal point:** 4:3, anchored left-of-centre toward the practice area.
- **Alt text:** "A person doing a quiet stretch practice at home."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Low.

### "Employer value" editorial feature (dashboard/reporting)
- **Kept as abstract placeholder.** This slot illustrates an employer reporting concept CYA does not yet have a real screen for; a photo would imply a product feature that doesn't exist, which the brief explicitly prohibits.

### Privacy/aggregate-reporting editorial feature
- **Kept as abstract placeholder** — same reasoning as above; this is a data/privacy concept, not a photographable subject.

### Proof placeholder (pilot findings)
- **Kept as abstract placeholder** — pilot findings and verified reporting are explicitly not yet available.

### `StudioPreview` (used on Home)
- **Kept as abstract placeholder**, consistent with the Wellbeing Studio hero decision above (same "member screens" concept, same evidence gate).

---

## 7. Proof (`/proof`)

### Hero
- **Selected image:** `cya-proof-hero-group-practice.webp` ← `1H2A4624.jpg`
- **Reason:** A generic, non-client-identifiable group image gives the Proof page a credible "real delivery happens" tone without implying it is evidence for any specific named case study (Cromwell, Shell Energy, Link‑Up) — those remain governed, separately-labelled placeholders.
- **Crop / focal point:** 4:3, group faces/arms prioritised.
- **Alt text:** "A small group mid-stretch during a facilitator-led session."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Low — this is a mood-setting image, not case-specific evidence.

### Case-study cards and template
- **Kept as abstract SVG marks**, unchanged. This is intentional, not an oversight: the brief explicitly warns against making "placeholder case-study imagery look final," and no photo in the library is tied to (or should be implied to belong to) Cromwell, Shell Energy, Link‑Up or the unidentified event story. The distinct abstract mark per story is the safer choice until real, permissioned case evidence exists.

---

## 8. About (`/about`)

### Hero
- **Selected image:** `cya-about-debby-lewis-portrait.webp` ← `Debby-Lewis.jpg`
- **Reason:** The single strongest, most authoritative portrait in the library — confident, warm, high resolution, clean background. Reserved exclusively for this placement so the About hero doesn't compete with the softer portrait used on Workplace Wellbeing.
- **Crop / focal point:** 4:3, face and crossed arms retained, legs trimmed.
- **Alt text:** "Debby Lewis, founder of Corporate Yoga Australia."
- **Permission status:** Named subject, CYA founder — reasonably approved for CYA's own site.
- **Replacement priority:** Low.

### Worldview editorial feature
- **Selected image:** `cya-about-worldview-group-rest.webp` ← `Yoga Nidra is a great way to refresh during the day.webp`
- **Reason:** A real, accessible group-rest moment in a bright office/foyer directly supports the copy "not everyone will walk into a yoga studio" — this is lying down, eyes closed, zero performance pressure.
- **Crop / focal point:** 4:3, centred on the row of participants.
- **Alt text:** "A group resting together on mats during a guided session."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Medium.

### Facilitator network
- **Selected image:** `cya-about-facilitator-representative.webp` ← `Teacher Val Colour.jpg`
- **Reason:** One warm, professional facilitator portrait used to represent the network generally — deliberately not named in alt text or copy, and explicitly flagged as provisional, consistent with the page copy's own statement that "individual profiles publish only once credentials, insurance and permissions are verified."
- **Crop / focal point:** 4:3, face-priority.
- **Alt text:** "A CYA facilitator, one of the practitioners in the national network." (Not named — see reasoning above.)
- **Permission status:** Named individual, but marketing-use consent undocumented — "Permission to confirm," annotated `evidence-required`.
- **Replacement priority:** High — must be resolved (verified register + consent) before any production use of any named facilitator.

### Professional standards
- **Kept as abstract placeholder** — explicitly `legal-review` gated; no photo answers an insurance/credentials claim.

### Delivery philosophy editorial feature
- **Selected image:** `cya-about-delivery-group-practice.webp` ← `1H2A4612.jpg`
- **Reason:** Shows coordinated group practice with visible facilitator involvement, supporting "operational discipline" without repeating any image already used elsewhere on the site.
- **Crop / focal point:** 4:3, upper-body group retained.
- **Alt text:** "A facilitator-led group session in progress."
- **Permission status:** Unknown — "Permission to confirm."
- **Replacement priority:** Low.

---

## 9. Consultation (`/consultation`)

**No image used — intentional, not an oversight.** The brief instructs restrained imagery so the form and expectation-setting stay the focus; the page already had no photography placeholder before this pass, and none has been added.

---

## Cross-page duplication check

No derivative is reused across two placements. Where the same underlying photoshoot recurs (e.g. the "Wellbeing Workshops"/"Workplace Wellness" office desk-stretch series, or the studio group-class series, or Debby Lewis's own image set), a different frame was chosen for each page, and no two selected crops sit on adjacent nav pages using the same source photo.

## Known limitations

- All photo components (`Hero`, `EditorialFeature`) use a single fixed 4:3 aspect ratio; this build does not implement responsive art-direction (different source crops for 16:9 desktop-wide vs narrow mobile). Every image was crop-checked at the stacked mobile width and the fixed 4:3 frame reflows correctly with no obscured subject, but a true wide-desktop 16:9 hero variant was out of scope for this pass (would require a Hero/EditorialFeature prop change — flagged, not made, per "keep layout changes local").
- No image's subject or organisation has documented publication consent. Every implemented photo is annotated accordingly and should be treated as provisional.
