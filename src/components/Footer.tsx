import React from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { ChevronUp, ExternalLink } from 'lucide-react';

// Brand SVG Logos
const SpotifyLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.31c.64-.78 1.08-1.85.96-2.93-.93.04-2.07.62-2.74 1.4-.6.7-.1.12-1.88.98-2.92.1 1.07 1.23 2.05 2.8 1.45z"/>
  </svg>
);

const YoutubeLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WikipediaLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.09 13.112l-2.42-6.388h1.49l1.62 4.67 1.57-4.67h1.43l-2.39 6.388v4.488h-1.3V13.112zM3.46 6.724h1.74l2.84 8.21 2.38-6.92h-1.38V6.724h4.15v1.29h-1.35l1.69 4.96 1.71-4.96h-1.32V6.724h3.94v1.29h-1.12l-3.32 9.53h-1.57l-2.18-6.26-2.19 6.26H7.92L4.62 8.014H3.46V6.724z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const socialPlatforms = [
    {
      name: 'Spotify',
      url: ARTIST_INFO.socialLinks.spotify,
      icon: <SpotifyLogo />,
      color: 'hover:border-[#1DB954] hover:text-[#1DB954] hover:shadow-[0_0_12px_rgba(29,185,84,0.3)]',
    },
    {
      name: 'Apple Music',
      url: ARTIST_INFO.socialLinks.appleMusic,
      icon: <AppleMusicLogo />,
      color: 'hover:border-[#FA243C] hover:text-[#FA243C] hover:shadow-[0_0_12px_rgba(250,36,60,0.3)]',
    },
    {
      name: 'YouTube',
      url: ARTIST_INFO.socialLinks.youtube,
      icon: <YoutubeLogo />,
      color: 'hover:border-[#FF0000] hover:text-[#FF0000] hover:shadow-[0_0_12px_rgba(255,0,0,0.3)]',
    },
    {
      name: 'Instagram',
      url: ARTIST_INFO.socialLinks.instagram,
      icon: <InstagramLogo />,
      color: 'hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[0_0_12px_rgba(225,48,108,0.3)]',
    },
    {
      name: 'Facebook',
      url: ARTIST_INFO.socialLinks.facebook,
      icon: <FacebookLogo />,
      color: 'hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.3)]',
    },
    {
      name: 'Wikipedia',
      url: ARTIST_INFO.socialLinks.wikipedia,
      icon: <WikipediaLogo />,
      color: 'hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.3)]',
    },
  ];

  return (
    <footer className="bg-[#050505] text-[#FAFAFA] pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#D4AF37] blur-[180px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Signature Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-luxury text-3xl font-bold tracking-wider gold-gradient-text">
              MAITREYEE DEBI
            </span>
            <p className="text-xs text-[#A3A3A3] font-sans-clean leading-relaxed font-light max-w-sm">
              {ARTIST_INFO.title}. Connecting classical vocal traditions with grand symphonic architectures across global concert stages.
            </p>
            <div className="pt-2">
              <span className="font-signature text-4xl text-[#D4AF37]">
                Maitreyee Debi
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              {['about', 'music', 'performances', 'awards', 'media', 'gallery', 'events', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider font-mono text-[11px]"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Platforms & Management */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest flex items-center justify-between">
              <span>Official Platforms</span>
              <span className="text-[10px] text-[#A3A3A3] normal-case tracking-normal">Connect & Stream</span>
            </h4>
            
            {/* Social Links with Logos */}
            <div className="grid grid-cols-2 gap-2.5">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2.5 px-3.5 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-xs font-sans-clean text-[#D4D4D4] transition-all duration-300 group ${platform.color}`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {platform.icon}
                  </span>
                  <span className="font-medium tracking-wide text-[12px] truncate">{platform.name}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="pt-3 text-[11px] text-[#A3A3A3] font-mono border-t border-white/5">
              Managed globally by <span className="text-[#FAFAFA] font-semibold">{ARTIST_INFO.agencyContact.management}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A3A3A3] gap-4">
          <p>© {new Date().getFullYear()} Maitreyee Debi. All Rights Reserved. Official Artist Website.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all font-mono text-[11px] uppercase tracking-wider"
          >
            <span>Back To Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

