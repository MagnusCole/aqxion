/**
 * 🧪 ABTestProvider - Context Provider for A/B Testing
 * 
 * Provides global A/B testing configuration and state management
 * Follows React Context best practices with performance optimization
 * 
 * @features
 * - Global test configuration
 * - Performance optimization with React.memo
 * - TypeScript strict compliance
 * - Zero-flicker initialization
 * - Feature flag management
 * 
 * @author Apex React Synthesis Engine
 */

'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import type { ABTestGlobalConfig, ABTestInfo } from '@/types/abTesting';
import { ABStorage, ABAnalytics } from '@/lib/abTesting';

// ===== CONTEXT TYPES =====

interface ABTestContextValue {
  /** Global configuration for all A/B tests */
  config: ABTestGlobalConfig;
  /** Update global configuration */
  updateConfig: (newConfig: Partial<ABTestGlobalConfig>) => void;
  /** Get all active tests for current user */
  getActiveTests: () => ABTestInfo[];
  /** Force refresh all tests (dev tool) */
  refreshTests: () => void;
  /** Check if A/B testing is globally enabled */
  isEnabled: boolean;
}

interface ABTestProviderProps {
  /** Initial configuration */
  config?: Partial<ABTestGlobalConfig>;
  /** Child components */
  children: React.ReactNode;
  /** Enable debug mode for development */
  debug?: boolean;
}

// ===== DEFAULT CONFIGURATION =====

const DEFAULT_CONFIG: ABTestGlobalConfig = {
  enabled: true,
  environment: process.env.NODE_ENV as 'development' | 'production' | 'test',
  userId: undefined,
  sessionId: undefined,
  debug: process.env.NODE_ENV === 'development',
  cookieConsent: true,
  audienceSegments: [],
  featureFlags: {},
  excludedUserIds: [],
  forceVariants: {},
  globalTrafficSplit: 0.5,
};

// ===== CONTEXT CREATION =====

const ABTestContext = createContext<ABTestContextValue | undefined>(undefined);

// ===== CUSTOM HOOK =====

/**
 * Hook to access A/B test context
 * Must be used within ABTestProvider
 */
export const useABTestContext = (): ABTestContextValue => {
  const context = useContext(ABTestContext);
  
  if (!context) {
    throw new Error('useABTestContext must be used within an ABTestProvider');
  }
  
  return context;
};

// ===== PROVIDER COMPONENT =====

/**
 * A/B Test Provider Component
 * Wraps the app to provide global A/B testing functionality
 */
export const ABTestProvider: React.FC<ABTestProviderProps> = React.memo(({
  config: initialConfig = {},
  children,
  debug = false,
}) => {
  // ===== STATE =====
  
  const [config, setConfig] = useState<ABTestGlobalConfig>(() => ({
    ...DEFAULT_CONFIG,
    ...initialConfig,
    debug: debug || DEFAULT_CONFIG.debug,
  }));

  const [sessionId, setSessionId] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  // ===== INITIALIZATION =====

  useEffect(() => {
    // Generate or retrieve session ID
    let currentSessionId = '';
    
    if (typeof window !== 'undefined') {
      currentSessionId = sessionStorage.getItem('myperu_session_id') || '';
      
      if (!currentSessionId) {
        currentSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('myperu_session_id', currentSessionId);
      }
    }

    setSessionId(currentSessionId);
    
    // Update config with session info
    setConfig((prev: ABTestGlobalConfig) => ({
      ...prev,
      sessionId: currentSessionId,
      // Load any persisted feature flags
      featureFlags: {
        ...prev.featureFlags,
        ...ABStorage.loadFeatureFlags(),
      },
    }));

    setIsInitialized(true);

    // Initialize analytics if enabled
    if (config.enabled) {
      ABAnalytics.initialize();
    }

    // Debug logging
    if (debug && typeof window !== 'undefined') {
      console.log('🧪 A/B Testing Provider Initialized', {
        sessionId: currentSessionId,
        config: config,
        environment: process.env.NODE_ENV,
      });
    }
  }, [debug, config.enabled]);

  // ===== CONTEXT METHODS =====

  /**
   * Update global configuration
   */
  const updateConfig = React.useCallback((newConfig: Partial<ABTestGlobalConfig>) => {
    setConfig((prev: ABTestGlobalConfig) => {
      const updated = { ...prev, ...newConfig };
      
      // Persist feature flags if they changed
      if (newConfig.featureFlags) {
        ABStorage.saveFeatureFlags(newConfig.featureFlags);
      }
      
      return updated;
    });
  }, []);

  /**
   * Get all active tests for current user
   */
  const getActiveTests = React.useCallback((): ABTestInfo[] => {
    if (typeof window === 'undefined') return [];
    
    const tests: ABTestInfo[] = [];
    const prefix = 'abtest_';
    
    // Check localStorage for active tests
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        try {
          const testName = key.replace(prefix, '');
          const variantKey = localStorage.getItem(key);
          
          if (variantKey) {
            tests.push({
              testName,
              variantKey,
              assignedAt: Date.now(), // We don't store this, so use current time
              sessionId,
              isControlGroup: variantKey.includes('control') || variantKey === 'A',
            });
          }
        } catch (error) {
          console.warn('Failed to parse A/B test data:', error);
        }
      }
    }
    
    return tests;
  }, [sessionId]);

  /**
   * Force refresh all tests (development helper)
   */
  const refreshTests = React.useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      // Clear all A/B test data
      const prefix = 'abtest_';
      const keysToRemove: string[] = [];
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      
      // Reload page to re-assign variants
      window.location.reload();
    }
  }, []);

  // ===== MEMOIZED CONTEXT VALUE =====

  const contextValue = useMemo<ABTestContextValue>(() => ({
    config,
    updateConfig,
    getActiveTests,
    refreshTests,
    isEnabled: config.enabled && isInitialized,
  }), [config, updateConfig, getActiveTests, refreshTests, isInitialized]);

  // ===== DEBUG PANEL (Development Only) =====

  const DebugPanel = React.useMemo(() => {
    if (!debug || process.env.NODE_ENV !== 'development') return null;

    return (
      <div 
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999,
          maxWidth: '300px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          🧪 A/B Testing Debug
        </div>
        <div>Session: {sessionId}</div>
        <div>Tests: {getActiveTests().length}</div>
        <div>Enabled: {config.enabled ? '✅' : '❌'}</div>
        <button
          onClick={refreshTests}
          style={{
            background: '#007acc',
            color: 'white',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '3px',
            fontSize: '10px',
            marginTop: '5px',
            cursor: 'pointer',
          }}
        >
          Refresh Tests
        </button>
      </div>
    );
  }, [debug, sessionId, getActiveTests, config.enabled, refreshTests]);

  // ===== RENDER =====

  if (!isInitialized) {
    // Prevent flash of incorrect variant during initialization
    return (
      <div style={{ opacity: 0 }} suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <ABTestContext.Provider value={contextValue}>
      {children}
      {DebugPanel}
    </ABTestContext.Provider>
  );
});

// Display name for debugging
ABTestProvider.displayName = 'ABTestProvider';

// ===== FEATURE FLAG HELPERS =====

/**
 * Higher-order component for feature flag wrapping
 */
export const withFeatureFlag = <P extends object>(
  Component: React.ComponentType<P>,
  flagName: string,
  fallback?: React.ComponentType<P>
) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const { config } = useABTestContext();
    const isEnabled = config.featureFlags[flagName] ?? false;

    if (isEnabled) {
      return <Component {...props} />;
    }

    if (fallback) {
      const FallbackComponent = fallback;
      return <FallbackComponent {...props} />;
    }

    return null;
  };

  WrappedComponent.displayName = `withFeatureFlag(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

/**
 * Component for conditional rendering based on feature flags
 */
export const FeatureFlag: React.FC<{
  flag: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ flag, children, fallback = null }) => {
  const { config } = useABTestContext();
  const isEnabled = config.featureFlags[flag] ?? false;

  return isEnabled ? <>{children}</> : <>{fallback}</>;
};

export default ABTestProvider;
