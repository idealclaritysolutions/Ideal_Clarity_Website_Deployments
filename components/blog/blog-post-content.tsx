"use client"

import ReactMarkdown from "react-markdown"

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-li:my-2 prose-strong:text-primary prose-strong:font-semibold prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
