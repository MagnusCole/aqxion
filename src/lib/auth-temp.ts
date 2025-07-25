// Función helper para reemplazar getServerSession temporalmente
// Esta es una solución temporal hasta migrar todas las APIs a Supabase

export async function getServerSession() {
  // Por ahora, devolvemos una sesión mock para que las APIs no fallen
  // TODO: Migrar cada API individualmente a Supabase Auth
  return {
    user: {
      id: 'temp-user-id',
      email: 'luis@aqxion.com' // Usuario por defecto temporal
    }
  };
}

export const authOptions = {
  // Mock auth options para compatibilidad
};
