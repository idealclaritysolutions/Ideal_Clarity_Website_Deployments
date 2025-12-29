"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function GetGroupsPage() {
  const [loading, setLoading] = useState(false)
  const [groups, setGroups] = useState<any>(null)
  const [error, setError] = useState<string>("")

  const fetchGroups = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/get-mailerlite-groups")
      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setGroups(data)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4">MailerLite Group IDs</h1>
        <p className="text-muted-foreground mb-6">Click the button below to fetch your MailerLite group IDs</p>

        <Button onClick={fetchGroups} disabled={loading} className="mb-6">
          {loading ? "Fetching..." : "Get Group IDs"}
        </Button>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {groups && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">All Groups:</h2>
              <div className="space-y-2">
                {groups.allGroups.map((group: any, index: number) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <p className="font-medium">
                      {index + 1}. {group.name}
                    </p>
                    <p className="text-sm font-mono text-primary">ID: {group.id}</p>
                  </div>
                ))}
              </div>
            </div>

            {groups.assessmentGroups.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-3 text-green-900">Assessment Groups Found:</h2>
                {groups.assessmentGroups.map((group: any, index: number) => (
                  <div key={index} className="mb-2">
                    <p className="text-green-900">
                      ✓ {group.name}: <span className="font-mono font-bold">{group.id}</span>
                    </p>
                  </div>
                ))}
                <p className="text-sm text-green-700 mt-4">Copy these Group IDs and share them with me!</p>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}
