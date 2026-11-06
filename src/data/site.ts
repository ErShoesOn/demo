/**
 * Central business configuration.
 *
 * OWNER ACTION REQUIRED:
 * The contact fields below are intentionally empty. Do not publish the site
 * until verified phone, WhatsApp, email and address details are supplied.
 * Empty values make the UI hide the relevant links rather than render
 * misleading or broken contact details.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  url: string;
  tagline: string;
  description: string;
  locale: string;
  hub: string;
  contact: {
    /** Include country code, e.g. +977 98XXXXXXXX */
    phone: string;
    /** WhatsApp number in international format, digits only or +977... */
    whatsapp: string;
    email: string;
    /** Full street address only when verified. */
    address: string;
    /** Google Business Profile / Google Maps URL only when verified. */
    mapsUrl: string;
    /** e.g. "Daily, 7:00 AM – 8:00 PM NPT" only when confirmed. */
    hours: string;
  };
  social: SocialLink[];
  /** Set to true only after the production domain is live and verified. */
  allowIndexing: boolean;
};

export const siteConfig: SiteConfig = {
  name: "Majestic Rentals",
  legalName: "Majestic Rentals",
  url: "https://majesticrentals.com.np",
  tagline: "Premium chauffeur-driven car rentals across Nepal",
  description:
    "Majestic Rentals arranges premium chauffeur-driven car rentals, EV rentals, airport transfers and private travel across Nepal. Based in Kathmandu, serving travellers nationwide. Send an inquiry for availability and a quotation.",
  locale: "en_NP",
  hub: "Kathmandu, Nepal",
  contact: {
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    mapsUrl: "",
    hours: "",
  },
  social: [],
  allowIndexing: true,
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Travel Guides", href: "/travel-guides" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  explore: [
    { label: "About Majestic Rentals", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Destinations", href: "/destinations" },
    { label: "Route Guides", href: "/routes" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Travel Guides", href: "/travel-guides" },
    { label: "FAQs", href: "/faqs" },
  ],
  services: [
    { label: "Chauffeur-Driven Rentals", href: "/services/chauffeur-driven-car-rental" },
    { label: "Electric Vehicle Rentals", href: "/services/electric-vehicle-rental" },
    { label: "Airport Transfers", href: "/services/airport-transfers" },
    { label: "Corporate Transport", href: "/services/corporate-transport" },
    { label: "Weddings & Events", href: "/services/wedding-event-transport" },
    { label: "Intercity Travel", href: "/services/intercity-travel" },
  ],
  legal: [
    { label: "Contact Us", href: "/contact" },
    { label: "Reviews", href: "/reviews" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Photography Credits", href: "/photography-credits" },
  ],
};

export const serviceAreas = [
  "Kathmandu",
  "Pokhara",
  "Chitwan",
  "Lumbini",
  "Muktinath",
  "Nationwide Nepal on request",
] as const;

export const defaultWhatsAppMessage =
  "Hello Majestic Rentals, I would like to inquire about a chauffeur-driven rental. My travel date, pickup point and destination are:";

function normalisePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function phoneHref(): string | null {
  const number = normalisePhone(siteConfig.contact.phone);
  return number ? `tel:${number}` : null;
}

export function whatsappHref(message: string = defaultWhatsAppMessage): string | null {
  const number = normalisePhone(siteConfig.contact.whatsapp).replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function emailHref(subject = "Rental inquiry"): string | null {
  const email = siteConfig.contact.email.trim();
  if (!email) return null;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function hasPublicContactDetails() {
  return Boolean(
    siteConfig.contact.phone ||
      siteConfig.contact.whatsapp ||
      siteConfig.contact.email ||
      siteConfig.contact.address,
  );
}
