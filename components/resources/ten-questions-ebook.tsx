"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Target, 
  Eye, 
  GitBranch,
  Calendar,
  CreditCard,
  ArrowRight,
  Sparkles
} from "lucide-react"

type BlockType = "validation" | "visibility" | "commitment" | null

interface Question {
  id: number
  question: string
  subtext?: string
  options: {
    label: string
    block: BlockType
  }[]
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "When you think about reaching out to someone to offer your services, what's the first thought that stops you?",
    subtext: "Be honest—what's the REAL first thought?",
    options: [
      { label: "I'm not qualified/certified/experienced enough", block: "validation" },
      { label: "They'll judge me/laugh at me/think I'm unpolished", block: "visibility" },
      { label: "What if I'm offering the wrong thing?", block: "commitment" },
      { label: "Nothing really stops me", block: null },
    ]
  },
  {
    id: 2,
    question: "Complete this sentence: 'I'll be ready to start when ___________'",
    subtext: "What are you actually waiting for?",
    options: [
      { label: "I get certified/take another course/have more experience", block: "validation" },
      { label: "My website is done/my brand is polished/I have professional photos", block: "visibility" },
      { label: "I know exactly who my niche is/I'm 100% sure", block: "commitment" },
      { label: "I'm ready now—just haven't started", block: null },
    ]
  },
  {
    id: 3,
    question: "How many times have you changed your mind about your niche in the past 3 months?",
    options: [
      { label: "0-1 times", block: null },
      { label: "2-3 times", block: "commitment" },
      { label: "4-5 times", block: "commitment" },
      { label: "6+ times—I've lost count", block: "commitment" },
    ]
  },
  {
    id: 4,
    question: "When you imagine posting about your business on LinkedIn or Instagram, what feeling comes up?",
    options: [
      { label: "Excitement—I'm ready to share", block: null },
      { label: "Neutral—it's just part of business", block: null },
      { label: "Anxiety—what will people think?", block: "visibility" },
      { label: "Dread—I'd rather do anything else", block: "visibility" },
    ]
  },
  {
    id: 5,
    question: "In the last month, have you spent more time on learning/researching OR reaching out to potential clients?",
    subtext: "Be brutally honest. Where did MOST of your hours go?",
    options: [
      { label: "Mostly learning—courses, books, videos", block: "validation" },
      { label: "About 50/50", block: null },
      { label: "Mostly reaching out to people", block: null },
      { label: "Neither—I've been paralyzed", block: "commitment" },
    ]
  },
  {
    id: 6,
    question: "What scares you more: Offering the wrong thing, or people saying no?",
    subtext: "Pick one. Which makes your stomach drop more?",
    options: [
      { label: "Offering the wrong thing—what if I waste years?", block: "commitment" },
      { label: "People saying no—rejection terrifies me", block: "validation" },
      { label: "People seeing me fail publicly", block: "visibility" },
      { label: "Neither really scares me", block: null },
    ]
  },
  {
    id: 7,
    question: "If you made an offer today and someone said YES, how would you feel?",
    options: [
      { label: "Excited—let's go!", block: null },
      { label: "Terrified I can't actually deliver", block: "validation" },
      { label: "Unsure if this is even the right direction", block: "commitment" },
      { label: "Worried I'm not ready to be 'out there'", block: "visibility" },
    ]
  },
  {
    id: 8,
    question: "In the last month, have you spent more time on website/logo/brand design OR actual conversations with potential clients?",
    options: [
      { label: "Mostly branding/design work", block: "visibility" },
      { label: "About equal time on both", block: null },
      { label: "Mostly conversations", block: null },
      { label: "Neither—still planning", block: "commitment" },
    ]
  },
  {
    id: 9,
    question: "What would you need to FEEL in order to start making offers this week?",
    options: [
      { label: "More confident/qualified/experienced", block: "validation" },
      { label: "More polished/professional/ready to be seen", block: "visibility" },
      { label: "More certain/sure/clear on direction", block: "commitment" },
      { label: "Nothing—I could start now", block: null },
    ]
  },
  {
    id: 10,
    question: "If you're honest with yourself, what's the REAL reason you haven't made your first offer yet?",
    subtext: "Strip away the excuses. What's the core truth?",
    options: [
      { label: "I don't feel qualified enough yet", block: "validation" },
      { label: "I'm not ready to put myself out there", block: "visibility" },
      { label: "I can't commit to a direction", block: "commitment" },
      { label: "I actually have—I'm ready for more", block: null },
    ]
  },
]

const BLOCK_INFO = {
  validation: {
    name: "Validation Block",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "You need external proof before you feel credible",
    detail: "You're waiting for more credentials, qualifications, certifications, or experience before you feel 'ready.' The truth? You already know enough to help someone one step behind you. Your expertise isn't the problem—your belief in it is.",
  },
  visibility: {
    name: "Visibility Block",
    icon: Eye,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Being seen before you're perfect feels dangerous",
    detail: "You're hiding behind brand work, website tweaks, and 'getting ready' because putting yourself out there feels terrifying. The fear of judgment is keeping you invisible—and invisible people don't get clients.",
  },
  commitment: {
    name: "Commitment Block",
    icon: GitBranch,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "Choosing wrong feels like it will waste years of your life",
    detail: "You keep changing niches, pivoting directions, and waiting for certainty before committing. But certainty comes from action, not analysis. Every week you spend 'deciding' is a week you could have spent learning what actually works.",
  },
}

export function TenQuestionsEbook() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(BlockType | undefined)[]>(Array(10).fill(undefined))
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (block: BlockType) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = block
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResults = () => {
    const counts = { validation: 0, visibility: 0, commitment: 0 }
    answers.forEach(answer => {
      if (answer && answer in counts) {
        counts[answer as keyof typeof counts]++
      }
    })
    return counts
  }

  const getPrimaryBlock = () => {
    const counts = calculateResults()
    const max = Math.max(counts.validation, counts.visibility, counts.commitment)
    if (max === 0) return null
    if (counts.validation === max) return "validation"
    if (counts.visibility === max) return "visibility"
    return "commitment"
  }

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  if (showResults) {
    const counts = calculateResults()
    const primaryBlock = getPrimaryBlock()
    const blockData = primaryBlock ? BLOCK_INFO[primaryBlock] : null
    const BlockIcon = blockData?.icon || Target

    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27]">
        {/* Header */}
        <div className="border-b border-white/10 bg-[#1a2332]/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-[#d4a574] font-serif text-xl">
              Ideal Clarity
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-20 max-w-3xl">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#d4a574]/20 text-[#d4a574] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Assessment Complete
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Your Results Are In
            </h1>
            <p className="text-gray-400 text-lg">
              Here&apos;s what&apos;s been keeping you stuck.
            </p>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {(Object.keys(BLOCK_INFO) as (keyof typeof BLOCK_INFO)[]).map((key) => {
              const info = BLOCK_INFO[key]
              const count = counts[key]
              const isPrimary = key === primaryBlock
              return (
                <Card 
                  key={key} 
                  className={`p-4 sm:p-6 text-center transition-all ${isPrimary ? `${info.bgColor} ${info.borderColor} border-2` : 'bg-white/5 border-white/10'}`}
                >
                  <info.icon className={`w-6 h-6 mx-auto mb-2 ${isPrimary ? 'text-white' : 'text-gray-500'}`} />
                  <p className={`text-2xl sm:text-3xl font-bold ${isPrimary ? 'text-white' : 'text-gray-400'}`}>{count}</p>
                  <p className={`text-xs sm:text-sm ${isPrimary ? 'text-white/80' : 'text-gray-500'}`}>{info.name.replace(' Block', '')}</p>
                </Card>
              )
            })}
          </div>

          {/* Primary Block Result */}
          {blockData && (
            <Card className={`p-8 sm:p-10 ${blockData.bgColor} ${blockData.borderColor} border-2 mb-10`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${blockData.color}`}>
                  <BlockIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Your Primary Block</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{blockData.name}</h2>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-4 font-medium">
                {blockData.description}
              </p>
              <p className="text-white/70 leading-relaxed">
                {blockData.detail}
              </p>
            </Card>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5 rounded-2xl p-8 sm:p-10 border border-[#d4a574]/30 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Now What?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
              You&apos;ve identified your block. That&apos;s huge. Most people go their entire lives not realizing what&apos;s actually stopping them.
            </p>
            <p className="text-gray-400 mb-8">
              Now you have two options:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Option 1 */}
              <Card className="p-6 bg-white/5 border-white/10 text-left">
                <p className="text-[#d4a574] font-medium mb-2">Option 1</p>
                <p className="text-white font-semibold mb-2">Try to dismantle it yourself</p>
                <p className="text-gray-400 text-sm">
                  Possible, but hard. Most people stay stuck because you can&apos;t see the block from inside it.
                </p>
              </Card>

              {/* Option 2 */}
              <Card className="p-6 bg-[#d4a574]/10 border-[#d4a574]/30 border-2 text-left">
                <p className="text-[#d4a574] font-medium mb-2">Option 2</p>
                <p className="text-white font-semibold mb-2">Get help removing it in 30 days</p>
                <p className="text-gray-300 text-sm">
                  This is what I do in my &quot;From Idea to First Offer&quot; program. We identify your block in Week 1, systematically dismantle it, and get you making 10 offers by Week 4.
                </p>
              </Card>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 h-auto rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-xl"
              >
                <Link href="https://calendly.com/idealclaritysolutions/30min?month=2026-04" target="_blank">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto rounded-full border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574]/10"
              >
                <Link href="https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q" target="_blank">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Enroll Now — $3,500
                </Link>
              </Button>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              No pitch. No pressure. Just clarity.
            </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-2">You&apos;ve been stuck long enough.</p>
            <p className="text-white font-medium">Let&apos;s fix this.</p>
            <p className="text-[#d4a574] mt-4">— Chi-Chi Jones</p>
            <p className="text-gray-500 text-sm">Founder, Ideal Clarity Solutions</p>
          </div>
        </div>
      </main>
    )
  }

  const question = QUESTIONS[currentQuestion]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27]">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#1a2332]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#d4a574] font-serif text-xl">
            Ideal Clarity
          </Link>
          <span className="text-gray-400 text-sm">
            Question {currentQuestion + 1} of {QUESTIONS.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div 
            className="h-full bg-[#d4a574] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Intro section on first question */}
      {currentQuestion === 0 && (
        <div className="container mx-auto px-4 pt-12 pb-8 max-w-2xl text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            10 Questions to Identify Your Blockers
          </h1>
          <p className="text-gray-400 mb-2">The fastest way to see what&apos;s really stopping you</p>
          <p className="text-[#d4a574] text-sm">By Chi-Chi Jones | Ideal Clarity Solutions</p>
        </div>
      )}

      {/* Question Card */}
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-2xl">
        <Card className="p-6 sm:p-10 bg-white/5 border-white/10 backdrop-blur-sm">
          {/* Question number badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4a574]/20 text-[#d4a574] px-3 py-1 rounded-full text-sm font-medium mb-6">
            Question {question.id}
          </div>

          {/* Question text */}
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2 leading-relaxed">
            {question.question}
          </h2>
          {question.subtext && (
            <p className="text-gray-400 text-sm mb-8">{question.subtext}</p>
          )}

          {/* Options */}
          <RadioGroup 
            value={answers[currentQuestion] ?? ""} 
            onValueChange={(value) => handleAnswer(value as BlockType)}
            className="space-y-3"
          >
            {question.options.map((option, idx) => (
              <div key={idx}>
                <RadioGroupItem
                  value={option.block ?? "none"}
                  id={`option-${idx}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`option-${idx}`}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-white/10 bg-white/5 cursor-pointer transition-all hover:border-[#d4a574]/50 hover:bg-white/10 peer-data-[state=checked]:border-[#d4a574] peer-data-[state=checked]:bg-[#d4a574]/10"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center peer-data-[state=checked]:border-[#d4a574] peer-data-[state=checked]:bg-[#d4a574]">
                    {answers[currentQuestion] === (option.block ?? "none") && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="text-white text-base">{option.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="text-gray-400 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </Button>

            <Button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className="bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-semibold px-6 disabled:opacity-30"
            >
              {currentQuestion === QUESTIONS.length - 1 ? (
                <>
                  See My Results
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* The 3 Blocks explanation - show below first question */}
        {currentQuestion === 0 && (
          <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[#d4a574] text-sm font-medium mb-4">The 3 Blocks You&apos;re Testing For:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium">Validation Block:</span>
                  <span className="text-gray-400"> &quot;I&apos;m not credible without external proof&quot;</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium">Visibility Block:</span>
                  <span className="text-gray-400"> &quot;Being seen before I&apos;m perfect is dangerous&quot;</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium">Commitment Block:</span>
                  <span className="text-gray-400"> &quot;Choosing wrong will waste years of my life&quot;</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
