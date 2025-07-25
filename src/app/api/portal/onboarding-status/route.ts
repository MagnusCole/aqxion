import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Cliente admin para operaciones del servidor
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: NextRequest) {
  try {
    // Obtener el token del header Authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const token = authHeader.substring(7);
    
    // Verificar el token con Supabase
    const { data: { user: authUser }, error } = await supabaseAdmin.auth.getUser(token);
    
    if (error || !authUser) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // ✅ DEMO USER - Datos mock
    if (authUser.email === 'demo@cliente.com') {
      return NextResponse.json({
        isFirstLogin: false,
        onboardingCompleted: true,
        completedSteps: 5,
        currentStep: 5,
        userProfile: {
          hasBusinessInfo: true,
          hasWhatsApp: true,
          hasWebsiteGoals: true
        },
        userInfo: {
          businessName: 'Restaurante Sabor Limeño',
          businessType: 'Restaurante',
          phone: '+51 999 123 456',
          whatsappNumber: '+51 999 123 456'
        }
      })
    }

    // ✅ REAL USER - Obtener perfil de Supabase
    const { data: userProfile, error: profileError } = await supabaseAdmin
      .from('user_profiles')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (profileError) {
      console.error('Error fetching user profile:', profileError);
      // Si no existe el perfil, crear uno básico
      const { data: newProfile, error: createError } = await supabaseAdmin
        .from('user_profiles')
        .insert({
          id: authUser.id,
          email: authUser.email!,
          business_name: null,
          industry: null
        })
        .select()
        .single();

      if (createError) {
        console.error('Error creating user profile:', createError);
        return new NextResponse('Error creating profile', { status: 500 });
      }

      // Usuario nuevo - primer login
      return NextResponse.json({
        isFirstLogin: true,
        onboardingCompleted: false,
        completedSteps: 0,
        currentStep: 1,
        userProfile: {
          hasBusinessInfo: false,
          hasWhatsApp: false,
          hasWebsiteGoals: false
        },
        userInfo: {
          businessName: null,
          businessType: null,
          phone: null,
          whatsappNumber: null
        }
      });
    }

    // Determinar estado del onboarding basado en el perfil
    const hasBusinessInfo = !!(userProfile.business_name && userProfile.industry);
    const hasWhatsApp = false; // Por ahora no tenemos este campo
    const hasWebsiteGoals = false; // Por ahora no tenemos este campo

    const completedSteps = [hasBusinessInfo, hasWhatsApp, hasWebsiteGoals].filter(Boolean).length;
    const isCompleted = completedSteps >= 3;

    return NextResponse.json({
      isFirstLogin: false,
      onboardingCompleted: isCompleted,
      completedSteps,
      currentStep: completedSteps + 1,
      userProfile: {
        hasBusinessInfo,
        hasWhatsApp,
        hasWebsiteGoals
      },
      userInfo: {
        businessName: userProfile.business_name,
        businessType: userProfile.industry,
        phone: null,
        whatsappNumber: null
      }
    });

  } catch (error) {
    console.error('Error in onboarding-status:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
