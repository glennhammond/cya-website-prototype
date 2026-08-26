import type { MetadataRoute } from "next";

const origin = "https://www.corporateyoga.com.au";

export default function robots(): MetadataRoute.Robots {
  const isVercelPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  if (isVercelPreview) {
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
