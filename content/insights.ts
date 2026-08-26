export interface InsightLink {
  label: string;
  href: string;
}

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  datePublished: string;
  dateModified: string;
  intro: string;
  sections: InsightSection[];
  relatedLinks: InsightLink[];
}

const refreshed = "2026-08-26";

export const insightArticles: InsightArticle[] = [
  {
    slug: "8-tips-to-successfully-introduce-yoga-at-work",
    title: "10 practical steps to introduce Yoga at work",
    summary:
      "A practical guide to making workplace Yoga easy to join, realistic to organise and appropriate for people with different levels of experience.",
    category: "Workplace Yoga",
    author: "Glenn Hammond",
    datePublished: "2025-08-07",
    dateModified: refreshed,
    intro:
      "Workplace Yoga works best when the organisation designs for participation rather than assuming everybody already feels comfortable with Yoga. The practical challenge is not simply choosing a class: it is choosing the right format, teacher, time, space and invitation for the people who will be asked to join.",
    sections: [
      {
        heading: "Start with the workplace, not the Yoga studio",
        paragraphs: [
          "A workplace session may happen in a boardroom, training room, warehouse, shared office or online. It may use mats, chairs, standing movement or a combination. That flexibility is useful because it lets the session fit the actual environment instead of asking the workplace to imitate a studio.",
          "The most useful first question is therefore: what can people realistically join, in the time and space available?",
        ],
      },
      {
        heading: "Ten practical steps",
        paragraphs: [
          "These steps preserve the useful planning logic from CYA's long-running Yoga-at-Work guidance while keeping the emphasis on participation and fit rather than promised health or productivity outcomes.",
        ],
        bullets: [
          "Get visible support from leaders without making participation feel compulsory.",
          "Ask employees what formats and times they would genuinely consider joining.",
          "Offer accessible options for people who do not identify as 'Yoga people'.",
          "Choose a facilitator who understands workplace groups and can adapt in real time.",
          "Use a one-off session or short trial when you need to learn what fits before committing further.",
          "Nominate an internal contact who can make communication and logistics easy.",
          "Schedule around the working day rather than assuming before- or after-work attendance is convenient.",
          "Match the format to the available budget, space and delivery mode.",
          "Make the invitation clear: what to wear, what to bring, how long it runs and whether beginners are welcome.",
          "Treat Yoga as one useful part of workplace wellbeing, not the only route into it.",
        ],
      },
      {
        heading: "One session can be enough",
        paragraphs: [
          "A trial session does not have to become a program. It can remain a complete one-off experience. If people respond well and the organisation wants continuity, the useful next question is simply what should be repeated, changed or connected to other forms of support.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Workplace Yoga", href: "/workplace-yoga" },
      { label: "Compare workplace movement options", href: "/movement" },
      { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs" },
    ],
  },
  {
    slug: "check-in-with-yourself-with-this-simple-technique",
    title: "Check in with yourself with a simple body scan",
    summary:
      "A short body-awareness practice for noticing how you are arriving in the moment before deciding what you need next.",
    category: "Mindfulness",
    author: "Corporate Yoga Australia",
    datePublished: "2025-08-07",
    dateModified: refreshed,
    intro:
      "Busy workdays make it easy to move from task to task without noticing how your body, attention or emotions have shifted. A body scan is a simple way to interrupt that automatic momentum and notice what is present without needing to diagnose or immediately fix it.",
    sections: [
      {
        heading: "A short check-in",
        paragraphs: [
          "You can do this seated, standing or lying down. A few minutes is enough. The aim is awareness rather than achieving a particular state.",
        ],
        bullets: [
          "Feel your contact with the chair, floor or ground.",
          "Notice the natural rhythm of your breathing without forcing it to change.",
          "Ask yourself how you feel physically, emotionally and mentally right now.",
          "Notice areas that feel tense, tired, restless or comfortable.",
          "Allow a few slower breaths if that feels useful and comfortable.",
          "Finish by noticing what would be a helpful next action: continue, move, pause, get water, step outside or ask for support.",
        ],
      },
      {
        heading: "Observe without turning the practice into a performance",
        paragraphs: [
          "There is no correct result. You may feel calm, distracted, tense, energetic or nothing particularly noticeable. The value of the practice is the moment of attention itself.",
          "For workplace use, keep the invitation optional and practical. Mindfulness should not require employees to disclose how they feel or turn a private check-in into an employer measure.",
        ],
      },
      {
        heading: "Use the practice as a doorway, not a treatment claim",
        paragraphs: [
          "A body scan can be a useful wellbeing practice, but it is not a substitute for medical or psychological care. CYA uses practices like this as accessible moments of awareness within human-led workplace wellbeing experiences.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Mindfulness & Meditation", href: "/meditation-mindfulness" },
      { label: "Explore online wellbeing", href: "/online-wellbeing" },
    ],
  },
  {
    slug: "3-steps-to-reduce-workplace-stress-with-mindfulness",
    title: "Three mindfulness steps for a pressured workday",
    summary:
      "A practical framework for noticing a stress response, creating a pause and choosing a more deliberate next action.",
    category: "Mindfulness",
    author: "Glenn Hammond",
    datePublished: "2025-08-07",
    dateModified: refreshed,
    intro:
      "Pressure can build quickly at work: deadlines, interruptions, difficult conversations and competing priorities can all change the way we react. Mindfulness does not remove those conditions. It can, however, provide a short pause in which to notice what is happening before choosing what to do next.",
    sections: [
      {
        heading: "1. Notice the trigger",
        paragraphs: [
          "Start by identifying what changed. It may be a message, a conversation, a deadline or simply an accumulation of demands. Notice the physical signs that accompany the moment: tightened shoulders, shallow breathing, restlessness or difficulty concentrating.",
          "Naming the trigger is not the same as judging it. The goal is to create enough distance to observe the reaction.",
        ],
      },
      {
        heading: "2. Create a pause",
        paragraphs: [
          "A pause can be brief. Take a few comfortable breaths, feel your feet on the floor, or step away from the screen for a moment. Ask what you know, what you are assuming and what might be useful to clarify before responding.",
          "In interpersonal situations, this can help make room for curiosity and clearer communication rather than an immediate reaction.",
        ],
      },
      {
        heading: "3. Choose the next useful action",
        paragraphs: [
          "Sometimes the next step is a conversation or a practical change. Sometimes it is asking for support, renegotiating a deadline or deciding that the moment does not require further action. Mindfulness is useful here because it creates a choice point rather than prescribing one response.",
        ],
      },
      {
        heading: "Keep workplace mindfulness in scope",
        paragraphs: [
          "Mindfulness sessions can provide practical skills and shared moments of pause. They should not be presented as treatment for anxiety, burnout or other health conditions, and participation should remain appropriately voluntary.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Mindfulness & Meditation", href: "/meditation-mindfulness" },
      { label: "Explore Workshops & Expert Experiences", href: "/workplace-wellbeing-workshops" },
    ],
  },
  {
    slug: "harnessing-the-power-of-the-breath",
    title: "Harnessing the power of the breath at work",
    summary:
      "Three simple breathing practices that can create a deliberate pause during a busy day, with clear comfort and safety boundaries.",
    category: "Breathwork",
    author: "Glenn Hammond",
    datePublished: "2025-08-07",
    dateModified: refreshed,
    intro:
      "Breathing practices are appealing in workplaces because they need very little space or equipment and can be taught in short formats. They should also be presented conservatively: comfort varies, breath-holding and paced breathing are not appropriate for everyone, and a workplace session is not medical treatment.",
    sections: [
      {
        heading: "Start with comfortable breathing",
        paragraphs: [
          "Before using a formal technique, simply notice your breath. Sit comfortably, soften unnecessary effort and allow the breath to settle. If a technique makes you light-headed, uncomfortable or anxious, stop and return to normal breathing.",
        ],
      },
      {
        heading: "Three accessible options",
        paragraphs: [
          "CYA's existing breathwork guidance uses several simple approaches. In a workplace context they can be offered as optional practices rather than performance targets.",
        ],
        bullets: [
          "Belly breathing: allow the abdomen to move naturally as you breathe without forcing a very deep breath.",
          "A slightly longer exhale: where comfortable, let the out-breath be a little longer than the in-breath without straining or holding.",
          "Alternate-nostril breathing: a traditional practice that is best introduced by a suitably experienced facilitator and skipped if it feels awkward or uncomfortable.",
        ],
      },
      {
        heading: "Build breathwork into existing moments",
        paragraphs: [
          "A breathing practice can sit before a meeting, between tasks, at the start of a mindfulness session or alongside gentle movement. It does not need to become another item employees must complete.",
        ],
      },
      {
        heading: "Avoid overclaiming",
        paragraphs: [
          "Breathwork is often discussed using strong physiological or health claims. CYA's website should stay closer to what the service can genuinely promise: guided practice, clear instruction, appropriate options and a useful moment to pause and pay attention.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Mindfulness & Meditation", href: "/meditation-mindfulness" },
      { label: "Explore wellbeing workshops", href: "/workplace-wellbeing-workshops" },
    ],
  },
  {
    slug: "mindfulness-everyday",
    title: "Six mindfulness practices to add to your day",
    summary:
      "Small, low-friction ways to bring attention, movement and moments away from screens into an ordinary working day.",
    category: "Mindfulness",
    author: "Corporate Yoga Australia",
    datePublished: "2019-08-29",
    dateModified: refreshed,
    intro:
      "Mindfulness does not have to mean a long formal meditation. It can be a collection of small practices that help you notice what you are doing and how you are arriving in the moment. The easiest practices are often the ones that attach to routines that already exist.",
    sections: [
      {
        heading: "Six small practices",
        paragraphs: [
          "Choose one rather than trying to redesign your whole day at once.",
        ],
        bullets: [
          "Gratitude: note something you appreciate or acknowledge someone else's contribution.",
          "Breath awareness: spend a minute noticing comfortable breathing without trying to achieve a particular state.",
          "Mindful movement: stand, stretch or change position with attention rather than automatically.",
          "Sensory attention: notice what you can see, hear and feel in the present environment.",
          "A digital pause: create a short period without notifications, headphones or another screen.",
          "A moment of stillness: stop between tasks and notice what you need before moving to the next thing.",
        ],
      },
      {
        heading: "Make the practice fit the day",
        paragraphs: [
          "A practice that is easy to repeat is more useful than an ambitious routine that adds pressure. A team may also use short shared practices in a facilitated session while allowing employees to choose what they continue individually.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Mindfulness & Meditation", href: "/meditation-mindfulness" },
      { label: "Read the simple body-scan check-in", href: "/blog/check-in-with-yourself-with-this-simple-technique" },
    ],
  },
  {
    slug: "sleep-and-workplace-productivity-corporate-yoga-australia",
    title: "Healthy sleep habits for a healthier workplace",
    summary:
      "Practical sleep and recovery habits, plus ways workplaces can support healthier boundaries without treating employees' sleep as an employer metric.",
    category: "Workplace Wellbeing",
    author: "Corporate Yoga Australia",
    datePublished: "2025-09-26",
    dateModified: refreshed,
    intro:
      "Sleep sits largely outside the workplace, but work patterns can influence the conditions around rest and recovery. A useful workplace conversation focuses less on telling employees how to sleep and more on sustainable routines, boundaries and access to practical wellbeing education.",
    sections: [
      {
        heading: "Support the conditions around rest",
        paragraphs: [
          "Many common sleep recommendations are simple: regular routines, a comfortable sleep environment, thoughtful caffeine use, reduced late-night screen exposure and time outdoors during the day. Individuals differ, and persistent sleep problems belong with an appropriate health professional rather than a workplace wellbeing program.",
        ],
      },
      {
        heading: "Recovery can happen during the day too",
        paragraphs: [
          "A short break, gentle movement, mindfulness or guided relaxation can create a clear change of pace during a demanding day. These practices should be offered as rest or wellbeing experiences rather than as guaranteed productivity interventions.",
        ],
      },
      {
        heading: "What employers can influence",
        paragraphs: [
          "Workplace culture can support healthier boundaries without monitoring private sleep behaviour.",
        ],
        bullets: [
          "Encourage realistic breaks during the working day.",
          "Reduce unnecessary after-hours communication where roles allow it.",
          "Model sensible boundaries through leadership behaviour.",
          "Offer practical education on sleep, recovery, movement and mindfulness where there is genuine employee interest.",
          "Avoid framing rest as something employees must optimise solely to produce more work.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore Workshops & Expert Experiences", href: "/workplace-wellbeing-workshops" },
      { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs" },
    ],
  },
  {
    slug: "the-nervous-system-solution-why-your-wellbeing-program-isnt-working-and-what-to-do-instead",
    title: "Why workplace wellbeing programs can miss the moment",
    summary:
      "A buyer-focused look at timing, accessibility and why useful wellbeing support needs to fit the way work actually happens.",
    category: "Workplace Wellbeing Programs",
    author: "Glenn Hammond",
    datePublished: "2025-11-11",
    dateModified: refreshed,
    intro:
      "A wellbeing offer can exist on paper and still be difficult to use. The problem is often less about employee motivation than about access: support may be scheduled outside the moments when people can realistically participate, hidden behind friction, or designed without enough attention to the working day.",
    sections: [
      {
        heading: "The gap between support and the workday",
        paragraphs: [
          "Pressure tends to appear inside ordinary work: back-to-back meetings, difficult conversations, changing priorities and deadlines. If every wellbeing activity sits before work, after work or behind a separate platform journey, even a good resource can be hard to reach.",
          "That suggests a useful design principle: place some support close to the contexts in which people can use it, while keeping deeper experiences available for those who want them.",
        ],
      },
      {
        heading: "Design for more than one doorway",
        paragraphs: [
          "Different people enter wellbeing in different ways. Some will join Yoga or Pilates. Others may prefer a short stretch, a practical workshop, mindfulness, a conversation with an expert or an on-demand resource. A connected service can make these options easier to discover without forcing everybody through the same journey.",
        ],
      },
      {
        heading: "Use continuity without creating a compulsory ladder",
        paragraphs: [
          "One useful session can remain one session. When the organisation needs more continuity, recurring live experiences, communications, workshops, campaigns and online access can be coordinated around the same workplace context. The point is not to maximise the size of the program; it is to reduce friction and make the support coherent.",
        ],
      },
      {
        heading: "Measure what is genuinely available",
        paragraphs: [
          "Attendance, participation, operational reliability and feedback can be useful when interpreted with context. Avoid converting wellbeing into a single outcome score or making causal claims that the delivery evidence cannot support.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs" },
      { label: "Explore online wellbeing", href: "/online-wellbeing" },
      { label: "Plan with CYA", href: "/contact?interest=recurring" },
    ],
  },
  {
    slug: "5-pillars-of-corporate-wellbeing-to-boost-your-teams-productivity",
    title: "Five practical pillars for workplace wellbeing",
    summary:
      "A refreshed framework for thinking about physical wellbeing, mental wellbeing, connection, learning and the working environment without reducing wellbeing to a productivity promise.",
    category: "Workplace Wellbeing",
    author: "Corporate Yoga Australia",
    datePublished: "2019-05-16",
    dateModified: refreshed,
    intro:
      "Workplace wellbeing is broader than a class, app or awareness day. A useful framework helps organisations see the different conditions and experiences that can contribute to a healthier working culture while recognising that no single provider controls the whole system.",
    sections: [
      {
        heading: "1. Physical wellbeing",
        paragraphs: [
          "Movement, ergonomics, recovery, suitable breaks and opportunities to change position all matter. CYA contributes through workplace-friendly movement such as Yoga, Pilates, mobility and short resets rather than claiming to solve every aspect of workplace health.",
        ],
      },
      {
        heading: "2. Mental wellbeing and moments of pause",
        paragraphs: [
          "Mindfulness, meditation, breath awareness and guided rest can provide practical experiences of slowing down and paying attention. They sit alongside, not instead of, appropriate organisational and professional mental-health support.",
        ],
      },
      {
        heading: "3. Connection",
        paragraphs: [
          "Shared experiences can create a different kind of team moment. The value depends on whether the activity feels inclusive, voluntary and appropriate for the group rather than being imposed as a culture exercise.",
        ],
      },
      {
        heading: "4. Learning and practical skills",
        paragraphs: [
          "Workshops and Lunch & Learns can give teams accessible information and techniques on topics such as sleep, nutrition, mindfulness, communication and financial wellbeing when delivered by people with the appropriate expertise.",
        ],
      },
      {
        heading: "5. The environment and operating culture",
        paragraphs: [
          "Wellbeing is shaped by workload, leadership, communication, role design and workplace conditions as well as wellbeing activities. A service provider can support the experience layer, but organisations still need to address the systems around it.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs" },
      { label: "Explore Workshops & Expert Experiences", href: "/workplace-wellbeing-workshops" },
    ],
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
