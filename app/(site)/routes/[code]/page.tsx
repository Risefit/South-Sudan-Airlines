import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, CalendarDays, Plane, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ROUTES, FARES } from "@/lib/data";
import { SCHEDULE, routeByCode } from "@/lib/content";

export function generateStaticParams() {
  return ROUTES.map((r) => ({ code: r.to.toLowerCase() }));
}

export function generateMetadata({ params }: { params: { code: string } }): Metadata {
  const r = routeByCode(params.code);
  if (!r) return { title: "Route" };
  return {
    title: `Juba to ${r.city} (${r.from}–${r.to})`,
    description: `Flights from Juba (${r.from}) to ${r.city} (${r.to}) — ${r.frequency}, ${r.blockTime} block time, operated by South Sudan Airlines.`,
  };
}

export default function RouteDetailPage({ params }: { params: { code: string } }) {
  const r = routeByCode(params.code);
  if (!r) notFound();

  const flights = SCHEDULE.filter(
    (f) => (f.from === r.from && f.to === r.to) || (f.from === r.to && f.to === r.from)
  );
  const isInt = r.type === "International";
  const fare = isInt ? FARES.internationalOneWay : FARES.domesticOneWay;

  const facts = [
    { icon: Clock, label: "Block time", value: r.blockTime },
    { icon: CalendarDays, label: "Frequency", value: r.frequency },
    { icon: Plane, label: "Aircraft", value: "Dash 8-300" },
    { icon: Globe2, label: "Type", value: r.type },
  ];

  return (
    <>
      <PageHero
        kicker={`${r.from} → ${r.to}`}
        title={`Juba to ${r.city}`}
        subtitle={`${r.frequency} · ${r.blockTime} · from ${fare} one way.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Routes", href: "/routes" }, { label: r.city }]}
      />

      <section className="bg-paper py-14">
        <div className="container-site">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-nile/10 bg-white p-5">
                <f.icon className="h-5 w-5 text-nile" aria-hidden />
                <p className="mt-3 text-xs uppercase tracking-wide text-slatey">{f.label}</p>
                <p className="font-serif text-lg text-ink">{f.value}</p>
              </div>
            ))}
          </div>

          {/* Illustrative timetable */}
          <h2 className="mt-12 font-serif text-2xl font-semibold text-ink">Flights on this route</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-nile/10 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-nile/[0.04] text-xs uppercase tracking-wide text-slatey">
                <tr>
                  <th className="px-4 py-3 font-semibold">Flight</th>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Depart</th>
                  <th className="px-4 py-3 font-semibold">Arrive</th>
                  <th className="px-4 py-3 font-semibold">Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nile/10">
                {flights.map((f) => (
                  <tr key={f.flightNo}>
                    <td className="flight-code px-4 py-3 font-semibold text-nile">{f.flightNo}</td>
                    <td className="flight-code px-4 py-3">{f.from} → {f.to}</td>
                    <td className="px-4 py-3">{f.dep}</td>
                    <td className="px-4 py-3">{f.arr}</td>
                    <td className="px-4 py-3">{f.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slatey">
            Times are illustrative for this pre-launch website and subject to change. Confirm at booking.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book {r.from}–{r.to} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href={`/destinations/${r.city.toLowerCase().split(" ")[0]}`} className="btn-ghost">
              About {r.city.split(" ")[0]}
            </Link>
            <Link href="/routes" className="btn-ghost">All routes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
