import type { Metadata } from "next"
import { PaidGuideGate } from "@/components/resources/paid-guide-gate"

export const metadata: Metadata = {
  title: "Running Your Business While Employed | The $27 Playbook",
  description: "The real-time playbook for corporate professionals building a business on the side. Includes daily schedules, client acquisition messages, stealth-mode tactics, and systems.",
}

export default function BusinessWhileEmployedPage() {
  return <PaidGuideGate />
}
