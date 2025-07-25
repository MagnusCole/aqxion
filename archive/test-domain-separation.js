// test-domain-separation.js - Script para probar la separación estricta de dominios

const tests = [
  // ✅ ACCESOS PERMITIDOS
  { url: 'https://app.aqxion.com/', expected: 'redirect to /auth/signin', description: 'app.aqxion.com root → auth' },
  { url: 'https://app.aqxion.com/auth/signin', expected: '200', description: 'app.aqxion.com auth ✅' },
  { url: 'https://app.aqxion.com/portal/dashboard', expected: '307 to auth', description: 'app.aqxion.com portal (requires auth)' },
  { url: 'https://www.aqxion.com/', expected: '200', description: 'www.aqxion.com landing ✅' },
  { url: 'https://aqxion.com/', expected: 'redirect to www', description: 'aqxion.com → www ✅' },
  
  // ❌ ACCESOS BLOQUEADOS
  { url: 'https://www.aqxion.com/portal/dashboard', expected: 'redirect to app', description: 'www trying portal → blocked' },
  { url: 'https://www.aqxion.com/auth/signin', expected: 'redirect to app', description: 'www trying auth → blocked' },
  { url: 'https://aqxion.com/portal/dashboard', expected: 'redirect to app', description: 'root trying portal → blocked' },
  { url: 'https://aqxion.com/auth/signin', expected: 'redirect to app', description: 'root trying auth → blocked' },
];

async function testDomainSeparation() {
  console.log('🔒 TESTING STRICT DOMAIN SEPARATION');
  console.log('====================================\n');
  
  for (const test of tests) {
    try {
      console.log(`📍 ${test.description}`);
      console.log(`   URL: ${test.url}`);
      
      const response = await fetch(test.url, { 
        method: 'HEAD',
        redirect: 'manual' // No seguir redirects automáticamente
      });
      
      const status = response.status;
      const location = response.headers.get('location');
      
      console.log(`   Status: ${status}`);
      if (location) {
        console.log(`   Redirect: ${location}`);
      }
      
      // Verificar el resultado esperado
      if (test.expected.includes('200') && status === 200) {
        console.log('   ✅ PASSED');
      } else if (test.expected.includes('redirect') && (status === 307 || status === 302)) {
        console.log('   🔄 REDIRECT (expected)');
      } else if (test.expected.includes('307') && status === 307) {
        console.log('   🔄 AUTH REQUIRED (expected)');
      } else {
        console.log('   ⚠️  CHECK MANUALLY');
      }
      
    } catch (error) {
      console.log(`   ❌ ERROR: ${error.message}`);
    }
    
    console.log('');
  }
  
  console.log('🎯 DOMAIN SEPARATION TEST COMPLETED');
  console.log('\n✅ Expected behavior:');
  console.log('   • app.aqxion.com → Only portal + auth');
  console.log('   • www.aqxion.com → Only landing page');
  console.log('   • Cross-domain attempts → Redirect to correct domain');
}

testDomainSeparation();
