"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle2, X, Clock, CreditCard, Brain, Lightbulb, Lock, ArrowRight, AlertCircle } from "lucide-react"

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
      "If you're being COMPLETELY honest with yourself - no pretending, no \"should\" - what's the REAL reason you haven't started?\n(Choose the answer that feels most true in your gut, even if you've never admitted it out loud)",
    options: [
      "I'm terrified of failing publicly and everyone seeing it",
      "I'm scared of being judged, criticized, or rejected by people I know",
      "Deep down, I don't actually believe I'm good enough to succeed at this",
      "I'm afraid of what happens if it WORKS (visibility, expectations, my life changing)",
      "I have a legitimate constraint I truly cannot solve right now (non-compete, money, time, legal, health, etc.)",
      "Honestly? I'm not actually sure. That's why I'm taking this assessment.",
    ],
    encouragement:
      "💡 Remember: Whatever you choose is valid. There's no judgment here. This is about YOU seeing the truth clearly.",
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
    encouragement:
      "✓ You did it. You answered honestly. That's the hardest part. Now let's show you what your answers reveal.",
  },
]

function AssessmentFlow() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showIntro, setShowIntro] = useState(true)
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [encouragementText, setEncouragementText] = useState("")

  // Determine which questions to show based on Q4 answer
  const isConstraintBased =
    answers["4"]?.includes("constraint") ||
    answers["4"]?.includes("Money") ||
    answers["4"]?.includes("Legal") ||
    answers["4"]?.includes("Time") ||
    answers["4"]?.includes("Skill") ||
    answers["4"]?.includes("Health") ||
    answers["4"]?.includes("Other genuine")
  const isFearBased = answers["4"] && !isConstraintBased

  const questions = [
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
    ...(isConstraintBased
      ? [
          {
            id: "4B",
            header: "Question 4B of 10 | ✓ Your answers are private | 💭 Take your time",
            question: `You selected: ${answers["4"]}. Help me understand: Is this constraint...`,
            options: [
              'Solvable with a clear timeline (e.g., "Non-compete expires in 6 months" or "I need to save $10K")',
              'Solvable but timeline unclear (e.g., "I need to save money but don\'t know how long")',
              'Ongoing/long-term (e.g., "I have young kids for the next 5 years")',
              "Honestly, I'm not sure if it's solvable or just an excuse",
            ],
          },
        ]
      : []),
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
    ...(isFearBased
      ? [
          {
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
          },
        ]
      : []),
    // Conditional 9B - only for constraint-based
    ...(isConstraintBased
      ? [
          {
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
          },
        ]
      : []),
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

  const handleAnswer = (answer: string) => {
    const currentQ = questions[currentQuestion]
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
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Show email capture
      setShowIntro(false)
    }
  }

  if (showIntro) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-3xl w-full p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">10 Questions. Total Honesty.</h2>

          <div className="space-y-6 text-lg">
            <p className="font-semibold">Here's how this works:</p>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Read each question carefully</strong> - Don't rush. Sit with it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Choose the answer that feels MOST true</strong> - Not what you think you "should" say. What's
                  actually true.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Be honest even if it's uncomfortable</strong> - The discomfort is the signal you're getting
                  close to the truth.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>There are no wrong answers</strong> - This is about YOU seeing clearly. Not being judged.
                </span>
              </li>
            </ul>

            <div className="bg-accent/5 border-l-4 border-accent p-6 mt-8">
              <p className="font-semibold mb-3">Remember:</p>
              <ul className="space-y-2">
                <li>✓ Your answers are completely private</li>
                <li>✓ No one is grading you</li>
                <li>✓ The goal is clarity, not perfection</li>
                <li>✓ The more honest you are, the better your results</li>
              </ul>
            </div>

            <p className="text-center text-muted-foreground italic">
              You can take as much time as you need. This is for YOU.
            </p>
          </div>

          <Button onClick={() => setShowIntro(false)} size="lg" className="w-full mt-8 text-lg py-6">
            START QUESTION 1
          </Button>
        </Card>
      </div>
    )
  }

  if (showEncouragement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full p-8 bg-accent/5 border-2 border-accent">
          <div className="text-center space-y-6">
            {encouragementText.split("\n").map((line, i) => (
              <p key={i} className="text-lg font-medium whitespace-pre-wrap">
                {line}
              </p>
            ))}
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
          </div>
        </Card>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Bar */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">{progress}% Complete</span>
          </div>
          <div className="w-full bg-background rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 container mx-auto px-6 py-8 max-w-3xl">
        <div className="space-y-6">
          <div className="text-sm text-muted-foreground text-center">{currentQ.header}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-balance">{currentQ.question}</h2>
          {currentQ.subtext && <p className="text-center text-muted-foreground italic">{currentQ.subtext}</p>}

          <div className="space-y-3 pt-6">
            {currentQ.sections
              ? // Q4 with sections
                currentQ.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="space-y-3">
                    <h3 className="font-bold text-sm text-muted-foreground mt-6">{section.header}</h3>
                    {section.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left border-2 rounded-lg hover:border-primary hover:bg-accent/5 transition-all"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ))
              : // Regular options
                currentQ.options?.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left border-2 rounded-lg hover:border-primary hover:bg-accent/5 transition-all"
                  >
                    {option}
                  </button>
                ))}
          </div>

          {currentQ.encouragement && (
            <div className="mt-6 p-4 bg-accent/5 border-l-4 border-accent rounded text-sm">
              {currentQ.encouragement}
            </div>
          )}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="bg-muted border-t py-4">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          🔒 Private | ⏱️ No time limit | ✓ Total honesty = Best results
        </div>
      </div>
    </div>
  )
}

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
    const q3Answer = answers["3"] || ""
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 7)
    const deadlineFormatted = deadline.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    console.log("[v0] Starting email submission with:", { email, firstName, isFearBased: isFearBased() })
    console.log("[v0] Q3 Answer:", q3Answer)
    console.log("[v0] Deadline:", deadlineFormatted)

    if (email && firstName) {
      setEmailSending(true)
      try {
        console.log("[v0] Making API call to /api/assessment-email")
        const result = await fetch("/api/assessment-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            firstName: firstName,
            isFearBased: isFearBased(),
            answers: answers,
            q3Answer: q3Answer,
            deadline: deadlineFormatted,
          }),
        })

        console.log("[v0] API response status:", result.status, result.statusText)
        const data = await result.json()
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
      setStep("results")
    } else {
      console.error("[v0] Missing email or firstName:", { email, firstName })
      alert("Please enter both your name and email address.")
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
            <p className="text-lg text-muted-foreground text-balance">But what if those aren\'t real obstacles?</p>
            <p className="text-lg font-semibold text-accent">What if they\'re just fear... dressed up as logic?</p>
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
                  <div className="w-2 h-2 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-colors" />
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
                a: "Then you've identified a deeper pattern we need to address. But if you show up fully and do the work, you WILL break through. I've yet to see someone fully commit and not break through.",
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
