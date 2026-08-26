# CYA — Phase 11.5 Authority Recovery Shortlist

**Captured:** 26 August 2026  
**Scope:** live backlinks worth protecting or reclaiming after migration  
**Source:** Ahrefs live backlink analysis, filtered to non-spam sources

## Immediate conclusion

There are **no high-authority broken backlinks** currently pointing to CYA in the filtered Ahrefs broken-backlink report. That means the migration is primarily an authority-preservation exercise rather than a pre-existing broken-link repair exercise.

## Priority live links

### P0 — protect through migration

1. **Business Events Australia / Tourism Australia**  
   Source domain: `australia.com` — DR 81  
   Link context: Sydney and Hunter Valley business-events itinerary  
   Anchor: `private yoga session`  
   Current target: `https://www.corporateyoga.com.au/`  
   Status: preferred canonical already; preserve exactly.

2. **Brisbane Business Hub**  
   Source domain: `brisbane.qld.au` — DR 74  
   Link context: Lord Mayor's Women in Business Grant recipient page  
   Current target: `https://www.corporateyoga.com.au/`  
   Status: preferred canonical already; preserve exactly.

3. **BESydney**  
   Source domain: `besydney.com.au` — DR 51  
   Link context: Sydney wellness activities article  
   Anchor: `Corporate Yoga Australia`  
   Current target: `https://corporateyoga.com.au/` (non-www)  
   Status: migration must one-hop redirect to preferred `https://www.corporateyoga.com.au/`. After launch stability is confirmed, consider a polite relationship-led request to update the source link directly to the canonical www URL.

4. **Alsco Australia**  
   Source domain: `alsco.com.au` — DR 47  
   Link context: workplace activities article  
   Anchor: `Corporate Yoga Australia`  
   Current target discovered in the governed legacy-path check: `http://corporateyoga.com.au/getting-started/`  
   Status: this validates the importance of the governed `/getting-started` redirect. After launch, verify the link resolves in one clean path to Home. If the relationship/outreach cost is trivial, request a direct update to the canonical Home URL; otherwise the permanent one-hop redirect is sufficient.

### P1 — preserve, but no outreach priority

- `ozpartyevents.com` — DR 28, dofollow workplace-context article, already points to preferred www Home.
- directory/profile references such as Datanyze and Health4You — useful background citations but not relationship-led growth priorities.

## Explicit non-targets

Do **not** pursue or spend time reclaiming SEO-metric, automated-link or low-context sources simply because their displayed DR is high. Current examples include:

- `wayranks.com`
- `siteprice.org`
- `seogeko.shop`
- generic podcast/indexing mirrors

These do not fit CYA's authority strategy even when Ahrefs reports a superficially strong metric.

## Post-launch recovery sequence

### +24h to +7d

- verify Tourism Australia, Brisbane Business Hub, BESydney and Alsco links still resolve successfully;
- confirm BESydney non-www link reaches canonical Home in one clean redirect path;
- confirm Alsco's historical HTTP `/getting-started/` link reaches canonical Home through the governed migration redirect without a broken endpoint;
- monitor Ahrefs new/lost referring domains for migration-caused losses.

### +14d to +30d

- if stable, consider direct-link update requests only for high-value relationship sources where the ask is natural and low-friction;
- start with BESydney and Alsco before lower-value sources;
- do not turn link reclamation into a quota.

## Strategic interpretation

CYA's strongest authority is already coming from real-world business/event/workplace relationships rather than SEO link-building schemes. The priority is therefore:

**protect earned authority → clean up important historical targets → strengthen real relationships → create genuinely referenceable CYA assets.**

That is more valuable than increasing raw backlink count.