import { ServiceStructuredData } from "@/components/StructuredData";

export default function WorkplaceYogaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Workplace Yoga"
        description="Human-led workplace Yoga sessions for Australian teams, adapted to real workplaces with one-off, recurring, onsite and online delivery."
        path="/workplace-yoga"
        breadcrumbLabel="Workplace Yoga"
      />
    </>
  );
}
