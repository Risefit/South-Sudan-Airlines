import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Kicker, StarMark } from "@/components/brand";
import { PROMISES, FLEET } from "@/lib/data";
import { LEADERSHIP } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "South Sudan Airlines is the national flag carrier of the Republic of South Sudan — connecting the nation to itself and the world, to international standards.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our story"
        title="The pride of a new nation"
        subtitle="South Sudan Airlines is the national flag carrier of the Republic of South Sudan — built by South Sudanese, for South Sudan."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="bg-paper py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Who we are</Kicker>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">Connecting the nation, and the world</h2>
            <p className="mt-4 text-slatey">
              South Sudan Airlines is the national flag carrier of the Republic of South Sudan. We connect
              the people, the businesses, and the regions of South Sudan to each other and to the world,
              operating to international safety and service standards.
            </p>
            <p className="mt-4 text-slatey">
              Our livery carries the flag and the gold star of unity — a symbol of guidance and a bright
              future. We launch from our hub at Juba with a modern regional fleet and a dedicated cargo
              network, growing outward as the nation grows.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <StarMark className="h-5 w-5 text-gold" />
              <span className="font-serif text-lg text-nile">Unity · Pride · Future</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/livery/tail-flag-detail.jpeg"
              alt="South Sudan Airlines tail with the national flag and gold star of unity"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission / promises */}
      <section className="bg-white py-16">
        <div className="container-site">
          <Kicker>Our promise</Kicker>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold text-ink">What we stand for</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-nile/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <div key={p.title} className="bg-white p-6">
                <h3 className="flex items-start gap-1.5 font-serif text-lg text-ink">
                  <StarMark className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slatey">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-paper py-16">
        <div className="container-site">
          <Kicker>The fleet</Kicker>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">Our aircraft</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FLEET.map((a) => (
              <div key={a.name} className="rounded-2xl border border-nile/10 bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {a.role} · {a.count}
                </span>
                <h3 className="mt-2 font-serif text-xl text-ink">{a.name}</h3>
                <p className="mt-2 text-sm text-slatey">{a.blurb}</p>
                <p className="mt-3 text-sm font-medium text-nile">{a.seats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16">
        <div className="container-site">
          <Kicker>Leadership</Kicker>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">Our team</h2>
          <p className="mt-3 max-w-xl text-slatey">
            Our leadership team is being assembled as we approach launch. Appointments will be announced here.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((l) => (
              <div key={l.role} className="rounded-2xl border border-nile/10 bg-paper p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nile/[0.06]">
                  <StarMark className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-ink">{l.role}</h3>
                <p className="mt-1 text-sm text-slatey">{l.note}</p>
                <p className="mt-2 text-xs italic text-slatey/80">{l.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nile py-14 text-paper">
        <div className="container-site flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-serif text-2xl font-semibold">Ready to fly with us?</h2>
          <div className="flex gap-3">
            <Link href="/book" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-nile-900 hover:bg-gold-300">
              Book a flight <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/careers" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-paper hover:bg-white/10">
              Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
