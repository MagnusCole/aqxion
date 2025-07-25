import { NextRequest, NextResponse } from 'next/server';
import { getUserFromSession } from '@/lib/auth-api';
import { PortalService } from '@/lib/portal-service';

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tasks = await PortalService.getUserTasks(user.id);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    
    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, priority, category, dueDate } = body;

    const task = await PortalService.createTask(user.id, {
      title,
      description,
      priority,
      category,
      dueDate: dueDate ? new Date(dueDate) : undefined
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
