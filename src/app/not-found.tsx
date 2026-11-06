import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { tourPackages } from "@/data/packages";
import { articles } from "@/data/blog";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Page Not Found",
  description:
    "The page you requested could not be found. Browse Majestic Rentals vehicle categories, services, destinations, route guides and travel guides.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          That page has taken a different road.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-navy-100/85">
          The address you followed may be outdated, mistyped or no longer
          available. Here are a few useful places to continue from.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="gold" size="lg">
            Back to home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact#inquiry" variant="light" size="lg">
            Send an inquiry
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-gold-300">
              <Compass className="h-4 w-4" aria-hidden="true" />
              <h2 className="text-sm font-bold uppercase tracking-[0.16em]">
                Popular sections
              </h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Our Fleet", href: "/fleet" },
                { label: "Services", href: "/services" },
                { label: "Destinations", href: "/destinations" },
                { label: "Tour Packages", href: "/tour-packages" },
                { label: "Travel Guides", href: "/travel-guides" },
                { label: "FAQs", href: "/faqs" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 font-semibold text-navy-100 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-gold-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <h2 className="text-sm font-bold uppercase tracking-[0.16em]">
                Start with a destination
              </h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {destinations.slice(0, 4).map((destination) => (
                <li key={destination.slug}>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-navy-100 transition-colors hover:text-white"
                  >
                    {destination.name}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-navy-300">
              {services.length} services, {tourPackages.length} tour outlines and{" "}
              {articles.length} travel guides are available from the main
              navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
