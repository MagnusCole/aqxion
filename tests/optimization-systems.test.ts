// LLM-OPTIMIZED: Unit tests for AQXION optimization libraries
// Auto-improved testing of all 6 pillars functionality

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    push: vi.fn(),
    query: {}
  })
}));

// Mock window APIs
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
});

describe('AI Personalization System', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should detect and adapt to business type', async () => {
    // Mock geolocation
    Object.defineProperty(navigator, 'geolocation', {
      value: {
        getCurrentPosition: vi.fn().mockImplementation((success) => {
          success({
            coords: {
              latitude: 19.4326,
              longitude: -99.1332
            }
          });
        })
      },
      writable: true
    });

    const { useAIPersonalization } = await import('../src/lib/aiPersonalization');
    const { result } = renderHook(() => useAIPersonalization());

    // Should detect Mexico City location
    expect(result.current.personalizationContext.location?.country).toBe('México');
    expect(result.current.personalizationContext.location?.region).toBe('CDMX');
  });

  it('should generate business-specific content variations', async () => {
    const { generatePersonalizationContext } = await import('../src/lib/aiPersonalization');
    
    const restaurantContext = await generatePersonalizationContext('restaurant');
    
    expect(restaurantContext.businessType).toBe('restaurant');
    expect(restaurantContext.messaging.headline).toContain('restaurante');
    expect(restaurantContext.messaging.painPoints).toContain('clientes locales');
    expect(restaurantContext.messaging.solutions).toContain('delivery');
  });
});

describe('Advanced Lead Generation', () => {
  it('should calculate lead score correctly', async () => {
    const { calculateLeadScore } = await import('../src/lib/advancedLeadGeneration');
    
    const highQualityLead = {
      email: 'ceo@bigcompany.com',
      company: 'Enterprise Corp',
      employees: '500+',
      budget: '$50,000+',
      industry: 'technology',
      timeOnSite: 300,
      pagesVisited: 8
    };
    
    const score = calculateLeadScore(highQualityLead);
    expect(score).toBeGreaterThan(80);
  });

  it('should implement progressive qualification flow', async () => {
    const { useAdvancedLeadCapture } = await import('../src/lib/advancedLeadGeneration');
    const { result } = renderHook(() => useAdvancedLeadCapture());

    // Start qualification
    result.current.startQualification();
    expect(result.current.currentStep).toBe(1);

    // Progress through steps
    result.current.nextStep({ businessType: 'saas' });
    expect(result.current.currentStep).toBe(2);
    expect(result.current.leadData.businessType).toBe('saas');
  });
});

describe('SEO Optimization System', () => {
  beforeEach(() => {
    // Mock performance APIs
    Object.defineProperty(window, 'PerformanceObserver', {
      value: vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        disconnect: vi.fn()
      })),
      writable: true
    });
  });

  it('should detect SEO optimization opportunities', async () => {
    // Mock DOM elements
    document.title = 'Test Page';
    document.head.innerHTML = '<meta name="description" content="Short description">';
    
    const { useAdvancedSEO } = await import('../src/lib/advancedSEO');
    const { result } = renderHook(() => useAdvancedSEO());

    // Should detect missing keywords in title
    expect(result.current.opportunities.length).toBeGreaterThan(0);
    
    const titleOpp = result.current.opportunities.find(
      opp => opp.issue.includes('títulos no optimizados')
    );
    expect(titleOpp).toBeDefined();
    expect(titleOpp?.priority).toBe('high');
  });

  it('should generate proper schema.org markup', async () => {
    const { generatePageSchema } = await import('../src/lib/advancedSEO');
    
    const schema = generatePageSchema('homepage', '/');
    
    expect(schema['@type']).toBe('LocalBusiness');
    expect(schema.name).toBe('AQXION');
    expect(schema.hasOfferCatalog).toBeDefined();
    expect(schema.address.addressCountry).toBe('MX');
  });
});

describe('Core Web Vitals Monitoring', () => {
  it('should track performance metrics correctly', async () => {
    // Mock performance timing
    Object.defineProperty(window, 'performance', {
      value: {
        timing: {
          requestStart: 1000,
          responseStart: 1200,
          loadEventEnd: 2000
        },
        getEntriesByType: vi.fn().mockReturnValue([{
          startTime: 1500,
          duration: 500
        }])
      },
      writable: true
    });

    const { useCoreWebVitals } = await import('../src/lib/coreWebVitalsClean');
    const { result } = renderHook(() => useCoreWebVitals());

    // Should calculate TTFB
    expect(result.current.vitals.ttfb).toBe(200);
  });

  it('should generate performance recommendations', async () => {
    const { useSEOPerformance } = await import('../src/lib/coreWebVitalsClean');
    const { result } = renderHook(() => useSEOPerformance());

    // Should provide optimization suggestions
    expect(result.current.optimizations.length).toBeGreaterThan(5);
    expect(result.current.optimizations).toContain('Implementar Next.js Image con optimización automática');
  });
});

describe('Conversion Tracking System', () => {
  it('should track conversion events properly', async () => {
    // Mock Google Analytics
    window.gtag = vi.fn();
    
    const { useConversionTracking } = await import('../src/lib/conversionTrackingClean');
    const { result } = renderHook(() => useConversionTracking());

    // Track a conversion
    result.current.trackConversion('lead_generation', {
      value: 100,
      source: 'organic'
    });

    expect(window.gtag).toHaveBeenCalledWith('event', 'conversion', {
      send_to: expect.any(String),
      value: 100,
      currency: 'USD'
    });
  });

  it('should implement A/B testing correctly', async () => {
    const { useABTesting } = await import('../src/lib/conversionTrackingClean');
    const { result } = renderHook(() => useABTesting());

    // Should assign variant
    expect(['A', 'B']).toContain(result.current.variant);
    
    // Should track variant assignment
    expect(result.current.isTracked).toBe(true);
  });
});

describe('AI Copy Optimization', () => {
  it('should generate copy variants for different industries', async () => {
    const { generateCopyVariants } = await import('../src/lib/aiCopyOptimization');
    
    const variants = generateCopyVariants('headline', 'restaurant', 'A');
    
    expect(variants.length).toBeGreaterThan(1);
    expect(variants[0]).toContain('restaurante');
    expect(variants.some(v => v.includes('clientes') || v.includes('ventas'))).toBe(true);
  });

  it('should optimize copy for conversion', async () => {
    const { useAICopyOptimization } = await import('../src/lib/aiCopyOptimization');
    const { result } = renderHook(() => useAICopyOptimization());

    const optimizedCopy = result.current.optimizeForConversion(
      'Contactanos',
      'button',
      'restaurant'
    );

    expect(optimizedCopy).toContain('urgencia');
    expect(optimizedCopy.length).toBeGreaterThan(10);
  });
});

describe('Next.js 15 Performance Optimization', () => {
  it('should provide performance insights', async () => {
    const { useNext15Performance } = await import('../src/lib/next15Performance');
    const { result } = renderHook(() => useNext15Performance());

    const insights = await result.current.getPerformanceInsights();
    
    expect(insights.bundleSize).toBeDefined();
    expect(insights.recommendations).toBeDefined();
    expect(insights.recommendations.length).toBeGreaterThan(0);
  });

  it('should optimize edge functions', async () => {
    const { optimizeEdgeFunction } = await import('../src/lib/next15Performance');
    
    const optimized = optimizeEdgeFunction('analytics', {
      geolocation: true,
      caching: true
    });

    expect(optimized.config.regions).toContain('iad1');
    expect(optimized.config.runtime).toBe('edge');
  });
});

// Integration tests
describe('System Integration', () => {
  it('should integrate all optimization systems together', async () => {
    // Test that all systems can work together
    const modules = await Promise.all([
      import('../src/lib/aiPersonalization'),
      import('../src/lib/advancedLeadGeneration'),
      import('../src/lib/advancedSEO'),
      import('../src/lib/conversionTrackingClean'),
      import('../src/lib/coreWebVitalsClean')
    ]);

    // All modules should export their main hooks
    modules.forEach(module => {
      expect(Object.keys(module).length).toBeGreaterThan(0);
    });
  });

  it('should maintain consistent data flow between systems', async () => {
    const { useAIPersonalization } = await import('../src/lib/aiPersonalization');
    const { useAdvancedLeadCapture } = await import('../src/lib/advancedLeadGeneration');
    
    const { result: personalization } = renderHook(() => useAIPersonalization());
    const { result: leadCapture } = renderHook(() => useAdvancedLeadCapture());

    // Personalization context should inform lead capture
    const businessType = personalization.current.personalizationContext.businessType;
    
    if (businessType) {
      leadCapture.current.updateLeadData({ businessType });
      expect(leadCapture.current.leadData.businessType).toBe(businessType);
    }
  });
});
