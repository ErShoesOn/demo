export type Locale = "en" | "hi" | "zh" | "ne";

export const locales: Locale[] = ["en", "hi", "zh", "ne"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  zh: "中文",
  ne: "नेपाली",
};

export const localeDisplayNames: Record<Locale, string> = {
  en: "English",
  hi: "Hindi",
  zh: "Chinese (Simplified)",
  ne: "Nepali",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  hi: "ltr",
  zh: "ltr",
  ne: "ltr",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromParams(params: { locale?: string }): Locale {
  if (params.locale && isLocale(params.locale)) {
    return params.locale;
  }
  return defaultLocale;
}

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function alternateLinks(locale: Locale, basePath: string): Array<{
  hrefLang: string;
  href: string;
}> {
  return locales.map((l) => ({
    hrefLang: l === defaultLocale ? "x-default" : l,
    href: localePath(l, basePath),
  }));
}

type TranslationKey =
  | "site.name"
  | "site.tagline"
  | "site.description"
  | "nav.home"
  | "nav.about"
  | "nav.fleet"
  | "nav.services"
  | "nav.destinations"
  | "nav.tourPackages"
  | "nav.travelGuides"
  | "nav.contact"
  | "cta.getQuote"
  | "cta.sendInquiry"
  | "cta.bookNow"
  | "footer.explore"
  | "footer.services"
  | "footer.legal"
  | "inquiry.title"
  | "inquiry.subtitle"
  | "inquiry.formHint"
  | "inquiry.name"
  | "inquiry.phone"
  | "inquiry.email"
  | "inquiry.service"
  | "inquiry.travelDate"
  | "inquiry.passengers"
  | "inquiry.pickup"
  | "inquiry.destination"
  | "inquiry.pickupTime"
  | "inquiry.vehicle"
  | "inquiry.message"
  | "inquiry.consent"
  | "inquiry.send"
  | "inquiry.sending"
  | "inquiry.required"
  | "inquiry.notBooking"
  | "common.allServices"
  | "common.exploreFleet"
  | "common.allDestinations"
  | "common.allTravelGuides"
  | "common.readFaqs"
  | "common.askTeam"
  | "common.stillUnsure"
  | "common.sendDetails"
  | "common.notReservation"
  | "aeo.bookingProcess.title"
  | "aeo.bookingProcess.step1"
  | "aeo.bookingProcess.step2"
  | "aeo.bookingProcess.step3"
  | "aeo.bookingProcess.step4"
  | "footer.chauffeurOnly"
  | "footer.nationwide"
  | "footer.availability";

export type Translations = Record<TranslationKey, string>;

const en: Translations = {
  "site.name": "Majestic Rentals",
  "site.tagline": "Premium chauffeur-driven car rentals across Nepal",
  "site.description":
    "Majestic Rentals arranges premium chauffeur-driven car rentals, EV rentals, airport transfers and private travel across Nepal. Based in Kathmandu, serving travellers nationwide. Send an inquiry for availability and a quotation.",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.fleet": "Our Fleet",
  "nav.services": "Services",
  "nav.destinations": "Destinations",
  "nav.tourPackages": "Tour Packages",
  "nav.travelGuides": "Travel Guides",
  "nav.contact": "Contact",
  "cta.getQuote": "Get a Quote",
  "cta.sendInquiry": "Send an Inquiry",
  "cta.bookNow": "Book Now",
  "footer.explore": "Explore",
  "footer.services": "Services",
  "footer.legal": "Legal",
  "inquiry.title": "Tell us where you need to go.",
  "inquiry.subtitle":
    "Send your dates, pickup point, destination, passengers and luggage. We will check availability and reply with a written quotation.",
  "inquiry.formHint":
    "Required fields are marked with an asterisk (*). Submitting this form starts an inquiry; it does not confirm a vehicle, driver or price.",
  "inquiry.name": "Full name",
  "inquiry.phone": "Phone / WhatsApp",
  "inquiry.email": "Email",
  "inquiry.service": "Service",
  "inquiry.travelDate": "Travel date",
  "inquiry.passengers": "Passengers",
  "inquiry.pickup": "Pickup location",
  "inquiry.destination": "Destination",
  "inquiry.pickupTime": "Preferred pickup time",
  "inquiry.vehicle": "Vehicle preference",
  "inquiry.message": "Additional requirements",
  "inquiry.consent": "I agree to be contacted about this inquiry.",
  "inquiry.send": "Send inquiry",
  "inquiry.sending": "Sending inquiry…",
  "inquiry.required": "Required fields are marked with an asterisk (*).",
  "inquiry.notBooking":
    "Inquiry only. A request is not a confirmed booking; availability and the final price are confirmed by our team.",
  "common.allServices": "All services",
  "common.exploreFleet": "Explore the fleet",
  "common.allDestinations": "All destinations",
  "common.allTravelGuides": "All travel guides",
  "common.readFaqs": "Read all FAQs",
  "common.askTeam": "Ask our team",
  "common.stillUnsure": "Still unsure what to ask for?",
  "common.sendDetails":
    "Send the dates you have, even if the rest is flexible. We will help you work out a realistic route and vehicle category.",
  "common.notReservation":
    "A request is not a reservation. Availability is confirmed before booking.",
  "aeo.bookingProcess.title": "How a rental inquiry becomes a confirmed journey",
  "aeo.bookingProcess.step1": "Send your dates, pickup, destination and group details.",
  "aeo.bookingProcess.step2": "We check vehicle and driver availability for your route.",
  "aeo.bookingProcess.step3": "You receive a written quotation with the vehicle category, inclusions and price.",
  "aeo.bookingProcess.step4": "Confirm in writing, and your journey is arranged.",
  "footer.chauffeurOnly": "Chauffeur-driven only · Nationwide Nepal on request",
  "footer.nationwide": "Nationwide Nepal on request · Availability confirmed before booking",
  "footer.availability": "Availability confirmed before booking",
};

const hi: Translations = {
  "site.name": "मैजेस्टिक रेंटल्स",
  "site.tagline": "नेपाल में प्रीमियम चालक-चालित कार किराये",
  "site.description":
    "मैजेस्टिक रेंटल्स नेपाल भर में प्रीमियम चालक-चालित कार किराये, ईवी किराये, हवाई अड्डा स्थानांतरण और निजी यात्रा की व्यवस्था करता है। काठमांडू में स्थित, राष्ट्रव्यापी यात्रियों की सेवा कर रहे हैं। उपलब्धता और कोटेशन के लिए पूछताछ भेजें।",
  "nav.home": "होम",
  "nav.about": "हमारे बारे में",
  "nav.fleet": "हमारा बेड़ा",
  "nav.services": "सेवाएं",
  "nav.destinations": "गंतव्य",
  "nav.tourPackages": "टूर पैकेज",
  "nav.travelGuides": "ट्रैवल गाइड",
  "nav.contact": "संपर्क",
  "cta.getQuote": "कोटेशन लें",
  "cta.sendInquiry": "पूछताछ भेजें",
  "cta.bookNow": "अभी बुक करें",
  "footer.explore": "एक्सप्लोर करें",
  "footer.services": "सेवाएं",
  "footer.legal": "कानूनी",
  "inquiry.title": "हमें बताएं कि आपको कहां जाना है।",
  "inquiry.subtitle":
    "अपनी तारीखें, पिकअप पॉइंट, गंतव्य, यात्री और सामान भेजें। हम उपलब्धता जांचेंगे और लिखित कोटेशन का जवाब देंगे।",
  "inquiry.formHint":
    "आवश्यक क्षेत्र तारांकन (*) से चिह्नित हैं। इस फॉर्म को जमा करने से पूछताछ शुरू होती है; यह वाहन, चालक या मूल्य की पुष्टि नहीं करता है।",
  "inquiry.name": "पूरा नाम",
  "inquiry.phone": "फोन / व्हाट्सएप",
  "inquiry.email": "ईमेल",
  "inquiry.service": "सेवा",
  "inquiry.travelDate": "यात्रा की तारीख",
  "inquiry.passengers": "यात्री",
  "inquiry.pickup": "पिकअप स्थान",
  "inquiry.destination": "गंतव्य",
  "inquiry.pickupTime": "पसंदीदा पिकअप समय",
  "inquiry.vehicle": "वाहन वरीयता",
  "inquiry.message": "अतिरिक्त आवश्यकताएं",
  "inquiry.consent": "मैं इस पूछताछ के बारे में संपर्क करने के लिए सहमत हूं।",
  "inquiry.send": "पूछताछ भेजें",
  "inquiry.sending": "पूछताछ भेजी जा रही है…",
  "inquiry.required": "आवश्यक क्षेत्र तारांकन (*) से चिह्नित हैं।",
  "inquiry.notBooking":
    "केवल पूछताछ। एक अनुरोध एक पुष्टि की गई बुकिंग नहीं है; उपलब्धता और अंतिम मूल्य हमारी टीम द्वारा पुष्टि की जाती है।",
  "common.allServices": "सभी सेवाएं",
  "common.exploreFleet": "बेड़ा खोजें",
  "common.allDestinations": "सभी गंतव्य",
  "common.allTravelGuides": "सभी ट्रैवल गाइड",
  "common.readFaqs": "सभी अक्सर पूछे जाने वाले प्रश्न पढ़ें",
  "common.askTeam": "हमारी टीम से पूछें",
  "common.stillUnsure": "अभी भी नहीं जानते कि क्या पूछें?",
  "common.sendDetails":
    "जो तारीखें आपके पास हैं भेजें, भले ही बाकी लचीला हो। हम आपको एक यथार्थवादी मार्ग और वाहन श्रेणी तय करने में मदद करेंगे।",
  "common.notReservation": "एक अनुरोध एक आरक्षण नहीं है। बुकिंग से पहले उपलब्धता की पुष्टि की जाती है।",
  "aeo.bookingProcess.title": "कैसे एक किराया पूछताछ एक पुष्टि की गई यात्रा बनती है",
  "aeo.bookingProcess.step1": "अपनी तारीखें, पिकअप, गंतव्य और समूह विवरण भेजें।",
  "aeo.bookingProcess.step2": "हम आपके मार्ग के लिए वाहन और चालक की उपलब्धता जांचते हैं।",
  "aeo.bookingProcess.step3": "आपको वाहन श्रेणी, समावेश और मूल्य के साथ लिखित कोटेशन प्राप्त होता है।",
  "aeo.bookingProcess.step4": "लिखित में पुष्टि करें, और आपकी यात्रा की व्यवस्था की जाती है।",
  "footer.chauffeurOnly": "केवल चालक-चालित · अनुरोध पर राष्ट्रव्यापी नेपाल",
  "footer.nationwide": "अनुरोध पर राष्ट्रव्यापी नेपाल · बुकिंग से पहले उपलब्धता की पुष्टि",
  "footer.availability": "बुकिंग से पहले उपलब्धता की पुष्टि",
};

const zh: Translations = {
  "site.name": "Majestic Rentals",
  "site.tagline": "尼泊尔高级司机驾驶汽车租赁",
  "site.description":
    "Majestic Rentals 在尼泊尔各地安排高级司机驾驶汽车租赁、电动汽车租赁、机场接送和私人旅行。总部位于加德满都，为全国旅客服务。发送询价以获取可用性和报价。",
  "nav.home": "首页",
  "nav.about": "关于我们",
  "nav.fleet": "车队",
  "nav.services": "服务",
  "nav.destinations": "目的地",
  "nav.tourPackages": "旅游套餐",
  "nav.travelGuides": "旅游指南",
  "nav.contact": "联系",
  "cta.getQuote": "获取报价",
  "cta.sendInquiry": "发送询价",
  "cta.bookNow": "立即预订",
  "footer.explore": "探索",
  "footer.services": "服务",
  "footer.legal": "法律",
  "inquiry.title": "告诉我们您想去哪里。",
  "inquiry.subtitle":
    "发送您的日期、接送地点、目的地、乘客人数和行李。我们将检查可用性并回复书面报价。",
  "inquiry.formHint":
    "必填字段标有星号（*）。提交此表格开始询价；这不代表确认车辆、司机或价格。",
  "inquiry.name": "全名",
  "inquiry.phone": "电话 / WhatsApp",
  "inquiry.email": "电子邮件",
  "inquiry.service": "服务",
  "inquiry.travelDate": "旅行日期",
  "inquiry.passengers": "乘客",
  "inquiry.pickup": "接送地点",
  "inquiry.destination": "目的地",
  "inquiry.pickupTime": "首选接送时间",
  "inquiry.vehicle": "车辆偏好",
  "inquiry.message": "额外要求",
  "inquiry.consent": "我同意就此询价被联系。",
  "inquiry.send": "发送询价",
  "inquiry.sending": "正在发送询价…",
  "inquiry.required": "必填字段标有星号（*）。",
  "inquiry.notBooking":
    "仅供询价。请求不代表确认的预订；可用性和最终价格由我们团队确认。",
  "common.allServices": "所有服务",
  "common.exploreFleet": "浏览车队",
  "common.allDestinations": "所有目的地",
  "common.allTravelGuides": "所有旅游指南",
  "common.readFaqs": "阅读所有常见问题",
  "common.askTeam": "询问我们的团队",
  "common.stillUnsure": "还不确定该问什么？",
  "common.sendDetails":
    "发送您拥有的日期，即使其他部分灵活。我们将帮助您制定合理的路线和车辆类别。",
  "common.notReservation": "请求不是预订。预订前会确认可用性。",
  "aeo.bookingProcess.title": "租赁询价如何变成确认的行程",
  "aeo.bookingProcess.step1": "发送您的日期、接送地点、目的地和团体详细信息。",
  "aeo.bookingProcess.step2": "我们检查您路线的车辆和司机可用性。",
  "aeo.bookingProcess.step3": "您收到包含车辆类别、包含内容和价格的书面报价。",
  "aeo.bookingProcess.step4": "书面确认后，即安排您的行程。",
  "footer.chauffeurOnly": "仅限司机驾驶 · 尼泊尔全国按需提供",
  "footer.nationwide": "尼泊尔全国按需提供 · 预订前确认可用性",
  "footer.availability": "预订前确认可用性",
};

const ne: Translations = {
  "site.name": "माजेस्टिक रेन्टल्स",
  "site.tagline": "नेपाल भरि प्रिमियम चालक सहित कार भाडा",
  "site.description":
    "माजेस्टिक रेन्टल्स ले नेपाल भरि प्रिमियम चालक सहित कार भाडा, ईभी भाडा, हवाई अड्डा स्थानान्तरण र निजी यात्राको व्यवस्था गर्दछ। काठमाडौँमा आधारित, राष्ट्रव्यापी यात्रीलाई सेवा दिइरहेको छ। उपलब्धता र कोटेशनको लागि जिज्ञासा पठाउनुहोस्।",
  "nav.home": "होम",
  "nav.about": "हाम्रो बारेमा",
  "nav.fleet": "हाम्रो फ्लीट",
  "nav.services": "सेवाहरू",
  "nav.destinations": "गन्तव्यहरू",
  "nav.tourPackages": "टुर प्याकेजहरू",
  "nav.travelGuides": "ट्राभल गाइडहरू",
  "nav.contact": "सम्पर्क",
  "cta.getQuote": "कोटेशन लिनुहोस्",
  "cta.sendInquiry": "जिज्ञासा पठाउनुहोस्",
  "cta.bookNow": "अहिले बुक गर्नुहोस्",
  "footer.explore": "खोज्नुहोस्",
  "footer.services": "सेवाहरू",
  "footer.legal": "कानुनी",
  "inquiry.title": "हामीलाई तपाईं कहाँ जान चाहनुहुन्छ भनेर बताउनुहोस्।",
  "inquiry.subtitle":
    "आप्ना मिति, पिकअप स्थान, गन्तव्य, यात्री र सामान पठाउनुहोस्। हामी उपलब्धता जाँच गर्नेछौं र लिखित कोटेशनको साथ जवाफ दिनेछौं।",
  "inquiry.formHint":
    "आवश्यक क्षेत्र तारांकन (*) ले चिन्हित गरिएको छ। यो फर्म पेश गर्दा जिज्ञासा सुरु हुन्छ; यसले सवारी, चालक वा मूल्य पुष्टि गर्दैन।",
  "inquiry.name": "पूरा नाम",
  "inquiry.phone": "फोन / व्हाट्सएप",
  "inquiry.email": "इमेल",
  "inquiry.service": "सेवा",
  "inquiry.travelDate": "यात्रा मिति",
  "inquiry.passengers": "यात्री",
  "inquiry.pickup": "पिकअप स्थान",
  "inquiry.destination": "गन्तव्य",
  "inquiry.pickupTime": "प्राथमिकता पिकअप समय",
  "inquiry.vehicle": "सवारी प्राथमिकता",
  "inquiry.message": "थप आवश्यकताहरू",
  "inquiry.consent": "मलाई यो जिज्ञासाको बारेमा सम्पर्क गर्न म सहमत छु।",
  "inquiry.send": "जिज्ञासा पठाउनुहोस्",
  "inquiry.sending": "जिज्ञासा पठाइरहेको छ…",
  "inquiry.required": "आवश्यक क्षेत्र तारांकन (*) ले चिन्हित गरिएको छ।",
  "inquiry.notBooking":
    "केवल जिज्ञासा। अनुरोध पुष्टि गरिएको बुकिंग होइन; उपलब्धता र अन्तिम मूल्य हाम्रो टोलीद्वारा पुष्टि गरिन्छ।",
  "common.allServices": "सबै सेवाहरू",
  "common.exploreFleet": "फ्लीट खोज्नुहोस्",
  "common.allDestinations": "सबै गन्तव्यहरू",
  "common.allTravelGuides": "सबै ट्राभल गाइडहरू",
  "common.readFaqs": "सबै अक्सर सोधिने प्रश्नहरू पढ्नुहोस्",
  "common.askTeam": "हाम्रो टोलीलाई सोध्नुहोस्",
  "common.stillUnsure": "अझै पनि सोध्ने कुरा निश्चित हुनु भएन?",
  "common.sendDetails":
    "तपाईंसँग भएको मिति पठाउनुहोस्, बाँकी लचिलो भए पनि। हामी तपाईंलाई यथार्थवादी मार्ग र सवारी श्रेणी छनोट गर्न मद्दत गर्नेछौं।",
  "common.notReservation": "अनुरोध आरक्षण होइन। बुकिंगअघि उपलब्धता पुष्टि गरिन्छ।",
  "aeo.bookingProcess.title": "कसरी भाडा जिज्ञासा पुष्टि गरिएको यात्रामा परिवर्तन हुन्छ",
  "aeo.bookingProcess.step1": "आप्ना मिति, पिकअप, गन्तव्य र समूह विवरण पठाउनुहोस्।",
  "aeo.bookingProcess.step2": "हामी तपाईंको मार्गको लागि सवारी र चालकको उपलब्धता जाँच गर्छौं।",
  "aeo.bookingProcess.step3": "तपाईंलाई सवारी श्रेणी, समावेश र मूल्यसहित लिखित कोटेशन प्राप्त हुन्छ।",
  "aeo.bookingProcess.step4": "लिखितमा पुष्टि गर्नुहोस्, र तपाईंको यात्रा व्यवस्थित गरिन्छ।",
  "footer.chauffeurOnly": "केवल चालक सहित · अनुरोधमा राष्ट्रव्यापी नेपाल",
  "footer.nationwide": "अनुरोधमा राष्ट्रव्यापी नेपाल · बुकिंगअघि उपलब्धता पुष्टि",
  "footer.availability": "बुकिंगअघि उपलब्धता पुष्टि",
};

export const translations: Record<Locale, Translations> = {
  en,
  hi,
  zh,
  ne,
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
}

export function tPage(locale: Locale, key: TranslationKey, fallback: string): string {
  return translations[locale]?.[key] ?? fallback;
}
