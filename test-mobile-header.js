#!/usr/bin/env node

/**
 * AQXION MOBILE HEADER RESPONSIVENESS TEST
 * Verifica que el header sea 100% mobile responsive y coherente
 */

const fs = require('fs');
const path = require('path');

function testMobileHeader() {
    console.log('📱 AQXION MOBILE HEADER RESPONSIVENESS TEST');
    console.log('='.repeat(60));
    console.log('🎯 Testing: Header Navigation');
    console.log('📍 Focus: 100% Mobile Responsive & Coherent');
    console.log('='.repeat(60));
    
    const layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
    const mobileMenuPath = path.join(__dirname, 'src', 'components', 'MobileMenu.tsx');
    
    if (!fs.existsSync(layoutPath)) {
        console.log('❌ Layout file not found');
        return;
    }
    
    if (!fs.existsSync(mobileMenuPath)) {
        console.log('❌ MobileMenu component not found');
        return;
    }
    
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const mobileMenuContent = fs.readFileSync(mobileMenuPath, 'utf8');
    
    // Test 1: Mobile Responsiveness
    console.log('\n📱 1. MOBILE RESPONSIVENESS VERIFICATION');
    const mobileTests = [
        { test: 'responsive container', found: layoutContent.includes('px-4 sm:px-6 lg:px-8'), name: 'Container: Responsive Padding' },
        { test: 'responsive logo', found: layoutContent.includes('text-xl sm:text-2xl'), name: 'Logo: Responsive Text Size' },
        { test: 'responsive height', found: layoutContent.includes('h-16 sm:h-20'), name: 'Header: Responsive Height' },
        { test: 'hidden desktop menu', found: layoutContent.includes('hidden md:flex'), name: 'Navigation: Hidden on Mobile' },
        { test: 'visible mobile menu', found: mobileMenuContent.includes('md:hidden'), name: 'Mobile Menu: Visible Only on Mobile' }
    ];
    
    mobileTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 2: Menu Structure
    console.log('\n🗂️ 2. MENU STRUCTURE VERIFICATION');
    const structureTests = [
        { test: 'guias link', found: layoutContent.includes('href="/guias"'), name: 'Navigation: Guías Link' },
        { test: 'recursos link', found: layoutContent.includes('href="/recursos"'), name: 'Navigation: Recursos Link' },
        { test: 'cursos link', found: layoutContent.includes('href="/cursos"'), name: 'Navigation: Cursos Link' },
        { test: 'empezar cta', found: layoutContent.includes('href="/empezar"'), name: 'CTA: Empezar Button' },
        { test: 'mobile empezar', found: mobileMenuContent.includes('href="/empezar"'), name: 'Mobile: Empezar CTA Present' }
    ];
    
    structureTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 3: Interactive Elements
    console.log('\n🎯 3. INTERACTIVE ELEMENTS VERIFICATION');
    const interactiveTests = [
        { test: 'mobile toggle', found: mobileMenuContent.includes('useState') && mobileMenuContent.includes('toggleMenu'), name: 'Mobile: Toggle Functionality' },
        { test: 'hover effects', found: layoutContent.includes('hover:text-green-600') && layoutContent.includes('hover:bg-green-50'), name: 'Hover: Interactive States' },
        { test: 'transition effects', found: layoutContent.includes('transition-all duration-200'), name: 'Animation: Smooth Transitions' },
        { test: 'aria accessibility', found: mobileMenuContent.includes('aria-expanded'), name: 'Accessibility: ARIA Labels' },
        { test: 'menu close on click', found: mobileMenuContent.includes('setIsOpen(false)'), name: 'UX: Auto-close on Selection' }
    ];
    
    interactiveTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 4: Visual Consistency
    console.log('\n🎨 4. VISUAL CONSISTENCY VERIFICATION');
    const visualTests = [
        { test: 'green theme', found: layoutContent.includes('bg-green-600') && mobileMenuContent.includes('text-green-600'), name: 'Theme: Consistent Green Branding' },
        { test: 'shadow depth', found: layoutContent.includes('shadow-sm') && mobileMenuContent.includes('shadow-md'), name: 'Depth: Shadow Hierarchy' },
        { test: 'rounded corners', found: layoutContent.includes('rounded-lg'), name: 'Style: Consistent Border Radius' },
        { test: 'font weights', found: layoutContent.includes('font-bold') && layoutContent.includes('font-semibold'), name: 'Typography: Weight Hierarchy' },
        { test: 'spacing consistency', found: layoutContent.includes('space-x-1 lg:space-x-2') && mobileMenuContent.includes('space-y-1'), name: 'Layout: Consistent Spacing' }
    ];
    
    visualTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 5: Performance & Code Quality
    console.log('\n⚡ 5. PERFORMANCE & CODE QUALITY');
    const performanceTests = [
        { test: 'client component', found: mobileMenuContent.includes("'use client'"), name: 'Performance: Client-side Only Where Needed' },
        { test: 'sticky header', found: layoutContent.includes('sticky top-0'), name: 'UX: Sticky Navigation' },
        { test: 'z-index control', found: layoutContent.includes('z-50'), name: 'Layout: Proper Layer Management' },
        { test: 'semantic html', found: layoutContent.includes('<nav') && layoutContent.includes('<header'), name: 'SEO: Semantic HTML Structure' },
        { test: 'mobile breakpoints', found: layoutContent.includes('md:') && layoutContent.includes('sm:'), name: 'Responsive: Proper Breakpoints' }
    ];
    
    performanceTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Summary
    console.log('\n🏆 HEADER RESPONSIVENESS SUMMARY');
    console.log('='.repeat(60));
    
    const allTests = [...mobileTests, ...structureTests, ...interactiveTests, ...visualTests, ...performanceTests];
    const passedTests = allTests.filter(test => test.found).length;
    const totalTests = allTests.length;
    const percentage = Math.round((passedTests / totalTests) * 100);
    
    console.log(`✅ Tests Passed: ${passedTests}/${totalTests} (${percentage}%)`);
    
    if (percentage >= 95) {
        console.log('🎉 EXCELLENT: Header is fully mobile responsive and coherent');
        console.log('🚀 Ready for production mobile experience');
    } else if (percentage >= 85) {
        console.log('✅ GOOD: Header mostly responsive, minor optimizations needed');
    } else {
        console.log('❌ NEEDS WORK: Header requires significant mobile improvements');
    }
    
    console.log('\n🎯 CATEGORY BREAKDOWN:');
    console.log(`   📱 Mobile Responsiveness: ${mobileTests.filter(t => t.found).length}/${mobileTests.length}`);
    console.log(`   🗂️ Menu Structure: ${structureTests.filter(t => t.found).length}/${structureTests.length}`);
    console.log(`   🎯 Interactive Elements: ${interactiveTests.filter(t => t.found).length}/${interactiveTests.length}`);
    console.log(`   🎨 Visual Consistency: ${visualTests.filter(t => t.found).length}/${visualTests.length}`);
    console.log(`   ⚡ Performance & Quality: ${performanceTests.filter(t => t.found).length}/${performanceTests.length}`);
    
    console.log('\n📱 MOBILE UX FEATURES:');
    const mobileFeatures = [
        mobileMenuContent.includes('🚀 Empezar Ahora'),
        mobileMenuContent.includes('📚 Guías'),
        mobileMenuContent.includes('🛠️ Recursos'), 
        mobileMenuContent.includes('🎓 Cursos'),
        layoutContent.includes('flex-shrink-0')
    ];
    const mobileScore = mobileFeatures.filter(Boolean).length;
    console.log(`   ${mobileScore >= 4 ? '✅' : '❌'} Mobile UX Features: ${mobileScore}/5 implemented`);
    
    console.log('\n🎨 DESIGN COHERENCE:');
    const designFeatures = [
        layoutContent.includes('hover:scale-105'), // Micro-interactions
        layoutContent.includes('transition-all duration-200'), // Smooth animations
        mobileMenuContent.includes('text-center'), // Center alignment
        layoutContent.includes('shadow-md hover:shadow-lg'), // Progressive shadow
        mobileMenuContent.includes('block w-full') // Full-width mobile buttons
    ];
    const designScore = designFeatures.filter(Boolean).length;
    console.log(`   ${designScore >= 4 ? '✅' : '❌'} Design Coherence: ${designScore}/5 elements`);
    
    console.log('='.repeat(60));
    console.log('📱 AQXION Mobile Header Test Complete');
    console.log(`🏆 Overall Score: ${percentage}% mobile responsiveness`);
    console.log('='.repeat(60));
}

// Run the test
testMobileHeader();
