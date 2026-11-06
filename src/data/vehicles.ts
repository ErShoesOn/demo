import type { Faq } from "@/data/types";

export type VehicleIcon = "sedan" | "hatchback" | "suv" | "premium" | "ev";

export type VehicleCategory = {
  slug: string;
  name: string;
  tagline: string;
  icon: VehicleIcon;
  summary: string;
  intro: string[];
  passengers: string;
  luggage: string;
  bestFor: string[];
  features: string[];
  considerations: string[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * IMPORTANT — fleet content policy
 *
 * These are vehicle CATEGORIES, not a confirmed live inventory. Do not add a
 * specific make, model, year, registration or photo until the owner supplies
 * verified fleet data. When real vehicles are available, add them as entries
 * with their own route and keep the category pages as browsing aids.
 */
export const fleetNote =
  "We publish vehicle categories rather than a live inventory. The exact make, model and vehicle condition are confirmed with your quotation. Availability depends on your dates, route and passenger/luggage requirements.";

export const vehicleCategories: VehicleCategory[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    tagline: "Comfortable, discreet city travel",
    icon: "sedan",
    summary:
      "A practical choice for airport transfers, business appointments and couples travelling light.",
    intro: [
      "The executive sedan category is intended for travellers who want a comfortable private car without the footprint of a larger vehicle. It suits city journeys, airport transfers and short intercity trips where luggage is limited.",
      "We confirm the specific vehicle for your dates before you commit. If your passenger or luggage requirements are higher than the category typically supports, we will recommend a larger option instead.",
    ],
    passengers: "Typically 1–3 passengers",
    luggage: "Typically 2–3 medium bags",
    bestFor: [
      "Airport pickups and drop-offs",
      "Business meetings in Kathmandu",
      "Couples and solo travellers",
      "Short city itineraries",
    ],
    features: [
      "Private chauffeur",
      "Air-conditioned cabin",
      "Comfortable seating for city distances",
      "Luggage space suited to light travel",
    ],
    considerations: [
      "Capacity varies by vehicle. Share the exact passenger and bag count.",
      "Not the best choice for rough upcountry roads or large families.",
      "Child seats and accessibility equipment must be requested in advance.",
      "The confirmed vehicle may differ from the category illustration.",
    ],
    faqs: [
      {
        question: "Can an executive sedan carry four passengers?",
        answer:
          "Some sedans can seat four passengers, but comfort and luggage space may be limited. Tell us the exact number of passengers and bags so we can confirm a suitable vehicle.",
      },
      {
        question: "Is this category suitable for Kathmandu to Pokhara?",
        answer:
          "It can be, depending on passenger and luggage load. For longer journeys we may recommend an SUV for extra comfort and ground clearance.",
      },
      {
        question: "Do you guarantee a specific model?",
        answer:
          "No. We confirm the available vehicle for your dates. The category describes the type of vehicle, not a guaranteed make or model.",
      },
    ],
    seoTitle: "Executive Sedan Rental with Driver in Nepal",
    seoDescription:
      "Request an executive sedan with a chauffeur for airport transfers, business travel and city journeys in Kathmandu and across Nepal. Availability confirmed on inquiry.",
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    tagline: "Space and confidence beyond the city",
    icon: "suv",
    summary:
      "More room for families, luggage and longer routes where ground clearance and comfort matter.",
    intro: [
      "The premium SUV category is designed for travellers who need more space or are heading beyond the Kathmandu Valley. It is a practical choice for families, small groups and routes where road conditions vary.",
      "SUV does not mean unlimited capacity. We match the vehicle to your passenger count, luggage and route, and confirm the exact vehicle before your trip.",
    ],
    passengers: "Typically 1–5 passengers",
    luggage: "Typically 3–4 medium bags",
    bestFor: [
      "Families and small groups",
      "Longer intercity routes",
      "Trips with more luggage",
      "Guests travelling to hill and mountain areas",
    ],
    features: [
      "Private chauffeur",
      "Higher seating position and ground clearance",
      "More luggage space than a sedan",
      "Comfortable for longer road journeys",
    ],
    considerations: [
      "Third-row seating may reduce luggage space. Tell us how you plan to use the vehicle.",
      "Mountain routes can be affected by weather and road conditions.",
      "A larger vehicle may not be suitable for every narrow city street or parking area.",
      "The confirmed vehicle may differ from the category illustration.",
    ],
    faqs: [
      {
        question: "Is an SUV necessary for Muktinath?",
        answer:
          "The right vehicle depends on the season, road conditions and your full itinerary. Share your dates and we will recommend a suitable category and confirm availability.",
      },
      {
        question: "How many passengers can travel with luggage?",
        answer:
          "It depends on the specific vehicle and bag sizes. A full passenger load can leave limited luggage space, so send us the exact numbers before we confirm.",
      },
      {
        question: "Can you provide a child seat?",
        answer:
          "Child seats must be requested in advance and are subject to availability. Tell us the child's age and weight when you inquire.",
      },
    ],
    seoTitle: "Premium SUV Rental with Driver in Nepal",
    seoDescription:
      "Request a premium SUV with a chauffeur for family trips, longer routes and mountain travel in Nepal. Passenger and luggage capacity confirmed on inquiry.",
  },
  {
    slug: "compact-hatchback",
    name: "Compact Hatchback",
    tagline: "Easy city movement",
    icon: "hatchback",
    summary:
      "A right-sized private car for short city trips, solo travellers and light luggage.",
    intro: [
      "A compact hatchback is a sensible choice for short city journeys where manoeuvrability matters more than luggage space. It is well suited to solo travellers, couples and quick appointments.",
      "If you are travelling with several large bags or heading on a long route, a sedan or SUV may be more comfortable. We will tell you honestly if the category is not the right fit.",
    ],
    passengers: "Typically 1–2 passengers",
    luggage: "Typically 1–2 small bags",
    bestFor: [
      "Short city trips",
      "Solo travellers and couples",
      "Quick appointments and errands",
      "Light luggage",
    ],
    features: [
      "Private chauffeur",
      "Easy to manoeuvre in city traffic",
      "Lower rental cost than larger categories, when available",
      "Air-conditioned cabin",
    ],
    considerations: [
      "Limited luggage space.",
      "Not ideal for long intercity journeys with multiple passengers.",
      "Availability can be limited during peak periods.",
      "The confirmed vehicle may differ from the category illustration.",
    ],
    faqs: [
      {
        question: "Can I use a hatchback for an airport transfer?",
        answer:
          "Yes, if your luggage fits comfortably. Send us the number of bags and their approximate size so we can confirm.",
      },
      {
        question: "Is a hatchback available for full-day hire?",
        answer:
          "Full-day city hire can be requested. Availability depends on the date and the rest of the schedule.",
      },
      {
        question: "Can three passengers travel together?",
        answer:
          "Some hatchbacks can seat three passengers in the rear, but comfort may be limited. Tell us the passenger count and we will confirm the best option.",
      },
    ],
    seoTitle: "Compact Hatchback Rental with Driver in Kathmandu",
    seoDescription:
      "Request a compact hatchback with a chauffeur for short city trips in Kathmandu. A practical private car for solo travellers and couples with light luggage.",
  },
  {
    slug: "premium-vehicle",
    name: "Premium Vehicle",
    tagline: "A considered arrival",
    icon: "premium",
    summary:
      "An upgraded private vehicle for executive travel, special occasions and guests who value extra comfort.",
    intro: [
      "The premium vehicle category is for journeys where the quality of the vehicle matters as much as the destination. It suits executive arrivals, special occasions and guests who prefer a quieter, more comfortable cabin.",
      "Premium is a category description, not a claim about a specific brand or model. We confirm the vehicle available for your dates and share the details before you commit.",
    ],
    passengers: "Typically 1–3 passengers",
    luggage: "Typically 2–3 medium bags",
    bestFor: [
      "Executive airport arrivals",
      "Weddings and special occasions",
      "Senior guests and VIP visits",
      "Guests who prefer extra comfort",
    ],
    features: [
      "Private chauffeur",
      "Upgraded cabin comfort",
      "Discreet, professional service",
      "Suitable for special occasions",
    ],
    considerations: [
      "Premium vehicles are limited and subject to availability.",
      "Decoration or special arrangements must be requested separately.",
      "The confirmed vehicle may differ from the category illustration.",
      "Tell us if the vehicle is needed for a specific time window.",
    ],
    faqs: [
      {
        question: "What makes a vehicle premium?",
        answer:
          "It is a category we use for vehicles with a higher level of comfort and presentation. The exact vehicle is confirmed for your dates.",
      },
      {
        question: "Can I request a specific colour or model?",
        answer:
          "You can tell us your preference. We will confirm what is available, but we cannot guarantee a specific model or colour until the booking is confirmed.",
      },
      {
        question: "Is a premium vehicle available for weddings?",
        answer:
          "Yes, subject to availability. Share your event date, timings and any decoration requirements so we can confirm the details.",
      },
    ],
    seoTitle: "Premium Car Rental with Driver in Nepal",
    seoDescription:
      "Request a premium vehicle with a chauffeur for executive travel, weddings and special occasions in Nepal. Vehicle availability and details confirmed on inquiry.",
  },
  {
    slug: "electric-vehicle",
    name: "Electric Vehicle",
    tagline: "A quieter way to move",
    icon: "ev",
    summary:
      "A chauffeur-driven EV for city travel and selected intercity routes, planned around charging.",
    intro: [
      "Electric vehicles offer a quieter cabin and a different kind of journey. They work best when the route and charging plan are clear from the start, especially outside Kathmandu.",
      "We discuss range, charging stops and timing before confirming an EV booking. If a route is not practical for the available vehicle, we will say so and suggest an alternative.",
    ],
    passengers: "Typically 1–3 passengers",
    luggage: "Typically 2–3 medium bags",
    bestFor: [
      "City travel in Kathmandu",
      "Guests interested in lower-emission transport",
      "Predictable short itineraries",
      "Selected intercity trips with charging stops",
    ],
    features: [
      "Private chauffeur",
      "Quiet electric drivetrain",
      "Charging planned into the itinerary",
      "Lower tailpipe emissions than a petrol or diesel vehicle",
    ],
    considerations: [
      "Charging availability and wait times vary by route.",
      "Long-distance travel may take longer than in a conventional vehicle.",
      "Range can be affected by load, terrain, weather and driving conditions.",
      "The confirmed EV model may differ from the category illustration.",
    ],
    faqs: [
      {
        question: "Can I rent an EV without a driver?",
        answer:
          "No. Our EV rentals are chauffeur-driven only. We do not offer self-drive EV rentals.",
      },
      {
        question: "Will charging be included in the price?",
        answer:
          "Charging is planned as part of the agreed itinerary and the quotation will set out what is included. Tell us your route so we can quote accurately.",
      },
      {
        question: "Are EVs suitable for mountain routes?",
        answer:
          "It depends on the vehicle, route, season and charging options. We review each request individually and will only confirm a plan we believe is practical.",
      },
    ],
    seoTitle: "Electric Vehicle Rental with Driver in Nepal",
    seoDescription:
      "Request an electric vehicle with a chauffeur for Kathmandu city travel and selected intercity routes in Nepal. EV availability and charging plans confirmed on inquiry.",
  },
];

export function getVehicleCategory(slug: string) {
  return vehicleCategories.find((category) => category.slug === slug);
}
