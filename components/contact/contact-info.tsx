import Link from "next/link"
import { Mail, MessageCircle, Linkedin, Instagram, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-accent mb-4">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed">
          The fastest way to get started is to book your free 30-minute clarity session. But if you have questions
          first, feel free to reach out through any of these channels.
        </p>
      </div>

      {/* CTA - Book Free Session */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border-2 border-primary/20">
        <h3 className="text-xl font-bold text-accent mb-3">Start Your Journey</h3>
        <p className="text-muted-foreground mb-4">
          Book your free 30-minute clarity session : no pressure, just clarity.
        </p>
        <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link href="https://calendly.com/idealclaritysolutions/free-session">Book Free Session</Link>
        </Button>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-accent mb-4">Connect With Me</h3>

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

        <Link
          href="https://www.linkedin.com/in/chidinma-cynthia-jones-csm-psm-bb78aa15a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
      </div>

      {/* Additional Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-start gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <div className="font-medium text-accent">Response Time</div>
            <div>I typically respond within 24 hours</div>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <div className="font-medium text-accent">Location</div>
            <div>Remote sessions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
