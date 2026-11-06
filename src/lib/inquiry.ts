export type InquiryFieldName =
  | "name"
  | "phone"
  | "email"
  | "service"
  | "pickup"
  | "destination"
  | "travelDate"
  | "pickupTime"
  | "passengers"
  | "vehicle"
  | "message"
  | "consent";

export type InquiryStatus = "idle" | "success" | "handoff" | "error";

export type InquiryState = {
  status: InquiryStatus;
  message: string;
  /** Plain-text summary shown when automatic delivery is unavailable. */
  summary?: string;
  fieldErrors?: Partial<Record<InquiryFieldName, string>>;
  /** Echoed back on validation errors so the form can be repopulated. */
  values?: InquiryValues;
};

export type InquiryValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  pickup: string;
  destination: string;
  travelDate: string;
  pickupTime: string;
  passengers: string;
  vehicle: string;
  message: string;
  consent: string;
};

export const emptyInquiryState: InquiryState = {
  status: "idle",
  message: "",
};

/**
 * Removes control characters (except line breaks), trims and caps length.
 * Input is always rendered as text, never as HTML.
 */
export function readText(
  value: FormDataEntryValue | null,
  maxLength: number,
): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function buildInquirySummary(values: InquiryValues) {
  return [
    "New rental inquiry — Majestic Rentals",
    "",
    `Name: ${values.name}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Email: ${values.email || "Not provided"}`,
    `Service: ${values.service}`,
    `Pickup location: ${values.pickup}`,
    `Destination: ${values.destination}`,
    `Travel date: ${values.travelDate}`,
    `Preferred pickup time: ${values.pickupTime || "Not specified"}`,
    `Passengers: ${values.passengers}`,
    `Vehicle preference: ${values.vehicle || "No preference stated"}`,
    "",
    "Additional requirements:",
    values.message || "None provided",
    "",
    "Consent to be contacted about this inquiry: yes",
  ].join("\n");
}
