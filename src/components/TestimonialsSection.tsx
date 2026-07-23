import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-20 relative bg-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Praise & Reviews
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Words of <br />
            <span className="gold-gradient-text italic font-normal">
              Acclaim
            </span>
          </h2>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-3xl mx-auto relative">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-xl space-y-6 relative gold-glow">
            <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-6 left-6" />

            <div className="pt-4">
              <p className="text-base sm:text-xl font-serif-luxury italic text-[#FAFAFA] leading-relaxed text-center">
                "{activeTestimonial.quote}"
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 pt-4 border-t border-white/10">
              {activeTestimonial.avatarUrl && (
                <img
                  src={activeTestimonial.avatarUrl}
                  alt={activeTestimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="text-center">
                <h3 className="font-serif-luxury text-lg font-bold text-[#FAFAFA]">
                  {activeTestimonial.author}
                </h3>
                <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                  {activeTestimonial.role} — {activeTestimonial.organization}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#FAFAFA] hover:bg-[#D4AF37]/20 transition-all"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#FAFAFA] hover:bg-[#D4AF37]/20 transition-all"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
