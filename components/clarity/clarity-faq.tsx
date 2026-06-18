"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FadeIn } from "./fade-in"

const faqs = [
  {
    q: "Is this therapy?",
    a: "No. We're not spending our time in your past. We're looking at what's happening right now, why you're stuck, and what to do about it.",
  },
  {
    q: "How is this different from talking to a smart friend?",
    a: "Your friends are inside the situation with you. They have history, opinions, and a stake in protecting you. I come in with none of that. I just see what's there.",
  },
  {
    q: "What if my situation is complicated?",
    a: "It usually feels that way from the inside. Most of the time there's one thing underneath holding the whole mess in place. We find it.",
  },
  {
    q: "Will you tell me what business to start?",
    a: "No — and you don't actually need that. You already have the idea. What you need is to see what's stopping you from moving on it. That's what we do.",
  },
  {
    q: "What if I'm not sure I'm \u201Cstuck enough\u201D for this?",
    a: "If you've been circling the same thing for more than a few months and it still hasn't moved, you're stuck enough. That hesitation you're feeling right now is worth paying attention to.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Your session is reserved just for you. You can reschedule for free up to 24 hours before. If you cancel at least 48 hours in advance, you'll get a full refund; within 48 hours the session is non-refundable, but I'll gladly reschedule you once. And if we complete our session and you feel it didn't give you real clarity, tell me by the end of our call and I'll refund you in full. I only want you paying for this if it actually helps.",
  },
]

export function ClarityFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[720px]">
        <FadeIn>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium text-center">
            Questions
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={i} delay={i * 50}>
                <div className="border-b border-[#1A2332]/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[#1A2332] text-lg sm:text-xl leading-snug">{faq.q}</span>
                    <span className="shrink-0 text-[#B8935F]">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] pb-6 pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
