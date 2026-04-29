"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Check, 
  Clock, 
  Calendar, 
  Shield, 
  BookOpen,
  Users,
  Target,
  Briefcase,
  Lock,
  Sparkles,
  ArrowRight
} from "lucide-react"

const CHAPTERS = [
  { num: 1, title: "The Strategic Framework", desc: "Why building while employed is easier than quitting" },
  { num: 2, title: "The Daily Structure", desc: "My actual hour-by-hour schedule that makes this work" },
  { num: 3, title: "Getting Clients Without Marketing", desc: "How to get clients through conversations, not funnels" },
  { num: 4, title: "Stealth Mode Strategies", desc: "Building visibility without your employer finding out" },
  { num: 5, title: "The Mental Game", desc: "Guilt, exhaustion, and \"am I being disloyal?\"" },
  { num: 6, title: "The Decision Framework", desc: "When to quit (and when you absolutely shouldn't)" },
  { num: 7, title: "The Systems That Make It Work", desc: "My entire $37/month tech stack, revealed" },
  { num: 8, title: "The First 90 Days", desc: "Your exact step-by-step roadmap to $5K-10K revenue" },
]

const FEATURES = [
  { icon: Clock, text: "My actual weekday + weekend schedules" },
  { icon: Users, text: "Word-for-word client outreach messages" },
  { icon: Shield, text: "LinkedIn stealth mode tactics" },
  { icon: Target, text: "The 80/20 of what actually moves the needle" },
  { icon: Briefcase, text: "How to handle the guilt of 'two jobs'" },
  { icon: Calendar, text: "90-day roadmap to $5K-10K/month" },
]

export function PaidGuideGate() {
  const stripeUrl = "https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q"

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27]">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#1a2332]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-[#d4a574] font-serif text-xl">
            Ideal Clarity
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d4a574]/20 text-[#d4a574] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Digital Guide — Instant Access
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Running Your Business
                <span className="block text-[#d4a574]">While Employed</span>
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                The real-time playbook for corporate professionals building a business on the side — from someone running the play this week, not ten years ago.
              </p>

              <p className="text-gray-400 mb-8">
                Inside: My actual daily schedule, client acquisition messages, stealth-mode tactics, and the systems that let me build without my employer ever knowing.
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c49564] flex items-center justify-center text-[#1a2332] font-bold text-xl">
                  CJ
                </div>
                <div>
                  <p className="text-white font-medium">Chi-Chi Jones</p>
                  <p className="text-gray-400 text-sm">Founder, Ideal Clarity Solutions</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <feature.icon className="w-4 h-4 text-[#d4a574] shrink-0" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Purchase Card */}
            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5 border-[#d4a574]/30 border-2 backdrop-blur-sm">
                {/* Price */}
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-sm mb-1">One-time purchase</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">$27</span>
                    <span className="text-gray-400 line-through">$97</span>
                  </div>
                  <p className="text-[#d4a574] text-sm mt-2">72% off launch price</p>
                </div>

                {/* What's Included */}
                <div className="space-y-3 mb-8">
                  {[
                    "Full 25-page tactical guide (PDF)",
                    "Hour-by-hour schedule templates",
                    "Word-for-word outreach scripts",
                    "LinkedIn stealth mode playbook",
                    "90-day revenue roadmap",
                    "Lifetime access + updates",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#d4a574] shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full text-lg py-7 h-auto rounded-xl bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-xl shadow-[#d4a574]/20"
                >
                  <Link href={stripeUrl} target="_blank">
                    <Lock className="w-5 h-5 mr-2" />
                    Get Instant Access — $27
                  </Link>
                </Button>

                <p className="text-center text-gray-500 text-xs mt-4">
                  Secure checkout via Stripe. Instant PDF delivery.
                </p>

                {/* Guarantee */}
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">Risk-free:</span> If it&apos;s not useful, email me and I&apos;ll refund you. No questions.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-[#141b27]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-white text-center mb-4">
            What&apos;s Inside
          </h2>
          <p className="text-gray-400 text-center mb-12">
            8 chapters of tactical, immediately actionable content
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {CHAPTERS.map((chapter) => (
              <Card key={chapter.num} className="p-6 bg-white/5 border-white/10 hover:border-[#d4a574]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d4a574]/20 flex items-center justify-center text-[#d4a574] font-bold shrink-0">
                    {String(chapter.num).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{chapter.title}</h3>
                    <p className="text-gray-400 text-sm">{chapter.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-8">
            This Guide Is For You If...
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {[
              "You're employed full-time but want to build something of your own",
              "You've been 'planning' to start for months but haven't actually started",
              "You're worried about your employer finding out",
              "You don't have time for complicated marketing funnels",
              "You want a proven playbook from someone doing it RIGHT NOW",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#d4a574] shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Sparkles className="w-10 h-10 text-[#d4a574] mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop Planning. Start Building.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            This isn&apos;t another &quot;someday&quot; course. It&apos;s the playbook I&apos;m executing this week.
          </p>
          
          <Button
            asChild
            size="lg"
            className="text-xl px-12 py-8 h-auto rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-2xl shadow-[#d4a574]/30"
          >
            <Link href={stripeUrl} target="_blank">
              Get The Playbook — $27
            </Link>
          </Button>

          <p className="text-gray-500 text-sm mt-6">
            Instant PDF download after purchase
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ideal Clarity Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
