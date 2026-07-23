import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { Sparkles, Quote, Calendar, Award, Music, Compass } from 'lucide-react';

const BIO_TABS = [
  {
    id: 'heritage',
    label: 'Origins & Heritage',
    icon: Music,
    content: `Initiated into Hindustani classical vocal music at age four under legendary gurus, Maitreyee developed an extraordinary mastery over Khyal, Semi-Classical Thumri, Rabindra Sangeet, and Sufi devotional traditions. Her early years were spent absorbing the subtle nuances of Indian microtonal ragas, cultivating pitch precision and vocal agility that defined her signature acoustic purity.`,
  },
  {
    id: 'philosophy',
    label: 'Artistic Philosophy',
    icon: Compass,
    content: `For Maitreyee, music is an ethereal sanctuary where the human voice serves as the ultimate emotional bridge. She rejects artificial boundary lines between classical traditions and modern soundscapes, viewing every raga as an living emotional universe waiting to be translated into universal human experience.`,
  },
  {
    id: 'global',
    label: 'Orchestral Bridges',
    icon: Compass,
    content: `A pioneer in East-West musical synthesis, Maitreyee has collaborated with world-renowned symphony orchestras including the London Philharmonic Strings, Prague Chamber Ensemble, and the BBC Concert Orchestra. Her recordings at Abbey Road Studios have set new artistic standards for world music productions.`,
  },
  {
    id: 'legacy',
    label: 'Cultural Legacy',
    icon: Award,
    content: `Beyond live concert stages, Maitreyee champions music education and cultural preservation through the Maitreyee Arts Foundation, providing scholarships to young traditional vocal aspirants and preserving rare archival recordings of classical Indian compositions.`,
  },
];

const TIMELINE_MILESTONES = [
  { year: '2009', event: 'Debut classical solo performance at Dover Lane Music Conference.' },
  { year: '2015', event: 'First international European tour across London, Paris, and Geneva.' },
  { year: '2021', event: 'Released critically acclaimed album "Rivers of the East".' },
  { year: '2023', event: 'Headline performance at Sydney Opera House and BBC Proms.' },
  { year: '2024', event: 'Sold-out concert at Royal Albert Hall & conferred Global Icon Honor.' },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  const currentTabObj = BIO_TABS.find((t) => t.id === activeTab) || BIO_TABS[0];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              The Story & Persona
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            A Life Dedicated to <br />
            <span className="gold-gradient-text italic font-normal">
              Vocal Excellence & Art
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Connecting centuries of musical heritage with the grandeur of world symphonies.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Image & Signature Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src={ARTIST_INFO.concertStage}
                alt="Maitreyee Debi Performing Live"
                className="w-full aspect-[4/5] object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="p-3.5 rounded-2xl glass-panel border border-[#D4AF37]/30">
                  <span className="block text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-0.5">
                    Live at Royal Albert Hall
                  </span>
                  <p className="text-xs text-[#FAFAFA]/90 italic font-serif-luxury">
                    "Commanding 5,000 quiet hearts in the hall with a single sustained note."
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="p-5 rounded-2xl glass-panel border border-[#D4AF37]/20 relative">
              <Quote className="w-6 h-6 text-[#D4AF37]/20 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-[#FAFAFA] font-serif-luxury italic leading-relaxed mb-3">
                "{ARTIST_INFO.quote}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <span className="block font-signature text-2xl text-[#D4AF37]">
                    Maitreyee Debi
                  </span>
                  <span className="text-[10px] text-[#A3A3A3] tracking-widest uppercase">
                    Singer & Composer
                  </span>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-xs text-[#D4AF37]">15+ Years</span>
                  <span className="text-[10px] text-[#A3A3A3] uppercase">Cultural Icon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Narrative & Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Biography Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
              {BIO_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                        : 'bg-[#121212] text-[#A3A3A3] hover:text-[#FAFAFA] border border-white/5 hover:border-[#D4AF37]/30'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Narrative Content */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#D4AF37]/20 space-y-3 animate-in fade-in duration-300">
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FAFAFA] gold-gradient-text">
                {currentTabObj.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAFAFA]/90 font-sans-clean leading-relaxed font-light">
                {currentTabObj.content}
              </p>
              <p className="text-xs text-[#A3A3A3] font-sans-clean leading-relaxed font-light">
                {ARTIST_INFO.fullBio}
              </p>
            </div>

            {/* Career Milestones Accordion / List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Career Milestones & Journey</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIMELINE_MILESTONES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl glass-panel border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 flex items-start space-x-2.5"
                  >
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                      {item.year}
                    </span>
                    <p className="text-xs text-[#FAFAFA]/80 leading-relaxed font-sans-clean">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
