'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface SuperAdminUser {
  id: string;
  email: string;
  businessName?: string;
  createdAt: string;
  isActive: boolean;
}

interface UseSuperAdminReturn {
  users: SuperAdminUser[];
  loading: boolean;
  error: string | null;
  isSuperAdmin: boolean;
  refetch: () => Promise<void>;
}

export function useSuperAdmin(): UseSuperAdminReturn {
  const [users, setUsers] = useState<SuperAdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulamos datos para el debug page
      const mockUsers: SuperAdminUser[] = [
        {
          id: '1',
          email: 'demo@myperu.pe',
          businessName: 'Salón de Belleza María',
          createdAt: new Date().toISOString(),
          isActive: true
        },
        {
          id: '2',
          email: 'carlos@dental.com',
          businessName: 'Clínica Dental Los Olivos',
          createdAt: new Date().toISOString(),
          isActive: true
        }
      ];
      
      setUsers(mockUsers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);

  return {
    users,
    loading,
    error,
    isSuperAdmin: user?.email === 'admin@myperu.pe', // Temporary super admin check
    refetch: fetchUsers
  };
}
