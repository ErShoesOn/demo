"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import {
  mainNav,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "@/data/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phone = phoneHref();
  const whatsapp = whatsappHref();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-950 text-white sm:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-5 text-[11px] font-medium tracking-wide sm:px-8">
          <p className="text-navy-100/80">
            Kathmandu-based · Chauffeur-driven rentals across Nepal
          </p>
          <div className="flex items-center gap-4">
            {phone ? (
              <a
                href={phone}
                className="inline-flex items-center gap-1.5 text-navy-100 transition-colors hover:text-white"
              >
                <Phone className="h-3 w-3" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            ) : (
              <span className="text-navy-200/70">
                Inquiry-led · Availability confirmed before booking
              </span>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-gold-300 transition-colors hover:text-gold-200"
            >
              Get a quote
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-navy-100/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="group flex shrink-0 flex-col justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4"
            aria-label="Majestic Rentals — home"
          >
            <span className="text-[1.02rem] font-extrabold leading-none tracking-[0.18em] text-navy-950">
              MAJESTIC
            </span>
            <span className="mt-1 text-[0.58rem] font-bold leading-none tracking-[0.42em] text-gold-600">
              RENTALS
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-semibold transition-colors ${
                    active
                      ? "text-navy-950"
                      : "text-slate-600 hover:bg-navy-50 hover:text-navy-950"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {phone ? (
              <a
                href={phone}
                className="hidden h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-navy-50 lg:inline-flex xl:hidden 2xl:inline-flex"
                aria-label={`Call ${siteConfig.name}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            <ButtonLink
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-950 transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-navy-100 bg-white shadow-2xl shadow-navy-950/10 xl:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-5 py-5 sm:px-8"
          >
            <ul className="divide-y divide-navy-100">
              {mainNav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3.5 text-[0.95rem] font-semibold ${
                        active ? "text-gold-700" : "text-navy-950"
                      }`}
                    >
                      {item.label}
                      <ArrowRight
                        className="h-4 w-4 text-navy-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 grid gap-2">
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Send an Inquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              {whatsapp ? (
                <ButtonLink
                  href={whatsapp}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </ButtonLink>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
