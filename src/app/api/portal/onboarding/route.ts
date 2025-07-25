import { NextRequest, NextResponse } from 'next/server'
import { getServerSession, authOptions } from '@/lib/auth-temp';
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const updateProfileSchema = z.object({
  businessName: z.string().min(1, 'El nombre del negocio es requerido'),
  businessType: z.string().min(1, 'El tipo de negocio es requerido'),
  whatsappNumber: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  step: z.enum(['business-info', 'whatsapp', 'goals', 'complete'])
})

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await request.json()
    const validatedData = updateProfileSchema.parse(body)
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    // ✅ ACTUALIZAR INFORMACIÓN SEGÚN EL PASO
    const updateData: any = {}

    if (validatedData.step === 'business-info') {
      updateData.businessName = validatedData.businessName
      updateData.businessType = validatedData.businessType
    }

    if (validatedData.step === 'whatsapp' && validatedData.whatsappNumber) {
      updateData.whatsappNumber = validatedData.whatsappNumber
    }

    if (validatedData.step === 'goals' && validatedData.website) {
      updateData.website = validatedData.website
    }

    if (validatedData.step === 'complete') {
      updateData.onboardingCompleted = true
      
      // ✅ CREAR ACTIVIDAD DE BIENVENIDA
      await prisma.activity.create({
        data: {
          userId: user.id,
          title: 'Onboarding Completado',
          description: `¡Bienvenido a AQXION! 🎉 ${user.businessName || 'Tu negocio'} está listo para crecer.`,
          category: 'Sistema',
          status: 'completed',
          timestamp: new Date()
        }
      })

      // ✅ CREAR TAREAS INICIALES
      const initialTasks = [
        {
          title: 'Revisar tu Dashboard de Métricas',
          description: 'Explora las métricas de rendimiento de tu presencia digital.',
          priority: 'high' as const,
          status: 'pending' as const,
          userId: user.id
        },
        {
          title: 'Configurar tu Perfil de WhatsApp Business',
          description: 'Optimiza tu perfil para recibir más consultas.',
          priority: 'medium' as const,
          status: 'pending' as const,
          userId: user.id
        },
        {
          title: 'Conectar con tu Especialista AQXION',
          description: 'Agenda tu primera sesión de seguimiento personalizado.',
          priority: 'medium' as const,
          status: 'pending' as const,
          userId: user.id
        }
      ]

      await prisma.task.createMany({
        data: initialTasks
      })

      // ✅ INICIALIZAR MÉTRICAS DE NEGOCIO
      await prisma.businessMetrics.upsert({
        where: { userId: user.id },
        update: {},
        create: {
          userId: user.id,
          websiteVisits: 0,
          previousWebsiteVisits: 0,
          leads: 0,
          previousLeads: 0,
          whatsappChats: 0,
          previousWhatsappChats: 0,
          googleViews: 0,
          previousGoogleViews: 0,
          dataSource: 'manual'
        }
      })
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: updateData,
      select: {
        businessName: true,
        businessType: true,
        whatsappNumber: true,
        website: true,
        onboardingCompleted: true
      }
    })

    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: validatedData.step === 'complete' 
        ? '¡Onboarding completado! Tu portal está listo.' 
        : 'Información actualizada correctamente.'
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.issues },
        { status: 400 }
      )
    }
    
    console.error('Error updating onboarding:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
