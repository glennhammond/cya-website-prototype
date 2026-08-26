const origin = "https://www.corporateyoga.com.au";
const organisationId = `${origin}/#organisation`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function HomeStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": organisationId,
            name: "Corporate Yoga Australia",
            url: origin,
            foundingDate: "2014",
          },
          {
            "@type": "WebSite",
            "@id": `${origin}/#website`,
            url: origin,
            name: "Corporate Yoga Australia",
            publisher: { "@id": organisationId },
            inLanguage: "en-AU",
          },
        ],
      }}
    />
  );
}

export function ServiceStructuredData({
  name,
  description,
  path,
  breadcrumbLabel,
  breadcrumbs,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbLabel: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const url = new URL(path, origin).toString();
  const breadcrumbItems = breadcrumbs ?? [{ name: breadcrumbLabel, path }];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name,
            description,
            url,
            provider: { "@id": organisationId },
            areaServed: { "@type": "Country", name: "Australia" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${origin}/`,
              },
              ...breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.name,
                item: new URL(item.path, origin).toString(),
              })),
            ],
          },
        ],
      }}
    />
  );
}

export function ArticleStructuredData({
  headline,
  description,
  path,
  authorName,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  authorName: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = new URL(path, origin).toString();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline,
            description,
            url,
            datePublished,
            dateModified,
            author: {
              "@type": authorName === "Corporate Yoga Australia" ? "Organization" : "Person",
              name: authorName,
            },
            publisher: { "@id": organisationId },
            mainEntityOfPage: url,
            inLanguage: "en-AU",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${origin}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: `${origin}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: headline,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}
