import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { insightArticles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Workplace Wellbeing Insights",
  description: "Practical thinking and useful guides on workplace wellbeing, movement, mindfulness and making wellbeing part of working life.",
  alternates: { canonical: "/blog" },
};

const imageFor = (category: string) => {
  const value = category.toLowerCase();
  if (value.includes("yoga") || value.includes("movement")) return "/images/selected/cya-movement-outdoor-group.webp";
  if (value.includes("mind") || value.includes("breath")) return "/images/selected/cya-about-worldview-group-rest.webp";
  return "/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp";
};

const topics = [
  ["Planning", "Programs, participation and implementation", "/workplace-wellbeing-programs"],
  ["Movement", "Yoga, Pilates and accessible movement", "/movement"],
  ["Mindfulness", "Meditation, breathwork and attention", "/meditation-mindfulness"],
  ["Working life", "Simple practices for real workdays", "/blog/what-is-work-wellness"],
] as const;

export default function InsightsPage() {
  const now = Date.now();
  const articles = [...insightArticles]
    .filter((article) => new Date(article.datePublished).getTime() <= now)
    .sort((a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime());
  const featured = articles.find((article) => article.slug.includes("nervous-system")) ?? articles[0];
  const latest = articles.filter((article) => article.slug !== featured?.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Insights", path: "/blog" }]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div><ProductionKicker>Insights</ProductionKicker><h1 className="mt-5 max-w-3xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Ideas for making wellbeing part of working life</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-body)]">Practical thinking, useful guides and simple ways to bring movement, mindfulness and wellbeing into the workday.</p><nav aria-label="Insight topics" className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[var(--cya-teal-dark)]"><Link href="/blog">All</Link><Link href="#planning">Planning</Link><Link href="#movement">Movement</Link><Link href="#mindfulness">Mindfulness</Link></nav></div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-home-hero-debby-workplace-movement.jpg" alt="A workplace wellbeing facilitator in a real working environment." fill priority sizes="(min-width: 1280px) 680px, (min-width: 1024px) 54vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
      </section>

      {featured && <section className="bg-[var(--cya-surface-page)] pb-20 pt-8 lg:pb-24 lg:pt-12"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-conferences-hero-facilitator-led-group.webp" alt="A workplace group takes part in a facilitated wellbeing experience." fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Featured insight</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">{featured.title}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">{featured.summary}</p><Link href={`/blog/${featured.slug}`} className="mt-7 inline-flex font-semibold text-[var(--cya-charcoal)] hover:underline">Read the insight →</Link></div></ProductionContainer></section>}

      <section className="bg-white py-20 lg:py-24"><ProductionContainer><h2 className="text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Latest insights</h2><div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">{latest.map((article) => <article key={article.slug} className="min-w-[84%] snap-start sm:min-w-[60%] md:min-w-0"><div className="relative aspect-[16/9] overflow-hidden bg-[var(--cya-surface-page)]"><Image src={imageFor(article.category)} alt="" fill sizes="(min-width: 768px) 33vw, 84vw" className="object-cover" /></div><p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--cya-ochre-ink)]">{article.category}</p><h3 className="mt-3 text-2xl font-semibold leading-7 text-[var(--cya-charcoal)]"><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><Link href={`/blog/${article.slug}`} className="mt-5 inline-flex font-semibold text-[var(--cya-charcoal)] hover:underline">Read →</Link></article>)}</div><p className="mt-2 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section id="planning" className="bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20"><div><ProductionKicker>Practical guide</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Workplace Wellbeing Implementation Guide</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">Turn a good intention into a practical, sustainable program.</p></div><div className="border-t border-[var(--cya-divider)]">{[["Start with the workplace need","/workplace-wellbeing-programs"],["Make participation easy","/workplace-wellbeing-programs"],["Build a rhythm that can last","/workplace-wellbeing-programs"]].map(([label,href]) => <Link key={label} href={href} className="flex items-center justify-between gap-6 border-b border-[var(--cya-divider)] py-7 text-lg font-semibold text-[var(--cya-charcoal)] hover:text-[var(--cya-teal-dark)]"><span>{label}</span><span aria-hidden="true">→</span></Link>)}</div></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer><h2 className="text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Explore by topic</h2><div className="mt-10 flex snap-x snap-mandatory gap-0 overflow-x-auto border-y border-[var(--cya-divider)] pb-0 md:grid md:grid-cols-4 md:overflow-visible">{topics.map(([title,body,href], index) => <article id={title.toLowerCase().replace(" ", "-")} key={title} className="min-w-[78%] snap-start border-r border-[var(--cya-divider)] px-6 py-7 last:border-r-0 sm:min-w-[50%] md:min-w-0"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-2xl font-semibold text-[var(--cya-charcoal)]">{title}</h3><p className="mt-3 leading-7 text-[var(--cya-body)]">{body}</p><Link href={href} className="mt-5 inline-flex font-semibold text-[var(--cya-charcoal)] hover:underline">Explore →</Link></article>)}</div><p className="mt-3 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section className="border-t border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] py-16 lg:py-20"><ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"><div><h2 className="max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Ready to make wellbeing part of working life?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-teal-dark)]">Explore the services or tell us what you are planning.</p></div><ProductionAction href="/contact?interest=program">Tell us what you’re planning</ProductionAction></ProductionContainer></section>
    </>
  );
}
