"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/products"
import { CheckoutButton } from "./checkout-button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface ServiceSelectionDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ServiceSelectionDialog({ isOpen, onClose }: ServiceSelectionDialogProps) {
  const visibleProducts = PRODUCTS.filter((product) => !product.hidden)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Choose Your Path</DialogTitle>
          <p className="text-muted-foreground">Each option is designed to meet you where you are</p>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
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
        </div>

        <div className="mt-6 text-center pb-2">
          <p className="text-sm text-muted-foreground mb-3">Not sure which package is right?</p>
          <Button variant="outline" asChild>
            <a href="https://calendly.com/idealclaritysolutions/30min" target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
