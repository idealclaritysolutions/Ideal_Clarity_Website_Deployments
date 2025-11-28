import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/app/actions/blog"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.read_time}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
