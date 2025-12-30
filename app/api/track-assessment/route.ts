import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const { resultType, name, answers, completionTime, deviceType, referrer } = await request.json()

    const result = await sql`
      INSERT INTO assessment_completions (
        result_type,
        name,
        answers,
        completion_time_seconds,
        device_type,
        referrer
      ) VALUES (
        ${resultType},
        ${name || null},
        ${JSON.stringify(answers)},
        ${completionTime || null},
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
    console.error("[v0] Error tracking assessment:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to track assessment",
      },
      { status: 500 },
    )
  }
}
