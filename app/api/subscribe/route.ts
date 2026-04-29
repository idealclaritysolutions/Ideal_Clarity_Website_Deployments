import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email, name, source, leadMagnet } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Subscribe to MailerLite
    const mailerLiteRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name || "",
          source: source || "vsl",
          lead_magnet: leadMagnet || "",
        },
        status: "active",
      }),
    })

    if (!mailerLiteRes.ok) {
      const error = await mailerLiteRes.json()
      return NextResponse.json(
        { error: error.message || "Failed to subscribe" },
        { status: 400 }
      )
    }

    // Also store in database for your records
    const dbRes = await fetch(
      `${process.env.DATABASE_URL || process.env.POSTGRES_URL}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          subscribed_at: new Date().toISOString(),
        }),
      }
    )

    return NextResponse.json(
      { success: true, message: "Subscribed successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Subscribe error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
