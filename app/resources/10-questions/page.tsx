import type { Metadata } from "next"
import { TenQuestionsEbook } from "@/components/resources/ten-questions-ebook"

export const metadata: Metadata = {
  title: "10 Questions to Identify Your Blockers | Ideal Clarity",
  description: "The fastest way to see what's really stopping you from starting your business. Discover which of the 3 blocks is keeping you stuck.",
}

export default function TenQuestionsPage() {
  return <TenQuestionsEbook />
}
