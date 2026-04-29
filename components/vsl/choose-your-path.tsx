"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Sparkles, Check } from "lucide-react"

const paths = [
  {
    id: "assessment",
    badge: "Free",
    title: "Self-Discovery",
    headline: "Take the 2-Minute Assessment",
    description: "Find out which of the 3 blocks is keeping you stuck. Instant results, zero fluff.",
    features: [
      "Identify your specific blocker",
      "Get personalized insights",
      "Instant results"
    ],
    cta: "Start Free Assessment",
    href: "/resources/10-questions",
    icon: Sparkles,
    color: "border-blue-500/30 hover:border-blue-500/60",
    badgeColor: "bg-blue-500/20 text-blue-400",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: "guide",
    badge: "$27",
    title: "DIY Roadmap",
    headline: "Get the Complete Playbook",
    description: "My exact system for building your business while keeping your paycheck. No coaching required.",
    features: [
      "Step-by-step framework",
      "Time management system",
      "Real examples from my journey"
    ],
    cta: "Get Instant Access",
    href: "/resources/business-while-employed",
    icon: BookOpen,
    color: "border-[#d4a574]/30 hover:border-[#d4a574]/60",
    badgeColor: "bg-[#d4a574]/20 text-[#d4a574]",
    iconBg: "bg-[#d4a574]/20",
    iconColor: "text-[#d4a574]",
    featured: true
  },
  {
    id: "program",
    badge: "Application",
    title: "Done-With-You",
    headline: "Work With Me 1-on-1",
    description: "4 weeks of intensive coaching to remove your block and make your first 10 offers.",
    features: [
      "Personalized breakthrough protocol",
      "Weekly accountability calls",
      "Direct access to Chi-Chi"
    ],
    cta: "Book Free Strategy Call",
    href: "https://calendly.com/idealclaritysolutions/30min",
    icon: Users,
    color: "border-emerald-500/30 hover:border-emerald-500/60",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400"
  }
]

export function ChooseYourPath() {
  return (
    <section className="py-20 sm:py-28 bg-[#0f141c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#d4a574] uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Choose Your Path Forward
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Three Ways To Get Unstuck
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you want to figure it out yourself or work directly with me, there&apos;s a path that fits where you are right now.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`relative bg-[#1a2332] rounded-2xl p-8 border-2 transition-all duration-300 ${path.color} ${path.featured ? 'md:-mt-4 md:mb-4 ring-1 ring-[#d4a574]/20' : ''}`}
            >
              {/* Featured badge */}
              {path.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4a574] text-[#1a2332] text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${path.badgeColor}`}>
                {path.badge}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${path.iconBg} flex items-center justify-center mb-6`}>
                <path.icon className={`w-7 h-7 ${path.iconColor}`} />
              </div>

              {/* Content */}
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">{path.title}</p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                {path.headline}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {path.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {path.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 ${path.iconColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className={`w-full font-bold py-6 h-auto rounded-xl transition-all hover:scale-[1.02] ${
                  path.featured 
                    ? 'bg-[#d4a574] hover:bg-[#c49560] text-[#1a2332]' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <Link href={path.href} target={path.id === 'program' ? '_blank' : undefined}>
                  {path.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          Not sure which is right for you? Start with the free assessment — it takes 2 minutes.
        </p>
      </div>
    </section>
  )
}
