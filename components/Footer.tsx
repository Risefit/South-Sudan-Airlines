import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { CONTACT, NAV } from "@/lib/data";
import { Wordmark, FlagRule } from "@/components/brand";

const COLUMNS = [
  {
    title: "Fly",
    links: [
      { label: "Book a flight", href: "/book" },
      { label: "Routes & network", href: "/routes" },
      { label: "Schedule", href: "/schedule" },
      { label: "White Nile Club", href: "/white-nile-club" },
      { label: "Manage booking", href: "/manage" },
      { label: "Check-in", href: "/check-in" },
    ],
  },
  {
    title: "Airline",
    links: [
      { label: "About us", href: "/about" },
      { label: "Cargo", href: "/cargo" },
      { label: "Careers", href: "/careers" },
      { label: "Press & news", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Travel",
    links: [
      { label: "Destinations", href: "/destinations" },
      { label: "Travel info", href: "/travel-info" },
      { label: "Baggage", href: "/travel-info#baggage" },
      { label: "Special assistance", href: "/travel-info#assistance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of carriage", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Cookie policy", href: "/legal/cookies" },
    ],
  },
];

const SOCIAL = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-nile-900 text-paper">
      {/* Flag band — the national colours as a fine top trim */}
      <div className="flex h-1 w-full" aria-hidden>
        <span className="flex-1 bg-flag-black" />
        <span className="flex-1 bg-flag-red" />
        <span className="flex-1 bg-flag-green" />
        <span className="w-16 bg-gold" />
      </div>

      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Wordmark tone="light" />
          <div className="mt-4 flex items-center gap-3">
            <FlagRule className="!w-12" />
            <span className="text-xs uppercase tracking-kicker text-gold-300">
              The Pride of the New Nation
            </span>
          </div>
          <address className="mt-5 not-italic text-sm leading-relaxed text-paper/70">
            {CONTACT.office}
            <br />
            <a href={`mailto:${CONTACT.care}`} className="hover:text-gold-300">{CONTACT.care}</a>
            <br />
            <a href="tel:+211" className="hover:text-gold-300">{CONTACT.phone}</a>
          </address>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-gold hover:text-gold-300"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-300">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-paper/70 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-paper/55 sm:flex-row">
          <p>© 2026 South Sudan Airlines Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {NAV.utility.map((u) => (
              <Link key={u.href} href={u.href} className="hover:text-paper">{u.label}</Link>
            ))}
            <span className="text-paper/40">Juba · JUB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
