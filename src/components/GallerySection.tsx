import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { Camera, Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Performances', 'Studio', 'Behind The Scenes', 'Red Carpet'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Visual Archives
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Visual Moments <br />
            <span className="gold-gradient-text italic font-normal">
              & Behind the Scenes
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            High-definition moments from international stages, recording studios, and editorial sessions.
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

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-xl aspect-square"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-serif-luxury text-lg font-bold text-[#FAFAFA]">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#A3A3A3] mt-0.5 line-clamp-2 font-light">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center space-x-1.5 text-xs text-[#D4AF37]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="font-mono uppercase tracking-wider text-[10px]">Enlarge Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] z-10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 max-h-[75vh] flex justify-center bg-black">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/10 text-center space-y-1">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                {activeLightboxItem.category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#FAFAFA]">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs text-[#A3A3A3] font-sans-clean font-light max-w-xl mx-auto">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
