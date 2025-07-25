'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  User, 
  Mail, 
  Building, 
  Calendar,
  Edit3, 
  Trash2, 
  X, 
  Save,
  Users,
  Shield,
  Eye,
  AlertCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useSuperAdmin } from '@/hooks/useSuperAdmin';

interface UserProfile {
  id: string;
  email: string;
  business_name: string | null;
  industry: string | null;
  created_at: string;
  updated_at: string;
}

interface SuperAdminUsersProps {
  className?: string;
}

export default function SuperAdminUsers({ className = '' }: SuperAdminUsersProps) {
  const { isSuperAdmin, loading: adminLoading } = useSuperAdmin();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    business_name: '',
    industry: ''
  });

  // Cargar usuarios
  useEffect(() => {
    if (isSuperAdmin) {
      loadUsers();
    }
  }, [isSuperAdmin]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading users:', error);
      } else {
        setUsers(data || []);
      }
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if (!newUser.email.trim() || !newUser.password.trim()) return;

    try {
      // Obtener el token del usuario actual
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('Sesión expirada');
        return;
      }

      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          action: 'createUser',
          userData: newUser
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error creating user');
      }

      // Resetear formulario y recargar
      setNewUser({ email: '', password: '', business_name: '', industry: '' });
      setShowAddForm(false);
      loadUsers();
      alert('Usuario creado exitosamente');

    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creando usuario: ' + (error as Error).message);
    }
  };

  const updateUser = async (updatedUser: UserProfile) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('Sesión expirada');
        return;
      }

      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          action: 'updateUser',
          userData: updatedUser
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error updating user');
      }

      setEditingUser(null);
      loadUsers();
      alert('Usuario actualizado exitosamente');

    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error actualizando usuario: ' + (error as Error).message);
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm('¿Estás seguro de eliminar este usuario? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('Sesión expirada');
        return;
      }

      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          action: 'deleteUser',
          userData: { userId }
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error deleting user');
      }

      loadUsers();
      alert('Usuario eliminado exitosamente');

    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error eliminando usuario: ' + (error as Error).message);
    }
  };

  const getUserStats = async (userId: string) => {
    try {
      const [contacts, events, tasks, activities] = await Promise.all([
        supabase.from('contacts').select('id').eq('user_id', userId),
        supabase.from('calendar_events').select('id').eq('user_id', userId),
        supabase.from('tasks').select('id').eq('user_id', userId),
        supabase.from('activities').select('id').eq('user_id', userId)
      ]);

      return {
        contacts: contacts.data?.length || 0,
        events: events.data?.length || 0,
        tasks: tasks.data?.length || 0,
        activities: activities.data?.length || 0
      };
    } catch (error) {
      console.error('Error getting user stats:', error);
      return { contacts: 0, events: 0, tasks: 0, activities: 0 };
    }
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.industry?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Si no es super admin, no mostrar nada
  if (adminLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isSuperAdmin) {
    return (
      <div className="text-center py-12">
        <Shield className="w-12 h-12 text-red-300 mx-auto mb-3" />
        <p className="text-red-500 font-medium">Acceso denegado</p>
        <p className="text-sm text-red-400 mt-1">Solo super administradores pueden acceder</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Gestión de Usuarios</h2>
            <p className="text-sm text-gray-500">{users.length} usuarios registrados</p>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddForm(true)}
          className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
        />
      </div>

      {/* Users List */}
      <div className="space-y-3">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">
              {users.length === 0 ? 'No hay usuarios registrados' : 'No se encontraron usuarios'}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {users.length === 0 ? 'Crea el primer usuario' : 'Intenta con otros términos de búsqueda'}
            </p>
          </div>
        ) : (
          filteredUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{user.business_name || 'Sin nombre de negocio'}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span>{user.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {user.industry && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building className="w-3 h-3" />
                        <span>{user.industry}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(user.created_at).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedUser(user)}
                    className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"
                    title="Ver detalles"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setEditingUser(user)}
                    className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600"
                    title="Editar"
                  >
                    <Edit3 className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => deleteUser(user.id)}
                    className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Add User Modal */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowAddForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Crear Usuario</h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="cliente@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña temporal *</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Negocio</label>
                  <input
                    type="text"
                    value={newUser.business_name}
                    onChange={(e) => setNewUser(prev => ({ ...prev, business_name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Mi MYPE"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industria</label>
                  <select
                    value={newUser.industry}
                    onChange={(e) => setNewUser(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar industria</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="retail">Retail/Tienda</option>
                    <option value="servicios">Servicios</option>
                    <option value="salud">Salud</option>
                    <option value="educacion">Educación</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium">Nota importante:</p>
                      <p>El usuario recibirá las credenciales y deberá cambiar su contraseña en el primer acceso.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={createUser}
                  disabled={!newUser.email.trim() || !newUser.password.trim()}
                  className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Crear Usuario
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit User Modal */}
      <AnimatePresence>
        {editingUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setEditingUser(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Editar Usuario</h3>
                <button
                  onClick={() => setEditingUser(null)}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={editingUser.email}
                    disabled
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">El email no se puede modificar</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Negocio</label>
                  <input
                    type="text"
                    value={editingUser.business_name || ''}
                    onChange={(e) => setEditingUser(prev => prev ? ({ ...prev, business_name: e.target.value }) : null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industria</label>
                  <select
                    value={editingUser.industry || ''}
                    onChange={(e) => setEditingUser(prev => prev ? ({ ...prev, industry: e.target.value }) : null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar industria</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="retail">Retail/Tienda</option>
                    <option value="servicios">Servicios</option>
                    <option value="salud">Salud</option>
                    <option value="educacion">Educación</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEditingUser(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => editingUser && updateUser(editingUser)}
                  className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
                >
                  Guardar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
