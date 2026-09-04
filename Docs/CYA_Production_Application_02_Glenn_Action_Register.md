# CYA Production Application 02 — Glenn Action Register

**Status:** CURRENT  
**Date:** 5 September 2026  
**Purpose:** isolate the remaining tasks that genuinely require Glenn/CYA input from work that can be completed autonomously in code, Figma, documentation or QA.

## Decisions now closed

### G01 — Workshop Monthly role — CLOSED

**Decision:** **Option A approved by Glenn on 5 September 2026.**

Workshop Monthly is a recurring offer/content pattern within **Workplace Wellbeing Workshops & Expert Experiences**, broader Programs and/or client activation. It does **not** receive a separate indexable canonical SEO page.

Implementation consequence:

- do not create a standalone `/workshop-monthly` canonical route;
- preserve `/workplace-wellbeing-workshops` as the governed search destination for workplace wellbeing workshops and expert experiences;
- individual monthly themes can be surfaced as current content, activation material or campaign content without creating competing evergreen search ownership;
- any temporary campaign route should be governed separately for lifecycle, canonical/noindex behaviour and conversion purpose.

### G05 — Photography pilot budget/model — CLOSED

**Decision:** **Option B — Minimum Viable Shoot approved by Glenn on 5 September 2026.**

Working planning range remains approximately **A$5,000–A$7,500 ex GST** if external still+motion suppliers are used. Glenn may also self-produce/lead capture where practical, using the same governed shot requirements.

A field-ready shot list is now available at:

`Docs/CYA_Production_Application_02_MVS_Shot_List.md`

---

## Already closed autonomously

- Homepage current-Figma CTA hierarchy reconciled in production.
- Current Homepage hero formally added to the governed media register.
- Glenn's confirmation that all supplied CYA images are approved for CYA use recorded in the photography clearance authority.
- Programs temporary Cromwell-image language removed; general CYA imagery is explicitly separated from named-client evidence.
- Workshops remains on an approved, rights-cleared Lunch & Learn image.
- Phase 06A release map and 06B/06C gate refreshed.
- Comprehensive GitHub pre-launch QA configured to run on the current production branch and PR base.
- Vercel production builds remain fail-closed for indexing, analytics and live enquiry submission until final gates are approved.
- Workshop Monthly architecture decision closed without creating a duplicate SEO destination.
- Minimum Viable Shoot model selected and detailed field shot list produced.

## Glenn-specific tasks — launch path

### G02 — Unlock the interactive browser QA gate — CURRENT PRIORITY

**Why Glenn is needed:** current Vercel Preview Authentication redirects the available automated session into SSO. Code/build QA is passing, but visual/keyboard/zoom QA cannot truthfully be marked complete.

**Preferred secure route:** use Vercel **Protection Bypass for Automation** rather than disabling Preview Protection.

### Glenn steps in Vercel

1. Open Vercel and select the **Artifact** team/workspace.
2. Open project **cya-website-prototype**.
3. Open **Settings**.
4. Open **Deployment Protection** (the wording can appear under Security/Deployment Protection depending on the current Vercel UI).
5. Find **Protection Bypass for Automation**.
6. Generate/enable a bypass secret.
7. Copy the generated value somewhere secure. **Do not paste it into chat.**
8. Add it to the project's environment variables as:
   - name: `VERCEL_AUTOMATION_BYPASS_SECRET`
   - value: the generated secret
   - environment: **Preview** at minimum.
9. Also add the same secret to GitHub Actions as a repository Actions secret named `VERCEL_AUTOMATION_BYPASS_SECRET` if the hosted Playwright/browser QA is run from GitHub Actions.
10. Tell ChatGPT only that the bypass is configured; do not send the value.

**Security note:** Preview Authentication remains enabled. The bypass secret is used only by authorised automation through the `x-vercel-protection-bypass` request header.

---

### G03 — Privacy Policy and Website Terms approval

The repository deliberately records both as not yet approved for production release.

**Glenn action:** obtain/record final CYA business/legal approval for the Privacy Policy and Website Terms when ready. Until then the release remains fail-closed.

This does not prevent continued design/build work.

---

### G04 — Final release/indexing approval

Search indexing, analytics and production cutover are deliberately disabled until the release gates close.

**Glenn action:** only after browser/accessibility/performance/security/conversion gates pass, approve the final production cutover and indexing decision. No action is required yet.

---

## Glenn-specific tasks — photography/motion pilot

These do **not** block the current website code release unless CYA decides the new photography must be available before launch.

### G06 — Identify one genuine Brisbane workplace for the pilot

The Minimum Viable Shoot needs one credible workplace with desk, meeting, breakout/circulation and quiet-edge zones.

**Glenn action:** identify the most realistic client/workplace candidate with Deb. Do not book anything until location permission is confirmed.

---

### G07 — Confirm people for the pilot

Recommended coverage needs:

- one CYA facilitator;
- approximately 6–8 consenting workplace participants;
- one consenting remote participant for the hybrid sequence.

**Glenn action:** confirm likely facilitator and workplace participant source with Deb once a location is chosen.

---

### G08 — Decide production model / supplier appointment

The MVS is approved. It can now be executed either:

- Glenn-led/self-produced where the still+motion coverage can be achieved to the shot-list standard; or
- with an external photographer/videographer or two-person production team.

The supplier quote request, rights requirements and comparison scorecard are already prepared if external support is used.

**Glenn action:** once the location and participant model are known, decide whether to self-produce fully, bring in a photographer/videographer, or use a two-person crew. If quotes are obtained, prioritise documentary workplace sensibility, rights clarity and still+motion capability over lowest cost.

---

## Not currently a Glenn task

The following remain autonomous/system work unless a genuine blocker appears:

- maintaining page metadata, schema and internal-link integrity;
- build and TypeScript qualification;
- brand-authority and search QA;
- keeping supplied imagery governed correctly;
- maintaining truth separation between general imagery and named-client evidence;
- refining Home, Programs and Workshops within approved authorities;
- maintaining release documentation and PR evidence;
- preparing shoot briefs, releases, naming/metadata and ingestion workflow;
- fixing any technical defects exposed by CI.

## Recommended order for Glenn

1. **G02 — Browser QA access** — now the only immediate technical release action requiring Glenn.
2. Leave G03/G04 until final release preparation.
3. For the shoot, move through **G06 → G07 → G08** when ready: workplace → people → production model/booking.
