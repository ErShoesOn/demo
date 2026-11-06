import type { Faq } from "@/data/types";

export type TourPackage = {
  slug: string;
  name: string;
  duration: string;
  summary: string;
  intro: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  destinations: string[];
  bestFor: string[];
  itinerary: { day: string; title: string; text: string }[];
  included: string[];
  notIncluded: string[];
  notes: string[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * These outlines are planning frameworks, not fixed products. Do not add
 * prices or guaranteed inclusions until the owner confirms them.
 */
export const tourPackages: TourPackage[] = [
  {
    slug: "kathmandu-valley-heritage",
    name: "Kathmandu Valley Heritage",
    duration: "3 days / 2 nights",
    summary:
      "A short private itinerary covering the valley's best-known heritage sites with a chauffeur on hand.",
    intro: [
      "This three-day outline is designed for travellers who want a thoughtful introduction to the Kathmandu Valley without rushing between sites. It combines the old city, Boudhanath and the historic cities of Patan and Bhaktapur.",
      "The itinerary is indicative. We confirm timings, vehicle category and the final route with your quotation, and can adjust the pace to your interests.",
    ],
    image: "/images/kathmandu-durbar-square.jpg",
    imageAlt: "Temple architecture in Kathmandu Durbar Square",
    imageCaption:
      "Kathmandu Durbar Square. Photo: Vyacheslav Argenberg / UnpetitproleX, CC BY 4.0, via Wikimedia Commons.",
    destinations: ["Kathmandu", "Patan", "Bhaktapur"],
    bestFor: [
      "First-time visitors to Nepal",
      "Short stopovers with two or three free days",
      "Travellers interested in art and architecture",
      "Guests who prefer a private vehicle and driver",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and the old city",
        text: "Airport pickup, hotel check-in and a relaxed introduction to Kathmandu Durbar Square and the surrounding old-city lanes. The pace depends on your arrival time.",
      },
      {
        day: "Day 2",
        title: "Boudhanath and Patan",
        text: "Morning at Boudhanath Stupa, then continue to Patan Durbar Square and the surrounding craft districts. Your driver handles the cross-city movement and parking.",
      },
      {
        day: "Day 3",
        title: "Bhaktapur and departure",
        text: "A morning in Bhaktapur's historic core, followed by a return to your hotel or the airport. We build in a realistic buffer for departure traffic.",
      },
    ],
    included: [
      "Private chauffeur-driven vehicle for the agreed itinerary",
      "Airport pickup and drop-off as scheduled",
      "Fuel and driver allowance as stated in the quotation",
      "Pre-trip coordination and a written itinerary",
    ],
    notIncluded: [
      "Hotel accommodation and meals",
      "Monument entrance fees and guide services",
      "Personal expenses and travel insurance",
      "Anything not specifically listed in the quotation",
    ],
    notes: [
      "This is an indicative outline, not a fixed package.",
      "Opening hours, ticket prices and access rules can change.",
      "Traffic and festival days can affect the order of visits.",
      "Tell us about mobility needs so we can plan walking distances realistically.",
    ],
    faqs: [
      {
        question: "Can this itinerary be shortened to two days?",
        answer:
          "It can be adjusted if your time is limited. Tell us which sites matter most and we will propose a realistic two-day version.",
      },
      {
        question: "Are entrance tickets included?",
        answer:
          "No. Monument and site entrance fees are separate and should be confirmed at the time of travel.",
      },
      {
        question: "Can we add a guide?",
        answer:
          "Guiding is arranged separately from transport. Tell us the languages you need and we can discuss options with a qualified provider.",
      },
    ],
    seoTitle: "Kathmandu Valley Heritage Tour Package",
    seoDescription:
      "Request a private 3-day Kathmandu Valley heritage itinerary covering Durbar Square, Boudhanath, Patan and Bhaktapur with a chauffeur-driven vehicle.",
  },
  {
    slug: "kathmandu-pokhara-escape",
    name: "Kathmandu & Pokhara Escape",
    duration: "5 days / 4 nights",
    summary:
      "A balanced private itinerary combining the Kathmandu Valley with lakeside Pokhara and the Annapurna views.",
    intro: [
      "This five-day outline pairs the cultural density of Kathmandu with the open landscape around Pokhara. It is a good fit for travellers who want a private road journey rather than a rushed domestic flight.",
      "The days are deliberately flexible. We confirm the road plan, vehicle and stops with your quotation, and can adjust the balance between sightseeing and rest.",
    ],
    image: "/images/pokhara-phewa-lake.jpg",
    imageAlt: "Phewa Lake in Pokhara with hills behind",
    imageCaption:
      "Phewa Lake, Pokhara. Photo: Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons.",
    destinations: ["Kathmandu", "Pokhara"],
    bestFor: [
      "Couples and families",
      "Travellers with about a week in Nepal",
      "Guests who want culture and mountain scenery",
      "Road travellers who prefer a private car",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        text: "Airport pickup and hotel transfer, with a gentle introduction to the city depending on your arrival time.",
      },
      {
        day: "Day 2",
        title: "Kathmandu Valley highlights",
        text: "A private day covering selected heritage sites such as Boudhanath and Patan or Bhaktapur, paced around your interests.",
      },
      {
        day: "Day 3",
        title: "Drive to Pokhara",
        text: "An early departure for the scenic road journey, with planned rest stops. The evening is free by the lake.",
      },
      {
        day: "Day 4",
        title: "Pokhara at your pace",
        text: "A private local itinerary for sunrise viewpoints, lakeside areas or nearby natural attractions, subject to weather.",
      },
      {
        day: "Day 5",
        title: "Return or onward travel",
        text: "Choose a return drive to Kathmandu, a flight, or an extension to Chitwan or another destination. We confirm the plan in advance.",
      },
    ],
    included: [
      "Private chauffeur-driven vehicle for the agreed route",
      "Airport pickup and drop-off as scheduled",
      "Kathmandu–Pokhara road journey with planned stops",
      "Written itinerary and quotation before confirmation",
    ],
    notIncluded: [
      "Hotels, meals and activity fees",
      "Domestic flights, if you choose to fly one way",
      "Guides, permits and entrance tickets",
      "Travel insurance and personal expenses",
    ],
    notes: [
      "The road journey can take most of a day, depending on conditions.",
      "Pokhara activities depend on weather and seasonal visibility.",
      "A one-way flight can be discussed, subject to airline availability.",
      "This outline is a planning starting point, not a fixed product.",
    ],
    faqs: [
      {
        question: "Is the Kathmandu–Pokhara drive included?",
        answer:
          "Yes, the private road journey is part of this outline. The quotation will set out the exact route, stops and vehicle.",
      },
      {
        question: "Can we fly back from Pokhara instead?",
        answer:
          "A domestic flight can be a practical alternative. Flights are arranged separately and are subject to airline availability; tell us if you want us to plan around one.",
      },
      {
        question: "Can we add Chitwan?",
        answer:
          "Yes. We can extend the outline to include Chitwan, or plan a separate itinerary that flows from Pokhara to Chitwan and back to Kathmandu.",
      },
    ],
    seoTitle: "Kathmandu and Pokhara Tour Package",
    seoDescription:
      "Request a private 5-day Kathmandu and Pokhara itinerary with a chauffeur. Combine valley heritage, a scenic road journey and lakeside time in Pokhara.",
  },
  {
    slug: "kathmandu-chitwan-pokhara",
    name: "Kathmandu, Chitwan & Pokhara",
    duration: "7 days / 6 nights",
    summary:
      "A week-long private route through valley heritage, lowland wildlife and lakeside Pokhara.",
    intro: [
      "This seven-day outline connects three of Nepal's most established destinations in a logical loop. It suits travellers who want a broader first visit without the pressure of covering the whole country.",
      "Park activities, local guides and hotel choices are arranged separately. We focus on the private transport, route planning and the practical rhythm of the journey.",
    ],
    image: "/images/chitwan-rapti-river.jpg",
    imageAlt: "The Rapti River in Chitwan National Park",
    imageCaption:
      "Chitwan National Park, Rapti River. Photo: Silu0211, CC BY-SA 4.0, via Wikimedia Commons.",
    destinations: ["Kathmandu", "Chitwan", "Pokhara"],
    bestFor: [
      "First-time visitors with a week",
      "Families and small groups",
      "Travellers interested in culture and wildlife",
      "Guests who prefer a private vehicle throughout",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        text: "Airport transfer and a relaxed first evening, with a short orientation if time allows.",
      },
      {
        day: "Day 2",
        title: "Kathmandu Valley",
        text: "A private day of selected heritage sites, with time built in for traffic and unhurried visits.",
      },
      {
        day: "Day 3",
        title: "Drive to Chitwan",
        text: "Travel to the lowlands and check in near Sauraha. The remainder of the day is at your lodge's pace.",
      },
      {
        day: "Day 4",
        title: "Chitwan National Park",
        text: "A day for park activities arranged by your lodge or a licensed operator, with the driver available for local transfers as agreed.",
      },
      {
        day: "Day 5",
        title: "Drive to Pokhara",
        text: "Continue west through the lowlands and hills to Pokhara. The evening is free by the lake.",
      },
      {
        day: "Day 6",
        title: "Pokhara",
        text: "A private local itinerary for viewpoints, lakeside areas or nearby attractions, adjusted for weather.",
      },
      {
        day: "Day 7",
        title: "Return to Kathmandu or onward",
        text: "Return by road, take a domestic flight, or extend the journey. We confirm the final transfer in advance.",
      },
    ],
    included: [
      "Private chauffeur-driven vehicle for the confirmed route",
      "Airport pickup and drop-off as scheduled",
      "Intercity transfers between the listed destinations",
      "Written itinerary and quotation before confirmation",
    ],
    notIncluded: [
      "Hotels, meals and park activities",
      "Guides, permits and entrance fees",
      "Domestic flights and travel insurance",
      "Personal expenses and anything not listed in the quotation",
    ],
    notes: [
      "This is an indicative outline; the final route depends on your dates and pace.",
      "Park activities and permits are arranged separately.",
      "Road conditions can change the timing between destinations.",
      "Consider an extra night in Pokhara or Chitwan if you prefer a slower pace.",
    ],
    faqs: [
      {
        question: "Is seven days enough for all three destinations?",
        answer:
          "It gives you a useful introduction, but the trip involves several road journeys. If you prefer a slower pace, add a night or remove a destination.",
      },
      {
        question: "Are Chitwan safari activities included?",
        answer:
          "No. Park permits, guides and safari activities are arranged separately through your lodge or a licensed operator.",
      },
      {
        question: "Can the route run in the opposite direction?",
        answer:
          "Yes. We can plan the same destinations in a different order to suit your arrival and departure arrangements.",
      },
    ],
    seoTitle: "Kathmandu Chitwan Pokhara Tour Package",
    seoDescription:
      "Request a private 7-day Kathmandu, Chitwan and Pokhara itinerary with a chauffeur. Plan valley heritage, wildlife and lakeside travel in one route.",
  },
];

export function getTourPackage(slug: string) {
  return tourPackages.find((tourPackage) => tourPackage.slug === slug);
}
