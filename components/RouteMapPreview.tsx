"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { ROUTES, PLANNED_CITIES } from "@/lib/data";
import { Kicker } from "@/components/brand";
import { cn } from "@/lib/utils";

// Stylised relative positions on the 600×480 canvas (not survey-accurate).
const NODES: Record<string, { x: number; y: number; label: string }> = {
  JUB: { x: 262, y: 332, label: "Juba" },
  WUU: { x: 150, y: 232, label: "Wau" },
  RBX: { x: 244, y: 176, label: "Bentiu" },
  MAK: { x: 342, y: 196, label: "Malakal" },
  NBO: { x: 452, y: 408, label: "Nairobi" },
};

// Quadratic arc from hub to destination, bowed for a great-circle feel
function arcPath(from: string, to: string) {
  const a = NODES[from];
  const b = NODES[to];
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  // perpendicular offset for the bow
  const off = Math.min(60, len * 0.28);
  const cx = mx - (dy / len) * off;
  const cy = my - (dx / len) * off * -1;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export function RouteMapPreview() {
  const [active, setActive] = useState<number | null>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [plane, setPlane] = useState<{ x: number; y: number; a: number } | null>(null);
  const raf = useRef<number | null>(null);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const animatePlane = useCallback(
    (i: number) => {
      const path = pathRefs.current[i];
      if (!path) return;
      const total = path.getTotalLength();
      if (reduce) {
        const p = path.getPointAtLength(total);
        setPlane({ x: p.x, y: p.y, a: 0 });
        return;
      }
      const start = performance.now();
      const dur = 900;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const p = path.getPointAtLength(total * t);
        const p2 = path.getPointAtLength(Math.min(total, total * t + 1));
        const a = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
        setPlane({ x: p.x, y: p.y, a });
        if (t < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    },
    [reduce]
  );

  const activate = useCallback(
    (i: number | null) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      setActive(i);
      if (i === null) setPlane(null);
      else animatePlane(i);
    },
    [animatePlane]
  );

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  return (
    <section className="bg-nile py-20 text-paper sm:py-28" aria-labelledby="map-heading">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-nile-900/40 p-2 ring-1 ring-white/10">
              <svg viewBox="0 0 600 480" className="h-auto w-full" role="img" aria-label="Route map from Juba">
                <defs>
                  <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1B6E9C" />
                    <stop offset="100%" stopColor="#D4A845" />
                  </linearGradient>
                </defs>

                {/* Stylised South Sudan region */}
                <path
                  d="M120 150 Q180 110 250 130 Q330 100 380 150 Q420 200 360 250 Q340 320 280 350 Q210 360 170 300 Q110 250 120 150 Z"
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(212,168,69,0.25)"
                  strokeWidth="1"
                />
                {/* White Nile flow-line motif */}
                <path
                  d="M262 332 Q250 280 270 230 Q255 190 244 176"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="2 5"
                />

                {/* Route arcs */}
                {ROUTES.map((r, i) => (
                  <path
                    key={r.to}
                    ref={(el) => {
                      pathRefs.current[i] = el;
                    }}
                    d={arcPath(r.from, r.to)}
                    fill="none"
                    stroke={active === i ? "url(#arc)" : "rgba(255,255,255,0.22)"}
                    strokeWidth={active === i ? 2.5 : 1.5}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                ))}

                {/* Destination + hub nodes */}
                {Object.entries(NODES).map(([code, n]) => {
                  const isHub = code === "JUB";
                  const idx = ROUTES.findIndex((r) => r.to === code);
                  const isActive = idx === active;
                  return (
                    <g key={code} className="transition-transform duration-300">
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={isHub ? 6 : isActive ? 6 : 4}
                        fill={isHub ? "#D4A845" : isActive ? "#D4A845" : "#FAF6EF"}
                      />
                      {isHub && (
                        <circle cx={n.x} cy={n.y} r="11" fill="none" stroke="#D4A845" strokeWidth="1" opacity="0.5" />
                      )}
                      <text
                        x={n.x}
                        y={n.y - (isActive ? 16 : 12)}
                        textAnchor="middle"
                        className="transition-all duration-300"
                        fontSize="12"
                        fontWeight={isHub || isActive ? 700 : 500}
                        fill={isActive ? "#E6CB8A" : "rgba(250,246,239,0.85)"}
                      >
                        {n.label}
                      </text>
                    </g>
                  );
                })}

                {/* Travelling aircraft glyph */}
                {plane && (
                  <g transform={`translate(${plane.x} ${plane.y}) rotate(${plane.a})`}>
                    <circle r="9" fill="#0A4F75" stroke="#D4A845" strokeWidth="1.5" />
                    <g transform="rotate(45) translate(-5 -5) scale(0.42)">
                      <path
                        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                        fill="#FAF6EF"
                      />
                    </g>
                  </g>
                )}
              </svg>

              <span className="absolute bottom-3 right-4 text-[0.65rem] uppercase tracking-widest text-paper/40">
                Phase 1 network · ex-Juba
              </span>
            </div>
          </div>

          {/* Copy + route list */}
          <div className="order-1 lg:order-2">
            <div className="[&_.kicker]:text-gold-300">
              <Kicker>The network</Kicker>
            </div>
            <h2 id="map-heading" className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Four routes from the Juba hub
            </h2>
            <p className="mt-3 max-w-md text-paper/75">
              Hover a route to trace the flight. Our launch network connects the cities
              South Sudan needs most — with East Africa and the world beyond to follow.
            </p>

            <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {ROUTES.map((r, i) => (
                <li key={r.to}>
                  <button
                    type="button"
                    onMouseEnter={() => activate(i)}
                    onMouseLeave={() => activate(null)}
                    onFocus={() => activate(i)}
                    onBlur={() => activate(null)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors",
                      active === i ? "text-gold-300" : "text-paper hover:text-gold-300"
                    )}
                  >
                    <span className="flight-code text-sm font-semibold">
                      {r.from} <ArrowRight className="inline h-3.5 w-3.5" aria-hidden /> {r.to}
                    </span>
                    <span className="flex items-center gap-4 text-xs text-paper/70">
                      <span className="hidden sm:inline">{r.frequency}</span>
                      <span>{r.blockTime}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs text-paper/55">
              <Plane className="mb-0.5 mr-1 inline h-3.5 w-3.5" aria-hidden />
              Planned next: {PLANNED_CITIES.slice(0, 4).join(", ")} and more.
            </p>

            <Link
              href="/routes"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-nile-900 transition-colors hover:bg-gold-300"
            >
              Explore the network
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
