import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Luggage,
  MapPin,
  Users,
} from "lucide-react";
import type { Article } from "@/data/blog";
import { formatArticleDate } from "@/data/blog";
import type { Destination } from "@/data/destinations";
import type { TourPackage } from "@/data/packages";
import type { RouteGuide } from "@/data/routes";
import type { Service } from "@/data/services";
import type { VehicleCategory } from "@/data/vehicles";
import { ServiceIconMark, VehicleIconMark } from "@/components/icons";

const cardBase =
  "group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white shadow-card transition-colors hover:border-navy-300 focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`${cardBase} p-6`}>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900 transition-colors group-hover:bg-navy-100">
        <ServiceIconMark icon={service.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-navy-950">
        <Link
          href={`/services/${service.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
        Explore service
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}

export function VehicleCard({ category }: { category: VehicleCategory }) {
  return (
    <article className={`${cardBase} p-6`}>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-900 transition-colors group-hover:bg-navy-100">
          <VehicleIconMark icon={category.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-gold-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gold-700">
          Category
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-navy-950">
        <Link
          href={`/fleet/${category.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {category.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-semibold text-navy-700">
        {category.tagline}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{category.summary}</p>
      <dl className="mt-5 grid gap-2 border-t border-navy-100 pt-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <dt className="sr-only">Passengers</dt>
          <Users className="h-3.5 w-3.5 text-navy-500" aria-hidden="true" />
          <dd>{category.passengers}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Luggage</dt>
          <Luggage className="h-3.5 w-3.5 text-navy-500" aria-hidden="true" />
          <dd>{category.luggage}</dd>
        </div>
      </dl>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
        View category
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-colors hover:border-navy-300">
      <Link
        href={`/destinations/${destination.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
          <Image
            src={destination.image}
            alt={destination.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-navy-900 backdrop-blur-sm">
            {destination.region}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold tracking-[-0.01em] text-navy-950">
            {destination.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {destination.summary}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
            Explore destination
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function PackageCard({ tourPackage }: { tourPackage: TourPackage }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-colors hover:border-navy-300">
      <Link
        href={`/tour-packages/${tourPackage.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
          <Image
            src={tourPackage.image}
            alt={tourPackage.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-navy-900 backdrop-blur-sm">
            {tourPackage.duration}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-700">
            Indicative itinerary
          </p>
          <h3 className="mt-2 text-lg font-bold tracking-[-0.01em] text-navy-950">
            {tourPackage.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {tourPackage.summary}
          </p>
          <p className="mt-4 text-xs font-medium text-navy-700">
            {tourPackage.destinations.join(" · ")}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
            View itinerary
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-colors hover:border-navy-300">
      <Link
        href={`/travel-guides/${article.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold text-slate-500">
            <span className="text-gold-700">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <h3 className="mt-2 text-lg font-bold tracking-[-0.01em] text-navy-950">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {article.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-medium text-slate-500">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Updated {formatArticleDate(article.updatedAt)}
          </span>
        </div>
      </Link>
    </article>
  );
}

export function RouteCard({ route }: { route: RouteGuide }) {
  return (
    <article className={`${cardBase} p-6`}>
      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-700">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        {route.from} to {route.to}
      </p>
      <h3 className="mt-3 text-lg font-bold tracking-[-0.01em] text-navy-950">
        <Link
          href={`/routes/${route.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {route.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{route.summary}</p>
      <dl className="mt-5 grid gap-2 border-t border-navy-100 pt-4 text-xs text-slate-600 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-navy-800">Distance</dt>
          <dd className="mt-0.5">{route.distance}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-800">Typical time</dt>
          <dd className="mt-0.5">{route.duration}</dd>
        </div>
      </dl>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
        Read route guide
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}
