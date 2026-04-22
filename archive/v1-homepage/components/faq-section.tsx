"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What kinds of career decisions do you help with?",
    answer:
      "All kinds. Choosing between two roles. Deciding whether to stay at your company or leave. Figuring out if you should pursue entrepreneurship or stay in corporate. Navigating a layoff and not knowing what's next. Feeling pulled in multiple directions because you have too many interests. If you're at a crossroads and can't see clearly, this is for you.",
  },
  {
    question: "How is this different from career coaching?",
    answer:
      "Most career coaching focuses on resumes, interview prep, or climbing the ladder. This is different. I help you figure out what you actually want and what's blocking you from going after it. We dig into the fears, the doubts, the patterns that keep you stuck. Once you're clear, the tactical stuff becomes easy. This is about getting unstuck at the root, not just polishing the surface.",
  },
  {
    question: "What if I've already tried everything and I'm still stuck?",
    answer:
      "That's actually the perfect situation for this work. When you've researched, made lists, talked to friends, and you're still stuck, it means the problem isn't lack of information, it's lack of clarity on what's really going on underneath. That's exactly what we uncover together. Most people discover the real issue isn't what they thought it was.",
  },
  {
    question: "I have too many interests. Can you help me choose?",
    answer:
      "Yes, and I get it personally. Being multi-passionate is a gift, but it makes decisions harder, not easier. Every path feels like abandoning the others. I've navigated this myself, and I help clients find a way forward that honors who they are without staying paralyzed by possibility.",
  },
  {
    question: "What if I'm not sure I want to leave my job - I just feel stuck?",
    answer:
      "That's fine. You don't need to be planning an exit to work with me. Sometimes the crossroads is internal: you're questioning whether you're on the right path, feeling unfulfilled, or sensing that something needs to change but not knowing what. We'll get clarity on what's actually going on, and then you can decide what to do about it.",
  },
  {
    question: "Do I need to prepare anything for the session?",
    answer:
      "No prep required. Just show up ready to think out loud. The most valuable sessions happen when you're honest about what's really going on, not the polished or \"palatable\" version. Come as you are. Bring the mess. That's where the clarity comes from.",
  },
  {
    question: "What happens after the first session?",
    answer:
      "You'll get a follow-up email with a recap of what we uncovered, your clear next steps, and key insights to remember. From there, it's up to you. Some people get everything they need in one session. Others choose to continue working together for accountability and follow-through. No pressure either way.",
  },
  {
    question: "What if my situation is really complex or unusual?",
    answer:
      "Even better. Complex, messy, multi-layered situations are exactly what this work is designed for. The more 'I don't even know where to start' you feel, the more valuable this process tends to be.",
  },
  {
    question: "Is this confidential?",
    answer:
      "Absolutely. Everything we discuss stays between us. The only exception: if you give me permission to share your story (with identifying details removed if you prefer), I may use it to help others in similar situations.",
  },
  {
    question: "Can I work with you if I'm not in the US?",
    answer:
      "Yes. All sessions are virtual, unless we agree to meet in person, so as long as we can find a time that works across time zones, we're good. I've worked with clients across multiple continents.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If you're not satisfied with your session, let me know within 24 hours and I'll refund you in full - no questions asked. I'm confident in the value of this work, but I also know it's not for everyone.",
  },
  {
    question: "Can I gift a session to someone else?",
    answer:
      "Yes! Clarity sessions make great gifts for friends stuck on a career decision, colleagues navigating transitions, or anyone who's been going in circles. Email me at idealclaritysolutions@gmail.com and we'll set it up.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about working with Ideal Clarity</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-medium">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:idealclaritysolutions@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Email Me
            </a>
            <Link
              href="https://calendly.com/idealclaritysolutions/30min"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Book a Free 30-Min Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
