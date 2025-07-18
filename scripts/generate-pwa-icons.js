#!/usr/bin/env node

/**
 * Script para generar iconos PWA desde un logo base
 * Requiere Sharp (npm install sharp)
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const ICON_SIZES = [
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' }
];

const SPLASH_SCREENS = [
  { width: 2048, height: 2732, name: 'splash-2048x2732.png' }, // iPad Pro 12.9"
  { width: 1668, height: 2224, name: 'splash-1668x2224.png' }, // iPad Pro 10.5"
  { width: 1536, height: 2048, name: 'splash-1536x2048.png' }, // iPad
  { width: 1125, height: 2436, name: 'splash-1125x2436.png' }, // iPhone X
  { width: 1242, height: 2208, name: 'splash-1242x2208.png' }, // iPhone 6 Plus
  { width: 750, height: 1334, name: 'splash-750x1334.png' },   // iPhone 6
  { width: 640, height: 1136, name: 'splash-640x1136.png' }    // iPhone 5
];

async function generateIcons() {
  try {
    console.log('🚀 Iniciando generación de iconos PWA...');
    
    // Verificar si existe la carpeta de iconos
    const iconsDir = path.join(process.cwd(), 'public', 'assets', 'icons');
    try {
      await fs.access(iconsDir);
    } catch (error) {
      await fs.mkdir(iconsDir, { recursive: true });
      console.log('📁 Carpeta de iconos creada');
    }

    // Logo base (debería existir)
    const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo', 'aqxion_logo.svg');
    
    // Verificar si existe el logo
    try {
      await fs.access(logoPath);
    } catch (error) {
      console.error('❌ Logo base no encontrado en:', logoPath);
      console.log('💡 Crea un logo SVG en public/assets/logo/aqxion_logo.svg');
      return;
    }

    // Generar iconos de diferentes tamaños
    console.log('🖼️  Generando iconos...');
    for (const icon of ICON_SIZES) {
      const outputPath = path.join(iconsDir, icon.name);
      
      await sharp(logoPath)
        .resize(icon.size, icon.size, {
          fit: 'inside',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${icon.name} generado`);
    }

    // Generar favicon
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
    await sharp(logoPath)
      .resize(32, 32)
      .png()
      .toFile(faviconPath);
    console.log('✅ favicon.ico generado');

    // Generar apple-touch-icon
    const appleTouchPath = path.join(iconsDir, 'apple-touch-icon.png');
    await sharp(logoPath)
      .resize(180, 180)
      .png()
      .toFile(appleTouchPath);
    console.log('✅ apple-touch-icon.png generado');

    // Generar pantallas de splash con fondo de marca
    console.log('🌅 Generando pantallas de splash...');
    for (const splash of SPLASH_SCREENS) {
      const outputPath = path.join(iconsDir, splash.name);
      
      // Crear imagen de splash con logo centrado y fondo de marca
      const logoSize = Math.min(splash.width, splash.height) * 0.3;
      
      await sharp({
        create: {
          width: splash.width,
          height: splash.height,
          channels: 4,
          background: { r: 37, g: 99, b: 235, alpha: 1 } // Color azul de marca
        }
      })
      .composite([
        {
          input: await sharp(logoPath)
            .resize(Math.round(logoSize), Math.round(logoSize), {
              fit: 'inside',
              background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toBuffer(),
          gravity: 'center'
        }
      ])
      .png()
      .toFile(outputPath);
      
      console.log(`✅ ${splash.name} generado`);
    }

    // Generar screenshot para la tienda
    const screenshotPath = path.join(iconsDir, 'screenshot-desktop.png');
    await sharp({
      create: {
        width: 1280,
        height: 720,
        channels: 4,
        background: { r: 248, g: 249, b: 251, alpha: 1 }
      }
    })
    .composite([
      {
        input: await sharp(logoPath)
          .resize(200, 200, {
            fit: 'inside',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toFile(screenshotPath);
    console.log('✅ Screenshot generado');

    console.log('🎉 Todos los iconos PWA generados exitosamente!');
    console.log('📱 Tu PWA está lista para ser instalada');
    
  } catch (error) {
    console.error('❌ Error generando iconos:', error);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  generateIcons();
}

module.exports = { generateIcons };
