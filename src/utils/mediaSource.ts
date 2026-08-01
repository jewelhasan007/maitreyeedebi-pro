// Detects/parses YouTube video IDs from watch/youtu.be links so the player
// knows whether to use the YouTube IFrame API or a plain <audio> element.

const YOUTUBE_REGEX =
  /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;

export function getYouTubeId(url: string): string | null {
  const match = url.match(YOUTUBE_REGEX);
  return match ? match[1] : null;
}

export function isYouTubeUrl(url: string): boolean {
  return getYouTubeId(url) !== null;
}