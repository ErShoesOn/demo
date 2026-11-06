import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PackageCard } from "@/components/cards";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { tourPackages } from "@/data/packages";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Nepal Tour Packages with a Private Chauffeur",
  description:
    "Explore indicative private tour itineraries for the Kathmandu Valley, Pokhara and Chitwan. Chauffeur-driven transport with a written quotation before confirmation.",
  path: "/tour-packages",
});

export default function TourPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Private itineraries, planned around the road."
        description="These outlines show how a private chauffeur-driven journey across Nepal can fit together. They are planning frameworks, not fixed products: dates, pace, vehicle and inclusions are confirmed with your quotation."
        crumbs={[{ label: "Tour Packages" }]}
        image={{
          src: "/images/muktinath-temple.jpg",
          alt: "The main temple at Muktinath in Nepal",
          caption:
            "Muktinath Temple. Photo: Nepal Trek Adventures, CC BY 4.0, via Wikimedia Commons. Illustrative travel photography, not a fleet photo.",
        }}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Plan a private itinerary
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/routes" variant="light" size="lg">
              Read route guides
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Indicative outlines"
            title="Start with a shape, then make it yours."
            description="Each outline lists a suggested rhythm rather than a rigid schedule. We adjust the days, stops and vehicle category once we understand your arrival and departure plans."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map((tourPackage) => (
              <PackageCard key={tourPackage.slug} tourPackage={tourPackage} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="How packages work"
                title="Transport is the constant. Everything else is planned around it."
                description="We are a chauffeur-driven rental service. A tour outline describes the private transport we can arrange; hotels, guides, permits and activities are separate unless a quotation says otherwise."
              />
              <div className="mt-7">
                <CheckList
                  items={[
                    "A private vehicle and chauffeur for the agreed itinerary",
                    "A route and daily rhythm discussed before you confirm",
                    "Written inclusions, exclusions and quotation",
                    "Flexibility to adjust the pace where the plan allows",
                  ]}
                />
              </div>
            </div>
            <div className="space-y-5">
              <Notice title="No fixed prices on this page">
                A package price depends on the vehicle, dates, number of days,
                waiting time, overnight arrangements and route. We send a
                written quotation after checking availability.
              </Notice>
              <Notice title="Not a guaranteed departure" tone="light">
                These are not scheduled group tours and there is no live
                inventory. Submitting an inquiry does not reserve a vehicle or
                confirm an itinerary.
              </Notice>
              <div className="rounded-2xl border border-navy-100 bg-white p-5">
                <p className="text-sm font-bold text-navy-950">
                  Travelling for a different length of time?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell us how many days you have and what matters most. We can
                  shorten an outline, extend it or connect it to another
                  destination.
                </p>
                <Link
                  href="/contact#inquiry"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  Describe your trip
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
              <Clock className="h-5 w-5 text-gold-700" aria-hidden="true" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                Duration
              </p>
              <p className="mt-1 text-sm leading-6 text-navy-950">
                From three days in the Kathmandu Valley to a week across three
                destinations.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
              <MapPin className="h-5 w-5 text-gold-700" aria-hidden="true" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                Destinations
              </p>
              <p className="mt-1 text-sm leading-6 text-navy-950">
                Kathmandu, Patan, Bhaktapur, Pokhara and Chitwan, with other
                routes on request.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
              <span
                className="block h-5 w-5 rounded-full border-2 border-gold-700"
                aria-hidden="true"
              />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                Style
              </p>
              <p className="mt-1 text-sm leading-6 text-navy-950">
                Private, unhurried and chauffeur-driven. No self-drive option and
                no shared group departures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Turn an outline into a workable plan."
        description="Share your dates, arrival details and the places that matter. We will suggest a realistic route and a suitable vehicle category."
        primaryLabel="Request an itinerary"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tour-packages" },
        ])}
      />
    </>
  );
}
