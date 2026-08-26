# CYA Website — Phase 11.4 Photography Clearance Register v1.0

**Purpose:** convert the provisional CYA photography library into an explicit publication-permission gate for the production website.  
**Authority:** `content/media.ts`, `Docs/CYA_Prototype_v1_Image_Audit.md`, `Docs/CYA_Prototype_v1_Image_Mapping.md`, Phase 11.4 launch-readiness gate.  
**Current state:** two named Debby Lewis portraits are approved; active documentary photography remains `evidence-required` until permission is confirmed or the image is replaced.

## Governing rule

Do **not** mark an image `approved` merely because it exists in the CYA archive or has appeared on a previous website.

For each renderable image, production needs one of:

1. documented permission/ownership sufficient for CYA marketing publication; or
2. a replacement asset with documented publication rights.

When an asset is cleared, update its `status` in `content/media.ts` to `approved` and replace the provisional note with a concise provenance/permission note.

`npm run qa:launch` discovers active `media.*` references automatically and will continue to block launch while a renderable asset is not approved.

## Already approved

| Media key | Current use | Status | Evidence note |
|---|---|---|---|
| `debbyTeacherPortrait` | Home founder close, Yoga facilitator, Workshops | **approved** | Debby Lewis; approved for CYA's own site use |
| `aboutDebbyPortrait` | About origin story | **approved** | Debby Lewis; approved for CYA's own site use |

## Active launch-critical assets awaiting clearance

| Media key | Main current use | Current status | Specific clearance issue |
|---|---|---|---|
| `homeHero` | Home hero poster | evidence-required | publication consent undocumented; temporary hero poster |
| `homeOneOff` | Home / Yoga editorial imagery | evidence-required | publication consent undocumented |
| `workplaceWellbeingLunchLearn` | Home, Programs, Mindfulness, Workshops | evidence-required | publication consent undocumented |
| `conferencesHero` | Home conference pathway / Conferences | evidence-required | Debby identified; group-member consent undocumented |
| `programsHero` | Programs / Yoga | evidence-required | publication consent undocumented |
| `programsContinuity` | Home / Programs | evidence-required | publication consent undocumented |
| `programsMultiSite` | Programs multi-site | evidence-required | publication consent undocumented |
| `movementHero` | Movement hero | evidence-required | permission undocumented; higher-resolution source also required for large placement |
| `movementGroupIndustrial` | Movement / Yoga participation | evidence-required | publication consent undocumented |
| `movementFacilitatorAdjustment` | Movement inclusion | evidence-required | publication consent undocumented |
| `studioEmployeeHome` | Online Wellbeing / Mindfulness / Programs | evidence-required | publication consent undocumented |
| `conferencesStudioAccess` | Online Wellbeing continuity | evidence-required | video-call participant marketing consent undocumented |
| `aboutHero` | About hero | evidence-required | publication consent undocumented |
| `aboutWorldview` | About / Mindfulness | evidence-required | publication consent undocumented |
| `aboutFacilitator` | About facilitator-network section | evidence-required | named individual; marketing consent and facilitator credentials not yet verified |
| `aboutDelivery` | About / Workshops delivery | evidence-required | publication consent undocumented |

## Conditional / non-blocking library assets

These remain governed but do not currently need to block release while their associated public content is withheld.

| Media key | Reason it is conditional | Current status |
|---|---|---|
| `proofHero` | Home proof is suppressed and Case Studies is noindex until a publishable story exists | evidence-required |
| `workplaceWellbeingHero` | old generic Workplace Wellbeing implementation has been retired | evidence-required |

If either becomes renderable again, `qa:launch` should treat it as active automatically through source-reference discovery.

## Recommended clearance workflow

### Pass 1 — provenance

For every active asset, record:

- photographer/source;
- who supplied the file to CYA;
- identifiable people shown;
- client/location shown, if applicable;
- whether the image has an existing model/client release or written marketing permission;
- any usage limits.

### Pass 2 — decision

Choose one:

- **APPROVE** — permission is sufficient; update `content/media.ts`.
- **REPLACE** — permission is uncertain or composition is not worth clearing; nominate an approved replacement.
- **REMOVE** — the section works without the image.

### Pass 3 — production verification

Before setting `photographyPublicationApproved: true` in `config/launch-approvals.json`:

- all renderable media returned by `npm run qa:launch` must be `approved`;
- the Home hero must have an approved final still/video frame or approved replacement;
- no named facilitator image may publish without the corresponding marketing-use permission;
- no client/team/video-call participant image may rely on assumption or prior-publication history alone.

## Future shoot

The existing image audit already identifies the future photo shoot as the clean long-term solution. Where clearance is slow or ambiguous, replacement is preferable to weakening the evidence-status governance.

This register is deliberately finite: resolving the 16 active assets above clears the current photography launch gate without reopening the CYA visual direction.
