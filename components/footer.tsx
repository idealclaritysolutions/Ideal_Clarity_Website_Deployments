import Link from "next/link"
import { Mail, MessageCircle, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent/95 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 mb-4">
          <Link
            href="mailto:idealclaritysolutions@gmail.com"
            className="flex items-center gap-2 text-primary hover:text-primary/80 underline transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send an email
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link
            href="https://wa.me/14796575461"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 underline transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Text on WhatsApp
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link
            href="https://www.linkedin.com/in/chidinma-cynthia-jones-csm-psm-bb78aa15a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 underline transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </Link>
        </div>
        <div className="text-center mb-4">
          <Link href="/privacy-policy" className="text-white/80 hover:text-white underline text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="mb-2 text-center">© {new Date().getFullYear()} Ideal Clarity. All rights reserved.</p>
      </div>
    </footer>
  )
}
