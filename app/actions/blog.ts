"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  read_time: string
  keywords: string[]
  meta_description: string
  published: boolean
  scheduled_date: string | null
  created_at: string
  updated_at: string
}

export async function createBlogPost(data: Omit<BlogPost, "id" | "created_at" | "updated_at">) {
  try {
    const result = await sql`
      INSERT INTO blog_posts (
        title, slug, excerpt, content, author, category, 
        read_time, keywords, meta_description, published, scheduled_date
      )
      VALUES (
        ${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, 
        ${data.author}, ${data.category}, ${data.read_time}, 
        ${data.keywords}, ${data.meta_description}, ${data.published}, ${data.scheduled_date}
      )
      RETURNING *
    `

    revalidatePath("/blog")
    revalidatePath("/admin")

    return { success: true, post: result[0] }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

export async function updateBlogPost(id: number, data: Partial<BlogPost>) {
  try {
    const result = await sql`
      UPDATE blog_posts 
      SET 
        title = COALESCE(${data.title}, title),
        slug = COALESCE(${data.slug}, slug),
        excerpt = COALESCE(${data.excerpt}, excerpt),
        content = COALESCE(${data.content}, content),
        author = COALESCE(${data.author}, author),
        category = COALESCE(${data.category}, category),
        read_time = COALESCE(${data.read_time}, read_time),
        keywords = COALESCE(${data.keywords}, keywords),
        meta_description = COALESCE(${data.meta_description}, meta_description),
        published = COALESCE(${data.published}, published),
        scheduled_date = COALESCE(${data.scheduled_date}, scheduled_date),
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `

    revalidatePath("/blog")
    revalidatePath(`/blog/${data.slug}`)
    revalidatePath("/admin")

    return { success: true, post: result[0] }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

export async function deleteBlogPost(id: number) {
  try {
    await sql`DELETE FROM blog_posts WHERE id = ${id}`

    revalidatePath("/blog")
    revalidatePath("/admin")

    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

export async function getAllBlogPosts() {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE published = true 
      AND (scheduled_date IS NULL OR scheduled_date <= NOW())
      ORDER BY created_at DESC
    `
    return posts as BlogPost[]
  } catch (error) {
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const result = await sql`
      SELECT * FROM blog_posts 
      WHERE slug = ${slug} 
      AND published = true 
      AND (scheduled_date IS NULL OR scheduled_date <= NOW())
      LIMIT 1
    `
    return result[0] as BlogPost | undefined
  } catch (error) {
    return undefined
  }
}

export async function getAllPostsForAdmin() {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      ORDER BY created_at DESC
    `
    return posts as BlogPost[]
  } catch (error) {
    return []
  }
}
