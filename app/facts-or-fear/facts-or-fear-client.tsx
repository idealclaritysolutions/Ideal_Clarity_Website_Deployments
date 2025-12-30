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
  Target,
  Zap,
  Lock,
  ArrowRight,
  AlertCircle,
} from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  encouragement?: {
    title: string
    message: string
  }
}

const questions: Question[] = [
  {
    id: 1,
    question: "What do you want to do but keep putting off?\n(Select the one that resonates MOST)",
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
    question: "How long have you been stuck on this?",
    options: ["1-3 months", "3-6 months", "6-12 months", "1-2 years", "2+ years", "I've lost track"],
  },
  {
    id: 3,
    question: "Which statement sounds MOST like you?",
    options: [
      '"I\'m not ready yet. I need more preparation first."',
      '"I don\'t have enough experience/credentials to be taken seriously."',
      '"What if people judge me or think I\'m not good enough?"',
      '"I don\'t have the time/money/resources right now."',
      '"I\'m waiting for the right time or more clarity."',
      '"I don\'t think I can actually do this."',
    ],
    encouragement: {
      title: "Pause for a moment.",
      message:
        "You're doing great. Remember: there are no wrong answers here. Choose what feels MOST true, even if it's hard to admit.",
    },
  },
  {
    id: 4,
    question: "When you think about actually DOING the thing, what stops you?",
    options: [
      'Fear of failure ("What if it doesn\'t work?")',
      'Fear of judgment ("What will people think of me?")',
      'Fear of success ("What if it DOES work and my life changes?")',
      'Fear of inadequacy ("I\'m not good enough for this")',
      'Fear of regret ("What if I choose wrong?")',
      "A real practical obstacle I genuinely can't solve yet",
    ],
  },
  {
    id: 5,
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
    question: "If I could GUARANTEE you wouldn't fail, would you start tomorrow?",
    options: [
      "Yes, immediately - I'd start right now",
      "Probably yes, but I'd still feel nervous",
      "Maybe, but I'd want to prepare a bit more first",
      "I don't know, I'd need to think about it",
      "No, there are still real obstacles I need to solve first",
    ],
    encouragement: {
      title: "Halfway there.",
      message:
        "You're being honest. That takes courage. Keep going. The clarity is on the other side of the discomfort.",
    },
  },
  {
    id: 7,
    question:
      'If your stated obstacle disappeared tomorrow, would you ACTUALLY move forward?\nFor example: If you suddenly had "enough experience" or "enough money" or "the perfect timing"',
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
    question: "Have your REASONS for not starting changed over time?",
    options: [
      "Yes, I keep finding NEW reasons to delay (the excuse evolves)",
      "No, it's been the SAME reason the whole time",
      "Sort of - the core fear feels the same but the excuse changes",
      "I'm not sure",
    ],
    encouragement: {
      title: "Almost there. Just 2 more questions.",
      message: "You're doing the hard work of being honest. The truth is just ahead.",
    },
  },
  {
    id: 9,
    question:
      "Take a deep breath. This is the most important question.\nIf you're being COMPLETELY honest with yourself - no pretending, no \"should\" - what's the REAL reason you haven't started?\n(Choose the answer that feels most true in your gut, even if you've never admitted it out loud)",
    options: [
      "I'm terrified of failing publicly and everyone seeing it",
      "I'm scared of being judged, criticized, or rejected by people I know",
      "Deep down, I don't actually believe I'm good enough to succeed at this",
      "I'm afraid of what happens if it WORKS (visibility, expectations, my life changing)",
      "I have a legitimate constraint I truly cannot solve right now (non-compete, money, time, legal, health, etc.)",
      "Honestly? I'm not actually sure. That's why I'm taking this assessment.",
    ],
  },
  {
    id: 10,
    question:
      "Last question: Be honest about your readiness.\nIf someone offered you the EXACT support you needed to overcome your obstacle, would you actually take it?\n(Not what you think you should say - what would you ACTUALLY do?)",
    options: [
      "Yes, absolutely - I'd start immediately without hesitation",
      "Yes, but I'd be very nervous and might second-guess myself",
      "Maybe - I'd need to know more details and think about it first",
      "Probably not - I don't think I'm truly ready yet",
      "No - I'd likely find another reason to wait or delay",
      "I'm honestly not sure - I want to, but I don't know if I'd follow through",
    ],
  },
]

export function FactsOrFearClient() {
  const [step, setStep] = useState<"landing" | "intro" | "assessment" | "email" | "results">("landing")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("") // Added firstName state
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [emailSending, setEmailSending] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer }
    setAnswers(newAnswers)

    // Show encouragement if this question has it
    if (questions[currentQuestion].encouragement) {
      setShowEncouragement(true)
      setTimeout(() => {
        setShowEncouragement(false)
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          setStep("email")
        }
      }, 3000)
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setStep("email")
      }
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && firstName) {
      // Added check for firstName
      setEmailSending(true)
      try {
        const result = await fetch("/api/assessment-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.JSON.stringify({
            email: email,
            firstName: firstName, // Added firstName to payload
            isFearBased: isFearBased(),
            answers: answers,
          }),
        })

        const data = await result.json()
        console.log("[v0] Email API response:", data)
        if (!data.success) {
          console.error("[v0] Failed to send email:", data.error)
        }
      } catch (error) {
        console.error("[v0] Error in email submission:", error)
      }
      setEmailSending(false)
      setStep("results")
    }
  }

  // Calculate if user is fear-based or constraint-based
  const isFearBased = () => {
    // Check Q6 and Q7 - key indicators of fear vs constraint
    const q6Answer = answers[6]
    const q7Answer = answers[7]
    const q4Answer = answers[4]

    // If they would start if guaranteed success, it's fear
    if (q6Answer?.includes("Yes, immediately") || q6Answer?.includes("Probably yes")) {
      return true
    }

    // If they'd find another reason, it's fear
    if (q7Answer?.includes("find another reason") || q7Answer?.includes("still hesitate")) {
      return true
    }

    // If Q4 answer is about fear (not practical obstacle)
    if (q4Answer && !q4Answer.includes("practical obstacle")) {
      return true
    }

    return false
  }

  if (step === "landing") {
    return <LandingPage onStart={() => setStep("intro")} />
  }

  if (step === "intro") {
    return <IntroScreen onStart={() => setStep("assessment")} />
  }

  if (step === "assessment") {
    if (showEncouragement && questions[currentQuestion].encouragement) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full p-12 text-center space-y-6 bg-secondary/10 border-secondary">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <Lightbulb className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-secondary">{questions[currentQuestion].encouragement!.title}</h2>
            <p className="text-lg text-muted-foreground">{questions[currentQuestion].encouragement!.message}</p>
          </Card>
        </div>
      )
    }

    return (
      <AssessmentScreen
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    )
  }

  if (step === "email") {
    return (
      <EmailCapture
        email={email}
        setEmail={setEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        onSubmit={handleEmailSubmit}
        emailSending={emailSending}
      />
    )
  }

  if (step === "results") {
    return <ResultsPage isFearBased={isFearBased()} answers={answers} email={email} />
  }

  return null
}

function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6 py-12 md:py-20 max-w-5xl">
        <div className="mb-8 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
          <p className="text-center text-accent font-semibold">
            The year is ending. Will you start the new one stuck in the same place?
          </p>
        </div>

        {/* Above the Fold */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Are Your Reasons <span className="text-primary">FACTS</span>... or <span className="text-accent">FEAR</span>
            ?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Take the 2-minute assessment and find out what's REALLY stopping you from living the life you truly want.
          </p>

          <p className="text-lg text-accent font-medium">
            Before the calendar resets. Before another year of "next year."
          </p>

          <div className="max-w-2xl mx-auto p-8 bg-card border-2 border-primary/20 rounded-2xl">
            <p className="text-lg mb-4 text-foreground">
              You've been telling yourself you're <span className="font-semibold">"not ready yet."</span>
            </p>
            <p className="text-lg mb-4 text-foreground">That you need more time. More experience. More clarity.</p>
            <p className="text-lg mb-4 text-foreground">But what if those aren't real obstacles?</p>
            <p className="text-lg font-semibold text-primary">What if they're just fear... dressed up as logic?</p>
            <p className="text-lg mt-4 text-foreground">This assessment will show you the truth.</p>
          </div>
        </div>

        {/* Visual Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          <Card className="p-8 bg-muted/50 border-2 border-muted space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6">What You Tell Yourself</h3>
            <div className="space-y-3">
              {['"I need more experience first"', '"I\'m not ready yet"', '"What if people judge me?"'].map(
                (thought, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-background rounded-lg">
                    <Brain className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm italic">{thought}</span>
                  </div>
                ),
              )}
            </div>
          </Card>

          <Card className="p-8 bg-accent/10 border-2 border-accent space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6 text-accent">What's Actually True</h3>
            <div className="space-y-3">
              {['"I\'m scared of failing"', '"I\'m terrified of being seen"', "\"I'm afraid I'm not good enough\""].map(
                (truth, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-background rounded-lg border-l-4 border-accent">
                    <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{truth}</span>
                  </div>
                ),
              )}
            </div>
          </Card>
        </div>

        {/* The Problem */}
        <div className="max-w-3xl mx-auto mb-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">You know exactly what you want to do</h2>
          <div className="grid gap-3">
            {[
              "Start posting content on LinkedIn or Instagram",
              "Launch the business or side project",
              "Step into that leadership role",
              "Have the difficult conversation",
              "Put yourself out there",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-center text-muted-foreground">You've known for months. Maybe years.</p>
          <p className="text-xl text-center font-semibold text-accent">But you keep stopping yourself.</p>
        </div>

        {/* Excuses */}
        <Card className="max-w-3xl mx-auto mb-20 p-8 md:p-12 bg-gradient-to-br from-muted/30 to-background border-2">
          <h3 className="text-2xl font-bold mb-8 text-center">You tell yourself:</h3>
          <div className="space-y-4">
            {[
              '"I\'m not ready yet. I need more preparation."',
              '"I don\'t have enough experience or credentials."',
              '"What if people judge me or think I\'m not good enough?"',
              '"I need to wait for the right time."',
              '"I don\'t think I can actually do this."',
            ].map((excuse, i) => (
              <div key={i} className="p-4 bg-background rounded-lg border-l-4 border-primary/50">
                <p className="italic text-muted-foreground">{excuse}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg">
              And these feel <span className="font-bold">REAL</span>. They sound logical. Responsible. Like legitimate
              reasons to wait.
            </p>
          </div>
        </Card>

        {/* The Question */}
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">But here's the question you've been avoiding:</h2>
          <div className="p-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl border-2 border-primary">
            <p className="text-2xl md:text-3xl font-bold text-balance">
              Are these <span className="text-primary">FACTS</span> that need solving?
              <br />
              Or <span className="text-accent">FEAR</span> disguised as logic?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-primary/10 border-primary">
              <h3 className="text-xl font-bold mb-3">If they're FACTS:</h3>
              <p className="text-muted-foreground">
                You're right to wait. There's a real constraint you need to solve first.
              </p>
            </Card>
            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-xl font-bold mb-3 text-accent">If they're FEAR:</h3>
              <p className="text-foreground">
                You're giving your life away to an excuse. And you'll stay stuck until you see it clearly.
              </p>
            </Card>
          </div>
        </div>

        {/* Two Types */}
        <div className="max-w-4xl mx-auto mb-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">The Two Types of Stuck</h2>
          <p className="text-xl text-center text-muted-foreground">Most people are stuck for one of two reasons:</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-accent/5 border-2 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">FEAR-BASED STUCK</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">70% of people</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Your obstacle SOUNDS like a fact:</p>
                  <p className="text-muted-foreground italic">"I need more experience." "I'm not ready yet."</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">But it's actually FEAR:</p>
                  <p className="text-foreground">
                    Fear of failing publicly. Fear of being judged. Fear of being "found out."
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-accent">The pattern:</p>
                  <p className="text-sm">
                    Even if your stated obstacle disappeared tomorrow, you'd find another reason to wait. Because the
                    obstacle isn't the issue. The fear is.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary/5 border-2 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold">CONSTRAINT-BASED STUCK</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">30% of people</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">You have a REAL obstacle:</p>
                  <p className="text-muted-foreground italic">"I'm in a non-compete." "I need to save $15K first."</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">And it IS real. But:</p>
                  <p className="text-foreground">You've been using it as a reason to do NOTHING while you wait.</p>
                </div>
                <div className="p-4 bg-background rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary">The pattern:</p>
                  <p className="text-sm">
                    Instead of solving the constraint AND building momentum, you're "stuck waiting" for conditions to be
                    perfect.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border">
            <p className="text-2xl font-bold">This assessment will tell you which type YOU are.</p>
          </div>
        </div>

        {/* What You'll Discover */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Discover in 2 Minutes</h2>
          <div className="grid gap-6">
            {[
              { icon: Target, title: "Your primary excuse pattern", desc: "The story you keep telling yourself" },
              { icon: Brain, title: "Whether it's FACT or FEAR", desc: "Real constraint vs. avoidance mechanism" },
              {
                icon: Lock,
                title: "What's ACTUALLY keeping you stuck",
                desc: "The hidden blocker you can't see on your own",
              },
              { icon: Zap, title: "Your exact next step", desc: "What you need to do to break free" },
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-2" />
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg text-muted-foreground mt-8">No fluff. No theory. Just the truth.</p>
        </div>

        {/* Who This Is For */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-secondary/5 border-2 border-secondary">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                This IS for you if:
              </h3>
              <div className="space-y-3">
                {[
                  'You\'ve been "about to start" for 3+ months',
                  "You know what you want but can't get yourself to do it",
                  "You're tired of your own excuses (but don't know how to break free)",
                  "You're ready to see the truth (even if it's uncomfortable)",
                  "You want to STOP spinning and START moving",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-muted/30 border-2 border-muted">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-destructive" />
                This is NOT for you if:
              </h3>
              <div className="space-y-3">
                {[
                  "You're still exploring options (you don't know what you want yet)",
                  "You're not willing to be honest with yourself",
                  "You just want someone to validate your excuses",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Before You Start */}
        <Card className="max-w-3xl mx-auto mb-20 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/30">
          <h2 className="text-3xl font-bold text-center mb-8">Before You Start: A Note About Honesty</h2>
          <div className="space-y-6 text-lg">
            <p className="text-center font-medium">This assessment only works if you're brutally honest.</p>
            <div className="p-6 bg-background rounded-lg space-y-3">
              <p>Not the version of yourself you show on LinkedIn.</p>
              <p>Not the version you tell your friends.</p>
              <p className="font-bold text-primary">The version that exists at 2am when you can't sleep.</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">There are no "right" answers.</p>
              <p className="font-semibold">No one is judging you.</p>
              <p className="font-semibold">This is just you and the truth.</p>
            </div>
            <div className="p-6 bg-secondary/10 rounded-lg space-y-3 border-l-4 border-secondary">
              <p>Take your time.</p>
              <p>Read each question carefully.</p>
              <p>Sit with it if you need to.</p>
              <p>Choose the answer that feels MOST true (even if it's uncomfortable).</p>
            </div>
            <p className="text-center text-muted-foreground">
              Your results are completely private. Only you will see them (unless you choose to share).
            </p>
            <p className="text-center font-bold text-xl text-primary">
              The more honest you are, the more accurate your results will be. And the clearer your path forward
              becomes.
            </p>
          </div>
        </Card>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">What others have said:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I was scared to be honest at first. But the results were so accurate it was almost scary. This assessment saw through my excuses better than I could.",
                name: "Sarah M.",
              },
              {
                quote:
                  "I've taken a lot of assessments. This was the first one where I felt safe being completely real. And the results were exactly what I needed to hear.",
                name: "Marcus T.",
              },
              {
                quote:
                  "I sat with some questions for a few minutes before answering. That pause made all the difference. The results were spot-on.",
                name: "Jennifer K.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <div className="p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border-2 border-accent/30">
            <p className="text-xl font-bold mb-2">Another year is about to pass.</p>
            <p className="text-lg text-muted-foreground">
              Will you enter the new one the same person, telling yourself the same stories...
            </p>
            <p className="text-lg font-semibold text-accent mt-2">
              Or will you finally know the truth about what's holding you back?
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <Button
            onClick={onStart} // Fixed to use onStart prop instead of setStep
            size="lg"
            className="w-full py-8 text-2xl font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            Take the Assessment Now <ArrowRight className="w-8 h-8 ml-3" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Takes 2 minutes. Completely free. Brutally honest.</p>

          <p className="mt-2 text-sm text-accent font-medium">
            Before this year ends. Before you tell yourself "next year" again.
          </p>
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
}: {
  question: Question
  currentQuestion: number
  totalQuestions: number
  onAnswer: (answer: string) => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background p-6 py-12">
      <div className="container mx-auto max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
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
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Question {currentQuestion + 1} of {totalQuestions}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold whitespace-pre-wrap">{question.question}</h2>
            {currentQuestion === 8 && (
              <p className="text-muted-foreground italic">
                Remember: Whatever you choose is valid. There's no judgment here. This is about YOU seeing the truth
                clearly.
              </p>
            )}
            {currentQuestion === 9 && (
              <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                <p className="text-sm text-foreground">
                  You did it. You answered honestly. That's the hardest part. Now let's show you what your answers
                  reveal.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(option)}
                className="w-full p-5 text-left bg-muted/50 hover:bg-primary/10 hover:border-primary/50 border-2 border-transparent rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-colors" />
                  <span className="text-base">{option}</span>
                </div>
              </button>
            ))}
          </div>
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

function ResultsPage({
  isFearBased,
  answers,
  email,
}: {
  isFearBased: boolean
  answers: Record<number, string>
  email: string
}) {
  const [showPaymentPlan, setShowPaymentPlan] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6 py-12 md:py-20 max-w-4xl">
        <div className="mb-8 p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border-2 border-accent/30 text-center">
          <p className="text-lg font-bold mb-2">The calendar is about to reset.</p>
          <p className="text-muted-foreground">Will you start fresh, or carry the same patterns into another year?</p>
        </div>

        {/* Results */}
        <Card className="p-12 mb-12 bg-gradient-to-br from-card to-muted/20">
          <div className="text-center space-y-6 mb-8">
            <div
              className={`inline-block px-8 py-3 rounded-full ${isFearBased ? "bg-accent/20 border-2 border-accent" : "bg-primary/20 border-2 border-primary"}`}
            >
              <p className="text-sm font-bold uppercase tracking-wide">Your Result</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {isFearBased ? (
                <>
                  You're <span className="text-accent">FEAR-BASED</span> Stuck
                </>
              ) : (
                <>
                  You're <span className="text-primary">CONSTRAINT-BASED</span> Stuck
                </>
              )}
            </h1>
          </div>

          {isFearBased ? (
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-3 text-accent">Here's what that means:</h3>
                <p className="text-lg mb-4">
                  Your obstacle SOUNDS like a fact. But it's actually <strong>FEAR</strong> disguised as logic.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your stated excuse: <em>"{answers[3]}"</em>
                </p>
                <p className="font-semibold">The pattern:</p>
                <p>
                  Even if that obstacle disappeared tomorrow, you'd find another reason to wait. Because{" "}
                  <strong>the obstacle isn't the issue. The fear is.</strong>
                </p>
              </div>

              <Card className="p-8 md:p-12 mb-12 bg-card border-2">
                <h2 className="text-2xl font-bold mb-6">The Pattern You're Stuck In</h2>
                <div className="space-y-4 mb-6">
                  {[
                    { step: 1, text: "You decide you're going to start" },
                    {
                      step: 2,
                      text: isFearBased
                        ? `Fear shows up disguised as "${answers[3]?.replace(/"/g, "")}"`
                        : 'You hit your constraint and tell yourself "I can\'t start yet"',
                    },
                    { step: 3, text: 'You tell yourself "I\'ll start once I solve this"' },
                    { step: 4, text: 'You work on "solving" the obstacle (but it never feels fully solved)' },
                    { step: 5, text: "Repeat" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold">{item.step}</span>
                      </div>
                      <p className="mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-lg">
                    You've been in this loop for: <span className="text-accent">{answers[2]}</span>
                  </p>
                  <p className="mt-2 text-muted-foreground">And you'll stay in it until you see it clearly.</p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-destructive/5 to-background border-2 border-destructive/20">
                <h2 className="text-2xl font-bold mb-6">What This Is Costing You</h2>
                <p className="text-lg mb-6">Every month you stay stuck, you're losing:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: X,
                      title: "Opportunities",
                      desc: "Promotions, clients, partnerships, visibility you didn't go for",
                    },
                    { icon: X, title: "Momentum", desc: 'Other people are building while you\'re "preparing"' },
                    { icon: X, title: "Mental energy", desc: "The same internal debate on repeat is exhausting" },
                    { icon: X, title: "Time", desc: "Another 30 days your future self will never get back" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-background rounded-lg border-l-4 border-destructive">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-destructive" />
                        <p className="font-bold">{item.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 p-6 bg-background rounded-lg">
                  <p className="font-semibold text-lg">If nothing changes:</p>
                  <div className="space-y-3">
                    {[
                      { time: "3 months from now", desc: "Still stuck. More frustrated. Deeper shame." },
                      {
                        time: "6 months from now",
                        desc: "Still at the same crossroads. Watching others do what you want to do.",
                      },
                      { time: "1 year from now", desc: "Looking back at today wishing you'd moved." },
                      { time: "5 years from now", desc: 'Still wondering "what if?"' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="font-bold text-destructive shrink-0">{item.time}:</span>
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg border-2 border-secondary">
                  <p className="font-semibold text-lg">Or... 30 days from now:</p>
                  <p className="text-lg">
                    You've actually <span className="font-bold text-secondary">DONE</span> the thing. Posted the
                    content. Launched the business. Had the conversation. <span className="font-bold">Moved.</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-secondary/10 to-background border-2 border-secondary">
                <h2 className="text-2xl font-bold mb-6">The Good News</h2>
                <p className="text-lg mb-6">Here's what changes everything:</p>
                <div className="p-6 bg-background rounded-lg border-l-4 border-secondary mb-6">
                  <p className="text-xl font-semibold">
                    {isFearBased
                      ? "Once you SEE that it's fear (not facts), you can choose differently."
                      : "Once you see the pattern, you can solve the constraint AND build momentum at the same time."}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      You don't need to:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Wait until you feel ready (that day never comes)",
                        "Wait until you feel confident (confidence comes AFTER action)",
                        "Wait for perfect conditions (they don't exist)",
                      ].map((item, i) => (
                        <p key={i} className="text-sm text-muted-foreground pl-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      You just need to:
                    </p>
                    <div className="space-y-2">
                      {["Move anyway.", "While scared.", "Imperfectly."].map((item, i) => (
                        <p key={i} className="text-sm font-medium pl-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-secondary/20 rounded-lg text-center">
                  <p className="text-xl font-bold">And that's exactly what I help you do.</p>
                </div>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3 text-primary">Here's what that means:</h3>
                <p className="text-lg mb-4">
                  You have a <strong>REAL constraint</strong>. It IS real.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your constraint: <em>"{answers[3]}"</em>
                </p>
                <p className="font-semibold mb-2">But here's the problem:</p>
                <p>
                  You've been using it as a reason to do <strong>NOTHING</strong> while you wait. Instead of solving the
                  constraint AND building momentum, you're "stuck waiting" for conditions to be perfect.
                </p>
              </div>

              <Card className="p-8 md:p-12 mb-12 bg-card border-2">
                <h2 className="text-2xl font-bold mb-6">The Pattern You're Stuck In</h2>
                <div className="space-y-4 mb-6">
                  {[
                    { step: 1, text: "You decide you're going to start" },
                    {
                      step: 2,
                      text: isFearBased
                        ? `Fear shows up disguised as "${answers[3]?.replace(/"/g, "")}"`
                        : 'You hit your constraint and tell yourself "I can\'t start yet"',
                    },
                    { step: 3, text: 'You tell yourself "I\'ll start once I solve this"' },
                    { step: 4, text: 'You work on "solving" the obstacle (but it never feels fully solved)' },
                    { step: 5, text: "Repeat" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="font-bold">{item.step}</span>
                      </div>
                      <p className="mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-lg">
                    You've been in this loop for: <span className="text-primary">{answers[2]}</span>
                  </p>
                  <p className="mt-2 text-muted-foreground">And you'll stay in it until you see it clearly.</p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-destructive/5 to-background border-2 border-destructive/20">
                <h2 className="text-2xl font-bold mb-6">What This Is Costing You</h2>
                <p className="text-lg mb-6">Every month you stay stuck, you're losing:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: X,
                      title: "Opportunities",
                      desc: "Promotions, clients, partnerships, visibility you didn't go for",
                    },
                    { icon: X, title: "Momentum", desc: 'Other people are building while you\'re "preparing"' },
                    { icon: X, title: "Mental energy", desc: "The same internal debate on repeat is exhausting" },
                    { icon: X, title: "Time", desc: "Another 30 days your future self will never get back" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-background rounded-lg border-l-4 border-destructive">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-destructive" />
                        <p className="font-bold">{item.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 p-6 bg-background rounded-lg">
                  <p className="font-semibold text-lg">If nothing changes:</p>
                  <div className="space-y-3">
                    {[
                      { time: "3 months from now", desc: "Still stuck. More frustrated. Deeper shame." },
                      {
                        time: "6 months from now",
                        desc: "Still at the same crossroads. Watching others do what you want to do.",
                      },
                      { time: "1 year from now", desc: "Looking back at today wishing you'd moved." },
                      { time: "5 years from now", desc: 'Still wondering "what if?"' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="font-bold text-destructive shrink-0">{item.time}:</span>
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg border-2 border-secondary">
                  <p className="font-semibold text-lg mb-3">Or... 30 days from now:</p>
                  <p className="text-lg">
                    You've actually <span className="font-bold text-secondary">DONE</span> the thing. Posted the
                    content. Launched the business. Had the conversation. <span className="font-bold">Moved.</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-secondary/10 to-background border-2 border-secondary">
                <h2 className="text-2xl font-bold mb-6">The Good News</h2>
                <p className="text-lg mb-6">Here's what changes everything:</p>
                <div className="p-6 bg-background rounded-lg border-l-4 border-secondary mb-6">
                  <p className="text-xl font-semibold">
                    {isFearBased
                      ? "Once you SEE that it's fear (not facts), you can choose differently."
                      : "Once you see the pattern, you can solve the constraint AND build momentum at the same time."}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      You don't need to:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Wait until you feel ready (that day never comes)",
                        "Wait until you feel confident (confidence comes AFTER action)",
                        "Wait for perfect conditions (they don't exist)",
                      ].map((item, i) => (
                        <p key={i} className="text-sm text-muted-foreground pl-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      You just need to:
                    </p>
                    <div className="space-y-2">
                      {["Move anyway.", "While scared.", "Imperfectly."].map((item, i) => (
                        <p key={i} className="text-sm font-medium pl-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-secondary/20 rounded-lg text-center">
                  <p className="text-xl font-bold">And that's exactly what I help you do.</p>
                </div>
              </Card>
            </div>
          )}
        </Card>

        {/* The Solution */}
        <Card id="offer" className="p-12 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-primary">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 4-Week Unstuck Intensive</h2>
            <p className="text-xl text-muted-foreground">
              {isFearBased
                ? "We expose the fear, dismantle it, and get you moving by Week 4."
                : "We solve the constraint AND build momentum (no more 'stuck waiting')."}
            </p>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="font-semibold text-accent">
                Start before the year ends. Break through before the calendar resets.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Only 5 spots available. First session within 3-7 days of enrollment.
              </p>
            </div>
          </div>

          {/* Existing program details will be here, assuming they are part of the original code */}
          {/* Placeholder for existing program details */}
          <div className="space-y-6 mb-8">
            {[
              {
                week: 1,
                title: "THE EXPOSURE",
                points: [
                  "90-minute deep-dive session",
                  "I expose your excuse pattern (the story you keep telling yourself)",
                  'We identify the REAL fear underneath the "logical reason"',
                  'You see clearly: "Oh. I\'ve been lying to myself."',
                ],
                deliverable: "Your Excuse Pattern Profile",
              },
              {
                week: 2,
                title: "THE DISMANTLING",
                points: [
                  "60-minute session",
                  "We dismantle the false stories one by one",
                  'I show you how to distinguish REAL obstacles from fear-based "not ready yet"',
                  "You reframe the narratives keeping you stuck",
                ],
                deliverable: "Your Fear vs. Facts Breakdown",
              },
              {
                week: 3,
                title: "THE MOVEMENT PLAN",
                points: [
                  "60-minute session",
                  "We design your smallest viable first action",
                  'Build your "What to do when fear shows up" protocol',
                  "Create your First 30 Days Action Plan",
                ],
                deliverable: "Your Action Plan",
              },
              {
                week: 4,
                title: "THE EXECUTION",
                points: [
                  "60-minute prep session (beginning of week)",
                  "YOU ACTUALLY DO THE THING THIS WEEK",
                  "Post the content / Launch the business / Have the conversation",
                  "30-minute debrief (end of week)",
                ],
                deliverable: "Proof You Did It + Your Next 60-Day Roadmap",
              },
            ].map((week, i) => (
              <Card key={i} className="p-6 bg-card border-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">{week.week}</span>
                  </div>
                  <h3 className="text-xl font-bold">
                    WEEK {week.week}: {week.title}
                  </h3>
                </div>
                <div className="space-y-2 mb-4">
                  {week.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm font-semibold">Deliverable: {week.deliverable}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-6 bg-background rounded-lg border-2 border-accent/30 mb-8">
            <p className="font-semibold mb-3">Between sessions (Weeks 1-4):</p>
            <div className="space-y-2">
              {[
                "Daily call/text support (Mon-Fri)",
                "Real-time excuse catching",
                "Accountability when you want to retreat",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Works */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Why This Works</h3>
            <p className="text-lg mb-6">
              This isn't therapy. This isn't cheerleading. This is excuse-catching, fear-dismantling, get-you-moving
              coaching.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "I catch your excuses in real-time - The moment you try to retreat, I call it",
                "Daily support when fear shows up - You don't do this alone",
                'You actually DO the thing by Week 4 - Not "think about it" or "plan for it" - DO IT',
                "You build the excuse-catching muscle - So you can do this on your own going forward",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-4 bg-card rounded-lg border-l-4 border-secondary">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-lg font-semibold text-primary">
              This works IF you show up. And if you show up fully, you WILL break through.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Who This Intensive Is For</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  This intensive is for you if:
                </p>
                <div className="space-y-2">
                  {[
                    "You're DONE with your own excuses",
                    "You're ready to be called on your BS",
                    "You're willing to move while scared",
                    "You can commit 4 weeks + $3K to break free",
                    "You're ready to actually DO the thing (not just think about it)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  This is NOT for you if:
                </p>
                <div className="space-y-2">
                  {[
                    "You want validation for your excuses",
                    "You're not willing to be uncomfortable",
                    "You want someone to tell you what to do with your life",
                    "You can't commit to showing up fully for 4 weeks",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pricing & CTA */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">The Investment</h2>

          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-5xl font-bold text-primary">$2,997</span>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              4 weeks to break free from what's been keeping you stuck
            </p>

            <div className="mt-4 inline-block px-4 py-2 bg-accent/20 rounded-full">
              <p className="text-sm font-semibold text-accent">⏰ Only 5 spots. Close before New Year's.</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => (window.location.href = "https://buy.stripe.com/bJecN6bYCbvj8aP8DFdAk09")}
              size="lg"
              className="w-full py-8 text-2xl font-bold bg-accent hover:bg-accent/90 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Pay in Full - $2,997 <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-center text-sm text-muted-foreground">Secure your spot. Start immediately.</p>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-4 text-sm text-muted-foreground">or</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => (window.location.href = "https://buy.stripe.com/9B6eVe7Im56V9eT3jldAk0a")}
              variant="outline"
              size="lg"
              className="w-full py-6 text-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 rounded-full"
            >
              Payment Plan - $1,500 × 2 <CreditCard className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              $1,500 today + $1,500 in 2 weeks. Same program, flexible payment.
            </p>
          </div>

          <div className="mt-8 p-6 bg-background rounded-lg border-2 border-secondary/30">
            <p className="font-semibold mb-3 text-center">What this is ACTUALLY worth:</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                • If you've been stuck for {answers[2]}, how much has staying hidden cost you in lost opportunities?
              </p>
              <p>• How much mental energy have you wasted on the same internal debate?</p>
              <p>• What's it worth to FINALLY break through before another year passes?</p>
            </div>
            <p className="mt-4 text-center font-semibold text-lg">You decide.</p>
          </div>
        </Card>

        {/* FAQ */}
        <Card className="p-8 md:p-12 mb-12 bg-card border-2">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions You Might Have</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What if I'm not sure I'm ready?",
                a: "That's the fear talking. You'll never \"feel ready.\" You decide you're ready, and then we make you ready through the work. If you're asking this question, you're exactly who this is for.",
              },
              {
                q: "What if I can't commit to 4 weeks?",
                a: "This intensive requires full commitment. If you genuinely can't show up for 4 weeks, wait until you can. But if it's fear making you hesitate... that's exactly what we'll work on in Week 1.",
              },
              {
                q: "What if I don't do the thing by Week 4?",
                a: "Then you've identified a deeper pattern we need to address. But if you show up fully and do the work, you WILL move. I've yet to see someone fully commit and not break through.",
              },
              {
                q: "Is this confidential?",
                a: "Completely. Everything discussed is private. The only person who will know your work is you (unless you choose to share).",
              },
              {
                q: "What if I have questions before booking?",
                a: 'Email me at idealclaritysolutions@gmail.com with "Assessment Results" in the subject line. I\'ll respond within 24 hours.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-lg">
                <p className="font-semibold mb-3 text-lg">{faq.q}</p>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center space-y-4">
          <p className="text-xl font-bold">Don't carry this into another year.</p>
          <p className="text-lg text-muted-foreground">
            4 weeks from now, you'll look back at this moment as the day everything changed.
          </p>
          <p className="text-accent font-semibold">
            Before the calendar resets. Before "next year" becomes another empty promise.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center text-muted-foreground text-sm mt-12">
          <p>Questions? Email idealclaritysolutions@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
