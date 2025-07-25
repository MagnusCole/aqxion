import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Verificar que el usuario actual es super admin
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    // Extraer el token JWT del header
    const jwt = authHeader.replace('Bearer ', '');
    
    // Verificar el token y obtener el usuario
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Verificar que es super admin
    const { data: adminData, error: adminError } = await supabaseAdmin
      .from('super_admins')
      .select('email')
      .eq('email', user.email)
      .eq('is_active', true)
      .single();

    if (adminError || !adminData) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Obtener usuarios de auth.users usando el cliente admin
    const { data: authData, error: usersError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (usersError) {
      console.error('Error loading auth users:', usersError);
      return NextResponse.json({ error: 'Error cargando usuarios de autenticación' }, { status: 500 });
    }

    // Obtener perfiles de usuarios
    const { data: profiles, error: profilesError } = await supabaseAdmin
      .from('user_profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (profilesError) {
      console.error('Error loading user profiles:', profilesError);
      return NextResponse.json({ error: 'Error cargando perfiles de usuarios' }, { status: 500 });
    }

    return NextResponse.json({
      users: authData.users || [],
      profiles: profiles || []
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, userData } = await request.json();
    
    // Verificar que el usuario actual es super admin
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    // Extraer el token JWT del header
    const jwt = authHeader.replace('Bearer ', '');
    
    // Verificar el token y obtener el usuario
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Verificar que es super admin
    const { data: adminData, error: adminError } = await supabaseAdmin
      .from('super_admins')
      .select('email')
      .eq('email', user.email)
      .eq('is_active', true)
      .single();

    if (adminError || !adminData) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Procesar acciones
    switch (action) {
      case 'createUser':
        return await createUser(userData);
      case 'updateUser':
        return await updateUser(userData);
      case 'deleteUser':
        return await deleteUser(userData.userId);
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function createUser(userData: any) {
  try {
    // Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: true
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    // Crear perfil de usuario
    const { error: profileError } = await supabaseAdmin
      .from('user_profiles')
      .insert({
        id: authData.user.id,
        email: userData.email,
        business_name: userData.business_name || null,
        industry: userData.industry || null
      });

    if (profileError) {
      // Si falla el perfil, eliminar el usuario de auth
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json({ error: profileError.message }, { status: 400 });
    }

    return NextResponse.json({ 
      message: 'User created successfully',
      user: authData.user 
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

async function updateUser(userData: any) {
  try {
    const { error } = await supabaseAdmin
      .from('user_profiles')
      .update({
        business_name: userData.business_name,
        industry: userData.industry
      })
      .eq('id', userData.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

async function deleteUser(userId: string) {
  try {
    // Eliminar usuario de auth (esto también eliminará el perfil por CASCADE)
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
