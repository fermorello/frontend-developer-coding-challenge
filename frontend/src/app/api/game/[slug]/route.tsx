import { generateApiToken } from '@/lib/getAccessToken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const [gameName] = slug.split('--');
  if (!gameName) {
    return NextResponse.json({ error: 'Invalid slug game' }, { status: 400 });
  }

  const clientId = process.env.IGDB_CLIENT_ID;
  const accessToken = await generateApiToken();
  const URL = process.env.IGDB_API_URL;

  if (!clientId || !URL) {
    return NextResponse.json(
      { error: 'Incomplete API Configuration.' },
      { status: 500 }
    );
  }

  const headers = {
    'Client-ID': clientId,
    Authorization: `Bearer ${accessToken.access_token}`,
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
    const response = await fetch(URL, {
      method: 'POST',
      headers: headers,
      body: body,
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error('Error on game details fetch:');
    }

    const games = await response.json();

    // Si no se encuentra el juego
    if (games.length === 0) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(games[0]);
  } catch (error) {
    console.error('Error on game details fetch:', error);
    return NextResponse.json(
      { error: 'Error trying to get the game details.' },
      { status: 500 }
    );
  }
}
