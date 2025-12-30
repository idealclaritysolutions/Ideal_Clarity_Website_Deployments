import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "30")

    // Get total completions
    const totalResult = await sql`
      SELECT COUNT(*) as total
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
    `

    // Get results breakdown
    const resultBreakdown = await sql`
      SELECT 
        result_type,
        COUNT(*) as count,
        ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) as percentage
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY result_type
      ORDER BY count DESC
    `

    // Get daily trend
    const dailyTrend = await sql`
      SELECT 
        DATE(completed_at) as date,
        COUNT(*) as completions,
        COUNT(CASE WHEN result_type = 'fear-based' THEN 1 END) as fear_based,
        COUNT(CASE WHEN result_type = 'constraint-based' THEN 1 END) as constraint_based,
        COUNT(CASE WHEN result_type = 'mixed' THEN 1 END) as mixed,
        COUNT(CASE WHEN result_type = 'unclear' THEN 1 END) as unclear
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY DATE(completed_at)
      ORDER BY date ASC
    `

    // Get average completion time
    const avgTimeResult = await sql`
      SELECT 
        AVG(completion_time_seconds) as avg_seconds,
        MIN(completion_time_seconds) as min_seconds,
        MAX(completion_time_seconds) as max_seconds
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
        AND completion_time_seconds IS NOT NULL
    `

    // Get device breakdown
    const deviceBreakdown = await sql`
      SELECT 
        device_type,
        COUNT(*) as count
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
        AND device_type IS NOT NULL
      GROUP BY device_type
      ORDER BY count DESC
    `

    // Get referrer breakdown
    const referrerBreakdown = await sql`
      SELECT 
        referrer,
        COUNT(*) as count,
        ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) as percentage
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '1 day' * ${days}
        AND referrer IS NOT NULL
      GROUP BY referrer
      ORDER BY count DESC
    `

    // Get recent completions
    const recentCompletions = await sql`
      SELECT 
        id,
        completed_at,
        result_type,
        name,
        email,
        completion_time_seconds,
        device_type,
        referrer
      FROM assessment_completions
      ORDER BY completed_at DESC
      LIMIT 20
    `

    return NextResponse.json({
      success: true,
      data: {
        totalCompletions: Number.parseInt(totalResult[0].total),
        resultBreakdown,
        dailyTrend,
        averageTime: avgTimeResult[0],
        deviceBreakdown,
        referrerBreakdown,
        recentCompletions,
      },
    })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch analytics",
      },
      { status: 500 },
    )
  }
}
