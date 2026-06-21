import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/brand";
import { BirdMark } from "@/components/loyalty/BirdMark";
import { TIERS } from "@/lib/loyalty";

export function LoyaltyTeaser() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="club-heading">
      <div className="container-site">
        <div className="overflow-hidden rounded-3xl bg-nile text-paper">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <div className="[&_.kicker]:text-gold-300"><Kicker>White Nile Club</Kicker></div>
              <h2 id="club-heading" className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Earn Nile Miles. Follow the river.
              </h2>
              <p className="mt-4 max-w-md text-paper/80">
                Join our frequent flyer programme free, earn Nile Miles on every flight, and rise
                through the Birds of the Sudd — from Weaver to Fish Eagle — to free award flights.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/white-nile-club/join" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-nile-900 hover:bg-gold-300">
                  Join free <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/white-nile-club" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-paper hover:bg-white/10">
                  How it works
                </Link>
              </div>
            </div>

            {/* Tier birds */}
            <div className="grid grid-cols-4 gap-3">
              {TIERS.map((t) => (
                <div key={t.key} className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: `${t.accent}26`, color: t.accent === "#072E45" ? "#E6CB8A" : t.accent }}
                  >
                    <BirdMark tier={t.key} className="h-8 w-8" />
                  </span>
                  <span className="text-xs font-semibold text-paper">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
