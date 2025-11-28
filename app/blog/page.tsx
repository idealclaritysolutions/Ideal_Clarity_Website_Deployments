import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { FloatingCTA } from "@/components/floating-cta"
import { getAllBlogPosts } from "@/app/actions/blog"

export const metadata: Metadata = {
  title: "The Clarity Guide | Career Insights & Thought Leadership - Ideal Clarity",
  description:
    "Expert guidance on career transitions, decision-making, and professional growth. Learn how to navigate career crossroads with confidence and clarity.",
  keywords: [
    "career clarity",
    "career transitions",
    "professional development",
    "decision making",
    "career coaching",
    "leadership development",
  ],
  openGraph: {
    title: "The Clarity Guide - Ideal Clarity",
    description: "Expert guidance on navigating career transitions and making confident decisions.",
    type: "website",
  },
}

export const dynamic = "force-dynamic"

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BlogHero />
        <BlogGrid posts={posts} />
        <BlogNewsletter />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
