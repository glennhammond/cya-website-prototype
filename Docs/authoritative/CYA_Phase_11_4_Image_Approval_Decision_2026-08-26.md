# CYA Website — Phase 11.4 Image Approval Decision

**Decision date:** 26 August 2026  
**Status:** decision-complete / superseding authority  
**Decision owner:** Glenn Hammond

## Decision

All images in the governed Corporate Yoga Australia website image library are approved for CYA website publication.

This explicit decision supersedes any earlier Phase 11.4, prototype image-audit, image-mapping, page-specific or launch-gate language that describes current CYA website imagery as:

- `evidence-required` for publication permission;
- awaiting participant/model/client marketing-use consent;
- requiring separate Pilates-specific image permission;
- requiring image-permission confirmation before launch.

## Repository implementation

The decision is implemented by:

- setting every governed `media.*` asset in `content/media.ts` to `status: "approved"`;
- setting `photographyPublicationApproved: true` in `config/launch-approvals.json`;
- closing `CYA_Phase_11_4_Photography_Clearance_Register_v1.0.md` as COMPLETE;
- retaining only non-permission production notes where still useful, such as interim hero-media status, source resolution or separate facilitator credential governance.

## Pilates consequence

The prior Workplace Pilates publication blocker **“obtain permissioned Pilates-specific imagery” is cleared and removed**.

Remaining Pilates publication questions concern service evidence and practitioner/credential/availability qualification, not image permission.

## Case-study consequence

Approval of the photography library does **not** automatically approve client case-study facts, quotations, outcomes, metrics or publication of named client stories. Those remain governed separately.

## Production-payload consequence

Image approval does not create a reason to expose internal governance notes publicly. Phase 11.4 continues to keep EvidenceStatus/production annotations out of production client payloads where they are not public-facing content.
