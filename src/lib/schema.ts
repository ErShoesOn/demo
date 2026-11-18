import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

type Crumb = {
  name: string;
  path: string;
};

export function organizationSchema() {
  const contactPoint: Record<string, string> = {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: "English",
  };

  if (siteConfig.contact.phone) contactPoint.telephone = siteConfig.contact.phone;
  if (siteConfig.contact.email) contactPoint.email = siteConfig.contact.email;

  const hasContact = Boolean(siteConfig.contact.phone || siteConfig.contact.email);

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    knowsLanguage: ["en", "ne"],
    ...(hasContact ? { contactPoint } : {}),
    ...(siteConfig.contact.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            addressLocality: "Kathmandu",
            addressCountry: "NP",
          },
        }
      : {}),
    ...(siteConfig.contact.mapsUrl ? { sameAs: [siteConfig.contact.mapsUrl] } : {}),
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
  };

  return base;
}

export function localBusinessSchema() {
  const contactPoint: Record<string, string> = {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: "en",
  };

  if (siteConfig.contact.phone) contactPoint.telephone = siteConfig.contact.phone;
  if (siteConfig.contact.email) contactPoint.email = siteConfig.contact.email;

  const geo = siteConfig.contact.mapsUrl
    ? {
        "@type": "GeoCoordinates",
      }
    : {};

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/logo.svg`,
    telephone: siteConfig.contact.phone || undefined,
    email: siteConfig.contact.email || undefined,
    address: siteConfig.contact.address
      ? {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "Kathmandu",
          addressRegion: "Bagmati Province",
          postalCode: "",
          addressCountry: "NP",
        }
      : undefined,
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    knowsLanguage: ["en", "ne"],
    ...(siteConfig.contact.mapsUrl ? { hasMap: siteConfig.contact.mapsUrl } : {}),
    ...(siteConfig.contact.mapsUrl ? { geo } : {}),
    ...(siteConfig.contact.hours ? { openingHours: siteConfig.contact.hours } : {}),
    priceRange: "$$",
    servesCuisine: undefined,
    ...(siteConfig.contact.phone || siteConfig.contact.email
      ? { contactPoint: [contactPoint] }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  publishedAt,
  updatedAt,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(image),
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: author,
      url: siteConfig.url,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function touristDestinationSchema({
  name,
  description,
  path,
  region,
}: {
  name: string;
  description: string;
  path: string;
  region?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name,
    description,
    url: absoluteUrl(path),
    ...(region
      ? {
          address: {
            "@type": "PostalAddress",
            addressRegion: region,
            addressCountry: "NP",
          },
        }
      : {}),
    containedInPlace: {
      "@type": "Country",
      name: "Nepal",
    },
  };
}

export function touristTripSchema({
  name,
  description,
  path,
  itinerary,
}: {
  name: string;
  description: string;
  path: string;
  itinerary?: { title: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: absoluteUrl(path),
    touristType: "Leisure and business travellers",
    provider: { "@id": `${siteConfig.url}/#organization` },
    ...(itinerary?.length
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: itinerary.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              description: item.text,
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: siteConfig.url,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };
}
