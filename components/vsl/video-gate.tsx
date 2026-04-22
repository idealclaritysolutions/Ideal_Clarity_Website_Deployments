"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface VideoGateProps {
  onEmailCaptured: (email: string, name: string) => void
  pdfName: string
}

export function VideoGate({ onEmailCaptured, pdfName }: VideoGateProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Subscribe to MailerLite
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          source: "vsl-video-gate",
          leadMagnet: pdfName,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to subscribe")
      }

      onEmailCaptured(email, name)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        {/* Header with close button */}
        <div className="bg-gradient-to-r from-[#1a2332] to-[#2d3e52] px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Unlock the Free Training</h2>
          <button
            onClick={() => window.history.back()}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              First Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4a574] hover:bg-[#c49560] text-[#1a2332] font-bold py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Unlocking..." : "Get Instant Access"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We&apos;ll send you the free training + &quot;{pdfName}&quot; PDF. No spam, unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  )
}
