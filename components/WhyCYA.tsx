import { Container, Section, Kicker } from "@/components/Primitives";

export function WhyCYA({
  kicker,
  heading,
  points,
}: {
  kicker: string;
  heading: string;
  points: { title: string; body: string }[];
}) {
  return (
    <Section tone="mist">
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
        </div>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="border-l-2 border-gold pl-5">
              <dt className="text-lg font-bold text-teal-dark">{point.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{point.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
