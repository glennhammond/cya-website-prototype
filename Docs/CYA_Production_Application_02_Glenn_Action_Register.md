# CYA Production Application 02 — Glenn Action Register

**Status:** CURRENT  
**Date:** 4 September 2026  
**Purpose:** isolate the remaining tasks that genuinely require Glenn/CYA input from work that can be completed autonomously in code, Figma, documentation or QA.

## Already closed autonomously

- Homepage current-Figma CTA hierarchy reconciled in production.
- Current Homepage hero formally added to the governed media register.
- Glenn's confirmation that all supplied CYA images are approved for CYA use recorded in the photography clearance authority.
- Programs temporary Cromwell-image language removed; general CYA imagery is now explicitly separated from the named-client evidence.
- Workshops remains on an approved, rights-cleared Lunch & Learn image.
- Phase 06A release map and 06B/06C gate refreshed.
- Comprehensive GitHub pre-launch QA configured to run on the current production branch and PR base.
- Vercel production builds remain fail-closed for indexing, analytics and live enquiry submission until final gates are approved.

## Glenn-specific tasks — launch path

### G01 — Decide the role of Workshop Monthly

**Why Glenn is needed:** this is a product/content architecture decision, not an implementation gap.

Choose one of these:

- **Recommended default — A:** Workshop Monthly is a recurring offer/content pattern inside **Workplace Wellbeing Workshops & Expert Experiences** and/or client activation. No new indexable canonical route is created.
- **B:** Workshop Monthly is a distinct evergreen commercial product with a stable offer, audience and conversion path. It receives a governed standalone page and URL.
- **C:** Workshop Monthly is a campaign/landing-page series. It may have individual non-canonical or noindex campaign routes but does not compete with `/workplace-wellbeing-workshops` in search.

**Glenn action:** reply **A, B or C**, with any short clarification if needed.

---

### G02 — Unlock the interactive browser QA gate

**Why Glenn is needed:** current Vercel Preview Authentication redirects the available automated session into SSO. Code/build QA is passing, but visual/keyboard/zoom QA cannot truthfully be marked complete.

**Preferred secure route:** create a Vercel **Protection Bypass for Automation** secret for the CYA project rather than disabling preview protection. This allows automated testing of protected previews without making them public.

**Glenn action:** in Vercel project settings, create/enable an automation protection bypass secret and make it available to the release QA workflow as `VERCEL_AUTOMATION_BYPASS_SECRET`, or tell me you prefer to perform the visual preview review manually in your logged-in browser.

Do **not** paste the secret into chat.

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

### G05 — Choose the pilot budget level

Current indicative Brisbane planning bands, ex GST:

- **Option A — CYA-led/internal-assisted:** approximately A$2,000–A$3,500.
- **Option B — Minimum Viable Shoot — recommended:** approximately A$5,000–A$7,500.
- **Option C — expanded production:** use if CYA wants a broader multi-location library and larger motion deliverable; obtain supplier quotes against the existing brief before fixing the budget.

**Glenn action:** choose A, B or C when CYA is ready to approach suppliers. Default recommendation is **B**.

---

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

### G08 — Approve supplier appointment

The supplier quote request, rights requirements and comparison scorecard are already prepared.

**Glenn action:** once quotes are received, approve the preferred photographer/videographer or production team. Do not choose solely on lowest cost; documentary workplace sensibility, rights clarity and still+motion capability are the priority criteria.

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

1. **G01 — Workshop Monthly decision** — small decision, useful to close now.
2. **G02 — Browser QA access** — the only current technical release gate that needs Glenn involvement.
3. Leave G03/G04 until final release preparation.
4. Address G05–G08 when the photography pilot is ready to move from planning into booking.
