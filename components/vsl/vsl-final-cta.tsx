import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export function VSLFinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#1a2332] to-[#0f141c] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a574] blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4a574]/10 border border-[#d4a574]/30 text-[#d4a574] px-5 py-2.5 rounded-full mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Limited to 5 clients per month</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready To Stop Planning
            <span className="block text-[#d4a574]">And Start Building?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Book your free 30-minute strategy call. I&apos;ll show you exactly what&apos;s blocking you and how we&apos;ll remove it.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 h-auto rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-2xl shadow-[#d4a574]/20 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Your Free Strategy Call
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-7 h-auto rounded-full bg-white hover:bg-gray-100 text-[#1a2332] font-bold shadow-xl w-full sm:w-auto"
            >
              <Link href="https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q" target="_blank">
                Enroll Now — $3,500
              </Link>
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-gray-500 text-sm">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
