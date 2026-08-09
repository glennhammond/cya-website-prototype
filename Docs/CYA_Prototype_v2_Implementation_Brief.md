# Corporate Yoga Australia website prototype v2

## Role

Act as an integrated senior digital product team comprising:

- an award-winning creative director;
- a principal UX and service designer;
- a senior B2B brand and positioning strategist;
- an editorial and content director;
- a senior interaction designer;
- a principal Next.js and React engineer;
- an accessibility and performance specialist; and
- a rigorous design-quality reviewer.

Your task is to transform the existing Corporate Yoga Australia prototype into a materially stronger **prototype v2**.

This is not a cosmetic reskin. It is a strategic, visual and interaction redesign that must correct clear weaknesses in prototype v1 while preserving the useful technical foundation.

Do not begin by coding. First inspect the repository, review the governing source material, audit the current implementation and produce a concise implementation plan. Then proceed with the approved direction described in this prompt.

---

# 1. Project context

The current prototype is deployed from the repository:

`glennhammond/cya-website-prototype`

The current implementation uses:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- the App Router;
- reusable components;
- structured content files; and
- an evidence-status content-governance system.

Retain this stack and useful architecture unless there is a clear technical reason to change something.

The present prototype is structurally functional, but its rendered experience does not yet meet the required standard.

The most obvious current problems include:

- an overcrowded and poorly prioritised desktop navigation;
- navigation labels wrapping onto two lines;
- an oversized header CTA competing with the navigation and logo;
- a generic split-column homepage hero;
- weak and inconsistent hero treatments across internal pages;
- excessive pale-grey backgrounds and white rounded cards;
- insufficient visual contrast and editorial rhythm;
- repeated messaging in the first homepage sections;
- a five-card pathway section with overlapping options;
- an unbalanced five-card grid;
- too much explanation before proof or emotional engagement;
- a visual system that feels component-led rather than art-directed;
- page structures that resemble a conventional service catalogue;
- an authentic but poorly framed homepage image;
- excessive reliance on the same reusable hero and card patterns;
- insufficient distinction between Corporate Yoga Australia’s editorial character and Wellbeing Studio’s denser product character.

Prototype v2 must correct these issues decisively.

---

# 2. Source authority and conflict resolution

Use this hierarchy when sources conflict:

1. The approved Stage 2 Experience and Content Definition.
2. The commercial and strategic principle stated below.
3. Confirmed decisions and content already represented in the current prototype.
4. The Corporate Yoga Australia Website Experience Blueprint as a visual, art-direction, interaction and compositional reference.
5. Prototype v1 as an implementation reference only.

The Website Experience Blueprint contains strong visual and experience thinking, but its original commercial emphasis on “selling the year” has been superseded.

Do not reinstate that superseded strategy.

## Superseded blueprint ideas

Do not use these ideas as the governing commercial proposition:

- “Stop selling sessions. Start selling the year.”
- “Wellbeing isn’t a day. It’s a year.” as the homepage’s primary proposition.
- one-off work represented as an incomplete or inadequate year;
- eleven empty months presented as evidence that a single booking is insufficient;
- the homepage existing solely to move buyers from a session to an annual program;
- an annual program treated as the default or preferred starting point;
- The Year automatically becoming the dominant navigation item;
- any interaction that makes one-off buyers feel that their requirement is too small.

The blueprint remains highly relevant for:

- documentary photography;
- premium editorial composition;
- reduced visual density;
- full-width and asymmetric layouts;
- restrained use of cards;
- purposeful motion;
- visible rhythm and continuity;
- page-specific visual ideas;
- distributed proof;
- interaction discipline;
- mobile adaptation;
- accessibility;
- colour and typography;
- the distinction between CYA and Wellbeing Studio.

---

# 3. Governing commercial position

The website must clearly communicate that one-off work is welcomed and valuable.

## Approved homepage proposition

### Kicker

One-off sessions and ongoing workplace wellbeing programs

### Heading

Start with one useful moment or build a connected year.

Use typographically correct punctuation in the rendered version. An em dash may be used if it improves the line.

### Supporting copy

Book a one-off movement, mindfulness, workshop or conference session. When you are ready to create greater continuity, CYA can bring those moments together through recurring programs and Wellbeing Studio.

### Primary action

Book a wellbeing consultation

### Secondary action

Explore one-off sessions

## What this must establish immediately

- One-off bookings are welcomed.
- Clients do not have to commit to a program.
- One-off work is a legitimate and complete starting point.
- Ongoing support provides continuity when an organisation wants it.

## Strategic progression

The progression is:

1. One useful moment
2. A short series or recurring rhythm
3. A connected workplace program
4. An organised year of support

This is a progression of opportunity, not a compulsory sales ladder.

## Internal Stage 2 principle

Corporate Yoga Australia makes it easy to begin with one useful moment. For organisations seeking greater continuity, those moments can become a recurring program or connected year of workplace wellbeing support.

This principle must shape:

- the homepage;
- navigation;
- service hierarchy;
- program presentation;
- annual visualisations;
- calls to action;
- internal-page copy;
- interaction;
- proof placement.

Never imply that the fourth stage is inherently better than the first.

---

# 4. Primary audience and intended experience

The priority visitor is an HR, People and Culture, workplace-experience or event decision-maker.

They may arrive wanting:

- one session;
- an awareness-day activity;
- a workshop;
- a conference activation;
- recurring workplace sessions;
- a broader program;
- digital support through Wellbeing Studio;
- national or multi-location delivery.

The opening experience should create:

1. recognition;
2. comprehension;
3. confidence;
4. interest;
5. a proportionate next step.

The experience should feel:

- calm;
- capable;
- mature;
- warm;
- practical;
- inclusive;
- workplace-aware;
- distinctly Australian;
- premium through judgement and craft rather than luxury styling.

It must not feel:

- like a yoga studio;
- like a wellness template;
- like a generic corporate benefits platform;
- spiritual or retreat-coded;
- overly feminine or pastel;
- like a catalogue of isolated classes;
- like an administrative calendar;
- like a SaaS dashboard;
- visually busy or card-heavy.

---

# 5. Required audit before implementation

Before changing code, inspect:

- the full repository;
- current routes;
- global layout;
- navigation;
- homepage component order;
- all hero components;
- structured content;
- media manifest;
- design tokens;
- responsive behaviour;
- accessibility implementation;
- evidence-status system;
- existing image library;
- current build and lint status.

Then create a concise internal implementation report containing:

## A. Material divergences

List every major way prototype v1 diverges from:

- the approved Stage 2 strategy;
- the required premium creative direction;
- the blueprint’s useful visual principles.

## B. Component decisions

For every major component, classify it as:

- retain;
- retain and revise;
- rebuild;
- remove.

At minimum assess:

- global header;
- mobile navigation;
- homepage hero;
- internal page hero;
- pathway selector;
- editorial feature;
- offer progression;
- year view;
- proof preview;
- Studio preview;
- CTA sections;
- footer;
- card components.

## C. Proposed component architecture

Identify:

- new components;
- revised components;
- page-specific hero archetypes;
- shared primitives;
- content-model changes;
- any new interaction state.

## D. Media mapping

Identify which existing images are suitable for:

- homepage hero;
- one-off sessions;
- conferences;
- ongoing programs;
- Wellbeing Studio;
- delivery proof;
- facilitator network;
- founder section.

Do not invent files. Use only assets that exist. Where no suitable asset exists, create a clearly labelled placeholder state rather than substituting generic imagery.

After the audit, proceed with implementation under the requirements below. Do not stop merely because some content evidence is unresolved. Preserve or extend the existing evidence-status system.

---

# 6. Global navigation redesign

The existing navigation is unacceptable and must be rebuilt.

## Desktop requirements

Use a maximum of six primary navigation labels plus one action.

Recommended structure:

- Services
- Conferences and events
- Programs
- Wellbeing Studio
- Proof
- About

However, if fitting and hierarchy are stronger, Conferences and events may be placed under Services, producing:

- Services
- Programs
- Wellbeing Studio
- Proof
- About

The latter is preferred if the dropdown is well designed and accessible.

## Utility items

- Member sign-in must not compete with primary sales navigation.
- Place it as a smaller utility link, potentially above the main navigation, at the far edge of the header, or inside a compact utility area.
- Resources should not compete as a primary navigation item. Put it in a secondary location, dropdown or footer unless strong evidence supports primary placement.

## CTA

Retain one persistent action:

Book a wellbeing consultation

The CTA must:

- remain on one line;
- not dominate the entire header;
- use the approved gold fill;
- use Ink text, not white;
- meet accessible target sizing;
- remain visually proportionate at laptop widths.

## Header acceptance tests

The desktop header must remain calm and unbroken at:

- 1280px;
- 1366px;
- 1440px;
- 1536px;
- 1920px.

No primary navigation label may wrap.

The logo must retain clear space and not appear squeezed.

## Mobile navigation

Provide:

- a clear menu control;
- logical grouping;
- visible focus states;
- keyboard operation;
- body-scroll management;
- Escape-to-close;
- focus return;
- utility separation for Member sign-in;
- the consultation CTA without duplicating it excessively.

---

# 7. Homepage opening

Remove the current conventional split-column hero and the current five-card “Choose how to begin” section.

The first three homepage sections currently repeat the same concept. Prototype v2 must instead create a purposeful sequence.

## Required opening sequence

1. Premium editorial hero
2. Concise reassurance or orientation
3. Three primary starting paths
4. Strong one-off-session feature
5. Optional progression visual

Do not repeat “start”, “useful” and “begin” across consecutive large headings.

---

# 8. Homepage hero art direction

Use the blueprint’s hero treatment as a visual reference, but retain the approved Stage 2 message.

## Desktop composition

- One wide documentary photograph should dominate the hero.
- The hero should feel image-led, not like text beside an image card.
- Use either full-bleed imagery or an editorial contained frame with very strong scale.
- Place copy over a quiet area of the image where a suitable photograph permits.
- Apply a localised Deep Teal gradient only behind the copy, not a heavy overlay across the entire photograph.
- Keep the photograph recognisable and credible.
- Use white display typography over dark imagery.
- Where no image permits accessible overlay text, use a carefully art-directed image-above or image-adjacent alternative. Do not force inaccessible text onto a busy image.
- Avoid large pale-grey empty fields around the image.
- Avoid a generic 50/50 split.
- Avoid a small rounded image rectangle floating beside oversized text.
- Avoid carousels.
- Avoid logo strips, badges or unnecessary proof claims in the first viewport.

## Hero copy

Use the approved kicker, heading, supporting copy and actions exactly unless a very small line-break or punctuation change is required for presentation.

Do not rewrite the proposition.

## Image choice

Use real CYA photography.

Prefer images showing:

- people participating;
- workplace clothing;
- ordinary bodies;
- non-studio settings;
- recognisable workplaces;
- conference or event context;
- outdoor workplace sessions;
- inclusive participation;
- natural, unposed activity.

Avoid:

- generic mat-based yoga;
- isolated athletic poses;
- polished stock wellness imagery;
- hands-in-the-air office teams;
- staged meditation stereotypes.

The high-visibility outdoor workplace photograph in the blueprint is a strong candidate if it exists in the repository and can be used.

## Hero sizing

The hero must feel substantial, but the headline must not dominate so aggressively that supporting content appears miniature.

Balance:

- heading scale;
- body copy;
- buttons;
- image;
- viewport height.

At common desktop sizes, the primary message and both actions should be visible without requiring a scroll.

## Mobile hero

Mobile is not a scaled-down desktop hero.

Recommended treatment:

- image first, using a deliberate portrait or 4:5 crop;
- text below on a solid accessible background if overlay readability cannot be guaranteed;
- primary action full width;
- secondary action as a quieter outlined button or text link;
- no clipped faces;
- no microscopic kicker;
- no heading that fills nearly the entire screen.

---

# 9. Immediate reassurance section

Directly after the hero, include a concise orientation statement.

Its purpose is to remove buyer anxiety, not repeat the hero.

Communicate:

- one session can stand alone;
- there is no required starting point;
- clients can repeat or connect activities later if useful.

Keep this section visually restrained.

Do not turn it into another large headline, paragraph and five-card sequence.

Possible editorial direction:

“Begin with the need in front of you.”

Supporting idea:

A single session, a conference activation, a short series or a connected program are all valid ways to work with CYA.

This wording is indicative. Preserve the approved voice and avoid unnecessary repetition.

---

# 10. Primary pathways

Replace the current five overlapping cards with three primary pathways:

## One-off workplace sessions

Movement, mindfulness, workshops and Lunch and Learns for teams, awareness days and particular workplace moments.

## Conferences and events

Short activations, movement breaks and wellbeing experiences designed around the event, venue and agenda.

## Ongoing programs

Recurring sessions and connected workplace wellbeing support designed around people, locations and priorities.

## Presentation

Do not use three identical white cards by default.

Use a more premium editorial solution, such as:

- large image-led panels;
- asymmetrical blocks;
- alternating image and text;
- one dominant pathway with two supporting pathways;
- a restrained three-column layout with large contextual images.

Each path should be visually distinct while belonging to one system.

Wellbeing Studio should not be a fourth equivalent pathway card here. Introduce it later as the digital continuity layer.

---

# 11. One-off sessions section

One-off services must receive genuine emphasis.

This section must show that one-off bookings are valuable in their own right, not merely feeders into programs.

Include representative formats such as:

- movement;
- mindfulness;
- workshops;
- Lunch and Learns;
- awareness-day sessions;
- conference activations.

Use real photography and practical examples.

Avoid defensive wording.

Do not repeatedly say “one-off sessions are valuable”. Demonstrate their value through:

- context;
- fit;
- delivery;
- participant experience;
- flexibility;
- examples.

Use a clear action appropriate to this stage, such as:

Explore one-off sessions

or

Discuss a one-off session

Do not repeat the header CTA label unnecessarily.

---

# 12. Progression of opportunity

Introduce the progression only after one-off work has been established as legitimate.

## Required stages

1. One useful moment
2. Recurring rhythm
3. Connected program
4. Organised year

## Visual principle

Show increasing continuity, not increasing superiority.

A timeline, rhythm band or annual framework may be used, inspired by the blueprint’s time-based visual language.

However:

- do not show one marked month and eleven months as a failure;
- do not describe a one-off booking as incomplete;
- do not make the annual option look mandatory;
- do not use a pricing-table pattern;
- do not use “basic”, “better”, “best” framing;
- do not apply “most popular” badges;
- do not imply that small clients should buy more.

Each stage should be framed positively:

### One useful moment

A focused experience for a particular team, event or need.

### Recurring rhythm

Repeat what works so support becomes familiar and easy to access.

### Connected program

Coordinate live, digital and learning elements around people and priorities.

### Organised year

Plan continuity across the year while retaining flexibility.

The visual should communicate optional progression in a few seconds.

---

# 13. Wellbeing Studio section

Wellbeing Studio should be introduced as the way support can continue between live moments and reach people across locations and schedules.

## Position

Place it after the site has established:

- one-off services;
- recurring options;
- broader programs.

## Visual treatment

Use the shared design system but permit a denser product-oriented composition:

- Soft Mist background;
- real practice thumbnail;
- play control where possible;
- weekly live rhythm;
- on-demand support;
- facilitator visibility;
- behind-the-scenes production imagery where suitable.

Use the endorsement:

Wellbeing Studio, by Corporate Yoga Australia

Use a purposeful action:

See the Studio

Do not use a generic text-and-image card identical to other sections.

---

# 14. Proof and capability

Move from claims to evidence.

Distribute proof throughout the experience rather than quarantining it in one generic testimonials section.

Possible proof types include:

- real workplace settings;
- delivery formats;
- facilitator locations;
- facilitator disciplines;
- repeat work;
- real event photography;
- planning and coordination capability;
- operational standards;
- Google review summary where verified;
- case-study material where approved.

Do not invent:

- metrics;
- client names;
- client logos;
- testimonials;
- awards;
- facilitator counts;
- city coverage;
- longevity claims;
- clinical or organisational outcomes.

Retain the evidence-status system.

Where claims are unresolved, create a visually complete provisional state that does not mislead.

## Facilitator presentation

Where the network is shown, make it a capability argument, not a decorative team gallery.

Use:

- consistent portrait sizing;
- names;
- cities;
- disciplines;
- clear grouping.

Do not rely solely on a map with dots.

---

# 15. Founder and close

The homepage should end with a human, relational conclusion.

Use a substantial image of Debby where an approved image exists.

The section should:

- connect the founder to the organisation;
- show that CYA is more than one person;
- maintain personal warmth;
- avoid making Debby appear to be the sole operational point;
- use evidence-dependent claims only when confirmed.

The closing action should not simply repeat the header button.

Use a relational direction such as:

Let’s plan what would be useful.

or

Let’s talk about your workplace.

Retain the approved conversion endpoint.

Do not claim a reply timeframe unless confirmed.

---

# 16. Internal page hero system

The current internal-page heroes are too generic and repetitive.

Do not apply one universal hero layout to every route.

Create a small system of page-specific hero archetypes sharing tokens but using different compositions.

## A. Services overview

- service pathways visible early;
- strong workplace image or image sequence;
- clear answer to “What do you actually do?”;
- avoid a generic image card beside copy.

## B. One-off service pathway pages

- setting-led documentary image;
- direct practical proposition;
- durations, formats or contexts visible near the fold;
- clear CTA appropriate to the specific service;
- show where it may sit within broader support without forcing progression.

## C. Conferences and events

- large real-event photography;
- energy, scale and venue context;
- logistical confidence;
- date-oriented action such as “Check a date” where implemented;
- no tranquil generic wellness image.

## D. Programs

- continuity or rhythm visual should be primary;
- show different levels of support through scope and coordination;
- do not use conventional pricing cards;
- clearly explain that one-off work remains available elsewhere.

## E. Wellbeing Studio

- show the product or practice experience immediately;
- use real media;
- make the live and on-demand rhythm tangible;
- distinguish CYA’s editorial site from Studio’s utility character.

## F. Proof

- evidence-led editorial composition;
- record, settings, standards and verified material;
- do not use a generic lifestyle photograph as the main argument.

## G. About

- founder plus organisation;
- documentary network imagery;
- show continuity, values and operating capability;
- avoid a generic biography layout.

## H. Facilitators

- people-first;
- grouped by location;
- consistent portrait system;
- clear capability information.

## I. Contact

- calm and direct;
- the form is the experience;
- minimal decorative hero;
- no repeated oversized marketing introduction before the form.

Shared tokens do not require identical page composition.

---

# 17. Visual system

Use the visual principles from the Website Experience Blueprint, adapted to the approved Stage 2 strategy.

## Corporate Yoga Australia character

- documentary;
- low density;
- generous section rhythm;
- dominant contextual photography;
- strong display-to-body contrast;
- asymmetric compositions;
- full-width or broad image fields;
- hairline rules;
- cards used sparingly;
- restrained corner radii;
- gold used for priority actions and selected labels only;
- aqua mostly reserved for focus, indicators or Studio-related utility.

## Wellbeing Studio character

- denser;
- more card-based;
- utility-oriented;
- contained on Soft Mist;
- thumbnails and product previews;
- slightly more frequent aqua indicators.

A screenshot with logos removed should still make the two experiences feel related but functionally different.

## Avoid

- a white rounded card for every concept;
- repeated three-column card grids;
- excessive shadows;
- pill styling everywhere;
- decorative gradients unrelated to content;
- oversized border radii;
- excessive centred composition;
- giant headings followed by undersized body text;
- pale-grey section after pale-grey section;
- identical vertical spacing regardless of narrative importance.

---

# 18. Colour and accessibility

Use the existing confirmed tokens unless the repository contains a more authoritative current set.

Expected palette includes:

- Wellbeing Teal `#17535B`
- Deep Teal `#103F45`
- Warm Ochre `#BD964A`
- Ochre Ink `#8A6A1F`
- Logo Teal `#5CB8B2`
- Logo Pale `#BEE3E0`
- Action Aqua `#39AEB8`
- Soft Mist `#F4F6F5`
- Ink `#253336`
- Body `#596467`

## Binding contrast rules

- Gold buttons use Ink text.
- Never use white text on the gold button.
- Gold-coloured text on white uses Ochre Ink.
- Kicker text on dark photographic overlays uses Logo Pale, not gold.
- Aqua is not used as normal text on white.
- All focus states must be clearly visible.
- Do not rely on image overlays without testing contrast against the actual crop.

Target WCAG 2.2 AA.

---

# 19. Typography

Retain the approved typography where already implemented correctly.

The system should feel:

- confident;
- readable;
- editorial;
- human.

Correct the current imbalance between:

- very large hero headings;
- relatively small supporting copy;
- small navigation;
- underpowered card headings.

Requirements:

- comfortable body sizes;
- restrained line lengths;
- clear heading hierarchy;
- strong but not overpowering display type;
- no body copy below a practical reading size;
- responsive `clamp()` use where appropriate;
- no awkward two-word orphan lines where avoidable;
- navigation readable without feeling heavy.

---

# 20. Motion and interaction

Motion must clarify:

- continuity;
- state;
- hierarchy;
- focus.

Do not add motion merely to make the site feel premium.

Potential uses:

- subtle hero-image settling;
- progression bands expanding;
- rhythm states changing;
- section content entering gently;
- button and navigation state changes.

Requirements:

- no scroll hijacking;
- no delayed access to content;
- no excessive parallax;
- no autoplay sound;
- no essential information hidden behind animation;
- respect `prefers-reduced-motion`;
- the page must remain coherent with all animation disabled.

The quality test:

Turn off every animation. The experience should still feel premium and complete.

---

# 21. Responsive behaviour

Treat mobile as a primary experience.

Test at minimum:

- 320px;
- 375px;
- 390px;
- 430px;
- 768px;
- 1024px;
- 1280px;
- 1440px;
- 1920px.

Requirements:

- no horizontal overflow;
- no clipped headings;
- no unreadably small typography;
- no large empty regions caused by desktop composition;
- no hidden fourth or fifth card in unnecessary carousels;
- images have deliberate mobile crops;
- buttons remain usable;
- interactive controls meet touch-target guidance;
- progression visual remains understandable on mobile;
- page-specific heroes adapt intentionally.

Use horizontal scrolling only where it provides genuine value, such as a clearly signposted facilitator portrait row.

---

# 22. Technical requirements

Retain and improve:

- TypeScript;
- semantic HTML;
- Next.js App Router;
- server components where practical;
- structured content;
- reusable components;
- content evidence status;
- responsive images;
- route metadata.

Minimise client-side JavaScript.

Use client components only for actual interaction.

Ensure:

- image dimensions prevent layout shift;
- Next.js image optimisation is used appropriately;
- fonts are loaded efficiently;
- heading levels are valid;
- landmarks are correct;
- menus are accessible;
- focus is managed;
- forms retain labels;
- reduced-motion support is implemented;
- no console errors;
- no hydration warnings;
- production build passes;
- lint passes.

Do not add a CMS, analytics platform or third-party package unless required for this prototype and justified in the implementation report.

---

# 23. Content governance

Do not fabricate or strengthen unsupported claims.

Maintain explicit status for:

- verified;
- recommended;
- evidence-dependent;
- permission-dependent;
- provisional;
- legally sensitive.

The evidence-status mode must remain available in development and preview environments but absent or disabled in production presentation.

Do not expose internal governance labels in ordinary public-facing layouts.

---

# 24. Implementation sequence

Complete the work in this order.

## Phase 1: Audit and plan

- inspect repository;
- compare current site with this brief;
- produce divergence report;
- classify components;
- identify image assets;
- confirm implementation sequence.

## Phase 2: Global system

- navigation;
- header;
- footer;
- spacing system;
- typography balance;
- colour and focus rules;
- base editorial primitives;
- image treatment.

## Phase 3: Homepage

- premium hero;
- concise reassurance;
- three pathways;
- one-off feature;
- optional progression visual;
- Studio section;
- proof/capability;
- founder/close.

## Phase 4: Internal hero system

- design and implement page-specific hero archetypes;
- update priority routes first;
- eliminate the generic repeated hero pattern.

## Phase 5: Remaining page refinements

- correct excessive cards;
- improve editorial rhythm;
- distribute proof;
- improve CTA specificity;
- validate responsive behaviour.

## Phase 6: QA

- build;
- lint;
- responsive test;
- keyboard test;
- reduced-motion test;
- contrast check;
- route check;
- content-status check;
- image-performance review;
- screenshot review.

---

# 25. Required output and reporting

At completion, provide:

## A. Summary

Explain:

- what changed;
- what was removed;
- what was rebuilt;
- how the Stage 2 strategy now appears in the experience.

## B. File report

List:

- files added;
- files changed;
- files removed;
- major component responsibilities.

## C. Visual QA evidence

Provide desktop and mobile screenshots, or clearly identify generated screenshot paths, for:

- homepage header and hero;
- first three homepage sections;
- optional progression section;
- Wellbeing Studio section;
- one representative service page;
- programs page;
- conferences page;
- contact page.

Use at least:

- 1440px desktop;
- 390px mobile.

## D. Technical QA

Report:

- `npm run build`;
- `npm run lint`;
- console errors;
- accessibility checks performed;
- reduced-motion behaviour;
- known limitations.

## E. Remaining dependencies

List only genuine unresolved items, such as:

- missing approved imagery;
- unverified claims;
- missing testimonial permission;
- founder copy awaiting confirmation;
- incomplete form integration.

Do not disguise unfinished design work as a content dependency.

---

# 26. Acceptance criteria

Prototype v2 is successful only if all of the following are true.

## First-impression test

Within ten seconds a new visitor can understand:

- CYA provides workplace wellbeing;
- one-off sessions are welcome;
- ongoing programs are also available;
- there is no compulsory commitment;
- the organisation can support more than yoga classes;
- the site feels credible and professionally established.

## Header test

- calm;
- no wrapping;
- clear hierarchy;
- one primary action;
- utility links appropriately secondary.

## Homepage test

- the first three sections do not repeat the same idea;
- the five-card pathway grid is gone;
- one-off work is visibly legitimate;
- progression is optional;
- the page has visual rhythm;
- proof appears through real content and imagery;
- the experience does not feel like a stack of generic components.

## Hero test

- homepage hero feels premium and image-led;
- internal heroes are not all identical;
- image choices support the proposition;
- headings are balanced rather than overpowering;
- mobile treatment is deliberate.

## Visual test

- fewer generic white cards;
- stronger image scale;
- better contrast between sections;
- editorial asymmetry;
- restrained gold;
- CYA and Studio feel related but distinct.

## Accessibility test

- WCAG 2.2 AA intent is evident;
- keyboard navigation works;
- focus is visible;
- reduced motion works;
- contrast rules are followed;
- no critical content depends on motion.

## Technical test

- production build passes;
- lint passes;
- no layout shift caused by unidentified image dimensions;
- no console or hydration errors;
- existing route structure remains stable unless a route change is explicitly justified.

---

# 27. Final instruction

Exercise design judgement.

Do not preserve weak patterns because they already exist.

Do not interpret “premium” as more decoration, animation, shadows or rounded cards.

Premium means:

- stronger prioritisation;
- better composition;
- disciplined typography;
- authentic photography;
- clear user journeys;
- fewer but more meaningful elements;
- deliberate interaction;
- coherent responsive behaviour;
- evidence placed where doubt occurs;
- technical quality.

The goal is not to make prototype v1 prettier.

The goal is to produce a distinctly better Corporate Yoga Australia experience that faithfully combines:

- the approved Stage 2 strategy;
- the best visual and interaction principles from the Website Experience Blueprint; and
- a maintainable, accessible Next.js implementation.