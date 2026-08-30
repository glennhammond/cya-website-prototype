import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleStructuredData } from "@/components/StructuredData";
import { Container, Kicker, Section } from "@/components/Primitives";
import { getInsightArticle, insightArticles } from "@/content/insights";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) notFound();

  return (
    <>
      <ArticleStructuredData
        headline={article.title}
        description={article.summary}
        path={`/blog/${article.slug}`}
        authorName={article.author}
        editorName={article.editor}
        reviewerName={article.expertReviewer?.name}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/blog" },
          { label: article.title },
        ]}
      />

      <article>
        <Section tone="page" className="pb-10">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Kicker>{article.category}</Kicker>
              <h1 className="cya-page-title mt-5">
                {article.title}
              </h1>
              <p className="cya-lead mt-6 text-xl">{article.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-body">
                <span>{article.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.datePublished}>{dateFormatter.format(new Date(article.datePublished))}</time>
                <span aria-hidden="true">·</span>
                <span>Refreshed {dateFormatter.format(new Date(article.dateModified))}</span>
              </div>
              {(article.editor || article.expertReviewer) && (
                <div className="mt-3 space-y-1 text-sm leading-relaxed text-body">
                  {article.editor && <p>Editorial production: {article.editor}</p>}
                  {article.expertReviewer && (
                    <p>
                      Expert review: {article.expertReviewer.name}, {article.expertReviewer.role}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Container>
        </Section>

        <Section tone="mist">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-ink">{article.intro}</p>

              <div className="mt-12 space-y-12">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-heading-md text-teal-dark">{section.heading}</h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-body">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3 border-l-2 border-aqua pl-6 text-base leading-7 text-body">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <aside className="mt-14 border-t border-divider pt-8">
                <h2 className="text-heading-sm text-teal-dark">Continue from here</h2>
                <ul className="mt-5 space-y-3">
                  {article.relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>

              {article.sources && article.sources.length > 0 && (
                <aside className="mt-10 border-t border-divider pt-8">
                  <h2 className="text-heading-sm text-teal-dark">Sources and scope</h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    These sources support the organisational and psychosocial-risk boundaries in this guidance. They
                    do not turn CYA services into WHS advice or controls.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-body">
                    {article.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          rel="noreferrer"
                          className="font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal"
                        >
                          {source.title}
                        </a>{" "}
                        — {source.publisher}
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

              <div className="cya-reading-surface mt-12 p-6 text-sm leading-relaxed text-body">
                This article is general workplace wellbeing information, not medical or psychological advice. CYA
                refreshes older guidance where needed so service claims remain proportionate to the available evidence.
              </div>
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}
