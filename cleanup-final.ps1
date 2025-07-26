# Script de Limpieza del Proyecto - Solo Landing Page
# Elimina todo excepto lo necesario para la pagina principal

Write-Host "Iniciando limpieza del proyecto..."

# Eliminar todas las paginas excepto la principal
Write-Host "Eliminando paginas innecesarias..."
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\auth"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\login"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\debug" 
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\api\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\app\onboarding"

# Eliminar componentes del portal
Write-Host "Eliminando componentes del portal..."
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\components\portal"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\components\page-components\portal"

# Eliminar layouts innecesarios
Write-Host "Eliminando layouts innecesarios..."
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\layouts\PortalLayout.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\layouts\MainLayout.tsx"

# Eliminar hooks innecesarios
Write-Host "Eliminando hooks innecesarios..."
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

# Eliminar archivos de configuracion del portal
Write-Host "Eliminando archivos de configuracion del portal..."
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\portal-service.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\lib\portal-service-v2.ts"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\src\types\portal.ts"

# Eliminar documentacion del portal
Write-Host "Eliminando documentacion del portal..."
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\portal-mejoras-implementadas.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\cleanup-portal.ps1"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\PORTAL-FUNCIONAL-REPORTE.md"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\PORTAL-STATUS-COMPLETE.md"

# Eliminar archivos de base de datos
Write-Host "Eliminando archivos de base de datos..."
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\prisma"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\scripts"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\sql"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "d:\Projects\website\supabase"

# Eliminar archivos SQL
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\*.sql"

# Eliminar documentacion tecnica innecesaria
Write-Host "Eliminando documentacion tecnica..."
$docsToRemove = @(
    "FASE1-AUTH-REAL-COMPLETADA.md",
    "FASE2-BD-REAL-COMPLETADA.md", 
    "DEPLOY-GUIDE.md",
    "DEPLOY-STATUS.md",
    "LOGIN-CLEANUP-REPORT.md",
    "LOGIN-INSTRUCTIONS.md",
    "MVP-ARCHITECTURE.md",
    "REORGANIZACION_COMPLETA.md",
    "SISTEMA-GENERACION-LEADS.md",
    "SISTEMA-REAL-PLAN.md",
    "SUBDOMAIN-SETUP.md",
    "SUPER-ADMIN-DOCS.md",
    "VERCEL-SETUP-STEPS.md",
    "ISSUES-RESOLVED.md",
    "PRODUCT-ROADMAP-FUNCIONAL.md",
    "current-business-model.md"
)

foreach ($doc in $docsToRemove) {
    Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\$doc"
}

# Eliminar archivos de testing
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\audit-app.js"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\test-auth.js"
Remove-Item -Force -ErrorAction SilentlyContinue "d:\Projects\website\test-domain-separation.js"

Write-Host "Limpieza de archivos completada!"
Write-Host ""
Write-Host "Componentes mantenidos:"
Write-Host "- Landing Page principal"
Write-Host "- Header con navegacion basica"
Write-Host "- Footer"
Write-Host "- Componentes de home"
Write-Host "- Chat components"
Write-Host "- CookieBanner"
Write-Host "- Hooks basicos para formularios"
