import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Crear usuario demo para testing
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@aqxion.com' },
    update: {},
    create: {
      email: 'demo@aqxion.com',
      name: 'Cliente Demo',
      password: hashedPassword,
      businessName: 'Mi Negocio Demo',
      businessType: 'Restaurante',
      phone: '+51999999999',
      planStartDate: new Date(),
      supportExpiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 días
      onboardingCompleted: false,
      isActive: true,
    },
  })

  // Crear métricas demo
  await prisma.businessMetrics.upsert({
    where: { userId: demoUser.id },
    update: {},
    create: {
      userId: demoUser.id,
      websiteVisits: 247,
      previousWebsiteVisits: 189,
      leads: 23,
      previousLeads: 18,
      whatsappChats: 34,
      previousWhatsappChats: 26,
      googleViews: 156,
      previousGoogleViews: 128,
    },
  })

  console.log('✅ Usuario demo creado:', demoUser.email)
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
