"use client";

import Link from "next/link";
import { useActionState, useId, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { submitInquiry } from "@/app/actions";
import { siteConfig, whatsappHref } from "@/data/site";
import { emptyInquiryState, type InquiryState } from "@/lib/inquiry";

export type InquiryOption = {
  value: string;
  label: string;
};

type InquiryFormProps = {
  serviceOptions: InquiryOption[];
  vehicleOptions: InquiryOption[];
};

const labelClass = "block text-sm font-semibold text-navy-900";
const inputClass =
  "mt-2 h-11 w-full rounded-lg border border-navy-200 bg-white px-3 text-sm text-navy-950 shadow-sm transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/30 disabled:cursor-not-allowed disabled:opacity-60";
const textareaClass = `${inputClass} min-h-32 resize-y py-3 leading-6`;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-red-700">
      {message}
    </p>
  );
}

function InquiryResult({ state }: { state: InquiryState }) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const summary = state.summary ?? "";
  const whatsapp = summary ? whatsappHref(summary) : null;
  const email = summary && siteConfig.contact.email
    ? `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
        "Majestic Rentals inquiry",
      )}&body=${encodeURIComponent(summary)}`
    : null;

  async function copySummary() {
    if (!summary) return;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  const isSuccess = state.status === "success";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50/70"
          : "border-gold-300 bg-gold-100/60"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
            isSuccess
              ? "bg-emerald-100 text-emerald-800"
              : "bg-gold-200 text-gold-700"
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-navy-950">
            {isSuccess ? "Inquiry sent" : "One more step"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {state.message}
          </p>
        </div>
      </div>

      {summary ? (
        <div className="mt-6">
          <label
            htmlFor="inquiry-summary"
            className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700"
          >
            Your inquiry details
          </label>
          <pre
            id="inquiry-summary"
            className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-navy-200 bg-white p-4 text-xs leading-6 text-slate-700"
          >
            {summary}
          </pre>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copySummary}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-navy-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              {copied ? "Copied" : "Copy details"}
            </button>
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#188247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Send on WhatsApp
              </a>
            ) : null}
            {email ? (
              <a
                href={email}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-navy-300 bg-white px-4 text-sm font-semibold text-navy-950 transition-colors hover:border-navy-950 hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Open email
              </a>
            ) : null}
          </div>

          {copyFailed ? (
            <p className="mt-2 text-xs text-red-700" role="alert">
              Copying was blocked by your browser. Select the text above and
              copy it manually.
            </p>
          ) : null}
          {!whatsapp && !email ? (
            <p className="mt-3 text-xs leading-5 text-slate-600">
              Phone, WhatsApp and email details are still being verified for
              this deployment. Keep this summary and send it once those details
              are published.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 border-t border-navy-200/70 pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-navy-950"
        >
          Start another inquiry
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function InquiryForm({ serviceOptions, vehicleOptions }: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    emptyInquiryState,
  );
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;
  const errorId = (name: string) => `${uid}-${name}-error`;
  const errors = state.fieldErrors ?? {};

  if (state.status === "success" || state.status === "handoff") {
    return (
      <div id="inquiry">
        <InquiryResult state={state} />
      </div>
    );
  }

  return (
    <div id="inquiry">
      <form action={formAction} className="space-y-6">
        <div aria-live="polite" className="sr-only">
          {state.message}
        </div>

        {state.status === "error" ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          >
            <AlertCircle
              className="mt-0.5 h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            <p>{state.message}</p>
          </div>
        ) : null}

        <p className="text-xs leading-5 text-slate-500">
          Required fields are marked with an asterisk (*). Submitting this form
          starts an inquiry; it does not confirm a vehicle, driver or price.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fieldId("name")} className={labelClass}>
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("name")}
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              className={inputClass}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? errorId("name") : undefined}
            />
            <FieldError id={errorId("name")} message={errors.name} />
          </div>

          <div>
            <label htmlFor={fieldId("phone")} className={labelClass}>
              Phone / WhatsApp <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              required
              inputMode="tel"
              maxLength={30}
              autoComplete="tel"
              placeholder="+977 …"
              className={inputClass}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? errorId("phone") : undefined}
            />
            <FieldError id={errorId("phone")} message={errors.phone} />
          </div>

          <div>
            <label htmlFor={fieldId("email")} className={labelClass}>
              Email <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              maxLength={120}
              autoComplete="email"
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errorId("email")}
            />
            <p id={errorId("email")} className="mt-1.5 text-xs text-slate-500">
              {errors.email ?? "Useful if you would like the quotation by email."}
            </p>
          </div>

          <div>
            <label htmlFor={fieldId("service")} className={labelClass}>
              Service <span aria-hidden="true">*</span>
            </label>
            <select
              id={fieldId("service")}
              name="service"
              required
              defaultValue=""
              className={inputClass}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? errorId("service") : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError id={errorId("service")} message={errors.service} />
          </div>

          <div>
            <label htmlFor={fieldId("travelDate")} className={labelClass}>
              Travel date <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("travelDate")}
              name="travelDate"
              type="date"
              required
              className={inputClass}
              aria-invalid={Boolean(errors.travelDate)}
              aria-describedby={
                errors.travelDate ? errorId("travelDate") : undefined
              }
            />
            <FieldError
              id={errorId("travelDate")}
              message={errors.travelDate}
            />
          </div>

          <div>
            <label htmlFor={fieldId("passengers")} className={labelClass}>
              Passengers <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("passengers")}
              name="passengers"
              type="number"
              required
              min={1}
              max={50}
              defaultValue={1}
              inputMode="numeric"
              className={inputClass}
              aria-invalid={Boolean(errors.passengers)}
              aria-describedby={
                errors.passengers ? errorId("passengers") : undefined
              }
            />
            <FieldError
              id={errorId("passengers")}
              message={errors.passengers}
            />
          </div>

          <div>
            <label htmlFor={fieldId("pickup")} className={labelClass}>
              Pickup location <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("pickup")}
              name="pickup"
              type="text"
              required
              minLength={2}
              maxLength={120}
              placeholder="Hotel, home, airport or city"
              className={inputClass}
              aria-invalid={Boolean(errors.pickup)}
              aria-describedby={errors.pickup ? errorId("pickup") : undefined}
            />
            <FieldError id={errorId("pickup")} message={errors.pickup} />
          </div>

          <div>
            <label htmlFor={fieldId("destination")} className={labelClass}>
              Destination <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("destination")}
              name="destination"
              type="text"
              required
              minLength={2}
              maxLength={120}
              placeholder="City, hotel or region"
              className={inputClass}
              aria-invalid={Boolean(errors.destination)}
              aria-describedby={
                errors.destination ? errorId("destination") : undefined
              }
            />
            <FieldError
              id={errorId("destination")}
              message={errors.destination}
            />
          </div>

          <div>
            <label htmlFor={fieldId("pickupTime")} className={labelClass}>
              Preferred pickup time{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id={fieldId("pickupTime")}
              name="pickupTime"
              type="time"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={fieldId("vehicle")} className={labelClass}>
              Vehicle preference{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <select
              id={fieldId("vehicle")}
              name="vehicle"
              defaultValue=""
              className={inputClass}
            >
              <option value="">No preference</option>
              {vehicleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={fieldId("message")} className={labelClass}>
              Additional requirements{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <textarea
              id={fieldId("message")}
              name="message"
              maxLength={2000}
              rows={5}
              placeholder="Luggage count, child seat, accessibility needs, flight number, planned stops, return journey…"
              className={textareaClass}
            />
          </div>
        </div>

        <div className="rounded-xl border border-navy-100 bg-navy-50/60 p-4">
          <div className="flex items-start gap-3">
            <input
              id={fieldId("consent")}
              name="consent"
              type="checkbox"
              value="yes"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-navy-300 text-navy-950 focus:ring-gold-500"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={`${fieldId("consent")}-note${
                errors.consent ? ` ${errorId("consent")}` : ""
              }`}
            />
            <div>
              <label
                htmlFor={fieldId("consent")}
                className="text-sm leading-6 text-navy-900"
              >
                I agree to be contacted about this inquiry.{" "}
                <span aria-hidden="true">*</span>
              </label>
              <p
                id={`${fieldId("consent")}-note`}
                className="mt-1 text-xs leading-5 text-slate-600"
              >
                We use these details only to respond to your request. Read our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-2"
                >
                  privacy policy
                </Link>
                .
              </p>
              <FieldError id={errorId("consent")} message={errors.consent} />
            </div>
          </div>
        </div>

        {/* Honeypot: hidden from people, attractive to simple bots. */}
        <div
          aria-hidden="true"
          className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor={fieldId("website")}>Website</label>
          <input
            id={fieldId("website")}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-950 px-6 text-sm font-bold text-white transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending inquiry…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send inquiry
              </>
            )}
          </button>
          <p className="text-xs leading-5 text-slate-500">
            Our team reviews availability and replies with a written quotation.
          </p>
        </div>
      </form>
    </div>
  );
}
