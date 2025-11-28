import { CheckCircle, Calendar, Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-6 animate-in zoom-in duration-500">
            <CheckCircle className="w-14 h-14 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Payment Confirmed!</h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to your journey toward clarity! Your payment has been successfully processed.
          </p>

          {sessionId && (
            <p className="text-sm text-muted-foreground/60 mt-2">Confirmation: {sessionId.substring(0, 20)}...</p>
          )}
        </div>

        <Card className="p-8 mb-8 bg-card">
          <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Check Your Email</h3>
                <p className="text-muted-foreground">
                  You'll receive a confirmation email with your payment receipt and booking details within the next few
                  minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Schedule Your Session</h3>
                <p className="text-muted-foreground mb-4">
                  Book your first clarity session at a time that works best for you. Choose from available slots on our
                  calendar.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                    <Calendar className="w-5 h-5" />
                    Schedule Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Prepare for Your Session</h3>
                <p className="text-muted-foreground">
                  Think about the challenges you're facing and what areas you'd like to focus on. The more specific you
                  are, the more impactful our session will be.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Get Ready for Clarity</h3>
                <p className="text-muted-foreground">
                  Show up ready to engage, ask questions, and take action. Together, we'll create a clear path forward
                  for your specific challenge.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8 bg-accent/5">
          <h2 className="text-2xl font-bold mb-4 text-center">Need Help?</h2>
          <p className="text-center text-muted-foreground mb-6">
            Have questions or need to reschedule? We're here to help!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Button asChild variant="outline" size="lg" className="gap-2 h-auto py-4 bg-transparent">
              <a href="mailto:idealclaritysolutions@gmail.com">
                <Mail className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Send an Email</div>
                  <div className="text-xs text-muted-foreground">We'll respond within 24 hours</div>
                </div>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 h-auto py-4 bg-transparent">
              <a href="https://wa.me/14796575461" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Text on WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Quick responses during business hours</div>
                </div>
              </a>
            </Button>
          </div>
        </Card>

        <div className="text-center">
          <Button asChild variant="ghost" size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
