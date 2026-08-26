# CYA Website — Phase 11.4 Pre-launch GSC Freeze

**Freeze date:** 26 August 2026  
**Performance window:** 28 May 2026 to 25 August 2026  
**Search type:** Web  
**Country:** Australia  
**Source:** Google Search Console data exposed through the verified Ahrefs CYA project (`10280255`)  
**Status:** CONNECTED-DATA FREEZE COMPLETE; native GSC UI export and Security Issues / Manual Actions checks remain launch operations

## Purpose

This file freezes the pre-launch organic-search state immediately before the planned CYA website migration. It exists so post-launch movement can be interpreted against a dated baseline rather than memory or Ahrefs estimates.

Google Search Console remains the source of truth for actual Google clicks, impressions, CTR, average position, ranking URLs and indexation. Ahrefs remains the competitive/search-intelligence layer.

## Home baseline

`https://www.corporateyoga.com.au/`

- **25 clicks**
- **3,656 impressions**
- **0.684% CTR**
- **9.87 average position**
- **127 represented queries**

Home is therefore the primary existing search-equity asset and must retain its broad `corporate yoga` authority through migration.

## Priority query freeze

| Query | Clicks | Impressions | CTR | Avg position | Current top URL / interpretation |
|---|---:|---:|---:|---:|---|
| corporate yoga australia | 9 | 125 | 7.20% | 1.10 | Home — strong branded/category defence |
| corporate yoga | 8 | 709 | 1.13% | 5.79 | Home — high-value CTR/ranking opportunity; do not force to `/workplace-yoga` |
| corporate yoga melbourne | 2 | 350 | 0.57% | 7.55 | Home — geographic diagnostic |
| corporate yoga sessions | 1 | 141 | 0.71% | 9.65 | Home — commercial service wording |
| corporate yoga instructor | 1 | 111 | 0.90% | 4.98 | Home — category association, not a primary buyer target |
| office yoga | 1 | 39 | 2.56% | 5.31 | Home — supporting Yoga intent |
| corporate yoga sydney | 1 | 16 | 6.25% | 2.56 | Home — geographic diagnostic |
| workplace yoga | 0 | 385 | 0% | 24.24 | Split across 13 URLs — key consolidation test for `/workplace-yoga` |
| corporate wellness classes | 0 | 144 | 0% | 31.30 | Legacy `/book-a-class` — migration/consolidation signal |
| workplace wellness classes | 0 | 107 | 0% | 42.21 | Legacy `/book-a-class` — migration/consolidation signal |
| corporate yoga classes | 0 | 101 | 0% | 8.75 | Currently led by `/about-us` — ranking URL alignment opportunity |
| corporate yoga programs | 0 | 88 | 0% | 15.03 | Home — program-intent opportunity |
| online corporate wellness programs | 0 | 58 | 0% | 59.36 | `/online-wellbeing` — continuity opportunity |
| corporate pilates | 0 | 39 | 0% | 46.10 | Home — baseline for `/workplace-pilates` |
| meditation in the workplace | 0 | 25 | 0% | 33.88 | `/meditation-mindfulness` — service growth baseline |
| corporate mindfulness | 0 | 17 | 0% | 37.12 | Mindfulness article — canonical/service alignment opportunity |
| yoga at work | 0 | 12 | 0% | 10.08 | protected Yoga-at-Work Insight — authority support baseline |
| workplace pilates | 0 | 6 | 0% | 37.17 | Home — specialist Pilates baseline |

## Priority page freeze

| Current page | Clicks | Impressions | Avg position | Migration interpretation |
|---|---:|---:|---:|---|
| `/` | 25 | 3,656 | 9.87 | protect broad category authority |
| `/about-us` | 0 | 884 | 43.46 | trust/entity page currently receiving excess service-query exposure |
| `/contact` | 0 | 749 | 32.93 | conversion utility receives broad impressions |
| `/online-wellbeing` | 0 | 435 | 59.35 | retained canonical; growth opportunity |
| `/blog/8-tips-to-successfully-introduce-yoga-at-work` | 0 | 264 | 25.00 | protected authority asset; support `/workplace-yoga` |
| `/movement` | 0 | 193 | 57.77 | retained/rebuilt selection hub |
| `/blog` | 0 | 190 | 73.76 | retained URL, relabelled Insights |
| `/meditation-mindfulness` | 0 | 174 | 40.10 | retained/rebuilt service destination |
| `/personalised-wellbeing-programs` | 0 | 140 | 15.15 | migrate 301 to `/workplace-wellbeing-programs` |
| Check-In-With-Yourself Insight | 0 | 70 | 8.06 | protected editorial authority asset |
| `/online-wellbeing-landing-page` | 0 | 63 | 61.67 | legacy dispersion to be removed/consolidated |
| mindfulness Insight | 0 | 37 | 27.22 | editorial support for mindfulness destination |
| `/classes` | 0 | 31 | 70.32 | legacy class surface to retire/consolidate appropriately |
| `/workplace-yoga-australia` | 0 | 27 | 21.07 | 301 to `/workplace-yoga` |
| `/book-a-class` | 0 | 19 | 69.21 | 301 to `/contact` |

## Migration success tests

Post-launch success is not simply “all rankings go up immediately”. The first tests are structural:

1. Home retains material visibility for `corporate yoga` and related broad category terms.
2. `workplace yoga` increasingly resolves to `/workplace-yoga` rather than being dispersed across legacy pages/articles.
3. Program procurement queries increasingly resolve to `/workplace-wellbeing-programs`.
4. Pilates queries begin resolving to `/workplace-pilates` without cannibalising Home's broad Yoga authority.
5. Mindfulness/meditation service queries increasingly resolve to `/meditation-mindfulness`, with Insights acting as supporting authority rather than accidental service landing pages.
6. Legacy URLs lose impressions as governed 301s/canonicals consolidate signals.
7. CTR improves on meaningful page-one visibility, especially `corporate yoga`.
8. No unexpected indexation appears for utility, member, evidence-gated or preview routes.

## Native GSC launch operations still required

The connected data above is sufficient for a durable analytical baseline, but the available integration cannot produce Google's native export file or inspect the authenticated Search Console security panels.

Before the production-domain cutover is authorised, record/confirm in native Google Search Console:

- Security Issues: **no unresolved issue**;
- Manual Actions: **no unresolved action**;
- current sitemap/indexing state;
- native Performance export covering this same pre-launch window (CSV/Sheets is acceptable).

Do not set the repository flags `gscSecurityIssuesChecked` or `gscManualActionsChecked` to `true` without that authenticated confirmation.

## Post-launch comparison cadence

Use this freeze at approximately:

- +3 days: indexing/redirect/canonical safety only;
- +7 days: early ranking-URL alignment and coverage;
- +14 days: first meaningful query/page comparison;
- +28 days: first performance review;
- +8–12 weeks: strategy-level assessment of visibility, CTR, authority and conversion movement.

Normal short-term ranking volatility after migration is not by itself a reason to reverse the architecture.
