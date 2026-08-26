import type { MetadataRoute } from "next";

const origin = "https://www.corporateyoga.com.au";

const indexableCanonicalPaths = [
  "/",
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/online-wellbeing",
  "/about-us",
  "/contact",
] as const;

/**
 * Phase 11.4 launch sitemap intentionally includes only substantive canonical
 * routes that are currently index-qualified. Evidence-gated /workplace-pilates,
 * placeholder /case-studies and the not-yet-migrated /blog authority are
 * deliberately omitted until their publication gates are satisfied.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexableCanonicalPaths.map((path) => ({
    url: new URL(path, origin).toString(),
  }));
}
