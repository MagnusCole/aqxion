'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState({
    hostname: '',
    pathname: '',
    userAgent: '',
    timestamp: new Date().toISOString()
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDebugInfo({
        hostname: window.location.hostname,
        pathname: window.location.pathname,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Debug Information</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Location</h2>
          <div className="space-y-2">
            <p><strong>Hostname:</strong> {debugInfo.hostname}</p>
            <p><strong>Pathname:</strong> {debugInfo.pathname}</p>
            <p><strong>Full URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Loading...'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Expected Behavior</h2>
          <div className="space-y-2">
            <p><strong>app.aqxion.com/</strong> → Should redirect to <strong>/auth/signin</strong></p>
            <p><strong>www.aqxion.com/</strong> → Should show landing page</p>
            <p><strong>app.aqxion.com/portal/*</strong> → Requires authentication</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Test Links</h2>
          <div className="space-y-2">
            <a href="/auth/signin" className="block text-blue-600 hover:text-blue-800">→ Go to Login</a>
            <a href="/portal/dashboard" className="block text-blue-600 hover:text-blue-800">→ Go to Portal Dashboard</a>
            <a href="https://www.aqxion.com" className="block text-blue-600 hover:text-blue-800">→ Go to Landing Page</a>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-4 mt-6">
          <p className="text-sm">Debug info generated at: {debugInfo.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
