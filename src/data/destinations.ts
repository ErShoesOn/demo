import type { Faq } from "@/data/types";

export type DestinationHighlight = {
  title: string;
  text: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  intro: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  highlights: DestinationHighlight[];
  travelNotes: string[];
  bestFor: string[];
  suggestedDuration: string;
  routeSlug?: string;
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const destinations: Destination[] = [
  {
    slug: "kathmandu",
    name: "Kathmandu",
    region: "Kathmandu Valley",
    summary:
      "Nepal's capital and our primary service hub, with heritage sites, business districts and onward road connections.",
    intro: [
      "Kathmandu is where most journeys begin. The city combines a dense historic core with modern hotels, offices and the airport, and it is the natural base for exploring the Kathmandu Valley.",
      "Traffic and narrow streets can make a private chauffeur more practical than driving yourself, especially if your schedule includes several stops in a day. We arrange city travel, airport transfers and departures to destinations across Nepal.",
    ],
    image: "/images/kathmandu-durbar-square.jpg",
    imageAlt: "Historic temple architecture in Kathmandu Durbar Square",
    imageCaption:
      "Kathmandu Durbar Square. Photo: Vyacheslav Argenberg / UnpetitproleX, CC BY 4.0, via Wikimedia Commons.",
    highlights: [
      {
        title: "Kathmandu Durbar Square",
        text: "Historic palace and temple architecture in the old city, best visited with time to walk and absorb the surroundings.",
      },
      {
        title: "Boudhanath Stupa",
        text: "One of the valley's most recognisable landmarks, surrounded by monasteries, shops and rooftop cafés.",
      },
      {
        title: "Swayambhunath",
        text: "A hilltop stupa with valley views. The climb involves steps, so allow time and consider the weather.",
      },
      {
        title: "Patan and Bhaktapur",
        text: "Historic neighbouring cities with their own durbar squares, lanes and craft traditions, reachable as day trips.",
      },
    ],
    travelNotes: [
      "Allow extra time for traffic during morning and evening peaks.",
      "Some heritage areas have pedestrian zones and limited vehicle access.",
      "Festival days can bring road closures, processions and heavy crowds.",
      "Airport transfers should include your flight details and luggage count.",
    ],
    bestFor: [
      "Airport arrivals and departures",
      "Business travel and meetings",
      "Heritage and city day tours",
      "Starting a longer Nepal itinerary",
    ],
    suggestedDuration: "1–3 days",
    faqs: [
      {
        question: "Do you provide car rental in Kathmandu?",
        answer:
          "Yes. We arrange chauffeur-driven vehicles for airport transfers, city travel, business itineraries and day trips in and around Kathmandu. Send your dates and plan for availability and a quotation.",
      },
      {
        question: "Can I visit several heritage sites in one day?",
        answer:
          "It depends on the sites and traffic. A realistic plan usually combines two or three nearby locations. Share your priorities and we will suggest a practical order.",
      },
      {
        question: "Is a driver useful in Kathmandu?",
        answer:
          "Many visitors find it easier to have a driver for multiple stops, unfamiliar roads and parking. It also lets you focus on the visit rather than navigation.",
      },
    ],
    seoTitle: "Car Rental in Kathmandu with Driver",
    seoDescription:
      "Request a chauffeur-driven car rental in Kathmandu for airport transfers, city travel, heritage visits and business itineraries. Availability confirmed on inquiry.",
  },
  {
    slug: "pokhara",
    name: "Pokhara",
    region: "Gandaki Province",
    summary:
      "A lakeside city and gateway to the Annapurna region, popular for views, outdoor activities and a slower pace.",
    intro: [
      "Pokhara sits beside Phewa Lake with the Annapurna range in the distance. It is a popular base for trekking, paragliding, boating and day trips, and a natural addition to a Kathmandu itinerary.",
      "The drive from Kathmandu is long but scenic. A private car lets you choose an early departure, plan meal and rest stops, and travel at your own pace. Road conditions and travel time can vary, so we confirm the plan before departure.",
    ],
    image: "/images/pokhara-phewa-lake.jpg",
    imageAlt: "Phewa Lake in Pokhara with hills in the background",
    imageCaption:
      "Phewa Lake, Pokhara. Photo: Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons.",
    highlights: [
      {
        title: "Phewa Lake",
        text: "The centrepiece of Pokhara, with lakeside walks, boating and views that change through the day.",
      },
      {
        title: "Sarangkot",
        text: "A hilltop viewpoint popular for sunrise and panoramic views. Weather and visibility are never guaranteed.",
      },
      {
        title: "World Peace Pagoda",
        text: "A hilltop stupa on the south side of the lake, reached by road or a walk, with wide valley views.",
      },
      {
        title: "Caves and waterfalls",
        text: "Several natural attractions lie close to the city and can be combined in a half-day outing.",
      },
    ],
    travelNotes: [
      "The Kathmandu–Pokhara drive is typically a full-day journey with stops; confirm timing for your date.",
      "Mountain views depend on weather and seasonal haze.",
      "Trekking permits and guided activities are separate from transport.",
      "Book onward travel with buffer time if you have a flight or fixed appointment.",
    ],
    bestFor: [
      "Lakeside breaks and family trips",
      "Outdoor activities and trekking transfers",
      "Combining with Kathmandu and Chitwan",
      "Travellers who prefer road travel to a short flight",
    ],
    suggestedDuration: "3–5 days",
    routeSlug: "kathmandu-to-pokhara",
    faqs: [
      {
        question: "How long does it take to drive from Kathmandu to Pokhara?",
        answer:
          "The journey typically takes most of a day, depending on traffic, road conditions and stops. We plan a realistic departure time and confirm the arrangement before travel.",
      },
      {
        question: "Can you pick us up in Kathmandu and drop us in Pokhara?",
        answer:
          "Yes. Point-to-point transfers can be requested, subject to availability. Tell us the date, passenger count and luggage so we can quote the journey.",
      },
      {
        question: "Do you provide a car for local sightseeing in Pokhara?",
        answer:
          "Yes. We can arrange a private vehicle and driver for local sightseeing. Share the places you want to visit and the time you have available.",
      },
    ],
    seoTitle: "Car Rental in Pokhara with Driver",
    seoDescription:
      "Request a private car with a driver in Pokhara for lake visits, viewpoints and onward travel. Arrange Kathmandu to Pokhara transfers and local sightseeing on inquiry.",
  },
  {
    slug: "chitwan",
    name: "Chitwan",
    region: "Bagmati Province",
    summary:
      "A lowland region known for Chitwan National Park, wildlife, rivers and Tharu culture.",
    intro: [
      "Chitwan offers a different side of Nepal: warmer lowlands, riverine forest and the chance to explore Chitwan National Park. Sauraha is a common base for park activities and river experiences.",
      "A private vehicle is useful for reaching Chitwan from Kathmandu or Pokhara and for moving between lodges and activity points. Park activities are arranged separately by the lodges and licensed guides.",
    ],
    image: "/images/chitwan-rapti-river.jpg",
    imageAlt: "The Rapti River in Chitwan National Park",
    imageCaption:
      "Chitwan National Park, Rapti River. Photo: Silu0211, CC BY-SA 4.0, via Wikimedia Commons.",
    highlights: [
      {
        title: "Chitwan National Park",
        text: "Nepal's first national park, known for rhinos, deer, birdlife and carefully managed safari experiences.",
      },
      {
        title: "Rapti River",
        text: "A quiet river setting for walks, sunsets and canoe trips arranged through local operators.",
      },
      {
        title: "Tharu culture",
        text: "Traditional villages and cultural performances around Sauraha add context to the region.",
      },
      {
        title: "Birdwatching",
        text: "The park and surrounding wetlands attract a wide range of species, especially in the cooler months.",
      },
    ],
    travelNotes: [
      "Park permits and safari activities are separate from transport and should be arranged through your lodge or a licensed operator.",
      "Monsoon conditions can affect roads and activity availability.",
      "Insect protection and appropriate clothing are sensible for jungle areas.",
      "Keep enough buffer time for the Kathmandu–Chitwan drive.",
    ],
    bestFor: [
      "Wildlife and nature-focused trips",
      "Families with older children",
      "Combining Kathmandu and Pokhara",
      "Travellers interested in Tharu culture",
    ],
    suggestedDuration: "2–4 days",
    routeSlug: "kathmandu-to-chitwan",
    faqs: [
      {
        question: "Can I go from Kathmandu to Chitwan by private car?",
        answer:
          "Yes, this can be arranged subject to availability. The drive takes several hours, so we plan a realistic departure and confirm the vehicle based on your passenger and luggage count.",
      },
      {
        question: "Are safaris included in the car rental?",
        answer:
          "No. Park activities, guides and permits are separate. Your lodge or a licensed local operator can help arrange them.",
      },
      {
        question: "Is Chitwan suitable for a short stop?",
        answer:
          "Two nights is a common starting point, but the right duration depends on your interests and travel time. We can help fit transport around your lodge's schedule.",
      },
    ],
    seoTitle: "Private Car to Chitwan National Park",
    seoDescription:
      "Arrange a private chauffeur-driven car to Chitwan from Kathmandu or Pokhara. Travel to Sauraha and Chitwan National Park with a written quotation and confirmed plan.",
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    region: "Lumbini Province",
    summary:
      "The birthplace of the Buddha and a UNESCO World Heritage Site, with a peaceful monastic zone.",
    intro: [
      "Lumbini is one of Nepal's most significant heritage destinations. The sacred garden, Maya Devi Temple and surrounding monastic zone attract pilgrims and travellers from around the world.",
      "It is a long road journey from Kathmandu, often combined with Chitwan. A private car allows you to plan rest stops and move between the site's different areas, which are spread out and best explored with time.",
    ],
    image: "/images/lumbini-maya-devi.jpg",
    imageAlt: "Maya Devi Temple in Lumbini",
    imageCaption:
      "Maya Devi Temple, Lumbini. Photo: Rangan Datta Wiki, CC BY-SA 4.0, via Wikimedia Commons.",
    highlights: [
      {
        title: "Maya Devi Temple",
        text: "The sacred heart of Lumbini, marking the traditional birthplace of the Buddha.",
      },
      {
        title: "Monastic zone",
        text: "Monasteries built by different countries and traditions, spread across a calm, walkable area.",
      },
      {
        title: "Ashoka Pillar",
        text: "An important historical marker within the sacred garden.",
      },
      {
        title: "Peace Pagoda",
        text: "A landmark stupa that adds to the contemplative atmosphere of the site.",
      },
    ],
    travelNotes: [
      "The road journey from Kathmandu is long; an overnight stop can make it more comfortable.",
      "The site is spread out and can be hot, so plan shade, water and rest breaks.",
      "Religious sites may have specific dress and behaviour expectations.",
      "Check current opening arrangements and guide availability before you travel.",
    ],
    bestFor: [
      "Pilgrimage and heritage travel",
      "Slow-paced cultural itineraries",
      "Combining with Chitwan",
      "Travellers interested in Buddhist history",
    ],
    suggestedDuration: "2–3 days",
    routeSlug: "kathmandu-to-lumbini",
    faqs: [
      {
        question: "Can I visit Lumbini from Kathmandu by car?",
        answer:
          "Yes, it can be arranged, but it is a long drive. Many travellers break the journey or combine it with Chitwan. Share your dates and we will propose a realistic plan.",
      },
      {
        question: "Do I need a guide in Lumbini?",
        answer:
          "A guide is not mandatory, but a local guide can add context to the site. We can discuss transport and timing; guiding is arranged separately with a qualified provider.",
      },
      {
        question: "Is Lumbini a good family destination?",
        answer:
          "It can be, especially for families interested in history and culture. The site is spread out, so plan for walking, heat and rest breaks.",
      },
    ],
    seoTitle: "Private Car to Lumbini from Kathmandu",
    seoDescription:
      "Arrange a private car with a driver to Lumbini, the birthplace of the Buddha. Plan a comfortable road journey from Kathmandu or Chitwan with Majestic Rentals.",
  },
  {
    slug: "muktinath",
    name: "Muktinath",
    region: "Mustang",
    summary:
      "A high-altitude pilgrimage site in Mustang, reached through dramatic mountain scenery and changing road conditions.",
    intro: [
      "Muktinath is a sacred site for Hindus and Buddhists, set in the dry, high landscape of Mustang. The journey is as memorable as the destination, passing through river valleys, apple orchards and mountain villages.",
      "Road conditions and altitude make planning important. We discuss the route, season, overnight stops and vehicle suitability before confirming a trip. This is not a destination to rush.",
    ],
    image: "/images/muktinath-temple.jpg",
    imageAlt: "Muktinath Temple in Mustang, Nepal",
    imageCaption:
      "Muktinath Temple, Mustang. Photo: Nepal Trek Adventures, CC BY 4.0, via Wikimedia Commons.",
    highlights: [
      {
        title: "Muktinath Temple",
        text: "A revered pilgrimage site with the famous 108 water spouts and a mountain setting.",
      },
      {
        title: "Jomsom and Kagbeni",
        text: "Windy valley settlements that make natural stops on the route, with distinct Mustang character.",
      },
      {
        title: "Marpha",
        text: "A village known for apple orchards and a compact, whitewashed streetscape.",
      },
      {
        title: "Mountain scenery",
        text: "Views of the Annapurna and Dhaulagiri ranges, subject to weather and visibility.",
      },
    ],
    travelNotes: [
      "Altitude can affect some travellers. Plan a gradual journey and allow time to acclimatise.",
      "Road and weather conditions can change quickly; flexibility is essential.",
      "Check current permit requirements for your nationality and route before travelling.",
      "The best route and season depend on your starting point and available time.",
    ],
    bestFor: [
      "Pilgrimage travel",
      "Travellers comfortable with long mountain drives",
      "Photography and mountain scenery",
      "Multi-day itineraries through Mustang",
    ],
    suggestedDuration: "4–6 days",
    routeSlug: "kathmandu-to-muktinath",
    faqs: [
      {
        question: "Can I reach Muktinath by private car?",
        answer:
          "It can be reached by road, subject to weather and road conditions. The trip is long and usually involves overnight stops. Share your dates and we will advise on a realistic plan.",
      },
      {
        question: "Do I need a permit for Muktinath?",
        answer:
          "Permit requirements depend on your nationality and the exact route. Check current rules with the relevant authorities before travelling; we can point you to the official sources.",
      },
      {
        question: "Is altitude sickness a risk?",
        answer:
          "Muktinath sits at high altitude. Some travellers feel the effects, so take the ascent gradually and seek medical advice if you have concerns. Travel insurance is strongly recommended.",
      },
    ],
    seoTitle: "Kathmandu to Muktinath Private Car",
    seoDescription:
      "Plan a private chauffeur-driven journey from Kathmandu to Muktinath. Discuss route, season, overnight stops and vehicle suitability with Majestic Rentals.",
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
