# ====================================
# SCRIPT DE LIMPIEZA PARA PÁGINA PRINCIPAL
# Elimina todo lo que no es necesario para la landing page
# ====================================

Write-Host "🧹 Iniciando limpieza del proyecto..." -ForegroundColor Yellow
Write-Host "Solo mantendremos la página principal y sus componentes funcionales." -ForegroundColor Cyan

$baseDir = "d:\Projects\website"
Set-Location $baseDir

# Carpetas a eliminar completamente
$carpetasEliminar = @(
    "src\app\api",
    "src\contexts",
    "src\layouts",
    "src\types",
    "src\services",
    "scripts",
    "sql",
    "supabase",
    "docs",
    "instructions",
    "prisma"
)

Write-Host "`n📂 Eliminando carpetas innecesarias..." -ForegroundColor Green
foreach ($carpeta in $carpetasEliminar) {
    $ruta = Join-Path $baseDir $carpeta
    if (Test-Path $ruta) {
        Remove-Item -Recurse -Force $ruta
        Write-Host "   ✓ Eliminado: $carpeta" -ForegroundColor DarkGreen
    } else {
        Write-Host "   ⚠ No encontrado: $carpeta" -ForegroundColor DarkYellow
    }
}

# Archivos específicos a eliminar
$archivosEliminar = @(
    # Hooks innecesarios (mantenemos solo useFormSubmission y useCountdown)
    "src\hooks\useAuth.ts",
    
    # Archivos de configuración de BD
    "database-schema.sql",
    "setup-completo-desde-cero.sql",
    "recreate-supabase-tables.sql",
    "fix-supabase-permissions.sql",
    "fix-users-permissions.sql",
    "super-admin-schema.sql",
    "confirmar-email-manual.sql",
    "crear-perfil-usuario.sql",
    "actualizar-password.sql",
    "reset-password-known.sql",
    "temp_audit.sql",
    
    # Scripts y archivos de deploy
    "deploy.bat",
    "deploy.sh",
    "test-auth.js",
    "test-domain-separation.js",
    "audit-app.js",
    
    # Documentación específica del portal
    "APP-AQXION-ROADMAP.md",
    "CREDENCIALES-DEMO.md",
    "current-business-model.md",
    "DEPLOY-GUIDE.md",
    "DEPLOY-STATUS.md",
    "FASE1-AUTH-REAL-COMPLETADA.md",
    "FASE2-BD-REAL-COMPLETADA.md",
    "ISSUES-RESOLVED.md",
    "LOGIN-CLEANUP-REPORT.md",
    "LOGIN-INSTRUCTIONS.md",
    "MVP-ARCHITECTURE.md",
    "PRODUCT-ROADMAP-FUNCIONAL.md",
    "REORGANIZACION_COMPLETA.md",
    "SISTEMA-GENERACION-LEADS.md",
    "SISTEMA-REAL-PLAN.md",
    "SUBDOMAIN-SETUP.md",
    "SUPER-ADMIN-DOCS.md",
    "VERCEL-SETUP-STEPS.md",
    
    # Componentes innecesarios
    "src\components\AppleNavigation.tsx",
    "src\components\MobileMenu.tsx",
    "src\components\CookieConsent.tsx",
    "src\components\CookieConfigButton.tsx",
    "src\components\EmailSignup.tsx"
)

Write-Host "`n📄 Eliminando archivos innecesarios..." -ForegroundColor Green
foreach ($archivo in $archivosEliminar) {
    $ruta = Join-Path $baseDir $archivo
    if (Test-Path $ruta) {
        Remove-Item -Force $ruta
        Write-Host "   ✓ Eliminado: $archivo" -ForegroundColor DarkGreen
    } else {
        Write-Host "   ⚠ No encontrado: $archivo" -ForegroundColor DarkYellow
    }
}

# Limpiar archivos de configuración específicos
$configsLimpiar = @(
    "vercel.json"
)

Write-Host "`n⚙️ Limpiando configuraciones innecesarias..." -ForegroundColor Green
foreach ($config in $configsLimpiar) {
    $ruta = Join-Path $baseDir $config
    if (Test-Path $ruta) {
        Remove-Item -Force $ruta
        Write-Host "   ✓ Eliminado: $config" -ForegroundColor DarkGreen
    }
}

# Limpiar archivos temporales y de build
$temporalesLimpiar = @(
    "tsconfig.tsbuildinfo",
    ".next",
    "node_modules\.cache",
    "*.log"
)

Write-Host "`n🗑️ Limpiando archivos temporales..." -ForegroundColor Green
foreach ($temporal in $temporalesLimpiar) {
    $rutas = Get-ChildItem -Path $baseDir -Name $temporal -Recurse -Force 2>$null
    foreach ($ruta in $rutas) {
        $rutaCompleta = Join-Path $baseDir $ruta
        if (Test-Path $rutaCompleta) {
            Remove-Item -Recurse -Force $rutaCompleta
            Write-Host "   ✓ Eliminado: $ruta" -ForegroundColor DarkGreen
        }
    }
}

Write-Host "`n📋 Archivos y carpetas que SE MANTIENEN:" -ForegroundColor Magenta
$mantener = @(
    "✓ src/app/page.tsx (página principal)",
    "✓ src/app/layout.tsx (layout principal)",
    "✓ src/app/gracias/ (página de agradecimiento)",
    "✓ src/components/page-components/home/ (componentes de landing)",
    "✓ src/components/page-components/shared/ (componentes compartidos)",
    "✓ src/components/shared/Navigation.tsx (simplificado)",
    "✓ src/components/ui/ (componentes UI básicos)",
    "✓ src/hooks/useFormSubmission.ts (para formularios)",
    "✓ src/hooks/useCountdown.ts (para landing)",
    "✓ src/lib/ (utilidades necesarias)",
    "✓ src/styles/ (estilos)",
    "✓ public/ (assets públicos)",
    "✓ package.json, next.config.js, tailwind.config.js",
    "✓ middleware.ts (simplificado)"
)

foreach ($item in $mantener) {
    Write-Host "   $item" -ForegroundColor DarkMagenta
}

Write-Host "`n🎯 RESULTADO:" -ForegroundColor White -BackgroundColor Green
Write-Host "Proyecto limpiado exitosamente. Solo queda:" -ForegroundColor Green
Write-Host "- Página principal (LandingPage) completamente funcional" -ForegroundColor Green
Write-Host "- Todos sus componentes y estilos necesarios" -ForegroundColor Green
Write-Host "- Configuración mínima para Next.js" -ForegroundColor Green
Write-Host "- Sin dependencias de autenticación, portal o BD" -ForegroundColor Green

Write-Host "`n🚀 Para verificar que todo funciona:" -ForegroundColor Cyan
Write-Host "1. npm install" -ForegroundColor White
Write-Host "2. npm run dev" -ForegroundColor White
Write-Host "3. Abrir http://localhost:3000" -ForegroundColor White

Write-Host "`n✅ Limpieza completada!" -ForegroundColor Green
