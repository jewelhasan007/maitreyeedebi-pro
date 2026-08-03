import React, { useState, useEffect, useRef } from 'react';
import { PERFORMANCES } from '../data/portfolioData';
import { Performance } from '../types';
import { Play, MapPin, Calendar, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

const AUTO_ADVANCE_MS = 5000;

export const PerformanceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState<Performance | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const categories = ['All', 'Symphony', 'Concert', 'Festival', 'Television'];

  const filtered = PERFORMANCES.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  // 1 card on mobile, 2 on md (tablet/laptop), 3 on lg+ (large desktops)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Reset to the first slide whenever the category filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const maxIndex = Math.max(0, filtered.length - visibleCount);

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-advance carousel
  useEffect(() => {
    if (filtered.length <= visibleCount || isPaused) return;
    const interval = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length, visibleCount, isPaused, currentIndex]);

  const slidePercent = 100 / visibleCount;

  return (
    <section id="performances" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-3">

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Stages <br />
            <span className="gold-gradient-text italic font-normal">
              Around the World
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Explore concerts, TV appearances, and live performances worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#121212] text-[#A3A3A3] hover:text-[#FAFAFA] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Performances Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slidePercent}%)` }}
            >
              {filtered.map((perf) => (
                <div key={perf.id} className="w-full md:w-1/2 xl:w-1/3 shrink-0 px-3">
                  <div className="group rounded-2xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={perf.thumbnailUrl}
                        alt={perf.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideoModal(perf)}
                        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                        aria-label={`Watch ${perf.title}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-xl shadow-[#D4AF37]/40">
                          <Play className="w-5 h-5 fill-black ml-0.5" />
                        </div>
                      </button>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono text-[#D4AF37] uppercase">
                        {perf.category}
                      </div>

                      {/* Attendance Tag */}
                      {perf.attendance && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#FAFAFA] flex items-center space-x-1">
                          <Users className="w-3 h-3 text-[#D4AF37]" />
                          <span>{perf.attendance}</span>
                        </div>
                      )}
                    </div>

                    {/* Concert Info */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center space-x-3 text-[11px] font-mono text-[#D4AF37]">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{perf.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#B76E79]" />
                          <span>{perf.location}</span>
                        </span>
                      </div>

                      <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                        {perf.title}
                      </h3>

                      <p className="text-xs text-[#A3A3A3] font-sans-clean leading-relaxed font-light">
                        {perf.description}
                      </p>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#FAFAFA]">
                          {perf.venue}
                        </span>
                        <button
                          onClick={() => setActiveVideoModal(perf)}
                          className="text-xs font-mono uppercase text-[#D4AF37] hover:underline flex items-center space-x-1"
                        >
                          <span>Watch Recording</span>
                          <Play className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next Arrows */}
          {filtered.length > visibleCount && (
            <>
              <button
                onClick={goPrev}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl"
                aria-label="Previous performances"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl"
                aria-label="Next performances"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          {filtered.length > visibleCount && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full rounded-3xl glass-panel border border-[#D4AF37] overflow-hidden space-y-4">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase">Concert Recording</span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#FAFAFA]">
                  {activeVideoModal.title} — {activeVideoModal.venue}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-[#FAFAFA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black relative flex items-center justify-center">
              <iframe
                src={`${activeVideoModal.videoUrl}?autoplay=1`}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 space-y-2">
              <p className="text-sm text-[#FAFAFA]/90 leading-relaxed font-sans-clean">
                {activeVideoModal.description}
              </p>
              <div className="flex items-center space-x-4 text-xs font-mono text-[#D4AF37]">
                <span>Venue: {activeVideoModal.venue}</span>
                <span>Date: {activeVideoModal.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};