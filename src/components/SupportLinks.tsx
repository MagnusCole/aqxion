import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const SupportLinks = () => {
  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-50">
      {/* Community Support Button */}
      <Card className="bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
        <CardContent className="p-3">
          <a 
            href="https://t.me/MyPeruComunidad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white text-sm font-medium"
          >
            <span className="text-xl">👥</span>
            <span>Comunidad</span>
          </a>
        </CardContent>
      </Card>

      {/* Private Support Button */}
      <Card className="bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg">
        <CardContent className="p-3">
          <a 
            href="https://t.me/MagnusCole" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white text-sm font-medium"
          >
            <span className="text-xl">💬</span>
            <span>Soporte Privado</span>
          </a>
        </CardContent>
      </Card>

      {/* Full Support Page */}
      <Card className="bg-gray-600 hover:bg-gray-700 transition-colors shadow-lg">
        <CardContent className="p-3">
          <Link 
            href="/portal/soporte"
            className="flex items-center space-x-2 text-white text-sm font-medium"
          >
            <span className="text-xl">🎯</span>
            <span>Ver Todo</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportLinks;
