import React, { useState, useEffect } from 'react';
import { Music, Sun, Moon, Menu, X, Disc3, Volume2 } from 'lucide-react';
import { SongTrack } from '../types';

interface NavbarProps {
  activeSection: string;
  setActiveSection?: (section: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentTrack: SongTrack | null;
  isPlaying: boolean;
  togglePlay: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'music', label: 'Music' },
  { id: 'performances', label: 'Performances' },
  { id: 'awards', label: 'Awards' },
  { id: 'media', label: 'Media' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  isDarkMode,
  toggleTheme,
  currentTrack,
  isPlaying,
  togglePlay,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (setActiveSection) {
      setActiveSection(id);
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkMode
            ? 'py-3 bg-[#090909]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/30'
            : 'py-3 bg-[#F8F6F2]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo with Lucrative Emblem */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-4 sm:gap-5 text-left focus:outline-none shrink-0"
        >
          {/* Lucrative Gold Emblem Badge */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#2A2415] via-[#121212] to-[#0A0A0A] border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_22px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center justify-center overflow-hidden shrink-0">
            {/* Subtle inner gold sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.35),transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Ornate Gold Monogram Crest SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 text-[#D4AF37] group-hover:scale-105 transition-transform duration-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2A1" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#AA7C11" />
                  <stop offset="100%" stopColor="#F1D382" />
                </linearGradient>
                <filter id="goldGlowNav" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Decorative Geometric Crest Frame */}
              <rect x="16" y="16" width="68" height="68" rx="16" transform="rotate(45 50 50)" stroke="url(#goldGradNav)" strokeWidth="1.8" opacity="0.6" />
              <circle cx="50" cy="50" r="38" stroke="url(#goldGradNav)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
              <circle cx="50" cy="50" r="32" stroke="url(#goldGradNav)" strokeWidth="2" filter="url(#goldGlowNav)" />

              {/* Stylized MD Monogram */}
              <path
                d="M32 63V37L44 54L50 46L56 54L68 37V63"
                stroke="url(#goldGradNav)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Crown / Starburst Top Ornament */}
              <path
                d="M50 21L52.5 27L58.5 29.5L52.5 32L50 38L47.5 32L41.5 29.5L47.5 27Z"
                fill="url(#goldGradNav)"
              />
              <circle cx="50" cy="68" r="2.2" fill="url(#goldGradNav)" />
            </svg>
          </div>

          <div className="py-0.5">
            <span className="block font-serif-luxury text-lg sm:text-xl font-bold tracking-[0.12em] gold-gradient-text leading-tight">
              MAITREYEE DEBI
            </span>
            <span className={`block font-sans-clean text-[9px] sm:text-[10px] tracking-[0.28em] uppercase transition-colors mt-0.5 ${
              isDarkMode ? 'text-[#A3A3A3] group-hover:text-[#D4AF37]' : 'text-[#666666] group-hover:text-[#9A7B1C]'
            }`}>
              Vocalist & Performer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 mx-4 xl:mx-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative py-1.5 px-2.5 rounded-lg hover:bg-white/5 ${
                  isActive
                    ? 'text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : isDarkMode
                      ? 'text-[#A3A3A3] hover:text-[#D4AF37]'
                      : 'text-[#555555] hover:text-[#B78A12]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#F1D382] to-[#B7950B] shadow-[0_0_8px_#D4AF37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Audio Quick Bar Button */}
          {currentTrack && (
            <button
              onClick={togglePlay}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80 hover:border-[#D4AF37] transition-all text-xs text-[#FAFAFA]"
              title={isPlaying ? 'Pause Audio' : 'Play Audio'}
            >
              <Disc3
                className={`w-4 h-4 text-[#D4AF37] ${
                  isPlaying ? 'animate-spin-slow' : ''
                }`}
              />
              <span className="hidden sm:inline font-mono text-[11px] truncate max-w-[120px]">
                {currentTrack.title}
              </span>
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-[#A3A3A3] hover:text-[#D4AF37] transition-all"
            aria-label="Toggle Theme Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Booking CTA Button (Desktop) */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-black font-semibold text-xs tracking-wider uppercase hover:opacity-95 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
          >
            Book Concert
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FAFAFA] hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-[#D4AF37]/20 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-sm font-medium tracking-wider uppercase py-2 border-b border-white/5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#D4AF37] font-bold pl-2 border-l-2 border-[#D4AF37]'
                    : 'text-[#A3A3A3] hover:text-[#FAFAFA]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 text-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-black font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#D4AF37]/20"
              >
                Inquire & Book Performance
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
