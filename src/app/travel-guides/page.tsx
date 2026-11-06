import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, PenLine } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articleCategories, articles } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Nepal Travel Guides and Car Rental Advice",
  description:
    "Practical travel guides for Nepal, including choosing a vehicle, Kathmandu airport transfers, the Kathmandu–Pokhara road journey and electric vehicle planning.",
  path: "/travel-guides",
});

export default function TravelGuidesPage() {
  const sortedArticles = [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <PageHero
        eyebrow="Travel guides"
        title="Useful context before you travel."
        description="Practical guides about vehicles, airport transfers, road journeys and electric travel in Nepal. Written to help you ask better questions, not to fill a page."
        crumbs={[{ label: "Travel Guides" }]}
        image={{
          src: "/images/hero-road.jpg",
          alt: "A highway passing through green hills in Nepal",
          caption:
            "Prithvi Highway at Ghansikuwa. Photo: Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons. Illustrative travel photography.",
        }}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Ask a travel question
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/routes" variant="light" size="lg">
              Browse route guides
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The archive"
            title="Guides for the practical parts of the trip."
            description="Travel in Nepal is easier when the transport assumptions are realistic. These articles explain what to consider before you send an inquiry."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Topics"
                title="What we write about."
                description="The archive grows around the questions we are asked most often. If a topic would help you plan, tell us."
              />
              <ul className="mt-7 flex flex-wrap gap-2">
                {articleCategories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <PenLine
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-base font-bold text-navy-950">
                      Editorial approach
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Articles are attributed to the Majestic Rentals editorial
                      team and show publication and update dates. Changing
                      details such as road conditions, charging availability and
                      access rules are linked to sources so you can check them
                      before travelling.
                    </p>
                  </div>
                </div>
              </div>
              <Notice title="Guides are general information">
                Travel times, road conditions and access rules can change. A
                guide is not a substitute for confirming your own itinerary with
                us or with the relevant authority before you travel.
              </Notice>
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <div className="flex items-start gap-3">
                  <BookOpen
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-base font-bold text-navy-950">
                      Looking for route detail?
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Our route guides cover distances, typical journey times,
                      suggested stops and planning notes for specific intercity
                      journeys.
                    </p>
                    <Link
                      href="/routes"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                    >
                      Open route guides
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question the guides do not answer?"
        description="Send it with your travel dates and route. We will reply with practical advice and, if you need transport, a written quotation."
        primaryLabel="Send an inquiry"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Travel Guides", path: "/travel-guides" },
        ])}
      />
    </>
  );
}
