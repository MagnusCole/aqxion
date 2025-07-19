// Auto-Test UX Script para AQXION
console.log('🚀 AQXION UX Auto-Test Started');

// Test 1: Scannability Score
function testScannability() {
  const headings = document.querySelectorAll('h1, h2, h3');
  const paragraphs = document.querySelectorAll('p');
  const bullets = document.querySelectorAll('li, div[class*="space-y"]');
  
  const scannabilityScore = (headings.length * 3 + bullets.length * 2 + paragraphs.length) / document.body.textContent.length * 1000;
  
  console.log(`📊 Scannability Score: ${scannabilityScore.toFixed(2)} (Target: >15)`);
  return scannabilityScore > 15;
}

// Test 2: Mobile Touch Targets
function testTouchTargets() {
  const buttons = document.querySelectorAll('a, button');
  let goodTargets = 0;
  
  buttons.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    if (rect.width >= 44 && rect.height >= 44) {
      goodTargets++;
    }
  });
  
  const touchScore = (goodTargets / buttons.length) * 100;
  console.log(`👆 Touch Targets: ${touchScore.toFixed(1)}% meet 44px min (Target: >90%)`);
  return touchScore > 90;
}

// Test 3: Load Speed Simulation
function testLoadSpeed() {
  const startTime = performance.now();
  const images = document.querySelectorAll('img');
  const scripts = document.querySelectorAll('script');
  
  const complexity = images.length + scripts.length * 2;
  const estimatedLoad = complexity * 50; // Simplified estimation
  
  console.log(`⚡ Estimated Load Time: ${estimatedLoad}ms (Target: <2000ms)`);
  return estimatedLoad < 2000;
}

// Test 4: Client Empowerment Focus
function testEmpowermentFocus() {
  const bodyText = document.body.textContent.toLowerCase();
  
  const empowermentWords = ['gratis', 'sin gastar', 'resultados', 'paso-a-paso', 'implementable', 'hoy', 'directo'];
  const salesWords = ['compra', 'precio', 'oferta', 'descuento', 'vende'];
  
  let empowermentCount = 0;
  let salesCount = 0;
  
  empowermentWords.forEach(word => {
    const matches = (bodyText.match(new RegExp(word, 'g')) || []).length;
    empowermentCount += matches;
  });
  
  salesWords.forEach(word => {
    const matches = (bodyText.match(new RegExp(word, 'g')) || []).length;
    salesCount += matches;
  });
  
  const empowermentRatio = empowermentCount / (empowermentCount + salesCount) * 100;
  console.log(`💪 Empowerment Focus: ${empowermentRatio.toFixed(1)}% (Target: >80%)`);
  return empowermentRatio > 80;
}

// Test 5: Natural Flow (Simplified)
function testNaturalFlow() {
  const sections = document.querySelectorAll('section');
  const hasLogicalFlow = sections.length >= 3 && sections.length <= 6;
  
  console.log(`🌊 Natural Flow: ${sections.length} sections (Target: 3-6)`);
  return hasLogicalFlow;
}

// Run All Tests
function runUXTests() {
  console.log('🔥 Running Complete UX Test Suite...\n');
  
  const tests = [
    { name: 'Scannability', test: testScannability },
    { name: 'Touch Targets', test: testTouchTargets },
    { name: 'Load Speed', test: testLoadSpeed },
    { name: 'Empowerment Focus', test: testEmpowermentFocus },
    { name: 'Natural Flow', test: testNaturalFlow }
  ];
  
  let passedTests = 0;
  
  tests.forEach(({ name, test }) => {
    try {
      const passed = test();
      if (passed) {
        console.log(`✅ ${name}: PASSED`);
        passedTests++;
      } else {
        console.log(`❌ ${name}: NEEDS IMPROVEMENT`);
      }
    } catch (error) {
      console.log(`⚠️ ${name}: ERROR - ${error.message}`);
    }
  });
  
  const overallScore = (passedTests / tests.length) * 100;
  console.log(`\n🎯 Overall UX Score: ${overallScore}% (Target: >90%)`);
  
  if (overallScore >= 90) {
    console.log('🚀 EXCEPTIONAL UX ACHIEVED! Ready for world-class client empowerment.');
  } else {
    console.log('🔧 UX needs refinement. Apply more iterations of Question-Delete-Simplify-Accelerate.');
  }
  
  return overallScore;
}

// Auto-run tests when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runUXTests);
} else {
  runUXTests();
}

// Export for manual testing
window.AQXION_UX_Test = runUXTests;
