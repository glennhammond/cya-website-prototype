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
  "/case-studies",
  "/about-us",
  "/contact",
] as const;

/**
 * Phase 11.4 launch sitemap intentionally includes only substantive canonical
 * routes that exist in this branch. Evidence-gated /workplace-pilates and the
 * not-yet-migrated /blog authority are deliberately omitted until ready.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexableCanonicalPaths.map((path) => ({
    url: new URL(path, origin).toString(),
  }));
}
