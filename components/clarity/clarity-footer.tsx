import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function ClarityFooter() {
  return (
    <footer className="bg-[#1A2332] px-6 py-12 border-t border-[#B8935F]/15">
      <div className="mx-auto max-w-[820px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-sm text-[#FAF7F0]/50">© 2026 Ideal Clarity Solutions</p>

          <div className="flex items-center gap-6">
            <Link
              href="mailto:idealclaritysolutions@gmail.com"
              className="text-[#FAF7F0]/60 hover:text-[#B8935F] transition-colors flex items-center gap-2 text-sm font-sans"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </Link>
            <Link
              href="https://instagram.com/idealclarity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F0]/60 hover:text-[#B8935F] transition-colors flex items-center gap-2 text-sm font-sans"
            >
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </Link>
            <Link
              href="https://www.idealclarity.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7F0]/60 hover:text-[#B8935F] transition-colors text-sm font-sans"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
