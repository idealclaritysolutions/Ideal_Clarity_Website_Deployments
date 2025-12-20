import type { Metadata } from "next"
import JanuaryResetClient from "./january-reset-client"

export const metadata: Metadata = {
  title: "2026 Strategy Reset Intensive | Ideal Clarity Solutions",
  description:
    "Get unstuck and start 2026 with momentum. 3-week intensive + 4 weeks accountability. Limited to 5 spots. Workshop exclusive pricing ends Dec 31.",
  robots: "noindex, nofollow", // Hide from search engines
}

export default function JanuaryResetPage() {
  return <JanuaryResetClient />
}
