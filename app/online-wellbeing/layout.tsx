import { ServiceStructuredData } from "@/components/StructuredData";

export default function OnlineWellbeingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceStructuredData
        name="Online Workplace Wellbeing"
        description="Human-led online workplace wellbeing for remote, hybrid and distributed teams, combining live experiences, on-demand practices and Wellbeing Studio continuity."
        path="/online-wellbeing"
        breadcrumbLabel="Online Wellbeing"
      />
    </>
  );
}
