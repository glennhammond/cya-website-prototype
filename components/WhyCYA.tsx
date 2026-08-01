import { StatementList } from "@/components/StatementList";

export function WhyCYA({
  kicker,
  heading,
  points,
}: {
  kicker: string;
  heading: string;
  points: { title: string; body: string }[];
}) {
  return <StatementList kicker={kicker} heading={heading} items={points} tone="white" columns={2} />;
}
