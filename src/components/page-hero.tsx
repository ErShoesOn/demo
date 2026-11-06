import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(194,146,53,0.18),transparent_42%)]"
      />
      <div aria-hidden="true" className="pattern-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} tone="dark" />
        <div
          className={`mt-8 grid gap-10 ${
            image ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""
          }`}
        >
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-balance text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-navy-100/85">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
            {children}
          </div>
          {image ? (
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
                />
              </div>
              {image.caption ? (
                <figcaption className="mt-3 text-[11px] leading-5 text-navy-300">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
