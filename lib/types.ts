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
}

export interface PathwayCard {
  title: string;
  description: string;
  href: string;
  cta: string;
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
