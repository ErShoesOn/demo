import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LocaleShell } from "@/components/locale-shell";
import { FloatingContact } from "@/components/floating-contact";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { indexingAllowed } from "@/lib/seo";
import { defaultLocale } from "@/lib/i18n";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle =
  "Majestic Rentals | Chauffeur-Driven Car Rentals in Nepal";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Majestic Rentals — chauffeur-driven car rentals across Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: ["/images/og-default.jpg"],
  },
  robots: indexingAllowed()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
      { url: "/android-chrome-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/android-chrome-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
  },
  other: {
    "content-language": defaultLocale,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1422",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} className={`${manrope.variable} h-full`}>
      <body className="flex min-h-dvh flex-col bg-white text-navy-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <LocaleShell>{children}</LocaleShell>
        </main>
        <SiteFooter />
        <FloatingContact />
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
      </body>
    </html>
  );
}
