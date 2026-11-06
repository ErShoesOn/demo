import type { MetadataRoute } from "next";
import { articles } from "@/data/blog";
import { destinations } from "@/data/destinations";
import { tourPackages } from "@/data/packages";
import { routes } from "@/data/routes";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { vehicleCategories } from "@/data/vehicles";

/**
 * Content pages are included once they exist. The owner should remove any
 * section that is not ready to be indexed rather than publish a placeholder.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) =>
    path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/fleet"), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/services"), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/destinations"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("/routes"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("/tour-packages"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("/travel-guides"), changeFrequency: "weekly", priority: 0.7 },
    { url: url("/contact"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/reviews"), changeFrequency: "monthly", priority: 0.4 },
    { url: url("/faqs"), changeFrequency: "monthly", priority: 0.6 },
    { url: url("/privacy-policy"), changeFrequency: "yearly", priority: 0.3 },
    {
      url: url("/terms-and-conditions"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/photography-credits"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const fleetPages: MetadataRoute.Sitemap = vehicleCategories.map((category) => ({
    url: url(`/fleet/${category.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(`/services/${service.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const destinationPages: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: url(`/destinations/${destination.slug}`),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const routePages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: url(`/routes/${route.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const packagePages: MetadataRoute.Sitemap = tourPackages.map(
    (tourPackage) => ({
      url: url(`/tour-packages/${tourPackage.slug}`),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: url(`/travel-guides/${article.slug}`),
    lastModified: new Date(`${article.updatedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...fleetPages,
    ...servicePages,
    ...destinationPages,
    ...routePages,
    ...packagePages,
    ...articlePages,
  ];
}
