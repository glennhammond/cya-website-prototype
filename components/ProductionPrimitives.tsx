import Image from "next/image";
import Link from "next/link";
import type { MediaAsset } from "@/lib/types";

export function ProductionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12 ${className}`}>{children}</div>;
}

export function ProductionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.08em] ${light ? "text-[var(--cya-text-inverse)]" : "text-[var(--cya-teal)]"}`}>{children}</p>;
}

export function ProductionAction({ href, children, style = "primary" }: { href: string; children: React.ReactNode; style?: "primary" | "secondary" }) {
  const styles = style === "secondary"
    ? "border border-[var(--cya-teal)] bg-[var(--cya-surface-base)] text-[var(--cya-teal-dark)] hover:bg-[var(--cya-surface-subtle)]"
    : "border border-[var(--cya-action-primary-bg)] bg-[var(--cya-action-primary-bg)] text-[var(--cya-action-primary-text)] hover:border-[var(--cya-teal-dark)] hover:bg-[var(--cya-teal-dark)]";
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] px-6 text-[15px] font-semibold leading-5 transition-colors ${styles}`}>{children}</Link>;
}

export function ProductionPhoto({ asset, label, priority = false, className = "" }: { asset: MediaAsset; label: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`relative min-h-[360px] overflow-hidden lg:min-h-[520px] ${className}`}>
      <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes="100vw" className="object-cover" style={{ objectPosition: asset.focalDesktop ?? asset.focal ?? "50% 50%" }} />
      <figcaption className="absolute bottom-7 left-6 rounded-full bg-[var(--cya-surface-base)] px-4 py-2 text-[11px] font-semibold uppercase text-[var(--cya-teal-dark)] sm:left-10 lg:left-[max(3rem,calc((100vw-1280px)/2+3rem))]">{label}</figcaption>
    </figure>
  );
}

export function ProductionCard({ number, title, body, href, tone = "white" }: { number?: string; title: string; body: string; href?: string; tone?: "white" | "paper" | "field" }) {
  const surface = tone === "field" ? "bg-[var(--cya-surface-subtle)]" : tone === "paper" ? "bg-[var(--cya-surface-warm)]" : "bg-[var(--cya-surface-base)]";
  const content = (
    <div className={`cya-card h-full p-6 ${surface} ${href ? "transition-colors group-hover:bg-[var(--cya-surface-page)]" : ""}`}>
      {number && <p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p>}
      <h3 className="mt-4 text-xl font-semibold text-[var(--cya-teal-dark)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--cya-body)]">{body}</p>
    </div>
  );
  return href ? <Link href={href} className="group block h-full transition-transform hover:-translate-y-0.5">{content}</Link> : content;
}

export function ProductionClosing({ heading, body, href = "/contact", action = "Start planning" }: { heading: string; body: string; href?: string; action?: string }) {
  return (
    <section className="bg-[var(--cya-surface-page)] py-16 lg:py-20">
      <ProductionContainer>
        <div className="cya-panel grid gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:items-center lg:px-12">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--cya-teal-dark)] lg:text-4xl">{heading}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--cya-body)]">{body}</p>
          </div>
          <ProductionAction href={href}>{action}</ProductionAction>
        </div>
      </ProductionContainer>
    </section>
  );
}
