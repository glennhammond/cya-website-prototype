# Claude Code Build Prompt — CYA Website Prototype v1

## Commission
Build a premium, responsive React prototype for Corporate Yoga Australia using Next.js, TypeScript and Tailwind CSS. Treat this as Stage 3: Creative Direction and Experience Prototype, based on the approved Stage 2 Experience and Content Definition package.

Do not create a generic wellness site, a simple services catalogue, a SaaS dashboard or a template-derived Tailwind design.

## Governing proposition
Kicker: One-off sessions and ongoing workplace wellbeing programs

Heading: Start with one useful moment—or build a connected year.

Supporting copy: Book a one-off movement, mindfulness, workshop or conference session. When you are ready to create greater continuity, CYA can bring those moments together through recurring programs and Wellbeing Studio.

Primary action: Book a wellbeing consultation
Secondary action: Explore one-off sessions

Commercial progression:
One useful moment → A recurring rhythm → A connected workplace program → An organised year of support

This is optional progression, not a compulsory sales ladder. One-off sessions are legitimate offers in their own right.

## Approved architecture
Primary navigation:
- Workplace wellbeing
- Conferences and events
- Programs
- Wellbeing Studio
- Proof
- About

Utility:
- Resources
- Member sign-in

Primary CTA:
- Book a wellbeing consultation

Member sign-in must link separately to studio.corporateyoga.com.au. Do not imply that consultation leads directly to member access.

## Routes
/
 /workplace-wellbeing
 /workplace-wellbeing/movement
 /conferences-events
 /programs
 /wellbeing-studio
 /proof
 /proof/case-study
 /about
 /resources
 /consultation
 /member-access
 /privacy
 /terms

## Prototype scope
Build full pages for:
1. Home
2. Workplace Wellbeing
3. Movement
4. Conferences and Events
5. Programs
6. Wellbeing Studio
7. Proof and Case Studies
8. About CYA
9. Consultation

Build simple functional versions of Resources, Member Access, Privacy and Terms.

Do not build a separate Wellbeing Studio marketing website. Do not redesign Moodle.

## Creative direction
Concept: Useful moments, connected over time.

The experience should show how individual moments of movement, pause, learning and connection can stand alone or connect into a broader organisational rhythm.

Visual character:
- premium
- credible
- calm but not passive
- warm but not lifestyle-oriented
- human but not casual
- workplace-aware
- editorial rather than SaaS-like
- distinctive through composition and judgement

Avoid:
- generic yoga imagery
- spiritual clichés
- excessive cards
- gradients and glassmorphism
- logo walls
- trust-badge strips directly under the hero
- feature-grid-heavy layouts
- generic “transform your workplace” language

## Working tokens
--cya-teal: #17535B
--cya-teal-dark: #103F45
--cya-gold: #BD964A
--cya-mist: #F4F6F5
--cya-white: #FFFFFF
--cya-ink: #253336
--cya-body: #596467
--cya-divider: #DDE5E3
--cya-aqua: #39AEB8

Typography:
- Headings: Urbanist
- Body/UI: Open Sans

Centralise all tokens in CSS variables or the Tailwind theme.

## Page structure

### Home
1. Hero using approved copy
2. Choose how to begin:
   - Plan one useful session
   - Support a conference or event
   - Create a recurring wellbeing rhythm
   - Connect activities into a workplace program
   - Explore Wellbeing Studio
3. One-off sessions are valuable in their own right
4. Build continuity when useful
5. Example Wellbeing Year
6. Why CYA
7. Contextual proof
8. Wellbeing Studio
9. Consultation CTA

Label the Year View:
“Explore an example year in action. Your actual program is built around your people, locations and priorities.”

Make it keyboard accessible and provide a static fallback.

### Workplace Wellbeing
Organise the offer by:
- buyer need
- engagement format
- modality

Needs:
- energise a team
- reduce stiffness
- create calm and focus
- support connection
- build practical wellbeing skills
- support a distributed workforce

Formats:
- one-off
- short series
- recurring
- awareness-day activation
- team event
- online
- multi-location

Modalities:
- yoga
- Pilates
- mobility and desk movement
- mindfulness
- meditation
- breathwork
- sound experiences
- workshops and Lunch & Learns

Modalities are ingredients, not the main product architecture.

### Movement
Include:
- proposition
- who it is for
- useful formats
- what participants can expect
- inclusion and workplace adaptation
- delivery options
- related use cases
- proof placeholder
- CTA

Avoid flexibility- and fitness-led language.

### Conferences and Events
Include:
- event-specific proposition
- where CYA fits into the agenda
- activation formats
- example event rhythm
- pre/post-event Studio access
- delivery logistics
- proof placeholder
- Discuss your event CTA

### Programs
Include:
- why continuity can help
- recurring rhythm
- connected workplace program
- organised year of support
- what CYA coordinates
- Example Wellbeing Year
- delivery and governance
- multi-site support
- proof placeholder
- investment factors
- consultation CTA

Do not present these as rigid packages.

### Wellbeing Studio
Explain Studio as CYA’s continuous digital layer.

Include:
- employee experience
- employer experience
- relationship to live CYA services
- product walkthrough
- privacy and aggregate reporting
- Studio consultation
- member sign-in

Use conceptual progression only:
- Access: Studio availability and core content
- Engage: adoption, communications and reporting support
- Strategic partnership: tailored planning, live delivery and organisational support

Do not show:
- $150 or $250 pricing
- employee caps
- Most Popular
- package comparison tables
- 12-week minimum
- unverified reporting promises

### Proof and Case Studies
Use governed placeholders only.

Case-study template:
1. Result-focused headline
2. Client snapshot
3. Context and challenge
4. Insight and decision
5. Delivery
6. Evidence and limitations
7. Client voice
8. What CYA learned
9. Relevant next step

Never fabricate names, logos, metrics, testimonials or outcomes.

### About
Include:
- CYA worldview
- Debby’s origin story
- CYA founded in 2014
- how CYA works
- delivery philosophy
- facilitator network placeholder
- professional standards placeholder
- CTA

The 2001 reference relates to Debby’s workplace-wellbeing origin story, not the company founding date.

### Consultation
Explain that the conversation may cover:
- one session
- a short series
- a conference
- Wellbeing Studio
- a connected program
- annual support

Fields:
- first name
- last name
- work email
- optional phone
- organisation
- role
- workforce size band
- locations
- interest
- timeframe
- delivery mode
- context/priorities
- optional procurement constraints
- consent

Do not collect health information.

Create accessible states:
- default
- focus
- validation error
- error summary
- submitting
- success
- system failure
- duplicate guidance

Use a local prototype success flow, with a clear future HubSpot integration boundary.

## Content governance
Keep content in structured local data.

Use:
type EvidenceStatus =
  | "approved"
  | "safe-working-copy"
  | "evidence-required"
  | "commercial-dependency"
  | "legal-review"
  | "placeholder";

Add a development-only annotation mode, off by default.

## Components
Recommended:
- SiteHeader
- DesktopNavigation
- MobileNavigation
- UtilityNavigation
- Hero
- PageIntro
- PathwaySelector
- EditorialFeature
- OfferProgression
- ExampleYearView
- ProofPreview
- CaseStudyCard
- CaseStudyTemplate
- StudioPreview
- CTASection
- ConsultationForm
- ErrorSummary
- EvidencePlaceholder
- MemberAccessPanel
- Breadcrumbs
- SiteFooter

Do not force every pattern into a universal card component.

## Accessibility
Target WCAG 2.2 AA:
- semantic HTML
- one H1
- ordered headings
- skip link
- keyboard navigation
- visible focus
- no traps
- accessible mobile menu
- 44×44 minimum targets
- labelled controls
- accessible errors and focus management
- 400% zoom and reflow
- reduced motion
- useful alt text
- static fallback for interactive content

## Responsive testing
Test:
- 320
- 375
- 768
- 1024
- 1440 px

No clipping, horizontal page scrolling or broken hierarchy.

## Performance
- App Router
- static/server rendering
- minimal client components
- no unnecessary animation library
- fixed media dimensions
- no third-party scripts
- prevent layout shift
- responsive image placeholders
- careful font loading

## Technical structure
Use:
- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- ESLint
- local content data

Suggested folders:
app/
components/
content/
lib/
public/images/

Use explicit TypeScript contracts.

## Review quality gate
Confirm:
- one-off sessions are immediately visible
- year framework is optional
- primary buyer is clear
- Studio is part of CYA
- site no longer feels like a modality catalogue
- no fabricated evidence
- no unapproved pricing
- consultation feels proportionate
- mobile preserves the argument
- member sign-in is separate
- design feels premium and editorial
- build, TypeScript and lint pass
- keyboard navigation works
- reduced motion works
- no console errors

## Final report
Provide:
1. summary
2. routes
3. component inventory
4. evidence placeholders
5. unresolved dependencies
6. accessibility work
7. responsive testing
8. performance decisions
9. limitations
10. Debby review questions
11. run commands
12. branch and commit summary

Do not open or merge a pull request unless asked.

## Build sequence
1. Inspect supplied project and documents.
2. Preserve useful existing conventions.
3. Create content contracts.
4. Build global shell.
5. Build Home.
6. Build Workplace Wellbeing.
7. Build Programs.
8. Build Wellbeing Studio.
9. Build Consultation.
10. Build Conferences.
11. Build Movement.
12. Build Proof.
13. Build About.
14. Add Resources and utility pages.
15. Run build, lint, responsive and accessibility checks.
16. Produce final report.

Proceed without low-value questions. Use labelled assumptions where risk is low. Stop only when a missing decision would materially affect architecture, legal risk, pricing or release scope.
