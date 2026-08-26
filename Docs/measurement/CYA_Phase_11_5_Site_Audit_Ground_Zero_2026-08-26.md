# CYA — Phase 11.5 Site Audit Ground Zero

**Freeze date:** 26 August 2026  
**Ahrefs crawl:** 25 August 2026  
**Project:** `Corporateyoga` (`10280255`)  
**Target:** `www.corporateyoga.com.au` / subdomains  
**Current platform:** pre-cutover Squarespace site  
**Status:** PRE-CUTOVER TECHNICAL BASELINE FROZEN

## Purpose

Freeze the current public site's crawl-quality state before the Phase 11.4 Vercel migration.

The goal is not to maximise an Ahrefs Health Score for its own sake. The post-cutover comparison should answer:

1. did the rebuild remove known legacy technical debt;
2. did migration introduce any new critical crawl/indexation issue;
3. are canonical, redirect, sitemap and internal-link contracts behaving as designed;
4. are the new commercial/search destinations easy for crawlers to discover and understand.

## Headline baseline

Latest completed Ahrefs Site Audit:

- **Health Score:** 84;
- **URLs crawled:** 69;
- **URLs with errors:** 11;
- **URLs with warnings:** 67;
- **URLs with notices:** 66.

Pages can carry multiple issues, so warning/notice counts are not additive page totals.

## High-value legacy issue patterns

Only issues with non-zero affected/crawled counts are treated as useful baseline evidence here.

### Search snippet / page semantics

| Issue | Affected count | Post-cutover expectation |
|---|---:|---|
| Title too long | 60 indexable pages | new canonical pages use controlled, intentional titles |
| Meta description missing/empty | 34 indexable pages | priority commercial/Insight pages have explicit descriptions |
| Multiple H1 tags | 17 indexable pages | canonical pages retain a clear single primary H1 structure |
| H1 missing/empty | 2 indexable pages | no qualified commercial page should lack its primary heading |
| Meta description too long | 4 indexable pages | reduce avoidable snippet truncation patterns |
| Meta description too short | 1 indexable page | use useful descriptions where appropriate |

### Internal linking / migration hygiene

| Issue | Affected count | Post-cutover expectation |
|---|---:|---|
| Page has links to redirect | 59 indexable pages | internal links point directly to canonical destinations |
| Orphan page | 6 indexable pages | qualified pages are intentionally connected through navigation/contextual links |
| HTTPS page links to HTTP | 4 indexable pages | internal links remain HTTPS/canonical |
| Page has only one dofollow incoming internal link | 14 indexable pages | monitor important pages for adequate contextual discovery; do not inflate links mechanically |
| Redirect chain | 1 | governed migration redirects should be one-hop permanent |
| 302 redirect | 1 | governed migration routes should use intended permanent behaviour |
| 3XX redirect | 4 | expected legacy redirects may exist, but chains/temporary migration logic should not |

### Sitemap / canonical hygiene

| Issue | Affected count | Post-cutover expectation |
|---|---:|---|
| Non-canonical page in sitemap | 1 | sitemap contains canonical indexable URLs only |
| Indexable page not in sitemap | 1 | qualified canonical routes should be represented intentionally |
| Noindex follow page | 1 | controlled noindex routes are allowed only where Phase 11.4 explicitly governs them |

### Structured data

| Issue | Affected count | Post-cutover expectation |
|---|---:|---|
| Google rich-results validation notice | 63 | new site uses only approved schema types and should be revalidated after crawl |
| Schema.org validation notice | 14 | investigate only genuine validation errors; do not add schema merely to improve a tool score |

Phase 11.4 deliberately limits structured data to appropriate Organization, WebSite, Service, Article, Person, BreadcrumbList and related governed types rather than blanket markup.

### Images / social metadata

| Issue | Affected count | Post-cutover expectation |
|---|---:|---|
| Missing alt text | 23 | governed production imagery uses purposeful alt text where content-bearing |
| Open Graph tags incomplete | 46 | evaluate after launch as useful presentation polish; lower priority than crawl/indexation safety |

## Low-priority/tool-specific notices

The old crawl also reports items such as:

- 61 pages suggested for IndexNow;
- 13 pages flagged by Ahrefs as having high AI-content levels.

These are **not** Phase 11.5 success metrics and do not justify changing content or architecture by themselves.

## Post-cutover technical acceptance test

### P0 — must be clean

After the production migration and Ahrefs recrawl:

- Home and qualified commercial pages return 200;
- production robots is crawlable;
- sitemap is accessible and canonical-only;
- no production-wide noindex mistake;
- canonical host is correct;
- governed redirects are permanent and one-hop;
- `/cp` and other compromised/non-entitled paths are not soft-redirected into legitimate CYA content;
- no widespread 4xx/5xx/asset failure;
- no critical canonical-to-error/redirect pattern.

### P1 — should materially improve from legacy state

Expect strong reduction or elimination of:

- missing meta descriptions on qualified pages;
- overlong legacy titles;
- multiple/missing H1 problems;
- internal links pointing through redirects;
- HTTP internal links;
- orphaned qualified pages;
- missing alt text on governed images;
- sitemap non-canonical entries;
- avoidable structured-data validation errors.

### P2 — optimise later

- Open Graph completeness;
- minor social-card polish;
- isolated low-impact notices;
- score-driven issues that have no search/user consequence.

## Health Score rule

The post-cutover Health Score should be **interpreted**, not gamed.

A materially improved score with clean migration-critical contracts is desirable. A score change alone is not a reason to alter valid architecture, add unnecessary schema, bulk-link pages or rewrite evidence-safe content.

## Comparison cadence

- **+24h:** technical host/redirect/robots/sitemap verification from public production.
- **first completed Ahrefs recrawl:** compare issue families against this freeze.
- **+7d:** investigate any persistent migration-critical errors.
- **+28d:** include technical trend in the first Phase 11.5 decision review.

---

**Ground Zero principle:** the rebuild should remove real technical debt without replacing it with score-chasing theatre.