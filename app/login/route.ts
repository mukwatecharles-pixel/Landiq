import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials (replace with your actual database lookup later)
    if (email && password) {
      return NextResponse.json({
        success: true,
        token: 'mock-jwt-token-landiq',
        user: { email, name: 'Client' }
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}