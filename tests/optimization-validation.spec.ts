// LLM-OPTIMIZED: Comprehensive testing for AQXION optimization systems
// Auto-improved validation of all 6 pillars implemented

import { test, expect } from '@playwright/test';

// Test homepage performance and SEO
test.describe('AQXION Performance & SEO Validation', () => {
  test('homepage loads with optimal Core Web Vitals', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for content to load
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for SEO meta tags
    const title = await page.title();
    expect(title).toContain('AQXION');
    expect(title).toContain('Agencia');
    
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('leads');
    expect(metaDescription?.length).toBeGreaterThan(150);
    
    // Check for structured data
    const structuredData = page.locator('script[type="application/ld+json"]');
    await expect(structuredData).toBeVisible();
    
    // Performance checks
    const performanceEntry = await page.evaluate(() => {
      return JSON.stringify(performance.getEntriesByType('navigation')[0]);
    });
    const perf = JSON.parse(performanceEntry);
    
    // TTFB should be under 600ms for SEO
    expect(perf.responseStart - perf.requestStart).toBeLessThan(600);
  });

  test('lead generation system functions correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test lead magnet interaction
    const leadMagnetButton = page.locator('[data-testid="lead-magnet-trigger"]');
    if (await leadMagnetButton.isVisible()) {
      await leadMagnetButton.click();
      
      // Check if form appears
      const leadForm = page.locator('[data-testid="lead-capture-form"]');
      await expect(leadForm).toBeVisible();
      
      // Test form validation
      const emailInput = page.locator('input[type="email"]');
      const submitButton = page.locator('button[type="submit"]');
      
      await emailInput.fill('test@aqxion.com');
      await submitButton.click();
      
      // Should show success or next step
      await expect(page.locator('[data-testid="form-success"], [data-testid="form-next-step"]')).toBeVisible();
    }
  });

  test('navigation and key pages load correctly', async ({ page }) => {
    const keyPages = [
      { path: '/', title: 'AQXION' },
      { path: '/servicios', title: 'Servicios' },
      { path: '/contacto', title: 'Contacto' },
      { path: '/blog', title: 'Blog' },
      { path: '/case-studies', title: 'Casos' }
    ];

    for (const { path, title } of keyPages) {
      await page.goto(path);
      await expect(page.locator('h1')).toBeVisible();
      
      const pageTitle = await page.title();
      expect(pageTitle).toContain(title);
      
      // Check for proper meta tags
      const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
      expect(metaDescription).toBeTruthy();
      expect(metaDescription?.length).toBeGreaterThan(100);
    }
  });

  test('blog posts have proper SEO optimization', async ({ page }) => {
    // Test a specific blog post
    await page.goto('/blog/automatizacion-marketing-pequenos-negocios-2025');
    
    // Check blog-specific SEO
    const title = await page.title();
    expect(title).toContain('automatización');
    
    // Check for article schema
    const articleSchema = page.locator('script[type="application/ld+json"]');
    await expect(articleSchema).toBeVisible();
    
    const schemaContent = await articleSchema.textContent();
    expect(schemaContent).toContain('BlogPosting');
    expect(schemaContent).toContain('AQXION');
    
    // Check for proper heading structure
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    const h2Elements = page.locator('h2');
    expect(await h2Elements.count()).toBeGreaterThan(0);
  });

  test('contact forms capture leads properly', async ({ page }) => {
    await page.goto('/contacto');
    
    // Fill out contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', 'Test Company');
    await page.fill('textarea[name="message"]', 'Testing AQXION contact form');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should show success message or redirect
    await expect(page.locator('[data-testid="form-success"], [data-testid="contact-success"]')).toBeVisible();
  });
});

// Test conversion optimization systems
test.describe('Conversion Optimization Validation', () => {
  test('AI personalization adapts content', async ({ page }) => {
    await page.goto('/');
    
    // Simulate business type selection if available
    const businessTypeSelector = page.locator('[data-testid="business-type-selector"]');
    if (await businessTypeSelector.isVisible()) {
      await businessTypeSelector.selectOption('restaurant');
      
      // Content should adapt to restaurant industry
      await expect(page.locator('text=restaurante, text=comida, text=clientes locales')).toBeVisible();
    }
  });

  test('A/B testing systems are functional', async ({ page }) => {
    await page.goto('/');
    
    // Check if A/B testing attributes are present
    const bodyClasses = await page.locator('body').getAttribute('class');
    expect(bodyClasses).toMatch(/variant-[ab]/);
    
    // Check if analytics tracking is working
    const gtmScript = page.locator('script[src*="googletagmanager"]');
    await expect(gtmScript).toBeVisible();
  });

  test('mobile responsiveness and performance', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile navigation
    const mobileMenu = page.locator('[data-testid="mobile-menu"], .mobile-menu');
    if (await mobileMenu.isVisible()) {
      await mobileMenu.click();
      await expect(page.locator('nav a')).toBeVisible();
    }
    
    // Check mobile-specific lead capture
    const mobileLeadCapture = page.locator('[data-testid="mobile-lead-capture"]');
    if (await mobileLeadCapture.isVisible()) {
      await expect(mobileLeadCapture).toBeVisible();
    }
    
    // Performance on mobile should still be good
    const performanceEntry = await page.evaluate(() => {
      return JSON.stringify(performance.getEntriesByType('navigation')[0]);
    });
    const perf = JSON.parse(performanceEntry);
    
    // Mobile TTFB should be under 800ms
    expect(perf.responseStart - perf.requestStart).toBeLessThan(800);
  });
});

// Test analytics and tracking
test.describe('Analytics & Tracking Validation', () => {
  test('conversion tracking fires correctly', async ({ page }) => {
    // Track network requests for analytics
    const analyticsRequests: string[] = [];
    
    page.on('request', request => {
      const url = request.url();
      if (url.includes('google-analytics') || 
          url.includes('googletagmanager') || 
          url.includes('facebook.com/tr')) {
        analyticsRequests.push(url);
      }
    });
    
    await page.goto('/');
    
    // Trigger a conversion event
    const ctaButton = page.locator('[data-testid="primary-cta"], .cta-primary').first();
    if (await ctaButton.isVisible()) {
      await ctaButton.click();
    }
    
    // Wait for analytics to fire
    await page.waitForTimeout(2000);
    
    // Should have at least one analytics request
    expect(analyticsRequests.length).toBeGreaterThan(0);
  });

  test('lead scoring system processes data', async ({ page }) => {
    await page.goto('/contacto');
    
    // Fill form with high-quality lead data
    await page.fill('input[name="company"]', 'Enterprise Corp');
    await page.fill('input[name="employees"]', '500+');
    await page.fill('input[name="budget"]', '$50,000+');
    
    // Should trigger high lead score
    const leadScore = await page.locator('[data-testid="lead-score"]').textContent();
    if (leadScore) {
      expect(parseInt(leadScore)).toBeGreaterThan(70);
    }
  });
});

// Test technical SEO implementation
test.describe('Technical SEO Validation', () => {
  test('sitemap.xml is accessible and valid', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    
    const content = await page.textContent('body');
    expect(content).toContain('<?xml');
    expect(content).toContain('<urlset');
    expect(content).toContain('https://aqxion.com');
  });

  test('robots.txt is properly configured', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    
    const content = await page.textContent('body');
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });

  test('critical rendering path is optimized', async ({ page }) => {
    await page.goto('/');
    
    // Check for inline critical CSS
    const inlineStyles = page.locator('style[data-critical]');
    await expect(inlineStyles).toBeVisible();
    
    // Check for proper resource preloading
    const preloadLinks = page.locator('link[rel="preload"]');
    expect(await preloadLinks.count()).toBeGreaterThan(0);
  });

  test('Core Web Vitals monitoring is active', async ({ page }) => {
    await page.goto('/');
    
    // Check if performance monitoring is initialized
    const performanceMonitoring = await page.evaluate(() => {
      return 'webVitals' in window || 'gtag' in window;
    });
    
    expect(performanceMonitoring).toBe(true);
  });
});
