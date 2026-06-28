import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: 'Message sent successfully', contact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST ERROR =>", error);

    return NextResponse.json(
      {
        error: error.message,
        details: String(error),
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error: any) {
    console.error("GET ERROR =>", error);
    return NextResponse.json(
      {
        error: error.message,
        details: String(error),
      },
      { status: 500 }
    );
  }
}
