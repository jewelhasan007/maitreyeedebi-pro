import React, { useState } from 'react';
import { SongTrack } from '../types';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X, Repeat } from 'lucide-react';

// NOTE: this component no longer owns an <audio> element. Actual playback
// (native <audio> OR hidden YouTube IFrame player) is handled entirely by
// useMediaPlayer() in the parent (App.tsx). This component just displays
// the state it's handed and forwards user actions back up.
interface AudioPlayerDrawerProps {
  currentTrack: SongTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  loop: boolean;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onToggleLoop: () => void;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onClose: () => void;
}

export const AudioPlayerDrawer: React.FC<AudioPlayerDrawerProps> = ({
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  volume,
  loop,
  onSeek,
  onVolumeChange,
  onToggleLoop,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onClose,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  if (!currentTrack) return null;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSeek(parseFloat(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setIsMuted(false);
    onVolumeChange(v);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      onVolumeChange(volume || 0.8);
    } else {
      setIsMuted(true);
      onVolumeChange(0);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-[#D4AF37]/30 px-4 py-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Track Metadata */}
        <div className="flex items-center space-x-3 min-w-0 w-full md:w-auto">
          <div className="relative group shrink-0">
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className={`w-12 h-12 rounded-xl object-cover border border-[#D4AF37] ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="font-serif-luxury text-sm font-bold text-[#FAFAFA] truncate">
              {currentTrack.title}
            </h4>
            <p className="text-[11px] text-[#A3A3A3] truncate">
              {currentTrack.album} • {currentTrack.genre}
            </p>
          </div>
        </div>

        {/* Player Controls & Timeline */}
        <div className="flex-1 max-w-xl w-full space-y-1">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={onToggleLoop}
              className={`p-1.5 rounded-full text-xs transition-colors ${
                loop ? 'text-[#D4AF37]' : 'text-[#A3A3A3] hover:text-[#FAFAFA]'
              }`}
              title="Repeat Track"
            >
              <Repeat className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onPrevTrack}
              className="text-[#FAFAFA] hover:text-[#D4AF37] transition-colors p-1"
              title="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="p-2.5 rounded-full bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-black" />
              ) : (
                <Play className="w-4 h-4 fill-black ml-0.5" />
              )}
            </button>

            <button
              onClick={onNextTrack}
              className="text-[#FAFAFA] hover:text-[#D4AF37] transition-colors p-1"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 text-[10px] font-mono text-[#A3A3A3]">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full accent-[#D4AF37] h-1 rounded-lg bg-white/10 cursor-pointer"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right Controls: Volume & Close */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-[#A3A3A3] hover:text-[#D4AF37] transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#D4AF37]" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-16 accent-[#D4AF37] h-1 rounded-lg bg-white/10 cursor-pointer"
            />
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A3A3A3] hover:text-[#FAFAFA] hover:bg-white/10 transition-colors"
            title="Dismiss Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};