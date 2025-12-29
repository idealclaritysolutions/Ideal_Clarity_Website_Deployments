"use server"

export async function sendAssessmentResultEmail(email: string, isFearBased: boolean, answers: Record<number, string>) {
  console.log("[v0] =================================")
  console.log("[v0] Starting email process for:", email)
  console.log("[v0] Assessment type:", isFearBased ? "Fear-Based" : "Constraint-Based")
  console.log("[v0] =================================")

  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] CRITICAL ERROR: MAILERLITE_API_KEY is not set!")
      return {
        success: false,
        error: "MailerLite API key not configured",
      }
    }

    console.log("[v0] MailerLite API key found:", apiKey.substring(0, 10) + "...")

    // Determine which group to add subscriber to
    const groupId = isFearBased ? "123456789" : "987654321"
    const groupName = isFearBased ? "Fear-Based Assessment" : "Constraint-Based Assessment"

    console.log("[v0] Target group:", groupName)
    console.log("[v0] Group ID:", groupId)

    // Add subscriber to MailerLite group
    const subscriberData = {
      email: email,
      fields: {
        assessment_type: isFearBased ? "fear-based" : "constraint-based",
        assessment_date: new Date().toISOString(),
      },
      groups: [groupId],
    }

    console.log("[v0] Sending request to MailerLite API...")
    console.log("[v0] Request data:", JSON.stringify(subscriberData, null, 2))

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
    console.log("[v0] MailerLite response ok?:", response.ok)

    const responseText = await response.text()
    console.log("[v0] MailerLite raw response:", responseText)

    let data
    try {
      data = JSON.parse(responseText)
      console.log("[v0] MailerLite parsed response:", JSON.stringify(data, null, 2))
    } catch (e) {
      console.error("[v0] Failed to parse MailerLite response as JSON")
      data = { message: responseText }
    }

    if (!response.ok) {
      console.error("[v0] MailerLite API error:", data)
      return {
        success: false,
        error: `MailerLite API error: ${response.status} - ${JSON.stringify(data)}`,
      }
    }

    console.log("[v0] =================================")
    console.log("[v0] SUCCESS! Subscriber added to MailerLite")
    console.log("[v0] Email:", email)
    console.log("[v0] Group:", groupName)
    console.log("[v0] The automation should trigger now!")
    console.log("[v0] =================================")

    return {
      success: true,
      message: "Subscriber added successfully",
      data: data,
    }
  } catch (error) {
    console.error("[v0] =================================")
    console.error("[v0] CRITICAL ERROR in sendAssessmentResultEmail:")
    console.error("[v0] Error:", error)
    console.error("[v0] =================================")
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

export async function sendPurchaseOnboardingEmail(
  email: string,
  purchaseDetails: {
    packageName: string
    amount: number
    paymentPlan?: boolean
  },
) {
  console.log("[v0] =================================")
  console.log("[v0] Starting purchase onboarding email for:", email)
  console.log("[v0] Package:", purchaseDetails.packageName)
  console.log("[v0] =================================")

  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error("[v0] CRITICAL ERROR: MAILERLITE_API_KEY is not set!")
      return { success: false, error: "MailerLite API key not configured" }
    }

    // Add to a "Purchased" group - you'll need to create this group and add its ID
    const purchaseGroupId = "111222333" // Your Newsletter Subscribers group for now

    const subscriberData = {
      email: email,
      fields: {
        purchased_package: purchaseDetails.packageName,
        purchase_amount: purchaseDetails.amount.toString(),
        purchase_date: new Date().toISOString(),
      },
      groups: [purchaseGroupId],
    }

    console.log("[v0] Sending purchase data to MailerLite...")

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(subscriberData),
    })

    console.log("[v0] Purchase email response status:", response.status)
    const data = await response.json()
    console.log("[v0] Purchase email response:", data)

    if (!response.ok) {
      console.error("[v0] MailerLite API error:", data)
      return { success: false, error: `MailerLite API error: ${response.status}` }
    }

    console.log("[v0] SUCCESS! Purchase subscriber added to MailerLite")
    return { success: true, message: "Purchase onboarding subscriber added", data }
  } catch (error) {
    console.error("[v0] CRITICAL ERROR in sendPurchaseOnboardingEmail:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
