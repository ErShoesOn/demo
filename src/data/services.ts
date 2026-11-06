import type { Faq } from "@/data/types";

export type ServiceIcon =
  | "chauffeur"
  | "ev"
  | "airport"
  | "corporate"
  | "wedding"
  | "intercity";

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  icon: ServiceIcon;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  highlights: string[];
  included: string[];
  suitedTo: string[];
  goodToKnow: string[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "chauffeur-driven-car-rental",
    name: "Chauffeur-Driven Car Rental",
    navLabel: "Chauffeur-Driven Rentals",
    icon: "chauffeur",
    summary:
      "A private vehicle and driver for city days, business travel, family trips and special occasions.",
    intro:
      "Majestic Rentals is a chauffeur-driven rental service. You choose the vehicle category and itinerary; we confirm availability and provide a quotation. Your driver handles the road while you focus on the reason for the journey.",
    image: "/images/hero-road.jpg",
    imageAlt: "A highway winding through green hills in Nepal",
    imageCaption:
      "Illustrative image: Prithvi Highway, Nepal. Photography credited on our photography credits page.",
    highlights: [
      "Private vehicle with a driver",
      "Plan by the day or by the trip",
      "Pickup from your hotel, home or the airport",
      "A written quotation before confirmation",
    ],
    included: [
      "Vehicle and chauffeur for the agreed itinerary",
      "Fuel and driver allowance as stated in your quotation",
      "Pickup and drop-off within the agreed route",
      "Pre-trip coordination by phone or WhatsApp",
    ],
    suitedTo: [
      "Business travellers and visiting guests",
      "Families and small groups",
      "Couples and special occasions",
      "Visitors who prefer not to drive in Nepal",
    ],
    goodToKnow: [
      "Rates depend on the vehicle category, route, duration and waiting time.",
      "Availability is confirmed only after we review your dates and itinerary.",
      "Tell us about passengers, luggage and any accessibility needs so we can recommend a suitable category.",
      "Additional stops, overtime or changes to the route may change the quotation.",
    ],
    faqs: [
      {
        question: "Is a driver always included?",
        answer:
          "Yes. Majestic Rentals provides chauffeur-driven rentals only. We do not offer self-drive rentals.",
      },
      {
        question: "Can I book a car for a full day in Kathmandu?",
        answer:
          "Yes, full-day city assignments can be requested. Share your pickup location, timings and planned stops so we can quote accurately and confirm availability.",
      },
      {
        question: "How is the final price decided?",
        answer:
          "We provide a written quotation based on the vehicle category, travel dates, route, duration and any waiting or overnight requirements. The quoted price is confirmed before your trip.",
      },
      {
        question: "Can the itinerary change during the trip?",
        answer:
          "Small changes can often be accommodated, but additional distance, time or stops may affect the final charge. Speak to your driver and our team before making significant changes.",
      },
    ],
    seoTitle: "Chauffeur-Driven Car Rental in Nepal",
    seoDescription:
      "Request a chauffeur-driven car rental in Nepal for city travel, business trips, family journeys and special occasions. Private vehicle, professional driver and a written quotation.",
  },
  {
    slug: "electric-vehicle-rental",
    name: "Electric Vehicle Rental",
    navLabel: "Electric Vehicle Rentals",
    icon: "ev",
    summary:
      "Chauffeur-driven electric vehicles for quieter journeys, planned around real-world range and charging.",
    intro:
      "An electric vehicle can be a comfortable choice for city travel and selected intercity routes. We plan around the vehicle's practical range, the charging stops available on your route and the time your itinerary allows. EV availability is confirmed for each request.",
    image: "/images/prithvi-highway-malekhu.jpg",
    imageAlt: "A road through green hills in Nepal",
    imageCaption:
      "Illustrative image: Prithvi Highway at Malekhu. EV availability and charging plans are confirmed on request.",
    highlights: [
      "Chauffeur-driven electric vehicle",
      "Route and charging plan discussed upfront",
      "Well suited to city days and selected intercity trips",
      "Subject to vehicle and charging availability",
    ],
    included: [
      "Electric vehicle and chauffeur for the agreed itinerary",
      "Charging planned as part of the confirmed route",
      "Pre-trip discussion of range, stops and timing",
      "Written quotation covering the agreed plan",
    ],
    suitedTo: [
      "Travellers interested in lower-emission transport",
      "City itineraries with predictable distances",
      "Guests who prefer a quieter vehicle",
      "Selected intercity trips with charging stops",
    ],
    goodToKnow: [
      "Charging infrastructure and wait times vary by route. We confirm a practical plan before accepting a booking.",
      "Long-distance EV travel may need extra time compared with a petrol or diesel vehicle.",
      "We do not guarantee a specific EV model until availability is confirmed.",
      "Passenger and luggage load can affect range, so tell us the full picture.",
    ],
    faqs: [
      {
        question: "Are your electric vehicles self-drive?",
        answer:
          "No. Our EV rentals include a chauffeur. We do not offer self-drive electric vehicle rentals.",
      },
      {
        question: "Can I take an EV from Kathmandu to Pokhara?",
        answer:
          "It may be possible depending on the vehicle, charging availability and your schedule. Share your dates and we will confirm whether a practical charging plan can be arranged.",
      },
      {
        question: "What happens if charging takes longer than expected?",
        answer:
          "Charging is planned into the itinerary. If delays occur, your driver and our team will update you. Any effect on later arrangements depends on the specific trip and will be discussed transparently.",
      },
      {
        question: "Do you guarantee a specific electric car model?",
        answer:
          "No. We confirm the available vehicle category and model for your dates. The website describes categories rather than a live inventory.",
      },
    ],
    seoTitle: "Electric Car Rental in Nepal with Driver",
    seoDescription:
      "Request a chauffeur-driven electric vehicle in Nepal. EV rentals for Kathmandu city travel and selected intercity routes, planned around real-world range and charging.",
  },
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    navLabel: "Airport Transfers",
    icon: "airport",
    summary:
      "Private airport pickup and drop-off at Tribhuvan International Airport, coordinated around your flight.",
    intro:
      "Share your flight number, arrival time, passenger count and luggage, and we will confirm a vehicle and meeting arrangement. Airport traffic and flight delays can affect timing, so your driver's details and pickup instructions are shared once the transfer is confirmed.",
    image: "/images/kathmandu-airport.jpg",
    imageAlt: "Aircraft at Tribhuvan International Airport in Kathmandu",
    imageCaption:
      "Illustrative image: Tribhuvan International Airport, Kathmandu. Photography credited on our photography credits page.",
    highlights: [
      "Private arrival and departure transfers",
      "Flight details captured before travel",
      "Luggage considered when selecting the vehicle",
      "One-way and round-trip requests",
    ],
    included: [
      "Vehicle and chauffeur for the confirmed transfer",
      "Pickup or drop-off at the agreed airport meeting point",
      "Flight and arrival-time coordination",
      "Written quotation including any waiting-time terms",
    ],
    suitedTo: [
      "International and domestic arrivals",
      "Business travellers",
      "Families with luggage",
      "Guests continuing directly to a hotel or another city",
    ],
    goodToKnow: [
      "Allow extra time during peak traffic and festival periods.",
      "Meet-and-greet arrangements depend on airport rules and the arrival terminal.",
      "Waiting time and late-night charges are confirmed in your quotation.",
      "Provide a reachable phone number for arrival coordination.",
    ],
    faqs: [
      {
        question: "Where will the driver meet me?",
        answer:
          "The meeting point depends on your terminal and arrival arrangements. Once your transfer is confirmed, we share the driver's details and clear pickup instructions.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Send us the updated flight information as soon as you can. We will coordinate with the driver. Waiting-time terms are set out in your quotation.",
      },
      {
        question: "Can you take me directly to Pokhara after landing?",
        answer:
          "Yes, this can be requested. Tell us your arrival time and final destination so we can plan the transfer and confirm the vehicle and quotation.",
      },
      {
        question: "Do you offer airport drop-off as well?",
        answer:
          "Yes. We arrange both airport pickups and drop-offs. For departures, we agree a pickup time based on your flight and the traffic conditions expected that day.",
      },
    ],
    seoTitle: "Kathmandu Airport Transfer & Pickup",
    seoDescription:
      "Request a private Kathmandu airport transfer with a chauffeur. Arrival pickup and departure drop-off at Tribhuvan International Airport, coordinated around your flight.",
  },
  {
    slug: "corporate-transport",
    name: "Corporate Transport",
    navLabel: "Corporate Transport",
    icon: "corporate",
    summary:
      "Chauffeur-driven transport for meetings, client visits, conferences and multi-day business itineraries.",
    intro:
      "Reliable movement is part of a productive business trip. We arrange private vehicles with drivers for single transfers, full-day assignments and multi-day corporate itineraries. Tell us the schedule and we will propose a practical plan.",
    image: "/images/kathmandu-durbar-square.jpg",
    imageAlt: "Historic architecture in Kathmandu Durbar Square",
    imageCaption:
      "Illustrative image: Kathmandu, our primary service hub. Photography credited on our photography credits page.",
    highlights: [
      "Full-day or multi-day assignments",
      "Coordinated pickups and schedules",
      "Quiet, professional travel",
      "One point of contact for the itinerary",
    ],
    included: [
      "Vehicle and chauffeur for the agreed business schedule",
      "Pickup coordination for the named locations",
      "Pre-trip review of the itinerary and waiting time",
      "A written quotation before confirmation",
    ],
    suitedTo: [
      "Visiting executives and consultants",
      "Client and site visits",
      "Conference and event delegates",
      "Teams needing coordinated transport",
    ],
    goodToKnow: [
      "Share a full schedule so waiting time is included correctly.",
      "Multiple vehicles can be requested for larger groups.",
      "Invoicing requirements should be shared before confirmation.",
      "Availability is subject to vehicle and driver schedules.",
    ],
    faqs: [
      {
        question: "Can you support a multi-day corporate itinerary?",
        answer:
          "Yes. Share the dates, daily schedule and number of passengers. We will propose vehicle options and a quotation for the full assignment.",
      },
      {
        question: "Can you provide more than one vehicle?",
        answer:
          "Multiple vehicles can be requested for group movements, subject to availability. Tell us the passenger count and luggage so we can plan the right combination.",
      },
      {
        question: "Do you provide invoices?",
        answer:
          "Share your invoicing and billing requirements when you inquire. We will confirm what can be provided before you commit to the booking.",
      },
      {
        question: "Can the driver wait during meetings?",
        answer:
          "Waiting can be included in the arrangement, but it affects the quotation. Tell us the expected schedule so waiting time is priced clearly.",
      },
    ],
    seoTitle: "Corporate Car Rental in Kathmandu",
    seoDescription:
      "Chauffeur-driven corporate transport in Kathmandu and across Nepal. Private vehicles for meetings, client visits, conferences and multi-day business itineraries.",
  },
  {
    slug: "wedding-event-transport",
    name: "Wedding & Event Transport",
    navLabel: "Weddings & Events",
    icon: "wedding",
    summary:
      "Private chauffeur-driven vehicles for weddings, receptions and special occasions, planned around your schedule.",
    intro:
      "Transport should make the day easier, not add to the list. We arrange vehicles and drivers for wedding parties, guest movement and event logistics. Share the schedule, number of guests and route, and we will confirm what is available.",
    image: "/images/boudhanath-stupa.jpg",
    imageAlt: "Boudhanath Stupa in Kathmandu",
    imageCaption:
      "Illustrative image: Kathmandu. Event transport availability is confirmed for your dates.",
    highlights: [
      "Event-day itinerary planning",
      "Multiple vehicles on request",
      "Driver coordination with your event team",
      "Decoration discussed as a separate requirement",
    ],
    included: [
      "Vehicle and chauffeur for the agreed event schedule",
      "Coordination of pickup times and locations",
      "Pre-event review of the route and timing",
      "Written quotation covering the confirmed plan",
    ],
    suitedTo: [
      "Wedding parties and family guests",
      "Engagement and reception transport",
      "Special-occasion arrivals",
      "Guest movement between venues",
    ],
    goodToKnow: [
      "Decoration, ribbons and floral work are not included unless specifically quoted.",
      "Early pickup and late return may affect the quotation.",
      "Guest movement works best with a clear timetable.",
      "Book once your event timings are reasonably fixed.",
    ],
    faqs: [
      {
        question: "Can you arrange several cars for wedding guests?",
        answer:
          "Yes, multiple vehicles can be requested subject to availability. Share the guest count, pickup points and timetable so we can propose a workable plan.",
      },
      {
        question: "Is wedding decoration included?",
        answer:
          "Decoration is not included by default. If you need a decorated vehicle, tell us when you inquire and we will confirm whether it can be arranged and how it affects the quotation.",
      },
      {
        question: "Can the driver stay for the full event?",
        answer:
          "Waiting can usually be arranged as part of the event booking. The quotation will reflect the expected duration and any late return.",
      },
      {
        question: "How early should we book?",
        answer:
          "Earlier is better, especially during peak wedding and festival periods. Send your date and schedule and we will confirm availability.",
      },
    ],
    seoTitle: "Wedding Car Rental in Kathmandu",
    seoDescription:
      "Request wedding and event transport in Kathmandu with a chauffeur. Private vehicles for wedding parties, receptions, guest movement and special occasions.",
  },
  {
    slug: "intercity-travel",
    name: "Intercity Travel",
    navLabel: "Intercity Travel",
    icon: "intercity",
    summary:
      "Private point-to-point travel between Kathmandu, Pokhara, Chitwan, Lumbini and other destinations in Nepal.",
    intro:
      "A private car gives you control over departure time, stops and luggage. We arrange chauffeur-driven intercity travel on routes we can genuinely serve, with a clear quotation based on your route and vehicle category. Road, weather and traffic conditions can change travel time.",
    image: "/images/prithvi-highway-malekhu.jpg",
    imageAlt: "A hillside highway in Nepal",
    imageCaption:
      "Illustrative image: Prithvi Highway at Malekhu. Photography credited on our photography credits page.",
    highlights: [
      "Point-to-point or multi-stop journeys",
      "Departure time planned around you",
      "Luggage and passenger needs matched to the vehicle",
      "Route advice before you confirm",
    ],
    included: [
      "Vehicle and chauffeur for the agreed route",
      "Pickup and drop-off at the confirmed locations",
      "Pre-trip route and timing discussion",
      "Written quotation including any overnight arrangements",
    ],
    suitedTo: [
      "Travellers moving between cities",
      "Families with luggage",
      "Guests combining several destinations",
      "Travellers who prefer not to fly or take a bus",
    ],
    goodToKnow: [
      "Travel times are estimates, not guarantees.",
      "Some routes are affected by seasonal road conditions.",
      "We confirm the route and any stops in writing before travel.",
      "Overnight driver arrangements are quoted when needed.",
    ],
    faqs: [
      {
        question: "Which intercity routes do you serve?",
        answer:
          "We list several routes on the website, including Kathmandu to Pokhara, Chitwan, Lumbini and Muktinath. Service on a route is confirmed for your dates before booking.",
      },
      {
        question: "Can we stop along the way?",
        answer:
          "Stops can usually be planned into the journey. Tell us where you would like to stop so the timing and quotation can reflect it.",
      },
      {
        question: "Is the travel time fixed?",
        answer:
          "No. Traffic, road works, weather and festival periods can change journey times. We plan realistically but cannot guarantee an exact arrival time.",
      },
      {
        question: "Can we travel one way and return later?",
        answer:
          "Yes. Tell us both dates and whether the vehicle should wait or return. We will quote the arrangement that fits your itinerary.",
      },
    ],
    seoTitle: "Intercity Car Travel in Nepal",
    seoDescription:
      "Private chauffeur-driven intercity travel in Nepal. Request a car between Kathmandu, Pokhara, Chitwan, Lumbini and other destinations with a clear written quotation.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
