import type { Faq } from "@/data/types";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleSource = {
  label: string;
  href: string;
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  intro: string;
  sections: ArticleSection[];
  faqs?: Faq[];
  sources: ArticleSource[];
};

export const articleCategories = [
  "Travel planning",
  "Airport transfers",
  "Route guides",
  "Electric vehicles",
] as const;

export const articles: Article[] = [
  {
    slug: "choosing-the-right-vehicle-for-nepal",
    title: "How to Choose the Right Vehicle for Your Nepal Trip",
    description:
      "A practical guide to choosing between a sedan, hatchback, SUV, premium vehicle or EV for travel in Nepal, based on passengers, luggage and route.",
    category: "Travel planning",
    readingTime: "6 min read",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    author: "Majestic Rentals Editorial Team",
    image: "/images/hero-road.jpg",
    imageAlt: "A highway through green hills in Nepal",
    imageCaption:
      "Prithvi Highway, Nepal. Photo: Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons.",
    intro:
      "The right vehicle is not the biggest one. It is the one that fits your passengers, luggage, route and comfort needs without wasting space or budget. This guide explains the questions we ask before recommending a category.",
    sections: [
      {
        heading: "Start with the real passenger count",
        paragraphs: [
          "Count everyone who will travel, including children. A vehicle that seats four adults may feel very different after a child seat, a guide or a colleague joins the trip.",
          "If you are travelling as a group, remember that luggage often takes more space than people expect. A full passenger load can leave surprisingly little room for bags.",
        ],
      },
      {
        heading: "Be honest about luggage",
        paragraphs: [
          "Tell us the number of bags and their approximate size, not just the number of passengers. Large suitcases, camera bags, trekking packs and child equipment all change the vehicle you need.",
          "A sedan may be perfect for two travellers with cabin bags and tight for four travellers with large suitcases. It is better to discuss this before arrival than to discover it at the airport.",
        ],
      },
      {
        heading: "Match the vehicle to the route",
        paragraphs: [
          "City travel in Kathmandu rewards a compact, comfortable vehicle. Long intercity journeys and mountain routes may call for more space, better ground clearance and a vehicle suited to the season.",
          "Road conditions change. A route that is straightforward in one season can be slower or rougher in another, so the vehicle recommendation should reflect when you are travelling.",
        ],
        bullets: [
          "City days and short transfers: a sedan or hatchback is often sufficient.",
          "Families and longer routes: an SUV may be more comfortable.",
          "Special occasions: a premium vehicle can be appropriate if available.",
          "EV interest: plan around charging and realistic daily distances.",
        ],
      },
      {
        heading: "Think about comfort, not just capacity",
        paragraphs: [
          "On a long drive, seat comfort, air conditioning, legroom and luggage access matter. The cheapest category is not always the best value if it makes a full day on the road uncomfortable.",
          "If you have mobility needs, tell us early. Accessible vehicles and equipment are not something we can assume are available without checking.",
        ],
      },
      {
        heading: "Ask what is actually included",
        paragraphs: [
          "A quotation should be clear about the vehicle, driver, fuel, waiting time, overnight arrangements, taxes and any exclusions. Ask before you confirm if something is unclear.",
          "We confirm vehicle availability rather than publishing a live inventory. That is intentional: a category on a website does not guarantee a specific model on a specific date.",
        ],
      },
      {
        heading: "When to ask for advice",
        paragraphs: [
          "If you are unsure, send us the route, dates, passenger count and luggage. We will recommend a category and explain the trade-offs. We would rather tell you that a vehicle is not suitable than have you discover it on the road.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an SUV always better in Nepal?",
        answer:
          "No. An SUV is useful for rough roads, mountain routes and more luggage, but a sedan can be more comfortable and practical for city travel. The right choice depends on your itinerary.",
      },
      {
        question: "How much luggage can a sedan carry?",
        answer:
          "It varies by vehicle and bag size. As a guide, a sedan usually suits two to three medium bags. Send us the exact count and we will confirm.",
      },
      {
        question: "Can you provide a vehicle with more than five seats?",
        answer:
          "Larger vehicles may be available on request, depending on the group size and route. Share the passenger count and luggage so we can confirm a suitable option.",
      },
    ],
    sources: [
      {
        label: "Nepal Tourism Board",
        href: "https://ntb.gov.np/",
        note: "Official travel and destination information for Nepal.",
      },
      {
        label: "Department of Roads, Nepal",
        href: "https://dor.gov.np/",
        note: "Road network information and updates.",
      },
    ],
  },
  {
    slug: "kathmandu-airport-transfer-guide",
    title: "Kathmandu Airport Transfer: A Practical Arrival Guide",
    description:
      "What to prepare before an airport pickup at Tribhuvan International Airport, from flight details and luggage to traffic buffers and meeting arrangements.",
    category: "Airport transfers",
    readingTime: "5 min read",
    publishedAt: "2026-10-27",
    updatedAt: "2026-10-27",
    author: "Majestic Rentals Editorial Team",
    image: "/images/kathmandu-airport.jpg",
    imageAlt: "Aircraft at Tribhuvan International Airport in Kathmandu",
    imageCaption:
      "Tribhuvan International Airport. Photo: Bijay Chaurasia, CC BY-SA 4.0, via Wikimedia Commons.",
    intro:
      "An airport transfer is simple when the details are clear. A few minutes spent sharing the right information before you fly can prevent a stressful arrival in an unfamiliar city.",
    sections: [
      {
        heading: "Share the full flight details",
        paragraphs: [
          "The airline, flight number, scheduled arrival time and terminal matter. If your flight is delayed or rescheduled, send the update when you can.",
          "International and domestic arrivals can have different meeting points. Tell us which terminal you are using so the pickup instructions are accurate.",
        ],
      },
      {
        heading: "Describe your luggage accurately",
        paragraphs: [
          "Luggage determines the vehicle. Two large suitcases are not the same as two cabin bags, and a family with four large bags may need a larger vehicle than the passenger count alone suggests.",
          "If you are travelling with sports equipment, a stroller, mobility equipment or unusually large items, mention it before the vehicle is confirmed.",
        ],
      },
      {
        heading: "Plan for airport traffic",
        paragraphs: [
          "Kathmandu traffic can be unpredictable. Allow a realistic buffer between landing, immigration, baggage collection and your onward journey.",
          "If you have a tight connection, a meeting or a domestic flight, tell us. We can discuss a plan that includes the right amount of buffer rather than pretending the road will be clear.",
        ],
      },
      {
        heading: "Confirm the meeting arrangement",
        paragraphs: [
          "Airport rules and terminal layouts can change. Once your transfer is confirmed, we share the driver details and the agreed meeting point.",
          "Make sure the phone number you provide is reachable after you land. If you will not have a local SIM immediately, tell us another way to coordinate.",
        ],
      },
      {
        heading: "Decide what happens after the airport",
        paragraphs: [
          "Some guests go straight to a hotel. Others continue directly to Pokhara, Chitwan or another destination. Both can be requested, but the second needs a realistic plan for the day.",
          "If you are continuing by road after a long flight, consider whether an overnight stop in Kathmandu would make the journey more comfortable.",
        ],
      },
    ],
    faqs: [
      {
        question: "How early should I book an airport transfer?",
        answer:
          "As soon as your flight is confirmed is ideal, especially during peak travel periods. You can still ask at short notice, but availability may be limited.",
      },
      {
        question: "Can the driver wait if my flight is delayed?",
        answer:
          "We coordinate around updated flight information. Waiting-time terms are set out in your quotation, so ask us to confirm them before you book.",
      },
      {
        question: "Can I go directly from the airport to Pokhara?",
        answer:
          "It can be arranged if the timing is realistic. Share your arrival time and we will advise on the best plan, including whether an overnight stop is sensible.",
      },
    ],
    sources: [
      {
        label: "Tribhuvan International Airport",
        href: "https://www.tiairport.com.np/",
        note: "Official airport information.",
      },
      {
        label: "Nepal Tourism Board",
        href: "https://ntb.gov.np/",
        note: "Official travel information for Nepal.",
      },
    ],
  },
  {
    slug: "kathmandu-to-pokhara-private-car",
    title: "Kathmandu to Pokhara by Private Car: What to Plan For",
    description:
      "A realistic guide to the Kathmandu–Pokhara road journey, including departure timing, rest stops, luggage, road conditions and what to confirm before you travel.",
    category: "Route guides",
    readingTime: "7 min read",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-02",
    author: "Majestic Rentals Editorial Team",
    image: "/images/pokhara-phewa-lake.jpg",
    imageAlt: "Phewa Lake in Pokhara with hills in the background",
    imageCaption:
      "Phewa Lake, Pokhara. Photo: Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons.",
    intro:
      "The road from Kathmandu to Pokhara is one of Nepal's best-known journeys. It is also long enough that a little planning makes a real difference to how the day feels.",
    sections: [
      {
        heading: "Treat it as a full-day journey",
        paragraphs: [
          "The drive typically takes most of a day once traffic, road conditions and rest stops are included. It is not a short hop, even though the distance may look modest on a map.",
          "An early start is usually the most comfortable choice. It gives you margin for delays and leaves some daylight at the other end.",
        ],
      },
      {
        heading: "Choose your vehicle for the whole day",
        paragraphs: [
          "You will spend hours in the vehicle, so comfort matters. A sedan can work for two travellers with light luggage; an SUV may be better for a family, more bags or a passenger who prefers a higher seating position.",
          "Share the exact luggage count. Boot space is often the limiting factor, especially when the rear seat is full.",
        ],
      },
      {
        heading: "Plan a few sensible stops",
        paragraphs: [
          "Roadside breaks make the journey safer and more enjoyable. Riverside towns and highway stops are common places to pause for tea or a meal.",
          "If you want to detour to a place such as Bandipur, tell us in advance. A detour affects timing and may change the quotation.",
        ],
      },
      {
        heading: "Expect the unexpected",
        paragraphs: [
          "Road works, weather, festival traffic and accidents can all affect the journey. We plan realistically, but we cannot guarantee an exact arrival time.",
          "If you have a fixed appointment, flight or event in Pokhara, build in a generous buffer or consider flying one way.",
        ],
      },
      {
        heading: "Decide about the return",
        paragraphs: [
          "Will the same vehicle bring you back, or will you return by flight or another arrangement? The answer changes the quotation and the vehicle planning.",
          "If you are continuing to Chitwan or another destination after Pokhara, share the whole route so we can plan the sequence rather than quoting each leg in isolation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the Kathmandu to Pokhara drive?",
        answer:
          "It typically takes around 6–8 hours, depending on traffic, road conditions and stops. Treat any estimate as a planning guide rather than a guarantee.",
      },
      {
        question: "Is it better to fly or drive?",
        answer:
          "Flying is faster but adds airport time and can be affected by weather. Driving gives you control over stops and luggage. The better choice depends on your schedule and budget.",
      },
      {
        question: "Can we do the drive at night?",
        answer:
          "We plan departures around safety and road conditions. Night driving on unfamiliar highways is not always advisable, so we will discuss the timing with you before confirming.",
      },
    ],
    sources: [
      {
        label: "Department of Roads, Nepal",
        href: "https://dor.gov.np/",
        note: "Road network and condition information.",
      },
      {
        label: "Nepal Tourism Board",
        href: "https://ntb.gov.np/",
        note: "Official destination information.",
      },
    ],
  },
  {
    slug: "electric-vehicle-travel-nepal",
    title: "Electric Vehicle Travel in Nepal: Questions to Ask Before Booking",
    description:
      "A practical checklist for planning an EV trip in Nepal, covering range, charging, route suitability, load and what to confirm with the rental company.",
    category: "Electric vehicles",
    readingTime: "6 min read",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    author: "Majestic Rentals Editorial Team",
    image: "/images/prithvi-highway-malekhu.jpg",
    imageAlt: "A hillside road in Nepal",
    imageCaption:
      "Prithvi Highway at Malekhu. Photo: Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons.",
    intro:
      "Electric vehicles are a comfortable and quiet way to travel, but they reward planning. In Nepal, charging availability and road conditions vary, so the right questions matter more than the brochure range.",
    sections: [
      {
        heading: "Ask about real-world range, not just the quoted figure",
        paragraphs: [
          "Manufacturer range figures are usually measured under favourable conditions. Hills, heat, air conditioning, passenger load and driving style can all reduce the distance a vehicle covers between charges.",
          "Ask how the available vehicle performs on the kind of route you are planning, not just on a flat city loop.",
        ],
      },
      {
        heading: "Confirm the charging plan",
        paragraphs: [
          "For city travel, charging is usually manageable. For intercity trips, the location, compatibility and reliability of charging stops matter.",
          "Ask who arranges charging, whether charging time is included in the itinerary and what happens if a charger is unavailable or slow.",
        ],
        bullets: [
          "Which charging standards does the vehicle use?",
          "Where are the planned charging stops on your route?",
          "How long should each stop take?",
          "Is there a backup option if a charger is out of service?",
        ],
      },
      {
        heading: "Be realistic about time",
        paragraphs: [
          "An EV journey can take longer than the same trip in a petrol or diesel vehicle. That is not a problem if the schedule allows for it, but it is a problem if you are rushing to a flight or a fixed appointment.",
          "If your itinerary is tight, a conventional vehicle may be the more practical choice. We would rather say that upfront.",
        ],
      },
      {
        heading: "Match the vehicle to the load",
        paragraphs: [
          "Passengers and luggage affect range. A vehicle that is comfortable for two travellers with light bags may be less suitable for a full family load on a long route.",
          "Tell the rental company the full passenger and luggage count, and ask whether the vehicle can handle the route with that load.",
        ],
      },
      {
        heading: "Check what happens when plans change",
        paragraphs: [
          "Charging infrastructure and road conditions can change. Ask how the operator handles delays, unexpected charging stops and itinerary changes.",
          "A clear written quotation should explain what is included, what is not, and how additional time or distance is handled.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are electric vehicles available with a driver?",
        answer:
          "At Majestic Rentals, EV rentals are chauffeur-driven only. Availability depends on the vehicle, dates and route. We do not offer self-drive EV rentals.",
      },
      {
        question: "Can an EV handle a mountain route?",
        answer:
          "Some routes may be suitable, depending on the vehicle, season and charging options. We review each request individually and will only confirm a plan we believe is practical.",
      },
      {
        question: "Is EV travel cheaper?",
        answer:
          "It depends on the vehicle, route, charging arrangements and duration. Ask for a written quotation rather than assuming an EV will always cost less.",
      },
    ],
    sources: [
      {
        label: "Nepal Electricity Authority",
        href: "https://www.nea.org.np/",
        note: "Official information on electricity in Nepal.",
      },
      {
        label: "Department of Roads, Nepal",
        href: "https://dor.gov.np/",
        note: "Road network information and updates.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
