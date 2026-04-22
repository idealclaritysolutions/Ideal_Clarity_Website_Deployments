import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProgramInvestment() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 sm:p-12 bg-white border-2 border-primary/20 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Investment</h2>
            
            <p className="text-5xl sm:text-6xl font-bold text-primary mb-2">$3,500</p>
            <p className="text-foreground/70 mb-6">for 4 weeks</p>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-foreground/70">Payment in full at enrollment.</p>
              <p className="text-sm text-foreground/70 mt-2">
                Limited to 5 clients per month.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl w-full sm:w-auto"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Free Strategy Call
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
