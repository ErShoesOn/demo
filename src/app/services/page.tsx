import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ServiceCard } from "@/components/cards";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Chauffeur-Driven Car Rental Services in Nepal",
  description:
    "Explore Majestic Rentals services: chauffeur-driven car rental, EV rental, airport transfers, corporate transport, wedding transport and intercity travel in Nepal.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Private transport for the way you need to travel."
        description="Airport arrivals, city days, business schedules, weddings and journeys across Nepal. Every service is chauffeur-driven, inquiry-led and confirmed with a written quotation."
        crumbs={[{ label: "Services" }]}
        image={{
          src: "/images/prithvi-highway-malekhu.jpg",
          alt: "A hillside highway through green hills in Nepal",
          caption:
            "Illustrative image: Prithvi Highway at Malekhu. Photo: Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons.",
        }}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Send an inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/fleet" variant="light" size="lg">
              Browse vehicle categories
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we arrange"
            title="One standard of service, adapted to the occasion."
            description="The vehicle changes with the journey, but the process stays the same: clear requirements, checked availability and a written quotation before confirmation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="What to expect"
                title="A clear arrangement, before the journey begins."
                description="We do not publish a live price list because the right quote depends on the route, duration, vehicle and waiting time. Instead, we confirm the details that determine the cost."
              />
              <div className="mt-7">
                <CheckList
                  items={[
                    "A private vehicle and professional chauffeur",
                    "A route and pickup plan agreed before departure",
                    "A written quotation with inclusions and exclusions",
                    "One point of contact for questions before travel",
                  ]}
                />
              </div>
            </div>
            <div className="space-y-5">
              <Notice title="Not included by default">
                Monument tickets, park permits, guides, safari activities,
                hotels and meals are separate unless your quotation says
                otherwise. Decoration for wedding vehicles is also a separate
                request.
              </Notice>
              <Notice title="No self-drive option" tone="light">
                Majestic Rentals provides chauffeur-driven rentals only. We do
                not offer vehicles for self-drive use, including electric
                vehicles.
              </Notice>
              <div className="rounded-2xl border border-navy-100 bg-white p-5">
                <p className="text-sm font-bold text-navy-950">
                  Not sure which service you need?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Describe the journey and we will suggest the closest fit. If a
                  request is outside what we can serve, we will say so.
                </p>
                <Link
                  href="/contact#inquiry"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  Ask our team
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what the day needs to look like."
        description="A single transfer, a full-day itinerary or a multi-day route. Share the plan and we will confirm what can be arranged."
        primaryLabel="Request a quotation"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
