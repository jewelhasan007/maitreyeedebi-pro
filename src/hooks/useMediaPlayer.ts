import { useCallback, useEffect, useRef, useState } from 'react';
import { SongTrack } from '../types';
import { getYouTubeId, isYouTubeUrl } from '../utils/mediaSource';

// --- Minimal YT typings (avoids pulling in @types/youtube) ---
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YT_CONTAINER_ID = 'yt-audio-player-hidden';
let ytApiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise((resolve) => {
    const existing = document.getElementById('youtube-iframe-api-script');
    if (!existing) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => resolve();
  });

  return ytApiPromise;
}

/**
 * Drop-in replacement for a plain <audio>-based player. Exposes the same
 * shape (currentTrack, isPlaying, togglePlay) your MusicSection already
 * expects, but transparently routes YouTube links through the hidden
 * YouTube IFrame Player and everything else through <audio>.
 *
 * @param onTrackEnd optional callback fired when a track finishes and loop
 * is off — wire this to your "play next track" logic (e.g. in App.tsx).
 */
export function useMediaPlayer(onTrackEnd?: () => void) {
  const [currentTrack, setCurrentTrack] = useState<SongTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const [loop, setLoop] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const pollRef = useRef<number | null>(null);
  const loopRef = useRef(loop);
  const onTrackEndRef = useRef(onTrackEnd);
  loopRef.current = loop;
  onTrackEndRef.current = onTrackEnd;

  // Set up the hidden <audio> element + hidden YouTube container once.
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.addEventListener('loadedmetadata', () => setDuration(audio.duration || 0));
      audio.addEventListener('ended', () => {
        if (loopRef.current) {
          audio.currentTime = 0;
          audio.play();
        } else {
          setIsPlaying(false);
          onTrackEndRef.current?.();
        }
      });
      audioRef.current = audio;
    }

    if (!document.getElementById(YT_CONTAINER_ID)) {
      const div = document.createElement('div');
      div.id = YT_CONTAINER_ID;
      div.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;';
      document.body.appendChild(div);
    }

    return () => {
      if (pollRef.current) window.clearInterval(pollRef.current);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.loop = loop;
  }, [loop]);

  const stopPolling = () => {
    if (pollRef.current) {
      window.clearInterval(pollRef.current);
      pollRef.current = null;
    }
  };

  const startYouTubePolling = () => {
    stopPolling();
    pollRef.current = window.setInterval(() => {
      const p = ytPlayerRef.current;
      if (p?.getCurrentTime) {
        setCurrentTime(p.getCurrentTime());
        setDuration(p.getDuration() || 0);
      }
    }, 500);
  };

  const playYouTube = useCallback(
    async (videoId: string) => {
      audioRef.current?.pause();
      await loadYouTubeApi();

      if (ytPlayerRef.current) {
        ytPlayerRef.current.loadVideoById(videoId);
        ytPlayerRef.current.playVideo();
        startYouTubePolling();
        return;
      }

      ytPlayerRef.current = new window.YT.Player(YT_CONTAINER_ID, {
        height: '1',
        width: '1',
        videoId,
        playerVars: { autoplay: 1, controls: 0, playsinline: 1 },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(volume * 100);
            e.target.playVideo();
            startYouTubePolling();
          },
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            if (e.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
            if (e.data === window.YT.PlayerState.ENDED) {
              if (loopRef.current) {
                e.target.seekTo(0, true);
                e.target.playVideo();
              } else {
                setIsPlaying(false);
                onTrackEndRef.current?.();
              }
            }
          },
        },
      });
    },
    [volume]
  );

  const playNativeAudio = useCallback(
    (url: string) => {
      ytPlayerRef.current?.stopVideo?.();
      stopPolling();
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.volume = volume;
        audioRef.current.play();
      }
    },
    [volume]
  );

  const play = useCallback(
    (track: SongTrack) => {
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);

      if (isYouTubeUrl(track.audioUrl)) {
        playYouTube(getYouTubeId(track.audioUrl)!);
      } else {
        playNativeAudio(track.audioUrl);
      }
    },
    [playYouTube, playNativeAudio]
  );

  const pause = useCallback(() => {
    if (currentTrack && isYouTubeUrl(currentTrack.audioUrl)) {
      ytPlayerRef.current?.pauseVideo();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(false);
  }, [currentTrack]);

  const resume = useCallback(() => {
    if (currentTrack && isYouTubeUrl(currentTrack.audioUrl)) {
      ytPlayerRef.current?.playVideo();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(true);
  }, [currentTrack]);

  // Matches the (track) => void signature MusicSection already calls.
  const togglePlay = useCallback(
    (track: SongTrack) => {
      if (currentTrack?.id === track.id) {
        isPlaying ? pause() : resume();
      } else {
        play(track);
      }
    },
    [currentTrack, isPlaying, pause, resume, play]
  );

  const seek = useCallback(
    (time: number) => {
      if (currentTrack && isYouTubeUrl(currentTrack.audioUrl)) {
        ytPlayerRef.current?.seekTo(time, true);
      } else if (audioRef.current) {
        audioRef.current.currentTime = time;
      }
      setCurrentTime(time);
    },
    [currentTrack]
  );

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
    if (ytPlayerRef.current?.setVolume) ytPlayerRef.current.setVolume(v * 100);
  }, []);

  return {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    loop,
    setLoop,
    togglePlay, // <- pass this as onPlayTrack to MusicSection
    play,
    pause,
    resume,
    seek,
    setVolume,
  };
}