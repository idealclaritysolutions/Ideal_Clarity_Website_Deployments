"use client"

import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/products"

interface CheckoutButtonProps {
  productId: string
  buttonText?: string
  variant?: "default" | "outline" | "secondary"
  className?: string
  size?: "default" | "sm" | "lg"
}

export function CheckoutButton({
  productId,
  buttonText = "Book Now",
  variant = "default",
  className = "",
  size = "default",
}: CheckoutButtonProps) {
  const handleCheckout = () => {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) {
      console.error("[v0] Product not found:", productId)
      return
    }

    window.location.href = product.stripePaymentLink
  }

  return (
    <Button onClick={handleCheckout} variant={variant} className={className} size={size}>
      {buttonText}
    </Button>
  )
}
