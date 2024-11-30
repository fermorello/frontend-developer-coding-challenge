import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  const [gameName] = slug.split('--');

  if (!gameName) {
    return NextResponse.json(
      { error: 'Slug de juego inválido' },
      { status: 400 }
    );
  }

  const clientId = process.env.IGDB_CLIENT_ID;
  // const accessToken = process.env.IGDB_ACCESS_TOKEN;

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
    where slug = "${gameName}";
    fields 
      name,
      summary,
      storyline,
      cover.url,
      screenshots.url,
      videos.video_id,
      platforms.name,
      genres.name,
      first_release_date,
      total_rating,
      total_rating_count,
      involved_companies.company.name,
      involved_companies.developer,
      involved_companies.publisher,
      websites.url,
      websites.category,
      slug,
      similar_games.name,
      similar_games.slug,
      similar_games.cover.url;
    limit 1;
  `;

  try {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: headers,
      body: body,
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Error en la búsqueda de detalles del juego');
    }

    const games = await response.json();


    // Si no se encuentra el juego
    if (games.length === 0) {
      return NextResponse.json(
        { error: 'Juego no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(games[0]);
  } catch (error) {
    console.error('Error en búsqueda de detalles de juego:', error);
    return NextResponse.json(
      { error: 'No se pudieron obtener los detalles del juego' },
      { status: 500 }
    );
  }
}
