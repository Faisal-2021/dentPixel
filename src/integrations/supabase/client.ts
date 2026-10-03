import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

// We only initialize the client if the URL is provided. 
// This prevents build-time crashes during static generation if env vars are missing.
export const supabase = (SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY) 
  ? createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  : (null as any);
