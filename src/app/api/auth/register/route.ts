import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, businessName, businessType } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Registrar usuario en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          business_name: businessName,
          business_type: businessType,
        }
      }
    });

    if (authError) {
      console.error('Error creating user:', authError);
      return NextResponse.json(
        { message: authError.message },
        { status: 400 }
      );
    }

    if (!authData.user) {
      return NextResponse.json(
        { message: 'Error al crear el usuario' },
        { status: 400 }
      );
    }

    // Crear perfil en la tabla user_profiles si el usuario se creó correctamente
    if (authData.user.id) {
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email: authData.user.email!,
          business_name: businessName,
          industry: businessType,
        });

      if (profileError) {
        console.error('Error creating user profile:', profileError);
        // No retornamos error aquí ya que el usuario fue creado correctamente
      }
    }

    return NextResponse.json({
      message: 'Usuario creado exitosamente',
      user: {
        id: authData.user.id,
        email: authData.user.email,
      }
    });

  } catch (error) {
    console.error('Error in register route:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}