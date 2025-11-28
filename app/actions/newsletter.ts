"use server"

import { sql } from "@/lib/db"

export async function subscribeToNewsletter(email: string) {
  try {
    await sql`
      INSERT INTO newsletter_subscribers (email, source)
      VALUES (${email}, 'website')
      ON CONFLICT (email) DO NOTHING
    `

    if (process.env.MAILERLITE_API_KEY) {
      await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          fields: {
            source: "website",
          },
        }),
      })
    }

    return { success: true, message: "Thanks for subscribing! Check your email for confirmation." }
  } catch (error: any) {
    console.error("[v0] Newsletter subscription error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}

export async function getAllSubscribers() {
  try {
    const subscribers = await sql`
      SELECT * FROM newsletter_subscribers 
      ORDER BY subscribed_at DESC
    `
    return subscribers
  } catch (error) {
    console.error("[v0] Failed to fetch subscribers:", error)
    return []
  }
}
