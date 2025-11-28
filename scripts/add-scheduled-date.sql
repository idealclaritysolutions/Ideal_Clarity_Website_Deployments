-- Add scheduled_date column for post scheduling
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS scheduled_date TIMESTAMP WITH TIME ZONE;

-- Create index for efficient scheduled post queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_scheduled ON blog_posts(scheduled_date);
