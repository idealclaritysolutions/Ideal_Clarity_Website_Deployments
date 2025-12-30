-- Create table to track assessment completions
CREATE TABLE IF NOT EXISTS assessment_completions (
  id SERIAL PRIMARY KEY,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  result_type TEXT NOT NULL, -- 'fear-based', 'constraint-based', 'mixed', 'unclear'
  user_name TEXT,
  user_email TEXT,
  answers JSONB, -- Store all answers for deeper analysis
  time_to_complete INTEGER, -- in seconds
  device_type TEXT, -- 'mobile', 'tablet', 'desktop'
  referrer TEXT
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_completed_at ON assessment_completions(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_result_type ON assessment_completions(result_type);
CREATE INDEX IF NOT EXISTS idx_completed_date ON assessment_completions(DATE(completed_at));
