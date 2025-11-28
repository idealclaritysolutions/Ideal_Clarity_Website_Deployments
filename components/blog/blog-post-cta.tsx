import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogPostCTA() {
  return (
    <Card className="my-16 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Clear on Your Next Move?</h3>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Stop going in circles. Book a free 30-minute clarity session and we'll figure out exactly what you need to do
          next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 gap-2">
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Your Free Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            <Link href="/work-with-me">View All Options</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
