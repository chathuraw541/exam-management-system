import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase Credentials Missing!', { supabaseUrl, supabaseKey })
} else {
  console.log('Supabase Initialized with URL:', supabaseUrl)
}

export const supabase = createClient(supabaseUrl, supabaseKey)
