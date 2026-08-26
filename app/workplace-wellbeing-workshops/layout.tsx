import { ServiceStructuredData } from "@/components/StructuredData";

export default function WorkplaceWellbeingWorkshopsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Workplace Wellbeing Workshops & Expert Experiences"
        description="Expert-led workplace wellbeing workshops and Lunch & Learns for Australian teams, including stress management, sleep, nutrition, mindfulness and breathwork."
        path="/workplace-wellbeing-workshops"
        breadcrumbLabel="Workplace Wellbeing Workshops"
      />
    </>
  );
}
