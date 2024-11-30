import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(
      { error: 'Se requiere un término de búsqueda' },
      { status: 400 }
    );
  }

  const clientId = process.env.IGDB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: 'Configuración de API incompleta' },
      { status: 500 }
    );
  }

  const headers = {
    'Client-ID': clientId,
    Authorization: `Bearer ye5axrnvt396ptqwtkfget7zkbotkj`,
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
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: headers,
      body: body,
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Error en la búsqueda de juegos');
    }

    const games = await response.json();
    return NextResponse.json(games);
  } catch (error) {
    console.error('Error en búsqueda de juegos:', error);
    return NextResponse.json(
      { error: 'No se pudieron obtener los juegos' },
      { status: 500 }
    );
  }
}
