import React, { useState } from 'react';
import { PRESS_ARTICLES } from '../data/portfolioData';
import { PressArticle } from '../types';
import { Newspaper, Quote, ExternalLink, Sparkles, Clock, X } from 'lucide-react';

export const PressSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);

  return (
    <section id="media" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Newspaper className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Press & Critical Acclaim
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Editorial Features <br />
            <span className="gold-gradient-text italic font-normal">
              & Critical Praise
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            As featured in Vogue, Rolling Stone, and BBC Cultural Times.
          </p>
        </div>

        {/* Magazine Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRESS_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-5 rounded-2xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Outlet Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-serif-luxury text-lg sm:text-xl font-black tracking-widest text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                    {article.logoText}
                  </span>
                  <span className="text-[10px] font-mono text-[#A3A3A3] uppercase">
                    {article.date}
                  </span>
                </div>

                {/* Quote Box */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-[#D4AF37]/20 absolute -top-1.5 -left-1" />
                  <p className="text-xs sm:text-sm font-serif-luxury italic text-[#FAFAFA]/90 leading-relaxed pl-3.5">
                    "{article.quote}"
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-sans-clean text-xs sm:text-sm font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h3>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-[11px] text-[#A3A3A3]">
                <span className="flex items-center space-x-1 font-mono">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>{article.readTime}</span>
                </span>
                <span className="text-[#D4AF37] font-semibold group-hover:underline flex items-center space-x-1">
                  <span>Read Feature</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="p-8 rounded-3xl glass-panel border border-[#D4AF37] max-w-2xl w-full space-y-6 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-serif-luxury text-2xl font-bold text-[#D4AF37]">
                  {selectedArticle.logoText}
                </span>
                <p className="text-[10px] font-mono text-[#A3A3A3] uppercase">
                  Published {selectedArticle.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-[#FAFAFA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#FAFAFA]">
              {selectedArticle.title}
            </h3>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3">
              <Quote className="w-8 h-8 text-[#D4AF37]" />
              <p className="text-base font-serif-luxury italic text-[#FAFAFA] leading-relaxed">
                "{selectedArticle.quote}"
              </p>
            </div>

            <p className="text-xs text-[#A3A3A3] font-sans-clean leading-relaxed">
              Full editorial review archived from {selectedArticle.outlet}. In-depth coverage of Maitreyee Debi's world music recordings and orchestral concerts.
            </p>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full py-3 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest"
            >
              Close Feature
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
