import type { Metadata } from "next";
import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  emailHref,
  hasPublicContactDetails,
  phoneHref,
  siteConfig,
} from "@/data/site";
import {
  breadcrumbSchema,
  howToSchema,
} from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const GITHUB_REPO = "https://github.com/ErShoesOn/demo";

function buildGitHubIssueUrl(inquiry: {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  travelDate?: string;
  passengers?: string;
  pickup?: string;
  destination?: string;
  message?: string;
}): string {
  const title = encodeURIComponent(
    `Rental Inquiry: ${inquiry.service || "Chauffeur-Driven Car Rental"} — ${
      inquiry.pickup || ""} to ${inquiry.destination || ""}`
  );

  const bodyParts: string[] = [];
  bodyParts.push("## New Rental Inquiry — Majestic Rentals");
  bodyParts.push("");
  if (inquiry.name) bodyParts.push(`**Name:** ${inquiry.name}`);
  if (inquiry.phone) bodyParts.push(`**Phone/WhatsApp:** ${inquiry.phone}`);
  if (inquiry.email) bodyParts.push(`**Email:** ${inquiry.email}`);
  if (inquiry.service) bodyParts.push(`**Service:** ${inquiry.service}`);
  if (inquiry.travelDate) bodyParts.push(`**Travel Date:** ${inquiry.travelDate}`);
  if (inquiry.passengers) bodyParts.push(`**Passengers:** ${inquiry.passengers}`);
  if (inquiry.pickup) bodyParts.push(`**Pickup:** ${inquiry.pickup}`);
  if (inquiry.destination) bodyParts.push(`**Destination:** ${inquiry.destination}`);
  if (inquiry.message) bodyParts.push(`**Message:**\n${inquiry.message}`);
  bodyParts.push("");
  bodyParts.push("---");
  bodyParts.push("Please check availability and send a written quotation.");

  const body = encodeURIComponent(bodyParts.join("\n"));

  return `${GITHUB_REPO}/issues/new?title=${title}&body=${body}`;
}

export const metadata: Metadata = pageMetadata({
  title: "Contact Majestic Rentals",
  description:
    "Contact Majestic Rentals for chauffeur-driven car rentals in Nepal. Send an inquiry via GitHub, call, or email for availability and a written quotation.",
  path: "/contact",
});

export default function ContactPage() {
  const phone = phoneHref();
  const email = emailHref();

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Majestic Rentals",
    url: absoluteUrl("/contact"),
    description:
      "Contact information for Majestic Rentals, a chauffeur-driven car rental service based in Kathmandu, Nepal.",
    about: { "@id": `${siteConfig.url}/#organization` },
  };

  const githubIssueUrl = buildGitHubIssueUrl({});

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you need to go."
        description="Send an inquiry via GitHub, call, or email. Share your dates, pickup point, destination, passengers and luggage, and we will confirm availability and a written quotation."
        crumbs={[{ label: "Contact" }]}
        actions={
          <>
            <ButtonLink
              href={githubIssueUrl}
              variant="gold"
              size="lg"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Send Inquiry on GitHub
            </ButtonLink>
            {phone ? (
              <ButtonLink href={phone} variant="light" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
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
                eyebrow="Send Inquiry"
                title="Send your inquiry on GitHub."
                description="Tap the button below to open a new GitHub issue with your rental inquiry details. We will check availability and reply with a written quotation."
              />
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href={githubIssueUrl}
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  Open New Inquiry Issue
                </ButtonLink>
                <p className="text-xs leading-5 text-slate-500">
                  The issue template is pre-filled with inquiry fields. Add your
                  travel dates, pickup point, destination, passenger count and
                  luggage, then submit.
                </p>
              </div>

              <div className="mt-12 rounded-3xl border border-navy-100 bg-white p-5 shadow-card sm:p-8">
                <SectionHeading
                  eyebrow="What to share"
                  title="Details that help us reply faster."
                  description=""
                  align="left"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Travel date(s)",
                    "Pickup location (hotel, home, airport)",
                    "Destination",
                    "Number of passengers",
                    "Luggage count and sizes",
                    "Any special requirements",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                    >
                      <span className="shrink-0 text-gold-700">
                        {index + 1}.
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6 sm:p-7">
                <h2 className="text-lg font-bold text-navy-950">
                  Contact our team
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Direct contact details are published when they are verified.
                  GitHub inquiry is available now.
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
                  <a
                    href={githubIssueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 font-semibold text-navy-950 transition-colors hover:border-navy-950"
                  >
                    <ArrowRight
                      className="h-4 w-4 text-gold-700"
                      aria-hidden="true"
                    />
                    Send Inquiry on GitHub
                  </a>
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
                      The phone, email and full address are not published yet.
                      GitHub inquiry is available now; direct contact links will
                      appear here once verified.
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
                    "Send us your dates, route and group details via GitHub issue.",
                    "We check vehicle and driver availability for your route.",
                    "You receive a written quotation with the vehicle category, inclusions and price.",
                    "Confirm in writing, and your journey is arranged.",
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
                  A message is a request, not a confirmed booking. Availability
                  and terms are confirmed in writing before anything is
                  finalised.
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
                      Chauffeur-driven only
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      Every Majestic Rentals vehicle is provided with a driver.
                      We do not offer self-drive rentals.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Quick answers"
            title="Common questions about renting a car in Nepal."
            description="Direct answers to the questions travellers ask most often."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-5">
              <h3 className="text-sm font-bold text-navy-950">
                Is a driver always included?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yes. Majestic Rentals is chauffeur-driven only. We do not offer
                self-drive rentals.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-5">
              <h3 className="text-sm font-bold text-navy-950">
                How is the price decided?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We provide a written quotation based on vehicle category, route,
                duration and waiting time. The price is confirmed before your
                trip.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-5">
              <h3 className="text-sm font-bold text-navy-950">
                Is a message a confirmed booking?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No. Submitting an inquiry starts the process. Availability and
                terms are confirmed in writing before anything is finalised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={[contactPageSchema, howToSchema({
          name: "How to contact Majestic Rentals",
          description:
            "Send an inquiry via GitHub, call, or email to check availability and receive a written quotation.",
          steps: [
            {
              title: "Open a GitHub issue",
              text:
                "Click 'Send Inquiry on GitHub' to open a new issue with your travel dates, pickup point, destination and group details pre-filled.",
            },
            {
              title: "We check availability",
              text:
                "Our team reviews your route and vehicle options for your dates and confirms what can be arranged.",
            },
            {
              title: "Receive a quotation",
              text:
                "You get a written quotation with the vehicle category, inclusions and price before anything is confirmed.",
            },
            {
              title: "Confirm your journey",
              text:
                "Accept the quotation in writing and we confirm the arrangement with you.",
            },
          ],
        }), breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])]}
      />
    </>
  );
}
