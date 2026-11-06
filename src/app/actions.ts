"use server";

import { headers } from "next/headers";
import {
  buildInquirySummary,
  readText,
  type InquiryFieldName,
  type InquiryState,
  type InquiryValues,
} from "@/lib/inquiry";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * In-memory limiter for a single server instance. It is deliberately simple:
 * production deployments should also use the hosting provider's firewall or
 * bot protection. Serverless instances do not share this map.
 */
const attemptsByKey = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attemptsByKey.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    attemptsByKey.set(key, recent);
    return true;
  }

  recent.push(now);
  attemptsByKey.set(key, recent);

  if (attemptsByKey.size > 5_000) {
    for (const [storedKey, timestamps] of attemptsByKey) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        attemptsByKey.delete(storedKey);
      }
    }
  }

  return false;
}

function todayInNepal() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kathmandu",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("year")}-${value("month")}-${value("day")}`;
}

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  if (parsed.toISOString().slice(0, 10) !== value) return false;
  return value >= todayInNepal();
}

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const clientKey =
    forwardedFor?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "local-development";

  if (isRateLimited(clientKey)) {
    return {
      status: "error",
      message:
        "Too many attempts in a short period. Please wait a few minutes and try again, or contact us using the details on this page.",
    };
  }

  // Honeypot. Real users never see or fill this field.
  const trap = readText(formData.get("website"), 100);
  if (trap) {
    return {
      status: "success",
      message:
        "Thank you. Your inquiry has been received and our team will be in touch.",
    };
  }

  const values: InquiryValues = {
    name: readText(formData.get("name"), 80),
    phone: readText(formData.get("phone"), 30),
    email: readText(formData.get("email"), 120),
    service: readText(formData.get("service"), 80),
    pickup: readText(formData.get("pickup"), 120),
    destination: readText(formData.get("destination"), 120),
    travelDate: readText(formData.get("travelDate"), 10),
    pickupTime: readText(formData.get("pickupTime"), 20),
    passengers: readText(formData.get("passengers"), 3),
    vehicle: readText(formData.get("vehicle"), 80),
    message: readText(formData.get("message"), 2000),
    consent: formData.get("consent") === "yes" ? "yes" : "",
  };

  const fieldErrors: Partial<Record<InquiryFieldName, string>> = {};

  if (values.name.length < 2) {
    fieldErrors.name = "Please enter your full name.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    fieldErrors.phone =
      "Enter a reachable phone or WhatsApp number with country code.";
  }

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    fieldErrors.email = "Enter a valid email address, or leave this blank.";
  }

  if (!values.service) {
    fieldErrors.service = "Choose the service you need.";
  }

  if (values.pickup.length < 2) {
    fieldErrors.pickup = "Tell us where the journey starts.";
  }

  if (values.destination.length < 2) {
    fieldErrors.destination = "Tell us where you need to go.";
  }

  if (!isValidDate(values.travelDate)) {
    fieldErrors.travelDate =
      "Choose a valid travel date from today onwards.";
  }

  const passengerCount = Number(values.passengers);
  if (
    !Number.isInteger(passengerCount) ||
    passengerCount < 1 ||
    passengerCount > 50
  ) {
    fieldErrors.passengers = "Enter a passenger count between 1 and 50.";
  }

  if (values.consent !== "yes") {
    fieldErrors.consent =
      "Please confirm that we may contact you about this inquiry.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and send the inquiry again.",
      fieldErrors,
      values,
    };
  }

  const summary = buildInquirySummary(values);
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return {
      status: "handoff",
      summary,
      message:
        "Your inquiry details are ready, but automatic delivery is not configured on this deployment yet. Your inquiry has not been sent. Copy the summary below and send it to our team using the contact details on this page, or keep it and try again once contact details are published.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        ...(process.env.INQUIRY_WEBHOOK_TOKEN
          ? {
              authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`,
            }
          : {}),
      },
      body: JSON.stringify({
        source: "majesticrentals.com.np",
        submittedAt: new Date().toISOString(),
        inquiry: values,
        summary,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`Inquiry webhook returned HTTP ${response.status}`);
    }

    return {
      status: "success",
      message:
        "Thank you — your inquiry has been sent. Our team will review availability and reply with a written quotation. This is a request, not a confirmed booking.",
    };
  } catch (error) {
    console.error(
      "[inquiry] webhook delivery failed:",
      error instanceof Error ? error.message : "unknown error",
    );

    return {
      status: "handoff",
      summary,
      message:
        "Your inquiry could not be delivered automatically just now, so it has not been sent. Copy the summary below and send it to our team using the contact details on this page, or try the form again shortly.",
    };
  }
}
