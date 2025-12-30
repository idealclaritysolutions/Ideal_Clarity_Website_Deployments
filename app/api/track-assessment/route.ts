import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const { resultType, userName, userEmail, answers, timeToComplete, deviceType, referrer } = await request.json()

    const result = await sql`
      INSERT INTO assessment_completions (
        result_type,
        user_name,
        user_email,
        answers,
        time_to_complete,
        device_type,
        referrer
      ) VALUES (
        ${resultType},
        ${userName || null},
        ${userEmail || null},
        ${JSON.stringify(answers)},
        ${timeToComplete || null},
        ${deviceType || null},
        ${referrer || null}
      )
      RETURNING id, completed_at
    `

    return NextResponse.json({
      success: true,
      data: result[0],
    })
  } catch (error) {
    console.error("Error tracking assessment:", error)
    return NextResponse.json({ success: false, error: "Failed to track assessment" }, { status: 500 })
  }
}
