"use client"

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div
      className="prose prose-lg max-w-none 
        prose-headings:font-bold 
        prose-h1:text-4xl prose-h1:mb-6
        prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
        prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
        prose-p:leading-relaxed prose-p:mb-4
        [&_p:empty]:h-6 [&_p:empty]:mb-4
        prose-li:my-2 
        prose-strong:text-primary prose-strong:font-semibold 
        prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
