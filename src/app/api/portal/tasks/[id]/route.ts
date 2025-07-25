import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { PortalService } from '@/lib/portal-service';

interface Context {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, context: Context) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const params = await context.params;
    const body = await request.json();
    const { completed } = body;

    const task = await PortalService.toggleTask(params.id, completed);
    return NextResponse.json(task);
  } catch (error) {
    console.error('Error toggling task:', error);
    return NextResponse.json(
      { error: 'Failed to toggle task' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const params = await context.params;
    await PortalService.deleteTask(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
