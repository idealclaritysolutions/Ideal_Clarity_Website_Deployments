import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

function parseReferrerSource(referrer: string): string {
  if (!referrer || referrer === "direct") return "Direct"

  const url = referrer.toLowerCase()

  if (url.includes("instagram.com") || url.includes("ig.me")) return "Instagram"
  if (url.includes("tiktok.com")) return "TikTok"
  if (url.includes("facebook.com") || url.includes("fb.com")) return "Facebook"
  if (url.includes("twitter.com") || url.includes("t.co")) return "Twitter/X"
  if (url.includes("linkedin.com")) return "LinkedIn"
  if (url.includes("youtube.com")) return "YouTube"
  if (url.includes("google.com")) return "Google Search"

  // Extract domain name for other sources
  try {
    const domain = new URL(referrer).hostname.replace("www.", "")
    return domain
  } catch {
    return "Other"
  }
}

export async function POST(request: Request) {
  try {
    const { resultType, userName, userEmail, answers, timeToComplete, deviceType, referrer } = await request.json()

    const referrerSource = parseReferrerSource(referrer)

    const result = await sql`
      INSERT INTO assessment_completions (
        result_type,
        name,
        email,
        answers,
        completion_time_seconds,
        device_type,
        referrer
      ) VALUES (
        ${resultType},
        ${userName || null},
        ${userEmail || null},
        ${JSON.stringify(answers)},
        ${timeToComplete || null},
        ${deviceType || null},
        ${referrerSource}
      )
      RETURNING id, completed_at
    `

    return NextResponse.json({
      success: true,
      data: result[0],
    })
  } catch (error) {
    console.error("Error tracking assessment:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to track assessment",
      },
      { status: 500 },
    )
  }
}
