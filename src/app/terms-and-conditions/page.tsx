import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Draft terms for Majestic Rentals inquiries and chauffeur-driven rentals, covering quotations, bookings, vehicle categories, changes and liability. Pending legal review.",
  path: "/terms-and-conditions",
});

const lastUpdated = "6 November 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="How inquiries, quotations and chauffeur-driven rentals are intended to work. These terms are a draft and are marked for legal review before the site is treated as launch-ready."
        crumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Notice title="Draft pending legal and business review">
            These terms describe the intended process for this website. Payment,
            cancellation and liability positions must be confirmed by the owner
            and reviewed by a qualified legal adviser before launch. They should
            not be treated as a final contract. Last updated: {lastUpdated}.
          </Notice>

          <div className="mt-10 space-y-10 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-navy-950">
                1. About these terms
              </h2>
              <p className="mt-3">
                These terms apply to your use of the Majestic Rentals website and
                to inquiries you send through it. A confirmed rental may also be
                governed by the written quotation, confirmation message and any
                service-specific terms provided for that journey.
              </p>
              <p className="mt-3">
                If these terms conflict with a written quotation or confirmation
                for a specific journey, the more specific document applies to
                that journey.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                2. What we provide
              </h2>
              <p className="mt-3">
                Majestic Rentals provides chauffeur-driven private vehicle
                rentals. Every rental includes a driver. We do not offer
                self-drive rentals, and we do not provide vehicles for a customer
                to drive themselves.
              </p>
              <p className="mt-3">
                We accept requests for airport transfers, city travel, corporate
                transport, weddings and events, and selected intercity journeys
                in Nepal. Availability is confirmed for your dates; a service
                described on this website is not a guarantee that a particular
                vehicle or route is available on every date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                3. Inquiries are not bookings
              </h2>
              <p className="mt-3">
                Sending the inquiry form or contacting us starts a conversation.
                It does not reserve a vehicle, driver or price, and it does not
                create a binding rental agreement.
              </p>
              <p className="mt-3">
                A booking is confirmed only when we have checked availability,
                sent you a written quotation, you have accepted it, and we have
                confirmed the arrangement in writing. Any deposit or payment
                request will be explained in that process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                4. Quotations and pricing
              </h2>
              <p className="mt-3">
                A quotation sets out the vehicle category, route, dates and the
                inclusions and exclusions that apply. Fuel, driver allowance,
                waiting time, overnight arrangements, taxes and any additional
                charges should be stated where relevant.
              </p>
              <p className="mt-3">
                We do not publish fixed prices on this website because the cost
                depends on the vehicle, dates, duration, distance, waiting time
                and route. A quotation is prepared for the requirements you
                provide. Changes to the route, dates, passenger count, luggage or
                duration may change the price.
              </p>
              <p className="mt-3">
                Monument tickets, park permits, guides, safari activities,
                hotels, meals, flights and personal expenses are separate unless
                the quotation says otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                5. Payment, changes and cancellation
              </h2>
              <p className="mt-3">
                Payment methods, deposit requirements, change terms and
                cancellation terms are confirmed in writing with your quotation.
                Formal payment and cancellation policies are not yet published in
                these draft terms. Do not send payment until you have an accepted
                quotation and written confirmation from our team.
              </p>
              <p className="mt-3">
                If you need to change a confirmed itinerary, contact us as early
                as possible. Changes may be possible subject to availability and
                any costs already incurred. Additional distance, time or stops
                may change the final charge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                6. Vehicles and categories
              </h2>
              <p className="mt-3">
                Vehicle category pages describe typical capacity and features.
                They are not a live inventory, and we do not guarantee a specific
                make, model, colour, year or registration number unless the
                written confirmation says so.
              </p>
              <p className="mt-3">
                If a confirmed vehicle becomes unavailable, we may propose a
                comparable category. We will explain the change and its effect,
                if any, before the journey.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                7. Passengers, luggage and driver instructions
              </h2>
              <p className="mt-3">
                You must provide an accurate passenger and luggage count. A
                vehicle cannot safely carry more passengers than its permitted
                capacity, and luggage space may be limited even when the
                passenger count is within the limit. We may decline a journey if
                the load is unsafe or materially different from what was
                confirmed.
              </p>
              <p className="mt-3">
                Child seats, English-speaking drivers and accessibility
                requirements can be requested in advance, subject to
                availability. Tell us before confirmation so we can explain what
                can genuinely be arranged.
              </p>
              <p className="mt-3">
                Passengers must follow the driver&apos;s reasonable safety
                instructions, wear seat belts where fitted, and not ask the driver
                to break traffic law or drive unsafely. Illegal conduct, damage or
                behaviour that endangers the driver or others may result in the
                journey being stopped.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                8. Travel times, delays and conditions
              </h2>
              <p className="mt-3">
                Distances and journey times on this website are planning guides,
                not guarantees. Traffic, weather, road works, festivals,
                landslides, strikes, vehicle breakdowns and other circumstances
                can change a journey.
              </p>
              <p className="mt-3">
                We plan realistically and will communicate material changes, but
                we are not responsible for a missed flight, appointment or event
                caused by conditions outside our reasonable control. If you have a
                fixed commitment, tell us so we can discuss a sensible buffer or
                an alternative plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                9. Third-party services
              </h2>
              <p className="mt-3">
                Hotels, guides, permits, monument tickets, park activities,
                domestic flights and other third-party services are arranged
                separately unless a quotation says otherwise. Their terms,
                availability and safety arrangements are controlled by the
                relevant provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                10. Liability
              </h2>
              <p className="mt-3">
                Nothing in these terms is intended to exclude or limit liability
                that cannot lawfully be excluded or limited. To the extent
                permitted by law, we are responsible for our own services as
                described in the confirmed arrangement, and not for indirect or
                consequential losses arising from circumstances outside our
                reasonable control.
              </p>
              <p className="mt-3">
                The insurance position and any specific liability terms for a
                confirmed journey should be set out in the quotation or service
                documentation. This draft does not create insurance coverage or
                promise a particular level of cover.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                11. Website content and availability
              </h2>
              <p className="mt-3">
                We aim to keep the website accurate, but destination details,
                road conditions, opening hours, access rules and service
                descriptions can change. Guides are general information, not a
                guarantee of current conditions.
              </p>
              <p className="mt-3">
                The website may be unavailable temporarily for maintenance or
                hosting reasons. We do not guarantee uninterrupted access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                12. Photographs and illustrative content
              </h2>
              <p className="mt-3">
                Travel photographs on this website are illustrative unless a page
                says otherwise. They may show destinations and contexts rather
                than the specific vehicle you will receive. Photography
                attribution is listed on the{" "}
                <Link
                  href="/photography-credits"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  photography credits
                </Link>{" "}
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                13. Governing law
              </h2>
              <p className="mt-3">
                These terms are intended to be governed by the laws of Nepal, with
                disputes subject to the courts of Nepal. This position is part of
                the draft and should be confirmed during legal review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                14. Changes to these terms
              </h2>
              <p className="mt-3">
                We may update these terms as the business details and policies are
                confirmed. The last updated date at the top of the page will
                change when a substantive revision is made. The terms that apply
                to a confirmed booking are the ones provided with that booking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                15. Contact
              </h2>
              <p className="mt-3">
                For a question about these terms, use the inquiry form on the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  contact page
                </Link>
                . Verified business details will be added once they are
                confirmed.
              </p>
              <div className="mt-5">
                <ButtonLink href="/contact" variant="secondary" size="md">
                  Go to contact page
                </ButtonLink>
              </div>
            </section>
          </div>

          <p className="mt-10 text-xs leading-5 text-slate-500">
            Related:{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Need the terms for a specific journey?"
        description="Ask us to include the applicable inclusions, payment and cancellation details in your written quotation."
        primaryLabel="Request a quotation"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions" },
        ])}
      />
    </>
  );
}
