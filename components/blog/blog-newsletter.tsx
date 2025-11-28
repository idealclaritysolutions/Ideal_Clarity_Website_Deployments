"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Newsletter signup error:", error)
      setStatus("error")
    }
  }

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Clarity in Your Inbox</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Weekly insights on navigating career transitions, making better decisions, and building momentum. No fluff,
            just clarity.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading" || status === "success"}
              className="flex-1 h-12 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="text-sm text-primary mt-4 font-medium">Thanks for subscribing! Check your email.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive mt-4">Something went wrong. Please try again.</p>
          )}

          <p className="text-sm text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
