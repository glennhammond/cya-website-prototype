import type { MetadataRoute } from "next";
import { insightArticles } from "@/content/insights";

const origin = "https://www.corporateyoga.com.au";

const indexableCanonicalPaths = [
  "/",
  "/workplace-wellbeing-programs",
  "/movement",
  "/workplace-yoga",
  "/workplace-pilates",
  "/meditation-mindfulness",
  "/workplace-wellbeing-workshops",
  "/online-wellbeing",
  "/blog",
  "/blog/what-is-work-wellness",
  "/about-us",
  "/contact",
] as const;

/**
 * Phase 11.4 launch sitemap includes substantive canonical routes that are
 * currently index-qualified. Evidence-dependent /case-studies remains excluded
 * until a publishable client story is approved.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const canonicalPages = indexableCanonicalPaths.map((path) => ({
    url: new URL(path, origin).toString(),
  }));

  const insights = insightArticles.map((article) => ({
    url: new URL(`/blog/${article.slug}`, origin).toString(),
    lastModified: article.dateModified,
  }));

  return [...canonicalPages, ...insights];
}
