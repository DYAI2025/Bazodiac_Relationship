export interface PublicConfig {
  relationshipBffBaseUrl: string | null;
  dataMode: 'DEMO_DATA' | 'LIVE_DATA';
}

export function readPublicConfig(): PublicConfig {
  const raw = process.env.EXPO_PUBLIC_RELATIONSHIP_BFF_URL?.trim();
  if (raw && !/^https:\/\//.test(raw)) throw new Error('BFF URL must use HTTPS');
  return { relationshipBffBaseUrl: raw || null, dataMode: raw ? 'LIVE_DATA' : 'DEMO_DATA' };
}
