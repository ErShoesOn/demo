import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { allFaqs, faqGroups } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about chauffeur-driven rentals in Nepal, vehicle categories, airport transfers, intercity travel, quotations, changes and cancellations.",
  path: "/faqs",
});

function groupId(index: number) {
  return `topic-${index + 1}`;
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Clear answers before you inquire."
        description="How bookings work, what vehicle categories mean, how airport and intercity travel are planned, and what a quotation covers. If your question is not here, send it to us directly."
        crumbs={[{ label: "FAQs" }]}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Ask your question
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
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6">
                <h2 className="text-sm font-bold text-navy-950">On this page</h2>
                <nav aria-label="FAQ topics" className="mt-4">
                  <ol className="space-y-2">
                    {faqGroups.map((group, index) => (
                      <li key={group.title}>
                        <a
                          href={`#${groupId(index)}`}
                          className="text-sm font-medium text-navy-800 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-navy-950 hover:decoration-gold-400"
                        >
                          {group.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className="mt-5 rounded-3xl bg-navy-950 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                  Still unsure?
                </p>
                <h2 className="mt-3 text-lg font-bold">
                  Send us the details.
                </h2>
                <p className="mt-2 text-sm leading-6 text-navy-100/80">
                  Your dates, route and group size are enough to start. We will
                  explain what can be arranged.
                </p>
                <ButtonLink
                  href="/contact#inquiry"
                  variant="gold"
                  size="md"
                  className="mt-4 w-full"
                >
                  Send an inquiry
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
              </div>
            </aside>

            <div>
              <SectionHeading
                eyebrow="Before you ask"
                title="The short version."
                description="Majestic Rentals is a chauffeur-driven rental service. You send an inquiry, we check availability and send a written quotation, and a booking is confirmed only after you accept it. We do not offer self-drive rentals or instant online booking."
              />
              <div className="mt-6">
                <Notice title="A request is not a reservation">
                  Submitting the inquiry form does not reserve a vehicle, lock a
                  price or confirm a driver. Availability and terms are confirmed
                  in writing before anything is finalised.
                </Notice>
              </div>

              <div className="mt-12 space-y-12">
                {faqGroups.map((group, index) => (
                  <section key={group.title} id={groupId(index)}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                        <MessageCircleQuestion
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h2 className="text-xl font-bold tracking-[-0.01em] text-navy-950">
                          {group.title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {group.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <FaqList items={group.items} />
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-sm leading-7 text-slate-600">
                  For the formal position on inquiries, quotations, payment,
                  changes and cancellations, read our{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    terms and conditions
                  </Link>
                  . For how inquiry information is handled, read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="A question we have not answered?"
        description="Send it with your travel dates and route. We will reply with a clear answer, and a quotation if you need transport."
        primaryLabel="Contact our team"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />
    </>
  );
}
