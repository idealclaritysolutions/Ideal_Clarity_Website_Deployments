import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

// This webhook is optional - your existing Stripe payment links work independently
// If you want to automate PDF delivery after purchase, configure this webhook in Stripe Dashboard

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    // If no webhook secret configured, just acknowledge
    if (!webhookSecret || !signature) {
      return NextResponse.json({ received: true })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle checkout completion for the $27 guide
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      const customerEmail = session.customer_email || session.customer_details?.email

      if (customerEmail && process.env.RESEND_API_KEY) {
        await sendPurchaseEmail(customerEmail)
      }
    }

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}

async function sendPurchaseEmail(email: string) {
  const downloadUrl = `${process.env.NEXT_PUBLIC_URL || "https://idealclarity.com"}/pdfs/running-business-while-employed.pdf`

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Chi-Chi Jones <hello@idealclarity.com>",
      to: email,
      subject: "Your Guide: Running Your Business While Employed",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a2332;">Your Guide is Ready!</h1>
          <p>Thank you for your purchase! Here's your copy of <strong>"Running Your Business While Employed"</strong>.</p>
          <p>
            <a href="${downloadUrl}" style="display: inline-block; background: #d4a574; color: #1a2332; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Download Your Guide
            </a>
          </p>
          <p style="color: #666; font-size: 14px;">If you have any issues, reply to this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">
            Ideal Clarity Solutions LLC<br />
            Questions? Reply to this email.
          </p>
        </div>
      `,
    }),
  })
}
