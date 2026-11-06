import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  emailHref,
  hasPublicContactDetails,
  phoneHref,
  serviceAreas,
  siteConfig,
  whatsappHref,
} from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Majestic Rentals",
  description:
    "Majestic Rentals is a Kathmandu-based chauffeur-driven car rental service for city travel, airport transfers and journeys across Nepal. Learn how we work.",
  path: "/about",
});

const values = [
  {
    icon: Compass,
    title: "Clarity over assumption",
    text: "We confirm the route, vehicle category and inclusions in writing. If something is unclear, we would rather explain it before you commit.",
  },
  {
    icon: Heart,
    title: "Care for the journey",
    text: "A good transfer is about more than the vehicle. We ask about luggage, timing, accessibility and the parts of the day that matter to you.",
  },
  {
    icon: ShieldCheck,
    title: "Honest availability",
    text: "We do not pretend every vehicle is available everywhere. We check your dates and tell you what can genuinely be arranged.",
  },
  {
    icon: MapPin,
    title: "Local context",
    text: "Kathmandu is our base. We plan around real traffic, road conditions and the seasonal realities of travelling in Nepal.",
  },
];

export default function AboutPage() {
  const phone = phoneHref();
  const whatsapp = whatsappHref();
  const email = emailHref();

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A calmer way to move through Nepal."
        description="Majestic Rentals arranges premium chauffeur-driven vehicles for travellers who value a clear plan, a professional driver and honest communication. We are based in Kathmandu and accept requests across Nepal."
        crumbs={[{ label: "About" }]}
        actions={
          <>
            <ButtonLink href="/contact#inquiry" variant="gold" size="lg">
              Start an inquiry
            </ButtonLink>
            <ButtonLink href="/fleet" variant="light" size="lg">
              View vehicle categories
            </ButtonLink>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Why we exist"
                title="Transport should make the day easier."
                description="Nepal rewards travellers who have a little local context. The right driver can turn an unfamiliar road, a tight connection or a full day of meetings into something manageable. That is the service we set out to provide."
              />
              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Majestic Rentals is a chauffeur-driven rental service, not a
                  self-drive platform. We arrange private vehicles with drivers
                  for airport transfers, city itineraries, business travel,
                  weddings and events, and selected intercity journeys.
                </p>
                <p>
                  We publish vehicle categories rather than a live inventory.
                  That is deliberate. A website cannot honestly promise a
                  specific make or model on a specific date without checking.
                  Instead, we ask about your passengers, luggage and route, then
                  confirm a suitable vehicle with your quotation.
                </p>
                <p>
                  The same principle applies to pricing and reviews. You receive
                  a written quotation before anything is confirmed, and we
                  publish customer feedback only when it can be verified and we
                  have permission to share it.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy-950">
                What we are — and what we are not
              </h2>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                  What we do
                </p>
                <CheckList
                  className="mt-3"
                  items={[
                    "Chauffeur-driven private vehicle rentals",
                    "Airport transfers and intercity journeys",
                    "Corporate, wedding and event transport",
                    "Optional customised tour itineraries",
                  ]}
                />
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  What we do not do
                </p>
                <CheckList
                  className="mt-3"
                  variant="info"
                  items={[
                    "Self-drive rentals",
                    "Instant online booking or payment",
                    "Claims of a live fleet inventory",
                    "Invented reviews, ratings or business facts",
                  ]}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Four values that shape every inquiry."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Service area"
                title="Kathmandu is home. Nepal is the wider brief."
                description="We accept requests beyond the Kathmandu Valley when the route can be planned responsibly. Service on a specific route is confirmed for your dates; we do not claim that every vehicle is available everywhere."
              />
              <ul className="mt-7 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Read our{" "}
                <Link
                  href="/destinations"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  destination guides
                </Link>{" "}
                and{" "}
                <Link
                  href="/routes"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  route guides
                </Link>{" "}
                for practical planning notes.
              </p>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-bold text-navy-950">
                Business details
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="border-b border-navy-100 pb-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                    Business name
                  </dt>
                  <dd className="mt-1 font-semibold text-navy-950">
                    {siteConfig.legalName}
                  </dd>
                </div>
                <div className="border-b border-navy-100 pb-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                    Base
                  </dt>
                  <dd className="mt-1 font-semibold text-navy-950">
                    {siteConfig.hub}
                  </dd>
                </div>
                {siteConfig.contact.address ? (
                  <div className="border-b border-navy-100 pb-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                      Address
                    </dt>
                    <dd className="mt-1 font-semibold text-navy-950">
                      {siteConfig.contact.address}
                    </dd>
                  </div>
                ) : null}
                {siteConfig.contact.hours ? (
                  <div className="border-b border-navy-100 pb-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                      Hours
                    </dt>
                    <dd className="mt-1 font-semibold text-navy-950">
                      {siteConfig.contact.hours}
                    </dd>
                  </div>
                ) : null}
                {phone || email || whatsapp ? (
                  <div className="border-b border-navy-100 pb-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                      Contact
                    </dt>
                    <dd className="mt-2 flex flex-col gap-2">
                      {phone ? (
                        <a
                          href={phone}
                          className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      ) : null}
                      {email ? (
                        <a
                          href={email}
                          className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                        >
                          {siteConfig.contact.email}
                        </a>
                      ) : null}
                      {whatsapp ? (
                        <a
                          href={whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                        >
                          WhatsApp
                        </a>
                      ) : null}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {!hasPublicContactDetails() ? (
                <div className="mt-5">
                  <Notice title="Still being verified">
                    Registered address, company registration details and direct
                    contact information will be published once they are
                    confirmed. Until then, please use the inquiry form.
                  </Notice>
                </div>
              ) : null}

              <ButtonLink
                href="/contact"
                variant="primary"
                size="md"
                className="mt-6 w-full"
              >
                Go to contact page
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what the journey needs to do."
        description="A transfer, a full day in the city, a business schedule or a multi-day route. Share what you know and we will help shape the rest."
        primaryLabel="Send an inquiry"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
