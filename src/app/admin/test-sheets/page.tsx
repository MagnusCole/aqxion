// app/admin/test-sheets/page.tsx
import { GoogleSheetsTestComponent } from '@/components/admin/GoogleSheetsTestComponent';

export default function TestSheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Panel de Testing - Google Sheets Integration
          </h1>
          
          <GoogleSheetsTestComponent />
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">
              📝 Instrucciones:
            </h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Ejecuta cada test para verificar que los datos lleguen correctamente a tu Google Sheet</li>
              <li>• Revisa tu Google Sheet después de cada test para confirmar que los datos se guardaron</li>
              <li>• Si algún test falla, revisa la configuración en .env.local</li>
              <li>• Esta página solo debe usarse en desarrollo - no la publiques en producción</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
