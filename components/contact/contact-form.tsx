"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoLink = `mailto:idealclaritysolutions@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Question from Website",
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`

    // Open mailto link
    window.location.href = mailtoLink

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
      setSubmitStatus("success")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-accent mb-2">Or Send a Message</h2>
      <p className="text-muted-foreground mb-6">Have a quick question? Send me a message and I&apos;ll get back to you.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-accent font-medium">
            Your Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border-border focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-accent font-medium">
            Your Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="border-border focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-accent font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="border-border focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-accent font-medium">
            Your Message *
          </Label>
          <Textarea
            id="message"
            placeholder="What would you like to know?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="border-border focus:border-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === "success" && (
          <p className="text-sm text-green-600 text-center">
            Your email client should open. Thank you for reaching out!
          </p>
        )}
      </form>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          Ready to take action?{" "}
          <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank" className="text-primary hover:text-primary/80 font-medium">
            Book your free strategy call
          </Link>
        </p>
      </div>
    </div>
  )
}
