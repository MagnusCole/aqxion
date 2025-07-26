import { NextRequest, NextResponse } from 'next/server';
import { PortalService } from '@/lib/portal-service';

export async function GET(request: NextRequest) {
  try {
    // Temporary: Use direct user instead of session for development
    const user = { id: 'demo-user-id' };
    
    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const activities = await PortalService.getUserActivities(user.id);
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Temporary: Use direct user instead of session for development
    const user = { id: 'demo-user-id' };
    
    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, category } = body;

    const activity = await PortalService.createActivity(user.id, {
      title,
      description,
      category
    });

    return NextResponse.json(activity);
  } catch (error) {
    console.error('Error creating activity:', error);
    return NextResponse.json(
      { error: 'Failed to create activity' },
      { status: 500 }
    );
  }
}
