import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function VSLFooter() {
  return (
    <footer className="py-10 bg-[#0f141c] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2026 Ideal Clarity Solutions. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="mailto:idealclaritysolutions@gmail.com"
              className="text-gray-500 hover:text-[#d4a574] transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </Link>
            <Link
              href="https://instagram.com/idealclarity"
              target="_blank"
              className="text-gray-500 hover:text-[#d4a574] transition-colors flex items-center gap-2 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden sm:inline">@idealclarity</span>
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-[#d4a574] transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
