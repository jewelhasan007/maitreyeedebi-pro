import React, { useState, useEffect } from 'react';
import { Play, Sparkles, ArrowDownRight, Disc, Award, Globe, Music } from 'lucide-react';
import { ARTIST_INFO, FEATURED_TRACKS } from '../data/portfolioData';
import { SongTrack } from '../types';

interface HeroSectionProps {
  onPlayTrack: (track: SongTrack) => void;
  currentTrack: SongTrack | null;
  isPlaying: boolean;
}

// Images served from the /public folder.
// Drop files into e.g. /public/hero/portrait-1.jpg, portrait-2.jpg, portrait-3.jpg
// and reference them here with a root-relative path (no "public/" prefix).
// Add or remove entries freely — the rotation adapts to however many you list.
const HERO_PORTRAITS: string[] = [
  '/images/hero/banner1.jpg',
  '/images/hero/banner2.png',
  '/images/hero/banner3.png',
  '/images/hero/banner4.jpg'
];

const HERO_ROTATE_INTERVAL_MS = 5000;

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPlayTrack,
  currentTrack,
  isPlaying,
}) => {
  const [portraitIndex, setPortraitIndex] = useState(0);

  useEffect(() => {
    if (HERO_PORTRAITS.length <= 1) return;
    const id = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % HERO_PORTRAITS.length);
    }, HERO_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const currentPortrait = HERO_PORTRAITS[portraitIndex] ?? ARTIST_INFO.heroPortrait;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const topTrack = FEATURED_TRACKS[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Lighting Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Story CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Crown Eyebrow Tag */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#121212]/60 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
                Official Artist & Singer Portfolio
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAFAFA] leading-[1.05]">
                Voice. <br />
                <span className="gold-gradient-text italic font-serif-luxury font-normal">
                  Art.
                </span>{' '}
                Performance.
              </h1>
              <p className="font-serif-luxury text-2xl sm:text-3xl text-[#D4AF37]/90 font-light italic">
                Maitreyee Debi
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#A3A3A3] font-sans-clean max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {ARTIST_INFO.shortBio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('music')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B76E79] text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:opacity-95 shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Explore Discography</span>
                <ArrowDownRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => scrollTo('performances')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/40 bg-[#121212]/50 hover:bg-[#D4AF37]/10 text-[#FAFAFA] font-medium text-xs sm:text-sm tracking-widest uppercase hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span>Watch Concerts</span>
              </button>
            </div>

            {/* Quick Track Preview Bar */}
            <div className="pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl glass-panel flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative group cursor-pointer" onClick={() => onPlayTrack(topTrack)}>
                    <img
                      src={topTrack.coverUrl}
                      alt={topTrack.title}
                      className="w-12 h-12 rounded-lg object-cover border border-[#D4AF37]/30"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                      Featured Sound
                    </span>
                    <h2 className="text-sm font-semibold text-[#FAFAFA] truncate max-w-[200px] sm:max-w-[260px]">
                      {topTrack.title}
                    </h2>
                    <p className="text-[11px] text-[#A3A3A3]">{topTrack.album}</p>
                  </div>
                </div>

                <button
                  onClick={() => onPlayTrack(topTrack)}
                  className="p-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-black transition-all text-[#D4AF37]"
                  title="Listen Preview"
                >
                  <Music className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer Decorative Gold Frame */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-2 bg-gradient-to-b from-[#D4AF37]/40 via-[#B76E79]/20 to-transparent shadow-2xl gold-glow">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative group">
                {HERO_PORTRAITS.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${ARTIST_INFO.name} portrait ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-all duration-1000 ease-in-out ${
                      idx === portraitIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />

                {/* Rotation Dots Indicator */}
                {HERO_PORTRAITS.length > 1 && (
                  <div className="absolute top-4 right-4 flex space-x-1.5 z-10">
                    {HERO_PORTRAITS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPortraitIndex(idx)}
                        aria-label={`Show portrait ${idx + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === portraitIndex ? 'bg-[#D4AF37] w-4' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Floating Signature Tag on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[#D4AF37]/30 space-y-1">
                  <span className="block font-signature text-3xl text-[#D4AF37]">
                    Maitreyee Debi
                  </span>
                  <p className="text-[11px] text-[#FAFAFA]/80 font-sans-clean tracking-wider uppercase">
                    Classical • Rabindra Sangeet • World Symphonic
                  </p>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl glass-panel border border-[#D4AF37] flex items-center space-x-2 shadow-xl">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#FAFAFA]">
                  World Tour 2026
                </span>
              </div>

              {/* Bottom Left Floating Badge */}
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass-panel border border-[#B76E79]/40 flex items-center space-x-3 shadow-xl">
                <Award className="w-5 h-5 text-[#B76E79]" />
                <div>
                  <span className="block text-[10px] text-[#A3A3A3] uppercase tracking-wider">
                    Honors
                  </span>
                  <span className="text-xs font-bold text-[#FAFAFA]">
                    18 Global Awards
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Hero Statistics Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 pt-8 border-t border-white/10">
          {ARTIST_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl glass-panel text-center hover:border-[#D4AF37]/50 transition-all duration-300 group"
            >
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold gold-gradient-text mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-sans-clean tracking-widest text-[#A3A3A3] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};