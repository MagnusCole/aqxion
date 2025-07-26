# Script de limpieza para landing page
Write-Host "Iniciando limpieza del proyecto..." -ForegroundColor Yellow

$baseDir = "d:\Projects\website"
Set-Location $baseDir

# Carpetas a eliminar
$carpetas = @(
    "src\app\api",
    "scripts", 
    "sql",
    "supabase",
    "docs",
    "instructions",
    "prisma"
)

Write-Host "Eliminando carpetas innecesarias..." -ForegroundColor Green
foreach ($carpeta in $carpetas) {
    $ruta = Join-Path $baseDir $carpeta
    if (Test-Path $ruta) {
        Remove-Item -Recurse -Force $ruta -ErrorAction SilentlyContinue
        Write-Host "Eliminado: $carpeta" -ForegroundColor DarkGreen
    }
}

# Archivos específicos a eliminar
$archivos = @(
    "database-schema.sql",
    "setup-completo-desde-cero.sql", 
    "deploy.bat",
    "deploy.sh",
    "test-auth.js",
    "audit-app.js",
    "vercel.json",
    "tsconfig.tsbuildinfo"
)

Write-Host "Eliminando archivos innecesarios..." -ForegroundColor Green
foreach ($archivo in $archivos) {
    $ruta = Join-Path $baseDir $archivo
    if (Test-Path $ruta) {
        Remove-Item -Force $ruta -ErrorAction SilentlyContinue
        Write-Host "Eliminado: $archivo" -ForegroundColor DarkGreen
    }
}

# Archivos markdown de documentación
$docs = Get-ChildItem -Path $baseDir -Name "*.md" | Where-Object { 
    $_ -notlike "*README*" -and $_ -notlike "*README-LANDING*" 
}

foreach ($doc in $docs) {
    $ruta = Join-Path $baseDir $doc
    Remove-Item -Force $ruta -ErrorAction SilentlyContinue
    Write-Host "Eliminado: $doc" -ForegroundColor DarkGreen
}

Write-Host "Limpieza completada!" -ForegroundColor Green
Write-Host "Solo queda la landing page y sus componentes funcionales." -ForegroundColor Cyan
