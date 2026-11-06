import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import {
  ArticleCard,
  DestinationCard,
  PackageCard,
  ServiceCard,
  VehicleCard,
} from "@/components/cards";
import { CheckList } from "@/components/check-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/data/blog";
import { destinations } from "@/data/destinations";
import { homepageFaqs } from "@/data/faqs";
import { tourPackages } from "@/data/packages";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { vehicleCategories } from "@/data/vehicles";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Majestic Rentals | Chauffeur-Driven Car Rentals in Nepal",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Chauffeur-driven only",
    text: "Every vehicle is arranged with a driver. We do not offer self-drive rentals.",
  },
  {
    icon: FileText,
    title: "A written quotation",
    text: "You receive the route, vehicle category, inclusions and price before anything is confirmed.",
  },
  {
    icon: MapPin,
    title: "Kathmandu and beyond",
    text: "City travel, airport transfers and selected intercity journeys across Nepal on request.",
  },
];

const latestArticles = [...articles]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 3);

const steps = [
  {
    number: "01",
    title: "Send the details",
    text: "Share your dates, pickup point, destination, passengers and luggage. If plans are still forming, tell us what you know.",
  },
  {
    number: "02",
    title: "We check availability",
    text: "Our team reviews the route and vehicle options for your dates. We tell you honestly if something is not practical.",
  },
  {
    number: "03",
    title: "Receive a quotation",
    text: "You get a written quotation with the vehicle category, inclusions and any conditions that apply.",
  },
  {
    number: "04",
    title: "Confirm in writing",
    text: "Your journey is confirmed only after you accept the quotation and we confirm the arrangement with you.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/hero-road.jpg"
          alt="A highway winding through green hills in Nepal"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40"
        />
        <div
          aria-hidden="true"
          className="pattern-grid absolute inset-0 opacity-40"
        />

        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-end px-5 pb-12 pt-20 sm:px-8 sm:pb-16 lg:min-h-[43rem] lg:justify-center lg:pb-20">
          <div className="max-w-3xl animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-200 backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold-300"
                aria-hidden="true"
              />
              Kathmandu · Nationwide Nepal on request
            </p>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Premium car rental in Nepal, with a professional chauffeur.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-navy-100/85 sm:text-lg sm:leading-8">
              Private vehicles for airport transfers, city travel, business
              itineraries and journeys across Nepal. Tell us the plan; we confirm
              the vehicle, the route and a clear written quotation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="/contact#inquiry"
                variant="gold"
                size="lg"
                className="animate-rise-delay"
              >
                Book Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact#inquiry"
                variant="light"
                size="lg"
                className="animate-rise-delay"
              >
                Get a Quote
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-navy-200">
              Inquiry only. A request is not a confirmed booking; availability
              and the final price are confirmed by our team.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-navy-950/55 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {[
              ["Chauffeur included", "No self-drive option"],
              ["Clear quotations", "Inclusions stated in writing"],
              ["Nationwide on request", "Kathmandu-based team"],
            ].map(([title, text]) => (
              <div key={title} className="px-5 py-4">
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="mt-1 text-xs text-navy-200">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-5 text-navy-300">
            Illustrative photograph: Prithvi Highway, Nepal — not a fleet
            vehicle.{" "}
            <Link
              href="/photography-credits"
              className="underline decoration-white/30 underline-offset-2 hover:text-white"
            >
              Photography credit
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="A considered way to travel"
                title="Private transport, planned around your journey."
                description="Majestic Rentals arranges premium chauffeur-driven vehicles for travellers who want a calm, reliable way to move through Nepal. We keep the process simple: you share the plan, we check what is genuinely available and you receive a clear quotation."
              />
              <div className="mt-9 grid gap-5 sm:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-navy-100 bg-white p-5"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="mt-4 text-sm font-bold text-navy-950">
                        {pillar.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {pillar.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="rounded-3xl border border-navy-100 bg-navy-50/70 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
                At a glance
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Base", siteConfig.hub],
                  ["Service model", "Chauffeur-driven rentals only"],
                  ["Booking", "Inquiry-led; availability confirmed first"],
                  ["Fleet", "Vehicle categories confirmed per request"],
                  ["Coverage", "Kathmandu and nationwide Nepal on request"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-0.5 border-b border-navy-200/70 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">
                      {label}
                    </dt>
                    <dd className="font-semibold text-navy-950">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-navy-950"
              >
                How we work
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="One team for the journeys that matter."
              description="From a single airport pickup to a multi-day itinerary, every service is arranged around the same principle: a private vehicle, a professional driver and a clear quotation."
            />
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              All services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our fleet"
              title="Vehicle categories, confirmed for your dates."
              description="We publish categories rather than a live inventory. The exact make, model and condition are confirmed with your quotation, based on your route, passengers and luggage."
            />
            <Link
              href="/fleet"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              Explore the fleet
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleCategories.map((category) => (
              <VehicleCard key={category.slug} category={category} />
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-500">
            Vehicle illustrations are category descriptions, not photographs of
            a confirmed fleet. We do not guarantee a specific model until
            availability is confirmed in writing.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Destinations"
              title="Where would you like to go?"
              description="Practical destination notes for travellers heading beyond Kathmandu, with the transport questions worth settling before you confirm a route."
            />
            <Link
              href="/destinations"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              All destinations
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-200">
            <Link
              href="/routes"
              className="inline-flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-200"
            >
              Read the route guides
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <span className="text-xs text-navy-300">
              Destination information is general guidance. Conditions can change.
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="How it works"
              title="From inquiry to confirmed journey."
              description="No instant checkout and no surprise confirmation. We keep each step explicit so you know exactly what has been agreed."
            />
            <ol className="grid gap-5 sm:grid-cols-2">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-2xl border border-navy-100 bg-white p-5"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-gold-700">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Tour packages"
              title="Start with a route. We will shape the detail."
              description="Indicative itineraries for travellers who want a starting point. Each one is adapted to your dates, pace and interests before it becomes a quotation."
            />
            <Link
              href="/tour-packages"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              All tour packages
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map((tourPackage) => (
              <PackageCard
                key={tourPackage.slug}
                tourPackage={tourPackage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our approach"
                title="Premium, without the invented claims."
                description="A polished website is not a substitute for a clear promise. We keep the claims modest, the process transparent and the decisions with you."
              />
              <CheckList
                className="mt-8"
                items={[
                  "Chauffeur-driven only — we do not offer self-drive rentals.",
                  "Vehicle categories, not a pretend live inventory.",
                  "Written quotations before any booking is confirmed.",
                  "Verified reviews only. We do not invent testimonials or ratings.",
                ]}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="secondary" size="md">
                  About Majestic Rentals
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/reviews" variant="ghost" size="md">
                  Read our review policy
                </ButtonLink>
              </div>
            </div>

            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy-100 shadow-soft">
                <Image
                  src="/images/boudhanath-stupa.jpg"
                  alt="Boudhanath Stupa in Kathmandu"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-3 text-[11px] leading-5 text-slate-500">
                Boudhanath Stupa, Kathmandu. Photo: Nabin K. Sapkota, CC BY-SA
                4.0, via Wikimedia Commons. Illustrative travel photography.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Travel guides"
              title="Useful reading before you commit to a route."
              description="Practical guidance on vehicles, airport arrivals, road journeys and EV travel in Nepal. Written for planning, with sources where conditions can change."
            />
            <Link
              href="/travel-guides"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              All travel guides
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Questions"
                title="The answers that matter before you inquire."
                description="A few common questions about availability, chauffeurs, quotations and how a request becomes a booking."
              />
              <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                <p className="text-sm font-bold text-navy-950">
                  Still unsure what to ask for?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Send the dates you have, even if the rest is flexible. We will
                  help you work out a realistic route and vehicle category.
                </p>
                <Link
                  href="/contact#inquiry"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-navy-950"
                >
                  Ask our team
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <Link
                href="/faqs"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-950"
              >
                <CheckCircle2 className="h-4 w-4 text-gold-700" aria-hidden="true" />
                Read all FAQs
              </Link>
            </div>
            <FaqList items={homepageFaqs} />
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqSchema(homepageFaqs)} />
    </>
  );
}
