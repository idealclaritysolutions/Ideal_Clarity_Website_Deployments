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
    name: "The Career Clarity Sprint™",
    subtitle: "One Decision. One Conversation. Done.",
    description: "One 90-minute focused clarity session to tackle your biggest decision",
    bestFor: [
      "You have a specific, contained decision you're stuck on",
      "You know WHAT you're choosing between, you just can't choose",
      "You're capable of executing on your own once you're clear",
      "You don't need ongoing accountability or support, just clarity",
    ],
    whoNeedsThis: [
      "Should I take this job offer or stay where I am?",
      "I'm torn between two roles and I can't decide.",
      "I've been going back and forth on this decision for months, I just need to resolve it.",
      "I want to venture into entrepreneurship but not sure which business to start.",
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
    name: "The Momentum Month",
    subtitle: "Clarity + Momentum in 4 Weeks",
    description: "Four weekly sessions to create clarity and build unstoppable momentum",
    bestFor: [
      "You're facing a bigger career move, a pivot, a leap into something new, a transition you've been putting off, and you want more than clarity.",
      "You want someone in your corner as you actually make it happen.",
    ],
    whoNeedsThis: [
      "Should I leave my corporate job to start my own business?",
      "How do I position myself for a leadership role?",
      "What's the smartest way to pivot into a new industry?",
      "I've been dreaming about this change for years, how do I finally do it?",
    ],
    priceInCents: 249900, // $2,499
    stripePriceId: "price_1SXTuCJJZYboQQ44sKNY3TdC",
    stripePaymentLink: "https://buy.stripe.com/bJe4gAe6KdDr76L8DFdAk02",
    savings: "Save $297",
    features: [
      "4 sessions over 4 weeks (one per week, 90 minutes each)",
      "Session 1: Uncover what's blocking you and map your path forward",
      "Session 2: Work through the obstacles, fears, and doubts that show up once you start moving",
      "Session 3: Troubleshoot challenges and lock in momentum",
      "Session 4: Plan your next 90 days with clarity and confidence",
      "Email/Voxer access between sessions for real-time support",
    ],
    outcome:
      'One month from now, you\'ll be in motion. Not "thinking about it." Not "planning to." Actually doing it, whether that\'s negotiating a new role, launching your business, or walking confidently into a new chapter.',
    impact:
      "By session 4, you won't just have clarity, you'll trust yourself to navigate hard decisions. You'll recognize your old patterns before they trap you.",
  },
  {
    id: "6-session-deep-dive",
    name: "The Career Clarity Partnership",
    subtitle: "12 Weeks of Deep, Sustained Transformation",
    description: "Six bi-weekly sessions for comprehensive career transformation",
    bestFor: [
      "You're in the middle of a significant career reinvention, leaving corporate, building something of your own, stepping into a completely new identity.",
      "You need sustained support through the full journey.",
    ],
    whoNeedsThis: [
      "How do I transition from employee to entrepreneur without burning my life down?",
      "I want to step into a leadership role, but I don't feel ready, what needs to shift?",
      "How do I rebuild my career identity after years of feeling stuck?",
      "What does success actually look like for me, not what I've been told it should look like?",
    ],
    priceInCents: 499900, // $4,999
    stripePriceId: "price_1SXTvCJJZYboQQ449SbGqjVy",
    stripePaymentLink: "https://buy.stripe.com/6oUaEY2o20QF2Qv7zBdAk03",
    popular: true, // Mark as most popular
    features: [
      "6 sessions over 12 weeks (bi-weekly, 90 minutes each)",
      "Deep support through every phase of your transition",
      "Accountability and troubleshooting as you implement",
      "Email/Voxer access between sessions for real-time guidance",
      "Personalized frameworks and tools tailored to your unique situation",
    ],
    outcome:
      "Three months from now, you'll be on the other side. New role. Business launched. Direction locked in. You'll look back at the version of you who started this journey and realize how far you've come.",
    impact:
      "You'll fundamentally change how you approach career decisions, faster, clearer, with less second-guessing. This becomes part of who you are.",
  },
  {
    id: "monthly-retainer-standard",
    name: "The Clarity Retainer (Standard)",
    subtitle: "Your Career Thinking Partner on Speed Dial",
    description: "Ongoing partnership for continuous clarity and support",
    bestFor: [
      "Senior leaders and professionals who face constant complexity, multiple opportunities, evolving decisions, high stakes.",
      "You want a trusted thinking partner on speed dial.",
    ],
    whoNeedsThis: [
      "I'm making decisions every week that impact my career, my team, my future, how do I make sure I'm thinking clearly?",
      "I need someone who understands the full picture, not just today's problem.",
      "Every time I solve one thing, three more decisions show up, I need ongoing support.",
      "I want a partner who challenges my thinking and keeps me sharp.",
    ],
    priceInCents: 199900, // $1,999/month
    stripePriceId: "price_1SXTwmJJZYboQQ44yo13RAqa",
    stripePaymentLink: "https://buy.stripe.com/7sY5kE6Ei2YNaiXg37dAk04",
    recurring: true,
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
    id: "monthly-retainer-premium",
    name: "The Clarity Retainer (Premium)",
    subtitle: "Elite Partnership + Quarterly Strategy",
    description: "Premium ongoing partnership with quarterly strategic planning",
    bestFor: [
      "Senior leaders and professionals who face constant complexity, multiple opportunities, evolving decisions, high stakes.",
      "You want a trusted thinking partner on speed dial with deeper strategic support.",
    ],
    whoNeedsThis: [
      "I need regular clarity sessions plus quarterly strategic planning.",
      "I want ongoing support that includes big-picture career strategy.",
      "I need someone who understands both tactical decisions and long-term vision.",
      "I want a partner for every level of career decision-making.",
    ],
    priceInCents: 349900, // $3,499/month
    stripePriceId: "price_1SXTycJJZYboQQ441PquisoT",
    stripePaymentLink: "https://buy.stripe.com/28E4gA1jY56V0In1bddAk05",
    recurring: true,
    features: [
      "4 scheduled clarity sessions per month (90 minutes each)",
      "Quarterly career strategy & planning sessions (2 hours each)",
      "Unlimited async support via Voxer or email",
      "Priority scheduling (book within 48 hours when urgent)",
      "Strategic partner for both immediate decisions and long-term vision",
    ],
    outcome:
      "You make faster, smarter decisions while building toward a bigger vision. Every quarter, you review, adjust, and recommit to what matters most.",
    impact:
      "You develop an elite level of clarity and decision-making. Over time, you become someone who navigates complexity with confidence, it's your superpower.",
  },
  {
    id: "group-workshop",
    name: "Group Clarity Workshop",
    subtitle: "Crossroads Cohort",
    description: "Interactive workshop for small groups navigating career transitions",
    bestFor: [
      "A small group (5-8 professionals) who are all navigating career crossroads, considering a pivot, exploring entrepreneurship, or figuring out what's next.",
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
    hidden: true,
  },
]
