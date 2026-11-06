import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PackageCard } from "@/components/cards";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getTourPackage, tourPackages } from "@/data/packages";
import {
  breadcrumbSchema,
  faqSchema,
  touristTripSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tourPackages.map((tourPackage) => ({ slug: tourPackage.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tourPackage = getTourPackage(slug);

  if (!tourPackage) {
    return { title: "Tour package not found" };
  }

  return pageMetadata({
    title: tourPackage.seoTitle,
    description: tourPackage.seoDescription,
    path: `/tour-packages/${tourPackage.slug}`,
    image: tourPackage.image,
    imageAlt: tourPackage.imageAlt,
  });
}

export default async function TourPackagePage({ params }: PageProps) {
  const { slug } = await params;
  const tourPackage = getTourPackage(slug);

  if (!tourPackage) {
    notFound();
  }

  const relatedPackages = tourPackages.filter(
    (item) => item.slug !== tourPackage.slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Tour package outline"
        title={tourPackage.name}
        description={tourPackage.summary}
        crumbs={[
          { label: "Tour Packages", href: "/tour-packages" },
          { label: tourPackage.name },
        ]}
        image={{
          src: tourPackage.image,
          alt: tourPackage.imageAlt,
          caption: tourPackage.imageCaption,
        }}
        actions={
          <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
            Request this itinerary
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <Clock className="h-5 w-5 text-gold-700" aria-hidden="true" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Suggested duration
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    {tourPackage.duration}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <MapPin
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Destinations
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    {tourPackage.destinations.join(" · ")}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <span
                    className="block h-5 w-5 rounded-full border-2 border-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Travel style
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    Private, chauffeur-driven
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                {tourPackage.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Suggested itinerary
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The order of visits and the pace can change with traffic,
                  weather and your own priorities. We confirm the daily plan with
                  your quotation.
                </p>
                <ol className="mt-6 border-l border-navy-200">
                  {tourPackage.itinerary.map((day, index) => (
                    <li
                      key={day.day}
                      className="relative pb-8 pl-8 last:pb-0"
                    >
                      <span className="absolute -left-[13px] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy-200 bg-white text-[11px] font-bold text-navy-900">
                        {index + 1}
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-700">
                        {day.day}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-navy-950">
                        {day.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {day.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-6">
                  <h2 className="text-base font-bold text-navy-950">
                    What the quotation covers
                  </h2>
                  <CheckList className="mt-4" items={tourPackage.included} />
                </div>
                <div className="rounded-2xl border border-navy-100 bg-white p-6">
                  <h2 className="text-base font-bold text-navy-950">
                    Arranged separately
                  </h2>
                  <CheckList
                    className="mt-4"
                    variant="info"
                    items={tourPackage.notIncluded}
                  />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Who this outline suits
                </h2>
                <CheckList className="mt-4" items={tourPackage.bestFor} />
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Planning notes
                </h2>
                <CheckList
                  className="mt-4"
                  variant="info"
                  items={tourPackage.notes}
                />
              </div>

              <div className="mt-10">
                <Notice title="Indicative, not fixed">
                  This page describes a possible itinerary, not a guaranteed
                  product. Opening hours, access rules, road conditions and
                  activity availability can change. We confirm the final plan in
                  writing before you commit.
                </Notice>
              </div>

              <div className="mt-12">
                <SectionHeading
                  title="Questions about this itinerary"
                  description="If your question is not answered here, include it with your inquiry."
                />
                <div className="mt-6">
                  <FaqList items={tourPackage.faqs} />
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Start here
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Request this itinerary
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Send your preferred dates, arrival details, passenger count and
                  luggage. We will check availability and reply with a written
                  quotation.
                </p>
                <ButtonLink
                  href="/contact#inquiry"
                  variant="gold"
                  size="md"
                  className="mt-5 w-full"
                >
                  Send an inquiry
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
                <p className="mt-3 text-[11px] leading-5 text-navy-300">
                  A request is not a confirmed booking. Availability and terms
                  are confirmed first.
                </p>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Useful links
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  <li>
                    <Link
                      href="/fleet"
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                    >
                      Compare vehicle categories
                      <ArrowRight
                        className="h-3.5 w-3.5 text-navy-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/routes"
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                    >
                      Read route guides
                      <ArrowRight
                        className="h-3.5 w-3.5 text-navy-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/travel-guides"
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                    >
                      Browse travel guides
                      <ArrowRight
                        className="h-3.5 w-3.5 text-navy-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <Notice title="Chauffeur-driven only" tone="light">
                Every vehicle is provided with a driver. We do not offer
                self-drive rentals or shared group departures.
              </Notice>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Other outlines"
            title="Compare another route."
            description="These outlines can be adapted, combined or used as a starting point for a different itinerary."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {relatedPackages.map((item) => (
              <PackageCard key={item.slug} tourPackage={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Plan ${tourPackage.name.toLowerCase()}.`}
        description="Tell us your dates and what you want the trip to include. We will confirm what can be arranged and set out the details in writing."
        primaryLabel="Check availability"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          touristTripSchema({
            name: tourPackage.name,
            description: tourPackage.seoDescription,
            path: `/tour-packages/${tourPackage.slug}`,
            itinerary: tourPackage.itinerary.map((day) => ({
              title: `${day.day}: ${day.title}`,
              text: day.text,
            })),
          }),
          faqSchema(tourPackage.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tour Packages", path: "/tour-packages" },
            {
              name: tourPackage.name,
              path: `/tour-packages/${tourPackage.slug}`,
            },
          ]),
        ]}
      />
    </>
  );
}
