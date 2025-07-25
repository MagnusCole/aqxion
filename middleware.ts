import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // No protection needed - pure sales focus
  return NextResponse.next();
}
