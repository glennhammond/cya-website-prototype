import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";

export interface DividerListItem {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}

/**
 * Rows separated by hairlines, label left / description right. For reference
 * or spec-sheet content where a card grid would just add unnecessary weight.
 */
export function DividerList({
  kicker,
  heading,
  body,
  items,
  tone = "white",
  id,
}: {
  kicker: string;
  heading: string;
  body?: string;
  items: DividerListItem[];
  tone?: "white" | "mist";
  id?: string;
}) {
  return (
    <Section tone={tone} id={id}>
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
          {body && <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>}
        </div>
        <dl className="mt-10 divide-y divide-divider border-t border-b border-divider">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
              <dt className="shrink-0 text-base font-bold text-teal-dark sm:w-56">{item.title}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-3 text-sm text-body">
                {item.body}
                {item.href && item.cta && (
                  <Link href={item.href} className="font-bold text-teal-dark underline decoration-2 underline-offset-4">
                    {item.cta}
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
