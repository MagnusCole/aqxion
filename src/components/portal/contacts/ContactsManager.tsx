'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  Phone, 
  Mail, 
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
  MessageCircle
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  source: 'whatsapp' | 'phone' | 'walk-in' | 'referral' | 'online';
  notes?: string;
  createdDate: string;
  lastContact?: string;
  status: 'lead' | 'client' | 'inactive';
}

export default function ContactsManager() {
  const { userData, addContact } = useMYPEUserData();
  
  // Estado completamente vacío - el usuario debe agregar todos los contactos manualmente
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | Contact['status']>('all');
  
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    source: 'walk-in' as Contact['source'],
    notes: ''
  });

  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone) return;

    const contact: Contact = {
      id: Date.now().toString(),
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email || undefined,
      source: newContact.source,
      notes: newContact.notes || undefined,
      createdDate: new Date().toISOString(),
      status: 'lead'
    };

    setContacts(prev => [contact, ...prev]);
    addContact(newContact.name);
    
    // Reset form
    setNewContact({
      name: '',
      phone: '',
      email: '',
      source: 'walk-in',
      notes: ''
    });
    setShowAddForm(false);
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.phone.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || contact.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getSourceIcon = (source: Contact['source']) => {
    switch (source) {
      case 'whatsapp': return <MessageCircle className="h-4 w-4 text-green-500" />;
      case 'phone': return <Phone className="h-4 w-4 text-blue-500" />;
      case 'online': return <Mail className="h-4 w-4 text-purple-500" />;
      default: return <Users className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'lead': return 'bg-yellow-100 text-yellow-800';
      case 'client': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Contactos</h1>
            <p className="text-gray-600">
              Administra tu base de datos de clientes y leads
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Agregar Contacto
          </button>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{contacts.length}</div>
            <div className="text-sm text-blue-600">Total Contactos</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {contacts.filter(c => c.status === 'lead').length}
            </div>
            <div className="text-sm text-yellow-600">Leads Activos</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">
              {contacts.filter(c => c.status === 'client').length}
            </div>
            <div className="text-sm text-green-600">Clientes</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">
              {contacts.filter(c => c.source === 'whatsapp').length}
            </div>
            <div className="text-sm text-purple-600">Por WhatsApp</div>
          </div>
        </div>

        {/* Búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o teléfono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todos los estados</option>
            <option value="lead">Leads</option>
            <option value="client">Clientes</option>
            <option value="inactive">Inactivos</option>
          </select>
        </div>
      </motion.div>

      {/* Modal de agregar contacto */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Agregar Nuevo Contacto</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Nombre completo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+51 999 888 777"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (opcional)
                </label>
                <input
                  type="email"
                  value={newContact.email}
                  onChange={(e) => setNewContact(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@ejemplo.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ¿Cómo te contactó?
                </label>
                <select
                  value={newContact.source}
                  onChange={(e) => setNewContact(prev => ({ ...prev, source: e.target.value as Contact['source'] }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="walk-in">Vino al local</option>
                  <option value="phone">Llamada telefónica</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="referral">Recomendación</option>
                  <option value="online">Online/Web</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notas (opcional)
                </label>
                <textarea
                  value={newContact.notes}
                  onChange={(e) => setNewContact(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Información adicional..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddContact}
                disabled={!newContact.name || !newContact.phone}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
              >
                Agregar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Lista de contactos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        {filteredContacts.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {contact.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900">{contact.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {contact.phone}
                        </span>
                        {contact.email && (
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {contact.email}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {getSourceIcon(contact.source)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                        {contact.status === 'lead' ? 'Lead' : 
                         contact.status === 'client' ? 'Cliente' : 'Inactivo'}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-500 text-right">
                      <div>Agregado: {formatDate(contact.createdDate)}</div>
                      {contact.lastContact && (
                        <div>Último contacto: {formatDate(contact.lastContact)}</div>
                      )}
                    </div>

                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {contact.notes && (
                  <div className="mt-2 ml-14 text-sm text-gray-600 bg-gray-50 rounded p-2">
                    {contact.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-1">No hay contactos</h3>
            <p className="text-sm text-gray-500 mb-4">
              {searchTerm || filterStatus !== 'all' 
                ? 'No se encontraron contactos con esos filtros'
                : 'Empieza agregando tu primer contacto'
              }
            </p>
            {!searchTerm && filterStatus === 'all' && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Agregar Primer Contacto
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
