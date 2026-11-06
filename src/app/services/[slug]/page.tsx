import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getService, services } from "@/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.navLabel },
        ]}
        image={{
          src: service.image,
          alt: service.imageAlt,
          caption: service.imageCaption,
        }}
        actions={
          <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
            Request this service
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="text-base leading-8 text-slate-600">
                <p>{service.intro}</p>
              </div>

              <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/70 p-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-700">
                  Highlights
                </h2>
                <CheckList className="mt-4" items={service.highlights} />
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold text-navy-950">
                    What is included
                  </h2>
                  <CheckList className="mt-4" items={service.included} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-950">
                    Well suited to
                  </h2>
                  <CheckList className="mt-4" items={service.suitedTo} />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Good to know
                </h2>
                <CheckList
                  className="mt-4"
                  variant="info"
                  items={service.goodToKnow}
                />
              </div>

              <div className="mt-12">
                <SectionHeading
                  title="Questions about this service"
                  description="These are the questions we are asked most often. If yours is not covered, send it with your inquiry."
                />
                <div className="mt-6">
                  <FaqList items={service.faqs} />
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Start here
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Request this service
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Share your dates, pickup point, destination, passenger count
                  and luggage. We will check availability and send a written
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
                  A request is not a confirmed booking. Availability is checked
                  first.
                </p>
              </div>

              <Notice title="Chauffeur-driven only" tone="light">
                Every Majestic Rentals vehicle is provided with a driver. We do
                not offer self-drive rentals.
              </Notice>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Other services
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  {relatedServices.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                      >
                        {item.navLabel}
                        <ArrowRight
                          className="h-3.5 w-3.5 text-navy-400"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6">
                <h2 className="text-sm font-bold text-navy-950">
                  Planning a route?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Read our destination and route guides for practical notes on
                  travel time, stops and road conditions.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
                  <Link
                    href="/destinations"
                    className="text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/routes"
                    className="text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Route guides
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ask about ${service.name.toLowerCase()}.`}
        description="We will confirm what is available for your dates and set out the details in a written quotation."
        primaryLabel="Check availability"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.seoDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
