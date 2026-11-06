import type { Faq } from "@/data/types";

export type RouteGuide = {
  slug: string;
  from: string;
  to: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  distance: string;
  duration: string;
  road: string;
  intro: string[];
  stops: { name: string; text: string }[];
  planning: string[];
  bestTime: string;
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const routes: RouteGuide[] = [
  {
    slug: "kathmandu-to-pokhara",
    from: "Kathmandu",
    to: "Pokhara",
    title: "Kathmandu to Pokhara by Private Car",
    summary:
      "A full-day road journey through the Prithvi Highway corridor, with river valleys, hillside towns and rest stops.",
    image: "/images/pokhara-phewa-lake.jpg",
    imageAlt: "Phewa Lake in Pokhara",
    imageCaption:
      "Phewa Lake, Pokhara. Photo: Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons.",
    distance: "Approx. 200 km",
    duration: "Typically 6–8 hours, depending on traffic, road conditions and stops",
    road: "Prithvi Highway corridor",
    intro: [
      "The drive from Kathmandu to Pokhara is one of Nepal's most established road journeys. It follows river valleys and hillsides for much of the route, passing towns and roadside stops before descending into the Pokhara valley.",
      "A private car lets you set an early departure, choose where to stop and travel with your own luggage and group. The road can be slow in places, and travel time should be treated as an estimate rather than a guarantee.",
    ],
    stops: [
      {
        name: "Malekhu",
        text: "A common riverside stop for a short break and refreshments on the way out of the Kathmandu Valley.",
      },
      {
        name: "Mugling",
        text: "A junction town where the highway meets routes toward Chitwan and other parts of the country.",
      },
      {
        name: "Bandipur",
        text: "A hilltop historic town that can be visited with a detour if your schedule allows.",
      },
      {
        name: "Pokhara lakeside",
        text: "The final approach to Pokhara, with the lake and Annapurna range shaping the arrival.",
      },
    ],
    planning: [
      "Start early to reduce the chance of arriving after dark.",
      "Allow extra time during festival periods, monsoon season and road works.",
      "Confirm the exact pickup address and luggage count before departure.",
      "If you have a flight or fixed appointment in Pokhara, add a generous buffer.",
    ],
    bestTime:
      "The route can be travelled year-round, but conditions vary by season. Check current road and weather reports before departure.",
    faqs: [
      {
        question: "Can I do Kathmandu to Pokhara by car in one day?",
        answer:
          "Yes, many travellers do it in one day. It is a long journey, so an early start and realistic expectations about traffic and stops are important.",
      },
      {
        question: "Can we stop at Bandipur on the way?",
        answer:
          "A Bandipur detour can be planned if your schedule allows. Tell us when you inquire so we can reflect the extra time in the itinerary and quotation.",
      },
      {
        question: "Is the road suitable for a sedan?",
        answer:
          "The main highway is generally suitable for a sedan, but the best vehicle depends on passenger and luggage load. For extra comfort on the long journey, an SUV may be preferable.",
      },
      {
        question: "Can you return us to Kathmandu later?",
        answer:
          "Yes. Tell us your return date and whether you want the same vehicle to wait or a separate pickup. We will quote the arrangement clearly.",
      },
    ],
    seoTitle: "Kathmandu to Pokhara Private Car",
    seoDescription:
      "Plan a private car from Kathmandu to Pokhara with a chauffeur. Route guidance, typical travel time, suggested stops and an inquiry form for a written quotation.",
  },
  {
    slug: "kathmandu-to-chitwan",
    from: "Kathmandu",
    to: "Chitwan",
    title: "Kathmandu to Chitwan by Private Car",
    summary:
      "A road journey from the Kathmandu Valley to the lowlands around Sauraha and Chitwan National Park.",
    image: "/images/chitwan-rapti-river.jpg",
    imageAlt: "Rapti River in Chitwan National Park",
    imageCaption:
      "Chitwan National Park, Rapti River. Photo: Silu0211, CC BY-SA 4.0, via Wikimedia Commons.",
    distance: "Approx. 150 km to Sauraha",
    duration: "Typically 5–7 hours, depending on traffic, road conditions and stops",
    road: "Prithvi Highway and onward lowland roads",
    intro: [
      "Chitwan is a natural addition to a Kathmandu or Pokhara itinerary. The drive descends from the valley into warmer lowlands, past towns and rivers, before reaching the Sauraha area.",
      "A private car is useful for arriving at your lodge with luggage and for moving between activities. Park safaris and permits are arranged separately by your lodge or a licensed operator.",
    ],
    stops: [
      {
        name: "Malekhu",
        text: "A practical early stop for a break before the highway continues west.",
      },
      {
        name: "Mugling",
        text: "The turn-off point for the road south toward Chitwan.",
      },
      {
        name: "Narayanghat",
        text: "A busy lowland city and a useful landmark on the approach to Chitwan.",
      },
      {
        name: "Sauraha",
        text: "A common base for lodges, park activities and river experiences.",
      },
    ],
    planning: [
      "Share your lodge location so the drop-off point is clear.",
      "Allow extra time in the lowlands during hot weather and festival periods.",
      "Book park activities separately and leave buffer time around your transfer.",
      "Pack for warmer, insect-prone conditions.",
    ],
    bestTime:
      "The route is used year-round. Monsoon conditions can affect roads and park activities, so check before travelling.",
    faqs: [
      {
        question: "Can I go directly from Kathmandu to Chitwan by car?",
        answer:
          "Yes, subject to availability. It is a long drive, so we plan an early departure and confirm the vehicle based on your group and luggage.",
      },
      {
        question: "Can I combine Chitwan with Pokhara?",
        answer:
          "Yes. Many itineraries combine Kathmandu, Chitwan and Pokhara. Share your dates and the direction you want to travel so we can quote the full route.",
      },
      {
        question: "Where will the driver drop us?",
        answer:
          "We drop you at the agreed lodge or meeting point in the Sauraha area. Send the exact location before travel so the plan is clear.",
      },
      {
        question: "Are park entry fees included?",
        answer:
          "No. Park permits, guides and safari activities are separate from transport. Your lodge or a licensed operator can explain the current requirements.",
      },
    ],
    seoTitle: "Kathmandu to Chitwan Private Car",
    seoDescription:
      "Arrange a private car from Kathmandu to Chitwan with a chauffeur. Plan a comfortable journey to Sauraha, with route guidance and an inquiry form for a quotation.",
  },
  {
    slug: "kathmandu-to-lumbini",
    from: "Kathmandu",
    to: "Lumbini",
    title: "Kathmandu to Lumbini by Private Car",
    summary:
      "A long road journey to the birthplace of the Buddha, often combined with an overnight stop or Chitwan.",
    image: "/images/lumbini-maya-devi.jpg",
    imageAlt: "Maya Devi Temple in Lumbini",
    imageCaption:
      "Maya Devi Temple, Lumbini. Photo: Rangan Datta Wiki, CC BY-SA 4.0, via Wikimedia Commons.",
    distance: "Approx. 280 km",
    duration: "Typically 9–11 hours, depending on traffic, road conditions and stops",
    road: "Prithvi Highway, lowland highways and local roads",
    intro: [
      "Lumbini is a long drive from Kathmandu. The route crosses the hills and lowlands, and many travellers prefer to break the journey rather than attempt it in a single push.",
      "A private car gives you control over rest stops and the pace of the day. If you are combining Lumbini with Chitwan or Pokhara, we can plan the sequence to reduce backtracking.",
    ],
    stops: [
      {
        name: "Malekhu or Mugling",
        text: "Early break points before the route turns toward the lowlands.",
      },
      {
        name: "Narayanghat",
        text: "A natural lunch or rest stop on the long lowland section.",
      },
      {
        name: "Butwal",
        text: "A major city near the final approach to Lumbini, useful for a break.",
      },
      {
        name: "Lumbini",
        text: "The sacred garden and monastic zone, spread across a quiet, walkable area.",
      },
    ],
    planning: [
      "Consider an overnight stop to make the journey more comfortable.",
      "Start early and plan rest breaks rather than rushing the drive.",
      "Check the opening arrangements for the sites you want to visit.",
      "If you are continuing to Chitwan, plan the route in advance to avoid backtracking.",
    ],
    bestTime:
      "The route is used year-round. Hot lowland conditions and monsoon rain can affect comfort and timing.",
    faqs: [
      {
        question: "Can I visit Lumbini in one day from Kathmandu?",
        answer:
          "It is possible by road but makes for a very long day. Most travellers prefer to stay overnight or combine Lumbini with Chitwan. We can help plan a realistic itinerary.",
      },
      {
        question: "Can we stop overnight on the way?",
        answer:
          "Yes. Tell us your preferred pace and we can suggest a practical overnight stop. The quotation will reflect the full route and any overnight driver arrangements.",
      },
      {
        question: "Is Lumbini worth combining with Chitwan?",
        answer:
          "Many travellers combine the two because they are in the same direction from Kathmandu. Tell us your dates and priorities and we will suggest a sensible order.",
      },
    ],
    seoTitle: "Kathmandu to Lumbini Private Car",
    seoDescription:
      "Plan a private car from Kathmandu to Lumbini with a chauffeur. Route guidance, travel-time expectations, suggested stops and an inquiry form for a written quotation.",
  },
  {
    slug: "kathmandu-to-muktinath",
    from: "Kathmandu",
    to: "Muktinath",
    title: "Kathmandu to Muktinath by Private Car",
    summary:
      "A multi-day mountain journey through Pokhara and Mustang, planned around road conditions, altitude and season.",
    image: "/images/muktinath-temple.jpg",
    imageAlt: "Muktinath Temple in Mustang",
    imageCaption:
      "Muktinath Temple, Mustang. Photo: Nepal Trek Adventures, CC BY 4.0, via Wikimedia Commons.",
    distance: "Multi-day road journey",
    duration: "Typically 4–6 days for a comfortable return itinerary, depending on route and stops",
    road: "Prithvi Highway, Kali Gandaki corridor and mountain roads",
    intro: [
      "Muktinath is not a day-trip destination. The journey crosses the country and climbs into Mustang, where weather, altitude and road conditions all shape the plan.",
      "Most comfortable itineraries break the drive with overnight stops and allow time to acclimatise. A private vehicle and driver give you flexibility, but they do not remove the need for careful planning.",
    ],
    stops: [
      {
        name: "Pokhara",
        text: "A common first overnight stop and a practical place to break the journey.",
      },
      {
        name: "Beni or Tatopani",
        text: "Gateway settlements on the road into the Kali Gandaki valley.",
      },
      {
        name: "Jomsom and Marpha",
        text: "Windy Mustang towns with distinctive landscapes and apple orchards.",
      },
      {
        name: "Kagbeni",
        text: "A historic village near the final approach to Muktinath.",
      },
    ],
    planning: [
      "Allow more days than a simple distance calculation suggests.",
      "Check the season, road conditions and weather before committing.",
      "Plan for altitude and give yourself time to adjust.",
      "Confirm current permit requirements for your nationality and route.",
      "Travel insurance that covers high-altitude road travel is strongly recommended.",
    ],
    bestTime:
      "Spring and autumn are often preferred for mountain travel, but conditions vary each year. Check current local advice before booking.",
    faqs: [
      {
        question: "How many days do I need for Muktinath by car?",
        answer:
          "A comfortable return itinerary usually takes several days rather than a single out-and-back drive. The right duration depends on your starting point, stops and acclimatisation needs.",
      },
      {
        question: "Can we visit Muktinath in a standard SUV?",
        answer:
          "The right vehicle depends on the season and road conditions. Share your dates and itinerary and we will recommend a suitable category, subject to availability.",
      },
      {
        question: "Do we need permits?",
        answer:
          "Permit requirements depend on your nationality and the exact route. Check current rules with the relevant authorities before travelling. We can help you identify what to confirm.",
      },
      {
        question: "Is the journey safe in winter?",
        answer:
          "Mountain roads can be affected by snow, ice and closures in winter. We review conditions before confirming a trip and may recommend an alternative itinerary if the route is not practical.",
      },
    ],
    seoTitle: "Kathmandu to Muktinath Private Car",
    seoDescription:
      "Plan a private car journey from Kathmandu to Muktinath. Discuss route, season, overnight stops, altitude and vehicle suitability before requesting a quotation.",
  },
];

export function getRoute(slug: string) {
  return routes.find((route) => route.slug === slug);
}
