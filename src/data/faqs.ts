import type { Faq } from "@/data/types";

export type FaqGroup = {
  title: string;
  description: string;
  items: Faq[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: "Booking and availability",
    description:
      "How inquiries work, what is confirmed, and what to expect before your trip.",
    items: [
      {
        question: "Does Majestic Rentals offer self-drive rentals?",
        answer:
          "No. We provide chauffeur-driven rentals only. Every vehicle is arranged with a driver, and we do not offer vehicles for self-drive use.",
      },
      {
        question: "How do I book a vehicle?",
        answer:
          "Send an inquiry with your dates, pickup and drop-off locations, passenger count, luggage and preferred vehicle category. We review availability and respond with a written quotation. Your booking is confirmed only after you accept the quotation and we confirm the arrangement in writing.",
      },
      {
        question: "Is my booking confirmed when I submit the inquiry form?",
        answer:
          "No. Submitting the form starts a conversation. It does not reserve a vehicle, driver or price. We confirm availability and send a quotation before anything is finalised.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "Earlier is better, especially during festivals, wedding season and peak travel periods. Send your dates as soon as they are clear so we can check availability.",
      },
      {
        question: "Do you serve destinations outside Kathmandu?",
        answer:
          "We accept requests for journeys across Nepal, including Pokhara, Chitwan, Lumbini and Muktinath. Service on a specific route is confirmed for your dates; we do not claim that every vehicle or service is available everywhere.",
      },
    ],
  },
  {
    title: "Vehicles and drivers",
    description:
      "Vehicle categories, capacity, drivers and special requirements.",
    items: [
      {
        question: "Are drivers included in every rental?",
        answer:
          "Yes. All Majestic Rentals vehicles are provided with a chauffeur. You do not need to arrange a separate driver.",
      },
      {
        question: "Can I request a specific vehicle model?",
        answer:
          "You can tell us your preference. We confirm the available vehicle for your dates, but we cannot guarantee a specific make, model, colour or year until the arrangement is confirmed.",
      },
      {
        question: "How many passengers and bags can each category carry?",
        answer:
          "Capacity varies by vehicle. The category pages give typical ranges, but you should share the exact passenger and luggage count so we can confirm a suitable vehicle. A full passenger load can leave limited luggage space.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Child seats can be requested in advance and are subject to availability. Tell us the child's age and weight when you inquire.",
      },
      {
        question: "Can the driver speak English?",
        answer:
          "English-speaking drivers can be requested, subject to availability. Tell us your language needs when you inquire so we can confirm what can be arranged.",
      },
    ],
  },
  {
    title: "Airport and intercity travel",
    description:
      "Flight coordination, long-distance routes and practical travel planning.",
    items: [
      {
        question: "Do you provide Kathmandu airport pickup?",
        answer:
          "Yes. Share your flight number, arrival time, passenger count and luggage. We confirm the transfer and share the driver and pickup instructions once the arrangement is finalised.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "Send us the updated flight information as soon as possible. We will coordinate with the driver. Any waiting-time terms are set out in your quotation.",
      },
      {
        question: "Can I travel one way between cities?",
        answer:
          "Yes. One-way and return journeys can be requested. Tell us both dates and whether the vehicle should wait or return later so we can quote the arrangement correctly.",
      },
      {
        question: "Are travel times guaranteed?",
        answer:
          "No. Traffic, weather, road works and festival periods can change journey times. We plan realistically and share estimates, but we cannot guarantee an exact arrival time.",
      },
      {
        question: "Can we stop along an intercity route?",
        answer:
          "Stops can usually be planned into the journey. Tell us where you would like to stop so the timing and quotation reflect the extra time.",
      },
    ],
  },
  {
    title: "Quotations and policies",
    description:
      "What the quotation covers and how payment, changes and cancellations are handled.",
    items: [
      {
        question: "What is included in a quotation?",
        answer:
          "A quotation sets out the vehicle category, driver, route, dates and the inclusions and exclusions that apply. Fuel, driver allowance, waiting time, overnight arrangements and taxes are stated explicitly where relevant.",
      },
      {
        question: "Are entrance fees, guides and activities included?",
        answer:
          "Generally no. Monument tickets, park permits, guides, safari activities, hotels and meals are arranged separately unless the quotation says otherwise.",
      },
      {
        question: "How do I pay?",
        answer:
          "Payment terms are confirmed in writing before a booking is finalised. Do not send payment until you have an accepted quotation and written confirmation from our team.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation terms are confirmed with your quotation and form part of the booking agreement. Ask for the terms in writing before you confirm.",
      },
      {
        question: "Can I change my itinerary after booking?",
        answer:
          "Changes may be possible, subject to availability and any costs already incurred. Contact us as early as possible. Additional distance, time or stops may change the final charge.",
      },
    ],
  },
];

/** A short set for the homepage. */
export const homepageFaqs: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[2],
  faqGroups[1].items[1],
  faqGroups[2].items[0],
  faqGroups[3].items[0],
];

export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.items);
