import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Real Clarity, Real Results</h2>
          </div>

          <Card className="relative p-8 sm:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

            {/* Star rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="mb-8">
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-medium text-pretty">
                "Chi-Chi at Ideal Clarity helped me identify some decision making tools and exercises to clarify values
                as I'm weighing some big decisions. Her guidance helped reframe and clarify next steps in a valuable
                way. If you have a business decision or operational problem to solve, Ideal Clarity can help you find
                your way!"
              </p>
            </blockquote>

            {/* Client info with visual separation */}
            <div className="flex items-start gap-4 pt-6 border-t border-muted">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-lg">
                HB
              </div>
              <div>
                <p className="font-semibold text-lg text-foreground">Hannah Bailey</p>
                <p className="text-muted-foreground">Founder, The Studio Northwood</p>
              </div>
            </div>

            {/* Verification badge */}
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Verified Client</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
