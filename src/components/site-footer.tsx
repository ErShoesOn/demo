import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  emailHref,
  footerNav,
  phoneHref,
  siteConfig,
  whatsappHref,
} from "@/data/site";

export function SiteFooter() {
  const phone = phoneHref();
  const whatsapp = whatsappHref();
  const email = emailHref();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex flex-col rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-4 focus-visible:ring-offset-navy-950"
              aria-label="Majestic Rentals — home"
            >
              <span className="text-[1.05rem] font-extrabold leading-none tracking-[0.18em] text-white">
                MAJESTIC
              </span>
              <span className="mt-1 text-[0.58rem] font-bold leading-none tracking-[0.42em] text-gold-300">
                RENTALS
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-navy-100/75">
              Premium chauffeur-driven car rentals, airport transfers and private
              travel across Nepal. Based in Kathmandu, serving travellers
              nationwide on request.
            </p>
            <p className="mt-4 text-xs leading-6 text-navy-300">
              We do not offer self-drive rentals. Every journey includes a
              chauffeur.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              {phone ? (
                <a
                  href={phone}
                  className="flex items-center gap-2.5 text-navy-100 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-gold-300" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              ) : null}
              {email ? (
                <a
                  href={email}
                  className="flex items-center gap-2.5 text-navy-100 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-gold-300" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              ) : null}
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-navy-100 transition-colors hover:text-white"
                >
                  <MessageCircle
                    className="h-4 w-4 text-gold-300"
                    aria-hidden="true"
                  />
                  WhatsApp inquiry
                </a>
              ) : null}
              <p className="flex items-start gap-2.5 text-navy-100">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.contact.address || "Kathmandu, Nepal"}
                  {siteConfig.contact.hours ? (
                    <span className="mt-1 block text-xs text-navy-300">
                      {siteConfig.contact.hours}
                    </span>
                  ) : null}
                </span>
              </p>
              {!phone && !email && !whatsapp ? (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  Contact details are being verified — use the inquiry form
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs leading-5 text-navy-200">
                Travel dates not fixed yet? Send an inquiry and we will help you
                plan a realistic route.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 transition-colors hover:text-gold-200"
              >
                Request a quotation
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.name}. All rights reserved.</p>
          <p>
            Chauffeur-driven only · Nationwide Nepal on request · Availability
            confirmed before booking
          </p>
        </div>
      </div>
    </footer>
  );
}
