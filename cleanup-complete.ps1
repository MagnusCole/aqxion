# Script de Limpieza del Proyecto - Solo Landing Page
# Elimina todo excepto lo necesario para la página principal

# ================================================
# FASE 1: ELIMINAR ARCHIVOS INNECESARIOS
# ================================================

# Eliminar todas las páginas excepto la principal
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\auth"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\login"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\debug" 
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\api\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\onboarding"

# Eliminar componentes del portal
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\components\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\components\page-components\portal"

# Eliminar layouts innecesarios
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\layouts\PortalLayout.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\layouts\MainLayout.tsx"

# Eliminar hooks innecesarios (mantener solo los básicos)
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useSuperAdmin.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useBusinessMetrics.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useMYPEUserData.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useUserProgress.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useRealBusinessMetrics.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useMyPeruProgress.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useOnboarding.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useRealTaskManager.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\useEnhancedTaskManagerSupabase.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\usePortal.ts"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\hooks\portal"

# Eliminar archivos de configuración del portal/backend
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\portal-service.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\portal-service-v2.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\types\portal.ts"

# Eliminar documentación del portal
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\portal-mejoras-implementadas.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\cleanup-portal.ps1"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\PORTAL-FUNCIONAL-REPORTE.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\PORTAL-STATUS-COMPLETE.md"

# Eliminar archivos de base de datos y scripts
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\supabase.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\database.types.ts"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\prisma"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\scripts"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\sql"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\supabase"

# Eliminar contextos de autenticación complejos (mantener solo básico si es necesario)
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\contexts\AuthContext.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\contexts\SuperAdminContext.tsx"

# Eliminar archivos de configuración de base de datos
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\*.sql"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\*.db"

# Eliminar documentación técnica innecesaria
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\FASE1-AUTH-REAL-COMPLETADA.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\FASE2-BD-REAL-COMPLETADA.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\DEPLOY-GUIDE.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\DEPLOY-STATUS.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\LOGIN-CLEANUP-REPORT.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\LOGIN-INSTRUCTIONS.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\MVP-ARCHITECTURE.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\REORGANIZACION_COMPLETA.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\SISTEMA-GENERACION-LEADS.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\SISTEMA-REAL-PLAN.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\SUBDOMAIN-SETUP.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\SUPER-ADMIN-DOCS.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\VERCEL-SETUP-STEPS.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\ISSUES-RESOLVED.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\PRODUCT-ROADMAP-FUNCIONAL.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\current-business-model.md"

# Eliminar archivos de testing específicos del portal
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\audit-app.js"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\test-auth.js"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\test-domain-separation.js"

Write-Host "✅ Fase 1 completada: Archivos innecesarios eliminados"

# ================================================
# FASE 2: LIMPIAR REFERENCIAS EN ARCHIVOS
# ================================================

Write-Host "🔄 Iniciando limpieza de código..."

# Simplificar el middleware (eliminar protección de rutas)
$middlewareContent = @'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simplified middleware - only landing page exists
  return NextResponse.next();
}
'@

Set-Content -Path "d:\Projects\website\middleware.ts" -Value $middlewareContent

Write-Host "✅ Middleware simplificado"

# Simplificar hooks index
$hooksIndexContent = @'
// 🎣 Hooks Barrel Export - Landing Page Only
// Solo hooks necesarios para la página principal

// 🔒 Basic Authentication (if needed for contact forms)
export * from './useAuth'

// 📝 Form & UI Interaction Hooks
export * from './useFormSubmission'
export * from './useCountdown'
'@

Set-Content -Path "d:\Projects\website\src\hooks\index.ts" -Value $hooksIndexContent

Write-Host "✅ Hooks index simplificado"

# Limpiar shared components index
$sharedIndexContent = @'
// 🎯 Shared Components - Landing Page Only
export { default as Navigation } from './Navigation'
'@

Set-Content -Path "d:\Projects\website\src\components\shared\index.ts" -Value $sharedIndexContent

Write-Host "✅ Shared components index limpiado"

Write-Host "🎉 Limpieza completada! El proyecto ahora solo contiene la landing page y sus dependencias."
Write-Host ""
Write-Host "📋 Componentes mantenidos:"
Write-Host "  - Landing Page principal"
Write-Host "  - Header con navegación básica"
Write-Host "  - Footer"
Write-Host "  - Componentes de home (Hero, Problem, Solution, CTA, Offer)"
Write-Host "  - Chat components (HermesIAChat, ContactModal)"
Write-Host "  - CookieBanner"
Write-Host "  - Hooks básicos para formularios"
Write-Host ""
Write-Host "🗑️  Eliminado:"
Write-Host "  - Todo el sistema de portal"
Write-Host "  - Autenticación compleja"
Write-Host "  - Base de datos y Supabase"
Write-Host "  - APIs del backend"
Write-Host "  - Documentación técnica"
Write-Host "  - Scripts de deployment"
