import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { RouteMapFull } from "@/components/RouteMapFull";
import { Kicker } from "@/components/brand";
import { ROUTES, FARES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Routes & network",
  description:
    "Explore South Sudan Airlines' route network — daily flights from Juba to Malakal, Wau, Bentiu and Nairobi, with a growing regional and international network.",
};

export default function RoutesPage() {
  return (
    <>
      <PageHero
        kicker="Where we fly"
        title="Our network, from the Juba hub"
        subtitle="Four routes at launch — connecting South Sudan's key cities and reaching out to East Africa, with more to come."
        crumbs={[{ label: "Home", href: "/" }, { label: "Routes & network" }]}
      />

      <section className="bg-paper py-16">
        <div className="container-site">
          <RouteMapFull />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site">
          <Kicker>Route detail</Kicker>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">Phase 1 scheduled routes</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ROUTES.map((r) => (
              <Link
                key={r.to}
                href={`/routes/${r.to.toLowerCase()}`}
                className="group flex items-center justify-between rounded-2xl border border-nile/10 bg-paper p-6 transition-colors hover:border-nile/30"
              >
                <div>
                  <span className="flight-code text-sm font-semibold text-nile">{r.from} → {r.to}</span>
                  <h3 className="mt-1 font-serif text-xl text-ink">Juba — {r.city}</h3>
                  <p className="mt-1 text-sm text-slatey">
                    {r.frequency} · {r.blockTime} · {r.type}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-nile transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6 rounded-2xl bg-nile p-7 text-paper">
            <div>
              <p className="text-xs uppercase tracking-wide text-gold-300">Domestic fares from</p>
              <p className="font-serif text-2xl font-semibold">{FARES.domesticOneWay}</p>
              <p className="text-xs text-paper/60">one way</p>
            </div>
            <div className="border-l border-white/15 pl-6">
              <p className="text-xs uppercase tracking-wide text-gold-300">International (JUB–NBO) from</p>
              <p className="font-serif text-2xl font-semibold">{FARES.internationalOneWay}</p>
              <p className="text-xs text-paper/60">one way</p>
            </div>
            <div className="ml-auto flex items-center">
              <Link href="/book" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-nile-900 hover:bg-gold-300">
                Book a flight <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
