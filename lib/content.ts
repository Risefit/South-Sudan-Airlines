// Page-level content for internal pages (v1 hard-coded, CMS-ready later).
// Nothing here references JV/parent/commercial terms (brief §10).

import { ROUTES, type Route } from "@/lib/data";

/* ---------------------------------- Schedule --------------------------------- */
// Synthesised illustrative timetable derived from the Phase 1 network.
// Times are placeholders for the v1 brochure; real times load from CMS/PSS later.
export type Flight = {
  flightNo: string;
  from: string;
  to: string;
  city: string;
  dep: string;
  arr: string;
  days: string; // "Daily" or e.g. "Mon–Sat"
  aircraft: string;
};

export const SCHEDULE: Flight[] = [
  { flightNo: "SS101", from: "JUB", to: "MAK", city: "Malakal", dep: "07:00", arr: "08:10", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS102", from: "MAK", to: "JUB", city: "Malakal", dep: "08:45", arr: "09:55", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS103", from: "JUB", to: "MAK", city: "Malakal", dep: "15:30", arr: "16:40", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS104", from: "MAK", to: "JUB", city: "Malakal", dep: "17:15", arr: "18:25", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS201", from: "JUB", to: "WUU", city: "Wau", dep: "09:30", arr: "10:45", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS202", from: "WUU", to: "JUB", city: "Wau", dep: "11:20", arr: "12:35", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS301", from: "JUB", to: "RBX", city: "Rubkona / Bentiu", dep: "10:00", arr: "11:15", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS302", from: "RBX", to: "JUB", city: "Rubkona / Bentiu", dep: "11:50", arr: "13:05", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS401", from: "JUB", to: "NBO", city: "Nairobi", dep: "13:00", arr: "15:00", days: "Daily", aircraft: "Dash 8-300" },
  { flightNo: "SS402", from: "NBO", to: "JUB", city: "Nairobi", dep: "16:00", arr: "18:00", days: "Daily", aircraft: "Dash 8-300" },
];

export function routeByCode(code: string): Route | undefined {
  return ROUTES.find((r) => r.to.toLowerCase() === code.toLowerCase());
}

/* ------------------------------- Destinations -------------------------------- */
export type Guide = {
  code: string;
  city: string;
  region: string;
  airport: string;
  intro: string;
  highlights: string[];
  image: string;
};

export const GUIDES: Guide[] = [
  {
    code: "JUB",
    city: "Juba",
    region: "Central Equatoria",
    airport: "Juba International Airport (JUB)",
    intro:
      "The capital and our hub — a fast-growing river city on the banks of the White Nile, where every South Sudan Airlines journey begins.",
    highlights: ["The White Nile waterfront", "Juba's bustling markets", "Gateway to the whole network"],
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=70",
  },
  {
    code: "MAK",
    city: "Malakal",
    region: "Upper Nile",
    airport: "Malakal Airport (MAK)",
    intro:
      "The Upper Nile's principal city, served twice daily from Juba — a vital link for trade, family and government along the river.",
    highlights: ["On the White Nile", "Upper Nile commerce", "Twice-daily service"],
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=70",
  },
  {
    code: "WUU",
    city: "Wau",
    region: "Western Bahr el Ghazal",
    airport: "Wau Airport (WUU)",
    intro:
      "South Sudan's second city and the heart of Bahr el Ghazal — historic, green, and now one daily flight from the capital.",
    highlights: ["Colonial-era architecture", "Regional trade centre", "Daily Dash 8 service"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=70",
  },
  {
    code: "RBX",
    city: "Rubkona / Bentiu",
    region: "Unity State",
    airport: "Rubkona Airport (RBX)",
    intro:
      "The gateway to Unity State and the northern oil corridor — connected daily to Juba for business and community travel.",
    highlights: ["Unity State gateway", "Near the oil corridor", "Daily connection to Juba"],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=70",
  },
  {
    code: "NBO",
    city: "Nairobi",
    region: "Kenya",
    airport: "Jomo Kenyatta International Airport (NBO)",
    intro:
      "Our first international destination — East Africa's largest hub, connecting South Sudan to the wider world with a daily service.",
    highlights: ["East Africa's biggest hub", "Onward global connections", "Daily international service"],
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1400&q=70",
  },
];

export function guideByCity(city: string): Guide | undefined {
  return GUIDES.find(
    (g) => g.city.toLowerCase().split(" ")[0] === city.toLowerCase()
  );
}

/* ---------------------------------- Cargo ------------------------------------ */
export const CARGO_SERVICES = [
  {
    title: "Oil-corridor freight",
    body: "Scheduled and ad-hoc cargo into the Upper Nile oil corridor — Paloich, Adar Yale, Tharjath, Heglig and Bentiu — on our dedicated freighter fleet.",
  },
  {
    title: "General & express cargo",
    body: "Reliable belly and dedicated-freighter capacity across the domestic network, with consolidation and onward handling through the Juba hub.",
  },
  {
    title: "Charter & project cargo",
    body: "Bespoke charters for oversized, time-critical or project freight, supporting the energy sector and humanitarian operations.",
  },
];

export const OIL_CORRIDOR = [
  { name: "Juba (hub)", x: 250, y: 360, hub: true },
  { name: "Bentiu", x: 230, y: 200 },
  { name: "Tharjath / Mayom", x: 175, y: 235 },
  { name: "Paloich", x: 360, y: 150 },
  { name: "Adar Yale", x: 410, y: 130 },
  { name: "Heglig", x: 300, y: 175 },
];

export const CARGO_TARIFF = {
  outbound: "USD 4.00 / kg",
  backhaul: "USD 2.80 / kg",
  note: "Standard chargeable weight per IATA conventions. Ad-hoc and project rates on request.",
};

/* -------------------------------- Leadership --------------------------------- */
// Placeholder roles — no invented individuals (brief §10 caution).
export const LEADERSHIP = [
  { role: "Chief Executive Officer", name: "Appointment to be announced", note: "Overall leadership and strategy" },
  { role: "Chief Operating Officer", name: "Appointment to be announced", note: "Flight and ground operations" },
  { role: "Director of Safety & Quality", name: "Appointment to be announced", note: "Safety management and compliance" },
  { role: "Commercial Director", name: "Appointment to be announced", note: "Network, sales and cargo" },
];

/* --------------------------------- Contact ----------------------------------- */
export const OFFICES = [
  { city: "Juba (Head Office)", lines: ["Juba International Airport", "Juba, Central Equatoria", "Republic of South Sudan"], type: "HQ & ticket office" },
  { city: "Malakal", lines: ["Malakal Airport", "Upper Nile State"], type: "Ticket office" },
  { city: "Wau", lines: ["Wau Airport", "Western Bahr el Ghazal"], type: "Ticket office" },
  { city: "Bentiu", lines: ["Rubkona Airport", "Unity State"], type: "Ticket office" },
  { city: "Nairobi", lines: ["Jomo Kenyatta International Airport", "Nairobi, Kenya"], type: "Station office" },
];

/* ------------------------------- Travel info --------------------------------- */
export const TRAVEL_INFO = [
  {
    id: "baggage",
    title: "Baggage allowance",
    items: [
      "Checked baggage: 20 kg in Economy, 30 kg in the forward cabin (domestic).",
      "Cabin baggage: one piece up to 7 kg, plus one small personal item.",
      "Excess baggage is charged per kilogram at check-in, subject to aircraft load.",
    ],
  },
  {
    id: "checkin",
    title: "Check-in times",
    items: [
      "Domestic flights: check-in opens 2 hours and closes 45 minutes before departure.",
      "International (JUB–NBO): check-in opens 3 hours and closes 60 minutes before departure.",
      "Boarding gates close 20 minutes before departure.",
    ],
  },
  {
    id: "assistance",
    title: "Special assistance",
    items: [
      "Wheelchair and mobility assistance is available — please request at booking or at least 48 hours before travel.",
      "Our teams are trained to support passengers with reduced mobility and medical needs.",
      "Please contact care@ssairlines.com to arrange assistance.",
    ],
  },
  {
    id: "family",
    title: "Family travel",
    items: [
      "Infants under 2 travel on an adult's lap; one infant per adult.",
      "Strollers can be checked at the gate at no charge.",
      "Families travelling with young children are invited to board first.",
    ],
  },
];

/* ---------------------------------- Legal ------------------------------------ */
export type LegalDoc = { slug: string; title: string; updated: string; intro: string; sections: { h: string; p: string }[] };

export const LEGAL: Record<string, LegalDoc> = {
  terms: {
    slug: "terms",
    title: "Conditions of carriage",
    updated: "June 2026",
    intro:
      "These conditions govern the carriage of passengers and baggage by South Sudan Airlines. They are a placeholder summary for the pre-launch website and will be replaced by the full conditions of carriage before commercial operations begin.",
    sections: [
      { h: "1. Definitions", p: "In these conditions, “we”, “our” and “us” mean South Sudan Airlines Limited; “you” and “your” mean any person holding a ticket or being carried on our aircraft." },
      { h: "2. Tickets", p: "A ticket is valid only for the transportation shown on it, from the point of departure to the point of destination. Fares and charges are those in effect on the date of payment." },
      { h: "3. Check-in and boarding", p: "You must arrive at the airport by the check-in deadlines published on this website. We may cancel your reservation if you fail to meet these deadlines." },
      { h: "4. Baggage", p: "Allowances and excess charges are as published in our Travel Information. Certain items are restricted or prohibited for safety reasons." },
      { h: "5. Schedules and delays", p: "We will take reasonable measures to carry you and your baggage on time, but published schedules are not guaranteed and do not form part of your contract with us." },
      { h: "6. Liability", p: "Our liability for death, injury, delay and damage to baggage is governed by applicable law and international conventions where relevant." },
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy policy",
    updated: "June 2026",
    intro:
      "This policy explains how South Sudan Airlines handles personal information collected through this website. It is a pre-launch placeholder and will be expanded as our services go live.",
    sections: [
      { h: "Information we collect", p: "We collect the information you provide through enquiry and contact forms, and basic, privacy-friendly analytics about how the website is used." },
      { h: "How we use it", p: "We use your information to respond to enquiries, to operate and improve the website, and to provide the services you request." },
      { h: "Analytics", p: "We use privacy-friendly analytics that do not use cookies to track you across websites and do not collect personally identifiable information." },
      { h: "Your rights", p: "You may request access to, correction of, or deletion of your personal information by contacting care@ssairlines.com." },
      { h: "Contact", p: "For any privacy question, please write to care@ssairlines.com." },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie policy",
    updated: "June 2026",
    intro:
      "This policy describes how this website uses cookies and similar technologies. It is a pre-launch placeholder.",
    sections: [
      { h: "Essential cookies", p: "We use a small number of strictly necessary cookies required for the website to function, such as remembering your language preference." },
      { h: "Analytics", p: "We use privacy-friendly, cookieless analytics to understand overall website usage without tracking individuals." },
      { h: "Booking partner", p: "When online booking goes live, our reservation partner may set its own cookies within the booking flow. These will be described here at that time." },
      { h: "Managing cookies", p: "You can control cookies through your browser settings. Disabling essential cookies may affect how the website works." },
    ],
  },
};
