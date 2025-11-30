-- Add publish_date column to blog_posts table
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS publish_date TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Update existing posts to use created_at as publish_date
UPDATE blog_posts 
SET publish_date = created_at 
WHERE publish_date IS NULL;
