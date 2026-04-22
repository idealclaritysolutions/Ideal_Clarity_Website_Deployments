import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Get Unstuck?</h2>
        <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
          Stop spinning your wheels. In 90 minutes, you'll have the clarity and momentum you've been missing for weeks.
        </p>
        <Card className="max-w-2xl mx-auto p-8 sm:p-10 bg-white border-0 shadow-2xl">
          <p className="text-2xl mb-2 text-accent font-bold">
            First session: <span className="text-primary">FREE</span>
          </p>
          <p className="text-lg mb-8 text-foreground/70">No commitment. Just clarity.</p>
          <Button
            asChild
            size="lg"
            className="text-lg px-12 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Your Free Session Now
            </Link>
          </Button>
          <div className="mt-6 flex items-center justify-center gap-2 text-foreground/70">
            <Clock className="w-5 h-5" />
            <p className="text-base font-medium">Limited spots available - Currently booking 2 weeks out</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
