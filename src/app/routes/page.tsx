import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { RouteCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { routes } from "@/data/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Route Guides for Private Car Travel in Nepal",
  description:
    "Route guides for private car journeys in Nepal, including Kathmandu to Pokhara, Chitwan, Lumbini and Muktinath, with distance, timing and planning notes.",
  path: "/routes",
});

export default function RoutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Route guides"
        title="The road matters as much as the destination."
        description="Practical notes for some of Nepal's most requested private car journeys. Distances and times are planning guides, not guarantees; conditions change with the season, weather and traffic."
        crumbs={[{ label: "Route Guides" }]}
        image={{
          src: "/images/hero-road.jpg",
          alt: "A highway winding through green hills in Nepal",
          caption:
            "Illustrative image: Prithvi Highway, Nepal. Photo: Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons.",
        }}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Plan a route
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/destinations" variant="light" size="lg">
              Explore destinations
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Private car journeys"
            title="Routes we are asked about most."
            description="Each guide explains the general route, the stops worth considering and the practical questions to settle before you confirm. Service on a route is confirmed for your dates."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {routes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Before you travel"
                title="Plan for the road, not just the distance."
                description="A map can make a journey look simpler than it is. Road works, weather, festival traffic and rest stops all affect how a day feels. We plan with margin and tell you when an itinerary is too tight."
              />
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                If you are combining several destinations, share the whole route
                rather than asking for each leg separately. That helps us avoid
                backtracking and quote the journey as one plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/tour-packages" variant="primary" size="md">
                  View tour outlines
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/destinations" variant="secondary" size="md">
                  Destination guides
                </ButtonLink>
              </div>
            </div>
            <Notice title="Travel times are estimates">
              Traffic, road conditions, weather and festival periods can change
              journey times. We share realistic estimates but cannot guarantee
              an exact arrival time. Build in buffer for flights and fixed
              appointments.
            </Notice>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us the full route."
        description="Share your starting point, destination, dates and stops. We will confirm whether the journey can be arranged and what it will involve."
        primaryLabel="Ask about a route"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Route Guides", path: "/routes" },
        ])}
      />
    </>
  );
}
