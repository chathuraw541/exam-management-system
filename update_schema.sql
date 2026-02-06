-- Run this in your Supabase SQL Editor to ensure columns exist

ALTER TABLE public.questions 
ADD COLUMN IF NOT EXISTS category text DEFAULT 'General',
ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}';

-- After running this, go to API Settings -> Reload Schema Cache
