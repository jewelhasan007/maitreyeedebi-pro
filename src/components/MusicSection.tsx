import React, { useState } from 'react';
import { FEATURED_TRACKS, ALBUMS_LIST } from '../data/portfolioData';
import { SongTrack, Album } from '../types';
import { Play, Pause, Music, Disc, ExternalLink, Sparkles, Volume2, AlignLeft, Headphones, Radio } from 'lucide-react';

interface MusicSectionProps {
  onPlayTrack: (track: SongTrack) => void;
  currentTrack: SongTrack | null;
  isPlaying: boolean;
}

const GENRES = ['All', 'Classical', 'Rabindra Sangeet', 'Sufi', 'Fusion'];

export const MusicSection: React.FC<MusicSectionProps> = ({
  onPlayTrack,
  currentTrack,
  isPlaying,
}) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState<SongTrack | null>(null);

  const filteredTracks = FEATURED_TRACKS.filter((track) => {
    if (selectedGenre === 'All') return true;
    return track.genre === selectedGenre;
  });

  return (
    <section id="music" className="py-16 sm:py-20 relative bg-[#090909] overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Music className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Discography & Audio Showcase
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Masterpieces of <br />
            <span className="gold-gradient-text italic font-normal">
              Sound & Soul
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Listen to studio releases, live symphonic recordings, and classical ragas.
          </p>
        </div>

        {/* Featured Albums Carousel / Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAFAFA] flex items-center space-x-2">
              <Disc className="w-5 h-5 text-[#D4AF37]" />
              <span>Studio Album Releases</span>
            </h3>
            <span className="text-xs font-mono text-[#D4AF37] uppercase">4 Studio Albums</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALBUMS_LIST.map((album) => (
              <div
                key={album.id}
                className="group p-4 rounded-2xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Vinyl Effect Album Cover */}
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={album.coverUrl}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Vinyl Record Peeking Out */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#121212] border-4 border-black flex items-center justify-center opacity-0 group-hover:opacity-90 group-hover:right-2 transition-all duration-500 shadow-2xl animate-spin-slow">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/30 border border-[#D4AF37]" />
                    </div>

                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono text-[#D4AF37]">
                      {album.releaseYear}
                    </div>
                  </div>

                  {/* Album Info */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                      {album.genre}
                    </span>
                    <h4 className="font-serif-luxury text-base font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors mt-0.5">
                      {album.title}
                    </h4>
                    <p className="text-[11px] text-[#A3A3A3] line-clamp-2 mt-1 leading-relaxed font-light">
                      {album.description}
                    </p>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-xs text-[#A3A3A3]">
                  <span className="text-[11px]">{album.tracksCount} Tracks</span>
                  <div className="flex items-center space-x-2">
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all"
                      title="Listen on Spotify"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tracks List Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#FAFAFA] flex items-center space-x-2">
                <Headphones className="w-5 h-5 text-[#D4AF37]" />
                <span>Featured Songs & Classical Recordings</span>
              </h3>
              <p className="text-xs text-[#A3A3A3]">Click any track to listen in studio quality</p>
            </div>

            {/* Genre Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {GENRES.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    selectedGenre === genre
                      ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                      : 'bg-[#121212] text-[#A3A3A3] hover:text-[#FAFAFA] border border-white/10'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Tracklist Items */}
          <div className="space-y-3">
            {filteredTracks.map((track, idx) => {
              const isCurrent = currentTrack?.id === track.id;
              const isCurrentPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`p-3 sm:p-3.5 rounded-2xl glass-panel transition-all duration-300 flex items-center justify-between group border ${
                    isCurrent
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-white/5 hover:border-[#D4AF37]/40'
                  }`}
                >
                  {/* Left: Index & Cover & Details */}
                  <div className="flex items-center space-x-4 min-w-0">
                    <span className="font-mono text-xs text-[#A3A3A3] w-6 text-center hidden sm:inline">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="relative group/cover shrink-0 cursor-pointer" onClick={() => onPlayTrack(track)}>
                      <img
                        src={track.coverUrl}
                        alt={track.title}
                        className="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/30"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center transition-opacity">
                        {isCurrentPlaying ? (
                          <Volume2 className="w-5 h-5 text-[#D4AF37] animate-pulse" />
                        ) : (
                          <Play className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                        )}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-serif-luxury text-base font-bold text-[#FAFAFA] truncate group-hover:text-[#D4AF37] transition-colors">
                          {track.title}
                        </h4>
                        {track.isPopular && (
                          <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-mono uppercase border border-[#D4AF37]/30">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#A3A3A3] truncate">
                        {track.album} • {track.genre} {track.featuredArtist ? `ft. ${track.featuredArtist}` : ''}
                      </p>
                    </div>
                  </div>

                  {/* Right: Streams, Lyrics Button & Play Trigger */}
                  <div className="flex items-center space-x-4 shrink-0">
                    <span className="hidden md:inline font-mono text-xs text-[#A3A3A3]">
                      {track.streams} Streams
                    </span>

                    {track.lyricsSnippet && (
                      <button
                        onClick={() => setSelectedLyricsTrack(track)}
                        className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-[#A3A3A3] hover:text-[#D4AF37] transition-all"
                        title="View Lyric Snippet"
                      >
                        <AlignLeft className="w-4 h-4" />
                      </button>
                    )}

                    <span className="font-mono text-xs text-[#A3A3A3] w-12 text-right">
                      {track.duration}
                    </span>

                    <button
                      onClick={() => onPlayTrack(track)}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isCurrentPlaying
                          ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                          : 'bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                      }`}
                      title={isCurrentPlaying ? 'Pause Track' : 'Play Track'}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lyric Snippet Modal */}
      {selectedLyricsTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl glass-panel border border-[#D4AF37] max-w-md w-full space-y-4 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase">Lyric Excerpt</span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#FAFAFA]">
                  {selectedLyricsTrack.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLyricsTrack(null)}
                className="text-[#A3A3A3] hover:text-[#FAFAFA] text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 italic text-sm text-[#FAFAFA]/90 font-serif-luxury leading-relaxed">
              "{selectedLyricsTrack.lyricsSnippet}"
            </div>

            <button
              onClick={() => {
                onPlayTrack(selectedLyricsTrack);
                setSelectedLyricsTrack(null);
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-black font-bold text-xs uppercase tracking-widest"
            >
              Play Full Audio Track
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
