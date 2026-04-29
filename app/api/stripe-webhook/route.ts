import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ""

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        const customerEmail = session.customer_email || session.customer_details?.email

        if (customerEmail) {
          // Send the PDF via email using Resend
          await sendPurchaseEmail(customerEmail, session.id)
        }
        break
      }
      
      case "payment_intent.succeeded": {
        // Handle successful payment
        console.log("Payment succeeded:", event.data.object.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}

async function sendPurchaseEmail(email: string, sessionId: string) {
  // Use Resend to send the PDF
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY")
    return
  }

  const downloadUrl = `${process.env.NEXT_PUBLIC_URL || "https://idealclarity.com"}/api/deliver-pdf?session=${sessionId}`

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
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
            <p style="color: #666; font-size: 14px;">This link is valid for 7 days. If you have any issues, reply to this email.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #999; font-size: 12px;">
              Ideal Clarity Solutions<br />
              Questions? Reply to this email.
            </p>
          </div>
        `,
      }),
    })
  } catch (error) {
    console.error("Failed to send purchase email:", error)
  }
}
