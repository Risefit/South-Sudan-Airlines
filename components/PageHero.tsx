import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FlagRule } from "@/components/brand";

type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  subtitle,
  crumbs,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-nile text-paper">
      {/* subtle gold star watermark */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 text-gold/10"
        fill="currentColor"
      >
        <path d="M12 1.6l2.74 6.93 7.46.4-5.78 4.7 1.96 7.2L12 16.98 5.62 20.93l1.96-7.2L1.8 9.03l7.46-.4L12 1.6z" />
      </svg>

      <div className="container-site relative py-14 sm:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs text-paper/70">
            {crumbs.map((c, i) => (
              <span key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-paper/40" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-300">{c.label}</Link>
                ) : (
                  <span className="text-paper/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <FlagRule className="!w-12" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-kicker text-gold-300">{kicker}</span>
        </div>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-paper/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
