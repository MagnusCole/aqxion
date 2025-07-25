import React from 'react';

export default function SoportePage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-peru-red">Soporte</h2>
      <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
        <div className="text-gray-900 font-semibold mb-2">¿Tienes dudas o necesitas ayuda?</div>
        <p className="text-gray-600 mb-4">Nuestro equipo está listo para apoyarte. Envía tu consulta y te responderemos en menos de 24h.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Tu nombre" className="w-full border rounded px-4 py-2" />
          <input type="email" placeholder="Tu email" className="w-full border rounded px-4 py-2" />
          <textarea placeholder="¿En qué te ayudamos?" className="w-full border rounded px-4 py-2" rows={4}></textarea>
          <button type="submit" className="bg-peru-red text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition">Enviar</button>
        </form>
      </div>
    </section>
  );
}
