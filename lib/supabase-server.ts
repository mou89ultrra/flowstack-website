import { createClient } from '@supabase/supabase-js'

// Server-only client — uses service role key, never exposed to browser
// Only import this in server components and API routes
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
