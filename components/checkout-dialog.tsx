"use client"

import { useCallback, useState, useEffect } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { startCheckoutSession } from "@/app/actions/stripe"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutDialogProps {
  productId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CheckoutDialog({ productId, open, onOpenChange }: CheckoutDialogProps) {
  const router = useRouter()
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onOpenChange(false)
      }
      document.addEventListener("keydown", handleEscape)
      return () => {
        document.body.style.overflow = ""
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [open, onOpenChange])

  const fetchClientSecret = useCallback(async () => {
    const clientSecret = await startCheckoutSession(productId)
    return clientSecret
  }, [productId])

  const handleComplete = useCallback(() => {
    setCheckoutComplete(true)
    onOpenChange(false)
    router.push("/checkout/success")
  }, [onOpenChange, router])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-background border border-border rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Complete Your Purchase</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div id="checkout" className="p-4">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{
              fetchClientSecret,
              onComplete: handleComplete,
            }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  )
}
