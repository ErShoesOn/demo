import type { Metadata } from "next";
import { ArrowRight, Users } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { VehicleCard } from "@/components/cards";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { fleetNote, vehicleCategories } from "@/data/vehicles";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Fleet: Chauffeur-Driven Vehicle Categories",
  description:
    "Browse chauffeur-driven vehicle categories for Nepal: executive sedan, premium SUV, compact hatchback, premium vehicle and electric vehicle. Availability confirmed on inquiry.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our fleet"
        title="The right vehicle for the road ahead."
        description="Choose a vehicle category based on your passengers, luggage and route. We confirm the exact vehicle, its condition and availability with your written quotation."
        crumbs={[{ label: "Our Fleet" }]}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Check availability
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/services" variant="light" size="lg">
              View services
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Notice title="How our fleet information works">{fleetNote}</Notice>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleCategories.map((category) => (
              <VehicleCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Choosing a category"
              title="A category is a starting point, not a promise of a model."
              description="The best vehicle depends on the whole journey, not just the number of seats. These are the details that help us recommend the right option."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Passengers",
                  text: "Count everyone travelling, including children. A full passenger load can leave limited luggage space.",
                },
                {
                  title: "Luggage",
                  text: "Tell us the number and approximate size of bags. Large suitcases, trekking packs and strollers change the answer.",
                },
                {
                  title: "Route and season",
                  text: "City streets, long highways and mountain roads call for different vehicles. Weather and road conditions matter.",
                },
                {
                  title: "Comfort needs",
                  text: "Mention accessibility needs, child seats or a preference for extra space so we can plan realistically.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-navy-100 bg-white p-5"
                >
                  <h3 className="text-sm font-bold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-navy-100 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Users
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-base font-bold text-navy-950">
                  Need a larger vehicle or more than one car?
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  Larger vehicles and multiple vehicles can be requested for
                  groups, subject to availability. Share the passenger count,
                  luggage and full timetable so we can propose a workable
                  combination.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <CheckList
                items={[
                  "Tell us the exact passenger and luggage count, not an estimate.",
                  "Share the full route so we can match the vehicle to the road.",
                  "Ask about child seats or accessibility equipment in advance.",
                ]}
              />
            </div>
            <ButtonLink
              href="/contact#inquiry"
              variant="primary"
              size="md"
              className="mt-6"
            >
              Send your requirements
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which category fits?"
        description="Send your dates, route, passenger count and luggage. We will recommend a category and explain the trade-offs honestly."
        primaryLabel="Ask for a recommendation"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Fleet", path: "/fleet" },
        ])}
      />
    </>
  );
}
