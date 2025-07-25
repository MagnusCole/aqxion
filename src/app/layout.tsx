import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AQXION - Más Clientes Para Tu MYPE',
  description: 'Sistema completo de presencia digital para MYPEs peruanas. 50+ clientes nuevos en 30 días. S/.1,500 pago único.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
