# CYA Production Application 02 — Phase 06A Release Map

**Status:** BASELINE COMPLETE — safe production work underway  
**Reconciled:** 5 September 2026  
**Working branch:** `feat/cya-production-application-02`

## 1. Authority reconciliation

Website architecture authority governs canonical pages, URL ownership, page-family jobs, search separation and conversion pathways. Current creative authority governs expression through **Workday, Interrupted** and **WORK CONTEXT → NOTICE → USEFUL ACTION → RETURN**.

Current Figma Homepage authority is **CYA Homepage — Art Direction v2.0**, desktop node `311:10` and mobile node `311:11` in **CYA Website 2027 — Production · Experience · Authority**.

The implementation rule remains: **repeat the grammar; vary the composition**. No universal Workday Window, mandatory Observed Workday Headline or fixed channel layout has been introduced.

## 2. Verified priority-page baseline

| Priority | Verified page | Canonical URL | Current state | Remaining dependency | Release status |
|---|---|---|---|---|---|
| 1 | Home | `/` | Implemented; current Figma CTA hierarchy reconciled; current supplied hero formally governed and approved | Hosted interactive visual/accessibility qualification | **Code/build/image-governance ready; browser gate pending** |
| 2 | Workplace Wellbeing Programs | `/workplace-wellbeing-programs` | Strong procurement page; supplied imagery approved; Cromwell proof explicitly separates the general CYA image from named-client evidence | Hosted interactive qualification; Cromwell-specific image is an optional future enhancement rather than a launch requirement | **Code/build ready; browser gate pending** |
| 3 | Workplace Wellbeing Workshops & Expert Experiences | `/workplace-wellbeing-workshops` | Canonical workshops/expert destination with approved Lunch & Learn imagery, topic-led discovery and conversion | Hosted interactive qualification; named expert profiles remain optional and evidence-gated if introduced | **Code/build ready; browser gate pending** |
| 4 | Workshop Monthly | **No separate canonical route by decision** | Glenn approved Option A on 5 September 2026: Workshop Monthly is a recurring content/offer pattern within Workshops, Programs and/or client activation | No standalone SEO page required | **Architecture decision closed** |

## 3. Production changes now closed

### Homepage

- **Work Wellness into Your Workday** preserved as H1.
- **Explore workplace wellbeing programs** is the primary hero action.
- **Start planning** is secondary on desktop.
- Mobile hero uses the programme CTA alone.
- Current Deb/workplace hero is formally governed as `media.homeHero`.
- All supplied CYA images are confirmed approved for CYA use.
- No essential motion is required for meaning.

### Workplace Wellbeing Programs

- Procurement hierarchy and search ownership retained.
- Work-context caption retained.
- Reflow-safe text behaviour retained.
- Supplied participation imagery is approved.
- Cromwell facts and the accompanying general CYA workplace image are explicitly separated, removing temporary/placeholder language and avoiding a false visual claim.

### Workplace Wellbeing Workshops

- Approved workplace Lunch & Learn imagery retained.
- Topic relevance, expert authority and participation design remain the core credibility structure.
- The page remains a supporting-page expression rather than a Homepage clone.

### Workshop Monthly

- Option A approved by Glenn on 5 September 2026.
- It remains a recurring offer/content pattern within `/workplace-wellbeing-workshops`, broader Programs and/or client activation.
- No separate indexable `/workshop-monthly` route is to be created.
- Individual monthly themes may be surfaced as current content or campaign/activation material under their own lifecycle governance without competing with the main Workshops search destination.

## 4. Photography state

### Existing image approval — closed

- Permission to use all images supplied by Glenn for CYA production is confirmed.
- The exact current Homepage hero is in the governed media register.
- Supplied-image permission is no longer a launch blocker.

### New photography pilot — Option B selected

Glenn approved **Option B — Minimum Viable Shoot** on 5 September 2026.

The pilot is a next-generation creative-library improvement, not an emergency rights fix.

Priority coverage:

1. still + motion Homepage sequence showing work → notice → useful action → return;
2. Human Signal detail library;
3. stronger genuine hybrid-work scene;
4. varied participation without performance;
5. return-to-work and transition coverage;
6. dedicated landscape, portrait, square and 9:16-safe compositions.

Field-ready shot list:

`Docs/CYA_Production_Application_02_MVS_Shot_List.md`

## 5. Remaining decisions and dependencies

| Item | Current interpretation | Owner |
|---|---|---|
| Hosted browser access | Build is healthy, but Vercel SSO prevents the available automated session from conducting defensible interactive QA | **Glenn — configure Vercel Protection Bypass for Automation** |
| New pilot workplace/location | Needed when scheduling the new still+motion shoot | **Glenn + Deb/CYA** |
| New-shoot participants/facilitator | Needed when pilot moves to booking | **Glenn + Deb/CYA** |
| Production model / supplier appointment | MVS approved; decide self-production vs external still/motion support once location and people are known | **Glenn + Deb/CYA** |

## 6. Technical release state

- Next.js production compilation is passing.
- TypeScript is passing.
- Pre-launch release controls are passing.
- 46 static pages generate successfully.
- Vercel deployments on the branch are healthy.
- Comprehensive GitHub pre-launch QA is configured for this branch/PR.
- No essential motion has been added.
- Vercel Preview Authentication still prevents a persistent interactive browser session from the current tool environment.

The browser gate therefore remains **unverified**, not failed.

## 7. Implementation sequence from here

1. Homepage supplied-image governance — **complete**.
2. Homepage current-Figma CTA reconciliation — **complete**.
3. Programs temporary Cromwell-image treatment — **resolved without inventing client-specific photography**.
4. Workshops code-level production treatment — **complete**.
5. Workshop Monthly architecture decision — **complete: Option A / no separate SEO page**.
6. Photography pilot production model — **complete: Option B MVS selected; shot list prepared**.
7. Build/deployment qualification — **ongoing and currently passing**.
8. Hosted desktop/tablet/mobile/accessibility qualification — **blocked only by interactive preview access**.
9. Photography pilot booking — **requires workplace, people and production-model/supplier choices**.
10. Final integration into the established production-release process after the browser gate closes.
