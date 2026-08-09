import Link from "next/link";
import type { CTAVariant } from "@/lib/types";

/**
 * Shape matches Wellbeing Studio's own product UI (full pill, bold uppercase
 * label, tracked-out letterspacing) rather than the site's earlier softer
 * rounded-rect - brand consistency with the real platform. The global gold
 * uses the Studio gold and softly rounded rectangular shape.
 */
const base = "inline-flex min-h-12 items-center justify-center gap-2 font-bold leading-[1.2] transition-colors";

const variants: Record<CTAVariant, string> = {
  primary: "rounded-[18px] px-8 text-[15px] uppercase tracking-[0.06em] bg-gold text-white shadow-[0_10px_24px_rgba(174,137,65,0.22)] hover:bg-[var(--cya-gold-hover)]",
  secondary: "rounded-[18px] px-7 text-[15px] uppercase tracking-[0.06em] border border-teal text-teal-dark bg-white hover:bg-mist",
  text: "min-h-0 px-0 text-sm text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal",
};

export function CtaLink({
  href,
  variant = "primary",
  children,
  external,
  className = "",
}: {
  href: string;
  variant?: CTAVariant;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
