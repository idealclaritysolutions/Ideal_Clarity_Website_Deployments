import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Ready To Stop Planning And Start Building?
        </h2>
        <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. We&apos;ll identify what&apos;s actually blocking you and map out your next 4 weeks.
        </p>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          No pitch. No pressure. Just clarity on what&apos;s in your way and how to remove it.
        </p>
        
        <Card className="max-w-2xl mx-auto p-8 sm:p-10 bg-white border-0 shadow-2xl">
          <Button
            asChild
            size="lg"
            className="text-lg px-12 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Free Strategy Call
            </Link>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-foreground/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <p className="text-base font-medium">Limited to 5 clients per month</p>
            </div>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <p className="text-base font-medium">Currently booking 2 weeks out</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
