import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Luggage, Users } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { fleetNote, getVehicleCategory, vehicleCategories } from "@/data/vehicles";
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
  return vehicleCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getVehicleCategory(slug);

  if (!category) {
    return { title: "Vehicle category not found" };
  }

  return pageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/fleet/${category.slug}`,
  });
}

export default async function VehicleCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getVehicleCategory(slug);

  if (!category) {
    notFound();
  }

  const related = vehicleCategories.filter(
    (item) => item.slug !== category.slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Vehicle category"
        title={category.name}
        description={category.summary}
        crumbs={[
          { label: "Our Fleet", href: "/fleet" },
          { label: category.name },
        ]}
        actions={
          <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
            Request this category
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="space-y-5 text-base leading-8 text-slate-600">
                {category.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <Users
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Typical passengers
                  </p>
                  <p className="mt-1 text-base font-bold text-navy-950">
                    {category.passengers}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <Luggage
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Typical luggage
                  </p>
                  <p className="mt-1 text-base font-bold text-navy-950">
                    {category.luggage}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold text-navy-950">Best for</h2>
                  <CheckList className="mt-4" items={category.bestFor} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-950">Features</h2>
                  <CheckList className="mt-4" items={category.features} />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Good to know
                </h2>
                <CheckList
                  className="mt-4"
                  variant="info"
                  items={category.considerations}
                />
              </div>

              <div className="mt-12">
                <SectionHeading
                  title="Questions about this category"
                  description="If your question is not answered here, send it with your inquiry and we will respond directly."
                />
                <div className="mt-6">
                  <FaqList items={category.faqs} />
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Next step
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Request this category
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Send your travel date, pickup point, destination, passenger
                  count and luggage. We will confirm what is available for your
                  dates.
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
                  Availability is confirmed before booking. A request is not a
                  reservation.
                </p>
              </div>

              <Notice title="Fleet note">{fleetNote}</Notice>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Other categories
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/fleet/${item.slug}`}
                        className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                      >
                        {item.name}
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
                  Need a different arrangement?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Larger groups, multiple vehicles and specialist requirements
                  can be requested. Tell us the full picture.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                >
                  Contact our team
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ask about the ${category.name.toLowerCase()}.`}
        description="We will check availability for your dates and explain what is included in the quotation before you commit."
        primaryLabel="Check availability"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          serviceSchema({
            name: `${category.name} with chauffeur`,
            description: category.seoDescription,
            path: `/fleet/${category.slug}`,
            serviceType: "Chauffeur-driven vehicle rental",
          }),
          faqSchema(category.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Fleet", path: "/fleet" },
            { name: category.name, path: `/fleet/${category.slug}` },
          ]),
        ]}
      />
    </>
  );
}
