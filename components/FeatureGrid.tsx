import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";

export interface FeatureItem {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}

export function FeatureGrid({
  kicker,
  heading,
  body,
  items,
  tone = "white",
  compact = false,
  columns = 3,
  id,
}: {
  kicker: string;
  heading: string;
  body?: string;
  items: FeatureItem[];
  tone?: "white" | "mist";
  compact?: boolean;
  columns?: 2 | 3 | 4;
  id?: string;
}) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section tone={tone} id={id}>
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 text-[28px] sm:text-[34px]">{heading}</h2>
          {body && <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>}
        </div>
        <ul className={`mt-10 grid gap-4 ${colClass}`}>
          {items.map((item) => (
            <li
              key={item.title}
              className={compact ? "rounded-full border border-divider bg-white px-5 py-3" : "flex flex-col gap-2 rounded-[var(--radius-card)] border border-divider bg-white p-6"}
            >
              <p className={compact ? "text-sm font-bold text-teal-dark" : "text-lg font-bold text-teal-dark"}>{item.title}</p>
              {!compact && <p className="text-sm leading-relaxed text-body">{item.body}</p>}
              {item.href && item.cta && (
                <Link href={item.href} className="mt-1 text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4">
                  {item.cta}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
