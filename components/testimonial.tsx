import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const VerifiedBadge = () => (
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
)

const testimonials = [
  {
    initials: "LS",
    name: "Lola S.",
    company: "Rapid Reinvent Hair Treatment",
    quote:
      "I have started 3 businesses in the last 3 years and most times, the hardest part about starting was aligning on the path that is most authentic to me and not create another business that most people already built. With Chi-Chi, I was able to find my area of genius and also unlock the mental blocks that were holding me back from fully monetizing my business in a way that truly reflects my value. I've 300x'd my revenue so far.",
  },
  {
    initials: "JG",
    name: "James G.",
    company: "Koolkrowd",
    quote:
      "Chi-Chi is a consummate professional who truly listens and provides expert advice tailored to your level of experience. Her breadth of knowledge and thoughtful guidance make working with her a great experience.",
  },
  {
    initials: "A",
    name: "Anonymous",
    company: "Self Employed",
    quote:
      "Working with Chi-Chi made me uncomfortable in the best way possible, by letting me know that I was rationalizing and making excuses about why I hadn't started my business. Reflecting on my true blockers and working on them is something I can't take for granted.",
    anonymous: true,
  },
  {
    initials: "HB",
    name: "Hannah Bailey",
    company: "The Studio Northwood",
    quote:
      "Chi-Chi at Ideal Clarity helped me identify some decision making tools and exercises to clarify values as I'm weighing some big decisions. Her guidance helped reframe and clarify next steps in a valuable way. If you have a business decision or operational problem to solve, Ideal Clarity can help you find your way!",
  },
]

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">What Happens When You Remove The Block</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative p-8 bg-white shadow-xl border-0 overflow-hidden flex flex-col">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="mb-6 flex-1">
                  <p className="text-base text-foreground leading-relaxed font-medium text-pretty">
                    &quot;{t.quote}&quot;
                  </p>
                </blockquote>

                {/* Client info */}
                <div className="flex items-start gap-3 pt-4 border-t border-muted">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.anonymous ? "Anonymous" : t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </div>

                <VerifiedBadge />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
