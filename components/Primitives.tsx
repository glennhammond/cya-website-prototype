import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "white",
  className = "",
  as: Tag = "section",
  ariaLabel,
  id,
}: {
  children: ReactNode;
  tone?: "white" | "mist" | "teal";
  className?: string;
  as?: ElementType;
  ariaLabel?: string;
  id?: string;
}) {
  const toneClass =
    tone === "mist"
      ? "bg-mist"
      : tone === "teal"
        ? "bg-teal-dark text-white"
        : "bg-white";
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-20 ${toneClass} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Kicker({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "aqua" | "white" }) {
  const toneClass = tone === "gold" ? "text-gold" : tone === "aqua" ? "text-aqua" : "text-white/80";
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.08em] ${toneClass} font-[family-name:var(--font-body)]`}>
      {children}
    </p>
  );
}
