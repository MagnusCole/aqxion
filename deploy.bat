@echo off
REM 🚀 Script de Deploy para app.aqxion.com - Windows
REM Ejecutar: deploy.bat

echo 🚀 Iniciando deploy a app.aqxion.com...

REM 1. Verificar que estamos en el directorio correcto
if not exist "package.json" (
    echo ❌ Error: No se encontró package.json. Ejecuta desde la raíz del proyecto.
    exit /b 1
)

REM 2. Verificar/Instalar Vercel CLI
vercel --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Instalando Vercel CLI...
    npm install -g vercel
)

REM 3. Build local para verificar
echo 🔨 Verificando build local...
npm run build

if errorlevel 1 (
    echo ❌ Error en build local. Revisa los errores antes de hacer deploy.
    exit /b 1
)

REM 4. Deploy a Vercel
echo ☁️ Haciendo deploy a Vercel...
vercel --prod

REM 5. Configurar dominio custom
echo 🌐 Configurando dominio app.aqxion.com...
vercel domains add app.aqxion.com

echo ✅ Deploy completado!
echo 🔗 URL: https://app.aqxion.com
echo 🔑 Credenciales demo: demo@cliente.com / demo123

echo 🎉 ¡Deploy completado exitosamente!
