import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // ✅ Verificar autenticación
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // ✅ Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        planStartDate: true,
        onboardingCompleted: true,
        createdAt: true
      }
    })

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    // ✅ Calcular progreso del plan de 90 días
    const startDate = user.planStartDate || user.createdAt
    const currentDate = new Date()
    const daysDiff = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const currentDay = Math.max(1, Math.min(90, daysDiff + 1))

    // ✅ Contar tareas completadas
    const totalTasks = await prisma.task.count({
      where: { userId: user.id }
    })
    
    const completedTasks = await prisma.task.count({
      where: { 
        userId: user.id, 
        status: 'completed' 
      }
    })

    // ✅ Hitos del plan
    const milestones = [
      {
        id: '1',
        title: 'Configuración inicial completada',
        completed: true,
        dueDate: null
      },
      {
        id: '2',
        title: 'WhatsApp Business configurado',
        completed: currentDay >= 7,
        dueDate: null
      },
      {
        id: '3',
        title: 'Primera optimización realizada',
        completed: currentDay >= 30,
        dueDate: null
      },
      {
        id: '4',
        title: 'Sistema funcionando independientemente',
        completed: currentDay >= 90,
        dueDate: null
      }
    ]

    const progress = {
      currentDay,
      totalDays: 90,
      completedSteps: completedTasks,
      totalSteps: Math.max(totalTasks, 10), // Mínimo 10 pasos
      milestones
    }

    return NextResponse.json(progress)
  } catch (error) {
    console.error('Error fetching progress:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
