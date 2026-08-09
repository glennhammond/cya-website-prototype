import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { caseStudies } from "@/content/proof";

function resolveStudy(story?: string) {
  return caseStudies.find((item) => item.slug === story) ?? caseStudies[0];
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ story?: string }>;
}): Promise<Metadata> {
  const { story } = await searchParams;
  const match = resolveStudy(story);
  return {
    title: match.headline,
    description: match.summary,
  };
}

export default async function CaseStudyPage({
  searchParams,
}: {
  searchParams: Promise<{ story?: string }>;
}) {
  const { story } = await searchParams;
  const match = resolveStudy(story);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/proof" },
          { label: match.clientLabel },
        ]}
      />
      <CaseStudyTemplate study={match} />
    </>
  );
}
