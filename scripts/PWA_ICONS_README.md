# Script para generar iconos PWA

Este script genera automáticamente todos los iconos necesarios para tu PWA.

## Instalación de dependencias

```bash
npm install sharp
```

## Uso

```bash
node scripts/generate-pwa-icons.js
```

## Iconos generados

- **Iconos de aplicación**: 72x72 hasta 512x512px
- **Favicon**: 32x32px
- **Apple Touch Icon**: 180x180px  
- **Pantallas de splash**: Para diferentes dispositivos iOS
- **Screenshots**: Para la tienda de aplicaciones

## Estructura requerida

El script espera encontrar el logo base en:
```
public/assets/logo/aqxion_logo.svg
```

## Estructura generada

Los iconos se crean en:
```
public/assets/icons/
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-384x384.png
├── icon-512x512.png
├── apple-touch-icon.png
├── splash-*.png (múltiples tamaños)
└── screenshot-desktop.png
```

## Colores de marca

- **Fondo splash**: Azul marca (#2563eb)
- **Tamaño logo**: 30% del tamaño de pantalla
- **Fondo transparente**: Para iconos de app

## Optimización

- **Formato PNG**: Para máxima compatibilidad
- **Compresión automática**: Mediante Sharp
- **Fondos adaptativos**: Según el uso del icono

## Compatibilidad

- ✅ Chrome/Edge (Android)
- ✅ Safari (iOS)  
- ✅ Firefox
- ✅ Samsung Internet
- ✅ Windows Store

## Troubleshooting

Si el script falla:

1. Verifica que Sharp esté instalado
2. Confirma que existe el logo base
3. Revisa permisos de escritura en public/
4. Ejecuta con `node --version` >= 14

## Próximos pasos

Después de generar los iconos:

1. Verifica el manifest.json
2. Prueba la instalación en dispositivos
3. Valida con Lighthouse PWA audit
4. Sube los archivos al hosting
