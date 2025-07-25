import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // ✅ DEMO USER - Datos mock
    if (session.user.email === 'demo@cliente.com') {
      return NextResponse.json({
        onboardingCompleted: true,
        businessName: 'Restaurante Sabor Limeño',
        businessType: 'Restaurante',
        phone: '+51 999 123 456',
        whatsappNumber: '+51 999 123 456',
        website: 'https://saborlimeno.com',
        completedSteps: [
          'business-info',
          'contact-info',
          'social-media',
          'goals'
        ],
        currentStep: 'completed'
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        onboardingCompleted: true,
        businessName: true,
        businessType: true,
        phone: true,
        whatsappNumber: true,
        website: true,
        createdAt: true,
        sessions: {
          take: 1,
          orderBy: { expires: 'desc' }
        }
      }
    })

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    // ✅ DETECTAR PRIMER LOGIN
    const isFirstLogin = user.sessions.length === 1

    // ✅ EVALUAR PERFIL COMPLETADO
    const userProfile = {
      hasBusinessInfo: !!(user.businessName && user.businessType),
      hasWhatsApp: !!user.whatsappNumber,
      hasWebsiteGoals: !!user.website
    }

    // ✅ CALCULAR PROGRESO
    const profileSteps = Object.values(userProfile).filter(Boolean).length
    const completedSteps = profileSteps + (user.onboardingCompleted ? 2 : 0)
    const currentStep = completedSteps + 1

    return NextResponse.json({
      isFirstLogin,
      onboardingCompleted: user.onboardingCompleted,
      completedSteps,
      currentStep: Math.min(currentStep, 5),
      userProfile,
      userInfo: {
        businessName: user.businessName,
        businessType: user.businessType,
        phone: user.phone,
        whatsappNumber: user.whatsappNumber
      }
    })
  } catch (error) {
    console.error('Error checking onboarding status:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
