import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Purchase Complete | Ideal Clarity",
  description: "Thank you for your purchase! Your guide is ready.",
}

export default function PurchaseSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27] flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-8 sm:p-12 bg-white/5 border-[#d4a574]/30 border-2 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>

        <h1 className="font-serif text-3xl font-bold text-white mb-2">
          Thank You!
        </h1>
        <p className="text-gray-300 mb-8">
          Your purchase is complete. Here&apos;s what happens next:
        </p>

        {/* Steps */}
        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-[#d4a574]/20 flex items-center justify-center text-[#d4a574] font-bold shrink-0">
              1
            </div>
            <div>
              <p className="text-white font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Check Your Email
              </p>
              <p className="text-gray-400 text-sm">
                We&apos;ve sent your PDF download link to your email address.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-[#d4a574]/20 flex items-center justify-center text-[#d4a574] font-bold shrink-0">
              2
            </div>
            <div>
              <p className="text-white font-medium flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Your Guide
              </p>
              <p className="text-gray-400 text-sm">
                Click the link in your email to download &quot;Running Your Business While Employed.&quot;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-[#d4a574]/20 flex items-center justify-center text-[#d4a574] font-bold shrink-0">
              3
            </div>
            <div>
              <p className="text-white font-medium">Start Building</p>
              <p className="text-gray-400 text-sm">
                Follow the playbook. Your first client is closer than you think.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold py-6 h-auto"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min?month=2026-04" target="_blank">
              Ready for More? Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full text-gray-400 hover:text-white"
          >
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </div>

        <p className="text-gray-500 text-xs mt-8">
          Didn&apos;t receive the email? Check your spam folder or reply to the confirmation email for help.
        </p>
      </Card>
    </main>
  )
}
