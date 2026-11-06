import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DestinationCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { destinations } from "@/data/destinations";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Destinations Across Nepal",
  description:
    "Destination guides for Kathmandu, Pokhara, Chitwan, Lumbini and Muktinath, with practical transport notes and private chauffeur-driven travel options.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where would you like to go?"
        description="From the Kathmandu Valley to the lakeside streets of Pokhara, the lowlands of Chitwan and the high landscapes of Mustang. Explore the practical side of each destination before you plan the journey."
        crumbs={[{ label: "Destinations" }]}
        image={{
          src: "/images/pokhara-phewa-lake.jpg",
          alt: "Phewa Lake in Pokhara with hills in the background",
          caption:
            "Phewa Lake, Pokhara. Photo: Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons. Illustrative travel photography.",
        }}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Plan a journey
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
            eyebrow="Explore Nepal"
            title="Destinations we can help you plan around."
            description="Each guide covers what makes the destination distinct, the transport questions worth settling early and the limits of what we can promise before checking your dates."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Route planning"
                title="A destination is only half the plan."
                description="Travel time, road conditions, seasonal access and the number of stops all shape a realistic itinerary. Our route guides explain what to expect on some of the journeys we are asked about most."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/routes" variant="primary" size="md">
                  Browse route guides
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/tour-packages" variant="secondary" size="md">
                  View tour outlines
                </ButtonLink>
              </div>
            </div>
            <Notice title="Availability is confirmed for your dates">
              A destination page describes the kind of journey we can plan, not
              a guarantee that every vehicle or route is available every day.
              Send your dates and we will confirm what can be arranged.
            </Notice>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-base font-bold text-navy-950">
                  Looking for a destination not listed here?
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  We accept requests across Nepal on a case-by-case basis. Tell
                  us where you need to go, when you are travelling and how much
                  time you have. We will tell you honestly whether we can plan a
                  practical journey.
                </p>
                <Link
                  href="/contact#inquiry"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  Ask about your destination
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Build the journey around your dates."
        description="Tell us the places you want to see and the time you have. We will suggest a realistic route, vehicle category and quotation."
        primaryLabel="Start planning"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
    </>
  );
}
