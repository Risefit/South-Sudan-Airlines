import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/brand";

// CMS-driven later (Sanity). Gracefully empty at launch (brief §5).
const NEWS: { title: string; date: string; href: string }[] = [];

export function Press() {
  return (
    <section className="border-t border-nile/10 bg-paper py-20 sm:py-24" aria-labelledby="press-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Kicker>Press &amp; news</Kicker>
            <h2 id="press-heading" className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              The latest from South Sudan Airlines
            </h2>
          </div>
          <Link href="/press" className="inline-flex items-center gap-2 text-sm font-semibold text-nile hover:text-nile-900">
            Newsroom
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {NEWS.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-nile/20 bg-white/60 px-6 py-14 text-center">
            <p className="font-serif text-xl text-ink">News is coming soon.</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-slatey">
              Announcements, route launches and press releases will appear here as we approach
              first flight. For media enquiries, please get in touch.
            </p>
            <Link href="/contact" className="mt-6 inline-flex btn-ghost">
              Contact press office
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEWS.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-nile/[0.06]">
                <span className="text-xs uppercase tracking-wide text-slatey">{n.date}</span>
                <h3 className="mt-2 font-serif text-lg text-ink">{n.title}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
