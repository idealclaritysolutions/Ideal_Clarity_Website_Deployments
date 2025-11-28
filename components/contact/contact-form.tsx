"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

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
      formData.subject || "Contact Form Submission",
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
    <div className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-accent mb-2">Send a Message</h2>
      <p className="text-muted-foreground mb-6">Fill out the form below and I'll get back to you soon.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-accent font-medium">
            Your Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Chi-Chi Jones"
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
            placeholder="Tell me what you're struggling with or what questions you have..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
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
          Prefer to book directly?{" "}
          <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0 h-auto">
            <a href="https://calendly.com/idealclaritysolutions/free-session">Schedule your free session</a>
          </Button>
        </p>
      </div>
    </div>
  )
}
