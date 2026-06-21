// White Nile Club — frequent flyer programme data (v1 hard-coded, Go7-ready).
// Currency: Nile Miles. Tiers: Birds of the Sudd.
// Numbers marked illustrative are published once Go7 earning/spending rules are set.

export type TierKey = "weaver" | "crane" | "shoebill" | "eagle";

export type Tier = {
  key: TierKey;
  name: string;
  tagline: string;
  accent: string; // hex for the emblem + card trim
  statusMiles: string; // illustrative annual Status Miles to reach
  bonus: string; // earning bonus vs base
  benefits: string[];
};

export const PROGRAMME = {
  name: "White Nile Club",
  currency: "Nile Miles",
  tagline: "Follow the river.",
  intro:
    "Earn Nile Miles every time you fly South Sudan Airlines, rise through the Birds of the Sudd, and redeem your Miles for award flights across the network.",
};

export const TIERS: Tier[] = [
  {
    key: "weaver",
    name: "Weaver",
    tagline: "The industrious welcomer",
    accent: "#D4A845",
    statusMiles: "Join free",
    bonus: "Base earning",
    benefits: [
      "Earn Nile Miles on every flight",
      "Members-only fares and offers",
      "Online member account",
    ],
  },
  {
    key: "crane",
    name: "Crowned Crane",
    tagline: "Grace over the wetlands",
    accent: "#1B6E9C",
    statusMiles: "15,000 Status Miles",
    bonus: "+25% bonus Miles",
    benefits: [
      "Everything in Weaver",
      "+25% bonus Nile Miles",
      "Priority check-in",
      "+5 kg checked baggage",
    ],
  },
  {
    key: "shoebill",
    name: "Shoebill",
    tagline: "The rare icon of the Sudd",
    accent: "#0A4F75",
    statusMiles: "40,000 Status Miles",
    bonus: "+50% bonus Miles",
    benefits: [
      "Everything in Crowned Crane",
      "+50% bonus Nile Miles",
      "Priority boarding",
      "+10 kg checked baggage",
      "Waitlist & standby priority",
    ],
  },
  {
    key: "eagle",
    name: "Fish Eagle",
    tagline: "Master of the river skies",
    accent: "#072E45",
    statusMiles: "80,000 Status Miles",
    bonus: "+100% bonus Miles",
    benefits: [
      "Everything in Shoebill",
      "+100% bonus Nile Miles",
      "Dedicated support line",
      "+15 kg checked baggage",
      "Lounge access (as available)",
      "Guaranteed seat on full flights¹",
    ],
  },
];

export const EARN_STEPS = [
  {
    title: "Join free",
    body: "Sign up for the White Nile Club in minutes and get your membership number.",
  },
  {
    title: "Fly & earn",
    body: "Add your number to every booking and earn Nile Miles on each South Sudan Airlines flight — more as you rise through the tiers.",
  },
  {
    title: "Redeem",
    body: "Spend your Nile Miles on award flights anywhere on our network. You pay only the taxes and charges.",
  },
];

// Illustrative award chart — real values come from Go7 spending rules.
export const REWARD_CHART = [
  { route: "Domestic (e.g. Juba–Malakal)", miles: "from ~7,500" },
  { route: "Domestic (Juba–Wau / Bentiu)", miles: "from ~8,000" },
  { route: "International (Juba–Nairobi)", miles: "from ~20,000" },
];

export const FAQ = [
  {
    q: "How do I earn Nile Miles?",
    a: "You earn Nile Miles on every South Sudan Airlines flight when your membership number is on the booking. The number of Miles depends on the route and cabin, plus a bonus based on your tier.",
  },
  {
    q: "What's the difference between Nile Miles and Status Miles?",
    a: "Award (Nile) Miles are what you spend on award flights — they don't expire. Status Miles count towards your tier each year and decide whether you rise from Weaver up to Fish Eagle.",
  },
  {
    q: "How do I use my Miles?",
    a: "When you book, add your membership number and choose the award-flight option. Your Miles cover the fare and you pay only taxes and charges.",
  },
  {
    q: "When do Miles appear in my account?",
    a: "Miles are credited a short period after you've flown. You'll always see your latest balance and activity in My Account.",
  },
  {
    q: "Do my Miles expire?",
    a: "Award Nile Miles don't expire. Status Miles are counted per membership year to set your tier. Promotional Bonus Miles may have their own validity.",
  },
];

export const CLUB_NAV = { label: "White Nile Club", href: "/white-nile-club" };
