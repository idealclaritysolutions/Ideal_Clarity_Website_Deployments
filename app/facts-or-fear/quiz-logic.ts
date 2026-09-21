// Pure quiz data + scoring for the Facts-or-Fear assessment.
// Kept free of React so it can be unit-tested in isolation.

export type ResultType = "fear" | "constraint" | "mixed" | "unclear"

export interface Question {
  id: string
  question: string
  subtext?: string
  optionGroups?: { label: string; options: string[] }[]
  options?: string[]
  encouragement?: string
}

const Q1: Question = {
  id: "1",
  question: "What do you want to do but keep putting off?",
  subtext: "(Select the one that resonates MOST)",
  options: [
    "Post content on social media (LinkedIn, Instagram, TikTok)",
    "Start a business or side project",
    "Step into leadership or a bigger role at work",
    "Have a difficult conversation or advocate for myself",
    "Make a career change or major life decision",
    "Launch a creative project (podcast, YouTube, book, etc.)",
  ],
}

const Q2: Question = {
  id: "2",
  question: "How long have you been stuck on this?",
  options: ["1-3 months", "3-6 months", "6-12 months", "1-2 years", "2+ years", "I've lost track"],
}

const Q3: Question = {
  id: "3",
  question: "Which statement sounds MOST like you?",
  options: [
    "I'm not ready yet. I need more preparation first.",
    "I don't have enough experience/credentials to be taken seriously.",
    "What if people judge me or think I'm not good enough?",
    "I don't have the time, money, or resources right now.",
    "I'm waiting for the right time or more clarity.",
    "I don't think I can actually do this.",
  ],
  encouragement:
    "💭 Pause for a moment. You're doing great — there are no wrong answers here. Choose what feels MOST true, even if it's hard to admit.",
}

const Q4: Question = {
  id: "4",
  question: "When you think about actually DOING the thing, what's the PRIMARY thing stopping you?",
  subtext: "(Choose the ONE that resonates MOST)",
  optionGroups: [
    {
      label: "FEAR-BASED",
      options: [
        'Fear of failure ("What if it doesn\'t work?")',
        'Fear of judgment ("What will people think of me?")',
        'Fear of success ("What if it DOES work and my life changes?")',
        'Fear of inadequacy ("I\'m not good enough for this")',
        'Fear of regret ("What if I choose wrong?")',
      ],
    },
    {
      label: "CONSTRAINT-BASED",
      options: [
        "Money/financial constraint",
        "Legal/contractual restriction",
        "Time/caregiving constraint",
        "Skill/credential gap",
        "Health/physical constraint",
        "Other genuine constraint",
      ],
    },
  ],
}

// Follow-up asked only when Q4 was a constraint pick. Deliberately does NOT
// quote the chosen option back verbatim — it rephrases instead.
const Q4B: Question = {
  id: "4B",
  question: "You picked a real constraint as your #1 blocker. Help me understand — which best describes it?",
  options: [
    'Solvable with a clear timeline (e.g., "Non-compete expires in 6 months" or "I need to save $10K")',
    'Solvable but the timeline is unclear (e.g., "I need to save money but don\'t know how long it\'ll take")',
    'Ongoing / long-term (e.g., "I have young kids for the next 5 years")',
    "Honestly, I'm not sure if it's solvable or just an excuse",
  ],
}

const Q5: Question = {
  id: "5",
  question: "What do you do INSTEAD of taking action?",
  options: [
    "Research and consume more content",
    "Plan and strategize excessively",
    'Work on "prerequisites" first',
    "Wait for conditions to improve",
    "Distract myself with other tasks",
    'Tell myself "next week" repeatedly',
  ],
}

const Q6: Question = {
  id: "6",
  question: "If I could GUARANTEE you wouldn't fail, would you start tomorrow?",
  options: [
    "Yes, immediately — I'd start right now",
    "Probably yes, but I'd still feel nervous",
    "Maybe, but I'd want to prepare a bit more first",
    "I don't know, I'd need to think about it",
    "No, there are still real obstacles I need to solve first",
  ],
  encouragement:
    "✓ Halfway there. You're being honest — that takes courage. Keep going. The clarity is on the other side of the discomfort.",
}

const Q7: Question = {
  id: "7",
  question: "If your stated obstacle disappeared tomorrow, would you ACTUALLY move forward?",
  subtext: 'For example: if you suddenly had "enough experience," "enough money," or "the perfect timing"',
  options: [
    "Yes, I'd start immediately with no hesitation",
    "Probably, but I might find another reason to wait",
    "Honestly, I'd probably still hesitate",
    "No, there's something else holding me back",
    "I don't know",
  ],
}

const Q8: Question = {
  id: "8",
  question: "Have your REASONS for not starting changed over time?",
  options: [
    "Yes, I keep finding new reasons to delay (the excuse evolves)",
    "No, it's been the SAME reason the whole time",
    "Sort of — the core fear feels the same but the excuse changes",
    "I'm not sure",
  ],
  encouragement: "🎯 Almost there. Just 2 more questions. You're doing the hard work of being honest.",
}

const Q9A: Question = {
  id: "9A",
  question:
    "Take a deep breath. This is the most important question. If you're being COMPLETELY honest with yourself - no pretending, no 'should' - what's the REAL reason you haven't started?",
  subtext: "(Choose the answer that feels most true in your gut, even if you've never admitted it out loud)",
  options: [
    "I'm terrified of failing publicly and everyone seeing it",
    "I'm scared of being judged, criticized, or rejected by people I know",
    "Deep down, I don't actually believe I'm good enough to succeed at this",
    "I'm afraid of what happens if it WORKS (visibility, expectations, my life changing)",
    "Wait - actually, I think I DO have a real constraint I haven't admitted",
    "Honestly? I'm not actually sure. That's why I'm taking this assessment.",
  ],
  encouragement:
    "💡 Remember: Whatever you choose is valid. There's no judgment here. This is about YOU seeing the truth clearly.",
}

const Q9B: Question = {
  id: "9B",
  question:
    "You said you have a real constraint. Let's go deeper. If your constraint was solved tomorrow, would you start immediately?",
  subtext:
    "(For example: If the non-compete expired, if you had the money saved, if you had childcare, if you completed the certification)",
  options: [
    "Yes, I'd start immediately with no hesitation",
    "Probably yes, but I'd still feel nervous or find another reason",
    "Maybe - I think there's something else holding me back too",
    "No - there's another constraint I haven't named yet",
    "Honestly, I'm not sure",
  ],
  encouragement:
    "💡 Be honest. If you'd start immediately, your constraint is REAL. If you'd still hesitate, fear is also present.",
}

const Q10: Question = {
  id: "10",
  question:
    "If someone offered you the EXACT support you needed to overcome your obstacle, would you actually take it?",
  subtext: "(Not what you think you should say — what would you ACTUALLY do?)",
  options: [
    "Yes, absolutely — I'd start immediately without hesitation",
    "Yes, but I'd be very nervous and might second-guess myself",
    "Maybe — I'd need more details first",
    "Probably not — I don't think I'm truly ready yet",
    "No — I'd likely find another reason to wait or delay",
    "I'm honestly not sure",
  ],
  encouragement: "✓ You did it. You answered honestly — that's the hardest part. Now let's see what your answers reveal.",
}

export function isFearPick(answer: string | undefined): boolean {
  return !!answer && answer.includes("Fear of")
}

export function buildQuestions(answers: Record<string, string>): Question[] {
  const list: Question[] = [Q1, Q2, Q3, Q4]

  const q4 = answers["4"]
  const fearBased = isFearPick(q4)
  const constraintBased = !!q4 && !fearBased

  if (constraintBased) list.push(Q4B)

  list.push(Q5, Q6, Q7, Q8)

  if (fearBased) {
    list.push(Q9A)
  } else {
    // Q4 always offers a fear or constraint option, so a missing Q4 answer
    // can only happen mid-quiz; default to the constraint branch.
    list.push(Q9B)
  }

  list.push(Q10)
  return list
}

// Calculate result type based on answers
export function calculateResultType(answers: Record<string, string>): ResultType {
  let fearSignals = 0
  let constraintSignals = 0

  // Q4: Check if they selected fear or constraint option
  const q4Answer = answers["4"]
  if (q4Answer?.includes("Fear of")) {
    fearSignals += 2
  } else if (q4Answer && !q4Answer.includes("Fear of")) {
    constraintSignals += 2
  }

  // Q6: Guarantee question
  const q6 = answers["6"]
  if (q6?.includes("immediately")) fearSignals++
  if (q6?.includes("real obstacles")) constraintSignals++

  // Q7: Obstacle disappearing question
  const q7 = answers["7"]
  if (q7?.includes("immediately")) fearSignals++
  if (q7?.includes("still hesitate") || q7?.includes("something else")) fearSignals++

  // Q9A or Q9B answers
  const q9A = answers["9A"]
  const q9B = answers["9B"]
  if (q9A) fearSignals += 2
  if (q9B?.includes("immediately")) constraintSignals += 2
  if (q9B?.includes("nervous") || q9B?.includes("something else")) {
    fearSignals++
    constraintSignals++
  }

  // Q10: Readiness question
  const q10 = answers["10"]
  if (q10?.includes("nervous") || q10?.includes("not sure")) fearSignals++

  // Determine result type
  if (fearSignals >= 3 && constraintSignals <= 1) return "fear"
  if (constraintSignals >= 3 && fearSignals <= 1) return "constraint"
  if (fearSignals >= 2 && constraintSignals >= 2) return "mixed"
  return "unclear"
}
