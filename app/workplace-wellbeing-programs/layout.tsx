import { ServiceStructuredData } from "@/components/StructuredData";

export default function WorkplaceWellbeingProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Workplace Wellbeing Programs"
        description="Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams."
        path="/workplace-wellbeing-programs"
        breadcrumbLabel="Workplace Wellbeing Programs"
      />
    </>
  );
}
