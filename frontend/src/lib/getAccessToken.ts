import { cache } from 'react';

interface TwitchTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  obtained_at: number;
}

let cachedToken: TwitchTokenResponse | null = null;

export const generateApiToken = cache(
  async (): Promise<TwitchTokenResponse> => {
    if (cachedToken && isTokenValid(cachedToken)) {
      return cachedToken;
    }

    const clientId = process.env.IGDB_CLIENT_ID;
    const clientSecret = process.env.IGDB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error('Missing Twitch API credentials');
    }

    const queryParams = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    });

    try {
      const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryParams,
      });

      if (!response.ok) {
        throw new Error(`Token request failed: ${response.status}`);
      }

      const tokenData = (await response.json()) as Omit<
        TwitchTokenResponse,
        'obtained_at'
      >;

      const fullTokenData = {
        ...tokenData,
        obtained_at: Date.now(),
      };

      cachedToken = fullTokenData;

      return fullTokenData;
    } catch (error) {
      console.error('Token generation error:', error);
      throw new Error('Failed to generate IGDB API token');
    }
  }
);

function isTokenValid(token: TwitchTokenResponse): boolean {
  const SAFETY_MARGIN = 5 * 60 * 1000;
  const currentTime = Date.now();
  const tokenExpirationTime = token.obtained_at + token.expires_in * 1000;

  return currentTime < tokenExpirationTime - SAFETY_MARGIN;
}
