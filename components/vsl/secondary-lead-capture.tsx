"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle } from "lucide-react"

export function SecondaryLeadCapture() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          source: "vsl-secondary-capture",
          leadMagnet: "10-questions-identify-block",
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to subscribe")
      }

      setSubmitted(true)
      setEmail("")
      setName("")

      // Trigger PDF download
      window.location.href = `/api/download-pdf?type=10-questions&email=${encodeURIComponent(email)}`
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#141b27] to-[#1a2332]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-[#0f141c] border border-[#d4a574]/20 rounded-2xl p-8 sm:p-12">
          {submitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Check Your Email!</h3>
              <p className="text-gray-300">
                Your free PDF is on its way. Look for it in your inbox (and check spam just in case).
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
                Not ready to watch yet?
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Get our free guide: &quot;10 Questions to Identify Your Block&quot; and take the self-assessment now.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-[#1a2332] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-[#1a2332] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-sm text-red-300">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#d4a574] hover:bg-[#c49560] text-[#1a2332] font-bold py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {loading ? "Sending..." : "Get Free PDF"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We&apos;ll email you the PDF instantly. No spam, unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
