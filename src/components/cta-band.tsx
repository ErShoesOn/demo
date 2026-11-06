import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { phoneHref, whatsappHref } from "@/data/site";

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CtaBand({
  title = "Tell us where you need to go.",
  description = "Send your dates, pickup point and destination. We will check availability and reply with a clear quotation. A request is not a confirmed booking.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
}: CtaBandProps) {
  const whatsapp = whatsappHref();
  const phone = phoneHref();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(194,146,53,0.22),transparent_40%)]"
          />
          <div
            aria-hidden="true"
            className="pattern-grid absolute inset-0 opacity-30"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
                Start your inquiry
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-pretty text-base leading-7 text-navy-100/80">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primaryHref} variant="gold" size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              {whatsapp ? (
                <ButtonLink href={whatsapp} variant="light" size="lg">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </ButtonLink>
              ) : null}
              {!whatsapp && phone ? (
                <ButtonLink href={phone} variant="light" size="lg">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call us
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
