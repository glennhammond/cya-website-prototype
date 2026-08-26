import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Kicker, Section } from "@/components/Primitives";
import { insightArticles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Workplace Wellbeing Insights",
  description:
    "Practical Corporate Yoga Australia insights on workplace Yoga, mindfulness, breathwork, sleep and workplace wellbeing program design.",
  alternates: {
    canonical: "/blog",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function InsightsPage() {
  const articles = [...insightArticles].sort(
    (a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime(),
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      <Section tone="white" className="pb-10">
        <Container>
          <div className="max-w-3xl">
            <Kicker>Insights</Kicker>
            <h1 className="mt-3 text-[36px] font-bold leading-tight text-teal-dark sm:text-[52px]">
              Practical thinking for wellbeing at work.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Useful guidance on workplace Yoga, mindfulness, breathwork, sleep and connected wellbeing programs.
              Older CYA articles have been refreshed where needed so the advice stays practical without relying on
              unsupported health or performance claims.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="flex h-full flex-col rounded-[var(--radius-card)] border border-divider bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-teal">
                  {article.category}
                </div>
                <h2 className="mt-3 text-heading-sm text-teal-dark">
                  <Link href={`/blog/${article.slug}`} className="hover:text-teal">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{article.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-body">
                  <span>{article.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.datePublished}>{dateFormatter.format(new Date(article.datePublished))}</time>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal"
                >
                  Read insight
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
