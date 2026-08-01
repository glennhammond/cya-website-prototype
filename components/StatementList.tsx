import { Container, Section, Kicker } from "@/components/Primitives";

export interface Statement {
  title: string;
  body: string;
}

/**
 * Typography-led list: a gold rule and text, no card border or background.
 * Use in place of a FeatureGrid when items are statements to read, not
 * distinct options to choose between.
 */
export function StatementList({
  kicker,
  heading,
  body,
  items,
  tone = "white",
  columns = 2,
  id,
}: {
  kicker: string;
  heading: string;
  body?: string;
  items: Statement[];
  tone?: "white" | "mist";
  columns?: 2 | 3;
  id?: string;
}) {
  const colClass = columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <Section tone={tone} id={id}>
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
          {body && <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>}
        </div>
        <dl className={`mt-10 grid gap-8 ${colClass}`}>
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-gold pl-5">
              <dt className="text-lg font-bold text-teal-dark">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
