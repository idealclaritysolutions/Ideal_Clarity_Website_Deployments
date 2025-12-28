import type { Metadata } from "next"
import { FactsOrFearClient } from "./facts-or-fear-client"

export const metadata: Metadata = {
  title: "Are Your Reasons FACTS... or FEAR? | Ideal Clarity",
  description:
    "Take the 2-minute assessment and find out what's REALLY stopping you from doing the thing you keep putting off.",
  robots: "noindex, nofollow",
}

export default function FactsOrFearPage() {
  return <FactsOrFearClient />
}
