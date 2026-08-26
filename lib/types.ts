/**
 * Content governance contract.
 * Every piece of evidence-dependent content (claims, proof, figures, imagery)
 * carries a status so the annotation mode can surface what is publishable
 * versus what remains a controlled placeholder. See Docs/CYA_Claude_Code_Prototype_v1_Build_Prompt.md
 * and the Strategic Source of Truth §2 "Status language".
 */
export type EvidenceStatus =
  | "approved"
  | "safe-working-copy"
  | "evidence-required"
  | "commercial-dependency"
  | "legal-review"
  | "placeholder";

/**
 * A governed photograph in the CYA image library. Publication approval and
 * any internal production note remain part of the server-side governance
 * model; public client payloads should use PublicMediaAsset instead.
 */
export interface MediaAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  status: EvidenceStatus;
  note?: string;
  /**
   * CSS `object-position` value (e.g. "50% 30%") controlling the crop when
   * this asset fills a box narrower or shorter than its native aspect ratio.
   * Lets each placement be re-cropped from content, not by editing pixels.
   */
  focal?: string;
  /** Overrides `focal` at the lg breakpoint and above, for compositions that need a different crop on desktop vs mobile. */
  focalDesktop?: string;
}

/** Public-safe media shape. Governance status/notes never cross a client boundary. */
export type PublicMediaAsset = Omit<MediaAsset, "status" | "note">;

/**
 * Content contract for the homepage video hero. `videoSrcDesktop` /
 * `videoSrcMobile` are optional and intentionally absent until final video
 * is delivered - HeroVideo only renders a <video> element when at least one
 * is set, so no broken request ever fires against a missing file. `poster`
 * is a public-safe LCP/reduced-motion/no-video fallback and deliberately
 * excludes internal EvidenceStatus/governance notes.
 */
export interface HeroMedia {
  poster: PublicMediaAsset;
  videoSrcDesktop?: string;
  videoSrcMobile?: string;
}

/** Deliberately slimmer than PageIntro - the hero carries almost no body copy by design; the quiet intro section below it does that work. */
export interface HeroContent {
  eyebrow?: string;
  heading: string;
  primaryCta: CTA;
}

export interface Evidenced<T> {
  value: T;
  status: EvidenceStatus;
  /** Short note on what would need to happen before this can publish as-is. */
  note?: string;
}

export type CTAVariant = "primary" | "secondary" | "text";

export interface CTA {
  label: string;
  href: string;
  variant?: CTAVariant;
  external?: boolean;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface PageIntro {
  kicker: string;
  heading: string;
  body: string;
  actions?: CTA[];
  /** Short format/context chips shown near the fold (e.g. "Onsite or online"). */
  meta?: string[];
}

export interface PathwayCard {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: MediaAsset;
}

export interface OfferLevel {
  title: string;
  description: string;
  proofNeed: string;
}

export interface YearMonthEntry {
  month: string;
  theme: string;
  formats: string[];
}

export interface FacilitatorRegion {
  city: string;
  note: string;
}

export type CaseStudyStoryRole =
  | "flagship-partnership"
  | "distributed-delivery"
  | "smaller-organisation"
  | "one-off-event";

export interface CaseStudy {
  slug: string;
  storyRole: CaseStudyStoryRole;
  clientLabel: string;
  headline: string;
  summary: string;
  sector: string;
  status: EvidenceStatus;
  context: Evidenced<string>;
  objectives: Evidenced<string>;
  insightAndDecision: Evidenced<string>;
  delivery: Evidenced<string>;
  evidence: Evidenced<string>;
  clientVoice: Evidenced<string>;
  cyaReflection: Evidenced<string>;
  nextStep: CTA;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConsultationInterest {
  value: string;
  label: string;
}
