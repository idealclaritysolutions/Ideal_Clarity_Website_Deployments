import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">What Happens When You Remove The Block</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Existing Real Testimonial */}
            <Card className="relative p-8 bg-white shadow-xl border-0 overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mb-6">
                <p className="text-lg text-foreground leading-relaxed font-medium text-pretty">
                  &quot;Chi-Chi at Ideal Clarity helped me identify some decision making tools and exercises to clarify values
                  as I&apos;m weighing some big decisions. Her guidance helped reframe and clarify next steps in a valuable
                  way. If you have a business decision or operational problem to solve, Ideal Clarity can help you find
                  your way!&quot;
                </p>
              </blockquote>

              {/* Client info */}
              <div className="flex items-start gap-3 pt-4 border-t border-muted">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm">
                  HB
                </div>
                <div>
                  <p className="font-semibold text-foreground">Hannah Bailey</p>
                  <p className="text-sm text-muted-foreground">Founder, The Studio Northwood</p>
                </div>
              </div>

              {/* Verification badge */}
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Verified Client</span>
              </div>
            </Card>

            {/* Placeholder for future testimonials */}
            <Card className="p-8 bg-white border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg text-foreground/60 italic mb-4 leading-relaxed">
                &quot;Your success story could be here...&quot;
              </p>
              <p className="text-sm text-foreground/50">
                Be among the first to experience the transformation from planning to action.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
