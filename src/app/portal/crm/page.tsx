'use client';

import { useState, useEffect } from 'react';
import { Calendar, Users, Search, Filter, Download, Plus, Phone, Mail, MessageSquare, Star } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: 'website' | 'google' | 'facebook' | 'whatsapp' | 'referral';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed-won' | 'closed-lost';
  value: number;
  notes: string;
  createdAt: string;
  lastContact: string;
}

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Datos demo realistas
  const mockLeads: Lead[] = [
    {
      id: '1',
      name: 'María González',
      email: 'maria@example.com',
      phone: '+51 999 123 456',
      source: 'website',
      status: 'new',
      value: 1500,
      notes: 'Interesada en presencia digital completa',
      createdAt: '2025-01-25',
      lastContact: '2025-01-25'
    },
    {
      id: '2',
      name: 'Carlos Mendoza',
      email: 'carlos@restaurante.com',
      phone: '+51 987 654 321',
      source: 'google',
      status: 'contacted',
      value: 1500,
      notes: 'Dueño de restaurante, necesita WhatsApp Business',
      createdAt: '2025-01-24',
      lastContact: '2025-01-25'
    },
    {
      id: '3',
      name: 'Ana Rojas',
      email: 'ana@boutique.pe',
      phone: '+51 912 345 678',
      source: 'facebook',
      status: 'qualified',
      value: 1500,
      notes: 'Boutique online, quiere integrar inventario',
      createdAt: '2025-01-23',
      lastContact: '2025-01-24'
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setLeads(mockLeads);
      setFilteredLeads(mockLeads);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = leads;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm)
      );
    }

    // Filtrar por status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    setFilteredLeads(filtered);
  }, [searchTerm, statusFilter, leads]);

  const getStatusColor = (status: string) => {
    const colors = {
      'new': 'bg-blue-100 text-blue-800',
      'contacted': 'bg-yellow-100 text-yellow-800',
      'qualified': 'bg-green-100 text-green-800',
      'proposal': 'bg-purple-100 text-purple-800',
      'closed-won': 'bg-green-500 text-white',
      'closed-lost': 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'website': return '🌐';
      case 'google': return '🔍';
      case 'facebook': return '📘';
      case 'whatsapp': return '💬';
      case 'referral': return '👥';
      default: return '📞';
    }
  };

  const totalValue = filteredLeads.reduce((sum, lead) => sum + lead.value, 0);
  const conversionRate = leads.length > 0 ? (leads.filter(l => l.status === 'closed-won').length / leads.length * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
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
                Gestiona tus clientes potenciales y rastrea tu pipeline de ventas
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => {/* Descargar reporte */}}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4" />
                Exportar
              </button>
              
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Nuevo Lead
              </button>
            </div>
          </div>
        </div>

        {/* Métricas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Valor Pipeline</p>
                <p className="text-2xl font-bold text-gray-900">S/.{totalValue.toLocaleString()}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tasa Conversión</p>
                <p className="text-2xl font-bold text-gray-900">{conversionRate.toFixed(1)}%</p>
              </div>
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Nuevos (7 días)</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Plus className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Lista de leads simplificada */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads Recientes</h3>
          <div className="space-y-4">
            {mockLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <p className="text-sm text-gray-600">{lead.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                    {lead.status.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-600">S/.{lead.value.toLocaleString()}</span>
                  <div className="flex gap-2">
                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
