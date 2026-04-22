"use client"

import { Check, Calendar, MessageSquare, FileText, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function OfferSection() {
  const weeks = [
    {
      week: "Week 1",
      title: "Identify The Block",
      description: "We have a 60-minute session where I help you see the pattern you can't see from inside.",
      detail: 'What you think is blocking you (I don\'t know my niche, I need a website, I should get certified) is not the real block. The real block is underneath. A belief that feels like a fact. We find it. We name it.',
    },
    {
      week: "Between Week 1-4",
      title: "Daily Dismantling Work",
      description: 'You don\'t need to "think positive" or "build confidence."',
      detail: "You need to systematically dismantle the block. I give you daily exercises: breathwork to calm your nervous system + evidence-based work to rewire the belief. You do this work between our weekly sessions. 10-15 minutes a day.",
    },
    {
      week: "Week 2",
      title: "Finalize Your Offer",
      description: "Now that the block isn't in the way, we build your offer and pricing.",
      detail: "Quick decisions, no spiraling. Create your first offer (simple, sellable). Set your pricing with rationale.",
    },
    {
      week: "Week 3",
      title: "Prepare Your Outreach",
      description: "Identify 20 prospects and craft your outreach.",
      detail: "Learn how to move from conversation to offer. Handle objections before they come up.",
    },
    {
      week: "Week 4",
      title: "Make 10 Offers",
      description: "This is it. No more delays.",
      detail: "By Week 4, you've done what you've been avoiding for months: made actual offers to real people. Not \"planned to make offers.\" Made them.",
    },
  ]

  const included = [
    { icon: Calendar, text: "4 weekly 60-minute 1:1 sessions" },
    { icon: Zap, text: "Daily dismantling exercises (breathwork + evidence work)" },
    { icon: MessageSquare, text: "Voxer/email support between sessions (M-F)" },
    { icon: FileText, text: "Offer Blueprint (positioning, pricing, messaging)" },
    { icon: Target, text: "Outreach templates customized to your business" },
    { icon: Users, text: "Accountability to actually do the thing" },
  ]

  return (
    <section id="offer" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-primary/10 px-5 py-2 rounded-full border border-primary/20 mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">The Program</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Introducing: &quot;From Idea to First Offer&quot;
            </h2>
            <p className="text-xl sm:text-2xl text-accent font-semibold">
              4 weeks. $3,500. From stuck in planning to 10 offers made.
            </p>
          </div>

          {/* What Happens */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">What Happens</h3>
            <div className="space-y-6">
              {weeks.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-white border-2 border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-40 shrink-0">
                      <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm">
                        {item.week}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                      <p className="text-foreground/80 mb-2">{item.description}</p>
                      <p className="text-foreground/70 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-accent to-accent/90 text-white mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What&apos;s Included</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Social proof image */}
          <div className="my-12 rounded-2xl overflow-hidden shadow-xl relative aspect-[16/7]">
            <Image
              src="/images/taking-action.jpg"
              alt="Professional ready to take action on their business goals"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent flex items-center">
              <div className="px-8 sm:px-14 max-w-lg">
                <p className="text-white text-2xl sm:text-3xl font-bold leading-snug text-balance">
                  Be the person who finally stops planning and starts doing.
                </p>
                <p className="text-white/80 mt-3 text-lg">Your first offer is 4 weeks away.</p>
              </div>
            </div>
          </div>

          {/* Investment */}
          <Card className="p-8 sm:p-12 bg-white border-2 border-primary/20 text-center">
            <p className="text-lg text-foreground/70 mb-2">Investment</p>
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-4">$3,500</p>
            <p className="text-foreground/70 mb-8">
              Limited to 5 clients per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl"
              >
                <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 h-auto rounded-full border-2 border-accent text-accent hover:bg-accent/5"
              >
                <Link href="/programs">
                  See Full Program Details
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
