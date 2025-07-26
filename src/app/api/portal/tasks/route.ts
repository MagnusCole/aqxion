import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: NextRequest) {
  try {
    const user = { id: 'demo-user-id' };
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: tasks, error } = await supabaseAdmin
      .from('tasks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    // Transformar para compatibilidad con el frontend
    const transformedTasks = tasks.map(task => ({
      id: task.id,
      title: task.title,
      description: task.description,
      type: task.category || 'setup',
      priority: task.priority,
      estimatedMinutes: 30, // Default value
      points: task.priority === 'high' ? 15 : task.priority === 'medium' ? 10 : 5,
      completed: task.status === 'completed',
      dueDate: task.due_date,
      createdDate: task.created_at,
      completedDate: task.completed_at
    }));

    return NextResponse.json({ tasks: transformedTasks });

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
    const user = { id: 'demo-user-id' };
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, priority, category, dueDate } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const { data: newTask, error } = await supabaseAdmin
      .from('tasks')
      .insert({
        user_id: user.id,
        title,
        description,
        category: category || 'setup',
        priority: priority || 'medium',
        status: 'pending',
        due_date: dueDate
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Registrar actividad
    await supabaseAdmin
      .from('activities')
      .insert({
        user_id: user.id,
        action: 'task_created',
        entity_type: 'tasks',
        entity_id: newTask.id,
        metadata: { title, category }
      });

    return NextResponse.json({ 
      success: true,
      task: newTask
    });

  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}

// 🔄 PUT: Actualizar tarea (toggle complete, etc.)
export async function PUT(request: NextRequest) {
  try {
    const user = { id: 'demo-user-id' };
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { taskId, completed, title, description, priority } = body;

    if (!taskId) {
      return NextResponse.json(
        { error: 'Task ID is required' },
        { status: 400 }
      );
    }

    // Preparar datos de actualización
    const updateData: any = {};
    
    if (completed !== undefined) {
      updateData.status = completed ? 'completed' : 'pending';
      if (completed) {
        updateData.completed_at = new Date().toISOString();
      } else {
        updateData.completed_at = null;
      }
    }
    
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (priority !== undefined) updateData.priority = priority;
    
    updateData.updated_at = new Date().toISOString();

    const { data: updatedTask, error } = await supabaseAdmin
      .from('tasks')
      .update(updateData)
      .eq('id', taskId)
      .eq('user_id', user.id) // Security: solo sus propias tareas
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Registrar actividad
    await supabaseAdmin
      .from('activities')
      .insert({
        user_id: user.id,
        action: completed ? 'task_completed' : 'task_updated',
        entity_type: 'tasks',
        entity_id: taskId,
        metadata: { completed, title }
      });

    return NextResponse.json({ 
      success: true,
      task: updatedTask
    });

  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}
