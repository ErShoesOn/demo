import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}

/**
 * Indexing is disabled on Vercel preview/development deployments even when
 * the production site is allowed to be indexed. This keeps staging builds
 * out of search results without changing the production configuration.
 */
export function indexingAllowed() {
  const vercelEnvironment = process.env.VERCEL_ENV;
  if (vercelEnvironment && vercelEnvironment !== "production") return false;
  return siteConfig.allowIndexing;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  /** Use when the title already includes the brand name. */
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Builds consistent page metadata: unique title, description, canonical,
 * Open Graph and Twitter/X cards.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = "/images/og-default.jpg",
  imageAlt = "Majestic Rentals — premium chauffeur-driven car rentals in Nepal",
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    robots:
      noindex || !indexingAllowed()
        ? { index: false, follow: true }
        : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: socialTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
