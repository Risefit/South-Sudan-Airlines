"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ROUTES, PLANNED_CITIES } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Self-contained interactive SVG route map (no external map dependency / token).
 * Upgrade path: swap for react-simple-maps or a Mapbox GL layer when a base map
 * and tokens are provisioned — the route data in lib/data.ts stays the source.
 */
const NODES: Record<string, { x: number; y: number; label: string }> = {
  JUB: { x: 300, y: 360, label: "Juba" },
  WUU: { x: 180, y: 258, label: "Wau" },
  RBX: { x: 282, y: 198, label: "Bentiu" },
  MAK: { x: 392, y: 220, label: "Malakal" },
  NBO: { x: 506, y: 442, label: "Nairobi" },
};

// Planned cities placed loosely around the edge for the "coming soon" layer
const PLANNED_NODES: Record<string, { x: number; y: number }> = {
  "Port Sudan": { x: 470, y: 70 },
  Entebbe: { x: 360, y: 470 },
  "Addis Ababa": { x: 540, y: 250 },
  "Dar es Salaam": { x: 580, y: 500 },
};

function arcPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  const off = Math.min(70, len * 0.26);
  const cx = mx - (dy / len) * off;
  const cy = my + (dx / len) * off;
  return `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
}

export function RouteMapFull() {
  const [active, setActive] = useState<number | null>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [plane, setPlane] = useState<{ x: number; y: number; a: number } | null>(null);
  const raf = useRef<number | null>(null);

  const animate = useCallback((i: number | null) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setActive(i);
    if (i === null) {
      setPlane(null);
      return;
    }
    const path = pathRefs.current[i];
    if (!path) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const total = path.getTotalLength();
    if (reduce) {
      const p = path.getPointAtLength(total);
      setPlane({ x: p.x, y: p.y, a: 0 });
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 950);
      const p = path.getPointAtLength(total * t);
      const p2 = path.getPointAtLength(Math.min(total, total * t + 1));
      const a = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      setPlane({ x: p.x, y: p.y, a });
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="relative overflow-hidden rounded-2xl bg-nile p-3 ring-1 ring-nile/15">
        <svg viewBox="0 0 640 540" className="h-auto w-full" role="img" aria-label="South Sudan Airlines route map">
          <defs>
            <linearGradient id="arcFull" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1B6E9C" />
              <stop offset="100%" stopColor="#D4A845" />
            </linearGradient>
          </defs>

          {/* Stylised region */}
          <path
            d="M140 150 Q210 100 300 120 Q400 95 450 160 Q480 220 420 270 Q400 340 320 370 Q230 380 185 320 Q120 250 140 150 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(212,168,69,0.25)"
            strokeWidth="1"
          />
          {/* White Nile flow-line */}
          <path
            d="M300 360 Q288 300 305 250 Q292 215 282 198"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
            strokeDasharray="2 5"
          />

          {/* Planned (ghost) arcs */}
          {Object.values(PLANNED_NODES).map((n, i) => (
            <path
              key={`p${i}`}
              d={arcPath(NODES.JUB.x, NODES.JUB.y, n.x, n.y)}
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          ))}

          {/* Live arcs */}
          {ROUTES.map((r, i) => (
            <path
              key={r.to}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              d={arcPath(NODES[r.from].x, NODES[r.from].y, NODES[r.to].x, NODES[r.to].y)}
              fill="none"
              stroke={active === i ? "url(#arcFull)" : "rgba(255,255,255,0.3)"}
              strokeWidth={active === i ? 2.75 : 1.75}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          ))}

          {/* Planned nodes */}
          {Object.entries(PLANNED_NODES).map(([name, n]) => (
            <g key={name}>
              <circle cx={n.x} cy={n.y} r="3" fill="rgba(250,246,239,0.5)" />
              <text x={n.x} y={n.y - 8} textAnchor="middle" fontSize="10" fill="rgba(250,246,239,0.5)">
                {name}
              </text>
            </g>
          ))}

          {/* Live nodes */}
          {Object.entries(NODES).map(([code, n]) => {
            const isHub = code === "JUB";
            const idx = ROUTES.findIndex((r) => r.to === code);
            const isActive = idx === active;
            return (
              <g key={code}>
                <circle cx={n.x} cy={n.y} r={isHub ? 6.5 : isActive ? 6 : 4.5} fill={isHub || isActive ? "#D4A845" : "#FAF6EF"} />
                {isHub && <circle cx={n.x} cy={n.y} r="12" fill="none" stroke="#D4A845" strokeWidth="1" opacity="0.5" />}
                <text
                  x={n.x}
                  y={n.y - (isHub || isActive ? 16 : 13)}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight={isHub || isActive ? 700 : 500}
                  fill={isActive ? "#E6CB8A" : "rgba(250,246,239,0.9)"}
                >
                  {n.label}
                </text>
              </g>
            );
          })}

          {plane && (
            <g transform={`translate(${plane.x} ${plane.y}) rotate(${plane.a})`}>
              <circle r="9" fill="#0A4F75" stroke="#D4A845" strokeWidth="1.5" />
              <g transform="rotate(45) translate(-5 -5) scale(0.42)">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#FAF6EF" />
              </g>
            </g>
          )}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-3 pb-2 pt-3 text-xs text-paper/80">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" /> Juba hub</span>
          <span className="inline-flex items-center gap-2"><span className="h-0.5 w-5 bg-paper/60" /> Phase 1 — flying</span>
          <span className="inline-flex items-center gap-2"><span className="h-0.5 w-5 border-t border-dashed border-paper/50" /> Planned</span>
        </div>
      </div>

      {/* Route list */}
      <div>
        <ul className="divide-y divide-nile/10 overflow-hidden rounded-2xl border border-nile/10 bg-white">
          {ROUTES.map((r, i) => (
            <li key={r.to}>
              <button
                type="button"
                onMouseEnter={() => animate(i)}
                onMouseLeave={() => animate(null)}
                onFocus={() => animate(i)}
                onBlur={() => animate(null)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors",
                  active === i ? "bg-nile/[0.05]" : "hover:bg-nile/[0.03]"
                )}
              >
                <span>
                  <span className="flight-code block text-sm font-semibold text-nile">
                    {r.from} → {r.to}
                  </span>
                  <span className="text-xs text-slatey">{r.city}</span>
                </span>
                <span className="text-right text-xs text-slatey">
                  <span className="block font-medium text-ink">{r.frequency}</span>
                  <span>{r.blockTime}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slatey">
          <span className="font-semibold text-nile">Planned network:</span>{" "}
          {PLANNED_CITIES.join(", ")}. Shown as aspirational — no dates committed.
        </p>
      </div>
    </div>
  );
}
