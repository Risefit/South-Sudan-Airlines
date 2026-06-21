"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV } from "@/lib/data";
import { Wordmark } from "@/components/brand";
import { cn } from "@/lib/utils";

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const opaque = solid || scrolled || open;

  // Header is transparent over the hero, solidifies to Nile Blue on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        opaque
          ? "bg-nile/95 shadow-[0_1px_0_rgba(212,168,69,0.5)] backdrop-blur"
          : "bg-gradient-to-b from-nile-900/55 to-transparent"
      )}
    >
      {/* Utility bar */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container-site flex h-9 items-center justify-end gap-6 text-xs text-paper/80">
          {NAV.utility.map((u) => (
            <Link key={u.href} href={u.href} className="hover:text-gold-300">
              {u.label}
            </Link>
          ))}
          <a href="tel:+211" className="inline-flex items-center gap-1.5 hover:text-gold-300">
            <Phone className="h-3.5 w-3.5" aria-hidden /> +211 (TBC)
          </a>
          <div className="flex items-center gap-1 text-paper/60">
            <span className="font-semibold text-paper" aria-current="true">EN</span>
            <span aria-hidden>·</span>
            <Link href="/ar" className="hover:text-gold-300" lang="ar">ع</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-site flex h-16 items-center justify-between lg:h-[68px]">
        <Link href="/" aria-label="South Sudan Airlines — home">
          <Wordmark tone="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.primary.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <button className="inline-flex items-center gap-1 py-2 text-sm font-medium text-paper/90 hover:text-gold-300">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden />
                </button>
                <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-nile/10 bg-paper py-2 shadow-card">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-nile/[0.05] hover:text-nile"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-paper/90 hover:text-gold-300"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/book"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-nile-900 transition-colors hover:bg-gold-300"
          >
            Book
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-paper lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-nile lg:hidden">
          <nav className="container-site flex flex-col py-6" aria-label="Mobile">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mb-4 rounded-md bg-gold px-5 py-3.5 text-center text-base font-semibold text-nile-900"
            >
              Book a flight
            </Link>
            {NAV.primary.map((item) => (
              <div key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-paper"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="-mt-1 flex flex-col gap-1 pb-3 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-paper/70"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex items-center gap-6 text-sm text-paper/80">
              {NAV.utility.map((u) => (
                <Link key={u.href} href={u.href} onClick={() => setOpen(false)} className="hover:text-gold-300">
                  {u.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
