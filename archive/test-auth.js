// Script de prueba para verificar autenticación
// Ejecutar con: node test-auth.js

const https = require('https');

console.log('🔍 Probando autenticación en app.aqxion.com...\n');

// Test 1: Verificar que app.aqxion.com redirige a login
function testAppSubdomain() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'app.aqxion.com',
      port: 443,
      path: '/',
      method: 'GET',
      headers: {
        'User-Agent': 'Test-Script/1.0'
      }
    };

    const req = https.request(options, (res) => {
      console.log(`📍 app.aqxion.com/ - Status: ${res.statusCode}`);
      console.log(`📍 Location header: ${res.headers.location || 'No redirect'}`);
      
      if (res.statusCode === 302 || res.statusCode === 307) {
        console.log('✅ Redirección detectada correctamente');
      } else {
        console.log('⚠️  No hay redirección automática');
      }
      
      resolve();
    });

    req.on('error', (e) => {
      console.error(`❌ Error: ${e.message}`);
      resolve();
    });

    req.end();
  });
}

// Test 2: Verificar que /auth/signin es accesible
function testLoginPage() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'app.aqxion.com',
      port: 443,
      path: '/auth/signin',
      method: 'GET',
      headers: {
        'User-Agent': 'Test-Script/1.0'
      }
    };

    const req = https.request(options, (res) => {
      console.log(`📍 app.aqxion.com/auth/signin - Status: ${res.statusCode}`);
      
      if (res.statusCode === 200) {
        console.log('✅ Página de login accesible');
      } else {
        console.log('❌ Página de login no accesible');
      }
      
      resolve();
    });

    req.on('error', (e) => {
      console.error(`❌ Error: ${e.message}`);
      resolve();
    });

    req.end();
  });
}

// Test 3: Verificar que www.aqxion.com muestra landing
function testWwwSubdomain() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.aqxion.com',
      port: 443,
      path: '/',
      method: 'GET',
      headers: {
        'User-Agent': 'Test-Script/1.0'
      }
    };

    const req = https.request(options, (res) => {
      console.log(`📍 www.aqxion.com/ - Status: ${res.statusCode}`);
      
      if (res.statusCode === 200) {
        console.log('✅ Landing page accesible');
      } else {
        console.log('❌ Landing page no accesible');
      }
      
      resolve();
    });

    req.on('error', (e) => {
      console.error(`❌ Error: ${e.message}`);
      resolve();
    });

    req.end();
  });
}

async function runTests() {
  console.log('Test 1: Verificando app.aqxion.com/');
  await testAppSubdomain();
  
  console.log('\nTest 2: Verificando app.aqxion.com/auth/signin');
  await testLoginPage();
  
  console.log('\nTest 3: Verificando www.aqxion.com/');
  await testWwwSubdomain();
  
  console.log('\n🎯 Tests completados');
  console.log('\n📋 Credenciales para probar:');
  console.log('Email: demo@cliente.com');
  console.log('Password: demo123');
}

runTests();
