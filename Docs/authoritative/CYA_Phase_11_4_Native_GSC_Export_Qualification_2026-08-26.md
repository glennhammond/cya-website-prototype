# CYA Website — Phase 11.4 Native GSC Export Qualification

**Export date:** 26 August 2026  
**Property:** `https://www.corporateyoga.com.au/` (URL-prefix property)  
**Status:** NATIVE GSC PRE-LAUNCH PERFORMANCE EXPORT COMPLETE  
**Authority:** Google Search Console native export supplied by Glenn  
**Archive filename:** `https___www.corporateyoga.com.au_-Performance-on-Search-2026-08-26.zip`  
**SHA-256:** `66b2988531ec54012a51b0f98f63ebd0300f68c9cff77f5d7402d26e8451cbdf`

## Export filters — VERIFIED

The native Search Console export contains `Filters.csv` confirming:

- Search type: **Web**
- Date: **28 May 2026 – 25 August 2026**
- Country: **Australia**

The archive contains:

- `Chart.csv` — 90 daily rows
- `Queries.csv` — 213 query rows
- `Pages.csv` — 37 page rows
- `Countries.csv`
- `Devices.csv`
- `Search appearance.csv`
- `Filters.csv`

## Native aggregate baseline — authoritative

`Countries.csv` records the Australian pre-launch aggregate:

- **121 clicks**
- **6,880 impressions**
- **1.76% CTR**
- **15.3 average position**

Device split:

| Device | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| Desktop | 72 | 5,263 | 1.37% | 15.16 |
| Mobile | 49 | 1,551 | 3.16% | 15.73 |
| Tablet | 0 | 66 | 0% | 17.09 |

## Priority query baseline

| Query | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| corporate yoga australia | 11 | 131 | 8.40% | 1.11 |
| corporate yoga | 10 | 803 | 1.25% | 5.69 |
| corporate yoga melbourne | 2 | 388 | 0.52% | 7.27 |
| corporate yoga sessions | 1 | 158 | 0.63% | 9.91 |
| corporate yoga instructor | 1 | 120 | 0.83% | 5.88 |
| office yoga | 1 | 43 | 2.33% | 5.35 |
| corporate yoga sydney | 1 | 16 | 6.25% | 2.56 |
| workplace yoga classes | 1 | 13 | 7.69% | 9.77 |
| workplace yoga | 0 | 433 | 0% | 23.82 |
| corporate wellness classes | 0 | 167 | 0% | 30.81 |
| workplace wellness classes | 0 | 127 | 0% | 40.98 |
| corporate yoga classes | 0 | 111 | 0% | 8.97 |
| corporate yoga programs | 0 | 96 | 0% | 15.33 |
| online corporate wellness programs | 0 | 68 | 0% | 56.06 |

Additional query evidence includes meaningful geographic impressions for Mornington / Mornington Peninsula and supporting Yoga/service variants. These are diagnostics only and do not authorise thin location-page creation.

## Priority page baseline

| Page | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| `/` | 33 | 4,193 | 0.79% | 9.83 |
| `/about-us` | 0 | 963 | 0% | 43.41 |
| `/contact` | 0 | 836 | 0% | 32.19 |
| `/online-wellbeing` | 0 | 505 | 0% | 60.12 |
| Yoga-at-Work Insight | 0 | 302 | 0% | 24.32 |
| `/blog` | 0 | 220 | 0% | 73.09 |
| `/movement` | 0 | 216 | 0% | 60.48 |
| `/meditation-mindfulness` | 0 | 194 | 0% | 40.18 |
| `/personalised-wellbeing-programs` | 0 | 152 | 0% | 17.20 |
| `/online-wellbeing-landing-page` | 0 | 118 | 0% | 60.20 |
| Check-In-With-Yourself Insight | 0 | 85 | 0% | 7.64 |
| `/book-a-class` | 0 | 46 | 0% | 67.83 |
| `/classes` | 0 | 44 | 0% | 70.05 |

## Relationship to the earlier Ahrefs-connected GSC snapshot

The earlier connected Ahrefs/GSC extraction was useful for analysis and architecture qualification, but its returned values were lower for several rows than the native Search Console export for the same requested period/filter.

Examples:

- Home: connected snapshot roughly 25 clicks / 3,656 impressions; native GSC export **33 / 4,193**.
- `corporate yoga`: connected snapshot roughly 8 clicks / 709 impressions; native GSC export **10 / 803**.
- `workplace yoga`: connected snapshot roughly 385 impressions; native GSC export **433**.

The difference may reflect connector timing, caching, row aggregation or source synchronisation. No attempt should be made to force the two datasets to agree.

**Decision:** for pre-launch performance measurement, the native Search Console export supersedes the connector values as the authoritative Ground Zero dataset. The connected Ahrefs/GSC data remains useful for ongoing analysis and convenience, but not as the final launch evidence file.

## GSC security/manual-action qualification

On 26 August 2026 Glenn also inspected the authenticated `https://www.corporateyoga.com.au/` URL-prefix property and confirmed:

- **Manual actions: No issues detected**
- **Security issues: No issues detected**

These checks qualify the canonical `www` property and are recorded as complete in the Phase 11.4 launch approvals.

Scope boundary: a URL-prefix property does not by itself provide full-domain/subdomain coverage for the historical `portal.corporateyoga.com.au` namespace. The separate `legacySecurityVerified` gate therefore remains false until the current portal/DNS and representative historical-path behaviour is directly checked.

## Measurement implications

Post-launch comparisons should use this native export as the principal pre-launch benchmark:

1. Australian total clicks/impressions/CTR/position.
2. Home `corporate yoga` and `corporate yoga australia` defence.
3. `/workplace-yoga` ranking-URL consolidation.
4. program procurement growth into `/workplace-wellbeing-programs`.
5. specialist Pilates/mindfulness/workshops emergence.
6. legacy URL decline / redirect consolidation.
7. CTR improvement where useful page-one visibility already exists.

Do not interpret migration success by requiring immediate ranking growth across every keyword. Preserve equity and improve canonical alignment first.

---

**Authority rule:** native Google Search Console performance data is the source of truth for CYA's pre-launch Google baseline; Ahrefs remains the complementary search-intelligence and competitive-monitoring layer.