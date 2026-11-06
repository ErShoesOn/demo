import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  articles,
  formatArticleDate,
  getArticle,
} from "@/data/blog";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Travel guide not found" };
  }

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/travel-guides/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function TravelGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => {
      const aMatch = a.category === article.category ? 1 : 0;
      const bMatch = b.category === article.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        crumbs={[
          { label: "Travel Guides", href: "/travel-guides" },
          { label: article.title },
        ]}
        image={{
          src: article.image,
          alt: article.imageAlt,
          caption: article.imageCaption,
        }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <article>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-navy-100 pb-6 text-xs font-medium text-slate-500">
                <span className="font-semibold text-navy-800">
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    Published{" "}
                    <time dateTime={article.publishedAt}>
                      {formatArticleDate(article.publishedAt)}
                    </time>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.readingTime}
                </span>
                <span>
                  Updated{" "}
                  <time dateTime={article.updatedAt}>
                    {formatArticleDate(article.updatedAt)}
                  </time>
                </span>
              </div>

              <p className="mt-7 text-lg leading-8 text-navy-900">
                {article.intro}
              </p>

              <div className="mt-8 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-xl font-bold tracking-[-0.01em] text-navy-950">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-4 text-base leading-8 text-slate-600">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-2.5 text-sm leading-6 text-slate-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-navy-100 bg-navy-50/70 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-navy-950">
                  Need help applying this to your trip?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Send your dates, route, passenger count and luggage. We will
                  recommend a vehicle category and explain the trade-offs before
                  you commit to anything.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/contact#inquiry" variant="primary" size="md">
                    Send an inquiry
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href="/services/chauffeur-driven-car-rental"
                    variant="secondary"
                    size="md"
                  >
                    About chauffeur-driven rentals
                  </ButtonLink>
                </div>
              </div>

              {article.faqs?.length ? (
                <div className="mt-12">
                  <SectionHeading
                    title="Questions from this guide"
                    description="Short answers to the points readers ask about most often."
                  />
                  <div className="mt-6">
                    <FaqList items={article.faqs} />
                  </div>
                </div>
              ) : null}

              <div className="mt-12 border-t border-navy-100 pt-8">
                <h2 className="text-lg font-bold text-navy-950">
                  Sources and further reading
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  These links are provided for official or reference
                  information. Details can change, so check them before you
                  travel.
                </p>
                <ul className="mt-5 space-y-3">
                  {article.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                      >
                        {source.label}
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </a>
                      {source.note ? (
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {source.note}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-soft sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Plan with us
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Turn the guide into a route.
                </h2>
                <p className="mt-3 text-sm leading-6 text-navy-100/80">
                  Share your travel dates and the journey you have in mind. We
                  will confirm availability and send a written quotation.
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

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card">
                <h2 className="text-sm font-bold text-navy-950">
                  Related pages
                </h2>
                <ul className="mt-4 divide-y divide-navy-100">
                  <li>
                    <Link
                      href="/fleet"
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                    >
                      Vehicle categories
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
                      Route guides
                      <ArrowRight
                        className="h-3.5 w-3.5 text-navy-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/airport-transfers"
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-700"
                    >
                      Airport transfers
                      <ArrowRight
                        className="h-3.5 w-3.5 text-navy-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <Notice title="General information" tone="light">
                This guide is for general planning. Road, weather, access and
                charging conditions can change. Confirm current details before
                you travel.
              </Notice>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Keep reading"
            title="More travel guides."
            description="Practical articles about vehicles, transfers and journeys in Nepal."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you need the journey to do."
        description="A transfer, a full-day itinerary or a multi-day route. Share the plan and we will confirm what can be arranged."
        primaryLabel="Start an inquiry"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            path: `/travel-guides/${article.slug}`,
            image: article.image,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
            author: article.author,
          }),
          ...(article.faqs?.length ? [faqSchema(article.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Travel Guides", path: "/travel-guides" },
            {
              name: article.title,
              path: `/travel-guides/${article.slug}`,
            },
          ]),
        ]}
      />
    </>
  );
}
