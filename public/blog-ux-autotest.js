// Blog UX Auto-Test Script para AQXION
console.log('📚 AQXION Blog UX Auto-Test Started');

// Test 1: Blog Navigation Scannability 
function testBlogScannability() {
  const categories = document.querySelectorAll('h2');
  const guideLinks = document.querySelectorAll('a[href*="/blog/"]');
  const icons = document.querySelectorAll('[class*="text-"]');
  
  const scanScore = (categories.length * 5 + guideLinks.length * 2 + icons.length) / 10;
  
  console.log(`📊 Blog Scannability: ${scanScore.toFixed(1)} (Target: >8)`);
  return scanScore > 8;
}

// Test 2: Problem-Solution Matching
function testProblemSolutionFlow() {
  const problemHeaders = document.querySelectorAll('h2');
  let problemCount = 0;
  
  problemHeaders.forEach(header => {
    const text = header.textContent?.toLowerCase() || '';
    if (text.includes('necesito') || text.includes('quiero') || text.includes('no tengo')) {
      problemCount++;
    }
  });
  
  const flowScore = (problemCount / problemHeaders.length) * 100;
  console.log(`🎯 Problem-Solution Flow: ${flowScore.toFixed(1)}% (Target: >75%)`);
  return flowScore > 75;
}

// Test 3: Guide Accessibility (Click to Value)
function testGuideAccessibility() {
  const guideLinks = document.querySelectorAll('a[href*="/blog/"]');
  const clicksToValue = 1; // Direct links to guides
  let accessibleGuides = 0;
  
  guideLinks.forEach(link => {
    const hasDescription = link.querySelector('div') || link.nextElementSibling;
    if (hasDescription) {
      accessibleGuides++;
    }
  });
  
  const accessibilityScore = (accessibleGuides / guideLinks.length) * 100;
  console.log(`🔗 Guide Accessibility: ${accessibilityScore.toFixed(1)}% have descriptions (Target: >80%)`);
  return accessibilityScore > 80 && clicksToValue <= 1;
}

// Test 4: Mobile Blog Experience
function testMobileBlogUX() {
  const isMobileViewport = window.innerWidth < 768;
  const hasResponsiveGrid = document.querySelector('[class*="md:grid-cols"]');
  const hasTouchFriendlyLinks = Array.from(document.querySelectorAll('a')).every(link => {
    const rect = link.getBoundingClientRect();
    return rect.height >= 40; // Minimum touch target
  });
  
  const mobileScore = (hasResponsiveGrid ? 50 : 0) + (hasTouchFriendlyLinks ? 50 : 0);
  console.log(`📱 Mobile Blog UX: ${mobileScore}% (Target: >90%)`);
  return mobileScore > 90;
}

// Test 5: Content Empowerment vs Sales
function testBlogEmpowermentFocus() {
  const bodyText = document.body.textContent?.toLowerCase() || '';
  
  const empowermentWords = ['gratis', 'guía', 'práctica', 'implementar', 'paso-a-paso', 'resultados', 'útil'];
  const salesWords = ['comprar', 'contratar', 'pagar', 'precio', 'servicio'];
  
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
  console.log(`💪 Blog Empowerment Focus: ${empowermentRatio.toFixed(1)}% (Target: >85%)`);
  return empowermentRatio > 85;
}

// Test 6: Article Reading Experience (for individual posts)
function testArticleReadingUX() {
  if (!window.location.pathname.includes('/blog/')) {
    console.log('📖 Article Reading UX: N/A (not on article page)');
    return true;
  }
  
  const article = document.querySelector('article');
  const hasActionBox = document.querySelector('[class*="bg-primary-50"]');
  const hasClearCTA = document.querySelector('a[href="/blog"]');
  const hasProseStyles = document.querySelector('.prose');
  
  let articleScore = 0;
  if (article) articleScore += 25;
  if (hasActionBox) articleScore += 25;
  if (hasClearCTA) articleScore += 25;
  if (hasProseStyles) articleScore += 25;
  
  console.log(`📖 Article Reading UX: ${articleScore}% (Target: >85%)`);
  return articleScore > 85;
}

// Run All Blog Tests
function runBlogUXTests() {
  console.log('🚀 Running Complete Blog UX Test Suite...\n');
  
  const tests = [
    { name: 'Blog Scannability', test: testBlogScannability },
    { name: 'Problem-Solution Flow', test: testProblemSolutionFlow },
    { name: 'Guide Accessibility', test: testGuideAccessibility },
    { name: 'Mobile Blog UX', test: testMobileBlogUX },
    { name: 'Blog Empowerment Focus', test: testBlogEmpowermentFocus },
    { name: 'Article Reading UX', test: testArticleReadingUX }
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
  console.log(`\n🎯 Overall Blog UX Score: ${overallScore}% (Target: >90%)`);
  
  if (overallScore >= 90) {
    console.log('🚀 EXCEPTIONAL BLOG UX! Ready for maximum client empowerment and engagement.');
  } else if (overallScore >= 75) {
    console.log('📈 Good blog UX. Apply one more iteration to reach exceptional level.');
  } else {
    console.log('🔧 Blog UX needs significant refinement. Apply Question-Delete-Simplify-Accelerate.');
  }
  
  return overallScore;
}

// Auto-run tests when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runBlogUXTests);
} else {
  runBlogUXTests();
}

// Export for manual testing
window.AQXION_Blog_UX_Test = runBlogUXTests;
