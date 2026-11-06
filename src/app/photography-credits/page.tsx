import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Notice } from "@/components/notice";
import { PageHero } from "@/components/page-hero";
import { imageCredits } from "@/data/credits";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Photography Credits",
  description:
    "Attribution for the illustrative photographs used on the Majestic Rentals website, including Wikimedia Commons authors and licences.",
  path: "/photography-credits",
});

export default function PhotographyCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photography credits."
        description="The travel photographs on this website are illustrative images of Nepal, not photographs of our fleet. Each image is credited to its author and licence below."
        crumbs={[{ label: "Photography Credits" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Notice title="Illustrative photography">
            These images help show the destinations and travel context. They do
            not represent a specific vehicle, driver or Majestic Rentals
            inventory. When owner-supplied fleet photography is available, it
            should replace these images and this credits list should be updated.
          </Notice>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {imageCredits.map((credit) => (
              <article
                key={credit.file}
                className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card"
              >
                <div className="relative aspect-[16/10] bg-navy-100">
                  <Image
                    src={credit.file}
                    alt={credit.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-navy-900 backdrop-blur-sm">
                    <Camera className="h-3 w-3" aria-hidden="true" />
                    {credit.license}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-sm font-bold leading-6 text-navy-950">
                    {credit.title}
                  </h2>
                  <dl className="mt-3 space-y-2 text-xs text-slate-600">
                    <div>
                      <dt className="font-bold uppercase tracking-[0.12em] text-navy-500">
                        Author
                      </dt>
                      <dd className="mt-0.5">{credit.author}</dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-[0.12em] text-navy-500">
                        File
                      </dt>
                      <dd className="mt-0.5 break-all">{credit.file}</dd>
                    </div>
                  </dl>
                  <a
                    href={credit.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
                  >
                    View source
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50/70 p-6">
            <h2 className="text-base font-bold text-navy-950">
              Licences and reuse
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Images sourced from Wikimedia Commons are used under the licence
              stated on each card. CC BY and CC BY-SA licences require
              attribution; derivative images must follow the applicable
              share-alike terms where they apply. The social sharing image is a
              branded composition derived from a CC BY-SA photograph and is
              credited accordingly.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If you believe an image has been credited incorrectly, please{" "}
              <Link
                href="/contact"
                className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
              >
                contact us
              </Link>{" "}
              with the file name and the correction needed.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for a vehicle, not a photograph?"
        description="Browse the vehicle categories or send an inquiry with your dates, route and group size."
        primaryLabel="Send an inquiry"
        primaryHref="/contact#inquiry"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Photography Credits", path: "/photography-credits" },
        ])}
      />
    </>
  );
}
