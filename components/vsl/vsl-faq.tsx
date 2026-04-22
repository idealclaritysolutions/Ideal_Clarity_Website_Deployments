"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Will I make money in 30 days?",
    answer:
      "Maybe. Some clients land their first paid client in Week 3 or 4. Some make 10 offers and get 10 no's. What you WILL have: a real offer, real market feedback, and the experience of actually selling—not planning to sell. The money comes from iterating on what you learn. Some people nail it immediately. Most need to adjust their offer, messaging, or targeting based on feedback. Either way, you're miles ahead of where you are now: stuck in planning mode with zero market feedback.",
  },
  {
    question: "Will I get clients in 4 weeks?",
    answer:
      "This program guarantees you'll MAKE 10 offers, not GET 10 clients. Some people close 1-3 clients in Week 4. Some get 10 no's but have valuable market feedback. Either way, you're no longer stuck in planning mode.",
  },
  {
    question: "Can I really build a business while employed?",
    answer:
      "Yes. I'm doing it right now while working full-time in corporate. The program includes stealth mode strategies so you can build visibility with your target market without broadcasting to your entire workplace.",
  },
  {
    question: "What if I've tried everything and I'm still stuck?",
    answer:
      "That's exactly who this is for. If you've consumed content, made plans, and you're still not executing, you don't have an information problem—you have a block. This program removes it.",
  },
  {
    question: "Is there a payment plan?",
    answer:
      "Not currently. The program requires full payment ($3,500) at enrollment. If you're not satisfied after Session 1, you'll get a full refund within 24 hours—no questions asked.",
  },
]

export function VSLFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
            Common Questions
          </h2>
          <div className="w-16 h-1 bg-[#d4a574] mx-auto" />
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a2332] text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#d4a574] shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
