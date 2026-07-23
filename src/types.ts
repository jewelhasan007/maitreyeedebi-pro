export interface SongTrack {
  id: string;
  title: string;
  album: string;
  year: number;
  duration: string;
  genre: 'Classical' | 'Rabindra Sangeet' | 'Fusion' | 'Sufi' | 'Contemporary';
  coverUrl: string;
  audioUrl?: string;
  streams: string;
  featuredArtist?: string;
  lyricsSnippet?: string;
  isPopular?: boolean;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  coverUrl: string;
  genre: string;
  tracksCount: number;
  description: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
}

export interface Performance {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  category: 'Concert' | 'Television' | 'Symphony' | 'Festival' | 'Private Gala';
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  attendance?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  badge?: string;
}

export interface PressArticle {
  id: string;
  outlet: string;
  logoText: string;
  title: string;
  quote: string;
  date: string;
  readTime: string;
  linkUrl: string;
  coverImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Performances' | 'Studio' | 'Behind The Scenes' | 'Red Carpet' | 'Collaborations';
  imageUrl: string;
  caption: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface UpcomingEvent {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time: string;
  ticketStatus: 'Selling Fast' | 'Sold Out' | 'RSVP Open' | 'VIP Only';
  ticketLink?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarUrl?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: 'Concert Performance' | 'Private/Corporate Gala' | 'Playback Recording' | 'Media/Interview' | 'Cultural Sponsorship';
  eventDate?: string;
  budgetRange?: string;
  message: string;
}
