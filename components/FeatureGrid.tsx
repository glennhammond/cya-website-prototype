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
          <h2 className="cya-section-title mt-5">{heading}</h2>
          {body && <p className="cya-lead mt-5">{body}</p>}
        </div>
        <ul className={`mt-10 grid gap-4 ${colClass}`}>
          {items.map((item) => (
            <li
              key={item.title}
              className={compact ? "cya-card px-5 py-4" : "cya-card flex flex-col gap-2 p-6"}
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
