# CYA — Phase 11.5 Migration Authority Protection Register

**Date:** 26 August 2026  
**Status:** pre-launch authority protection baseline COMPLETE  
**Scope:** live meaningful backlinks, canonical-host consolidation and legitimate historic URL preservation

## Purpose

Protect CYA's already-earned external authority through the website migration before beginning new outreach or backlink acquisition.

This register deliberately distinguishes **relationship/editorial authority** from raw backlink counts. Ahrefs' spam classification is not treated as sufficient quality judgement; relevance, editorial context and real-world relationship value govern the protection queue.

## Live authority baseline

Fresh Ahrefs live/non-spam referring-domain review confirms that CYA's most strategically useful authority includes:

| Referring domain | DR | Relationship / context | Current CYA destination | Migration action |
|---|---:|---|---|---|
| `australia.com` / Business Events Australia | 81 | Tourism Australia business-events itinerary referencing a private Yoga session | Home, including www/non-www variants | **PROTECT** — canonical Home remains broad category authority; canonical-host redirect preserves non-www variants |
| `brisbane.qld.au` / Brisbane Business Hub | 74 | Lord Mayor's Women in Business Grant recipient listing | `https://www.corporateyoga.com.au/` | **PROTECT** — direct canonical Home link already aligned |
| `besydney.com.au` | 51 | Sydney wellness activities editorial page | Home, including non-www variant | **PROTECT** — Home remains appropriate; optional direct-link update after launch if relationship access makes it easy |
| `alsco.com.au` | 47 | Workplace-activities and employee-performance editorial articles | Home plus historical `/getting-started/` | **RESCUED** — `/getting-started` now one-hop 301s to Home; direct Home links remain aligned |

Other live domains include directories, automated SEO/data sites and high-volume sitewide links. These are not prioritised merely because Ahrefs does not flag them as spam or because they contribute large raw link counts.

## Historical legitimate URL protection

### `/getting-started` → `/`

**Reason:** Alsco has a live dofollow editorial backlink from a genuine workplace-activities article to the historic CYA `/getting-started/` acquisition route. The broad context is CYA as a workplace Yoga/wellbeing provider.

**Decision:** one-hop permanent 301 to Home.

**Why Home:** Home is the approved broad corporate-yoga/category authority and is a better semantic successor than forcing the link into Contact, Programs or a specialist service page.

**Qualification:** rendered production HTTP QA verifies both the 301 status and one-hop `/` destination.

### `/our-classes` → `/movement`

**Reason:** Ahrefs still records live dofollow backlinks to the historic `/our-classes/` URL. The existing legacy chain ultimately resolves to Movement.

**Decision:** collapse the historic class URL directly to `/movement` in one hop.

**Why Movement:** Movement is the approved service-selection hub for Workplace Yoga, Workplace Pilates and related workplace movement rather than a generic class-list recreation.

**Qualification:** rendered production HTTP QA verifies both the 301 status and one-hop `/movement` destination.

## Page-level backlink findings

Fresh live page-by-backlink review shows the meaningful currently linked CYA destinations are highly concentrated:

- canonical/non-canonical Home variants;
- Contact;
- Movement;
- historical `/getting-started/`;
- historical `/our-classes/`.

The non-www and HTTP Home variants already resolve to the selected `https://www.corporateyoga.com.au/` host. Contact and Movement remain substantive canonical pages.

This does **not** indicate a large hidden estate of legitimate backlink-bearing legacy content requiring mass redirects.

## Broken-backlink check

A fresh Ahrefs `broken backlinks` query for live, non-spam referring sources returned **zero results** on 26 August 2026.

Interpretation:

- no additional meaningful broken-backlink rescue target is currently evidenced by Ahrefs;
- do not create speculative redirects simply to make the migration map look comprehensive;
- continue to let hacked/spam/irrelevant URL families return genuine 404/410 behaviour rather than mapping them into legitimate pages.

## Current migration QA baseline

After adding the two evidence-backed authority-preservation redirects, permanent CI passes:

- production dependency audit — **PASS / 0 high-severity production findings**;
- Phase 11.4 source/search QA — **PASS (314 checks)**;
- ESLint — **PASS**;
- Next.js 16.3.3 production build — **PASS**;
- rendered production HTTP smoke — **PASS (201 checks)**.

The rendered suite now tests the `/getting-started` and `/our-classes` migrations as real HTTP responses.

## Post-launch authority watchlist

### P0 — preserve

Monitor these first after launch:

1. Business Events Australia / `australia.com` → Home;
2. Brisbane Business Hub → Home;
3. BESydney → Home;
4. Alsco → Home and the rescued `/getting-started` migration;
5. any live backlink still reaching `/our-classes` → Movement;
6. canonical-host consolidation from HTTP/non-www variants into `https://www.corporateyoga.com.au/`.

### P1 — reclaim where relationship access makes it easy

After migration behaviour is stable, consider asking quality relationship sources to update links that still rely on legacy/non-canonical redirects. Prioritise editorial/relationship value, not redirect-count vanity.

Potential examples:

- an Alsco `/getting-started/` link could be updated directly to canonical Home;
- BESydney / Business Events Australia non-www variants may be updated if there is an easy relationship route;
- no outreach is required merely because a one-hop canonical-host redirect exists and works correctly.

### P2 — monitor losses

During the first 30–90 days after launch:

- monitor lost referring domains in Ahrefs;
- investigate meaningful editorial/relationship losses rather than scraper churn;
- compare ranking/traffic changes with GSC before attributing them to backlink loss;
- do not respond to noisy directory losses with low-quality replacement acquisition.

## Non-goals

Do not:

- rescue hacked or spam URL families into legitimate content;
- add catch-all redirects;
- preserve irrelevant legacy taxonomy just because it once existed;
- pursue raw referring-domain count as the success metric;
- treat Ahrefs `is_spam=false` as proof of editorial quality;
- initiate broad backlink outreach before the migration safety gates are complete.

## Decision principle

**Protect what CYA genuinely earned, collapse legitimate legacy paths to the closest canonical successor, and leave irrelevant/spam history dead.**
