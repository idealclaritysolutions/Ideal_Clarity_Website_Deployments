import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="bg-gradient-to-b from-muted/30 to-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-6">
          {post.category}
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{post.title}</h1>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.publishDate}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <div>By {post.author.name}</div>
        </div>
      </div>
    </header>
  )
}
