"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle2 } from "lucide-react"
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join The Clarity Guide</DialogTitle>
          <DialogDescription>Get weekly insights on making confident career decisions.</DialogDescription>
        </DialogHeader>

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
      </DialogContent>
    </Dialog>
  )
}
