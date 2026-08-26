# CYA Website — Phase 11.4 Photography Clearance Register v1.0

**Status:** COMPLETE  
**Decision date:** 26 August 2026  
**Authority:** explicit CYA website publication approval confirmed by Glenn Hammond; implemented in `content/media.ts` and `config/launch-approvals.json`.

## Decision

All images in the governed CYA website image library are approved for CYA website publication.

This decision supersedes the earlier provisional `evidence-required` image-permission state carried forward from the prototype image audit and mapping work.

The repository now records:

- every governed `media.*` asset as `status: "approved"`;
- `photographyPublicationApproved: true` in `config/launch-approvals.json`;
- asset notes only for useful non-permission production considerations, such as the interim Home hero poster or preferred higher-resolution source.

## Approved governed assets

| Media key | Publication status |
|---|---|
| `homeHero` | approved |
| `homeOneOff` | approved |
| `workplaceWellbeingHero` | approved |
| `debbyTeacherPortrait` | approved |
| `workplaceWellbeingLunchLearn` | approved |
| `movementHero` | approved |
| `movementGroupIndustrial` | approved |
| `movementFacilitatorAdjustment` | approved |
| `conferencesHero` | approved |
| `conferencesStudioAccess` | approved |
| `programsHero` | approved |
| `programsContinuity` | approved |
| `programsMultiSite` | approved |
| `studioEmployeeHome` | approved |
| `aboutHero` | approved |
| `aboutDebbyPortrait` | approved |
| `aboutWorldview` | approved |
| `aboutFacilitator` | approved |
| `aboutDelivery` | approved |
| `proofHero` | approved |

## Boundaries

Image publication approval does **not** automatically approve unrelated evidence claims attached to a page or person.

For example:

- facilitator qualification/credential claims remain subject to their own evidence gate;
- client case-study facts, quotations, outcomes and permissions remain subject to Case Studies governance;
- the Home hero image is publication-approved but remains an interim poster until the final commissioned hero still/video is selected;
- source-resolution improvements may still be made for visual quality without reopening publication permission.

## Launch consequence

Photography permission is **no longer a Phase 11.4 launch blocker**.

`npm run qa:launch` should now treat the governed photography layer as cleared unless a future asset is added without `approved` status.
