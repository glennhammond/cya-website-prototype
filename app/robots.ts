import type { MetadataRoute } from "next";
import { releaseIndexingEnabled } from "@/lib/release";

const origin = "https://www.corporateyoga.com.au";

export default function robots(): MetadataRoute.Robots {
  if (!releaseIndexingEnabled()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
