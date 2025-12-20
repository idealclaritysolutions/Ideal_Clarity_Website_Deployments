"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle2, X } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

interface NewsletterDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterDialog({ isOpen, onClose }: NewsletterDialogProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      document.addEventListener("keydown", handleEscape)
      return () => {
        document.body.style.overflow = ""
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await subscribeToNewsletter(email)

    if (result.success) {
      setSuccess(true)
      setEmail("")
      setTimeout(() => {
        onClose()
        setSuccess(false)
      }, 2000)
    } else {
      setError(result.error || "Failed to subscribe. Please try again.")
    }

    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-lg shadow-lg max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Join The Clarity Guide</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Get weekly insights on making confident career decisions.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <p className="text-lg font-semibold">Successfully subscribed!</p>
            <p className="text-sm text-muted-foreground">Check your inbox for a welcome email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              <Mail className="h-4 w-4 mr-2" />
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
