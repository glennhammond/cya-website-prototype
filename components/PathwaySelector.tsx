import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";
import type { PathwayCard } from "@/lib/types";

export function PathwaySelector({
  kicker,
  heading,
  body,
  cards,
}: {
  kicker: string;
  heading: string;
  body: string;
  cards: PathwayCard[];
}) {
  return (
    <Section tone="mist">
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li key={card.title}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-divider bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-md"
              >
                <span aria-hidden="true" className="text-sm font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg text-teal-dark">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{card.description}</p>
                <span className="mt-4 text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4 group-hover:text-teal">
                  {card.cta}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
