import Link from "next/link";
import type { CTAVariant } from "@/lib/types";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] px-6 text-[15px] font-bold leading-[1.2] tracking-[0.01em] transition-colors";

const variants: Record<CTAVariant, string> = {
  primary: "bg-gold text-teal-dark hover:bg-[#a8823f]",
  secondary: "border border-teal text-teal-dark bg-white hover:bg-mist",
  text: "min-h-0 px-0 font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal",
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
