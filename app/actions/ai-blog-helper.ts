"use server"

import { generateText } from "ai"
import { createGroq } from "@ai-sdk/groq"

export async function generateBlogTitle(topic: string) {
  try {
    const apiKey = process.env.GROQ_API_KEY

    console.log("[v0] Generating title for topic:", topic)
    console.log("[v0] API key exists:", !!apiKey)

    if (!apiKey) {
      return { error: "Groq API key not configured. Please add GROQ_API_KEY to your environment variables." }
    }

    const groq = createGroq({
      apiKey: apiKey,
    })

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are a career clarity and coaching expert. Generate a compelling, SEO-optimized blog post title for the topic: "${topic}". 

The title should:
- Be attention-grabbing and benefit-focused
- Appeal to professionals facing career crossroads
- Be 50-70 characters for SEO
- Include power words that drive clicks

Return ONLY the title, nothing else.`,
    })

    console.log("[v0] Successfully generated title:", text)
    return { text: text.trim() }
  } catch (error) {
    console.error("[v0] Error generating title:", error)
    return { error: `Failed to generate title: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function generateBlogExcerpt(title: string) {
  try {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return { error: "Groq API key not configured." }
    }

    const groq = createGroq({
      apiKey: apiKey,
    })

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are a career clarity and coaching expert. Generate a compelling 1-2 sentence blog post excerpt for the title: "${title}".

The excerpt should:
- Hook the reader immediately
- Promise a clear benefit
- Be 120-160 characters ideal for previews
- Create curiosity without clickbait

Return ONLY the excerpt, nothing else.`,
    })

    return { text: text.trim() }
  } catch (error) {
    console.error("[v0] Error generating excerpt:", error)
    return { error: `Failed to generate excerpt: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function generateBlogKeywords(title: string) {
  try {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return { error: "Groq API key not configured." }
    }

    const groq = createGroq({
      apiKey: apiKey,
    })

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are an SEO expert specializing in career coaching content. Generate 5-7 relevant keywords for this blog post title: "${title}".

Keywords should:
- Include primary and secondary search terms
- Mix broad and specific terms
- Target professionals seeking career clarity
- Be searchable phrases people actually use

Return ONLY a comma-separated list of keywords, nothing else.`,
    })

    return { text: text.trim() }
  } catch (error) {
    console.error("[v0] Error generating keywords:", error)
    return { error: `Failed to generate keywords: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function generateMetaDescription(title: string, excerpt: string) {
  try {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return { error: "Groq API key not configured." }
    }

    const groq = createGroq({
      apiKey: apiKey,
    })

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are an SEO expert. Generate a compelling meta description for this blog post:

Title: "${title}"
Excerpt: "${excerpt}"

The meta description should:
- Be 150-160 characters (strict limit)
- Include the primary keyword naturally
- Have a clear call-to-action or benefit
- Encourage clicks from search results

Return ONLY the meta description, nothing else.`,
    })

    return { text: text.trim() }
  } catch (error) {
    console.error("[v0] Error generating meta description:", error)
    return { error: `Failed to generate meta description: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}

export async function expandBlogContent(outline: string, title: string) {
  try {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return { error: "Groq API key not configured." }
    }

    const groq = createGroq({
      apiKey: apiKey,
    })

    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are a career clarity and coaching expert. Expand this blog post outline into a full, engaging article:

Title: "${title}"
Outline: "${outline}"

Write a comprehensive blog post that:
- Uses conversational, relatable tone
- Includes specific examples and actionable advice
- Addresses common objections and concerns
- Uses markdown formatting (headings, bullets, bold)
- Is 800-1200 words
- Naturally leads to considering professional coaching

Return ONLY the blog post content in markdown format.`,
    })

    return { text: text.trim() }
  } catch (error) {
    console.error("[v0] Error expanding content:", error)
    return { error: `Failed to expand content: ${error instanceof Error ? error.message : "Unknown error"}` }
  }
}
