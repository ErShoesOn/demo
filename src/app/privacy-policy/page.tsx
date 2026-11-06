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
  title: "Privacy Policy",
  description:
    "How Majestic Rentals handles inquiry information, technical logs, cookies and third-party services. This policy is pending legal review before publication.",
  path: "/privacy-policy",
});

const lastUpdated = "6 November 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="What information this website collects, why it is collected and how it is handled. This policy is a draft and is marked for legal review before the site is treated as launch-ready."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Notice title="Draft pending legal review">
            This policy describes the website as currently built. It has not been
            reviewed by a qualified legal adviser. The owner should have it
            reviewed and update it before collecting inquiries in production.
            Last updated: {lastUpdated}.
          </Notice>

          <div className="mt-10 space-y-10 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-navy-950">
                1. Who we are
              </h2>
              <p className="mt-3">
                Majestic Rentals is a chauffeur-driven car rental service based
                in Kathmandu, Nepal. In this policy, “we”, “us” and “our” refer
                to Majestic Rentals. “You” refers to a visitor to this website or
                someone who sends an inquiry.
              </p>
              <p className="mt-3">
                Our verified business address, registration details and direct
                contact details are not yet published. Until they are confirmed,
                the inquiry form is the intended contact route. See the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  contact page
                </Link>{" "}
                for the current options.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                2. Information you provide
              </h2>
              <p className="mt-3">
                The inquiry form asks for the information needed to respond to a
                transport request. Depending on the form version you use, this
                may include:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Your name.</li>
                <li>Your phone or WhatsApp number.</li>
                <li>Your email address, if you choose to provide it.</li>
                <li>
                  Pickup location, destination, travel date and preferred
                  pickup time.
                </li>
                <li>
                  Passenger count, vehicle preference and the service you need.
                </li>
                <li>Any additional requirements you choose to describe.</li>
                <li>Your consent to be contacted about the inquiry.</li>
              </ul>
              <p className="mt-3">
                Please do not include sensitive information that is not needed
                for your journey. For example, you do not need to send passport
                or payment details through the inquiry form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                3. Information collected automatically
              </h2>
              <p className="mt-3">
                Like most websites, the hosting infrastructure may record
                technical information such as your IP address, browser type,
                requested page and the time of the request. This is used for
                security, reliability and basic operational diagnostics.
              </p>
              <p className="mt-3">
                The inquiry form uses a simple in-memory rate limiter to reduce
                spam and abuse. It uses a network identifier for a short period
                and does not create a customer profile. Serverless hosting may
                run multiple instances, so this limiter is not a permanent
                record.
              </p>
              <p className="mt-3">
                No analytics, advertising pixels or third-party tracking scripts
                are configured on this website at the time of this draft. If
                analytics are added later, this policy should be updated and any
                consent requirement addressed before activation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                4. Why we use your information
              </h2>
              <ul className="mt-3 space-y-2">
                <li>To respond to your inquiry and answer your questions.</li>
                <li>
                  To check availability and prepare a written quotation for the
                  transport you requested.
                </li>
                <li>
                  To coordinate a confirmed journey, including sharing relevant
                  details with the assigned driver.
                </li>
                <li>
                  To keep appropriate business records and resolve issues after
                  a journey.
                </li>
                <li>To protect the website and the inquiry form from abuse.</li>
              </ul>
              <p className="mt-3">
                We rely on your consent when you submit the form, and on the
                practical need to respond to a request you have made. If a
                confirmed booking creates additional obligations, those are set
                out in the quotation and terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                5. How inquiry information is delivered
              </h2>
              <p className="mt-3">
                The website validates the form on the server and sends the
                inquiry to a delivery endpoint only when one has been configured
                by the site owner. If no delivery endpoint is configured, the
                form does not claim that the inquiry was sent. Instead, it shows
                the details so you can copy them and contact us directly.
              </p>
              <p className="mt-3">
                The delivery endpoint may be a form service, an email automation
                service or another secure integration chosen by the owner. Those
                providers process the information on our behalf and have their
                own privacy terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                6. Sharing and disclosure
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share it with:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  The hosting and form-delivery providers needed to operate this
                  website and receive inquiries.
                </li>
                <li>
                  A driver or operational partner where sharing is necessary to
                  provide a confirmed journey.
                </li>
                <li>
                  A professional adviser, authority or court where disclosure is
                  required by law or necessary to protect legal rights.
                </li>
              </ul>
              <p className="mt-3">
                We aim to share only what is necessary for the relevant purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                7. Retention
              </h2>
              <p className="mt-3">
                Inquiry information should be kept only as long as needed to
                respond, plan a journey, maintain necessary business records and
                meet legal obligations. Retention periods are not yet formalised
                in this draft. The owner should set and document them before
                launch.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                8. Cookies and similar technologies
              </h2>
              <p className="mt-3">
                This website does not set advertising or analytics cookies at the
                time of this draft. Hosting or security infrastructure may use
                essential technical storage needed to serve the site and protect
                it from abuse. If non-essential cookies are introduced later,
                this policy and any required consent mechanism should be updated
                first.
              </p>
              <p className="mt-3">
                Fonts are bundled with the website build rather than loaded from
                a third-party font service at runtime. Images may be served from
                this website or its hosting provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                9. Security
              </h2>
              <p className="mt-3">
                The site uses HTTPS, server-side validation, spam controls and
                restricted access to inquiry delivery. No website or transmission
                method is completely secure, so please avoid sending unnecessary
                sensitive information through the form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                10. Your choices and rights
              </h2>
              <p className="mt-3">
                You may ask what information we hold about you, request a
                correction, withdraw consent to further contact, or ask for
                deletion where we do not need to keep the information for a
                legitimate record or legal reason. Use the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  contact page
                </Link>{" "}
                and describe your request. We may need to verify that the request
                relates to you before acting on it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                11. Children
              </h2>
              <p className="mt-3">
                This website is intended for adults arranging transport. It is
                not directed at children, and we do not knowingly collect
                personal information from children through the inquiry form.
                Children travelling with an adult should be included in the
                passenger count, but the inquiry should be sent by an adult.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                12. External links
              </h2>
              <p className="mt-3">
                Guides and destination pages may link to official or reference
                websites, including Wikimedia Commons for photography credits.
                Those websites have their own privacy practices, which we do not
                control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                13. Changes to this policy
              </h2>
              <p className="mt-3">
                This policy may be updated as the business details, delivery
                method and legal requirements are confirmed. The last updated
                date at the top of the page will change when a substantive
                revision is made.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-950">
                14. Contact
              </h2>
              <p className="mt-3">
                For a privacy question, use the inquiry form on the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  contact page
                </Link>{" "}
                and mark it as a privacy request. Verified phone, email and
                postal details will be added here once they have been confirmed.
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
              href="/terms-and-conditions"
              className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
            >
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Questions about your information?"
        description="Send a privacy request through the contact page. We will explain what we hold and what we can do with it."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
    </>
  );
}
