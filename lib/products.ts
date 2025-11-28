export interface Product {
  id: string
  name: string
  description: string
  subtitle?: string
  bestFor?: string[]
  whoNeedsThis?: string[] // Added field for tooltip content
  priceInCents: number
  stripePriceId: string
  stripePaymentLink: string
  features?: string[]
  popular?: boolean
  savings?: string
  recurring?: boolean
  outcome?: string
  impact?: string
  hidden?: boolean
}

// Source of truth for all service offerings
export const PRODUCTS: Product[] = [
  {
    id: "single-session",
    name: "Single Clarity Session",
    subtitle: "One Decision, One Conversation",
    description: "One 90-minute focused clarity session to tackle your biggest challenge",
    bestFor: [
      "Should I take this job offer or stay where I am?",
      "I'm torn between two roles and I can't decide.",
      "I've been going back and forth on this decision for months — I just need to resolve it.",
      "I want to venture into entrepreneurship but not sure which business to start.",
    ],
    whoNeedsThis: [
      "You have a specific, contained decision you're stuck on",
      "You know WHAT you're choosing between — you just can't choose",
      "You're capable of executing on your own once you're clear",
      "You don't need ongoing accountability or support — just clarity",
    ],
    priceInCents: 69900, // $699
    stripePriceId: "price_1SXTnBJJZYboQQ44lgl3YNtd",
    stripePaymentLink: "https://buy.stripe.com/6oUcN6aUy0QF0In4npdAk01",
    features: [
      "90-minute deep-dive session (remote)",
      "Uncover what's *really* keeping you stuck (not what you think it is)",
      "Walk away with clarity on your decision and 2-3 concrete next steps",
      "Relief from the mental spiral that's been draining you",
    ],
    outcome:
      "Within one week of our session, you'll have made your decision and taken your first real step. The endless deliberation? Over.",
    impact:
      "You'll learn the thinking process that got you unstuck, so the next time you're at a crossroads, you'll know how to move through it faster.",
  },
  {
    id: "3-session-package",
    name: "3-Session Package",
    subtitle: "Clarity + Momentum",
    description: "Three sessions to build momentum and create lasting change",
    bestFor: [
      "You're facing a bigger career move, a pivot, a leap into something new, a transition you've been putting off, and you want more than clarity. You want someone in your corner as you actually make it happen.",
    ],
    whoNeedsThis: [
      "You're ready to take action but need support to overcome obstacles",
      "You want to build momentum towards your career goals",
      "You need someone to hold you accountable and cheer you on",
    ],
    priceInCents: 149900, // $1,499
    stripePriceId: "price_1SXTuCJJZYboQQ44sKNY3TdC",
    stripePaymentLink: "https://buy.stripe.com/bJe4gAe6KdDr76L8DFdAk02",
    popular: true,
    savings: "Save $598",
    features: [
      "Session 1: Uncover what's blocking you and map your path forward",
      "Session 2 (2 weeks later): Work through the obstacles, fears, and doubts that show up once you start moving",
      "Session 3 (4 weeks later): Troubleshoot challenges and lock in momentum",
      "Email/Voxer access between sessions for real-time support",
    ],
    outcome:
      'One month from now, you\'ll be in motion. Not "thinking about it." Not "planning to." Actually doing it, whether that\'s negotiating a new role, launching your business, or walking confidently into a new chapter.',
    impact:
      "By session 3, you won't just have clarity, you'll trust yourself to navigate hard decisions. You'll recognize your old patterns before they trap you.",
  },
  {
    id: "6-session-deep-dive",
    name: "6-Session Deep Dive",
    subtitle: "Major Career Transition",
    description: "Comprehensive transformation package for complex challenges",
    bestFor: [
      "You're in the middle of a significant career reinvention, leaving corporate, building something of your own, stepping into a completely new identity, and you need sustained support through the full journey.",
    ],
    whoNeedsThis: [
      "You're embarking on a major career change",
      "You need deep support throughout your transition",
      "You want to build a new career identity",
      "You're looking for long-term guidance and accountability",
    ],
    priceInCents: 299900, // $2,999
    stripePriceId: "price_1SXTvCJJZYboQQ449SbGqjVy",
    stripePaymentLink: "https://buy.stripe.com/6oUaEY2o20QF2Qv7zBdAk03",
    savings: "Save $1,195",
    features: [
      "6 bi-weekly sessions over 3 months",
      "Deep support through every phase of your transition",
      "Accountability and troubleshooting as you implement",
      "Email/Voxer access between sessions",
    ],
    outcome:
      "Three months from now, you'll be on the other side. New role. Business launched. Direction locked in. You'll look back at the version of you who started this journey and realize how far you've come.",
    impact:
      "You'll fundamentally change how you approach career decisions, faster, clearer, with less second-guessing. This becomes part of who you are.",
  },
  {
    id: "monthly-retainer",
    name: "Monthly Retainer",
    subtitle: "Career Thinking Partner",
    description: "Ongoing partnership for continuous growth and support",
    bestFor: [
      "Senior leaders and professionals who face constant complexity, multiple opportunities, evolving decisions, high stakes, and want a trusted thinking partner on speed dial.",
    ],
    whoNeedsThis: [
      "You're a senior leader or professional",
      "You face constant career challenges and opportunities",
      "You need ongoing support and accountability",
      "You want a partner to help you navigate high-stakes decisions",
    ],
    priceInCents: 249900, // $2,499/month
    stripePriceId: "price_1SXTwmJJZYboQQ44yo13RAqa",
    stripePaymentLink: "https://buy.stripe.com/7sY5kE6Ei2YNaiXg67dAk04",
    recurring: true,
    savings: "Save $900/month",
    features: [
      "2 scheduled clarity sessions per month (90 minutes each)",
      "Unlimited async support via Voxer or email",
      "Priority scheduling (book within 48 hours when urgent)",
      "A thinking partner whenever challenges arise",
    ],
    outcome:
      "Decisions that used to cost you weeks of agonizing now take one conversation. You move faster, sleep better, and stop losing momentum to indecision.",
    impact:
      "Each session sharpens your ability to think clearly under pressure. Over time, you'll navigate ambiguity with ease, it becomes your competitive advantage.",
  },
  {
    id: "group-workshop",
    name: "Group Clarity Workshop",
    subtitle: "Crossroads Cohort",
    description: "Interactive 3-hour workshop for teams and organizations",
    bestFor: [
      "A small group (5-8 professionals) who are all navigating career crossroads, considering a pivot, exploring entrepreneurship, or figuring out what's next. Think: peers in transition, alumni groups, mastermind cohorts, or a team of leaders facing change.",
    ],
    whoNeedsThis: [
      "You're part of a small group facing similar career challenges",
      "You want to learn from others who understand your situation",
      "You need peer support and real-time clarity",
      "You want to commit to action in front of a supportive group",
    ],
    priceInCents: 399900, // $3,999
    stripePriceId: "price_1SXTycJJZYboQQ441PquisoT",
    stripePaymentLink: "https://buy.stripe.com/28E4gA1jY56V0In1bddAk05",
    savings: "Save over $600 per person",
    features: [
      "2-hour facilitated session designed for shared breakthroughs",
      "Each person uncovers what's keeping them stuck",
      "Group thinking, peer support, and real-time clarity",
      "Everyone leaves with their own clear next steps",
      "Follow-up summary and action items for each participant",
    ],
    outcome:
      "Every participant leaves with a concrete next step, and most take action within 48 hours. There's something about committing in front of others that makes it real.",
    impact:
      "You realize you're not alone, and you gain clarity faster by thinking alongside others who truly understand what you're facing.",
    hidden: true, // Hide Group Clarity Workshop without deleting it
  },
]
