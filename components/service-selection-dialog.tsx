"use client"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/products"
import { CheckoutButton } from "./checkout-button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useEffect } from "react"

interface ServiceSelectionDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ServiceSelectionDialog({ isOpen, onClose }: ServiceSelectionDialogProps) {
  const visibleProducts = PRODUCTS.filter((product) => !product.hidden)

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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">Choose Your Path</h2>
            <p className="text-muted-foreground">Each option is designed to meet you where you are</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {visibleProducts.map((product) => (
            <Card
              key={product.id}
              className={`p-6 space-y-4 transition-all ${
                product.popular ? "border-accent border-2 shadow-lg ring-2 ring-accent/20" : "hover:border-accent/40"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    {product.popular && (
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  {product.subtitle && <p className="text-base text-accent font-semibold mt-1">{product.subtitle}</p>}
                </div>
              </div>

              {product.bestFor && (
                <div className="pb-4 border-b border-border">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Best For:</p>
                  <p className="text-sm leading-relaxed">{product.bestFor}</p>
                </div>
              )}

              {product.features && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(product.outcome || product.impact) && (
                <div className="bg-muted/60 p-4 rounded-xl space-y-3">
                  {product.outcome && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Outcome:</p>
                      <p className="text-sm leading-relaxed font-medium">{product.outcome}</p>
                    </div>
                  )}
                  {product.impact && (
                    <div className={product.outcome ? "pt-3 border-t border-border/50" : ""}>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                        Lasting Impact:
                      </p>
                      <p className="text-sm leading-relaxed font-medium">{product.impact}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-end justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-accent">${(product.priceInCents / 100).toFixed(0)}</p>
                  {product.savings && <p className="text-sm text-secondary font-semibold mt-1">{product.savings}</p>}
                </div>
                <CheckoutButton productId={product.id} buttonText="Book & Pay Now" className="px-8" />
              </div>
            </Card>
          ))}

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-3">Not sure which package is right?</p>
            <Button variant="outline" asChild>
              <a href="https://calendly.com/idealclaritysolutions/30min" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
