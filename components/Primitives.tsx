import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  /** "narrow" gives typographic-only moments (e.g. QuietIntro) a deliberately shorter reading measure than the site's normal 1280px grid. */
  size?: "default" | "narrow";
}) {
  const maxWidth = size === "narrow" ? "max-w-[var(--container-narrow)]" : "max-w-[var(--container-max)]";
  return (
    <div className={`mx-auto w-full ${maxWidth} px-6 sm:px-10 lg:px-16 ${className}`}>
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
  tone?: "white" | "page" | "mist" | "warm";
  className?: string;
  as?: ElementType;
  ariaLabel?: string;
  id?: string;
}) {
  const toneClass =
    tone === "page"
      ? "bg-[var(--cya-surface-page)]"
      : tone === "mist"
        ? "bg-[var(--cya-surface-subtle)]"
        : tone === "warm"
          ? "bg-[var(--cya-surface-warm)]"
          : "bg-[var(--cya-surface-base)]";
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-24 ${toneClass} py-10 sm:py-14 lg:py-16 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Kicker({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "aqua" | "white" | "pale";
}) {
  const toneClass =
    tone === "gold"
      ? "text-ochre-ink"
      : tone === "aqua"
        ? "text-teal"
        : tone === "pale"
          ? "text-teal"
          : "text-white/80";
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.08em] ${toneClass} font-[family-name:var(--font-body)]`}>
      {children}
    </p>
  );
}
