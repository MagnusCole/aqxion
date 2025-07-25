import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { supabase } from '@/lib/supabase';

export function useSuperAdminNextAuth() {
  const { data: session } = useSession();
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSuperAdminStatus();
  }, [session?.user?.email]);

  const checkSuperAdminStatus = async () => {
    try {
      setLoading(true);
      
      if (!session?.user?.email) {
        setIsSuperAdmin(false);
        return;
      }

      const { data, error } = await supabase
        .from('super_admins')
        .select('email')
        .eq('email', session.user.email)
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking super admin status:', error);
        setIsSuperAdmin(false);
        return;
      }

      setIsSuperAdmin(!!data);
    } catch (error) {
      console.error('Error checking super admin status:', error);
      setIsSuperAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  return { isSuperAdmin, loading, checkSuperAdminStatus };
}
