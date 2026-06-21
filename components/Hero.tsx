import Image from "next/image";
import { SearchWidget } from "@/components/SearchWidget";
import { FlagRule } from "@/components/brand";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] flex-col justify-end overflow-hidden">
      {/* Full-bleed livery still — the new nation rising at sunset */}
      <Image
        src="/livery/aircraft-sunset-hero.jpeg"
        alt="South Sudan Airlines aircraft in national livery flying above the clouds at sunset"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Nile-Blue gradient scrim — locks WCAG contrast over any photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-nile-900/85 via-nile-900/45 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-nile-900/70 via-transparent to-transparent"
      />

      <div className="container-site pb-8 pt-32">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <FlagRule className="!w-12" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-kicker text-gold-300">
              Unity · Pride · Future
            </span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            South Sudan&rsquo;s wings to the world
          </h1>
          <p className="mt-5 max-w-xl text-base text-paper/85 sm:text-lg">
            Daily flights from Juba to Malakal, Wau, Bentiu and Nairobi. Built to the
            standards of international aviation — by South Sudanese, for South Sudan.
          </p>
        </div>

        {/* Search widget — the hero's focal interactive element */}
        <div className="mt-8 max-w-5xl">
          <SearchWidget variant="hero" />
        </div>
      </div>
    </section>
  );
}
