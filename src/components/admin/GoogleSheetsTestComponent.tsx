// components/admin/GoogleSheetsTestComponent.tsx
"use client";

import React, { useState } from 'react';
import { googleSheetsService, GoogleSheetsResponse } from '@/lib/googleSheets';
import { config } from '@/lib/config';

interface TestResult {
  name: string;
  success: boolean;
  result?: GoogleSheetsResponse;
  error?: string;
  duration?: number;
  timestamp: string;
}

export const GoogleSheetsTestComponent: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const runTest = async (testName: string, testFunction: () => Promise<GoogleSheetsResponse>) => {
    setIsLoading(true);
    try {
      const startTime = Date.now();
      const result = await testFunction();
      const endTime = Date.now();
      
      setTestResults(prev => [...prev, {
        name: testName,
        success: result.success,
        result,
        duration: endTime - startTime,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      setTestResults(prev => [...prev, {
        name: testName,
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
        timestamp: new Date().toISOString()
      }]);
    }
    setIsLoading(false);
  };

  const testContactForm = () => runTest('Contact Form', () => 
    googleSheetsService.submitContactForm({
      name: 'Test Usuario Contact',
      business: 'Negocio de Prueba',
      email: 'test-contact@example.com',
      phone: '123-456-7890',
      industria: 'Soy dueño/a de un negocio de belleza o estética',
      message: 'Este es un mensaje de prueba del formulario de contacto'
    })
  );

  const testNewsletter = () => runTest('Newsletter', () =>
    googleSheetsService.submitNewsletterSubscription('test-newsletter@example.com', 'test-blog')
  );

  const testLeadMagnet = () => runTest('Lead Magnet', () =>
    googleSheetsService.submitLeadMagnetDownload({
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'test-leadmagnet@example.com',
      telefono: '987-654-3210',
      industria: 'Tengo un gimnasio o estudio de fitness',
      resourceName: 'Test Resource'
    })
  );

  const testLandingPage = () => runTest('Landing Page', () =>
    googleSheetsService.submitLandingPageLead({
      name: 'María García',
      email: 'test-landing@example.com',
      phone: '555-123-4567',
      business: 'restaurante',
      leadMagnet: 'Guía Meta Ads Test'
    })
  );

  const testConsultation = () => runTest('Consultation', () =>
    googleSheetsService.submitConsultationRequest({
      name: 'Carlos López',
      email: 'test-consultation@example.com',
      phone: '555-987-6543',
      business: 'Clínica Dental',
      message: 'Solicitud de consulta de prueba'
    })
  );

  const clearResults = () => setTestResults([]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        🧪 Test Google Sheets Integration
      </h2>
      
      {/* Configuración actual */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Configuración Actual:</h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Script URL:</span> {config.googleAppsScript.url}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Calendly URL:</span> {config.calendly.consultationUrl}
        </p>
      </div>

      {/* Botones de test */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          aria-label="Probar formulario de contacto con Google Sheets"
          onClick={testContactForm}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          Test Contact Form
        </button>
        
        <button
          aria-label="Probar formulario de newsletter"
          onClick={testNewsletter}
          disabled={isLoading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          Test Newsletter
        </button>
        
        <button
          aria-label="Probar formulario de lead magnet"
          onClick={testLeadMagnet}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          Test Lead Magnet
        </button>
        
        <button
          aria-label="Probar formulario de landing page"
          onClick={testLandingPage}
          disabled={isLoading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          Test Landing Page
        </button>
        
        <button
          aria-label="Probar formulario de consulta"
          onClick={testConsultation}
          disabled={isLoading}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          Test Consultation
        </button>
        
        <button
          aria-label="Limpiar resultados de tests"
          onClick={clearResults}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Clear Results
        </button>
      </div>

      {/* Resultados */}
      {testResults.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Resultados de Tests:</h3>
          {testResults.map((test, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                test.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">
                  {test.success ? '✅' : '❌'} {test.name}
                </span>
                <span className="text-sm text-gray-500">
                  {test.duration}ms
                </span>
              </div>
              
              {test.success && test.result ? (
                <div className="text-sm text-green-700">
                  <p><strong>Mensaje:</strong> {test.result.message}</p>
                  {test.result.timestamp && (
                    <p><strong>Timestamp:</strong> {test.result.timestamp}</p>
                  )}
                </div>
              ) : (
                <div className="text-sm text-red-700">
                  <p><strong>Error:</strong> {test.error || test.result?.error}</p>
                </div>
              )}
              
              <div className="text-xs text-gray-500 mt-2">
                {test.timestamp}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {isLoading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-sm text-gray-600">Ejecutando test...</p>
        </div>
      )}
    </div>
  );
};
