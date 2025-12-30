"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface AnalyticsData {
  totalCompletions: number
  resultBreakdown: Array<{
    result_type: string
    count: number
    percentage: number
  }>
  dailyTrend: Array<{
    date: string
    completions: number
    fear_based: number
    constraint_based: number
    mixed: number
    unclear: number
  }>
  averageTime: {
    avg_seconds: number
    min_seconds: number
    max_seconds: number
  }
  deviceBreakdown: Array<{
    device_type: string
    count: number
  }>
  recentCompletions: Array<{
    id: number
    completed_at: string
    result_type: string
    user_name: string
    time_to_complete: number
    device_type: string
  }>
}

const COLORS = {
  "fear-based": "hsl(var(--chart-1))",
  "constraint-based": "hsl(var(--chart-2))",
  mixed: "hsl(var(--chart-3))",
  unclear: "hsl(var(--chart-4))",
}

export function AssessmentAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState(30)
  const [error, setError] = useState<string | null>(null)

  const fetchAnalytics = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/analytics?days=${timeRange}`)
      const result = await response.json()

      if (result.success) {
        setData(result.data)
      } else {
        setError(result.error || "Failed to load analytics")
      }
    } catch (err) {
      setError("Failed to load analytics")
      console.error("Error fetching analytics:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const formatTime = (seconds: number) => {
    if (!seconds) return "N/A"
    const mins = Math.floor(seconds / 60)
    const secs = Math.round(seconds % 60)
    return `${mins}m ${secs}s`
  }

  const formatResultType = (type: string) => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mb-4" />
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="container mx-auto py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle>Error Loading Analytics</CardTitle>
            <CardDescription>{error || "No data available"}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={fetchAnalytics}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assessment Analytics</h1>
          <p className="text-muted-foreground">Track Facts or Fear assessment performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant={timeRange === 7 ? "default" : "outline"} onClick={() => setTimeRange(7)}>
            7 Days
          </Button>
          <Button variant={timeRange === 30 ? "default" : "outline"} onClick={() => setTimeRange(30)}>
            30 Days
          </Button>
          <Button variant={timeRange === 90 ? "default" : "outline"} onClick={() => setTimeRange(90)}>
            90 Days
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Completions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.totalCompletions}</div>
            <p className="text-xs text-muted-foreground mt-1">Last {timeRange} days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Completion Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatTime(data.averageTime.avg_seconds)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Range: {formatTime(data.averageTime.min_seconds)} - {formatTime(data.averageTime.max_seconds)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Most Common Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.resultBreakdown[0] ? formatResultType(data.resultBreakdown[0].result_type) : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{data.resultBreakdown[0]?.percentage}% of completions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Math.round(data.totalCompletions / timeRange)}</div>
            <p className="text-xs text-muted-foreground mt-1">Completions per day</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="breakdown">Result Breakdown</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Completions Trend</CardTitle>
              <CardDescription>Assessment completions over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  completions: {
                    label: "Total Completions",
                    color: "hsl(var(--chart-1))",
                  },
                  fear_based: {
                    label: "Fear-Based",
                    color: "hsl(var(--chart-2))",
                  },
                  constraint_based: {
                    label: "Constraint-Based",
                    color: "hsl(var(--chart-3))",
                  },
                  mixed: {
                    label: "Mixed",
                    color: "hsl(var(--chart-4))",
                  },
                  unclear: {
                    label: "Unclear",
                    color: "hsl(var(--chart-5))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.dailyTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) =>
                        new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                      }
                    />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="completions"
                      stroke="var(--color-completions)"
                      name="Total"
                      strokeWidth={2}
                    />
                    <Line type="monotone" dataKey="fear_based" stroke="var(--color-fear_based)" name="Fear-Based" />
                    <Line
                      type="monotone"
                      dataKey="constraint_based"
                      stroke="var(--color-constraint_based)"
                      name="Constraint-Based"
                    />
                    <Line type="monotone" dataKey="mixed" stroke="var(--color-mixed)" name="Mixed" />
                    <Line type="monotone" dataKey="unclear" stroke="var(--color-unclear)" name="Unclear" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Result Distribution</CardTitle>
                <CardDescription>Percentage of each result type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    count: {
                      label: "Count",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.resultBreakdown}
                        dataKey="count"
                        nameKey="result_type"
                        cx="50%"
                        cy="50%"
                        label={(entry) => `${formatResultType(entry.result_type)}: ${entry.percentage}%`}
                      >
                        {data.resultBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[entry.result_type as keyof typeof COLORS]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Result Counts</CardTitle>
                <CardDescription>Total completions by result type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    count: {
                      label: "Count",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.resultBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="result_type" tickFormatter={formatResultType} />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>Assessment completions by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  count: {
                    label: "Count",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.deviceBreakdown}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="device_type" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Completions</CardTitle>
              <CardDescription>Last 20 assessment completions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data.recentCompletions.map((completion) => (
                  <div key={completion.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{completion.user_name || "Anonymous"}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatResultType(completion.result_type)}
                        {completion.time_to_complete && ` • ${formatTime(completion.time_to_complete)}`}
                        {completion.device_type && ` • ${completion.device_type}`}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(completion.completed_at).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
