import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageSquareQuote, Star } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { reviewsNote, testimonials } from "@/data/testimonials";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reviews and Customer Feedback",
  description:
    "Read the Majestic Rentals review policy. We publish only feedback we can verify and have permission to share, and we do not display invented reviews or ratings.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Genuine feedback, published honestly."
        description="We would rather show you an empty page than a wall of invented testimonials. This page explains what we publish, what we do not, and how verified feedback will appear as it is collected."
        crumbs={[{ label: "Reviews" }]}
        actions={
          <ButtonLink href="/contact" variant="gold" size="lg">
            Contact our team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {testimonials.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={`${testimonial.name}-${testimonial.date}`}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-1 text-gold-500" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-slate-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <footer className="mt-5 border-t border-navy-100 pt-4 text-xs text-slate-500">
                    <p className="font-bold text-navy-950">{testimonial.name}</p>
                    <p className="mt-0.5">
                      {testimonial.location} · {testimonial.date}
                      {testimonial.source ? ` · ${testimonial.source}` : ""}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="rounded-3xl border border-navy-100 bg-navy-50/70 p-8 text-center sm:p-12">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy-900 shadow-sm">
                    <MessageSquareQuote
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.01em] text-navy-950">
                    No verified reviews published yet
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {reviewsNote}
                  </p>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    If you have travelled with us and would like to share
                    feedback, contact us. We will ask for your permission before
                    publishing anything, and we will not edit a quote to change
                    its meaning.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <ButtonLink href="/contact" variant="primary" size="md">
                      Share feedback
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink href="/about" variant="secondary" size="md">
                      How we work
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <Notice title="Why this page is empty">
                  Publishing fabricated names, quotes or star ratings would
                  mislead you and break the trust the rest of this site is built
                  on. Verified feedback will be added here when it exists.
                </Notice>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-base font-bold text-navy-950">
                        What we publish
                      </h2>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        <li>Feedback from a customer we can identify.</li>
                        <li>Permission to publish the comment.</li>
                        <li>
                          The source or context of the feedback, where relevant.
                        </li>
                        <li>
                          A genuine date, shown alongside the comment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <Star
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-base font-bold text-navy-950">
                        What we do not publish
                      </h2>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        <li>Invented reviews or customer names.</li>
                        <li>Unverified star ratings or review counts.</li>
                        <li>Quotes edited to change their meaning.</li>
                        <li>
                          A review link or embed before an official profile is
                          confirmed.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-5 text-slate-500">
                  Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    privacy policy
                  </Link>{" "}
                  for how feedback and inquiry information are handled.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Before you book"
            title="A clear process is better than a perfect score."
            description="We do not use ratings to imply a guarantee. What we can offer is a clear inquiry process, honest availability and a written quotation before you commit."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                title: "Ask",
                text: "Send your dates, route, passengers and luggage. We check what can realistically be arranged.",
              },
              {
                title: "Confirm",
                text: "You receive a written quotation with the vehicle category, inclusions and exclusions.",
              },
              {
                title: "Travel",
                text: "Once confirmed, we share the driver and pickup details. Changes are handled as openly as possible.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-card"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us how the journey went."
        description="If you have travelled with us, we welcome honest feedback. If you are planning a trip, send your questions and we will answer them clearly."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
    </>
  );
}
