"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function SecondaryLeadCapture() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#141b27] to-[#1a2332]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-[#0f141c] border border-[#d4a574]/20 rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#d4a574]/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-[#d4a574]" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Not ready to watch yet?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Take our free interactive assessment to discover which of the 3 blocks is keeping you stuck—and what to do about it.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#d4a574] hover:bg-[#c49560] text-[#1a2332] font-bold py-6 px-8 h-auto rounded-xl transition-all hover:scale-105"
          >
            <Link href="/resources/10-questions">
              Take the Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <p className="text-xs text-gray-500 mt-6">
            10 questions. 2 minutes. Instant results.
          </p>
        </div>
      </div>
    </section>
  )
}
