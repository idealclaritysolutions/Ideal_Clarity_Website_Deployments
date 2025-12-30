"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, AlertCircle, CheckCircle, Clock, Lock, Lightbulb } from "lucide-react"

type Step = "landing" | "intro" | "assessment" | "email" | "results"

interface Question {
  id: string | number
  header: string
  question: string
  subtext?: string
  sectionHeaders?: { fear?: string; constraint?: string }
  options: string[]
  encouragement?: string
}

// Calculate result type based on answers
function calculateResultType(answers: Record<string, string>): "fear" | "constraint" | "mixed" | "unclear" {
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

// All base questions
const questions: Question[] = [
  {
    id: 1,
    header: "Question 1 of 10 | ✓ Your answers are private | 💭 Take your time",
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
  },
  {
    id: 2,
    header: "Question 2 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "How long have you been stuck on this?",
    options: ["1-3 months", "3-6 months", "6-12 months", "1-2 years", "2+ years", "I've lost track"],
  },
  {
    id: 3,
    header: "Question 3 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "Which statement sounds MOST like you?",
    options: [
      "I'm not ready yet. I need more preparation first.",
      "I don't have enough experience/credentials to be taken seriously.",
      "What if people judge me or think I'm not good enough?",
      "I don't have the time/money/resources right now.",
      "I'm waiting for the right time or more clarity.",
      "I don't think I can actually do this.",
    ],
  },
  {
    id: 4,
    header: "Question 4 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "When you think about actually DOING the thing, what's the PRIMARY thing stopping you?",
    subtext: "(Choose the ONE that resonates MOST)",
    sectionHeaders: {
      fear: "FEAR-BASED OPTIONS:",
      constraint: "CONSTRAINT-BASED OPTIONS:",
    },
    options: [
      'Fear of failure ("What if it doesn\'t work?")',
      'Fear of judgment ("What will people think of me?")',
      'Fear of success ("What if it DOES work and my life changes?")',
      'Fear of inadequacy ("I\'m not good enough for this")',
      'Fear of regret ("What if I choose wrong?")',
      "Money/financial constraint (Need to save money, can't afford to quit yet, need income first)",
      "Legal/contractual restriction (Non-compete, contract obligation, visa/immigration, etc.)",
      "Time/caregiving constraint (Young kids, eldercare, job demands, genuine bandwidth limit)",
      "Skill/credential gap (Need certification, degree, training, experience I don't have yet)",
      "Health/physical constraint (Personal health, family health situation, recovery, etc.)",
      "Other genuine constraint (Something real I haven't named)",
    ],
  },
  {
    id: 5,
    header: "Question 5 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "What do you do INSTEAD of taking action?",
    options: [
      "Research and consume more content (courses, books, videos, podcasts)",
      "Plan and strategize excessively (perfect the approach)",
      'Work on "prerequisites" first (website, logo, certifications, skills)',
      "Wait for conditions to improve (more time, money, clarity, confidence)",
      "Distract myself with other tasks (busy but not progressing)",
      'Tell myself "next week" or "next month" repeatedly',
    ],
  },
  {
    id: 6,
    header: "Question 6 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "If I could GUARANTEE you wouldn't fail, would you start tomorrow?",
    options: [
      "Yes, immediately - I'd start right now",
      "Probably yes, but I'd still feel nervous",
      "Maybe, but I'd want to prepare a bit more first",
      "I don't know, I'd need to think about it",
      "No, there are still real obstacles I need to solve first",
    ],
  },
  {
    id: 7,
    header: "Question 7 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "If your stated obstacle disappeared tomorrow, would you ACTUALLY move forward?",
    subtext: 'For example: If you suddenly had "enough experience" or "enough money" or "the perfect timing"',
    options: [
      "Yes, I'd start immediately with no hesitation",
      "Probably, but I might find another reason to wait",
      "Honestly, I'd probably still hesitate",
      "No, there's something else holding me back",
      "I don't know",
    ],
  },
  {
    id: 8,
    header: "Question 8 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "Have your REASONS for not starting changed over time?",
    options: [
      "Yes, I keep finding NEW reasons to delay (the excuse evolves)",
      "No, it's been the SAME reason the whole time",
      "Sort of - the core fear feels the same but the excuse changes",
      "I'm not sure",
    ],
  },
  {
    id: 9,
    header: "Question 9 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "Placeholder - This question is dynamically replaced based on your answers",
    options: ["Placeholder option"],
  },
  {
    id: 10,
    header: "Question 10 of 10 | ✓ Your answers are private | 💭 Take your time",
    question:
      "Last question: Be honest about your readiness. If someone offered you the EXACT support you needed to overcome your obstacle, would you actually take it?",
    subtext: "(Not what you think you should say - what would you ACTUALLY do?)",
    options: [
      "Yes, absolutely - I'd start immediately without hesitation",
      "Yes, but I'd be very nervous and might second-guess myself",
      "Maybe - I'd need to know more details and think about it first",
      "Probably not - I don't think I'm truly ready yet",
      "No - I'd likely find another reason to wait or delay",
      "I'm honestly not sure - I want to, but I don't know if I'd follow through",
    ],
    encouragement:
      "✓ You did it. You answered honestly. That's the hardest part. Now let's show you what your answers reveal.",
  },
]

function FactsOrFearClient() {
  const [step, setStep] = useState<Step>("landing")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [subscribe, setSubscribe] = useState(true)

  // Determine if user selected fear or constraint in Q4
  const isFearBased = answers["4"]?.includes("Fear of")
  const isConstraintBased = answers["4"] && !answers["4"].includes("Fear of")

  // Build dynamic question list based on answers
  const currentQuestions = useMemo((): Question[] => {
    const baseQuestions = [
      questions[0], // Q1
      questions[1], // Q2
      questions[2], // Q3
      questions[3], // Q4
    ]

    // Add Q4B if constraint selected
    if (isConstraintBased && answers["4"]) {
      baseQuestions.push({
        id: "4B",
        header: "Question 4B of 10 | ✓ Your answers are private | 💭 Take your time",
        question: `You selected: "${answers["4"]}". Help me understand: Is this constraint...`,
        options: [
          'Solvable with a clear timeline (e.g., "Non-compete expires in 6 months" or "I need to save $10K")',
          'Solvable but timeline unclear (e.g., "I need to save money but don\'t know how long")',
          'Ongoing/long-term (e.g., "I have young kids for the next 5 years")',
          "Honestly, I'm not sure if it's solvable or just an excuse",
        ],
      })
    }

    baseQuestions.push(
      questions[4], // Q5
      questions[5], // Q6
      questions[6], // Q7
      questions[7], // Q8
    )

    // Add Q9A for fear-based
    if (isFearBased) {
      baseQuestions.push({
        id: "9A",
        header: "Question 9 of 10 | ✓ Your answers are private | 💭 Take your time",
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
      })
    }

    // Add Q9B for constraint-based
    if (isConstraintBased) {
      baseQuestions.push({
        id: "9B",
        header: "Question 9 of 10 | ✓ Your answers are private | 💭 Take your time",
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
      })
    }

    // Always add Q10
    baseQuestions.push(questions[9])

    return baseQuestions
  }, [isFearBased, isConstraintBased, answers])

  const handleAnswer = () => {
    if (!selectedOption) return

    const currentQ = currentQuestions[currentQuestion]
    const newAnswers = { ...answers, [currentQ.id]: selectedOption }
    setAnswers(newAnswers)
    setSelectedOption("")

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep("email")
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !firstName) return

    // Calculate deadline (7 days from now)
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 7)
    const deadlineFormatted = deadline.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Get Q3 answer
    const q3Answer = answers["3"] || ""

    try {
      await fetch("/api/assessment-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          q3Answer,
          deadline: deadlineFormatted,
          isFearBased,
          answers: JSON.stringify(answers),
        }),
      })
    } catch (error) {
      // Continue to results even if email fails
    }

    setStep("results")
  }

  const currentQuestionData = currentQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100
  const resultType = calculateResultType(answers)

  // Show encouragement after Q3, Q6, Q8
  const showEncouragement =
    currentQuestion === 3 ||
    currentQuestion === 6 ||
    (currentQuestion === 8 && !currentQuestions[currentQuestion + 1]?.id.toString().startsWith("9"))

  const calendlyLink =
    "https://calendly.com/idealclaritysolutions/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio"

  // LANDING PAGE
  if (step === "landing") {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Are Your Reasons FACTS... or FEAR?</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-bold">
              Take the 2-minute assessment and find out what's REALLY stopping you from:
            </p>
            <ul className="text-lg md:text-xl text-muted-foreground mb-2 space-y-1 max-w-2xl mx-auto text-left list-disc list-inside">
              <li>Starting that business</li>
              <li>Posting content and building visibility</li>
              <li>Going after the role or promotion you want</li>
              <li>Stepping into leadership</li>
            </ul>

            <div className="space-y-2 mt-8 mb-4 text-lg">
              <p className="text-muted-foreground">
                You've been telling yourself you're "not ready yet." That you need more time, experience, or clarity.
              </p>
              <p className="text-muted-foreground">But what if those aren't real obstacles?</p>
              <p className="text-muted-foreground font-bold">What if they're just fear dressed up as logic?</p>
            </div>

            <div className="py-4">
              <Button size="lg" onClick={() => setStep("intro")} className="text-lg px-8 py-6">
                START FREE ASSESSMENT
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Takes only 2 minutes</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-4">
              <span className="flex items-center gap-1">
                <Lock className="h-4 w-4" /> 100% Private & Confidential
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> No time limit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> Free - no credit card required
              </span>
            </div>
          </div>
        </section>

        {/* Visual Split Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Left: What You Tell Yourself */}
              <div className="relative overflow-hidden rounded-lg border-2 border-border bg-card shadow-md">
                <div className="relative h-32">
                  <img
                    src="/person-thinking-with-question-marks-floating-aroun.jpg"
                    alt="Person thinking"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                </div>
                <div className="p-6 bg-card/95">
                  <Brain className="h-12 w-12 text-muted-foreground mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-center mb-4">What You Tell Yourself</h3>
                  <ul className="space-y-3 text-base text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="font-medium">I need more experience first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="font-medium">I'm not ready yet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="font-medium">I don't have the time right now</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: The Possible Truth */}
              <div className="relative overflow-hidden rounded-lg border-2 border-primary bg-card shadow-lg">
                <div className="relative h-32">
                  <img
                    src="/lightbulb-moment-clarity-breakthrough-understandin.jpg"
                    alt="Lightbulb moment"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                </div>
                <div className="p-6 bg-card/95">
                  <AlertCircle className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-center mb-4">The Possible Truth</h3>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                      <span className="text-primary font-bold">•</span>
                      <span className="font-semibold">I'm scared of failing</span>
                    </li>
                    <li className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                      <span className="text-primary font-bold">•</span>
                      <span className="font-semibold">I'm terrified of being seen</span>
                    </li>
                    <li className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                      <span className="text-primary font-bold">•</span>
                      <span className="font-semibold">I'm afraid I'm not good enough</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-center text-lg font-medium mt-6">This assessment reveals the truth</p>
          </div>
        </section>

        {/* What You'll Discover */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">In 2 minutes, you'll discover:</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Your primary excuse pattern</strong> - The story you keep telling yourself
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Whether it's FACT or FEAR</strong> - Real constraint vs. avoidance mechanism
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>What's ACTUALLY keeping you stuck</strong> - The hidden blocker you can't see on your own
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Your exact next step</strong> - What you need to do to break free
                </span>
              </li>
            </ul>
            <p className="text-center mt-6 font-medium text-muted-foreground">No fluff. No theory. Just the truth.</p>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={() => setStep("intro")} className="text-lg px-8 py-6">
                START FREE ASSESSMENT
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Takes only 2 minutes</p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">This assessment is for you if:</h2>
              <ul className="space-y-3 text-lg mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You've been "about to start" for 3+ months</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You know what you want but can't get yourself to do it</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You're tired of your own excuses (but don't know how to break free)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>You're ready to see the truth (even if it's uncomfortable)</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-center mb-4">This is NOT for you if:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>You're still exploring options (you don't know what you want yet)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>You're not willing to be honest with yourself</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>You just want someone to validate your excuses</span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <Button size="lg" onClick={() => setStep("intro")} className="text-lg px-8 py-6">
                  START FREE ASSESSMENT
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Takes only 2 minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before You Start */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-amber-600" />A note about honesty:
              </h2>
              <div className="space-y-4 text-base">
                <p>
                  This assessment only works if you're brutally honest. Not the version of yourself you show on
                  LinkedIn. Not the version you tell your friends. The version that exists at 2am when you can't sleep.
                </p>
                <p>There are no "right" answers. No one is judging you. This is just you and the truth.</p>
                <p>
                  Take your time. Read each question carefully. Sit with it if you need to. Choose the answer that feels
                  MOST true (even if it's uncomfortable).
                </p>
                <p>Your results are completely private. Only you will see them (unless you choose to share).</p>
                <p className="font-medium">
                  The more honest you are, the more accurate your results will be. And the clearer your path forward
                  becomes.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={() => setStep("intro")} className="text-lg px-8 py-6">
                START FREE ASSESSMENT
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Takes only 2 minutes</p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What others have said:</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <p className="text-muted-foreground italic mb-4">
                  "This assessment saw through my excuses better than I could. The results were uncomfortably accurate."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <p className="text-muted-foreground italic mb-4">
                  "I felt safe being completely real. The results were exactly what I needed to hear."
                </p>
                <p className="font-semibold">- Marcus T.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <p className="text-muted-foreground italic mb-4">
                  "I sat with some questions for a few minutes before answering. The results were spot-on."
                </p>
                <p className="font-semibold">- Olufunmi S.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to see the truth?</h2>
            <Button size="lg" onClick={() => setStep("intro")} className="text-xl px-10 py-7 mb-3">
              START FREE ASSESSMENT
            </Button>
            <p className="text-sm text-muted-foreground mb-6">2 minutes. Completely private. Brutally honest.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="h-4 w-4" /> Private & Confidential
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> No time limit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> Free
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4">10 questions. No email required until the end.</p>
          </div>
        </section>
      </div>
    )
  }

  // INTRO SCREEN
  if (step === "intro") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-card border rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">10 Questions. Total Honesty.</h1>
          <div className="space-y-4 text-base mb-6">
            <p className="font-semibold">Here's how this works:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Read each question carefully - Don't rush. Sit with it.</li>
              <li>
                Choose the answer that feels MOST true - Not what you think you "should" say. What's actually true.
              </li>
              <li>
                Be honest even if it's uncomfortable - The discomfort is the signal you're getting close to the truth.
              </li>
              <li>There are no wrong answers - This is about YOU seeing clearly. Not being judged.</li>
            </ul>
            <p className="font-semibold mt-6">Remember:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Your answers are completely private</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>No one is grading you</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>The goal is clarity, not perfection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>The more honest you are, the better your results</span>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">You can take as much time as you need. This is for YOU.</p>
          </div>
          <Button size="lg" onClick={() => setStep("assessment")} className="w-full text-lg py-6">
            START QUESTION 1
          </Button>
        </div>
      </div>
    )
  }

  // ASSESSMENT SCREEN
  if (step === "assessment") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Progress Bar */}
        <div className="bg-card border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg shadow-md p-8 mb-6">
              <p className="text-sm text-muted-foreground mb-4">{currentQuestionData.header}</p>
              <h2 className="text-2xl font-bold mb-2">{currentQuestionData.question}</h2>
              {currentQuestionData.subtext && (
                <p className="text-muted-foreground mb-6">{currentQuestionData.subtext}</p>
              )}

              <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3">
                {currentQuestionData.sectionHeaders && (
                  <>
                    <p className="font-semibold text-sm mt-4 mb-2">{currentQuestionData.sectionHeaders.fear}</p>
                    {currentQuestionData.options.slice(0, 5).map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer"
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                    <p className="font-semibold text-sm mt-6 mb-2">{currentQuestionData.sectionHeaders.constraint}</p>
                    {currentQuestionData.options.slice(5).map((option, index) => (
                      <div
                        key={index + 5}
                        className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer"
                      >
                        <RadioGroupItem value={option} id={`option-${index + 5}`} />
                        <Label htmlFor={`option-${index + 5}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </>
                )}

                {!currentQuestionData.sectionHeaders &&
                  currentQuestionData.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer"
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
              </RadioGroup>

              {currentQuestionData.encouragement && (
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <p className="text-sm">{currentQuestionData.encouragement}</p>
                </div>
              )}
            </div>

            {/* Encouragement Prompts */}
            {showEncouragement && currentQuestion === 3 && (
              <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <p className="font-medium mb-2">💭 Pause for a moment.</p>
                <p className="text-sm">You're doing great. Remember: there are no wrong answers here.</p>
                <p className="text-sm">Choose what feels MOST true, even if it's hard to admit.</p>
              </div>
            )}

            {showEncouragement && currentQuestion === 6 && (
              <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <p className="font-medium mb-2">✓ Halfway there.</p>
                <p className="text-sm">You're being honest. That takes courage.</p>
                <p className="text-sm">Keep going. The clarity is on the other side of the discomfort.</p>
              </div>
            )}

            {showEncouragement && currentQuestion === 8 && (
              <div className="bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
                <p className="font-medium mb-2">🎯 Almost there. Just 2 more questions.</p>
                <p className="text-sm">You're doing the hard work of being honest.</p>
                <p className="text-sm">The truth is just ahead.</p>
              </div>
            )}

            <Button size="lg" onClick={handleAnswer} disabled={!selectedOption} className="w-full text-lg py-6">
              NEXT
            </Button>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="bg-muted border-t py-3">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3" /> Private
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> No time limit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> Total honesty = Best results
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // EMAIL CAPTURE SCREEN
  if (step === "email") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-card border rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">You Did It. Now Let's Show You The Truth.</h1>
          <p className="text-muted-foreground mb-6">
            You just answered 10 questions with complete honesty. That takes courage. Most people aren't willing to face
            the truth about what's stopping them. You are.
          </p>
          <p className="mb-6">Your personalized results are ready. Enter your details to see them:</p>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Your first name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
                className="mt-1"
              />
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="subscribe"
                checked={subscribe}
                onCheckedChange={(checked) => setSubscribe(checked === true)}
              />
              <Label htmlFor="subscribe" className="text-sm cursor-pointer">
                Yes, send me insights on breaking through fear and getting unstuck (unsubscribe anytime)
              </Label>
            </div>
            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
              <p>
                🔒 Your answers and results are completely private. We'll never share your data. 📧 No spam. Just your
                results + helpful insights when relevant.
              </p>
            </div>
            <Button type="submit" size="lg" className="w-full text-lg py-6">
              SHOW ME MY RESULTS
            </Button>
            
          </form>
        </div>
      </div>
    )
  }

  // RESULTS PAGES
  if (step === "results") {
    // FEAR-BASED RESULTS
    if (resultType === "fear") {
      return (
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Your Results: This is FEAR, Not Facts.</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Based on your answers, here's the truth you've been avoiding: What you think is a "real obstacle" is
              actually fear disguised as logic.
            </p>

            {/* Section 1: Diagnosis */}
            <section className="mb-12 bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Your Primary Excuse Pattern:</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-lg italic">"{answers["3"]}"</p>
              </div>
              <h3 className="text-xl font-semibold mb-3">Here's what's ACTUALLY happening:</h3>
              <p className="mb-4">
                You're using <span className="font-semibold">"{answers["3"]}"</span> as protection.
              </p>
              <p className="mb-2 font-semibold">Protection from:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Being seen publicly</li>
                <li>Being judged or criticized</li>
                <li>Being "found out" as not good enough</li>
                <li>Failing where everyone can see</li>
              </ul>
              <p className="mb-4">It FEELS like a real constraint. Like a logical, responsible reason to wait.</p>
              <p className="font-semibold">
                But here's the test: If this obstacle disappeared tomorrow... You'd find another reason to wait.
              </p>
              <p className="mt-4">Because the obstacle isn't the issue. The fear is.</p>
            </section>

            {/* Section 2: The Pattern */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Here's the loop that's been running your life:</h2>
              <ol className="space-y-3 mb-4">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>You decide you're going to start</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Fear shows up disguised as "{answers["3"]}"</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>You tell yourself "I'll start once I solve this"</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>You work on "solving" the obstacle (but it never feels fully solved)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>Repeat</span>
                </li>
              </ol>
              <p className="mb-2">
                You've been in this loop for: <span className="font-bold">{answers["2"]}</span>
              </p>
              <p className="font-semibold">And you'll stay in it until you see it clearly.</p>
            </section>

            {/* Section 3: What This Is Costing You */}
            <section className="mb-12 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Every month you stay stuck, you're losing:</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>
                    <strong>Opportunities</strong> - Promotions, clients, partnerships, visibility you didn't go for
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>
                    <strong>Momentum</strong> - Other people are building while you're "preparing"
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>
                    <strong>Mental energy</strong> - The same internal debate on repeat is exhausting
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>
                    <strong>Time</strong> - Another 30 days your future self will never get back
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-3">If nothing changes:</h3>
              <div className="space-y-2 mb-6 text-sm">
                <p>
                  <strong>3 months from now:</strong> Still stuck. More frustrated. Deeper shame.
                </p>
                <p>
                  <strong>6 months from now:</strong> Still at the same crossroads. Watching others do what you want to
                  do.
                </p>
                <p>
                  <strong>1 year from now:</strong> Looking back at today wishing you'd moved.
                </p>
                <p>
                  <strong>5 years from now:</strong> Still wondering "what if?"
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-green-400">Or...</h3>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="font-bold mb-2">30 days from now:</p>
                <p className="mb-2">You've actually DONE the thing.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Posted the content.</li>
                  <li>Launched the business.</li>
                  <li>Stepped into the role.</li>
                  <li>Had the conversation.</li>
                  <li>Moved.</li>
                </ul>
              </div>
            </section>

            {/* The Good News */}
            <section className="mb-12 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Here's what changes everything:</h2>
              <p className="mb-4">Once you SEE that it's fear (not facts), you can choose differently.</p>
              <p className="mb-2 font-semibold">You don't need to:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Wait until you feel ready (that day never comes)</li>
                <li>Wait until you feel confident (confidence comes AFTER action)</li>
                <li>Wait for perfect conditions (they don't exist)</li>
              </ul>
              <p className="mb-2 font-semibold">You just need to:</p>
              <p className="text-lg font-bold mb-4">Move anyway. While scared. Imperfectly.</p>
              <p>And that's exactly what we help you do.</p>
            </section>

            {/* CTA Section */}
            <section className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to break through?</h2>
              <Button size="lg" onClick={() => window.open(calendlyLink, "_blank")} className="text-xl px-10 py-7 mb-3">
                BOOK YOUR FREE CLARITY CALL
              </Button>
              <p className="text-sm text-muted-foreground">15 minutes. No pressure. Just clarity.</p>
            </section>
          </div>
        </div>
      )
    }

    // CONSTRAINT-BASED RESULTS
    if (resultType === "constraint") {
      return (
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Your Results: You Have a Real Constraint.</h1>
            <p className="text-xl text-muted-foreground mb-12">But you've been using it as a reason to do nothing.</p>

            {/* Diagnosis */}
            <section className="mb-12 bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Your Primary Constraint:</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-lg italic">"{answers["4"]}"</p>
              </div>
              <p className="mb-4">
                Yes, <span className="font-semibold">{answers["4"]}</span> is REAL. It's not just fear. It's not an
                excuse. It's a legitimate obstacle.
              </p>
              <p className="mb-4">
                But: You've been using it as a reason to do NOTHING while you wait for it to be solved.
              </p>
              <p className="mb-2">Instead of building momentum NOW, you've been "stuck waiting."</p>
            </section>

            {/* Free Resource CTA */}
            <section className="mb-12 bg-primary/10 border-2 border-primary rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Download: The Constraint Solution Framework</h2>
              <p className="mb-4">A practical roadmap to solve your constraint AND build momentum at the same time.</p>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    `mailto:idealclaritysolutions@gmail.com?subject=Constraint Solution Framework Request&body=Hi, I just completed the Facts or Fear assessment and would like to receive the Constraint Solution Framework. Thank you!`,
                    "_blank",
                  )
                }
                className="w-full text-lg py-6"
              >
                REQUEST FREE FRAMEWORK
              </Button>
            </section>

            {/* CTA Section */}
            <section className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Want support executing this?</h2>
              <Button size="lg" onClick={() => window.open(calendlyLink, "_blank")} className="text-xl px-10 py-7 mb-3">
                BOOK YOUR FREE CLARITY CALL
              </Button>
              <p className="text-sm text-muted-foreground">15 minutes. No pressure. Just clarity.</p>
            </section>
          </div>
        </div>
      )
    }

    // MIXED RESULTS
    if (resultType === "mixed") {
      return (
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Your Results: You Have a Constraint AND Fear.</h1>
            <p className="text-xl text-muted-foreground mb-12">Let's address both.</p>

            <section className="mb-12 bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Here's what's happening:</h2>
              <p className="mb-4">
                You have a REAL constraint: <span className="font-semibold">"{answers["4"]}"</span>
              </p>
              <p className="mb-4">This is legitimate. It's not just fear.</p>
              <p className="mb-4">
                But there's something else going on too: Even if your constraint was solved tomorrow, you'd still
                hesitate. Because fear is ALSO present.
              </p>
              <p className="font-semibold">
                The constraint gives you a "legitimate" excuse. But fear is what's ACTUALLY keeping you frozen.
              </p>
            </section>

            <section className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's untangle both together.</h2>
              <Button size="lg" onClick={() => window.open(calendlyLink, "_blank")} className="text-xl px-10 py-7 mb-3">
                BOOK YOUR FREE CLARITY CALL
              </Button>
              <p className="text-sm text-muted-foreground">15 minutes. No pressure. Just clarity.</p>
            </section>
          </div>
        </div>
      )
    }

    // UNCLEAR RESULTS
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-card border rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Your Results: You Need Clarity Before You Can Move.</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Based on your answers, here's the truth: You're not sure what's stopping you. And that uncertainty is
              keeping you stuck.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-8 text-left">
              <h2 className="text-xl font-bold mb-3">You don't need a program yet. You need a conversation.</h2>
              <p className="mb-4">A conversation where we:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Untangle what's ACTUALLY stopping you</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Expose the hidden patterns you can't see on your own</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Distinguish fear from constraint from lack of clarity</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Map your next step</span>
                </li>
              </ul>
            </div>

            <Button size="lg" onClick={() => window.open(calendlyLink, "_blank")} className="text-xl px-10 py-7 mb-3">
              BOOK YOUR FREE CLARITY CALL
            </Button>
            <p className="text-sm text-muted-foreground">15 minutes. No pressure. Just clarity.</p>

            <p className="mt-6 text-muted-foreground">
              You don't have to stay stuck in uncertainty. Let's figure this out together.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default FactsOrFearClient
export { FactsOrFearClient }
