const origin = "https://www.corporateyoga.com.au";
const organisationId = `${origin}/#organisation`;
const founderId = `${origin}/about-us#debby-lewis`;

const organisationNode = {
  "@type": "Organization",
  "@id": organisationId,
  name: "Corporate Yoga Australia",
  legalName: "Deborah Gail Lewis trading as Corporate Yoga Australia",
  url: origin,
  logo: `${origin}/brand/cya-logo-mark.svg`,
  description:
    "Human-led workplace yoga, Pilates, mindfulness, workshops and wellbeing programs for Australian organisations, delivered onsite, online and across locations.",
  foundingDate: "2014",
  telephone: "1300 373 363",
  email: "info@corporateyoga.com.au",
  areaServed: { "@type": "Country", name: "Australia" },
  founder: { "@id": founderId },
  sameAs: [
    "https://au.linkedin.com/company/corporate-yoga-australia",
    "https://www.instagram.com/corporateyoga_australia/",
    "https://www.facebook.com/corporateyogaaustralia/",
    "https://x.com/corporateyogis",
  ],
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

function breadcrumbElements(items: BreadcrumbItem[]) {
  return [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${origin}/`,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: new URL(item.path, origin).toString(),
    })),
  ];
}

export function HomeStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organisationNode,
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

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const finalPath = items.length > 0 ? items[items.length - 1].path : "/";
  const url = new URL(finalPath, origin).toString();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbElements(items),
      }}
    />
  );
}

export function FounderStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": founderId,
        name: "Debby Lewis",
        jobTitle: "Founder",
        url: `${origin}/about-us`,
        worksFor: { "@id": organisationId },
        sameAs: [
          "https://au.linkedin.com/in/lewisdebby",
          "https://www.instagram.com/debby_lewis/",
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
          organisationNode,
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
            itemListElement: breadcrumbElements(breadcrumbItems),
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
  editorName,
  reviewerName,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  authorName: string;
  editorName?: string;
  reviewerName?: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = new URL(path, origin).toString();
  const author =
    authorName === "Corporate Yoga Australia"
      ? { "@id": organisationId }
      : authorName === "Debby Lewis"
        ? { "@id": founderId }
        : { "@type": "Person", name: authorName };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organisationNode,
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline,
            description,
            url,
            datePublished,
            dateModified,
            author,
            ...(editorName ? { editor: { "@type": "Person", name: editorName } } : {}),
            ...(reviewerName ? { reviewedBy: { "@type": "Person", name: reviewerName } } : {}),
            publisher: { "@id": organisationId },
            mainEntityOfPage: url,
            inLanguage: "en-AU",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: breadcrumbElements([
              { name: "Insights", path: "/blog" },
              { name: headline, path },
            ]),
          },
        ],
      }}
    />
  );
}
