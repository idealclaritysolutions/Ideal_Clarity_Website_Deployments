import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact - Ideal Clarity",
  description:
    "Ready to get unstuck? Reach out to schedule your free clarity session or ask any questions about career clarity coaching.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
