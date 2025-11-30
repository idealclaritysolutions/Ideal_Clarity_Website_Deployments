import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

interface BlogPostHeaderProps {
  post: {
    title: string
    excerpt: string
    category: string
    author: string
    publish_date: string
    read_time: string
  }
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

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
            {formatDate(post.publish_date)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.read_time}
          </div>
          <div>By {post.author}</div>
        </div>
      </div>
    </header>
  )
}
