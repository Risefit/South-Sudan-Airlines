// Single source of truth for hard-coded v1 content (CMS-ready later — see brief §7).
// All figures are from the brief; nothing here references commercial/JV terms.

export type Airport = {
  code: string;
  city: string;
  country: string;
};

export const HUB: Airport = { code: "JUB", city: "Juba", country: "South Sudan" };

export const DESTINATIONS: Airport[] = [
  { code: "MAK", city: "Malakal", country: "South Sudan" },
  { code: "WUU", city: "Wau", country: "South Sudan" },
  { code: "RBX", city: "Rubkona / Bentiu", country: "South Sudan" },
  { code: "NBO", city: "Nairobi", country: "Kenya" },
];

export type RouteStatus = "live" | "planned";

export type Route = {
  from: string;
  to: string;
  city: string;
  frequency: string;
  blockTime: string;
  type: "Domestic" | "International";
  status: RouteStatus;
};

// Phase 1 scheduled passenger network — all ex-Juba (brief §4)
export const ROUTES: Route[] = [
  { from: "JUB", to: "MAK", city: "Malakal", frequency: "2× daily", blockTime: "1h 10m", type: "Domestic", status: "live" },
  { from: "JUB", to: "WUU", city: "Wau", frequency: "1× daily", blockTime: "1h 15m", type: "Domestic", status: "live" },
  { from: "JUB", to: "RBX", city: "Rubkona / Bentiu", frequency: "1× daily", blockTime: "1h 15m", type: "Domestic", status: "live" },
  { from: "JUB", to: "NBO", city: "Nairobi", frequency: "1× daily", blockTime: "2h 00m", type: "International", status: "live" },
];

// Phase 2/3 — aspirational, no dates committed (brief §4, §10)
export const PLANNED_CITIES = [
  "Port Sudan",
  "Entebbe",
  "Addis Ababa",
  "Dar es Salaam",
  "Johannesburg",
  "Istanbul",
  "Dubai",
];

export const FARES = {
  domesticOneWay: "USD 190",
  internationalOneWay: "USD 300",
};

// The four brand promises (brief §8)
export const PROMISES = [
  {
    title: "Punctual by design",
    body: "Reliable scheduled service on the routes South Sudan actually needs — built around the country's daily rhythm.",
  },
  {
    title: "International standards",
    body: "Operated to international safety and operational standards from day one. No compromise in the air.",
  },
  {
    title: "Dignified hospitality",
    body: "Service that reflects South Sudanese identity — warm, respectful, and proudly our own.",
  },
  {
    title: "A national platform",
    body: "Connecting communities, enabling business, and carrying the nation forward together.",
  },
];

export type Aircraft = {
  name: string;
  role: string;
  seats: string;
  range: string;
  count: string;
  blurb: string;
};

export const FLEET: Aircraft[] = [
  {
    name: "Bombardier Dash 8-300",
    role: "Regional passenger",
    seats: "50 seats · two cabins",
    range: "Single-aisle turboprop",
    count: "3 aircraft",
    blurb:
      "The face of the fleet — an efficient 50-seat regional turboprop flying every scheduled passenger service from Juba.",
  },
  {
    name: "Antonov AN-26",
    role: "Dedicated cargo",
    seats: "5-tonne payload",
    range: "Oil-corridor freighter",
    count: "3 aircraft",
    blurb:
      "Our freighter — carrying the country's cargo into the oil corridor and onward through the Juba hub.",
  },
];

export type Destination = {
  code: string;
  city: string;
  tag: string;
  blurb: string;
  image: string;
};

// Editorial destination tiles. Local livery/landmark imagery swapped in later;
// Unsplash placeholders keep the homepage runnable today.
export const DESTINATION_TILES: Destination[] = [
  {
    code: "JUB",
    city: "Juba",
    tag: "The hub",
    blurb: "Where the White Nile begins and the network takes flight.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1100&q=70",
  },
  {
    code: "MAK",
    city: "Malakal",
    tag: "Upper Nile",
    blurb: "Twice daily on the river, gateway to the north-east.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=70",
  },
  {
    code: "WUU",
    city: "Wau",
    tag: "Western Bahr el Ghazal",
    blurb: "The country's second city, one flight away.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1100&q=70",
  },
  {
    code: "NBO",
    city: "Nairobi",
    tag: "International",
    blurb: "Daily to East Africa's biggest hub and the world beyond.",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1100&q=70",
  },
];

export const CONTACT = {
  office: "Juba International Airport, Juba, Republic of South Sudan",
  care: "care@ssairlines.com",
  bookings: "bookings@ssairlines.com",
  cargo: "cargo@ssairlines.com",
  careers: "careers@ssairlines.com",
  phone: "+211 (TBC)",
};

export const NAV = {
  primary: [
    {
      label: "Where we fly",
      href: "/routes",
      children: [
        { label: "Routes & network", href: "/routes" },
        { label: "Schedule", href: "/schedule" },
        { label: "Destinations", href: "/destinations" },
      ],
    },
    { label: "Cargo", href: "/cargo" },
    { label: "Travel info", href: "/travel-info" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  utility: [
    { label: "Manage booking", href: "/manage" },
    { label: "Check-in", href: "/check-in" },
  ],
};
