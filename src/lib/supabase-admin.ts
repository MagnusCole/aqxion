import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Cliente admin de Supabase con service role key
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Funciones de administración
export async function createUserProfile(userId: string, data: any) {
  const { data: profile, error } = await supabaseAdmin
    .from('user_profiles')
    .insert({
      id: userId,
      ...data
    });
  
  if (error) throw error;
  return profile;
}

export async function getAllUsers() {
  const { data: users, error } = await supabaseAdmin
    .from('user_profiles')
    .select('*');
  
  if (error) throw error;
  return users;
}

export async function updateUserStatus(userId: string, isActive: boolean) {
  const { data, error } = await supabaseAdmin
    .from('user_profiles')
    .update({ is_active: isActive })
    .eq('id', userId);
  
  if (error) throw error;
  return data;
}
