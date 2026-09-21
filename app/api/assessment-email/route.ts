import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

const FEAR_GROUP_ID = "175087415702062888"
const CONSTRAINT_GROUP_ID = "175087438358643867"
const MIXED_GROUP_NAME = "Facts-or-Fear: Mixed/Unclear"

let cachedMixedGroupId: string | null = null

async function mailerliteFetch(apiKey: string, path: string, init?: RequestInit) {
  return fetch(`https://connect.mailerlite.com/api${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...(init?.headers || {}),
    },
  })
}

// Mixed/Unclear takers get their own group so they are never silently dumped
// into the constraint (or fear) automation. The group is created on first use
// and its id is cached for the lifetime of the server instance.
async function resolveMixedGroupId(apiKey: string): Promise<string | null> {
  if (cachedMixedGroupId) return cachedMixedGroupId
  try {
    const res = await mailerliteFetch(apiKey, "/groups?limit=100")
    if (res.ok) {
      const data = await res.json()
      const found = (data?.data || []).find((g: { name?: string }) => g.name === MIXED_GROUP_NAME)
      if (found?.id) {
        cachedMixedGroupId = String(found.id)
        return cachedMixedGroupId
      }
    }
    const created = await mailerliteFetch(apiKey, "/groups", {
      method: "POST",
      body: JSON.stringify({ name: MIXED_GROUP_NAME }),
    })
    if (created.ok) {
      const data = await created.json()
      if (data?.data?.id) {
        cachedMixedGroupId = String(data.data.id)
        return cachedMixedGroupId
      }
    }
  } catch (error) {
    console.error("[assessment-email] Mixed group resolution failed:", error)
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, q3Answer, deadline, isFearBased, resultType, consent, block, answers } =
      await request.json()

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 })
    }

    // Consent is honored: when the visitor unchecked the marketing checkbox,
    // they are NOT added to MailerLite. Results are still shown client-side.
    if (consent === false) {
      return NextResponse.json({
        success: true,
        subscribed: false,
        message: "Consent not given; visitor not added to MailerLite",
      })
    }

    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[assessment-email] MAILERLITE_API_KEY not configured")
      return NextResponse.json({ success: false, error: "MailerLite API key not configured" }, { status: 500 })
    }

    // Determine group + assessment type.
    // If `block` is provided, this is the From-Idea-to-First-Offer (blocks) assessment.
    // Otherwise fall back to the Facts-or-Fear (fear/constraint/mixed/unclear) logic.
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
      const type: string =
        resultType === "fear" || resultType === "constraint" || resultType === "mixed" || resultType === "unclear"
          ? resultType
          : isFearBased
            ? "fear"
            : "constraint"

      if (type === "fear") {
        groupId = FEAR_GROUP_ID
        groupName = "Fear-Based Assessment"
        assessmentTypeLabel = "fear-based"
      } else if (type === "constraint") {
        groupId = CONSTRAINT_GROUP_ID
        groupName = "Constraint-Based Assessment"
        assessmentTypeLabel = "constraint-based"
      } else {
        // Mixed/Unclear: never silently dumped into the fear or constraint groups.
        const mixedGroupId = await resolveMixedGroupId(apiKey)
        if (mixedGroupId) {
          groupId = mixedGroupId
          groupName = MIXED_GROUP_NAME
        } else {
          // Fallback keeps the visitor reachable but tags the true type so the
          // wrong automation is never triggered blindly.
          groupId = CONSTRAINT_GROUP_ID
          groupName = "Constraint-Based Assessment (fallback for mixed/unclear)"
        }
        assessmentTypeLabel = type
      }
    }

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

    const response = await mailerliteFetch(apiKey, "/subscribers", {
      method: "POST",
      body: JSON.stringify(subscriberData),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error("[assessment-email] MailerLite API error:", response.status)
      return NextResponse.json(
        { success: false, error: `MailerLite API error: ${response.status}` },
        { status: response.status },
      )
    }

    return NextResponse.json({
      success: true,
      subscribed: true,
      message: "Subscriber added successfully",
    })
  } catch (error) {
    console.error("[assessment-email] ERROR:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
