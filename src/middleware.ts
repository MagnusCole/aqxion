import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // Rutas que requieren autenticación
  const protectedPaths = ['/portal']
  
  // Verificar si la ruta actual está protegida
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath) {
    // ✅ VERIFICACIÓN REAL CON NEXTAUTH JWT
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    })
    
    if (!token) {
      // Redirigir a login si no hay token válido
      const loginUrl = new URL('/auth/signin', request.url)
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
    
    // Token válido - permitir acceso
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  // Aplicar middleware solo a rutas específicas
  matcher: ['/portal/:path*']
}
