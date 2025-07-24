import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Rutas que requieren autenticación
  const protectedPaths = ['/portal'];
  
  // Verificar si la ruta actual está protegida
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    // Aquí verificarías el token/session
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      // Redirigir a login si no hay token
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Aquí podrías validar el token con tu API/database
    // Por ahora, permitimos el acceso si hay token
  }

  return NextResponse.next();
}

export const config = {
  // Aplicar middleware solo a rutas específicas
  matcher: ['/portal/:path*']
};
