import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] =================================")
    console.log("[v0] API route called: /api/assessment-email")

    const { email, firstName, q3Answer, deadline, isFearBased, block, answers } = await request.json()

    console.log("[v0] Email:", email)
    console.log("[v0] First Name:", firstName)
    console.log("[v0] isFearBased:", isFearBased)
    console.log("[v0] block:", block)

    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] CRITICAL: MAILERLITE_API_KEY not found in environment")
      return NextResponse.json({ success: false, error: "MailerLite API key not configured" }, { status: 500 })
    }

    console.log("[v0] MailerLite API key found")

    // Determine group + assessment type.
    // If `block` is provided, this is the From-Idea-to-First-Offer (blocks) assessment.
    // Otherwise fall back to the original Facts-or-Fear (fear/constraint) logic.
    const BLOCK_GROUPS: Record<string, { id: string; name: string }> = {
      validation: { id: "190951354390284159", name: "Validation Block" },
      visibility: { id: "190951338378528727", name: "Visibility Block" },
      commitment: { id: "190951325913056438", name: "Commitment Block" },
    }

    let groupId: string
    let groupName: string
    let assessmentTypeLabel: string

    if (block && BLOCK_GROUPS[block]) {
      groupId = BLOCK_GROUPS[block].id
      groupName = BLOCK_GROUPS[block].name
      assessmentTypeLabel = `blocks-${block}`
    } else {
      groupId = isFearBased ? "175087415702062888" : "175087438358643867"
      groupName = isFearBased ? "Fear-Based Assessment" : "Constraint-Based Assessment"
      assessmentTypeLabel = isFearBased ? "fear-based" : "constraint-based"
    }

    console.log("[v0] Adding subscriber to group:", groupName, `(${groupId})`)

    const subscriberData = {
      email: email,
      fields: {
        name: firstName,
        first_name: firstName,
        q3_answer: q3Answer,
        deadline_date: deadline,
        assessment_type: assessmentTypeLabel,
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
