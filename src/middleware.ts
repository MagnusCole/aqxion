import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // � TEMPORALMENTE SIMPLIFICADO - Solo para testing
  console.log('🔐 Middleware simplificado para:', request.nextUrl.pathname)
  
  // Permitir acceso a todas las rutas por ahora
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/portal/:path*', 
    '/auth/:path*'
  ]
}
