import React from 'react';
import { UPCOMING_EVENTS } from '../data/portfolioData';
import { Calendar, MapPin, Clock, Ticket, Sparkles, ArrowRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Concert Schedule & World Tour
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Upcoming Live <br />
            <span className="gold-gradient-text italic font-normal">
              Concerts & Galas
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Reserve passes for upcoming symphony dates, world tour stops, and cultural recitals.
          </p>
        </div>

        {/* Schedule List */}
        <div className="space-y-3.5 max-w-5xl mx-auto">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="p-4 sm:p-5 rounded-2xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:-translate-y-0.5 shadow-xl"
            >
              {/* Left: Date Badge & Event Details */}
              <div className="flex items-start md:items-center space-x-4 sm:space-x-5">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center shrink-0 w-20">
                  <span className="block font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="block font-serif-luxury text-xl font-bold text-[#FAFAFA]">
                    {event.date.split(' ')[1]?.replace(',', '')}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[9px] font-mono text-[#D4AF37] uppercase">
                      {event.ticketStatus}
                    </span>
                    <span className="text-[11px] text-[#A3A3A3] font-mono flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{event.time}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-[#A3A3A3] font-sans-clean flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>
                      {event.venue} — {event.city}, {event.country}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: Booking CTA */}
              <div className="flex items-center space-x-3 shrink-0">
                <button
                  onClick={scrollToContact}
                  className="w-full md:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-black font-bold text-[11px] uppercase tracking-widest hover:opacity-95 shadow-md shadow-[#D4AF37]/20 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Ticket className="w-3.5 h-3.5 text-black" />
                  <span>Reserve Passes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
