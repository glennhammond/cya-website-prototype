# CYA — Phase 11.5 Post-launch Search Monitoring v1.0

**Status:** operating model ready; activates at production migration  
**Authority:** Phase 11.3 search architecture + Phase 11.4 pre-launch GSC freeze  
**Primary market:** Australia

## Purpose

Monitor the CYA rebuild as a search migration and commercial growth programme, not as a daily ranking scoreboard.

The monitoring system must answer five questions:

1. Did the migration preserve CYA's existing `corporate yoga` equity?
2. Are legacy ranking URLs consolidating into the intended canonical destinations?
3. Are the new program/service destinations gaining relevant visibility?
4. Are page-one impressions converting into more clicks?
5. Is organic search beginning to support useful enquiries and commercial outcomes?

## Source hierarchy

1. **Google Search Console** — actual Google clicks, impressions, CTR, average position, ranking URL, indexing/canonical signals.
2. **Ahrefs Rank Tracker / Site Explorer** — competitor context, tracked-term movement, SERP composition, referring domains and share of voice.
3. **Analytics / HubSpot** — visits, consultation starts/submissions and commercial outcomes.
4. **Repository QA** — canonical, redirect, robots, sitemap and schema contracts.

Never use Ahrefs estimated traffic as a substitute for GSC performance.

## Monitoring portfolio

Use `Docs/measurement/CYA_Ahrefs_Rank_Tracker_AU_Import_2026-08-26.csv` as the governed 40-keyword Australian tracking set.

The set is intentionally compact. A tracked term is a measurement target, not automatic authority to create a page.

## Launch record

At cutover record:

- production deployment/commit SHA;
- migration date and local time;
- old hosting cutover time;
- canonical host (`https://www.corporateyoga.com.au` unless deliberately changed by migration authority);
- native GSC pre-launch export reference;
- sitemap submission/refresh time;
- confirmation of Security Issues and Manual Actions checks;
- confirmation that preview/staging remains non-indexable.

## Cadence

### Launch day / +24 hours — technical safety

Check:

- Home and priority canonical routes return 200;
- all governed legacy routes return one-hop 301s to their final canonical;
- no accidental `noindex` on commercial routes;
- `/robots.txt` allows production crawling;
- `/sitemap.xml` contains canonical indexable routes only;
- production canonical host is consistent across pages;
- HTTP, non-www and other attached host variants resolve to the selected canonical host without chains;
- preview Vercel URLs remain `noindex`;
- key assets load successfully;
- unknown URLs return genuine 404s rather than soft Home redirects.

Do not evaluate ranking success this early.

### +3 days — indexation / migration safety

Review:

- GSC Page Indexing / canonical warnings;
- impressions still present for Home and the brand/category cluster;
- legacy URLs beginning to decline or transfer rather than duplicate;
- no unexpected utility/member/case-study indexation;
- no spike in crawl errors;
- no security/manual action change.

### +7 days — early alignment

Review:

- `corporate yoga` ranking/CTR with Home;
- `workplace yoga` ranking URL distribution;
- early visibility for `/workplace-wellbeing-programs`;
- mindfulness/Pilates/workshops ranking URL alignment;
- old `/workplace-yoga-australia`, `/personalised-wellbeing-programs`, `/book-a-class` and other governed legacy paths;
- new/lost backlinks caused by migration.

Do not reverse architecture because of ordinary seven-day volatility.

### +14 days — first performance comparison

Compare against `CYA_Phase_11_4_Prelaunch_GSC_Freeze_2026-08-26.md`:

- clicks;
- impressions;
- CTR;
- average position;
- ranking URL;
- query clusters;
- canonical/indexing coverage.

Prioritise ranking-URL alignment and click capture before chasing raw keyword count.

### +28 days — first decision review

Produce a short decision report covering:

- Home defence;
- program procurement growth;
- specialist service growth;
- CTR change;
- ranking URL consolidation;
- technical/indexation issues;
- new/lost referring domains;
- organic consultation behaviour;
- competitor movement;
- recommended changes, with evidence thresholds.

### +8–12 weeks — strategy review

Evaluate whether the new architecture is creating durable growth rather than migration noise.

At this stage consider:

- metadata/CTR experiments;
- content authority expansion;
- expert/topic child pages where product + expert + demand exist;
- location expansion only where genuine local evidence/value exists;
- authority/backlink investments;
- internal-link refinements;
- case-study publication if evidence/permission is ready.

## Canonical query ownership tests

| Query cluster | Intended destination | Primary test |
|---|---|---|
| corporate yoga | `/` | Home retains broad authority |
| workplace yoga / workplace yoga classes | `/workplace-yoga` | relevance consolidates away from unrelated legacy URLs |
| workplace/corporate/employee wellbeing programs | `/workplace-wellbeing-programs` | one canonical procurement page grows across synonyms |
| corporate/workplace Pilates | `/workplace-pilates` | specialist page gains relevance without displacing Home's broad role |
| workplace mindfulness / meditation | `/meditation-mindfulness` | service page becomes preferred commercial destination; Insights support it |
| workplace wellbeing workshops | `/workplace-wellbeing-workshops` | human-led workshop destination emerges |
| online corporate/workplace wellbeing | `/online-wellbeing` | continuity/service proposition grows without SaaS-style repositioning |

## Alert thresholds

### P0 — investigate immediately

- Home or a core commercial route unexpectedly returns non-200;
- canonical points to the wrong host/page;
- production commercial route becomes `noindex`;
- robots blocks production;
- sitemap becomes inaccessible/malformed;
- governed 301 is broken or becomes a chain/temporary redirect;
- GSC Security Issue or Manual Action appears;
- major legacy host/path starts serving spam/hacked content;
- Home loses essentially all impressions for the brand/category cluster.

### P1 — investigate with evidence

- `corporate yoga` Home visibility declines materially for 7+ days rather than normal daily movement;
- impressions/clicks for Home or the core commercial cluster fall roughly 40%+ versus the pre-launch/comparable baseline without an obvious demand explanation;
- a wrong/legacy URL persists as Google's preferred ranking URL after the normal migration window;
- new service page receives impressions but persistently weak CTR at useful positions;
- important external backlinks continue pointing through broken or multi-hop legacy URLs.

### P2 — optimisation opportunity

- positions stable but CTR weak;
- page ranks 4–15 for a commercially useful term;
- competitor wins with a demonstrably stronger evidence/module pattern;
- an Insight gains visibility that can support a relevant commercial page through contextual internal linking;
- a meaningful referral/link opportunity is identified.

## Anti-reactivity rules

Do not:

- change URLs because of short-term ranking volatility;
- create new pages for every synonym;
- stuff exact-match anchors internally or externally;
- de-optimise Home to force `corporate yoga` elsewhere;
- bulk-redirect irrelevant archives/spam paths into commercial pages;
- publish thin city pages merely because geo terms are tracked;
- chase Domain Rating as the outcome.

## Reporting format

Each review should end with only four statuses:

- **Protect** — existing equity is working; avoid unnecessary change.
- **Improve** — evidence supports a contained optimisation.
- **Investigate** — signal is meaningful but cause is not yet proven.
- **Hold** — insufficient evidence / normal migration noise.

This keeps search monitoring decision-useful rather than turning it into an activity dashboard.
