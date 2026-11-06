import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { destinations } from "@/data/destinations";
import { getRoute, routes } from "@/data/routes";
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
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    return { title: "Route guide not found" };
  }

  return pageMetadata({
    title: route.seoTitle,
    description: route.seoDescription,
    path: `/routes/${route.slug}`,
    image: route.image,
    imageAlt: route.imageAlt,
  });
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    notFound();
  }

  const destination = destinations.find(
    (item) => item.name.toLowerCase() === route.to.toLowerCase(),
  );
  const relatedRoutes = routes.filter((item) => item.slug !== route.slug);

  return (
    <>
      <PageHero
        eyebrow="Route guide"
        title={route.title}
        description={route.summary}
        crumbs={[
          { label: "Route Guides", href: "/routes" },
          { label: `${route.from} to ${route.to}` },
        ]}
        image={{
          src: route.image,
          alt: route.imageAlt,
          caption: route.imageCaption,
        }}
        actions={
          <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
            Request this journey
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
                  <MapPin
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Distance
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    {route.distance}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <Clock
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Typical time
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    {route.duration}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <span
                    className="block h-5 w-5 rounded-full border-2 border-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Road
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-950">
                    {route.road}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                {route.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Suggested stops along the way
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Stops can be planned into the journey if your schedule allows.
                  Tell us if one matters to you so the timing and quotation can
                  reflect it.
                </p>
                <ol className="mt-6 border-l border-navy-200">
                  {route.stops.map((stop, index) => (
                    <li key={stop.name} className="relative pb-7 pl-8 last:pb-0">
                      <span className="absolute -left-[13px] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy-200 bg-white text-[11px] font-bold text-navy-900">
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-bold text-navy-950">
                        {stop.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {stop.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Planning notes
                </h2>
                <CheckList className="mt-4" items={route.planning} />
              </div>

              <div className="mt-10">
                <Notice title="Best time and conditions">
                  {route.bestTime}
                </Notice>
              </div>

              <div className="mt-12">
                <SectionHeading
                  title="Questions about this route"
                  description="Practical answers about timing, stops and vehicle suitability."
                />
                <div className="mt-6">
                  <FaqList items={route.faqs} />
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Route inquiry
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  {route.from} to {route.to}
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Send your travel date, pickup point, passenger count and
                  luggage. We will confirm the route, vehicle category and a
                  written quotation.
                </p>
                <ButtonLink
                  href="/contact#inquiry"
                  variant="gold"
                  size="md"
                  className="mt-5 w-full"
                >
                  Check availability
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
              </div>

              {destination ? (
                <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                  <h2 className="text-sm font-bold text-navy-950">
                    Destination guide
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Read more about {destination.name}, including places to
                    consider and local travel notes.
                  </p>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Explore {destination.name}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Other route guides
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  {relatedRoutes.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/routes/${item.slug}`}
                        className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                      >
                        {item.from} to {item.to}
                        <ArrowRight
                          className="h-3.5 w-3.5 text-navy-400"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Plan the ${route.from} to ${route.to} journey.`}
        description="We will confirm availability, suggest a suitable vehicle and set out the route and quotation in writing."
        primaryLabel="Start an inquiry"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          serviceSchema({
            name: route.title,
            description: route.seoDescription,
            path: `/routes/${route.slug}`,
            serviceType: "Private intercity car transfer",
          }),
          faqSchema(route.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Route Guides", path: "/routes" },
            {
              name: `${route.from} to ${route.to}`,
              path: `/routes/${route.slug}`,
            },
          ]),
        ]}
      />
    </>
  );
}
