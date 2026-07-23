import React from 'react';
import { AWARDS } from '../data/portfolioData';
import { Award as AwardIcon, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Honors & Recognition
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Prestigious Citations <br />
            <span className="gold-gradient-text italic font-normal">
              & Global Accolades
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Recognized by ministries of culture, world music guilds, and international councils.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 relative group gold-glow hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <AwardIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                      {award.category}
                    </span>
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                      {award.title}
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  {award.year}
                </span>
              </div>

              <p className="text-xs text-[#A3A3A3] font-sans-clean leading-relaxed font-light mb-4">
                {award.description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#FAFAFA]/80 font-medium text-[11px]">
                  {award.organization}
                </span>
                {award.badge && (
                  <span className="flex items-center space-x-1 text-[#D4AF37] font-mono text-[10px] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{award.badge}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
