import { OIL_CORRIDOR } from "@/lib/content";

// Static SVG of the cargo oil-corridor network, ex-Juba.
export function OilCorridorMap() {
  const hub = OIL_CORRIDOR.find((p) => p.hub)!;
  return (
    <div className="overflow-hidden rounded-2xl bg-nile p-3 ring-1 ring-nile/15">
      <svg viewBox="0 0 520 440" className="h-auto w-full" role="img" aria-label="Cargo oil-corridor route map from Juba">
        <defs>
          <linearGradient id="cargoArc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#1B6E9C" />
            <stop offset="100%" stopColor="#D4A845" />
          </linearGradient>
        </defs>

        {/* Region + Nile flow-line */}
        <path
          d="M120 120 Q200 80 300 100 Q400 80 440 150 Q460 220 390 250 Q300 300 220 290 Q120 270 110 190 Q105 150 120 120 Z"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(212,168,69,0.22)"
          strokeWidth="1"
        />
        <path d="M250 360 Q255 280 290 200 Q320 160 360 150" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="2 5" />

        {/* Corridor arcs */}
        {OIL_CORRIDOR.filter((p) => !p.hub).map((p) => {
          const mx = (hub.x + p.x) / 2;
          const my = (hub.y + p.y) / 2 - 40;
          return (
            <path
              key={p.name}
              d={`M ${hub.x} ${hub.y} Q ${mx} ${my} ${p.x} ${p.y}`}
              fill="none"
              stroke="url(#cargoArc)"
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity="0.85"
            />
          );
        })}

        {/* Nodes */}
        {OIL_CORRIDOR.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r={p.hub ? 7 : 5} fill={p.hub ? "#D4A845" : "#FAF6EF"} />
            {p.hub && <circle cx={p.x} cy={p.y} r="12" fill="none" stroke="#D4A845" strokeWidth="1" opacity="0.5" />}
            <text
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              fontSize="12"
              fontWeight={p.hub ? 700 : 500}
              fill="rgba(250,246,239,0.9)"
            >
              {p.name}
            </text>
          </g>
        ))}
      </svg>
      <p className="px-3 pb-2 pt-1 text-right text-[0.65rem] uppercase tracking-widest text-paper/40">
        Dedicated cargo network · Upper Nile oil corridor
      </p>
    </div>
  );
}
