import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Eye, Users, ArrowRight } from "lucide-react"

export function ProgramNextSteps() {
  const callSteps = [
    { icon: MessageSquare, text: "You'll tell me what you've been stuck on" },
    { icon: Eye, text: "I'll show you the pattern you can't see" },
    { icon: Users, text: "I'll explain how we'd work together" },
    { icon: ArrowRight, text: "We'll determine if this is the right fit" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Next Steps</h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free 30-minute strategy call.
          </p>

          <Card className="p-8 sm:p-10 bg-white/5 border border-white/10 mb-8 text-left">
            <p className="font-semibold text-white mb-6">On this call:</p>
            <div className="space-y-4">
              {callSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-white/80">{step.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-white/90 font-semibold">
              No pitch. No pressure. Just clarity.
            </p>
            <p className="text-white/70">
              If it&apos;s a fit and you&apos;re ready, you can enroll on the call or take time to think.
            </p>
            <p className="text-white/70">
              If it&apos;s not a fit, I&apos;ll tell you honestly and point you in the right direction.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="text-lg px-12 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Your Free Strategy Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
