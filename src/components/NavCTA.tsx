'use client';

import { Phone } from 'lucide-react';

export default function NavCTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/51987654321?text=Quiero%20información%20del%20paquete%20S/.1500%20para%20más%20clientes', '_blank');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-pulse"
      >
        <Phone className="w-5 h-5 inline mr-2" />
        S/.1,500
      </button>
    </div>
  );
}
