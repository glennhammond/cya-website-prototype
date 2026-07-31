import type { CTA, NavItem } from "@/lib/types";

export const primaryNav: NavItem[] = [
  {
    label: "Workplace wellbeing",
    href: "/workplace-wellbeing",
    children: [
      {
        label: "Movement",
        href: "/workplace-wellbeing/movement",
        description: "Yoga, Pilates, mobility and desk movement, adapted to real workplaces.",
      },
    ],
  },
  { label: "Conferences and events", href: "/conferences-events" },
  { label: "Programs", href: "/programs" },
  { label: "Wellbeing Studio", href: "/wellbeing-studio" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
];

export const utilityNav: NavItem[] = [{ label: "Resources", href: "/resources" }];

export const memberSignInHref = "https://studio.corporateyoga.com.au";

export const primaryCTA: CTA = {
  label: "Book a wellbeing consultation",
  href: "/consultation",
  variant: "primary",
};

export const footerLegalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Member access", href: "/member-access" },
];
