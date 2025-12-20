"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

export default function AdminPageClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<any>(null)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Career Clarity",
    readTime: "5 min read",
    keywords: "",
    metaDescription: "",
  })

  // Simple password check (you should change this)
  const handleLogin = () => {
    if (password === "idealclarity2025") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    })
  }

  const handleSubmit = () => {
    // Create the blog post object
    const newPost = {
      id: formData.slug,
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      author: "Your Name",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: formData.readTime,
      category: formData.category,
      image: "/placeholder.svg?height=400&width=800",
      keywords: formData.keywords.split(",").map((k) => k.trim()),
      metaDescription: formData.metaDescription,
    }

    // Show the formatted code for copying
    const codeToAdd = `{
  id: "${newPost.id}",
  title: "${newPost.title}",
  slug: "${newPost.slug}",
  excerpt: "${newPost.excerpt}",
  content: \`
${newPost.content}
  \`,
  author: "${newPost.author}",
  date: "${newPost.date}",
  readTime: "${newPost.readTime}",
  category: "${newPost.category}",
  image: "/placeholder.svg?height=400&width=800",
  keywords: ${JSON.stringify(newPost.keywords)},
  metaDescription: "${newPost.metaDescription}"
},`

    // Create a modal to show the code
    alert("Blog post created! Copy the code below and add it to lib/blog-data.ts:\n\n" + codeToAdd)

    // Reset form
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Career Clarity",
      readTime: "5 min read",
      keywords: "",
      metaDescription: "",
    })
    setShowForm(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter password to access blog management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter admin password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
            <p className="text-sm text-muted-foreground text-center">Default password: idealclarity2025</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Blog Admin</h1>
          </div>
          {!showForm && (
            <Button onClick={() => setShowForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {showForm ? (
          <Card>
            <CardHeader>
              <CardTitle>{editingPost ? "Edit Post" : "Create New Blog Post"}</CardTitle>
              <CardDescription>Fill out the form below to add a new blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Post Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g., How to Know When to Leave Your Job"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug (auto-generated)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="how-to-know-when-to-leave-your-job"
                />
                <p className="text-sm text-muted-foreground">
                  Your post will be at: /blog/{formData.slug || "your-post-slug"}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Short Summary (1-2 sentences) *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="A brief summary that appears on the blog listing page..."
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="Career Clarity">Career Clarity</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Decision Making">Decision Making</option>
                    <option value="Professional Growth">Professional Growth</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time *</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Full Article Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="# Main Heading

Your first paragraph...

## Subheading

More content here..."
                  rows={15}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  Use markdown: # for headings, **bold**, *italic*, - for lists
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">SEO Keywords (comma separated) *</Label>
                <Input
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="career change, job transition, career clarity"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description (for Google) *</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  placeholder="The text that appears in Google search results (keep under 160 characters)"
                  rows={2}
                  maxLength={160}
                />
                <p className="text-sm text-muted-foreground">{formData.metaDescription.length}/160 characters</p>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleSubmit} size="lg" className="flex-1">
                  Generate Post Code
                </Button>
                <Button onClick={() => setShowForm(false)} variant="outline" size="lg">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How to Add Your Post</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Click "New Post" to create a blog post</li>
                  <li>Fill out the form with your content</li>
                  <li>Click "Generate Post Code" - it will show you formatted code</li>
                  <li>
                    Copy the code and paste it into <code className="bg-muted px-2 py-1 rounded">lib/blog-data.ts</code>
                  </li>
                  <li>
                    Add it at the top of the <code className="bg-muted px-2 py-1 rounded">blogPosts</code> array
                  </li>
                  <li>Your post is now live!</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Title:</strong> Make it compelling and include keywords people search for
                </p>
                <p>
                  <strong>Excerpt:</strong> This shows on the blog page and in social shares
                </p>
                <p>
                  <strong>Content:</strong> Use markdown formatting (# for headings, ** for bold)
                </p>
                <p>
                  <strong>Keywords:</strong> 3-5 terms that describe your post for SEO
                </p>
                <p>
                  <strong>Meta Description:</strong> What Google shows in search results
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
