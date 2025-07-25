'use client';

import { useEffect, useState } from 'react';
import { useAuth as useAuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

interface ExtendedUser {
  user: any;
  isSuperAdmin: boolean;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

export function useAuth(): ExtendedUser {
  const { user, loading, signOut } = useAuthContext();
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSuperAdmin = async () => {
      if (!user) {
        setIsSuperAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        // Verificar si el usuario es super admin
        const { data, error } = await supabase
          .from('super_admins')
          .select('email')
          .eq('email', user.email)
          .eq('is_active', true)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking super admin status:', error);
        }

        setIsSuperAdmin(!!data);
        console.log('🔑 Super admin check:', user.email, !!data);
      } catch (error) {
        console.error('Error in super admin check:', error);
        setIsSuperAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSuperAdmin();
  }, [user]);

  return {
    user,
    isSuperAdmin,
    isLoading: loading || isLoading,
    signOut
  };
}
