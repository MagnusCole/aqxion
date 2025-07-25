import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Cliente de Supabase para middleware
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  // 🔒 REGLAS ESTRICTAS DE ACCESO POR DOMINIO
  
  // ✅ app.aqxion.com - SOLO portal y auth
  if (hostname.includes('app.aqxion.com')) {
    // Redirigir root a login
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // PERMITIR: portal, auth, APIs, assets
    if (
      pathname.startsWith('/portal') ||
      pathname.startsWith('/auth') ||
      pathname.startsWith('/login') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.startsWith('/debug')
    ) {
      // Verificar autenticación para rutas del portal
      if (pathname.startsWith('/portal')) {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        // Intentar obtener el token de las cookies
        const accessToken = req.cookies.get('sb-access-token')?.value;
        
        if (!accessToken) {
          return NextResponse.redirect(new URL('/login', req.url));
        }

        // Verificar que el token sea válido
        try {
          const { data: { user }, error } = await supabase.auth.getUser(accessToken);
          
          if (error || !user) {
            return NextResponse.redirect(new URL('/login', req.url));
          }
        } catch (error) {
          return NextResponse.redirect(new URL('/login', req.url));
        }
      }
      
      return NextResponse.next();
    }
    
    // BLOQUEAR: cualquier otra ruta → redirigir a login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ✅ www.aqxion.com - SOLO landing page
  if (hostname.includes('www.aqxion.com')) {
    // BLOQUEAR: portal y auth → redirigir a app.aqxion.com
    if (pathname.startsWith('/portal') || pathname.startsWith('/auth') || pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('https://app.aqxion.com' + pathname));
    }
    
    // PERMITIR: landing, assets, APIs públicas
    return NextResponse.next();
  }

  // ✅ aqxion.com (root) - redirigir a www
  if (hostname === 'aqxion.com') {
    // BLOQUEAR: portal y auth → redirigir a app.aqxion.com
    if (pathname.startsWith('/portal') || pathname.startsWith('/auth') || pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('https://app.aqxion.com' + pathname));
    }
    
    // Resto → redirigir a www
    return NextResponse.redirect(new URL('https://www.aqxion.com' + pathname));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
