import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// Google Drive API para recursos del cliente
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Implementar Google Drive API
    // Por ahora devolvemos recursos mock que luego conectarás a tu Google Drive
    const mockResources = {
      categories: [
        {
          id: "marketing",
          name: "Marketing Digital",
          description: "Guías y templates para tu marketing",
          resources: [
            {
              id: "1",
              name: "Guía Completa Google My Business",
              type: "pdf",
              size: "2.5 MB",
              url: "https://drive.google.com/file/d/MOCK_ID_1",
              description: "Step-by-step para optimizar tu perfil",
              tags: ["google", "local-seo", "básico"]
            },
            {
              id: "2", 
              name: "Templates WhatsApp Business",
              type: "doc",
              size: "1.2 MB",
              url: "https://drive.google.com/file/d/MOCK_ID_2",
              description: "Mensajes pre-escritos para diferentes situaciones",
              tags: ["whatsapp", "ventas", "templates"]
            }
          ]
        },
        {
          id: "branding",
          name: "Identidad de Marca",
          description: "Recursos para crear tu marca profesional",
          resources: [
            {
              id: "3",
              name: "Kit de Logos y Colores",
              type: "zip",
              size: "15 MB", 
              url: "https://drive.google.com/file/d/MOCK_ID_3",
              description: "Logos en diferentes formatos + paleta de colores",
              tags: ["logo", "branding", "diseño"]
            }
          ]
        }
      ],
      recentUploads: [
        {
          id: "4",
          name: "Checklist Lanzamiento 2025",
          type: "pdf",
          uploadDate: "2025-01-20",
          url: "https://drive.google.com/file/d/MOCK_ID_4"
        }
      ],
      totalFiles: 47,
      storageUsed: "156 MB"
    };

    return NextResponse.json(mockResources);
  } catch (error) {
    console.error('Error fetching Google Drive resources:', error);
    return NextResponse.json(
      { error: 'Error fetching resources' },
      { status: 500 }
    );
  }
}

// Solicitar acceso a recurso específico
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { resourceId, requestType } = body;

    // TODO: Implementar Google Drive sharing API
    console.log(`Resource ${resourceId} access requested by ${session.user.email}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Access granted - check your email',
      directUrl: `https://drive.google.com/file/d/${resourceId}/view`
    });
  } catch (error) {
    console.error('Error granting Drive access:', error);
    return NextResponse.json(
      { error: 'Error granting access' },
      { status: 500 }
    );
  }
}
