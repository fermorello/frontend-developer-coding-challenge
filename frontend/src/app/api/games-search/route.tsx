import { generateApiToken } from '@/lib/getAccessToken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(
      { error: 'Seatch term its required. ' },
      { status: 400 }
    );
  }

  const clientId = process.env.IGDB_CLIENT_ID;
  const accessToken = await generateApiToken();
  const API_URL = process.env.IGDB_API_URL;

  if (!clientId || !API_URL) {
    return NextResponse.json(
      { error: 'API configuration incomplete' },
      { status: 500 }
    );
  }

  const headers = {
    'Client-ID': clientId,
    Authorization: `Bearer ${accessToken.access_token}`,
    'Content-Type': 'text/plain',
  };

  const body = `
    search "${query}";
    fields 
      name,
      cover.url,
      slug;
    limit 20;
  `;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: body,
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Error trying to fetch the game');
    }

    const games = await response.json();
    return NextResponse.json(games);
  } catch (error) {
    console.error('Error trying to fetch the game:', error);
    return NextResponse.json(
      { error: 'Could not get the game' },
      { status: 500 }
    );
  }
}
