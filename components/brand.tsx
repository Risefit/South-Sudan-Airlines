import { cn } from "@/lib/utils";

/**
 * The gold star of unity — lifted from the livery/flag.
 * The signature mark of the site: favicon, loading mark, bullets, kickers.
 */
export function StarMark({
  className,
  title = "South Sudan Airlines star of unity",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <path d="M12 1.6l2.74 6.93 7.46.4-5.78 4.7 1.96 7.2L12 16.98 5.62 20.93l1.96-7.2L1.8 9.03l7.46-.4L12 1.6z" />
    </svg>
  );
}

/** Flag tri-band rule — black · red · green, with white separators. Unity · Pride · Future. */
export function FlagRule({ className }: { className?: string }) {
  return (
    <span className={cn("flag-rule", className)} aria-hidden="true">
      <span style={{ background: "#000000" }} />
      <span style={{ background: "#ffffff", flexBasis: 2, flexGrow: 0 }} />
      <span style={{ background: "#CE1126" }} />
      <span style={{ background: "#ffffff", flexBasis: 2, flexGrow: 0 }} />
      <span style={{ background: "#078930" }} />
    </span>
  );
}

/** Section kicker with the flag rule beneath — the recurring header motif. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="kicker">{children}</span>
      <FlagRule />
    </div>
  );
}

/** Text wordmark — placeholder until the official logo lockup is supplied. */
export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <StarMark className="h-5 w-5 text-gold" />
      <span className="leading-none">
        <span
          className={cn(
            "block font-serif text-base font-semibold tracking-wide",
            tone === "light" ? "text-paper" : "text-nile"
          )}
        >
          SOUTH SUDAN
        </span>
        <span
          className={cn(
            "block font-sans text-[0.6rem] font-medium uppercase tracking-[0.35em]",
            tone === "light" ? "text-gold-300" : "text-gold-600"
          )}
        >
          Airlines
        </span>
      </span>
    </span>
  );
}
