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
  tagline?: string
}

// Source of truth for all service offerings
export const PRODUCTS: Product[] = [
  {
    id: "single-session",
    name: "The Career Clarity Sprint™",
    subtitle: "Find direction and confidence in one focused conversation",
    description: "A 60-minute one-on-one Career Clarity Session",
    bestFor: [
      "You are a professional, executive leader or multi-passionate person who feels torn between options - whether it's leaving a job, accepting a new offer, shifting industries, or redefining your next role - and can't afford to keep second-guessing or overthinking.",
    ],
    priceInCents: 69900, // $699
    stripePriceId: "price_1SXTnBJJZYboQQ44lgl3YNtd",
    stripePaymentLink: "https://buy.stripe.com/6oUcN6aUy0QF0In4npdAk01",
    features: [
      "A 60-minute one-on-one Career Clarity Session that pinpoints the real reason you feel stuck",
      "A custom Career Decision Map showing your best next step and why it fits",
      "A Clarity Anchor Summary (written recap) to revisit whenever doubt resurfaces",
      "3-day follow-up support by voice or email to keep momentum strong",
    ],
    outcome:
      "You'll know exactly which career direction feels right and why. You'll stop looping between \"stay or go,\" \"this or that,\" and make a confident call. You'll walk away grounded, decisive, and calm about what's next.",
    impact:
      'You\'ll learn how to separate fear from truth in future career decisions - a skill that compounds for life. Clients often say: "It felt like finally seeing myself clearly."',
    tagline: "One conversation. One confident career move. More confidence for the future.",
  },
  {
    id: "3-session-package",
    name: "The Momentum Month",
    subtitle: "From Decision to Direction",
    description: "Follow through on your next career move with confidence and consistency",
    bestFor: [
      "You've made a decision - to apply, resign, launch or grow - but struggle with execution, confidence, or follow-through.",
      "Perfect after a Clarity Sprint or for people in transition who want strategic accountability.",
    ],
    priceInCents: 249900, // $2,499
    stripePriceId: "price_1SXTuCJJZYboQQ44sKNY3TdC",
    stripePaymentLink: "https://buy.stripe.com/bJe4gAe6KdDr76L8DFdAk02",
    savings: "Save $297",
    features: [
      "4 weeks of private coaching (weekly 60-minute sessions)",
      "Tailored structure for execution",
      "Voice/text/email access for on-the-spot career support between sessions",
      "A tailored Momentum Tracker to visualize progress",
      "Custom Career Confidence Practices to handle uncertainty, fear, and change",
    ],
    outcome:
      "You'll move from \"I decided\" to \"I'm doing it\". You'll manage fear, imposter thoughts, and external noise with poise. You'll build steady habits around communication, boundaries, and follow-through.",
    impact:
      "By the end of the month, you'll have a repeatable system for acting on clarity in your career: no hesitation, no self-sabotage, just steady forward motion.",
    tagline: "Because clarity means nothing until you act on it.",
  },
  {
    id: "6-session-deep-dive",
    name: "The Career Clarity Partnership",
    subtitle: "3-Month Deep Rebuild",
    description: "Redesign your next chapter with clarity, confidence, and alignment",
    bestFor: [
      "You are a mid-career professional, executive leader, or founder ready for a full career reset. You've achieved success on paper but crave work that actually feels aligned.",
      "You want space to think, a partner to challenge you, and a roadmap that matches who you are now.",
    ],
    priceInCents: 499900, // $4,999
    stripePriceId: "price_1SXTvCJJZYboQQ449SbGqjVy",
    stripePaymentLink: "https://buy.stripe.com/6oUaEY2o20QF2Qv7zBdAk03",
    popular: true,
    features: [
      "Six deep-dive private sessions over 12 weeks, fully tailored to your evolving goals",
      "Ongoing private voice/text/email access (Mon–Fri) for reflection, strategy, and decisions between sessions",
      "A shared Career Clarity Journal to track insights, pivots, and new direction",
      "Optional Career Narrative Review: LinkedIn, resume, or leadership story revamp for your new path",
      "Priority scheduling, check-ins, and continued guidance",
    ],
    outcome:
      "You'll gain full clarity on your career direction: role, path, and purpose. You'll rebuild confidence in your professional identity and story. You'll leave reactive decision-making behind and start leading your career intentionally.",
    impact:
      'You\'ll walk away with a renewed sense of purpose and direction - clarity that integrates both your professional ambition and personal peace. Clients often describe it as "the quarter that changed how I see myself and my work."',
    tagline: "Because your next chapter deserves more than another promotion: it deserves alignment.",
  },
  {
    id: "monthly-retainer-standard",
    name: "The Clarity Retainer",
    subtitle: "Ongoing strategic partnership for professionals, founders, and executive leaders",
    description: "Stay aligned as your career evolves",
    bestFor: [
      "You're an Alumnus of the Momentum Month or Clarity Partnership and want continued access to thoughtful clarity support as you navigate new opportunities, transitions, or leadership challenges.",
    ],
    priceInCents: 199900, // $1,999/month
    stripePriceId: "price_1SXTwmJJZYboQQ44yo13RAqa",
    stripePaymentLink: "https://buy.stripe.com/7sY5kE6Ei2YNaiXg37dAk04",
    recurring: true,
    features: [
      "Standard ($1,999/month): Two 60-minute private sessions, unlimited voice/text/email access (Mon–Fri)",
      "Premium ($3,499/month): Includes quarterly Decision Review (90-minute strategy session)",
      "Access to tailored Clarity Tools & Templates (decision mapping, transition planning, reflection prompts)",
      "Priority scheduling and client status",
    ],
    outcome:
      "You'll have a sounding board for complex decisions: whether it's handling leadership dynamics, weighing new opportunities, or navigating uncertainty. You'll maintain focus, perspective, and calm through ongoing change. You'll move forward consistently, not reactively, with someone who understands your context and goals.",
    impact:
      'You\'ll cultivate a rhythm of clarity: knowing how to pause, reflect, and realign as life and work evolve. Over time, this partnership becomes your professional clarity anchor, ensuring that every next step, pivot, or opportunity aligns with who you are and what you truly want. Clients often describe it as "having a trusted strategist who helps me make sense of everything before I act."',
    tagline: "Because clarity isn't a one-time event, it's a way of leading your life and career.",
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
