import Link from "next/link"
import { Mail, MessageCircle, Linkedin, Instagram, Clock, MessageSquare, Eye, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactInfo() {
  const callSteps = [
    { icon: MessageSquare, title: "You'll tell me:", items: ["How long you've been planning to start", "What you think is stopping you", "What you've already tried"] },
    { icon: Eye, title: "I'll show you:", items: ["The pattern you can't see from inside", "What's actually blocking you (it's usually not what you think)", "How we'd work together to remove it"] },
    { icon: Users, title: "We'll determine:", items: ["If this program is right for you", "If now is the right time", "What your next step is (whether that's enrolling or not)"] },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-accent mb-4">What Happens On The Call</h2>
      </div>

      {/* What Happens on Call */}
      <div className="space-y-4">
        {callSteps.map((step, index) => (
          <Card key={index} className="p-5 bg-muted/30 border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-accent mb-2">{step.title}</p>
                <ul className="space-y-1">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Pitch Promise */}
      <Card className="p-6 bg-secondary/5 border-2 border-secondary/20">
        <p className="text-lg font-semibold text-accent mb-2">No pitch. No pressure. Just clarity.</p>
        <p className="text-foreground/70 text-sm">
          If it&apos;s a fit and you&apos;re ready, you can enroll on the call.
          If it&apos;s not a fit, I&apos;ll tell you honestly and point you in the right direction.
        </p>
      </Card>

      {/* CTA - Book Free Session */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border-2 border-primary/20">
        <h3 className="text-xl font-bold text-accent mb-3">Book Your Call</h3>
        <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
            Book Free 30-Minute Strategy Call
          </Link>
        </Button>
      </div>

      {/* Other Ways to Reach Me */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-accent mb-4">Other Ways To Reach Me</h3>

        <Link
          href="mailto:idealclaritysolutions@gmail.com"
          className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/5 transition-all group"
        >
          <Mail className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
          <div>
            <div className="font-semibold text-accent mb-1">Email</div>
            <div className="text-sm text-muted-foreground">idealclaritysolutions@gmail.com</div>
          </div>
        </Link>

        <Link
          href="https://instagram.com/idealclarity"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/5 transition-all group"
        >
          <Instagram className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
          <div>
            <div className="font-semibold text-accent mb-1">Instagram</div>
            <div className="text-sm text-muted-foreground">@idealclarity</div>
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/chidinma-cynthia-jones-csm-psm-bb78aa15a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/5 transition-all group"
        >
          <Linkedin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
          <div>
            <div className="font-semibold text-accent mb-1">LinkedIn</div>
            <div className="text-sm text-muted-foreground">Connect professionally</div>
          </div>
        </Link>

        <Link
          href="https://wa.me/14796575461"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/5 transition-all group"
        >
          <MessageCircle className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
          <div>
            <div className="font-semibold text-accent mb-1">WhatsApp</div>
            <div className="text-sm text-muted-foreground">Chat with me directly</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
