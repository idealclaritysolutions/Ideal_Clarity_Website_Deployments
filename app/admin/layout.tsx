import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Admin - Ideal Clarity",
  robots: "noindex, nofollow",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
