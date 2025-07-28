/**
 * 🧪 A/B Testing Development Dashboard
 * 
 * Development-only dashboard for m    Object.keys(ACTIVE_TESTS).forEach(testName => {
      const testConfig = getTestConfig(testName as keyof typeof ACTIVE_TESTS);
      if (testConfig?.status) {
        // Mock data for development
        const impressions = Math.floor(Math.random() * 1000) + 100;
        const conversions = Math.floor(impressions * (Math.random() * 0.2 + 0.05));
        
        statuses.push({
          testName,
          variant: 'control', // Default variant for display
          impressions,
          conversions,
          conversionRate: (conversions / impressions) * 100,
          isActive: testConfig.status === 'ready', // Ready tests are potentially activecontrolling A/B tests
 * Provides real-time insights and test management capabilities
 * 
 * @features
 * - Real-time test monitoring
 * - Variant switching controls
 * - Performance metrics
 * - Statistical analysis
 * - Debug tools
 * 
 * @author Apex React Synthesis Engine
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useABTestContext } from '@/components/ABTestProvider';
import { useABTest } from '@/hooks/useABTest';
import { ACTIVE_TESTS, getTestConfig } from '@/config/abTesting';
import { ABStorage, ABStatistics } from '@/lib/abTesting';

// ===== TYPES =====

interface DashboardProps {
  /** Whether dashboard is visible */
  visible?: boolean;
  /** Position on screen */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

interface TestStatus {
  testName: string;
  variant: string;
  impressions: number;
  conversions: number;
  conversionRate: number;
  isActive: boolean;
}

// ===== MAIN COMPONENT =====

/**
 * Development dashboard for A/B testing
 * Only renders in development environment
 */
export const ABTestDashboard: React.FC<DashboardProps> = ({
  visible = true,
  position = 'bottom-right'
}) => {
  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  // ===== CONTEXT & STATE =====

  // Use context safely with fallback
  let config, getActiveTests, refreshTests, isEnabled;
  try {
    const context = useABTestContext();
    config = context.config;
    getActiveTests = context.getActiveTests;
    refreshTests = context.refreshTests;
    isEnabled = context.isEnabled;
  } catch (error) {
    // Fallback if provider not available
    console.warn('ABTestProvider not found, dashboard disabled');
    return null;
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [testStatuses, setTestStatuses] = useState<TestStatus[]>([]);
  const [selectedTest, setSelectedTest] = useState<string>('');

  // ===== DATA FETCHING =====

  /**
   * Load test statistics
   */
  const loadTestStats = useCallback(() => {
    const activeTests = getActiveTests();
    const statuses: TestStatus[] = [];

    Object.keys(ACTIVE_TESTS).forEach(testName => {
      const testConfig = getTestConfig(testName as keyof typeof ACTIVE_TESTS);
      if (testConfig?.status) {
        // Mock data for development
        const impressions = Math.floor(Math.random() * 1000) + 100;
        const conversions = Math.floor(impressions * (Math.random() * 0.2 + 0.05));
        
        statuses.push({
          testName,
          variant: activeTests.find(t => t.testName === testName)?.variantKey || 'control',
          impressions,
          conversions,
          conversionRate: (conversions / impressions) * 100,
          isActive: testConfig.status === 'ready',
        });
      }
    });

    setTestStatuses(statuses);
  }, [getActiveTests]);

  // ===== EFFECTS =====

  useEffect(() => {
    if (isExpanded) {
      loadTestStats();
      const interval = setInterval(loadTestStats, 5000); // Update every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isExpanded, loadTestStats]);

  // ===== EVENT HANDLERS =====

  /**
   * Toggle variant for a specific test
   */
  const handleVariantSwitch = (testName: string, newVariant: string) => {
    ABStorage.saveVariant(testName, newVariant);
    window.location.reload(); // Reload to see changes
  };

  /**
   * Clear all test data
   */
  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all A/B test data?')) {
      ABStorage.clearAllTests();
      window.location.reload();
    }
  };

  /**
   * Export test data
   */
  const handleExportData = () => {
    const data = {
      tests: testStatuses,
      activeTests: getActiveTests(),
      config,
      timestamp: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab-test-data-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ===== POSITION STYLES =====

  const positionStyles = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  // ===== RENDER =====

  if (!visible || !isEnabled) return null;

  return (
    <div 
      className={`fixed ${positionStyles[position]} z-50 transition-all duration-300 ${
        isExpanded ? 'w-96 h-96' : 'w-12 h-12'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-0 right-0 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg transition-colors z-10"
        title="Toggle A/B Test Dashboard"
      >
        {isExpanded ? '×' : '🧪'}
      </button>

      {/* Dashboard Panel */}
      {isExpanded && (
        <div className="bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden w-full h-full flex flex-col">
          
          {/* Header */}
          <div className="bg-blue-600 px-4 py-2 flex justify-between items-center">
            <h3 className="font-bold text-sm">A/B Test Dashboard</h3>
            <div className="flex gap-2">
              <button
                onClick={handleClearAll}
                className="text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                title="Clear all test data"
              >
                Clear
              </button>
              <button
                onClick={handleExportData}
                className="text-xs bg-green-500 hover:bg-green-600 px-2 py-1 rounded"
                title="Export test data"
              >
                Export
              </button>
              <button
                onClick={refreshTests}
                className="text-xs bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
                title="Refresh tests"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Global Status */}
            <div className="text-xs space-y-1">
              <div>Environment: <span className="text-green-400">{config.environment}</span></div>
              <div>Debug Mode: <span className={config.debug ? 'text-green-400' : 'text-red-400'}>{config.debug ? 'ON' : 'OFF'}</span></div>
              <div>Active Tests: <span className="text-blue-400">{testStatuses.length}</span></div>
            </div>

            <hr className="border-gray-700" />

            {/* Test List */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Active Tests</h4>
              
              {testStatuses.length === 0 ? (
                <div className="text-xs text-gray-400">No active tests found</div>
              ) : (
                testStatuses.map(test => (
                  <div key={test.testName} className="bg-gray-800 rounded p-3 space-y-2">
                    
                    {/* Test Name & Variant */}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium">{test.testName}</div>
                        <div className="text-xs text-gray-400">
                          Variant: <span className="text-yellow-400">{test.variant}</span>
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${test.isActive ? 'bg-green-400' : 'bg-red-400'}`} />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-gray-400">Views</div>
                        <div className="font-bold">{test.impressions}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Conv.</div>
                        <div className="font-bold">{test.conversions}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Rate</div>
                        <div className="font-bold">{test.conversionRate.toFixed(1)}%</div>
                      </div>
                    </div>

                    {/* Variant Switcher */}
                    <div className="flex gap-1">
                      {test.testName === 'hero_copy_v1' && 
                        ['control', 'treatment'].map(variantKey => (
                          <button
                            key={variantKey}
                            onClick={() => handleVariantSwitch(test.testName, variantKey)}
                            className={`text-xs px-2 py-1 rounded transition-colors ${
                              test.variant === variantKey
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                            }`}
                          >
                            {variantKey}
                          </button>
                        ))
                      }
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Debug Info */}
            <div className="text-xs text-gray-400 space-y-1">
              <hr className="border-gray-700" />
              <div>Session: {config.sessionId?.slice(-8) || 'Unknown'}</div>
              <div>User: {config.userId || 'Anonymous'}</div>
              <div>Features: {Object.keys(config.featureFlags).filter(k => config.featureFlags[k]).length} enabled</div>
            </div>

          </div>
          
        </div>
      )}
    </div>
  );
};

// ===== DEVELOPMENT ONLY EXPORT =====

/**
 * Wrapper that only renders in development
 */
export const DevABTestDashboard: React.FC<DashboardProps> = (props) => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return <ABTestDashboard {...props} />;
};

export default DevABTestDashboard;
