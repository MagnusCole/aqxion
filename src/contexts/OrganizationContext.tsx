'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

interface Organization {
  id: string;
  name: string;
  slug: string;
  subscription_tier: 'starter' | 'team' | 'enterprise';
  max_users: number;
}

interface Workspace {
  id: string;
  name: string;
  description: string | null;
  color: string;
  is_private: boolean;
}

interface OrganizationContextType {
  currentOrganization: Organization | null;
  currentWorkspace: Workspace | null;
  userRole: 'owner' | 'admin' | 'member' | 'guest' | null;
  organizations: Organization[];
  workspaces: Workspace[];
  loading: boolean;
  switchOrganization: (orgId: string) => Promise<void>;
  switchWorkspace: (workspaceId: string) => Promise<void>;
  isTeamFeatureEnabled: boolean;
}

const OrganizationContext = createContext<OrganizationContextType>({
  currentOrganization: null,
  currentWorkspace: null,
  userRole: null,
  organizations: [],
  workspaces: [],
  loading: true,
  switchOrganization: async () => {},
  switchWorkspace: async () => {},
  isTeamFeatureEnabled: false,
});

export function OrganizationProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null);
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(null);
  const [userRole, setUserRole] = useState<'owner' | 'admin' | 'member' | 'guest' | null>(null);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  // Feature flag para equipos (se puede activar cuando el usuario lo necesite)
  const isTeamFeatureEnabled = false; // Por ahora deshabilitado

  useEffect(() => {
    if (user && isTeamFeatureEnabled) {
      loadUserOrganizations();
    } else {
      // Modo individual - crear organización virtual
      setCurrentOrganization({
        id: 'individual',
        name: user?.email?.split('@')[0] || 'Mi Negocio',
        slug: 'individual',
        subscription_tier: 'starter',
        max_users: 1
      });
      setCurrentWorkspace({
        id: 'personal',
        name: 'Personal',
        description: 'Espacio de trabajo personal',
        color: '#3B82F6',
        is_private: true
      });
      setUserRole('owner');
      setLoading(false);
    }
  }, [user, isTeamFeatureEnabled]);

  const loadUserOrganizations = async () => {
    if (!user) return;

    try {
      // Cargar organizaciones del usuario
      const { data: memberships, error } = await supabase
        .from('organization_members')
        .select(`
          role,
          organizations (
            id,
            name,
            slug,
            subscription_tier,
            max_users
          )
        `)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error loading organizations:', error);
        return;
      }

      const orgs = memberships?.map(m => m.organizations).filter(Boolean).flat() as Organization[] || [];
      setOrganizations(orgs);

      // Establecer organización actual (la primera o la que esté en el perfil)
      if (orgs.length > 0) {
        const firstOrg = orgs[0];
        setCurrentOrganization(firstOrg);
        
        // Encontrar el rol del usuario en esta organización
        const membership = memberships.find(m => (m.organizations as any).id === firstOrg.id);
        setUserRole(membership?.role || 'member');

        // Cargar workspaces de la organización actual
        await loadWorkspaces(firstOrg.id);
      }
    } catch (error) {
      console.error('Error in loadUserOrganizations:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadWorkspaces = async (organizationId: string) => {
    try {
      const { data, error } = await supabase
        .from('workspaces')
        .select('*')
        .eq('organization_id', organizationId);

      if (error) {
        console.error('Error loading workspaces:', error);
        return;
      }

      setWorkspaces(data || []);
      
      // Establecer el primer workspace como actual
      if (data && data.length > 0) {
        setCurrentWorkspace(data[0]);
      }
    } catch (error) {
      console.error('Error in loadWorkspaces:', error);
    }
  };

  const switchOrganization = async (orgId: string) => {
    const org = organizations.find(o => o.id === orgId);
    if (org) {
      setCurrentOrganization(org);
      await loadWorkspaces(orgId);
      
      // Actualizar perfil del usuario
      await supabase
        .from('user_profiles')
        .update({ current_organization_id: orgId })
        .eq('id', user?.id);
    }
  };

  const switchWorkspace = async (workspaceId: string) => {
    const workspace = workspaces.find(w => w.id === workspaceId);
    if (workspace) {
      setCurrentWorkspace(workspace);
      
      // Actualizar perfil del usuario
      await supabase
        .from('user_profiles')
        .update({ current_workspace_id: workspaceId })
        .eq('id', user?.id);
    }
  };

  return (
    <OrganizationContext.Provider value={{
      currentOrganization,
      currentWorkspace,
      userRole,
      organizations,
      workspaces,
      loading,
      switchOrganization,
      switchWorkspace,
      isTeamFeatureEnabled,
    }}>
      {children}
    </OrganizationContext.Provider>
  );
}

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error('useOrganization must be used within an OrganizationProvider');
  }
  return context;
};
