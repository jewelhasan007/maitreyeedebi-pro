import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { FloatingMusicNotes } from './components/FloatingMusicNotes';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { PerformanceSection } from './components/PerformanceSection';
import { AwardsSection } from './components/AwardsSection';
import { PressSection } from './components/PressSection';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AudioPlayerDrawer } from './components/AudioPlayerDrawer';
import { Footer } from './components/Footer';
import { FEATURED_TRACKS } from './data/portfolioData';
import { SongTrack } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTrack, setCurrentTrack] = useState<SongTrack | null>(FEATURED_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      return next;
    });
  };

  // Section Observer for Active Nav Highlight
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'music', 'performances', 'awards', 'media', 'gallery', 'events', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track Playback Handlers
  const handlePlayTrack = (track: SongTrack) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = FEATURED_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextTrack = FEATURED_TRACKS[(currentIndex + 1) % FEATURED_TRACKS.length];
    setCurrentTrack(nextTrack);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = FEATURED_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevTrack = FEATURED_TRACKS[(currentIndex - 1 + FEATURED_TRACKS.length) % FEATURED_TRACKS.length];
    setCurrentTrack(prevTrack);
    setIsPlaying(true);
  };

  return (
    <div className={`min-h-screen font-sans-clean transition-colors duration-500 ${isDarkMode ? 'dark bg-[#090909] text-[#FAFAFA]' : 'light bg-[#F8F6F2] text-[#121212]'}`}>
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Floating Ambient Music Notes Particle Effect */}
      <FloatingMusicNotes />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        togglePlay={() => setIsPlaying(!isPlaying)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection
          onPlayTrack={handlePlayTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
        <AboutSection />
        <MusicSection
          onPlayTrack={handlePlayTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
        <PerformanceSection />
        <AwardsSection />
        <PressSection />
        <GallerySection />
        <EventsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Persistent Audio Mini Player */}
      <AudioPlayerDrawer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onClose={() => setIsPlaying(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

