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
import { useMediaPlayer } from './hooks/useMediaPlayer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track Playback Handlers (defined before useMediaPlayer call below is
  // fine — the onTrackEnd callback only actually *runs* later, once a
  // track finishes, by which point handleNextTrack is fully assigned).
  const handleNextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = FEATURED_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextTrack = FEATURED_TRACKS[(currentIndex + 1) % FEATURED_TRACKS.length];
    play(nextTrack);
  };

  const handlePrevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = FEATURED_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevTrack = FEATURED_TRACKS[(currentIndex - 1 + FEATURED_TRACKS.length) % FEATURED_TRACKS.length];
    play(prevTrack);
  };

  // Single source of truth for playback — replaces the old
  // currentTrack/isPlaying useState pair. Routes YouTube links through the
  // hidden YouTube IFrame player and everything else through <audio>.
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    loop,
    setLoop,
    togglePlay,
    play,
    pause,
    resume,
    seek,
    setVolume,
  } = useMediaPlayer(() => handleNextTrack());

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
    const sectionIds = ['hero', 'about', 'music', 'performances', 'awards', 'media', 'gallery', 'events', 'publications', 'contact'];

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

  // Play the first track by default once (mirrors the old
  // `useState<SongTrack | null>(FEATURED_TRACKS[0])` initial value),
  // but paused — call play() once on mount if you want it queued up.
  useEffect(() => {
    // Intentionally left as a comment: uncomment if you want a track
    // pre-loaded (but not auto-playing) on first load.
    // play(FEATURED_TRACKS[0]);
  }, []);

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
        togglePlay={() => (isPlaying ? pause() : resume())}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection
          onPlayTrack={togglePlay}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
        <AboutSection />
        <MusicSection
          onPlayTrack={togglePlay}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
        <PerformanceSection />
        <AwardsSection />
        <PressSection />
        <GallerySection />
        <EventsSection />
         <PerformanceSection></PerformanceSection>
        <TestimonialsSection />

        <ContactSection />
      </main>

      {/* Persistent Audio Mini Player */}
      <AudioPlayerDrawer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        loop={loop}
        onSeek={seek}
        onVolumeChange={setVolume}
        onToggleLoop={() => setLoop(!loop)}
        onTogglePlay={() => (isPlaying ? pause() : resume())}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onClose={() => pause()}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}