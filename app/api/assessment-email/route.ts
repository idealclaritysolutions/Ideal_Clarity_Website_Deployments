import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] =================================")
    console.log("[v0] API route called: /api/assessment-email")

    const { email, isFearBased, answers } = await request.json()

    console.log("[v0] Email:", email)
    console.log("[v0] isFearBased:", isFearBased)

    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] CRITICAL: MAILERLITE_API_KEY not found in environment")
      return NextResponse.json({ success: false, error: "MailerLite API key not configured" }, { status: 500 })
    }

    console.log("[v0] MailerLite API key found")

    // Determine group based on assessment result
    const groupId = isFearBased ? "123456789" : "987654321"
    const groupName = isFearBased ? "Fear-Based Assessment" : "Constraint-Based Assessment"

    console.log("[v0] Adding subscriber to group:", groupName, `(${groupId})`)

    const subscriberData = {
      email: email,
      fields: {
        assessment_type: isFearBased ? "fear-based" : "constraint-based",
        assessment_date: new Date().toISOString(),
      },
      groups: [groupId],
    }

    console.log("[v0] Making MailerLite API request...")

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(subscriberData),
    })

    console.log("[v0] MailerLite response status:", response.status)

    const data = await response.json()
    console.log("[v0] MailerLite response:", JSON.stringify(data, null, 2))

    if (!response.ok) {
      console.error("[v0] MailerLite API error:", data)
      return NextResponse.json(
        {
          success: false,
          error: `MailerLite API error: ${response.status}`,
          details: data,
        },
        { status: response.status },
      )
    }

    console.log("[v0] =================================")
    console.log("[v0] SUCCESS! Subscriber added to MailerLite")
    console.log("[v0] Email:", email)
    console.log("[v0] Group:", groupName)
    console.log("[v0] The automation should trigger now!")
    console.log("[v0] =================================")

    return NextResponse.json({
      success: true,
      message: "Subscriber added successfully",
      data: data,
    })
  } catch (error) {
    console.error("[v0] ERROR in API route:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
