# CYA Website — Phase 11.4 Search Baseline & Rank Tracker Review

**Date:** 26 August 2026  
**Status:** reviewed measurement baseline / Rank Tracker portfolio ready for configuration review  
**Scope:** Australian organic-search baseline, Rank Tracker portfolio, measurement guardrails  
**Ahrefs project:** `Corporateyoga` — project ID `10280255`

## 1. Purpose

Phase 11.3 deliberately deferred Ahrefs Rank Tracker configuration until the canonical search architecture was stable.

Phase 11.4 has now implemented the major canonical search architecture and the current GitHub production QA gate passes. This document records the pre-launch measurement evidence and the deliberately small Australian keyword portfolio that should be used for ongoing Ahrefs monitoring.

This is a measurement document. Inclusion of a keyword does **not** by itself authorise publication, indexation or a new landing page.

Google Search Console remains the source of truth for actual Google clicks, impressions, CTR, average position, ranking URL and indexation. Ahrefs is used for competitive intelligence, SERP movement, share of voice and backlink/ranking comparisons.

## 2. Current Ahrefs project state

- Project ID: `10280255`
- Project name: `Corporateyoga`
- Target: `www.corporateyoga.com.au/`
- Mode: subdomains
- Verified: yes
- Rank Tracker keywords currently configured: **0**

The clean zero-keyword state is useful: the new portfolio can be configured deliberately rather than inheriting a noisy historical list.

## 3. Connected GSC baseline — Australia

Window: **28 May 2026 to 25 August 2026**, web search, Australia.

### Home

`https://www.corporateyoga.com.au/`

- 3,617 impressions
- 24 clicks
- 0.66% CTR
- average position 9.88
- 127 queries represented

This confirms that Home remains the principal existing search-equity asset while also showing substantial click-capture headroom.

### Priority query evidence

| Query | Clicks | Impressions | CTR | Avg position | Interpretation |
|---|---:|---:|---:|---:|---|
| corporate yoga australia | 9 | 124 | 7.26% | 1.10 | strong branded/category defence |
| corporate yoga | 6 | 699 | 0.86% | 5.86 | major CTR and ranking opportunity; preserve Home authority |
| corporate yoga melbourne | 2 | 346 | 0.58% | 7.58 | meaningful geographic diagnostic |
| corporate yoga sessions | 1 | 141 | 0.71% | 9.65 | commercial service wording already visible |
| corporate yoga instructor | 1 | 111 | 0.90% | 4.98 | not a primary buyer target, but evidence of broad category association |
| office yoga | 1 | 39 | 2.56% | 5.31 | useful supporting Yoga term |
| workplace yoga | 0 | 384 | 0% | 24.30 | intent historically dispersed across 13 URLs; new canonical page should consolidate it |
| corporate yoga classes | 0 | 101 | 0% | 8.75 | clear click-capture opportunity |
| corporate Pilates | 0 | 38 | 0% | 45.58 | early baseline for specialist Pilates opportunity |
| workplace Pilates | 0 | 6 | 0% | 37.17 | low-volume but strategically direct |
| meditation in the workplace | 0 | 25 | 0% | 33.88 | supports mindfulness/meditation canonical destination |
| corporate mindfulness | 0 | 17 | 0% | 37.12 | emerging commercial/service relevance |

### Existing page dispersion

The current site spreads search relevance across many old URLs. Examples include:

- `workplace yoga` appearing across 13 URLs;
- old `/book-a-class`, `/classes`, `/workplace-yoga-australia` and article URLs receiving service-intent impressions;
- program intent appearing on `/personalised-wellbeing-programs`;
- mindfulness intent split between the service page and articles;
- Pilates intent landing primarily on Home and legacy class surfaces.

This supports the Phase 11.3/11.4 canonical consolidation strategy rather than creation of more pages.

## 4. Current Ahrefs market validation — Australia

Selected current metrics validated 26 August 2026:

| Keyword | AU volume | KD | CPC USD | Strategic role |
|---|---:|---:|---:|---|
| corporate wellness programs | 500 | 0 | $0.70 | program procurement |
| employee wellbeing | 400 | 19 | $0.30 | broader market diagnostic |
| corporate wellness | 300 | 0 | $2.00 | broader commercial diagnostic |
| workplace wellbeing programs | 250 | 1 | $0.60 | primary program procurement |
| workplace wellbeing | 250 | 37 | $1.50 | broader market diagnostic |
| corporate wellbeing programs | 200 | 2 | $2.00 | program procurement |
| employee wellness | 200 | 2 | $0.60 | broader market diagnostic |
| employee wellbeing programs | 150 | 2 | $0.70 | program procurement |
| workplace wellness programs | 150 | 3 | $2.50 | program procurement |
| workplace wellness | 150 | 3 | $1.10 | broader market diagnostic |
| workplace yoga | 150 | 4 | $1.60 | specialist Yoga acquisition |
| corporate wellness workshops | 150 | — | — | workshops / expert experiences |
| corporate yoga | 90 | 2 | $1.70 | Home defence |
| office yoga | 80 | 8 | — | supporting Yoga intent |
| corporate Pilates | 60 | 0 | $1.80 | specialist Pilates acquisition |
| mindfulness in the workplace | 60 | 15 | $1.20 | authority / mindfulness |
| workplace wellbeing workshops | 50 | — | — | workshops / expert experiences |
| corporate yoga Melbourne | 50 | 2 | $1.90 | geographic diagnostic |
| corporate yoga sessions | 50 | — | — | Home/service defence |
| corporate wellbeing workshops | 40 | — | — | workshops / expert experiences |
| online corporate wellness programs | 40 | — | — | online continuity diagnostic |
| workplace mindfulness | 30 | — | $1.20 | mindfulness service intent |
| corporate mindfulness | 30 | — | $1.60 | mindfulness service intent |
| corporate mindfulness workshops | 30 | — | — | workshops/mindfulness crossover |
| online corporate wellness | 30 | — | — | online continuity diagnostic |
| corporate Pilates classes | 30 | — | $1.70 | Pilates service intent |
| workplace meditation | 10 | 12 | $2.50 | meditation service/authority |
| workplace Pilates | 10 | — | — | Pilates service diagnostic |

Ahrefs volume is directional, not actual CYA traffic. GSC remains authoritative for CYA performance.

## 5. Recommended Australian Rank Tracker portfolio — 40 keywords

### A. Defend / existing equity — 6

1. corporate yoga
2. corporate yoga australia
3. corporate yoga classes
4. corporate yoga sessions
5. office yoga
6. yoga at work

### B. Program procurement + broader market diagnostics — 10

7. workplace wellbeing programs
8. corporate wellness programs
9. employee wellbeing programs
10. workplace wellness programs
11. corporate wellbeing programs
12. corporate wellness
13. workplace wellbeing
14. employee wellbeing
15. workplace wellness
16. employee wellness

These broader category terms are diagnostics for expansion and share of voice. They do not each require their own landing page.

### C. Workplace Yoga — 4

17. workplace yoga
18. workplace yoga classes
19. yoga in the workplace
20. yoga for corporate

Low Ahrefs volume does not automatically remove a term where GSC or buyer-language evidence makes it useful for tracking.

### D. Workplace Pilates — 3

21. corporate Pilates
22. workplace Pilates
23. corporate Pilates classes

**Governance note:** tracking these terms is appropriate even if a Pilates publication/evidence gate is still being reconciled. Rank tracking is measurement, not publication authority.

### E. Mindfulness & Meditation — 5

24. workplace mindfulness
25. corporate mindfulness
26. workplace meditation
27. meditation in the workplace
28. mindfulness in the workplace

### F. Workshops / Expert Experiences — 4

29. workplace wellbeing workshops
30. corporate wellbeing workshops
31. corporate wellness workshops
32. corporate mindfulness workshops

### G. Online / continuity — 3

33. online workplace wellbeing
34. online corporate wellness programs
35. online corporate wellness

`online workplace wellbeing` may have little or no Ahrefs volume. It remains a useful product-language diagnostic and should not be used as evidence for a standalone SaaS-style proposition.

### H. Geographic diagnostics — 4

36. corporate yoga melbourne
37. corporate yoga sydney
38. corporate yoga brisbane
39. corporate yoga perth

These are diagnostics, not authority to create city doorway pages. Location pages require genuine service/evidence value.

### I. Editorial authority diagnostic — 1

40. body check in

This is included because the existing Check-In-With-Yourself article already receives GSC impressions and has page-one visibility around this vocabulary. It is an authority diagnostic, not a commercial acquisition target.

## 6. Measurement interpretation rules

1. **Do not judge the rebuild by Ahrefs estimated traffic.** Use GSC for actual Google performance.
2. **Do not treat every tracked keyword as a page brief.** Several terms deliberately roll into one canonical destination.
3. **Do not force `corporate yoga` away from Home.** Home remains its primary authority destination.
4. **Watch ranking URL as well as position.** The rebuild should reduce intent dispersion and increasingly align queries with the intended canonical destination.
5. **Evaluate CTR alongside rank.** Current `corporate yoga` visibility already demonstrates that better click capture is a material opportunity.
6. **Expect normal migration volatility.** Protect equity before reacting to short-term movement.
7. **Review the portfolio periodically rather than expanding continuously.** A compact decision-useful set is preferable to hundreds of low-value terms.

## 7. Current governance issue requiring reconciliation

The current repository configuration now records `pilatesPublicationApproved: true` and the executable search QA treats `/workplace-pilates` as index-qualified.

However, the prior written authority retained evidence dependencies around practitioner qualifications/availability, service/logistics qualification and Pilates-specific proof. The current repository/decision trail should be reconciled so publication status is supported by an explicit evidence-backed decision rather than inferred from implementation state alone.

Until reconciled, this document does not treat Rank Tracker inclusion as evidence that the Pilates publication gate is substantively closed.

## 8. Next measurement actions

1. Configure the reviewed ~40-keyword AU portfolio in Ahrefs Rank Tracker.
2. Freeze a native GSC pre-launch export immediately before production deployment.
3. Record launch date and canonical migration date.
4. After launch, monitor:
   - Home corporate-yoga defence;
   - `/workplace-yoga` consolidation and growth;
   - program-procurement visibility;
   - ranking-URL alignment;
   - CTR changes;
   - indexation/canonical selection;
   - workshop, mindfulness, Pilates and online-service emergence;
   - geographic diagnostics without doorway-page expansion.
5. Use Ahrefs competitor/share-of-voice and referring-domain data as secondary interpretation layers, not as replacements for GSC.

---

**Decision principle:** track the markets CYA genuinely intends to understand and win; do not turn the tracking portfolio into a content-production quota.