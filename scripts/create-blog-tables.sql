-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Your Name',
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  meta_description TEXT NOT NULL,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Create newsletter_subscribers table  
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'website'
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
