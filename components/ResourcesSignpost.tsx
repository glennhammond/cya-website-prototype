import Link from "next/link";
import { Container, Kicker } from "@/components/Primitives";

/**
 * A restrained signpost, not a fourth card grid - Resources already has its
 * own destination page; this is a pointer to it, sized to match its actual
 * weight in the homepage narrative rather than competing with the sections
 * either side of it.
 */
export function ResourcesSignpost({
  kicker,
  heading,
  links,
}: {
  kicker: string;
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="border-y border-divider bg-white py-12 sm:py-14">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-2 text-heading-sm text-teal-dark">{heading}</h2>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-teal-dark underline decoration-2 underline-offset-4 hover:text-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
