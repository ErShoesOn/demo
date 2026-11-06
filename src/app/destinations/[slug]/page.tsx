import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  destinations,
  getDestination,
} from "@/data/destinations";
import { getRoute } from "@/data/routes";
import {
  breadcrumbSchema,
  faqSchema,
  touristDestinationSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return { title: "Destination not found" };
  }

  return pageMetadata({
    title: destination.seoTitle,
    description: destination.seoDescription,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
    imageAlt: destination.imageAlt,
  });
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  const route = destination.routeSlug ? getRoute(destination.routeSlug) : null;
  const related = destinations.filter(
    (item) => item.slug !== destination.slug,
  );

  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={`${destination.name}, with a private chauffeur`}
        description={destination.summary}
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
        image={{
          src: destination.image,
          alt: destination.imageAlt,
          caption: destination.imageCaption,
        }}
        actions={
          <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
            Plan this journey
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="space-y-5 text-base leading-8 text-slate-600">
                {destination.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <MapPin
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Region
                  </p>
                  <p className="mt-1 text-base font-bold text-navy-950">
                    {destination.region}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <CalendarDays
                    className="h-5 w-5 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">
                    Suggested stay
                  </p>
                  <p className="mt-1 text-base font-bold text-navy-950">
                    {destination.suggestedDuration}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-950">
                  Places and experiences to consider
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {destination.highlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="rounded-2xl border border-navy-100 bg-white p-5"
                    >
                      <h3 className="text-sm font-bold text-navy-950">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {highlight.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold text-navy-950">
                    Travel notes
                  </h2>
                  <CheckList
                    className="mt-4"
                    variant="info"
                    items={destination.travelNotes}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-950">Best for</h2>
                  <CheckList className="mt-4" items={destination.bestFor} />
                </div>
              </div>

              {route ? (
                <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50/70 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                    Route guide
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-navy-950">
                    {route.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {route.summary}
                  </p>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Read the route guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}

              <div className="mt-12">
                <SectionHeading
                  title={`Questions about visiting ${destination.name}`}
                  description="Practical answers about transport, timing and what can be arranged for this destination."
                />
                <div className="mt-6">
                  <FaqList items={destination.faqs} />
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Destination inquiry
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Travel to {destination.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Tell us your dates, starting point and how long you want to
                  stay. We will confirm a practical route, vehicle category and
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
              </div>

              {route ? (
                <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                  <h2 className="text-sm font-bold text-navy-950">
                    Route at a glance
                  </h2>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                        Distance
                      </dt>
                      <dd className="mt-0.5 font-semibold text-navy-950">
                        {route.distance}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                        Typical time
                      </dt>
                      <dd className="mt-0.5 font-semibold text-navy-950">
                        {route.duration}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Full route guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Other destinations
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/destinations/${item.slug}`}
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
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Plan your journey to ${destination.name}.`}
        description="We will check availability for your dates and explain the route, vehicle and quotation before you commit."
        primaryLabel="Request a quotation"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          touristDestinationSchema({
            name: destination.name,
            description: destination.seoDescription,
            path: `/destinations/${destination.slug}`,
            region: destination.region,
          }),
          faqSchema(destination.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            {
              name: destination.name,
              path: `/destinations/${destination.slug}`,
            },
          ]),
        ]}
      />
    </>
  );
}
