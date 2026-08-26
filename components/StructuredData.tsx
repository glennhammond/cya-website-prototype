const origin = "https://www.corporateyoga.com.au";
const organisationId = `${origin}/#organisation`;

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
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbLabel: string;
}) {
  const url = new URL(path, origin).toString();

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
              {
                "@type": "ListItem",
                position: 2,
                name: breadcrumbLabel,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}
