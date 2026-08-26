import { EvidenceBadge } from "@/components/AnnotationToggle";
import type { EvidenceStatus } from "@/lib/types";

type PlaceholderVariant = "movement" | "conference" | "studio" | "workplace" | "portrait" | "gathering";

const PATTERNS: Record<PlaceholderVariant, (id: string) => React.ReactNode> = {
  movement: (id) => (
    <>
      <path d="M-20 140 C 90 40, 210 220, 340 90" stroke={`url(#${id})`} strokeWidth="2.5" fill="none" />
      <path d="M-20 190 C 100 100, 220 260, 340 150" stroke="#DDE5E3" strokeWidth="1.5" fill="none" />
      <circle cx="250" cy="70" r="34" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
    </>
  ),
  conference: (id) => (
    <>
      {[0, 1, 2, 3].map((row) => (
        <rect key={row} x={20 + row * 4} y={40 + row * 42} width={280 - row * 8} height="22" rx="6" fill={row % 2 === 0 ? `url(#${id})` : "#DDE5E3"} opacity={0.9 - row * 0.12} />
      ))}
    </>
  ),
  studio: (id) => (
    <>
      <rect x="40" y="30" width="220" height="150" rx="18" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="150" cy="105" r="30" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M136 105 l10 10 l20 -24" stroke="#BD964A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  workplace: (id) => (
    <>
      <rect x="10" y="130" width="290" height="4" fill="#DDE5E3" />
      {[40, 90, 140, 190, 240].map((x, i) => (
        <rect key={x} x={x} y={130 - (i % 3 === 0 ? 70 : i % 2 === 0 ? 50 : 90)} width="34" height={i % 3 === 0 ? 70 : i % 2 === 0 ? 50 : 90} fill={i % 2 === 0 ? `url(#${id})` : "#DDE5E3"} opacity="0.85" />
      ))}
    </>
  ),
  portrait: (id) => (
    <>
      <circle cx="150" cy="80" r="46" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M80 200 C 90 140, 210 140, 220 200" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
    </>
  ),
  gathering: (id) => (
    <>
      {[70, 130, 190, 250].map((cx, i) => (
        <circle key={cx} cx={cx} cy={90 + (i % 2 === 0 ? -10 : 10)} r="26" fill="none" stroke={i % 2 === 0 ? `url(#${id})` : "#DDE5E3"} strokeWidth="2" />
      ))}
    </>
  ),
};

export function EvidencePlaceholder({
  variant,
  caption,
  status = "placeholder",
  note,
  aspect = "4/3",
  className = "",
}: {
  variant: PlaceholderVariant;
  caption: string;
  status?: EvidenceStatus;
  note?: string;
  aspect?: "4/3" | "16/9" | "1/1" | "3/2";
  className?: string;
}) {
  const gradientId = `grad-${variant}`;
  const showGovernanceAnnotation = process.env.NODE_ENV !== "production";

  return (
    <figure className={`relative overflow-hidden rounded-[var(--radius-card)] border border-divider bg-mist ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <svg
          viewBox="0 0 300 220"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#17535B" />
              <stop offset="100%" stopColor="#39AEB8" />
            </linearGradient>
          </defs>
          {PATTERNS[variant](gradientId)}
        </svg>
        {showGovernanceAnnotation && (
          <div className="absolute right-3 top-3">
            <EvidenceBadge status={status} note={note} />
          </div>
        )}
      </div>
      <figcaption className="border-t border-divider bg-white px-4 py-3 text-sm text-body">
        {caption}
      </figcaption>
    </figure>
  );
}
