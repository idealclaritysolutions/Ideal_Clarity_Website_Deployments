import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "MailerLite API key not found" }, { status: 500 })
    }

    console.log("[v0] Fetching MailerLite groups...")

    const response = await fetch("https://connect.mailerlite.com/api/groups", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] MailerLite API error:", errorText)
      return NextResponse.json({ error: `MailerLite API error: ${errorText}` }, { status: response.status })
    }

    const data = await response.json()
    console.log("[v0] MailerLite response:", data)

    const allGroups = data.data.map((group: any) => ({
      id: group.id,
      name: group.name,
    }))

    const assessmentGroups = allGroups.filter(
      (group: any) => group.name.toLowerCase().includes("fear") || group.name.toLowerCase().includes("constraint"),
    )

    return NextResponse.json({
      allGroups,
      assessmentGroups,
    })
  } catch (error: any) {
    console.error("[v0] Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
