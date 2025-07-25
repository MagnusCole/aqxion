'use client';

import { useState, useEffect } from 'react';
import { Users, Download, Plus, Phone, Mail, Calendar, MapPin, DollarSign, TrendingUp, Filter } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: 'google' | 'facebook' | 'instagram' | 'whatsapp' | 'referral';
  status: 'nuevo' | 'contactado' | 'interesado' | 'propuesta' | 'cerrado' | 'perdido';
  value: number;
  date: string;
  lastContact: string;
  notes: string;
  location?: string;
}

const CRMDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('todos');

  // Datos simulados - En producción viene de Google Sheets
  const mockLeads: Lead[] = [
    {
      id: '1',
      name: 'María González',
      email: 'maria.gonzalez@email.com',
      phone: '+51 999 123 456',
      source: 'google',
      status: 'interesado',
      value: 1500,
      date: '2025-01-25',
      lastContact: '2025-01-26',
      notes: 'Interesada en paquete completo. Tiene tienda de ropa en Miraflores.',
      location: 'Miraflores, Lima'
    },
    {
      id: '2', 
      name: 'Carlos Mendoza',
      email: 'cmendoza@negocio.com',
      phone: '+51 987 654 321',
      source: 'facebook',
      status: 'propuesta',
      value: 1500,
      date: '2025-01-24',
      lastContact: '2025-01-27',
      notes: 'Restaurante pequeño. Necesita presencia digital urgente.',
      location: 'San Isidro, Lima'
    },
    {
      id: '3',
      name: 'Ana Rodríguez',
      email: 'ana.rodriguez@salon.pe',
      phone: '+51 999 888 777',
      source: 'whatsapp',
      status: 'nuevo',
      value: 1500,
      date: '2025-01-27',
      lastContact: '2025-01-27',
      notes: 'Salón de belleza. Primera consulta.',
      location: 'La Molina, Lima'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLeads(mockLeads);
      setLoading(false);
    }, 1000);
  }, []);

  const getSourceColor = (source: string) => {
    const colors = {
      google: 'bg-red-100 text-red-800',
      facebook: 'bg-blue-100 text-blue-800',
      instagram: 'bg-pink-100 text-pink-800',
      whatsapp: 'bg-green-100 text-green-800',
      referral: 'bg-purple-100 text-purple-800'
    };
    return colors[source as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      nuevo: 'bg-blue-100 text-blue-800',
      contactado: 'bg-yellow-100 text-yellow-800',
      interesado: 'bg-green-100 text-green-800',
      propuesta: 'bg-purple-100 text-purple-800',
      cerrado: 'bg-green-100 text-green-800',
      perdido: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const downloadCRM = async () => {
    // Aquí conectaríamos con Google Sheets API para generar descarga
    const csvContent = [
      ['Nombre', 'Email', 'Teléfono', 'Fuente', 'Estado', 'Valor', 'Fecha', 'Último Contacto', 'Notas', 'Ubicación'],
      ...leads.map(lead => [
        lead.name, lead.email, lead.phone, lead.source, lead.status, 
        lead.value, lead.date, lead.lastContact, lead.notes, lead.location || ''
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crm-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const syncWithGoogleSheets = async () => {
    setLoading(true);
    // Aquí conectaríamos con Google Sheets API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const filteredLeads = filter === 'todos' ? leads : leads.filter(lead => lead.status === filter);

  const stats = {
    total: leads.length,
    nuevos: leads.filter(l => l.status === 'nuevo').length,
    interesados: leads.filter(l => l.status === 'interesado').length,
    cerrados: leads.filter(l => l.status === 'cerrado').length,
    valorTotal: leads.reduce((sum, lead) => sum + (lead.status === 'cerrado' ? lead.value : 0), 0),
    valorPotencial: leads.reduce((sum, lead) => sum + lead.value, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                CRM - Gestión de Leads
              </h1>
              <p className="mt-2 text-gray-600">
                Administra tus leads y clientes potenciales sincronizado con Google Sheets
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={downloadCRM}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4" />
                Descargar CRM
              </button>
              
              <button
                onClick={syncWithGoogleSheets}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <TrendingUp className="w-4 h-4" />
                Sincronizar Sheets
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <Plus className="w-4 h-4" />
                Nuevo Lead
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Nuevos</p>
                <p className="text-2xl font-bold text-blue-600">{stats.nuevos}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">N</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Interesados</p>
                <p className="text-2xl font-bold text-green-600">{stats.interesados}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">I</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cerrados</p>
                <p className="text-2xl font-bold text-purple-600">{stats.cerrados}</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">C</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Facturado</p>
                <p className="text-2xl font-bold text-green-600">S/{stats.valorTotal}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Potencial</p>
                <p className="text-2xl font-bold text-yellow-600">S/{stats.valorPotencial}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilter('todos')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === 'todos' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Todos ({stats.total})
          </button>
          {['nuevo', 'contactado', 'interesado', 'propuesta', 'cerrado', 'perdido'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                filter === status 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {status} ({leads.filter(l => l.status === status).length})
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Lista de Leads ({filteredLeads.length})
            </h2>
            
            {loading ? (
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="animate-pulse">
                    <div className="h-16 bg-gray-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Lead</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Contacto</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Fuente</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Estado</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Valor</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Último Contacto</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-gray-900">{lead.name}</div>
                            {lead.location && (
                              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                <MapPin className="w-3 h-3" />
                                {lead.location}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-gray-400" />
                              <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                                {lead.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${lead.phone}`} className="text-green-600 hover:underline">
                                {lead.phone}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getSourceColor(lead.source)}`}>
                            {lead.source}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-gray-900">S/{lead.value}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {lead.lastContact}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                              Editar
                            </button>
                            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                              Contactar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Google Sheets Integration */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            📊 Integración con Google Sheets
          </h3>
          <p className="text-green-800 mb-4">
            Tu CRM se sincroniza automáticamente con Google Sheets. Puedes descargar, 
            editar y agregar leads directamente desde tu hoja de cálculo favorita.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Abrir Google Sheets
            </button>
            <button className="px-4 py-2 bg-white text-green-600 border border-green-300 rounded-lg hover:bg-green-50">
              Configurar Automatización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
