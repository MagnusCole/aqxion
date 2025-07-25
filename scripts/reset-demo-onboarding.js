const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Reseteando usuario demo para probar onboarding...')
  
  try {
    // Buscar usuario demo
    const demoUser = await prisma.user.findUnique({
      where: { email: 'demo@aqxion.com' }
    })
    
    if (demoUser) {
      // Resetear campos de onboarding
      await prisma.user.update({
        where: { email: 'demo@aqxion.com' },
        data: {
          onboardingCompleted: false,
          businessName: null,
          businessType: null,
          whatsappNumber: null,
          website: null
        }
      })
      
      // Limpiar sesiones anteriores para simular primer login
      await prisma.session.deleteMany({
        where: { userId: demoUser.id }
      })
      
      // Limpiar datos relacionados
      await prisma.task.deleteMany({
        where: { userId: demoUser.id }
      })
      
      await prisma.activity.deleteMany({
        where: { userId: demoUser.id }
      })
      
      console.log('✅ Usuario demo reseteado correctamente')
      console.log('📧 Email: demo@aqxion.com')
      console.log('🔑 Password: demo123')
      console.log('🎯 Onboarding: Listo para probar')
    } else {
      console.log('❌ Usuario demo no encontrado')
    }
  } catch (error) {
    console.error('Error reseteando usuario:', error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
