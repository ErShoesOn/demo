import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { InquiryForm } from "@/components/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/services";
import {
  emailHref,
  hasPublicContactDetails,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "@/data/site";
import { vehicleCategories } from "@/data/vehicles";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Majestic Rentals",
  description:
    "Send a rental inquiry to Majestic Rentals. Share your dates, pickup point, destination, passengers and luggage, and our team will confirm availability and a quotation.",
  path: "/contact",
});

const serviceOptions = [
  ...services.map((service) => ({
    value: service.name,
    label: service.navLabel,
  })),
  { value: "Custom tour package", label: "Custom tour package" },
  { value: "Other / not sure", label: "Other / not sure" },
];

const vehicleOptions = vehicleCategories.map((category) => ({
  value: category.name,
  label: category.name,
}));

export default function ContactPage() {
  const phone = phoneHref();
  const whatsapp = whatsappHref();
  const email = emailHref();

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Majestic Rentals",
    url: absoluteUrl("/contact"),
    description:
      "Inquiry form and contact information for Majestic Rentals, a chauffeur-driven car rental service based in Kathmandu, Nepal.",
    about: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you need to go."
        description="Send your dates, pickup point, destination, passengers and luggage. We will check availability and reply with a clear written quotation. A submitted inquiry is a request, not a confirmed booking."
        crumbs={[{ label: "Contact" }]}
        actions={
          <>
            <ButtonLink href="#inquiry" variant="gold" size="lg">
              Send an inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            {whatsapp ? (
              <ButtonLink href={whatsapp} variant="light" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            ) : null}
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Inquiry form"
                title="Send the details. We will check availability."
                description="The more context you share, the more useful our reply can be. If your plans are still flexible, tell us what you know and we will suggest a realistic option."
              />
              <div className="mt-8 rounded-3xl border border-navy-100 bg-white p-5 shadow-card sm:p-8">
                <InquiryForm
                  serviceOptions={serviceOptions}
                  vehicleOptions={vehicleOptions}
                />
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6 sm:p-7">
                <h2 className="text-lg font-bold text-navy-950">
                  Speak to our team
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Direct contact details are published when they are verified.
                  You can also use the inquiry form for any question.
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  {phone ? (
                    <a
                      href={phone}
                      className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 font-semibold text-navy-950 transition-colors hover:border-navy-950"
                    >
                      <Phone
                        className="h-4 w-4 text-gold-700"
                        aria-hidden="true"
                      />
                      {siteConfig.contact.phone}
                    </a>
                  ) : null}
                  {whatsapp ? (
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 font-semibold text-navy-950 transition-colors hover:border-navy-950"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-gold-700"
                        aria-hidden="true"
                      />
                      WhatsApp inquiry
                    </a>
                  ) : null}
                  {email ? (
                    <a
                      href={email}
                      className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 font-semibold text-navy-950 transition-colors hover:border-navy-950"
                    >
                      <Mail
                        className="h-4 w-4 text-gold-700"
                        aria-hidden="true"
                      />
                      {siteConfig.contact.email}
                    </a>
                  ) : null}
                  <div className="flex items-start gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-navy-950">
                        {siteConfig.contact.address || siteConfig.hub}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">
                        {siteConfig.contact.address
                          ? "Verified business address"
                          : "Service hub. Full address will be published when verified."}
                      </p>
                    </div>
                  </div>
                  {siteConfig.contact.hours ? (
                    <div className="flex items-start gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-navy-950">Hours</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">
                          {siteConfig.contact.hours}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>

                {!hasPublicContactDetails() ? (
                  <div className="mt-5">
                    <Notice title="Contact details being verified">
                      The phone, WhatsApp, email and full address are not
                      published yet. The inquiry form is available now; direct
                      contact links will appear here once verified.
                    </Notice>
                  </div>
                ) : null}

                {siteConfig.contact.mapsUrl ? (
                  <a
                    href={siteConfig.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    Open location in Google Maps
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-7">
                <h2 className="text-lg font-bold text-navy-950">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-4">
                  {[
                    "We review your dates, route, passenger count and luggage.",
                    "We reply with availability, a recommended vehicle category and a written quotation.",
                    "Your journey is confirmed only after you accept the quotation and we confirm the arrangement in writing.",
                  ].map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-navy-100 pt-4 text-xs leading-5 text-slate-500">
                  Submitting the form does not reserve a vehicle, driver or
                  price. Please do not send payment until you have an accepted
                  quotation and written confirmation.
                </p>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-7">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-sm font-bold text-navy-950">
                      Your information
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      We collect only the details needed to respond to your
                      inquiry. Read our{" "}
                      <Link
                        href="/privacy-policy"
                        className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-2"
                      >
                        privacy policy
                      </Link>{" "}
                      for how information is handled.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
