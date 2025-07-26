// 🔐 Auth Temp Module - Sistema AQXION
// Temporary auth utilities until we implement full authentication

export const authOptions = {
  // Simplified auth options
  providers: [],
  session: {
    strategy: 'jwt' as const,
  },
};

export async function getServerSession() {
  // Temporary implementation
  return null;
}

export function getCurrentUser() {
  // Simulamos un usuario autenticado para development
  return {
    id: 'demo-user-id',
    email: 'demo@aqxion.com',
    businessName: 'Demo Business'
  };
}

export function isAuthenticated(): boolean {
  // Para desarrollo, siempre retornamos true
  return true;
}

export function requireAuth(req: any) {
  // Middleware temporal para requerir autenticación
  const user = getCurrentUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  return user;
}
