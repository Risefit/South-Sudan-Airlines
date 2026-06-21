import type { TierKey } from "@/lib/loyalty";
import { cn } from "@/lib/utils";

/**
 * Minimal stylised silhouettes of the four Birds of the Sudd used as tier emblems.
 * Filled with currentColor so each tier can tint its own accent.
 */
export function BirdMark({
  tier,
  className,
}: {
  tier: TierKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-hidden="true"
      fill="currentColor"
      stroke="currentColor"
    >
      {SHAPES[tier]}
    </svg>
  );
}

const SHAPES: Record<TierKey, React.ReactNode> = {
  // Weaver — small, round, perched songbird
  weaver: (
    <g strokeWidth="0">
      <ellipse cx="28" cy="36" rx="13" ry="10" />
      <circle cx="42" cy="27" r="7.5" />
      <path d="M49 25 L60 23 L49 31 Z" />
      <path d="M16 36 L4 43 L18 44 Z" />
      <line x1="30" y1="46" x2="30" y2="56" strokeWidth="2.5" />
      <line x1="36" y1="46" x2="36" y2="56" strokeWidth="2.5" />
    </g>
  ),
  // Crowned Crane — tall, elegant neck with a crest
  crane: (
    <g>
      <ellipse cx="24" cy="40" rx="12" ry="8" strokeWidth="0" />
      <path d="M27 36 C31 26 39 22 36 10 L41 10 C44 24 35 32 33 41 Z" strokeWidth="0" />
      <circle cx="39" cy="9" r="4.5" strokeWidth="0" />
      <path d="M45 8 L54 6 L45 12 Z" strokeWidth="0" />
      <line x1="37" y1="4" x2="35" y2="-1" strokeWidth="1.6" />
      <line x1="40" y1="4" x2="40" y2="-2" strokeWidth="1.6" />
      <line x1="43" y1="4" x2="45" y2="-1" strokeWidth="1.6" />
      <line x1="20" y1="48" x2="20" y2="60" strokeWidth="2.4" />
      <line x1="28" y1="48" x2="28" y2="60" strokeWidth="2.4" />
    </g>
  ),
  // Shoebill — stocky body, very large hooked bill
  shoebill: (
    <g>
      <ellipse cx="26" cy="40" rx="13" ry="12" strokeWidth="0" />
      <circle cx="40" cy="26" r="9" strokeWidth="0" />
      <path d="M46 22 Q60 24 56 35 Q49 33 44 31 Z" strokeWidth="0" />
      <line x1="22" y1="51" x2="22" y2="61" strokeWidth="2.6" />
      <line x1="31" y1="51" x2="31" y2="61" strokeWidth="2.6" />
    </g>
  ),
  // Fish Eagle — wings spread in flight
  eagle: (
    <g strokeWidth="0">
      <ellipse cx="32" cy="36" rx="5" ry="12" />
      <path d="M31 30 Q15 12 3 21 Q17 28 30 36 Z" />
      <path d="M33 30 Q49 12 61 21 Q47 28 34 36 Z" />
      <circle cx="32" cy="22" r="4.5" />
      <path d="M32 19 L32 12 L36 16 Z" />
    </g>
  ),
};
