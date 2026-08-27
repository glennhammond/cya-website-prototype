import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import type { CTAVariant } from "@/lib/types";

const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] px-6 text-[15px] font-semibold leading-5 transition-colors";

const variants: Record<CTAVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "border border-teal bg-white text-teal-dark hover:bg-mist",
  text: "min-h-0 rounded-none px-0 text-sm text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal",
};

export function CtaLink({
  href,
  variant = "primary",
  children,
  external,
  onClick,
  className = "",
}: {
  href: string;
  variant?: CTAVariant;
  children: ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
