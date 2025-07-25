import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Cliente de Supabase para uso en rutas API (con service role key)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Helper para obtener el usuario autenticado en rutas API
export async function getAuthenticatedUser(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.substring(7);
    
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
    
    if (error || !user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error getting authenticated user:', error);
    return null;
  }
}

// Alternativa: obtener usuario desde cookies (para casos donde el frontend no envía bearer token)
export async function getUserFromSession(request: NextRequest) {
  try {
    // Obtener cookies de la request
    const cookies = request.cookies;
    const accessToken = cookies.get('sb-access-token')?.value;
    const refreshToken = cookies.get('sb-refresh-token')?.value;

    if (!accessToken) {
      return null;
    }

    const { data: { user }, error } = await supabaseAdmin.auth.getUser(accessToken);
    
    if (error || !user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error getting user from session:', error);
    return null;
  }
}
