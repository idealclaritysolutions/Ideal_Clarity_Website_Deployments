import { Button } from "@/components/ui/button"
import { Calendar, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export function OfferingsCallToAction() {
  return (
    <>
      {/* Still Not Sure Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <div className="inline-block bg-secondary/10 px-5 py-2 rounded-full mb-6">
                <p className="text-sm font-semibold text-secondary uppercase tracking-wide">Need Help Deciding?</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6">
                Still Not Sure Which Path Is <span className="text-accent">Right?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">That's okay. You don't have to decide alone.</p>
            </div>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-10 md:p-12 rounded-3xl border-2 border-border shadow-lg space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Book a free 30-minute call. We'll talk through where you are, what you're facing, and I'll tell you
                honestly which option fits — or if this isn't the right fit at all.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                No pressure. No pitch. Just clarity.
              </p>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-12 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold"
              >
                <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Free Call
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Limited availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full">
              <AlertCircle className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wide">Consider This</span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-14 space-y-8">
              <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed">
                <p>
                  You've been thinking about this for weeks. Maybe months. The same questions on repeat:{" "}
                  <span className="italic font-medium">
                    Stay or go? This path or that one? Play it safe or finally go after what I really want?
                  </span>
                </p>

                <p className="font-bold text-xl md:text-2xl">
                  You're not stuck because you're incapable. You're stuck because you can't see clearly — and no amount
                  of thinking alone is going to fix that.
                </p>

                <p className="text-2xl md:text-3xl font-bold pt-4">Let's fix it together.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="text-lg md:text-xl rounded-full bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-xl hover:scale-105 transition-all px-12 py-8 font-bold"
              >
                <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                  Book Free 30-Min Call
                </Link>
              </Button>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-sm md:text-base text-white/90">Free 30-minute consultation • No commitment required</p>
              <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-white">
                <Clock className="w-5 h-5" />
                <span>Only 3 spots available this month • Book now to secure your session</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
