import "server-only"

import Stripe from "stripe"

let stripeClient: Stripe | null = null

/**
 * Lazily instantiate the Stripe client.
 *
 * We intentionally do NOT create the client at module scope. Doing so would
 * throw during `next build` (page-data collection evaluates the module) whenever
 * STRIPE_SECRET_KEY is absent, which crashes the entire build. Creating it on
 * first use means the client is only constructed at request time, where a
 * missing key can be handled gracefully.
 */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined in environment variables")
  }

  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-11-17.clover",
    })
  }

  return stripeClient
}
