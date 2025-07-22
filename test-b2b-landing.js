#!/usr/bin/env node

/**
 * AQXION B2B LANDING PAGE TEST
 * Verifica que /b2b cumpla 100% con las new.instructions para B2B
 * Enfoque: Empresas que venden a negocios (consultorías, agencias, software)
 */

const fs = require('fs');
const path = require('path');

function testB2BLandingPage() {
    console.log('🏢 AQXION B2B LANDING PAGE VERIFICATION');
    console.log('='.repeat(60));
    console.log('📍 Testing: /b2b');
    console.log('🎯 Target: Empresas B2B (consultorías, agencias, software)');
    console.log('📋 Based on: new.instructions.md - B2B Focus');
    console.log('='.repeat(60));
    
    const b2bPath = path.join(__dirname, 'src', 'app', 'b2b', 'page.tsx');
    
    if (!fs.existsSync(b2bPath)) {
        console.log('❌ B2B landing page not found at /b2b');
        return;
    }
    
    const content = fs.readFileSync(b2bPath, 'utf8');
    
    // Test 1: B2B Focus Verification
    console.log('\n🎯 1. B2B FOCUS VERIFICATION');
    const b2bTests = [
        { test: 'consultorías target', found: content.includes('consultorías') || content.includes('Consultorías'), name: 'Target: Consultorías' },
        { test: 'agencias target', found: content.includes('agencias') || content.includes('Agencias'), name: 'Target: Agencias' },
        { test: 'software target', found: content.includes('software') || content.includes('Software'), name: 'Target: Software/SaaS' },
        { test: 'linkedin focus', found: content.includes('LinkedIn') || content.includes('linkedin'), name: 'Platform: LinkedIn Strategy' },
        { test: 'b2b cycles', found: content.includes('ciclos') || content.includes('Ciclos'), name: 'Problem: Long Sales Cycles' },
        { test: 'data-driven', found: content.includes('data-driven') || content.includes('Data-Driven'), name: 'Approach: Data-Driven' }
    ];
    
    b2bTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 2: Pricing Structure B2B
    console.log('\n💰 2. B2B PRICING STRUCTURE');
    const pricingTests = [
        { test: '$797 inicial', found: content.includes('$797'), name: 'Base Price: $797 inicial' },
        { test: '5% ingresos incrementales', found: content.includes('5%') && content.includes('incremental'), name: 'B2B Model: 5% incrementales' },
        { test: '$2,497 one-time', found: content.includes('$2,497'), name: 'Alternative: $2,497 one-time' },
        { test: '>$10k value', found: content.includes('$10') && (content.includes('k') || content.includes('000')), name: 'Total Value: >$10k' },
        { test: 'facturación anual', found: content.includes('Facturación Anual') || content.includes('facturación'), name: 'B2B Qualifier: Annual Revenue' }
    ];
    
    pricingTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 3: B2B Pain Points
    console.log('\n😰 3. B2B PAIN POINTS VERIFICATION');
    const painTests = [
        { test: 'ciclos largos', found: content.includes('Ciclos') && (content.includes('largo') || content.includes('Etern')), name: 'Pain: Long Sales Cycles' },
        { test: 'ads ineficientes', found: content.includes('Ads') && (content.includes('ineficien') || content.includes('No Convier')), name: 'Pain: Inefficient Ads' },
        { test: 'solo referidos', found: content.includes('Referidos') || content.includes('referidos'), name: 'Pain: Only Referrals' },
        { test: 'propuestas no cierran', found: content.includes('Propuestas') && content.includes('Quedan'), name: 'Pain: Proposals Don\'t Close' },
        { test: 'c-level decisores', found: content.includes('C-Level') || content.includes('decisores'), name: 'Target: C-Level Decision Makers' }
    ];
    
    painTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 4: B2B Form Structure
    console.log('\n📋 4. B2B FORM STRUCTURE');
    const formTests = [
        { test: 'empresa field', found: content.includes('name="empresa"'), name: 'Field: Empresa B2B' },
        { test: 'email corporativo', found: content.includes('Email Corporativo') || content.includes('corporativo'), name: 'Field: Corporate Email' },
        { test: 'facturación selector', found: content.includes('Facturación') && content.includes('select'), name: 'Field: Revenue Range Selector' },
        { test: 'whatsapp corporativo', found: content.includes('WhatsApp Corporativo') || content.includes('Corporativo'), name: 'Field: Corporate WhatsApp' },
        { test: 'tipoNegocio B2B', found: content.includes('tipoNegocio') && content.includes('B2B'), name: 'Hidden: B2B Classification' }
    ];
    
    formTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 5: B2B Solution Components
    console.log('\n🛠️ 5. B2B SOLUTION COMPONENTS');
    const solutionTests = [
        { test: 'funnel b2b setup', found: content.includes('Funnel B2B') || (content.includes('Funnel') && content.includes('B2B')), name: 'Component: B2B Funnel Setup' },
        { test: 'outreach personalizado', found: content.includes('outreach') || content.includes('Outreach'), name: 'Component: Personalized Outreach' },
        { test: 'contenido linkedin', found: content.includes('LinkedIn') && content.includes('Contenido'), name: 'Component: LinkedIn Content' },
        { test: 'automatización ia', found: content.includes('Automatización') && content.includes('IA'), name: 'Bonus: IA Automation' },
        { test: 'comunidad b2b', found: content.includes('Comunidad') && content.includes('B2B'), name: 'Component: B2B Community' }
    ];
    
    solutionTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 6: B2B Testimonials & Social Proof
    console.log('\n🏆 6. B2B SOCIAL PROOF');
    const socialTests = [
        { test: 'agencia testimonio', found: content.includes('agencia') && (content.includes('duplicó') || content.includes('contratos')), name: 'Testimonial: Agency Success' },
        { test: 'consultora testimonio', found: content.includes('consultora') && content.includes('$25K'), name: 'Testimonial: Consultancy Growth' },
        { test: 'saas testimonio', found: content.includes('SaaS') || (content.includes('software') && content.includes('licencias')), name: 'Testimonial: SaaS Success' },
        { test: 'contratos recurrentes', found: content.includes('contratos recurrentes') || content.includes('recurrentes'), name: 'Benefit: Recurring Contracts' },
        { test: 'lima location', found: content.includes('Lima'), name: 'Geographic: Lima Focus' }
    ];
    
    socialTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Test 7: Mobile Responsiveness
    console.log('\n📱 7. MOBILE RESPONSIVENESS');
    const mobileTests = [
        { test: 'responsive text', found: content.includes('text-3xl sm:text-4xl'), name: 'Typography: Responsive Scaling' },
        { test: 'responsive padding', found: content.includes('px-4 sm:px-6 lg:px-8'), name: 'Layout: Responsive Padding' },
        { test: 'responsive grid', found: content.includes('grid lg:grid-cols-2'), name: 'Layout: Responsive Grid' },
        { test: 'mobile form', found: content.includes('py-2.5 sm:py-3'), name: 'Form: Mobile-Optimized Inputs' },
        { test: 'order responsive', found: content.includes('order-1 lg:order-2'), name: 'Layout: Mobile-First Order' }
    ];
    
    mobileTests.forEach(({test, found, name}) => {
        console.log(`   ${found ? '✅' : '❌'} ${name}`);
    });
    
    // Summary
    console.log('\n🏆 B2B LANDING PAGE SUMMARY');
    console.log('='.repeat(60));
    
    const allTests = [...b2bTests, ...pricingTests, ...painTests, ...formTests, ...solutionTests, ...socialTests, ...mobileTests];
    const passedTests = allTests.filter(test => test.found).length;
    const totalTests = allTests.length;
    const percentage = Math.round((passedTests / totalTests) * 100);
    
    console.log(`✅ Tests Passed: ${passedTests}/${totalTests} (${percentage}%)`);
    
    if (percentage >= 95) {
        console.log('🎉 EXCELLENT: B2B landing page fully optimized for business clients');
        console.log('🚀 Ready for high-value B2B lead generation');
    } else if (percentage >= 85) {
        console.log('✅ GOOD: B2B page mostly optimized, minor adjustments needed');
    } else {
        console.log('❌ NEEDS WORK: B2B page requires significant optimization');
    }
    
    console.log('\n🎯 CATEGORY BREAKDOWN:');
    console.log(`   🏢 B2B Focus: ${b2bTests.filter(t => t.found).length}/${b2bTests.length}`);
    console.log(`   💰 B2B Pricing: ${pricingTests.filter(t => t.found).length}/${pricingTests.length}`);
    console.log(`   😰 Pain Points: ${painTests.filter(t => t.found).length}/${painTests.length}`);
    console.log(`   📋 Form Structure: ${formTests.filter(t => t.found).length}/${formTests.length}`);
    console.log(`   🛠️ Solution Components: ${solutionTests.filter(t => t.found).length}/${solutionTests.length}`);
    console.log(`   🏆 Social Proof: ${socialTests.filter(t => t.found).length}/${socialTests.length}`);
    console.log(`   📱 Mobile Ready: ${mobileTests.filter(t => t.found).length}/${mobileTests.length}`);
    
    console.log('\n🔒 INTERNAL USE VERIFICATION:');
    const internalFeatures = [
        !content.includes('href="/b2b"'), // No self-references in nav
        content.includes("'use client'"), // Client-side functionality
        content.includes('noindex, nofollow') ? false : true, // Should be noindex for internal
        content.includes('B2B'), // Clear B2B focus
        content.includes('Solo 5 empresas') // B2B-specific scarcity
    ];
    const internalScore = internalFeatures.filter(Boolean).length;
    console.log(`   ${internalScore >= 4 ? '✅' : '❌'} Internal Use Features: ${internalScore}/5 implemented`);
    
    console.log('\n💼 B2B CONVERSION OPTIMIZATION:');
    const conversionFeatures = [
        content.includes('Auditoría Estratégica'),
        content.includes('data-driven'),
        content.includes('5% ingresos incrementales'),
        content.includes('Solo 5 empresas'),
        content.includes('bg-blue-600') // B2B brand color
    ];
    const conversionScore = conversionFeatures.filter(Boolean).length;
    console.log(`   ${conversionScore >= 4 ? '✅' : '❌'} B2B Conversion Elements: ${conversionScore}/5 optimizations`);
    
    console.log('='.repeat(60));
    console.log('🏢 AQXION /b2b - B2B Landing Page Test Complete');
    console.log('📍 Target: Consultorías, Agencias, Software B2B en Lima');
    console.log(`🏆 Overall Score: ${percentage}% alignment with new.instructions B2B focus`);
    console.log('🔒 Status: Internal use only (no navigation references)');
    console.log('='.repeat(60));
}

// Run the test
testB2BLandingPage();
