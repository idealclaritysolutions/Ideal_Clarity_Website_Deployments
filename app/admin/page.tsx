"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Edit, Trash2, Mail, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createBlogPost, updateBlogPost, deleteBlogPost, getAllPostsForAdmin, type BlogPost } from "@/app/actions/blog"
import { getAllSubscribers } from "@/app/actions/newsletter"
import {
  generateBlogTitle,
  generateBlogExcerpt,
  generateBlogKeywords,
  generateMetaDescription,
  expandBlogContent,
} from "@/app/actions/ai-blog-helper"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [aiGenerating, setAiGenerating] = useState({
    title: false,
    excerpt: false,
    keywords: false,
    metaDescription: false,
    content: false,
  })

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Cynthia Jones",
    category: "Career Clarity",
    read_time: "5 min read",
    keywords: "",
    meta_description: "",
    published: true,
    scheduled_date: "",
  })

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts()
      loadSubscribers()
    }
  }, [isAuthenticated])

  const loadPosts = async () => {
    const allPosts = await getAllPostsForAdmin()
    setPosts(allPosts)
  }

  const loadSubscribers = async () => {
    const allSubscribers = await getAllSubscribers()
    setSubscribers(allSubscribers)
  }

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

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content.trim(),
      author: post.author,
      category: post.category,
      read_time: post.read_time,
      keywords: post.keywords.join(", "),
      meta_description: post.meta_description,
      published: post.published,
      scheduled_date: post.scheduled_date ? new Date(post.scheduled_date).toISOString().slice(0, 16) : "",
    })
    setEditingPost(post)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    setLoading(true)
    const result = await deleteBlogPost(id)
    setLoading(false)

    if (result.success) {
      alert("Post deleted successfully!")
      loadPosts()
    } else {
      alert(`Error: ${result.error}`)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)

    const postData = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      author: formData.author,
      category: formData.category,
      read_time: formData.read_time,
      keywords: formData.keywords.split(",").map((k) => k.trim()),
      meta_description: formData.meta_description,
      published: formData.published,
      scheduled_date: formData.scheduled_date || null,
    }

    let result
    if (editingPost) {
      result = await updateBlogPost(editingPost.id, postData)
    } else {
      result = await createBlogPost(postData)
    }

    setLoading(false)

    if (result.success) {
      alert(editingPost ? "Post updated successfully!" : "Post created successfully!")
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "Cynthia Jones",
        category: "Career Clarity",
        read_time: "5 min read",
        keywords: "",
        meta_description: "",
        published: true,
        scheduled_date: "",
      })
      setShowForm(false)
      setEditingPost(null)
      loadPosts()
      router.refresh()
    } else {
      alert(`Error: ${result.error}`)
    }
  }

  const handleNewPost = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Cynthia Jones",
      category: "Career Clarity",
      read_time: "5 min read",
      keywords: "",
      meta_description: "",
      published: true,
      scheduled_date: "",
    })
    setEditingPost(null)
    setShowForm(true)
  }

  const handleGenerateTitle = async () => {
    const topic = prompt("What topic should the blog post be about?")
    if (!topic) return

    setAiGenerating({ ...aiGenerating, title: true })
    try {
      const result = await generateBlogTitle(topic)
      if (result.error) {
        alert(result.error)
      } else if (result.text) {
        setFormData({
          ...formData,
          title: result.text,
          slug: generateSlug(result.text),
        })
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setAiGenerating({ ...aiGenerating, title: false })
    }
  }

  const handleGenerateExcerpt = async () => {
    if (!formData.title) {
      alert("Please add a title first")
      return
    }

    setAiGenerating({ ...aiGenerating, excerpt: true })
    try {
      const result = await generateBlogExcerpt(formData.title)
      if (result.error) {
        alert(result.error)
      } else if (result.text) {
        setFormData({ ...formData, excerpt: result.text })
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setAiGenerating({ ...aiGenerating, excerpt: false })
    }
  }

  const handleGenerateKeywords = async () => {
    if (!formData.title) {
      alert("Please add a title first")
      return
    }

    setAiGenerating({ ...aiGenerating, keywords: true })
    try {
      const result = await generateBlogKeywords(formData.title)
      if (result.error) {
        alert(result.error)
      } else if (result.text) {
        setFormData({ ...formData, keywords: result.text })
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setAiGenerating({ ...aiGenerating, keywords: false })
    }
  }

  const handleGenerateMetaDescription = async () => {
    if (!formData.title) {
      alert("Please add a title first")
      return
    }

    setAiGenerating({ ...aiGenerating, metaDescription: true })
    try {
      const result = await generateMetaDescription(formData.title, formData.excerpt || "")
      if (result.error) {
        alert(result.error)
      } else if (result.text) {
        setFormData({ ...formData, meta_description: result.text })
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setAiGenerating({ ...aiGenerating, metaDescription: false })
    }
  }

  const handleExpandContent = async () => {
    if (!formData.title) {
      alert("Please add a title first")
      return
    }

    if (!formData.content) {
      alert("Please add an outline or bullet points in the content area first")
      return
    }

    setAiGenerating({ ...aiGenerating, content: true })
    try {
      const result = await expandBlogContent(formData.content, formData.title)
      if (result.error) {
        alert(result.error)
      } else if (result.text) {
        setFormData({ ...formData, content: result.text })
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`)
    } finally {
      setAiGenerating({ ...aiGenerating, content: false })
    }
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
            <Button onClick={handleNewPost}>
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
              <CardTitle>{editingPost ? "Edit Blog Post" : "Create New Blog Post"}</CardTitle>
              <CardDescription>
                {editingPost ? "Update the post and click save" : "Fill out the form to create a new blog post"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="title">Post Title *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateTitle}
                    disabled={aiGenerating.title}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {aiGenerating.title ? "Generating..." : "Generate with AI"}
                  </Button>
                </div>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g., How to Know When It's Time to Leave Your Job"
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="excerpt">Short Summary (1-2 sentences) *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateExcerpt}
                    disabled={aiGenerating.excerpt || !formData.title}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {aiGenerating.excerpt ? "Generating..." : "Generate with AI"}
                  </Button>
                </div>
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
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Career Clarity">Career Clarity</SelectItem>
                      <SelectItem value="Career Transitions">Career Transitions</SelectItem>
                      <SelectItem value="Decision Making">Decision Making</SelectItem>
                      <SelectItem value="Career Growth">Career Growth</SelectItem>
                      <SelectItem value="Leadership">Leadership</SelectItem>
                      <SelectItem value="Professional Growth">Professional Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time *</Label>
                  <Input
                    id="readTime"
                    value={formData.read_time}
                    onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="content">Full Article Content *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleExpandContent}
                    disabled={aiGenerating.content || !formData.title || !formData.content}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {aiGenerating.content ? "Expanding..." : "Expand with AI"}
                  </Button>
                </div>
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
                  Use markdown: # for headings, **bold**, *italic*, - for lists. Add an outline and click "Expand with
                  AI" to generate full content.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="keywords">SEO Keywords (comma separated) *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateKeywords}
                    disabled={aiGenerating.keywords || !formData.title}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {aiGenerating.keywords ? "Generating..." : "Generate with AI"}
                  </Button>
                </div>
                <Input
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="career change, job transition, career clarity"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="metaDescription">Meta Description (for Google) *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateMetaDescription}
                    disabled={aiGenerating.metaDescription || !formData.title}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {aiGenerating.metaDescription ? "Generating..." : "Generate with AI"}
                  </Button>
                </div>
                <Textarea
                  id="metaDescription"
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  placeholder="The text that appears in Google search results (keep under 160 characters)"
                  rows={2}
                  maxLength={160}
                />
                <p className="text-sm text-muted-foreground">{formData.meta_description.length}/160 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scheduledDate">Schedule Post (Optional)</Label>
                <div className="flex gap-2">
                  <Input
                    id="scheduledDate"
                    type="datetime-local"
                    value={formData.scheduled_date}
                    onChange={(e) => setFormData({ ...formData, scheduled_date: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({ ...formData, scheduled_date: "" })}
                  >
                    Clear
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formData.scheduled_date
                    ? `Post will go live on ${new Date(formData.scheduled_date).toLocaleString()}`
                    : "Leave empty to publish immediately"}
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleSubmit} size="lg" className="flex-1" disabled={loading}>
                  {loading ? (
                    "Saving..."
                  ) : formData.scheduled_date ? (
                    <>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Post
                    </>
                  ) : editingPost ? (
                    "Save Changes"
                  ) : (
                    "Publish Now"
                  )}
                </Button>
                <Button
                  onClick={() => {
                    setShowForm(false)
                    setEditingPost(null)
                  }}
                  variant="outline"
                  size="lg"
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList>
              <TabsTrigger value="posts">Blog Posts ({posts.length})</TabsTrigger>
              <TabsTrigger value="subscribers">Newsletter ({subscribers.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              {posts.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground mb-4">No blog posts yet. Create your first one!</p>
                    <Button onClick={handleNewPost}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Post
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold">{post.title}</h3>
                              {!post.published && (
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Draft</span>
                              )}
                              {post.scheduled_date && new Date(post.scheduled_date) > new Date() && (
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  Scheduled: {new Date(post.scheduled_date).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{post.category}</span>
                              <span>•</span>
                              <span>{post.read_time}</span>
                              <span>•</span>
                              <span>{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(post.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="subscribers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Newsletter Subscribers
                  </CardTitle>
                  <CardDescription>
                    {subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""} • Managed via Mailerlite
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {subscribers.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No subscribers yet</p>
                  ) : (
                    <div className="space-y-2">
                      {subscribers.map((sub) => (
                        <div key={sub.id} className="flex items-center justify-between p-3 border rounded">
                          <span>{sub.email}</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(sub.subscribed_at).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">Mailerlite Integration Active</p>
                    <p className="text-sm text-muted-foreground">
                      All subscribers are automatically synced to your Mailerlite account. Manage email campaigns from
                      your Mailerlite dashboard.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
