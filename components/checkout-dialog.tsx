"use client"

import { useCallback, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { startCheckoutSession } from "@/app/actions/stripe"
import { useRouter } from "next/navigation"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutDialogProps {
  productId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CheckoutDialog({ productId, open, onOpenChange }: CheckoutDialogProps) {
  const router = useRouter()
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  const fetchClientSecret = useCallback(async () => {
    const clientSecret = await startCheckoutSession(productId)
    return clientSecret
  }, [productId])

  const handleComplete = useCallback(() => {
    setCheckoutComplete(true)
    onOpenChange(false)
    router.push("/checkout/success")
  }, [onOpenChange, router])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div id="checkout">
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
      </DialogContent>
    </Dialog>
  )
}
