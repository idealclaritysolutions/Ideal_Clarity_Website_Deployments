"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  X,
  Clock,
  CreditCard,
  Brain,
  Lightbulb,
  Lock,
  ArrowRight,
  AlertCircle,
  ChevronDown,
} from "lucide-react"

type ResultType = "fear-based" | "constraint-based" | "mixed" | "unclear"

function calculateResultType(answers: Record<number, string>): ResultType {
  const q4 = answers[4] || ""
  const q6 = answers[6] || ""
  const q7 = answers[7] || ""
  const q9a = answers["9a"] || ""
  const q9b = answers["9b"] || ""
  const q10 = answers[10] || ""

  // Check for constraint indicators
  const hasConstraint =
    q4.includes("constraint") ||
    q4.includes("Money") ||
    q4.includes("Legal") ||
    q4.includes("Time") ||
    q4.includes("Skill") ||
    q4.includes("Health") ||
    q4.includes("genuine constraint")

  // Check for fear indicators
  const hasFear =
    q4.includes("Fear of judgment") ||
    q4.includes("Fear of failure") ||
    q4.includes("Fear of success") ||
    q6.includes("Yes, immediately") ||
    q6.includes("Probably yes") ||
    q7.includes("find another reason") ||
    q7.includes("still hesitate") ||
    q10.includes("find another reason")

  // Check for uncertainty/inconsistency
  const hasUncertainty = q6.includes("Not sure") || q7.includes("Not sure") || (!hasConstraint && !hasFear)

  // Determine result type
  if (hasConstraint && hasFear) return "mixed"
  if (hasUncertainty) return "unclear"
  if (hasConstraint) return "constraint-based"
  return "fear-based"
}

type Question = {
  id: string
  header?: string
  question: string
  subtext?: string
  options?: string[]
  sections?: { header: string; options: string[] }[]
  encouragement?: string
  encouragementAfter?: { text: string }
}

const questions: Question[] = [
  {
    id: "1",
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
    id: "2",
    header: "Question 2 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "How long have you been stuck on this?",
    options: ["1-3 months", "3-6 months", "6-12 months", "1-2 years", "2+ years", "I've lost track"],
  },
  {
    id: "3",
    header: "Question 3 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "Which statement sounds MOST like you?",
    options: [
      '"I\'m not ready yet. I need more preparation first."',
      '"I don\'t have enough experience/credentials to be taken seriously."',
      '"What if people judge me or think I\'m not good enough?"',
      '"I don\'t have the time/money/resources right now."',
      '"I\'m waiting for the right time or more clarity."',
      '"I don\'t think I can actually do this."',
    ],
    encouragementAfter: {
      text: "💭 Pause for a moment.\nYou're doing great. Remember: there are no wrong answers here.\nChoose what feels MOST true, even if it's hard to admit.",
    },
  },
  {
    id: "4",
    header: "Question 4 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "When you think about actually DOING the thing, what's the PRIMARY thing stopping you?",
    subtext: "(Choose the ONE that resonates MOST)",
    sections: [
      {
        header: "FEAR-BASED OPTIONS:",
        options: [
          'Fear of failure ("What if it doesn\'t work?")',
          'Fear of judgment ("What will people think of me?")',
          'Fear of success ("What if it DOES work and my life changes?")',
          'Fear of inadequacy ("I\'m not good enough for this")',
          'Fear of regret ("What if I choose wrong?")',
        ],
      },
      {
        header: "CONSTRAINT-BASED OPTIONS:",
        options: [
          "Money/financial constraint (Need to save money, can't afford to quit yet, need income first)",
          "Legal/contractual restriction (Non-compete, contract obligation, visa/immigration, etc.)",
          "Time/caregiving constraint (Young kids, eldercare, job demands, genuine bandwidth limit)",
          "Skill/credential gap (Need certification, degree, training, experience I don't have yet)",
          "Health/physical constraint (Personal health, family health situation, recovery, etc.)",
          "Other genuine constraint (Something real I haven't named)",
        ],
      },
    ],
  },
  // Conditional 4B - only for constraint-based
  // ...(isConstraintBased ? [...] : []), // This was conditional logic within the component
  {
    id: "5",
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
    id: "6",
    header: "Question 6 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "If I could GUARANTEE you wouldn't fail, would you start tomorrow?",
    options: [
      "Yes, immediately - I'd start right now",
      "Probably yes, but I'd still feel nervous",
      "Maybe, but I'd want to prepare a bit more first",
      "I don't know, I'd need to think about it",
      "No, there are still real obstacles I need to solve first",
    ],
    encouragementAfter: {
      text: "✓ Halfway there.\nYou're being honest. That takes courage.\nKeep going. The clarity is on the other side of the discomfort.",
    },
  },
  {
    id: "7",
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
    id: "8",
    header: "Question 8 of 10 | ✓ Your answers are private | 💭 Take your time",
    question: "Have your REASONS for not starting changed over time?",
    options: [
      "Yes, I keep finding NEW reasons to delay (the excuse evolves)",
      "No, it's been the SAME reason the whole time",
      "Sort of - the core fear feels the same but the excuse changes",
      "I'm not sure",
    ],
    encouragementAfter: {
      text: "🎯 Almost there. Just 2 more questions.\nYou're doing the hard work of being honest.\nThe truth is just ahead.",
    },
  },
  // Conditional 9A - only for fear-based
  // ...(isFearBased ? [...] : []), // This was conditional logic within the component
  // Conditional 9B - only for constraint-based
  // ...(isConstraintBased ? [...] : []), // This was conditional logic within the component
  {
    id: "10",
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showIntro, setShowIntro] = useState(true)
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [encouragementText, setEncouragementText] = useState("")
  const [emailInput, setEmail] = useState("")
  const [firstNameInput, setFirstName] = useState("")
  const [emailSending, setEmailSending] = useState(false)
  const [step, setStep] = useState<"landing" | "intro" | "assessment" | "email" | "results">("landing")

  const isConstraintBased =
    answers["4"]?.includes("constraint") ||
    answers["4"]?.includes("Money") ||
    answers["4"]?.includes("Legal") ||
    answers["4"]?.includes("Time") ||
    answers["4"]?.includes("Skill") ||
    answers["4"]?.includes("Health") ||
    answers["4"]?.includes("Other genuine")
  const isFearBased = answers["4"] && !isConstraintBased

  // Dynamically update questions based on Q4 answer
  const currentQuestions = ((): Question[] => {
    const baseQuestions = [
      questions[0], // Q1
      questions[1], // Q2
      questions[2], // Q3
      questions[3], // Q4
    ]

    if (isConstraintBased) {
      baseQuestions.push({
        id: "4B",
        header: `Question 4B of 10 | ✓ Your answers are private | 💭 Take your time`,
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

    if (isFearBased) {
      baseQuestions.push({
        id: "9A",
        header: "Question 9 of 10 | ✓ Your answers are private | 💭 Take your time",
        question:
          "Take a deep breath. This is the most important question. If you're being COMPLETELY honest with yourself - no pretending, no \"should\" - what's the REAL reason you haven't started?",
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
    } else if (isConstraintBased) {
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
          "💡 Be honest. If you'd start immediately, your constraint is REAL. If you would still hesitate, fear is also present.",
      })
    }

    // Always include Q10
    baseQuestions.push(questions[9])

    return baseQuestions
  })()

  const handleAnswer = (answer: string) => {
    const currentQ = currentQuestions[currentQuestionIndex]
    setAnswers((prev) => ({ ...prev, [currentQ.id]: answer }))

    if (currentQ.encouragementAfter) {
      setEncouragementText(currentQ.encouragementAfter.text)
      setShowEncouragement(true)
    } else if (currentQ.encouragement) {
      setEncouragementText(currentQ.encouragement)
      setShowEncouragement(true)
    } else {
      moveToNext()
    }
  }

  const moveToNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Show email capture
      setStep("email")
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const resultType = calculateResultType(answers)

    const sevenDaysFromNow = new Date()
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
    const deadline = sevenDaysFromNow.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    console.log("[v0] Starting email submission with:", {
      email: emailInput,
      firstName: firstNameInput,
      resultType: resultType,
      isFearBased: resultType === "fear-based",
    })
    console.log("[v0] Q3 Answer:", answers[3])
    console.log("[v0] Deadline:", deadline)

    if (emailInput && firstNameInput) {
      setEmailSending(true)
      try {
        console.log("[v0] Making API call to /api/assessment-email")
        const response = await fetch("/api/assessment-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput,
            firstName: firstNameInput,
            isFearBased: resultType === "fear-based", // Use calculated resultType
            answers: answers,
            q3Answer: answers[3] || "",
            deadline: deadline,
          }),
        })

        console.log("[v0] API response status:", response.status, response.statusText)
        const data = await response.json()
        console.log("[v0] Email API response:", data)

        if (!data.success) {
          console.error("[v0] Failed to send email:", data.error)
          alert("There was an issue sending the email. Please try again or contact support.")
        } else {
          console.log("[v0] Email sent successfully!")
        }
      } catch (error) {
        console.error("[v0] Error in email submission:", error)
        alert("Failed to submit email. Please check your connection and try again.")
      }
      setEmailSending(false)
      setEmail(emailInput) // Set the state after successful submission
      setFirstName(firstNameInput) // Set the state after successful submission
      setStep("results")
    } else {
      console.error("[v0] Missing email or firstName:", { email: emailInput, firstName: firstNameInput })
      alert("Please enter both your name and email address.")
    }
  }

  if (step === "landing") {
    return <LandingPage onStart={() => setStep("intro")} />
  }

  if (step === "intro") {
    return <IntroScreen onStart={() => setStep("assessment")} />
  }

  if (step === "assessment") {
    return (
      <AssessmentScreen
        question={currentQuestions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex}
        totalQuestions={currentQuestions.length}
        onAnswer={handleAnswer}
        showEncouragement={showEncouragement}
        encouragementText={encouragementText}
        setShowEncouragement={setShowEncouragement}
        moveToNext={moveToNext}
      />
    )
  }

  if (step === "email") {
    return (
      <EmailCapture
        email={emailInput}
        setEmail={setEmail}
        firstName={firstNameInput}
        setFirstName={setFirstName}
        onSubmit={handleEmailSubmit}
        emailSending={emailSending}
      />
    )
  }

  if (step === "results") {
    return <ResultsRouter answers={answers} email={emailInput} firstName={firstNameInput} />
  }

  return null
}

function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Are Your Reasons <span className="text-primary">FACTS</span>... or <span className="text-accent">FEAR</span>
            ?
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground text-balance">
              Take the 2-minute assessment and find out what's REALLY stopping you.
            </p>
            <p className="text-lg text-muted-foreground text-balance">
              You've been telling yourself you're "not ready yet." That you need more time. More experience. More
              clarity.
            </p>
            <p className="text-lg text-muted-foreground text-balance">But what if those aren't real obstacles?</p>
            <p className="text-lg font-semibold text-accent">What if they're just fear... dressed up as logic?</p>
            <p className="text-lg text-foreground font-medium">This assessment will show you the truth.</p>
          </div>

          <div className="py-6">
            <Button onClick={onStart} size="lg" className="text-xl px-12 py-8 h-auto font-bold shadow-lg">
              START THE ASSESSMENT
            </Button>
            <p className="text-sm text-muted-foreground mt-3">2 minutes. Completely private. Brutally honest.</p>
          </div>

          <div className="max-w-5xl mx-auto my-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Left side - Excuses/Surface Reasons */}
              <Card className="p-8 bg-muted/30 border-2 relative overflow-hidden">
                <img
                  src="/person-thinking-with-question-marks-floating-aroun.jpg"
                  alt="Person thinking with doubts"
                  className="absolute top-0 left-0 w-full h-32 object-cover opacity-20"
                />
                <div className="relative z-10 space-y-4 mt-24">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">What You Tell Yourself</h3>
                  {["I need more experience first", "I'm not ready yet", "What if people judge me?"].map(
                    (thought, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0" />
                        <span className="text-sm italic text-muted-foreground">{thought}</span>
                      </div>
                    ),
                  )}
                </div>
              </Card>

              {/* Right side - The Truth */}
              <Card className="p-8 bg-accent/5 border-2 border-accent relative overflow-hidden">
                <img
                  src="/lightbulb-moment-clarity-breakthrough-understandin.jpg"
                  alt="Moment of clarity"
                  className="absolute top-0 left-0 w-full h-32 object-cover opacity-20"
                />
                <div className="relative z-10 space-y-4 mt-24">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6 text-accent">The Real Truth</h3>
                  {["I'm scared of failing", "I'm terrified of being seen", "I'm afraid I'm not good enough"].map(
                    (truth, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-background rounded-lg border-l-4 border-accent"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-sm font-semibold text-accent">{truth}</span>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </div>
            <p className="text-center text-sm font-semibold text-accent mt-6">
              This assessment reveals what's REALLY holding you back
            </p>
          </div>

          {/* Primary CTA */}
          <div className="space-y-4">
            <Button onClick={onStart} size="lg" className="text-xl px-12 py-8 h-auto font-bold">
              START THE ASSESSMENT
            </Button>
            <p className="text-sm text-muted-foreground">2 minutes. Completely private. Brutally honest.</p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Private & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No time limit - take as long as you need</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free - no credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Discover */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">In 2 minutes, you'll discover:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Your primary excuse pattern",
                description: "The story you keep telling yourself",
              },
              {
                title: "Whether it's FACT or FEAR",
                description: "Real constraint vs. avoidance mechanism",
              },
              {
                title: "What's ACTUALLY keeping you stuck",
                description: "The hidden blocker you can't see on your own",
              },
              {
                title: "Your exact next step",
                description: "What you need to do to break free",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:border-primary transition-colors">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-lg font-medium text-primary">No fluff. No theory. Just the truth.</p>
        </div>

        {/* Who This Is For */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">This assessment is for you if:</h2>
          <div className="space-y-4 mb-12">
            {[
              'You\'ve been "about to start" for 3+ months',
              "You know what you want but can't get yourself to do it",
              "You're tired of your own excuses (but don't know how to break free)",
              "You're ready to see the truth (even if it's uncomfortable)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 pt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">This is NOT for you if:</h3>
            <div className="space-y-4">
              {[
                "You're still exploring options (you don't know what you want yet)",
                "You're not willing to be honest with yourself",
                "You just want someone to validate your excuses",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                  <X className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before You Start */}
        <Card className="max-w-3xl mx-auto mb-20 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background border-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">A note about honesty:</h2>
          <div className="space-y-4 text-lg text-foreground">
            <p>
              This assessment only works if you're brutally honest. Not the version of yourself you show on LinkedIn.
              Not the version you tell your friends. The version that exists at 2am when you can't sleep.
            </p>
            <p>There are no "right" answers. No one is judging you. This is just you and the truth.</p>
            <p>
              Take your time. Read each question carefully. Sit with it if you need to. Choose the answer that feels
              MOST true (even if it's uncomfortable).
            </p>
            <p>Your results are completely private. Only you will see them (unless you choose to share).</p>
            <p className="font-semibold text-primary">
              The more honest you are, the more accurate your results will be. And the clearer your path forward
              becomes.
            </p>
          </div>
        </Card>

        {/* Social Proof */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What others have said:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "This assessment saw through my excuses better than I could. The results were uncomfortably accurate.",
                author: "Sarah M.",
              },
              {
                quote: "I felt safe being completely real. The results were exactly what I needed to hear.",
                author: "Marcus T.",
              },
              {
                quote: "I sat with some questions for a few minutes before answering. The results were spot-on.",
                author: "Jennifer K.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-card">
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-muted-foreground font-medium">— {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to see the truth?</h2>
          <div className="space-y-4">
            <Button onClick={onStart} size="lg" className="text-xl px-12 py-8 h-auto font-bold">
              START THE ASSESSMENT
            </Button>
            <p className="text-sm text-muted-foreground">2 minutes. Completely private. Brutally honest.</p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Private & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No time limit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free - no credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Instant results</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">10 questions. No email required until the end.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background flex items-center justify-center p-6">
      <Card className="max-w-3xl w-full p-8 md:p-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">10 Questions. Total Honesty.</h1>
          <p className="text-xl text-muted-foreground">Here's how this works:</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Read each question carefully",
              desc: "Don't rush. Sit with it.",
            },
            {
              title: "Choose the answer that feels MOST true",
              desc: 'Not what you think you "should" say. What\'s actually true.',
            },
            // CHANGE: Fixed invalid escape sequences - removed backslashes before quotes
            {
              title: "Be honest even if it's uncomfortable",
              desc: "The discomfort is the signal you're getting close to the truth.",
            },
            {
              title: "There are no wrong answers",
              desc: "This is about YOU seeing clearly. Not being judged.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <p className="font-semibold mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-6 border-t">
          <p className="text-center font-semibold text-lg">Remember:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Your answers are completely private",
              "No one is grading you",
              "The goal is clarity, not perfection",
              "The more honest you are, the better your results",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">You can take as much time as you need.</p>
          <p className="font-semibold text-lg">This is for YOU.</p>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full md:w-auto px-12 py-6 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full"
          >
            START QUESTION 1 <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  )
}

function AssessmentScreen({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  showEncouragement,
  encouragementText,
  setShowEncouragement,
  moveToNext,
}: {
  question: Question
  currentQuestion: number
  totalQuestions: number
  onAnswer: (answer: string) => void
  showEncouragement: boolean
  encouragementText: string
  setShowEncouragement: (value: boolean) => void
  moveToNext: () => void
}) {
  const progress = Math.round(((currentQuestion + 1) / totalQuestions) * 100)

  if (showEncouragement) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full p-12 text-center space-y-6 bg-secondary/10 border-secondary">
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
            <Lightbulb className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-secondary">{encouragementText.split("\n")[0]}</h2>
          <p className="text-lg text-muted-foreground whitespace-pre-wrap">
            {encouragementText.split("\n").slice(1).join("\n")}
          </p>
          <Button
            onClick={() => {
              setShowEncouragement(false)
              moveToNext()
            }}
            size="lg"
            className="mt-6"
          >
            CONTINUE
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background p-6 py-12">
      <div className="container mx-auto max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-muted-foreground">{progress}% Complete</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            <span>Private</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>No time limit</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Total honesty = Best results</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 md:p-12 space-y-8 bg-card shadow-2xl">
          <div className="space-y-4">
            {question.header && <div className="text-sm text-muted-foreground text-center">{question.header}</div>}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-balance">{question.question}</h2>
            {question.subtext && <p className="text-center text-muted-foreground italic">{question.subtext}</p>}
          </div>

          <div className="space-y-3">
            {question.sections
              ? // Q4 with sections
                question.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="space-y-3">
                    <h3 className="font-bold text-sm text-muted-foreground mt-6">{section.header}</h3>
                    {section.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => onAnswer(option)}
                        className="w-full p-4 text-left border-2 rounded-lg hover:border-primary hover:bg-accent/5 transition-all"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ))
              : // Regular options
                question.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => onAnswer(option)}
                    className="w-full p-5 text-left bg-muted/50 hover:bg-primary/10 hover:border-primary/50 border-2 border-transparent rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-colors" />
                      <span className="text-base">{option}</span>
                    </div>
                  </button>
                ))}
          </div>

          {question.encouragement && (
            <div className="mt-6 p-4 bg-accent/5 border-l-4 border-accent rounded text-sm">
              {question.encouragement}
            </div>
          )}
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Take your time. Choose what feels MOST true.
        </div>
      </div>
    </div>
  )
}

function EmailCapture({
  email,
  setEmail,
  firstName,
  setFirstName,
  onSubmit,
  emailSending,
}: {
  email: string
  setEmail: (email: string) => void
  firstName: string
  setFirstName: (firstName: string) => void
  onSubmit: (e: React.FormEvent) => void
  emailSending: boolean
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full p-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold">Assessment Complete</h2>
          <p className="text-lg text-muted-foreground">
            Enter your name and email to see your results and discover if you're fear-based or constraint-based stuck.
          </p>

          <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent mt-6">
            <p className="text-sm font-medium text-accent">
              Time-sensitive: Your personalized breakthrough plan is ready. Don't let another day pass in the same loop.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-lg">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              required
              className="text-lg p-6"
              disabled={emailSending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="text-lg p-6"
              disabled={emailSending}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white rounded-full"
            disabled={emailSending}
          >
            {emailSending ? "Sending..." : "Show Me My Results"}
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </form>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Your information is safe. I respect your inbox.</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ResultsRouter({
  answers,
  email,
  firstName,
}: {
  answers: Record<number, string>
  email: string
  firstName: string
}) {
  const resultType = calculateResultType(answers)

  switch (resultType) {
    case "fear-based":
      return <FearBasedResultsPage answers={answers} email={email} firstName={firstName} />
    case "constraint-based":
      return <ConstraintBasedResultsPage answers={answers} email={email} firstName={firstName} />
    case "mixed":
      return <MixedStuckResultsPage answers={answers} email={email} firstName={firstName} />
    case "unclear":
      return <UnclearResultsPage answers={answers} email={email} firstName={firstName} />
    default:
      // Fallback to fear-based if somehow 'unclear' or other unexpected type
      return <FearBasedResultsPage answers={answers} email={email} firstName={firstName} />
  }
}

function FearBasedResultsPage({
  answers,
  email,
  firstName,
}: {
  answers: Record<number, string>
  email: string
  firstName: string
}) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  const q3Answer = answers[3] || "your stated excuse"
  const timeStuck = answers[2] || "months"

  return (
    <div className="min-h-screen bg-background">
      {/* New Year Urgency Banner */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-b-2 border-accent/30">
        <div className="container mx-auto px-6 py-4 max-w-4xl text-center">
          <p className="text-lg font-bold">The calendar is about to reset.</p>
          <p className="text-sm text-muted-foreground">
            Will you start fresh, or carry the same patterns into another year?
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        {/* Results Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Results: This is <span className="text-accent">FEAR</span>, Not Facts.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Based on your answers, here's the truth you've been avoiding: What you think is a "real obstacle" is
            actually fear disguised as logic.
          </p>
        </div>

        {/* Section 1: Your Diagnosis */}
        <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-accent/10 to-background border-2 border-accent/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Primary Excuse Pattern:</h2>
          <div className="p-6 bg-background/80 rounded-lg border-l-4 border-accent mb-6">
            <p className="text-xl md:text-2xl font-semibold italic text-accent">"{q3Answer}"</p>
          </div>

          <h3 className="text-xl font-bold mb-4">Here's what's ACTUALLY happening:</h3>
          <div className="space-y-4">
            <p className="text-lg">
              You're using <span className="font-semibold text-accent">{q3Answer}</span> as protection.
            </p>

            <div className="p-6 bg-muted/50 rounded-lg">
              <p className="font-semibold mb-3">Protection from:</p>
              <ul className="space-y-2 ml-6">
                <li className="list-disc">Being seen publicly</li>
                <li className="list-disc">Being judged or criticized</li>
                <li className="list-disc">Being "found out" as not good enough</li>
                <li className="list-disc">Failing where everyone can see</li>
              </ul>
            </div>

            <p className="text-lg">
              It <span className="font-semibold">FEELS</span> like a real constraint. Like a logical, responsible reason
              to wait.
            </p>

            <div className="p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-lg font-semibold mb-2">But here's the test:</p>
              <p className="text-lg">
                If <span className="italic">{q3Answer}</span> disappeared tomorrow... You'd find another reason to wait.
              </p>
              <p className="text-xl font-bold mt-4 text-accent">Because the obstacle isn't the issue. The fear is.</p>
            </div>
          </div>
        </Card>

        {/* Section 2: The Pattern */}
        <Card className="p-8 md:p-10 mb-8 bg-card border-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Here's the loop that's been running your life:</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, text: "You decide you're going to start" },
              { step: 2, text: `Fear shows up disguised as "${q3Answer.replace(/"/g, "")}"` },
              { step: 3, text: `You tell yourself "I'll start once I solve this"` },
              { step: 4, text: `You work on "solving" the obstacle (but it never feels fully solved)` },
              { step: 5, text: "Repeat" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-lg font-bold">
                  {item.step}
                </div>
                <p className="mt-2 text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-accent/20 to-destructive/20 rounded-lg border-l-4 border-accent">
            <p className="text-xl font-bold mb-2">
              You've been in this loop for: <span className="text-accent">{timeStuck}</span>
            </p>
            <p className="text-lg text-muted-foreground">And you'll stay in it until you see it clearly.</p>
          </div>
        </Card>

        {/* Section 3: What This Is Costing You */}
        <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-destructive/5 to-background border-2 border-destructive/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What This Is Costing You</h2>
          <p className="text-xl mb-6">Every month you stay stuck, you're losing:</p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Opportunities",
                desc: "Promotions, clients, partnerships, visibility you didn't go for",
              },
              {
                title: "Momentum",
                desc: 'Other people are building while you\'re "preparing"',
              },
              {
                title: "Mental energy",
                desc: "The same internal debate on repeat is exhausting",
              },
              {
                title: "Time",
                desc: "Another 30 days your future self will never get back",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-background rounded-lg border-l-4 border-destructive">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-6 h-6 text-destructive" />
                  <p className="text-lg font-bold">{item.title}</p>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-background rounded-lg mb-8">
            <p className="text-xl font-semibold mb-6">If nothing changes:</p>
            <div className="space-y-4">
              {[
                { time: "3 months from now", desc: "Still stuck. More frustrated. Deeper shame." },
                {
                  time: "6 months from now",
                  desc: "Still at the same crossroads. Watching others do what you want to do.",
                },
                {
                  time: "1 year from now",
                  desc: "Looking back at today wishing you'd moved.",
                },
                {
                  time: "5 years from now",
                  desc: 'Still wondering "what if?"',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-destructive shrink-0 text-lg">{item.time}:</span>
                  <span className="text-muted-foreground text-lg">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg border-2 border-secondary">
            <p className="text-xl font-semibold mb-3">Or... 30 days from now:</p>
            <p className="text-2xl font-bold">You've actually DONE the thing.</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li>• Posted the content.</li>
              <li>• Launched the business.</li>
              <li>• Had the conversation.</li>
              <li>• Submitted the application.</li>
              <li className="font-bold">• Moved.</li>
            </ul>
          </div>
        </Card>
        <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-secondary/10 to-background border-2 border-secondary">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Here's what changes everything:</h2>
          <div className="p-6 bg-background rounded-lg border-l-4 border-secondary mb-8">
            <p className="text-2xl font-bold">Once you SEE that it's fear (not facts), you can choose differently.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-lg mb-4 flex items-center gap-2">
                <X className="w-6 h-6 text-destructive" />
                You don't need to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Wait until you feel ready (that day never comes)</li>
                <li>• Wait until you feel confident (confidence comes AFTER action)</li>
                <li>• Wait for perfect conditions (they don't exist)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                You just need to:
              </p>
              <ul className="space-y-3 font-semibold text-lg">
                <li>• Move anyway.</li>
                <li>• While scared.</li>
                <li>• Imperfectly.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/20 rounded-lg text-center">
            <p className="text-2xl font-bold">And that's exactly what we help you do.</p>
          </div>
        </Card>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">You're at a decision point right now.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1 - Muted */}
            <Card className="p-8 bg-muted/50 border-2 border-muted">
              <p className="text-sm uppercase tracking-wide font-bold text-muted-foreground mb-4">Option 1</p>
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Keep doing what you've been doing</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Close this page.</li>
                <li>• Tell yourself "I'll think about it."</li>
                <li>• Go back to the loop.</li>
                <li>• Stay stuck for another 3 months, 6 months, year.</li>
                <li>• Keep watching other people do what you want to do.</li>
              </ul>
            </Card>

            {/* Option 2 - Highlighted */}
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary shadow-xl">
              <p className="text-sm uppercase tracking-wide font-bold text-primary mb-4">Option 2</p>
              <h3 className="text-2xl font-bold mb-6">Break the pattern in the next 4 weeks</h3>

              <div className="mb-6">
                <p className="text-2xl font-bold mb-4">The 4-Week Unstuck Intensive</p>
                <div className="space-y-3 text-lg">
                  <p>
                    <span className="font-semibold">Week 1:</span> I expose your excuse pattern
                  </p>
                  <p>
                    <span className="font-semibold">Week 2:</span> We dismantle the fear
                  </p>
                  <p>
                    <span className="font-semibold">Week 3:</span> We build your movement plan
                  </p>
                  <p>
                    <span className="font-semibold">Week 4:</span> You DO the thing
                  </p>
                </div>
              </div>

              <div className="p-6 bg-background rounded-lg">
                <p className="font-semibold mb-3 text-lg">What you get:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span>4 weeks of intensive 1:1 coaching (4.5-5 hours live)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span>Daily call/text support (Mon-Fri for 4 weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span>Real-time excuse catching when you want to retreat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span>Custom roadmaps and deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span>The guarantee that you'll actually DO the thing by Week 4</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
        <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The 4-Week Breakdown</h2>

          <div className="space-y-4">
            {[
              {
                week: 1,
                title: "THE EXPOSURE",
                summary: "I expose your excuse pattern (you see it clearly for the first time)",
                details: {
                  what: [
                    "90-minute deep-dive session",
                    "I expose your excuse pattern (the story you keep telling yourself)",
                    "We identify the REAL fear underneath the 'logical reason'",
                    "You see clearly: 'Oh. I've been lying to myself.'",
                  ],
                  deliverable: {
                    title: "Your Excuse Pattern Profile",
                    items: [
                      "Your primary excuse pattern",
                      "The fear underneath it",
                      "How it's been running your decisions",
                      "What to watch for going forward",
                    ],
                  },
                },
              },
              {
                week: 2,
                title: "THE DISMANTLING",
                summary: "We dismantle the fear (you learn to distinguish fear from facts)",
                details: {
                  what: [
                    "60-minute session",
                    "We dismantle the false stories one by one",
                    "I show you how to distinguish REAL obstacles from fear-based 'not ready yet'",
                    "You reframe the narratives keeping you stuck",
                  ],
                  deliverable: {
                    title: "Your Fear vs. Facts Breakdown",
                    items: [
                      "What's actually fear (and how to move anyway)",
                      "What's a real consideration (and how to address it)",
                      "New reframes for when the excuse shows up",
                    ],
                  },
                  between: [
                    "Daily call/text support (Mon-Fri)",
                    "Real-time excuse catching",
                    "Accountability when you want to retreat",
                  ],
                },
              },
              {
                week: 3,
                title: "THE MOVEMENT PLAN",
                summary: "We build your movement plan (your smallest viable first action)",
                details: {
                  what: [
                    "60-minute session",
                    "We design your smallest viable first action",
                    "Build your 'What to do when fear shows up' protocol",
                    "Create your First 30 Days Action Plan",
                  ],
                  deliverable: {
                    title: "Your Action Plan",
                    items: [
                      "Specific actions (what you're doing)",
                      "Timeline (when you're doing it)",
                      "Fear protocol (what to do when you want to quit)",
                      "Excuse-catching checklist",
                    ],
                  },
                  between: [
                    "Daily support continues",
                    "Accountability check-ins",
                    "Real-time coaching when resistance shows up",
                  ],
                },
              },
              {
                week: 4,
                title: "THE EXECUTION",
                summary: "You DO the thing (post the content, launch the business, have the conversation)",
                details: {
                  what: [
                    "60-minute prep session (beginning of week)",
                    "YOU ACTUALLY DO THE THING THIS WEEK:",
                    "  • Post the content",
                    "  • Launch the business",
                    "  • Have the conversation",
                    "  • Submit the application",
                    "  • Step into the role",
                    "30-minute debrief (end of week)",
                    "Troubleshoot what happened, refine next steps",
                  ],
                  deliverable: {
                    title: "Proof You Did It + Your Next 60-Day Roadmap",
                    items: [],
                  },
                  between: [
                    "Daily support when you want to quit",
                    "Real-time coaching through the fear",
                    "Celebration when you do it",
                  ],
                },
              },
            ].map((week) => (
              <div key={week.week} className="border-2 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  className="w-full p-6 bg-card hover:bg-muted/30 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-primary">WEEK {week.week}</span>
                        <span className="text-lg font-bold">{week.title}</span>
                      </div>
                      <p className="text-muted-foreground">{week.summary}</p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${expandedWeek === week.week ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {expandedWeek === week.week && (
                  <div className="p-6 bg-muted/20 border-t-2">
                    <div className="space-y-6">
                      <div>
                        <p className="font-semibold text-lg mb-3">What happens:</p>
                        <ul className="space-y-2">
                          {week.details.what.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              {!item.startsWith("  ") && <span className="text-primary mt-1">•</span>}
                              <span className={item.startsWith("  ") ? "ml-6" : ""}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 bg-background rounded-lg">
                        <p className="font-semibold text-lg mb-3">Deliverable: {week.details.deliverable.title}</p>
                        {week.details.deliverable.items.length > 0 && (
                          <ul className="space-y-2">
                            {week.details.deliverable.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {week.details.between && (
                        <div>
                          <p className="font-semibold text-lg mb-3">Between sessions:</p>
                          <ul className="space-y-2">
                            {week.details.between.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8 md:p-10 mb-8 bg-card border-2">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For You If */}
            <div>
              <h3 className="text-2xl font-bold mb-6">This intensive is for you if:</h3>
              <div className="space-y-3">
                {[
                  "You're DONE with your own excuses",
                  "You're ready to be called on your BS",
                  "You're willing to move while scared",
                  "You're ready to actually DO the thing (not just think about it)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NOT For You If */}
            <div>
              <h3 className="text-2xl font-bold mb-6">This is NOT for you if:</h3>
              <div className="space-y-3">
                {[
                  "You want validation for your excuses",
                  "You're not willing to be uncomfortable",
                  "You want someone to tell you what to do with your life",
                  "You can't commit to showing up fully for 4 weeks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <X className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                    <p className="font-medium text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-8 md:p-10 mb-8 bg-gradient-to-br from-primary/5 to-background border-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Ready to break through? Here's what happens when you apply:
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                step: 1,
                text: "Click the button below to book your free 15-minute Clarity Call",
              },
              {
                step: 2,
                text: "We'll talk through your specific situation and confirm this is right for you",
              },
              {
                step: 3,
                text: "If it's a fit, you'll receive payment details and immediate onboarding",
              },
              {
                step: 4,
                text: "We start Week 1 (as soon as this week if you're ready)",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-5 bg-background rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-lg font-bold">
                  {item.step}
                </div>
                <p className="mt-2 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-accent">$2,997</span>
            </div>
            <p className="text-xl text-muted-foreground">4 weeks to break free from what's been keeping you stuck</p>
          </div>

          {/* Primary CTA */}
          <div className="space-y-4 mb-8">
            <Button
              onClick={() =>
                window.open(
                  "https://calendly.com/idealclaritysolutions/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfqyAlAkP6ZG5gpzpFLwKP3eDvA3MWaRZx_0UP9105gVdlU8KBjmPNAqC7P8_aem_CBjoNu5mIUQN-Q7kij4JYQ&month=2025-12",
                  "_blank",
                )
              }
              size="lg"
              className="w-full py-8 text-2xl md:text-3xl font-bold bg-accent hover:bg-accent/90 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              BOOK YOUR FREE CLARITY CALL
              <ArrowRight className="w-8 h-8 ml-3" />
            </Button>
            <p className="text-center text-lg font-medium">15 minutes. No pressure. Just clarity.</p>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-4 text-sm text-muted-foreground">or</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <Button
              onClick={() => (window.location.href = "https://buy.stripe.com/bJecN6bYCbvj8aP8DFdAk09")}
              size="lg"
              variant="outline"
              className="w-full py-6 text-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 rounded-full"
            >
              Pay in Full - $2,997
              <CreditCard className="w-6 h-6 ml-2" />
            </Button>

            <Button
              onClick={() => (window.location.href = "https://buy.stripe.com/9B6eVe7Im56V9eT3jldAk0a")}
              size="lg"
              variant="outline"
              className="w-full py-6 text-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 rounded-full"
            >
              Payment Plan - $1,500 × 2
              <CreditCard className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8 text-center">
            <a href="#" className="text-muted-foreground hover:text-foreground underline text-sm transition-colors">
              Not ready to talk? Download your free Excuse Pattern Guide
            </a>
          </div>
        </Card>
        <Card className="p-8 md:p-10 mb-12 bg-gradient-to-br from-destructive/5 to-background border-2 border-destructive/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Here's why you need to decide soon:</h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="p-5 bg-background rounded-lg">
              <p className="font-bold text-lg mb-2">1. Only 5 spots available per month</p>
              <p className="text-muted-foreground">
                I can only support 5 people at a time with this level of intensity.
              </p>
            </div>

            <div className="p-5 bg-background rounded-lg">
              <p className="font-bold text-lg mb-2">2. Every day you wait costs you</p>
              <p className="text-muted-foreground">
                If you've been stuck for {timeStuck}, how much longer are you willing to stay there?
              </p>
            </div>

            <div className="p-5 bg-background rounded-lg">
              <p className="font-bold text-lg mb-2">3. The version of you 4 weeks from now is either:</p>
              <ul className="space-y-2 mt-3 ml-4">
                <li className="text-muted-foreground">• Still stuck (if you choose Option 1)</li>
                <li className="font-semibold text-secondary">• Moving forward (if you choose Option 2)</li>
              </ul>
            </div>

            <div className="text-center mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent">
              <p className="text-2xl font-bold">Which version do you want to be?</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ConstraintBasedResultsPage({
  answers,
  email,
  firstName,
}: {
  answers: Record<string | number, string>
  email: string
  firstName: string
}) {
  const q3Answer = answers[3] || "your constraint"
  const q4Answer = answers[4] || "your obstacle"
  const timeStuck = answers[2] || "months"

  const handleGetFramework = () => {
    console.log("[v0] Requesting framework via email for:", firstName)
    window.location.href = `mailto:idealclaritysolutions@gmail.com?subject=Request: Constraint Solution Framework&body=Hi! I just completed the assessment and would love to receive the Constraint Solution Framework.%0A%0AName: ${firstName}%0AEmail: ${email}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-b">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Results: You Have a Real Constraint.
          </h1>
          <p className="text-2xl text-foreground/90 text-balance">
            But you've been using it as a reason to do nothing.
          </p>
          <p className="text-lg text-muted-foreground mt-6">
            Based on your answers, here's the truth: You have a GENUINE obstacle that needs solving. But you've been
            "stuck waiting" instead of building momentum NOW.
          </p>
        </div>
      </div>

      {/* Section 1: Your Diagnosis */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Primary Constraint:</h2>
          <p className="text-xl text-foreground mb-6 font-medium">{q4Answer}</p>

          <h3 className="text-xl font-bold text-foreground mb-4">Here's what's happening:</h3>
          <div className="space-y-4 text-foreground/90">
            <p>Yes, {q3Answer} is REAL. It's not just fear. It's not an excuse. It's a legitimate obstacle.</p>
            <p className="font-bold">
              But: You've been using it as a reason to do NOTHING while you wait for it to be solved.
            </p>
            <p>Instead of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Building momentum NOW</li>
              <li>Solving the constraint WHILE moving forward</li>
              <li>Setting a clear timeline and working toward it</li>
            </ul>
            <p>You've been:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Stuck waiting" for conditions to be perfect</li>
              <li>Telling yourself "someday when this is solved"</li>
              <li>Losing time you'll never get back</li>
            </ul>
          </div>
        </div>

        {/* Section 2: The Real Cost */}
        <h2 className="text-3xl font-bold text-foreground mb-6">Here's what "stuck waiting" is costing you:</h2>
        <p className="text-xl text-muted-foreground mb-8">If your constraint takes 6 months to solve...</p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-muted/50 border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground/60 mb-4">OPTION A (What you've been doing):</h3>
            <div className="space-y-3 text-foreground/70">
              <p>
                <strong>Month 1-6:</strong> Wait. Do nothing. "I can't start until this is solved."
              </p>
              <p>
                <strong>Month 7:</strong> Try to start from scratch
              </p>
              <p className="font-bold pt-4 border-t">Result: 6 months lost. Zero momentum. Starting from zero.</p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">OPTION B (What you SHOULD be doing):</h3>
            <div className="space-y-3 text-foreground">
              <p>
                <strong>Month 1-6:</strong> Actively solve the constraint AND build momentum
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Network</li>
                <li>Create content</li>
                <li>Develop skills</li>
                <li>Build systems</li>
                <li>Position yourself</li>
                <li>Prove the concept</li>
              </ul>
              <p>
                <strong>Month 7:</strong> Launch ready. Hit the ground running.
              </p>
              <p className="font-bold pt-4 border-t text-green-700">
                Result: 6 months of progress. Momentum built. Ready to scale immediately.
              </p>
            </div>
          </div>
        </div>

        <p className="text-2xl font-bold text-center mb-16 text-foreground">
          Same 6 months. Completely different outcome.
        </p>

        {/* Section 3: The Pattern */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Here's the loop:</h2>
          <div className="space-y-4 text-lg text-foreground/90">
            {[
              'You identify the constraint ("I can\'t do X until Y is solved")',
              "You wait for the constraint to solve itself",
              "Time passes. The constraint is still there.",
              "You feel stuck and frustrated",
              "Repeat",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-lg text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-foreground mt-8">You've been in this loop for: {timeStuck}</p>
          <p className="text-lg text-muted-foreground mt-2">And you'll stay in it until you change your approach.</p>
        </div>

        {/* Section 4: The Good News */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Here's what changes everything:</h2>
          <p className="text-2xl font-bold text-foreground mb-6">
            You can solve the constraint AND build momentum at the same time.
          </p>
          <p className="text-lg text-foreground/90 mb-6">You don't have to wait. You just need a PLAN.</p>
          <p className="text-lg text-foreground/90 mb-4">A plan that:</p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Gives you a realistic timeline to solve the constraint</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Shows you what you CAN do NOW (while solving it)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Keeps you moving forward (instead of stuck waiting)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Sets clear milestones so you know you're progressing</span>
            </li>
          </ul>
          <p className="text-xl font-bold text-foreground mt-6">And I'm going to give you that plan. For free.</p>
        </div>

        {/* Section 5: Free Resource - Prominent */}
        <div className="bg-accent/20 border-4 border-accent rounded-lg p-10 mb-16 shadow-lg">
          <h2 className="text-4xl font-bold text-foreground mb-4">Download: The Constraint Solution Framework</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            I created a FREE step-by-step framework to help you solve your constraint while building momentum. Most
            people sit stuck waiting. You can do both at the same time.
          </p>
          {/* CHANGE: Updated button to email request instead of PDF download */}
          <button
            onClick={handleGetFramework}
            className="inline-block w-full md:w-auto px-12 py-6 bg-accent text-accent-foreground rounded-lg text-xl font-bold hover:bg-accent/90 transition-colors text-center shadow-lg"
          >
            📧 REQUEST THE FREE FRAMEWORK
          </button>
        </div>

        {/* Section 6: Real Examples */}
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Here's how this works for people with REAL constraints:
        </h2>
        <div className="space-y-8 mb-16">
          {/* Example 1 */}
          <div className="bg-card border-2 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">EXAMPLE 1: "I'm in a non-compete for 6 months"</h3>
            <p className="text-lg font-semibold text-foreground/90 mb-4">
              The Constraint Solution Framework helped them:
            </p>
            <div className="space-y-3 text-foreground/80">
              <p>
                <strong>Week 1:</strong> Confirm non-compete is real, map 6-month timeline
              </p>
              <p>
                <strong>Weeks 2-26:</strong> While waiting:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Build network (50+ new connections)</li>
                <li>Create content strategy (write 20 LinkedIn posts, schedule for launch day)</li>
                <li>Develop offers (3 service packages ready)</li>
                <li>Set up systems (CRM, scheduling, payment processing)</li>
                <li>Prepare for Day 1 launch</li>
              </ul>
              <p className="font-bold text-green-700 pt-4">Result after 6 months:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clear countdown to Day 1</li>
                <li>Actively building (not waiting)</li>
                <li>Launch-ready with 5 clients booked on Day 1 when non-compete expired</li>
              </ul>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-card border-2 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              EXAMPLE 2: "I need to save $15K before I can quit my job"
            </h3>
            <p className="text-lg font-semibold text-foreground/90 mb-4">
              The Constraint Solution Framework helped them:
            </p>
            <div className="space-y-3 text-foreground/80">
              <p>
                <strong>Week 1:</strong> Calculate savings timeline ($1,500/month = 10 months), map the plan
              </p>
              <p>
                <strong>Weeks 2-40:</strong> While saving:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Start side business evenings/weekends</li>
                <li>Get first 3 clients (proof of concept)</li>
                <li>Build to $2K/month revenue</li>
                <li>Validate the model works</li>
              </ul>
              <p className="font-bold text-green-700 pt-4">Result after 10 months:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>$15K saved (goal met)</li>
                <li>Side business at $2K/month ($24K/year)</li>
                <li>Quit with confidence AND income already flowing</li>
              </ul>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-card border-2 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              EXAMPLE 3: "I have a genuine skill gap I need to close"
            </h3>
            <p className="text-lg font-semibold text-foreground/90 mb-4">
              The Constraint Solution Framework helped them:
            </p>
            <div className="space-y-3 text-foreground/80">
              <p>
                <strong>Week 1:</strong> Identify which skills are ACTUALLY required vs. nice-to-have
              </p>
              <p>
                <strong>Weeks 2-12:</strong> While learning:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fast-track skill development (focused 90-day plan)</li>
                <li>Start positioning NOW (LinkedIn content about learning journey)</li>
                <li>Build portfolio (3 practice projects)</li>
                <li>Network with people in target role</li>
              </ul>
              <p className="font-bold text-green-700 pt-4">Result after 90 days:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Skill gap closed (certification earned)</li>
                <li>Already positioned as "emerging expert"</li>
                <li>Portfolio ready</li>
                <li>Landed job offer within 2 weeks of certification</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-2xl font-bold text-center mb-16 text-foreground">
          See the difference? You're not "stuck waiting." You're ACTIVELY SOLVING + BUILDING.
        </p>

        {/* Section 7: Your Two Options */}
        <h2 className="text-3xl font-bold text-foreground mb-8">Your Two Options</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-muted/50 border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground/70 mb-4">OPTION 1: Do it yourself (Free)</h3>
            <p className="text-lg text-foreground/90 mb-6">Download the Constraint Solution Framework</p>
            <ul className="space-y-2 mb-6 text-foreground/80">
              <li>• Self-paced roadmap</li>
              <li>• Templates and examples</li>
              <li>• Everything you need to solve your constraint AND build momentum</li>
            </ul>
            {/* CHANGE: Updated button to email request instead of PDF download */}
            <button
              onClick={handleGetFramework}
              className="inline-block w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-bold hover:bg-accent/90 transition-colors text-center mb-6 mt-4"
            >
              📧 REQUEST FREE FRAMEWORK
            </button>
            <p className="text-sm text-foreground/70">This is perfect if:</p>
            <ul className="space-y-1 text-sm text-foreground/70">
              <li>✓ You're self-motivated and can execute on your own</li>
              <li>✓ You have a clear constraint with a defined timeline</li>
              <li>✓ You just need the roadmap (not ongoing support)</li>
            </ul>
          </div>

          <div className="bg-card border-2 rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">OPTION 2: Do it with support</h3>
            <p className="text-lg text-foreground/90 mb-6">Book a free 15-minute Clarity Call</p>
            <p className="text-foreground/90 mb-4">We'll:</p>
            <ul className="space-y-2 mb-6 text-foreground/80">
              <li>• Diagnose your specific constraint</li>
              <li>• Map your timeline</li>
              <li>• Identify what you can do NOW</li>
              <li>• Discuss if the 4-Week Intensive is right for you</li>
            </ul>
            <p className="font-bold text-foreground mb-4">The 4-Week Unstuck Intensive (Constraint Path):</p>
            <ul className="space-y-3 mb-6 text-sm text-foreground/80">
              <li>
                <strong>Week 1:</strong> Map the plan to solve your constraint + what you can do NOW
              </li>
              <li>
                <strong>Week 2:</strong> Build your week-by-week execution roadmap
              </li>
              <li>
                <strong>Week 3:</strong> Execute Phase 1 (build momentum while solving)
              </li>
              <li>
                <strong>Week 4:</strong> Lock in long-term plan and accountability
              </li>
            </ul>
            <a
              href="https://calendar.app.google/5mZUMK6Nb9vfnb6PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors text-center"
            >
              BOOK YOUR FREE CLARITY CALL
            </a>
            <p className="text-sm text-center text-muted-foreground mt-2">15 minutes. No pressure. Just clarity.</p>
          </div>
        </div>

        {/* Section 8: The Decision */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Either way, don't stay stuck waiting.</h2>
          <div className="space-y-4 text-lg text-foreground/90">
            <p>Your constraint is real. But it doesn't have to keep you frozen.</p>
            <p className="font-bold">Pick your path:</p>
            <ul className="space-y-2 pl-6">
              <li>• Path 1: Download the free framework and do it yourself</li>
              <li>• Path 2: Book a clarity call and see if support makes sense</li>
            </ul>
            <p className="font-bold">But whatever you do, START BUILDING NOW.</p>
            <p>Don't waste the next {timeStuck} doing nothing.</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          {/* CHANGE: Updated button to email request instead of PDF download */}
          <button
            onClick={handleGetFramework}
            className="inline-block w-full md:w-auto px-12 py-6 bg-accent text-accent-foreground rounded-lg text-2xl font-bold hover:bg-accent/90 transition-colors shadow-lg"
          >
            📧 REQUEST THE FREE FRAMEWORK
          </button>
          <div>
            <a
              href="https://calendar.app.google/5mZUMK6Nb9vfnb6PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg text-primary hover:text-primary/80 underline"
            >
              Want support? Book your free 15-minute Clarity Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function MixedStuckResultsPage({
  answers,
  email,
  firstName,
}: {
  answers: Record<number, string>
  email: string
  firstName: string
}) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

  const q3Answer = answers[3] || "your stated reason"
  const q4Answer = answers[4] || "your obstacle"
  const timeStuck = answers[2] || "months"
  const constraint = q4Answer

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-blue-50 border-b">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Results: You Have a Constraint AND Fear.
          </h1>
          <p className="text-2xl text-foreground/90 text-balance">Let's address both.</p>
          <p className="text-lg text-muted-foreground mt-6">
            Based on your answers, here's the truth: You have a real constraint. But fear is ALSO holding you back.
          </p>
        </div>
      </div>

      {/* Section 1: Your Diagnosis */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Here's what's happening:</h2>
          <div className="space-y-4 text-foreground/90">
            <p className="text-lg">
              You have a <strong>REAL constraint:</strong> {constraint}
            </p>
            <p>This is legitimate. It's not just fear. It's not an excuse.</p>
            <p className="font-bold">
              But there's something else going on too: Even if your constraint was solved tomorrow, you'd still
              hesitate. Because fear is ALSO present.
            </p>
            <p className="font-bold text-sm text-muted-foreground">
              Based on your answers to questions 6, 7, and 9, you showed signs of both practical constraints and
              fear-based hesitation.
            </p>
            <p className="italic bg-white p-4 rounded border-l-4 border-amber-400">
              Example: "You said if the constraint disappeared, you'd 'probably start, but might find another reason to
              wait.' That's the signal. The constraint is real, but fear is layered on top of it."
            </p>
          </div>
        </div>

        {/* Section 2: Why Fear Comes First */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Here's why we address fear BEFORE the constraint:</h2>
          <div className="space-y-6">
            <div className="bg-card border-l-4 border-red-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">Reason 1: Fear sabotages constraint-solving</h3>
              <p className="text-foreground/90">
                If fear is present, you'll self-sabotage your own progress. You'll "forget" to save money that month.
                You'll procrastinate on the certification. You'll find reasons why the timeline needs to extend. Why?
                Because part of you doesn't WANT to solve it (because then you'd have to face the fear).
              </p>
            </div>

            <div className="bg-card border-l-4 border-orange-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reason 2: Fear is invisible (you can't see it clearly on your own)
              </h3>
              <p className="text-foreground/90">
                Constraints are visible. You can measure them: $10K saved = 67% done, 4 months into non-compete = 67%
                done. Fear is invisible. You can't measure it. You convince yourself it's "solved" when it's not. You
                need help seeing fear clearly. You can solve constraints on your own.
              </p>
            </div>

            <div className="bg-card border-l-4 border-amber-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reason 3: Solving the constraint won't eliminate the fear
              </h3>
              <p className="text-foreground/90">
                Even when the constraint is solved: You'll still be scared of failing, terrified of judgment, doubting
                if you're good enough. The constraint ending doesn't magically create courage. But dismantling the fear
                DOES make solving the constraint easier.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The Solution */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Here's what we do:</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 1: Dismantle the fear (Weeks 1-2)</h3>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Expose the fear pattern</li>
                <li>Distinguish fear from facts</li>
                <li>Learn to move WHILE scared</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Step 2: Map the constraint solution (Weeks 3-4)
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Build the timeline to solve it</li>
                <li>Identify what you can do NOW</li>
                <li>Create momentum while solving</li>
              </ul>
            </div>

            <div className="bg-white rounded p-6 mt-6">
              <p className="font-bold text-lg text-foreground mb-3">By Week 4:</p>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Fear is dismantled (you can move while scared)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Constraint is mapped (you have a clear plan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You're in motion (not stuck anymore)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5: The 4-Week Intensive (Mixed Path) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">The 4-Week Unstuck Intensive (Mixed Path)</h2>

          <div className="space-y-4">
            {[
              {
                week: 1,
                title: "THE EXPOSURE",
                items: [
                  "Expose your excuse pattern (fear + constraint)",
                  "Identify the REAL fear underneath",
                  "Diagnose the constraint (is it real? is it solvable?)",
                ],
                deliverable: "Your Fear + Constraint Profile",
              },
              {
                week: 2,
                title: "THE DISMANTLING",
                items: [
                  "Dismantle the fear patterns",
                  "Distinguish fear from facts",
                  "Reframe the narratives keeping you stuck",
                ],
                deliverable: "Your Fear vs. Facts Breakdown",
              },
              {
                week: 3,
                title: "THE CONSTRAINT SOLUTION",
                items: [
                  "Map your timeline to solve the constraint",
                  "Build your momentum-while-waiting plan",
                  "Design your smallest viable first action",
                ],
                deliverable: "Your Constraint Solution Roadmap + Action Plan",
              },
              {
                week: 4,
                title: "THE EXECUTION",
                items: [
                  "Execute Phase 1 (build momentum NOW)",
                  "Lock in the long-term constraint-solving plan",
                  "Set up accountability structure",
                ],
                deliverable: "Proof of Progress + Your Next 90-Day Roadmap",
              },
            ].map((week) => (
              <div
                key={week.week}
                className="border-2 rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  className="w-full bg-card p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Week {week.week}: {week.title}
                    </h3>
                  </div>
                  <div className="text-2xl text-muted-foreground">{expandedWeek === week.week ? "−" : "+"}</div>
                </button>
                {expandedWeek === week.week && (
                  <div className="bg-muted/30 p-6 border-t">
                    <ul className="space-y-2 mb-4">
                      {week.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-bold text-foreground">
                      Deliverable: <span className="text-primary">{week.deliverable}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mt-8">
            <p className="text-lg font-bold text-foreground mb-4">What you get:</p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>4 weeks of intensive 1:1 coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Daily voice/text support (Mon-Fri)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Real-time fear + constraint coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Custom roadmaps for BOTH</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Momentum by Week 4 (not stuck anymore)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: Your Two Options */}
        <h2 className="text-3xl font-bold text-foreground mb-8">Your Two Options</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-muted/50 border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground/70 mb-4">
              Option 1: Keep pretending it's just the constraint
            </h3>
            <div className="space-y-3 text-foreground/70">
              <p>
                Solve the constraint over the next 6 months. Then discover: You're STILL scared. You STILL hesitate. You
                find a NEW reason to wait.
              </p>
              <p className="font-bold pt-4 border-t">Result: Wasted time. Still stuck.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Option 2: Address BOTH (fear + constraint) in the next 4 weeks
            </h3>
            <div className="space-y-3 text-foreground">
              <p>Book a free 15-minute Clarity Call. We'll:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Diagnose your specific fear + constraint pattern</li>
                <li>Map the solution for BOTH</li>
                <li>Discuss if the intensive is right for you</li>
              </ul>
              <p className="font-bold pt-4 border-t text-green-700">
                Result: Fear dismantled. Constraint mapped. Momentum by Week 4.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <a
            href="https://calendly.com/idealclaritysolutions/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfqyAlAkP6ZG5gpzpFLwKP3eDvA3MWaRZx_0UP9105gVdlU8KBjmPNAqC7P8_aem_CBjoNu5mIUQN-Q7kij4JYQ&month=2025-12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-lg text-2xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            BOOK YOUR FREE CLARITY CALL
          </a>
          <p className="text-lg text-muted-foreground mb-8">15 minutes. No pressure. Just clarity.</p>
          <p className="text-xl font-bold text-foreground">
            You don't have to stay stuck in uncertainty. Let's figure this out together.
          </p>
        </div>
      </div>
    </div>
  )
}

function UnclearResultsPage({
  answers,
  email,
  firstName,
}: {
  answers: Record<number, string>
  email: string
  firstName: string
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-b">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Results: You Need Clarity Before You Can Move.
          </h1>
          <p className="text-lg text-muted-foreground mt-6">
            Based on your answers, here's the truth: You're not sure what's stopping you. And that uncertainty is
            keeping you stuck.
          </p>
        </div>
      </div>

      {/* Section 1: Your Diagnosis */}
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Here's what's happening:</h2>
          <div className="space-y-4 text-foreground/90">
            <p>Your assessment results show inconsistent signals.</p>
            <p className="font-bold">This means:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You might have BOTH fear and constraint (but aren't sure which is primary)</li>
              <li>You might have hidden fear you haven't named yet</li>
              <li>You might genuinely not know what you want</li>
              <li>You might be stuck on something we haven't identified</li>
            </ul>
            <p className="font-bold text-lg pt-4">And that's okay. Clarity comes FIRST. Then action.</p>
          </div>
        </div>

        {/* Section 2: Why You're Stuck */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Most people in your situation are stuck for one of these reasons:
          </h2>
          <div className="space-y-6">
            <div className="bg-card border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reason 1: You have multiple fears layered on top of each other
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Fear of judgment + fear of failure + fear of success</li>
                <li>You can't untangle which one is PRIMARY</li>
                <li>So you freeze</li>
              </ul>
            </div>

            <div className="bg-card border-l-4 border-teal-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reason 2: You have a real constraint but you're also scared
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>The constraint feels real</li>
                <li>But you're also avoiding because of fear</li>
                <li>You can't tell where one ends and the other begins</li>
              </ul>
            </div>

            <div className="bg-card border-l-4 border-cyan-500 p-6 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reason 3: You don't actually know what you want yet
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>You're stuck because you're unclear on the GOAL</li>
                <li>Not because you're scared or constrained</li>
                <li>You need direction before you can move</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: What You Need */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            You don't need a program yet. You need a conversation.
          </h2>
          <p className="text-lg text-foreground/90 mb-4">A conversation where we:</p>
          <ul className="space-y-2 text-foreground/90">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>Untangle what's ACTUALLY stopping you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>Expose the hidden patterns you can't see on your own</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>Distinguish fear from constraint from lack of clarity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">•</span>
              <span>Map your next step (even if it's not the intensive)</span>
            </li>
          </ul>
          <p className="text-xl font-bold text-foreground mt-6">That's what the 15-minute Clarity Call is for.</p>
        </div>

        {/* Section 4: What Happens on the Call */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">In 15 minutes, we'll:</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                ✓
              </span>
              <span className="text-lg text-foreground/90 pt-1">
                Diagnose what's REALLY stopping you (fear, constraint, or clarity gap)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                ✓
              </span>
              <span className="text-lg text-foreground/90 pt-1">Expose the pattern you can't see on your own</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                ✓
              </span>
              <span className="text-lg text-foreground/90 pt-1">Map your ACTUAL next step (not a generic plan)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                ✓
              </span>
              <span className="text-lg text-foreground/90 pt-1">
                Decide if the intensive is right for you (or if you need something else first)
              </span>
            </li>
          </ul>
          <p className="text-center text-lg text-muted-foreground mt-8 italic">
            No pressure. No sales pitch. Just 15 minutes of clarity.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-teal-500/10 rounded-lg p-12">
          <a
            href="https://calendly.com/idealclaritysolutions/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfqyAlAkP6ZG5gpzpFLwKP3eDvA3MWaRZx_0UP9105gVdlU8KBjmPNAqC7P8_aem_CBjoNu5mIUQN-Q7kij4JYQ&month=2025-12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-lg text-2xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            BOOK YOUR FREE CLARITY CALL
          </a>
          <p className="text-lg text-muted-foreground mb-8">15 minutes. No pressure. Just clarity.</p>
          <p className="text-xl font-bold text-foreground">
            You don't have to stay stuck in uncertainty. Let's figure this out together.
          </p>
        </div>
      </div>
    </div>
  )
}

// Export FactsOrFearClient and default export
export { FactsOrFearClient }
export default FactsOrFearClient
