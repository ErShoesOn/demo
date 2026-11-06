import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { phoneHref, whatsappHref } from "@/data/site";

export function FloatingContact() {
  const whatsapp = whatsappHref();
  const phone = phoneHref();

  if (!whatsapp && !phone) {
    return (
      <div className="fixed bottom-5 right-5 z-40 print:hidden">
        <Link
          href="/contact"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-gold-400 px-4 text-sm font-bold text-navy-950 shadow-lg shadow-navy-950/25 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950 focus-visible:ring-offset-2"
          aria-label="Send a rental inquiry"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Get a quote</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 print:hidden">
      {whatsapp ? (
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-lg shadow-navy-950/25 transition-colors hover:bg-[#188247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f9d55]"
          aria-label="Chat with Majestic Rentals on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : null}
      {phone ? (
        <a
          href={phone}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-white shadow-lg shadow-navy-950/25 transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
          aria-label="Call Majestic Rentals"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
