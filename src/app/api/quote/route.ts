import { NextResponse } from 'next/server';
import { saveQuoteRequest } from '@/lib/formStore';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      jobTitle,
      industry,
      cameras,
      services,
      location,
      sites,
      timeframe,
      budget,
      notes,
    } = body;

    if (!name || !company || !email || !phone || !industry || !cameras || !location) {
      return NextResponse.json(
        { error: 'Please complete all required quote fields.' },
        { status: 400 }
      );
    }

    const requestRecord = saveQuoteRequest({
      name: String(name).trim(),
      company: String(company).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      jobTitle: jobTitle ? String(jobTitle).trim() : undefined,
      industry: String(industry).trim(),
      cameras: String(cameras).trim(),
      services: Array.isArray(services) ? services.map(String) : [],
      location: String(location).trim(),
      sites: String(sites).trim(),
      timeframe: timeframe ? String(timeframe).trim() : undefined,
      budget: budget ? String(budget).trim() : undefined,
      notes: notes ? String(notes).trim() : undefined,
    });

    console.log('New quote request:', requestRecord);

    return NextResponse.json({ success: true, request: requestRecord }, { status: 201 });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { error: 'Unable to process quote request at this time.' },
      { status: 500 }
    );
  }
}
