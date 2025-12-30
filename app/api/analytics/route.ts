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
      WHERE completed_at >= NOW() - INTERVAL '${days} days'
    `

    // Get results breakdown
    const resultBreakdown = await sql`
      SELECT 
        result_type,
        COUNT(*) as count,
        ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) as percentage
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '${days} days'
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
      WHERE completed_at >= NOW() - INTERVAL '${days} days'
      GROUP BY DATE(completed_at)
      ORDER BY date ASC
    `

    // Get average completion time
    const avgTimeResult = await sql`
      SELECT 
        AVG(time_to_complete) as avg_seconds,
        MIN(time_to_complete) as min_seconds,
        MAX(time_to_complete) as max_seconds
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '${days} days'
        AND time_to_complete IS NOT NULL
    `

    // Get device breakdown
    const deviceBreakdown = await sql`
      SELECT 
        device_type,
        COUNT(*) as count
      FROM assessment_completions
      WHERE completed_at >= NOW() - INTERVAL '${days} days'
        AND device_type IS NOT NULL
      GROUP BY device_type
      ORDER BY count DESC
    `

    // Get recent completions
    const recentCompletions = await sql`
      SELECT 
        id,
        completed_at,
        result_type,
        user_name,
        time_to_complete,
        device_type
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
        recentCompletions,
      },
    })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch analytics" }, { status: 500 })
  }
}
