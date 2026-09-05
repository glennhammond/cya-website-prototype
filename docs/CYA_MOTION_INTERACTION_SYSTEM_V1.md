# CYA Motion & Interaction System v1

Status: prototype authority  
Scope: three representative experiences before site-wide rollout  
Governing principle: **Confidence, not spectacle.**

## Purpose

Motion is a governed second layer of the Corporate Yoga Australia design system. It should make hierarchy, progression and interaction easier to understand. If motion does none of those things, it should not be added.

The static visual direction remains authoritative. This system does not reopen approved layout, photography, typography, colour or copy decisions.

## Motion behaviours

### M01 — Reveal
Content enters gently when it becomes relevant. Sections are treated as compositions rather than collections of independently animated objects.

Default: 560 ms, 16 px maximum vertical travel, approved ease-out.

### M02 — Respond
Buttons, links, rows and cards acknowledge pointer, keyboard and tap intent immediately.

Default: 140 ms. Card lift is restrained to approximately 2–3 px. Interaction feedback must never depend on hover alone.

### M03 — Guide
Motion clarifies direction, order or sequence. This is most valuable in process sequences and mobile horizontal swipe patterns.

Default: 300 ms for state/snap transitions. Progress and spatial logic take priority over decoration.

### M04 — Transition
Menus, accordions, filters and other state changes should move cleanly between states without abrupt jumps or theatrical easing.

Default: 300 ms using the standard easing curve.

### M05 — Emphasise
Rare, important moments may receive a slightly more deliberate entrance, including proof, an editorial guardrail or a Workday, Interrupted beat.

Use sparingly. Emphasis must not become a site-wide animation pattern.

## Timing tokens

| Token | Duration | Intended use |
| --- | ---: | --- |
| FAST | 140 ms | Hover, press, underline, colour, arrow response |
| STANDARD | 300 ms | Menus, cards, accordions, state and snap transitions |
| REVEAL | 560 ms | Section and content entrance |
| EDITORIAL | 820 ms | Rare image or narrative composition |

## Easing tokens

- Ease out: `cubic-bezier(0.22, 1, 0.36, 1)` — entrances and reveals
- Standard: `cubic-bezier(0.2, 0, 0, 1)` — state and layout transitions
- Ease in/out: `cubic-bezier(0.65, 0, 0.35, 1)` — restrained editorial image movement

## Mobile grammar

Mobile is not a reduced version of desktop motion.

**Tap → response → swipe → settle**

Preferred mobile behaviours:

- natural horizontal snapping for multi-panel sequences;
- partial next-card visibility where it helps communicate swipeability;
- immediate tap response;
- shorter translation distances;
- no hover-dependent meaning;
- native-feeling scroll momentum;
- no animation that competes with page scrolling.

## Photography

Selected large editorial images may use a very restrained viewport-linked drift. The prototype caps movement at approximately ±28 px and applies a small scale buffer to prevent exposed image edges.

This is not full parallax. It must be removed wherever it distracts from reading, creates visible cropping problems or makes scrolling feel less direct.

## Accessibility and progressive enhancement

`prefers-reduced-motion: reduce` is mandatory. Reduced-motion mode removes image drift and unnecessary translation and shortens transitions to near-immediate state changes.

Motion is progressive enhancement. The page must remain complete, understandable and usable if JavaScript is unavailable or motion is disabled.

Keyboard focus remains governed by the existing CYA focus-ring treatment. Motion must never delay focus or hide the current focus target.

## Prototype 01 — Homepage

Goal: establish quality and brand rhythm without making the homepage feel animated.

- Hero copy enters as a restrained composition with a short 55 ms internal stagger.
- Hero photography settles subtly and then becomes visually stable.
- The Workday moment sequence supports the Workday, Interrupted logic: working context → useful interruption → return.
- Planning pathways use fast pointer/tap response rather than decorative animation.
- Selected large photography may use the restrained image drift.
- Proof and final conversion reveal once and remain stable.

Guardrails: no autoplay carousel, animated counters, bounce, elastic easing or repeated entrance animation.

## Prototype 02 — Workplace Wellbeing Programs

Goal: use motion to make service architecture and program rhythm easier to understand.

- Hero and context strip establish people/place/pace → useful program → continuity.
- The four `#program-shape` steps preserve clear linear order.
- On mobile, the existing snap sequence uses swipe → snap → settle without extra post-snap animation.
- Ingredients, participation and workplace-rhythm sections reveal as compositions rather than line-by-line.
- Process cards receive restrained interaction response.
- Photography may use the editorial drift where it remains secondary to comprehension.

Guardrail: motion must reduce cognitive load. Process steps are not converted into a desktop carousel.

## Prototype 03 — Work Wellness editorial page

Route: `/blog/what-is-work-wellness`

Goal: support long-form reading while giving major editorial transitions a measured pace.

- Kicker, title and lead resolve cleanly at article entry.
- Major article sections reveal once as complete blocks.
- The important guardrail/callout receives one quiet emphasis entrance.
- The perspective aside may receive the same restrained emphasis behaviour.
- Most prose remains completely still.
- Related links and final conversion use immediate interaction response.

Guardrails: no paragraph-by-paragraph reveal, animated text highlighting, persistent scroll effects on copy or reading-progress theatrics.

## Browser implementation

The prototype deliberately adds no animation library. It uses:

- CSS custom properties for motion tokens;
- `IntersectionObserver` for one-time section reveals;
- `requestAnimationFrame` for the small viewport-linked image drift;
- route-scoped activation through `MotionController`;
- existing CYA Tailwind/CSS styling and focus behaviour.

Prototype routes:

- `/`
- `/workplace-wellbeing-programs`
- `/blog/what-is-work-wellness`

No other page receives the motion layer during this validation phase.

## Rollout gate

Do not apply v1 site-wide until the three prototype experiences have been reviewed against:

1. perceived calm and brand fit;
2. hierarchy and comprehension;
3. desktop pointer behaviour;
4. mobile swipe and scroll behaviour;
5. keyboard focus;
6. `prefers-reduced-motion`;
7. layout stability and image cropping;
8. performance and absence of interaction delay.

Once those checks pass, the motion primitives can be applied systematically to the remaining CYA page patterns rather than recreated page by page.
