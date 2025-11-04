import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function ensureTestUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    await supabase.auth.signInWithPassword({
      email: import.meta.env.VITE_TEST_EMAIL,
      password: import.meta.env.VITE_TEST_PASSWORD,
    });
  }
  return supabase;
}

export { supabase };
