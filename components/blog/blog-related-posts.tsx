import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

interface BlogRelatedPostsProps {
  currentSlug: string
  currentCategory: string
}

export function BlogRelatedPosts({ currentSlug, currentCategory }: BlogRelatedPostsProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentCategory)
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Continue Reading</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
