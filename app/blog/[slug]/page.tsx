import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostCTA } from "@/components/blog/blog-post-cta"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogAuthor } from "@/components/blog/blog-author"
import { getBlogPostBySlug } from "@/app/actions/blog"
import { FloatingCTA } from "@/components/floating-cta"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Ideal Clarity Blog",
    }
  }

  return {
    title: `${post.title} | Ideal Clarity Blog`,
    description: post.meta_description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.created_at,
      authors: [post.author],
    },
  }
}

export const dynamic = "force-dynamic"

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <article className="min-h-screen">
        <BlogPostHeader post={post} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
          <BlogPostContent content={post.content} />
          <BlogPostCTA />
          <BlogAuthor author={{ name: post.author, role: "Career Clarity Coach" }} />
        </div>
        <BlogRelatedPosts currentSlug={post.slug} currentCategory={post.category} />
      </article>
      <Footer />
      <FloatingCTA />
    </>
  )
}
