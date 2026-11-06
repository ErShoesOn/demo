import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { indexingAllowed } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${siteConfig.url}/sitemap.xml`;

  if (!indexingAllowed()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
