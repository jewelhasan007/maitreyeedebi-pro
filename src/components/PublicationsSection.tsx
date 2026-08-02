import React, { useState } from 'react';
import { BOOK_PUBLICATIONS } from '../data/portfolioData';
import { BookPublication } from '../types';
import { BookOpen, Star, Award as AwardIcon, ShoppingCart, ExternalLink, Search, X, Check, Globe, FileText, ChevronRight, Bookmark } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBookForExcerpt, setSelectedBookForExcerpt] = useState<BookPublication | null>(null);
  const [activeBuyDropdown, setActiveBuyDropdown] = useState<string | null>(null);

  const categories = ['All', 'Musicology', 'Poetry & Verses', 'Cultural Philosophy', 'Pedagogy', 'Translations'];

  const filteredBooks = BOOK_PUBLICATIONS.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.subtitle && book.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBook = BOOK_PUBLICATIONS.find((b) => b.isFeatured) || BOOK_PUBLICATIONS[0];

  return (
    <section id="publications" className="py-20 sm:py-24 relative bg-transparent overflow-hidden">
      {/* Background Decorative Ambient Spotlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA]">
            Book Publications & <span className="gold-gradient-text">Scholarly Writings</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0A6C6] font-sans-clean font-light leading-relaxed">
            Delve into Maitreyee Debi's published repertoire—from groundbreaking musicology treatises and original poetry to masterclasses in Khyal technique and translations of Bengalee mystics.
          </p>
        </div>

        {/* Featured Book Spotlight Banner */}
        {featuredBook && (
          <div className="mb-16 relative rounded-3xl bg-gradient-to-br from-[#12162E]/90 via-[#0D1022]/95 to-[#0A0D1B] border border-[#D4AF37]/35 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-6 sm:p-10 lg:p-12">
            {/* Top Gold Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider">
              <AwardIcon className="w-3.5 h-3.5" />
              <span>Featured Best-Seller</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: 3D Book Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group cursor-pointer" onClick={() => setSelectedBookForExcerpt(featuredBook)}>
                  {/* Book 3D Shadow Backdrop */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/20 via-[#B76E79]/20 to-transparent rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Book Cover Frame with 3D Spine effect */}
                  <div className="relative w-56 sm:w-64 h-80 sm:h-96 rounded-r-xl rounded-l-sm bg-[#12162E] shadow-[20px_15px_30px_rgba(0,0,0,0.7)] border-y border-r border-[#D4AF37]/40 overflow-hidden transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500 flex flex-col justify-between p-1">
                    
                    {/* Spine Highlight Effect */}
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/80 via-white/20 to-black/40 z-20 border-r border-white/10" />
                    
                    {/* Cover Image Background */}
                    <img
                      src={featuredBook.coverUrl}
                      alt={featuredBook.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-75 transition-opacity"
                    />

                    {/* Book Cover Layout Details */}
                    <div className="relative z-10 p-5 pl-7 flex flex-col justify-between h-full bg-gradient-to-b from-black/70 via-black/40 to-black/90">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest mb-2">
                          {featuredBook.category}
                        </span>
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAFAFA] leading-tight">
                          {featuredBook.title}
                        </h3>
                        {featuredBook.subtitle && (
                          <p className="text-xs text-[#D4AF37] font-sans-clean font-medium mt-1 line-clamp-2">
                            {featuredBook.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="border-t border-white/15 pt-3">
                        <p className="font-serif-luxury text-sm text-[#FAFAFA] font-semibold">
                          By {featuredBook.author}
                        </p>
                        <p className="text-[11px] text-[#A0A6C6] font-mono mt-0.5">
                          {featuredBook.publisher} • {featuredBook.publishYear}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Book Details & Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
                      {featuredBook.publisher} ({featuredBook.publishYear})
                    </span>
                    <span className="text-[#A0A6C6]">•</span>
                    <span className="font-mono text-xs text-[#A0A6C6]">{featuredBook.pages} Pages</span>
                    <span className="text-[#A0A6C6]">•</span>
                    <div className="flex items-center text-amber-400 text-xs font-semibold space-x-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{featuredBook.rating} ({featuredBook.reviewsCount} Reviews)</span>
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
                    {featuredBook.title}
                  </h3>
                  {featuredBook.subtitle && (
                    <p className="font-sans-clean text-base text-[#D4AF37] font-medium mt-1">
                      {featuredBook.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#A0A6C6] font-sans-clean font-light leading-relaxed">
                  {featuredBook.description}
                </p>

                {/* Awards Badges */}
                {featuredBook.awards && featuredBook.awards.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">Accolades & Recognition:</span>
                    <div className="flex flex-wrap gap-2">
                      {featuredBook.awards.map((award, idx) => (
                        <span key={idx} className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#12162E] border border-[#D4AF37]/30 text-xs text-[#E2E8F0] font-sans-clean">
                          <AwardIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{award}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Excerpt Snippet Box */}
                {featuredBook.excerpt && (
                  <div className="p-4 rounded-xl bg-black/30 border-l-2 border-[#D4AF37] text-xs sm:text-sm text-[#CBD5E1] font-serif-luxury italic leading-relaxed">
                    "{featuredBook.excerpt.slice(0, 180)}..."
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setSelectedBookForExcerpt(featuredBook)}
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F1D382] to-[#B8860B] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 hover:scale-105 transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Book Excerpt</span>
                  </button>

                  {/* Buy Links Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setActiveBuyDropdown(activeBuyDropdown === featuredBook.id ? null : featuredBook.id)}
                      className="flex items-center space-x-2 px-6 py-3 rounded-full bg-[#12162E] border border-[#D4AF37]/40 text-[#FAFAFA] font-medium text-xs uppercase tracking-wider hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all"
                    >
                      <ShoppingCart className="w-4 h-4 text-[#D4AF37]" />
                      <span>Order Hardcover / eBook</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeBuyDropdown === featuredBook.id ? 'rotate-90' : ''}`} />
                    </button>

                    {activeBuyDropdown === featuredBook.id && (
                      <div className="absolute left-0 mt-2 w-56 rounded-xl bg-[#0D1022] border border-[#D4AF37]/40 shadow-2xl p-2 z-30 space-y-1">
                        {featuredBook.buyLinks?.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-xs text-[#FAFAFA] font-sans-clean transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#12162E] text-[#A0A6C6] hover:text-[#FAFAFA] border border-white/10 hover:border-[#D4AF37]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search by title, topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full bg-[#12162E] border border-white/10 text-xs text-[#FAFAFA] placeholder-[#A0A6C6] focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            <Search className="w-3.5 h-3.5 text-[#A0A6C6] absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A6C6] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group relative rounded-2xl bg-[#12162E]/70 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Card Top / Header */}
              <div className="p-6 space-y-4">
                
                {/* Book Cover Image & Badge */}
                <div className="relative h-64 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center p-4 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
                  
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="h-full object-contain rounded shadow-2xl relative z-0 transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-[#0D1022]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono uppercase tracking-wider backdrop-blur-md">
                      {book.category}
                    </span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 z-20 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/80 border border-amber-400/40 text-amber-300 text-[10px] font-mono">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{book.rating}</span>
                  </div>
                </div>

                {/* Title & Publisher Info */}
                <div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                    {book.publisher} ({book.publishYear})
                  </span>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {book.title}
                  </h3>

                  {book.subtitle && (
                    <p className="text-xs text-[#A0A6C6] font-sans-clean font-medium mt-1 line-clamp-1">
                      {book.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#A0A6C6] font-sans-clean leading-relaxed line-clamp-3">
                  {book.description}
                </p>

                {/* Metadata row */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#A0A6C6] pt-2 border-t border-white/5">
                  <span>{book.pages ? `${book.pages} Pages` : 'Hardcover Edition'}</span>
                  <span>{book.language}</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/5 bg-black/20 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedBookForExcerpt(book)}
                  className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] text-xs text-[#FAFAFA] font-medium transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Preview Excerpt</span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setActiveBuyDropdown(activeBuyDropdown === book.id ? null : book.id)}
                    className="p-2.5 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/40 transition-all"
                    title="Purchase Options"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>

                  {activeBuyDropdown === book.id && (
                    <div className="absolute right-0 bottom-12 w-52 rounded-xl bg-[#0D1022] border border-[#D4AF37]/40 shadow-2xl p-2 z-30 space-y-1">
                      {book.buyLinks?.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-xs text-[#FAFAFA] font-sans-clean transition-colors"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16 bg-[#12162E]/50 rounded-2xl border border-white/10">
            <BookOpen className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-serif-luxury text-white font-bold">No books found</h3>
            <p className="text-xs text-[#A0A6C6] mt-1">Try resetting your search query or selecting a different category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Excerpt Preview Reader Modal */}
      {selectedBookForExcerpt && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0F1328] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] sm:max-h-[90vh] flex flex-col mt-16 sm:mt-0">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#12162E]/90">
              <div className="flex items-center space-x-3">
                <Bookmark className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                    Book Excerpt Preview
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold text-white leading-tight">
                    {selectedBookForExcerpt.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedBookForExcerpt(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Book Page Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent)] text-[#CBD5E1]">
              
              <div className="text-center pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
                  Chapter Excerpt • {selectedBookForExcerpt.publisher}
                </span>
                <h4 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                  {selectedBookForExcerpt.title}
                </h4>
                <p className="text-xs text-[#A0A6C6] font-sans-clean mt-0.5">
                  Authored by {selectedBookForExcerpt.author}
                </p>
              </div>

              {/* Book Chapter Styled Paragraph */}
              <div className="font-serif-luxury text-base sm:text-lg leading-relaxed space-y-4 text-[#E2E8F0]">
                <p>
                  <span className="float-left text-5xl font-bold text-[#D4AF37] leading-none pr-3 pt-1 font-serif-luxury">
                    {selectedBookForExcerpt.excerpt ? selectedBookForExcerpt.excerpt.charAt(0) : 'T'}
                  </span>
                  {selectedBookForExcerpt.excerpt ? selectedBookForExcerpt.excerpt.slice(1) : ''}
                </p>

                <p className="text-sm font-sans-clean text-[#A0A6C6] leading-relaxed pt-2">
                  {selectedBookForExcerpt.description}
                </p>
              </div>

              {/* Publisher & Book Meta Box */}
              <div className="p-4 rounded-xl bg-[#12162E] border border-white/10 text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A0A6C6]">ISBN:</span>
                  <span className="text-white">{selectedBookForExcerpt.isbn || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A6C6]">Publication Year:</span>
                  <span className="text-white">{selectedBookForExcerpt.publishYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A6C6]">Language:</span>
                  <span className="text-white">{selectedBookForExcerpt.language}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-white/10 bg-[#12162E] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedBookForExcerpt(null)}
                className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-medium text-[#A0A6C6] hover:text-white hover:border-white/30 transition-colors"
              >
                Close Preview
              </button>

              {selectedBookForExcerpt.buyLinks && selectedBookForExcerpt.buyLinks.length > 0 && (
                <a
                  href={selectedBookForExcerpt.buyLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md shadow-[#D4AF37]/20"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Order Full Book ({selectedBookForExcerpt.buyLinks[0].label})</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};