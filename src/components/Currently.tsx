import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { CurrentlyData } from '@/types';

export const Currently = () => {
  const [currentlyData, setCurrentlyData] = useState<CurrentlyData | null>(
    null
  );

  useEffect(() => {
    const fetchCurrentlyData = async () => {
      try {
        const response = await fetch('https://signal-mcp.fly.dev/mcp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            params: {
              name: 'get_current_spotify_track',
              arguments: {},
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();

          const trackData = JSON.parse(data.result.content[0].text);
          setCurrentlyData({
            name: trackData.name,
            description: `by ${trackData.artists[0].name} on Spotify`,
            url: trackData.external_urls.spotify,
            timestamp: new Date(trackData.played_at),
          });
        }
      } catch (error) {
        console.error('Failed to fetch currently data:', error);
      }
    };

    fetchCurrentlyData();
  }, []);

  return (
    <section>
      <h3 class="text-xl font-semibold tracking-tight leading-none pb-9">
        Currently
      </h3>
      <ul class="space-y-4">
        <li>
          <a class="block group" href={currentlyData?.url || ''}>
            <span class="font-medium block group-hover:underline underline-offset-2">
              {currentlyData?.name || 'Loading...'}
            </span>
            <span class="text-tony-400">
              {currentlyData?.description || 'Loading...'}
            </span>
            {currentlyData?.timestamp && (
              <span class="text-tony-300 text-sm block mt-1">
                about{' '}
                {formatDistanceToNow(currentlyData.timestamp, {
                  addSuffix: true,
                })}
              </span>
            )}
          </a>
        </li>
      </ul>
    </section>
  );
};
