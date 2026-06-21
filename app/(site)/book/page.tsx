import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SearchWidget } from "@/components/SearchWidget";
import { AeroCRSFrame, LaunchingNotice } from "@/components/AeroCRSFrame";
import { FARES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a flight",
  description:
    "Book flights with South Sudan Airlines from Juba to Malakal, Wau, Bentiu and Nairobi. Online booking launching shortly.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        kicker="Book now"
        title="Book your flight"
        subtitle="Search, choose your flights and pay securely. Our online booking is launching shortly with our reservation partner."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book" }]}
      />

      <section className="bg-paper py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <AeroCRSFrame
              heading="Reservations powered by our booking partner"
              blurb="The full search → seat selection → payment → confirmation flow runs in the secure booking widget below. Until it goes live, you can search here and reserve by phone or email."
            >
              <SearchWidget variant="page" />
              <LaunchingNotice />
            </AeroCRSFrame>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "Secure payment", d: "Card payments handled in the protected booking flow." },
                { icon: Phone, t: "Call to book", d: "+211 (TBC), 7 days a week." },
                { icon: Mail, t: "Email bookings", d: "bookings@ssairlines.com" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-nile/10 bg-white p-5">
                  <c.icon className="h-5 w-5 text-nile" aria-hidden />
                  <p className="mt-3 font-semibold text-ink">{c.t}</p>
                  <p className="mt-1 text-sm text-slatey">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-nile p-6 text-paper">
              <h2 className="font-serif text-xl font-semibold">Fares from</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between border-b border-white/15 pb-3">
                  <span className="text-sm text-paper/80">Domestic, one way</span>
                  <span className="font-serif text-xl font-semibold text-gold-300">{FARES.domesticOneWay}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-paper/80">International (JUB–NBO)</span>
                  <span className="font-serif text-xl font-semibold text-gold-300">{FARES.internationalOneWay}</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-paper/60">Published one-way fares. Taxes and charges may apply.</p>
            </div>

            <div className="rounded-2xl border border-nile/10 bg-white p-6">
              <h3 className="font-semibold text-ink">Already booked?</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/manage" className="text-nile hover:underline">Manage your booking →</Link></li>
                <li><Link href="/check-in" className="text-nile hover:underline">Online check-in →</Link></li>
                <li><Link href="/travel-info" className="text-nile hover:underline">Baggage & travel info →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
