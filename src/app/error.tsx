"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] unexpected error:", error.message);
  }, [error]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-700">
          Something went wrong
        </p>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-[-0.02em] text-navy-950 sm:text-4xl">
          We could not load this page.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600">
          The problem may be temporary. Try the page again, or continue from the
          homepage. If you were sending an inquiry, please check whether it was
          delivered before resubmitting.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-950 px-6 text-[0.95rem] font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
          <ButtonLink href="/" variant="secondary" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" size="lg">
            Contact us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        {error.digest ? (
          <p className="mt-8 text-xs text-slate-400">
            Reference: {error.digest}
          </p>
        ) : null}

        <p className="mt-8 text-sm text-slate-500">
          You can also browse{" "}
          <Link
            href="/services"
            className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
          >
            services
          </Link>
          ,{" "}
          <Link
            href="/destinations"
            className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
          >
            destinations
          </Link>{" "}
          or{" "}
          <Link
            href="/faqs"
            className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4"
          >
            FAQs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
