import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FLEET } from "@/lib/data";
import { Kicker } from "@/components/brand";

export function Fleet() {
  const [lead, cargo] = FLEET;
  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="fleet-heading">
      <div className="container-site">
        <div className="max-w-2xl">
          <Kicker>The fleet</Kicker>
          <h2 id="fleet-heading" className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Modern aircraft, dressed in the flag
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          {/* Lead: Dash 8-300 */}
          <article className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-nile/[0.06]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/livery/dash8-ramp-side.jpeg"
                alt="South Sudan Airlines aircraft in national livery on the ramp"
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col gap-3 p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                {lead.role} · {lead.count}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-ink">{lead.name}</h3>
              <p className="max-w-lg text-sm leading-relaxed text-slatey">{lead.blurb}</p>
              <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-2 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slatey">Cabin</dt>
                  <dd className="font-semibold text-ink">{lead.seats}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slatey">Type</dt>
                  <dd className="font-semibold text-ink">{lead.range}</dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Cargo: AN-26 */}
          <article className="flex flex-col justify-between rounded-2xl bg-nile p-7 text-paper">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                {cargo.role} · {cargo.count}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{cargo.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/80">{cargo.blurb}</p>
              <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-2 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-paper/60">Payload</dt>
                  <dd className="font-semibold">{cargo.seats}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-paper/60">Role</dt>
                  <dd className="font-semibold">{cargo.range}</dd>
                </div>
              </dl>
            </div>
            <Link
              href="/cargo"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold"
            >
              South Sudan Airlines Cargo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
