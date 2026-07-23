import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/portfolioData';
import { BookingFormData } from '../types';
import { Send, CheckCircle2, Mail, Phone, MapPin, Sparkles, Calendar, Building, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Concert Performance',
    eventDate: '',
    budgetRange: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#121212]/80">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              Management & Inquiries
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Book a Performance <br />
            <span className="gold-gradient-text italic font-normal">
              or Collaboration
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] font-sans-clean font-light leading-relaxed">
            Direct booking inquiries for symphony halls, private galas, film recordings, and press interviews.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Management Agency Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#D4AF37]/30 space-y-5 shadow-xl">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                  Representation
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#FAFAFA] mt-0.5">
                  {ARTIST_INFO.agencyContact.management}
                </h3>
              </div>

              <div className="space-y-3.5 text-xs font-sans-clean">
                <div className="flex items-start space-x-3 text-[#A3A3A3]">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-[#FAFAFA]">
                      Booking Email
                    </span>
                    <a
                      href={`mailto:${ARTIST_INFO.agencyContact.bookingEmail}`}
                      className="text-[#FAFAFA] hover:text-[#D4AF37] transition-colors"
                    >
                      {ARTIST_INFO.agencyContact.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-[#A3A3A3]">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-[#FAFAFA]">
                      Direct Agency Desk
                    </span>
                    <p className="text-[#FAFAFA]">
                      {ARTIST_INFO.agencyContact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-[#A3A3A3]">
                  <Globe className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-[#FAFAFA]">
                      Global Offices
                    </span>
                    <p className="text-[#FAFAFA]">
                      {ARTIST_INFO.agencyContact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] text-[#A3A3A3] italic">
                * For press credentials, broadcast licensing, and orchestral scores, please indicate your outlet or production company in the inquiry.
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 text-xs text-[#FAFAFA]/80 space-y-1.5">
              <span className="font-mono text-[10px] text-[#D4AF37] uppercase">
                Response SLA
              </span>
              <p className="text-[11px] leading-relaxed">
                The artist management team typically responds to verified concert and booking requests within 24–48 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Glassmorphic Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-xl relative gold-glow">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-3xl font-bold text-[#FAFAFA]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                    Thank you. Your booking request has been routed to Aura Global Artist Management. Our representative will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xs font-mono uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lady Katherine Vance"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. director@symphonyhall.org"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Organization / Venue
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Royal Festival Hall"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="Concert Performance">Concert Performance</option>
                        <option value="Private/Corporate Gala">Private/Corporate Gala</option>
                        <option value="Playback Recording">Playback Recording</option>
                        <option value="Media/Interview">Media / Press Interview</option>
                        <option value="Cultural Sponsorship">Cultural Sponsorship</option>
                      </select>
                    </div>

                    {/* Preferred Event Date */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                      Event Details & Request *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share venue capacity, location, proposed repertoire, and event scope..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B76E79] text-black font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Send Confidential Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
