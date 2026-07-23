import { SongTrack, Album, Performance, Award, PressArticle, GalleryItem, UpcomingEvent, Testimonial } from '../types';

import heroPortraitImg from '../assets/images/hero_portrait_1784702346771.jpg';
import concertStageImg from '../assets/images/concert_stage_1784702359983.jpg';
import albumCoverImg from '../assets/images/album_cover_1784702372742.jpg';

export const ARTIST_INFO = {
  name: "Maitreyee Debi",
  title: "Celebrated Vocalist, Composer & Cultural Icon",
  tagline: "Voice. Art. Performance.",
  shortBio: "A celebrated artist whose music, performances, and creative expression connect cultures and inspire audiences worldwide.",
  fullBio: `Maitreyee Debi is an internationally acclaimed singer, composer, and performing artist renowned for her ethereal vocal range, soulful renditions, and seamless synthesis of Indian classical heritage with contemporary global orchestration. 

Initiated into Hindustani classical vocal music at an early age, Maitreyee developed an extraordinary mastery over Khyal, Semi-Classical Thumri, Rabindra Sangeet, and Sufi devotional traditions. Her music transcends boundaries, weaving traditional ragas into lush symphonic landscapes that captivate audiences from London's Royal Albert Hall to Mumbai's National Centre for the Performing Arts.

Over a distinguished career spanning more than fifteen years, she has released six acclaimed studio albums, performed in over 400 live grand concerts worldwide, and contributed soul-stirring playback compositions to award-winning cinema and theatrical productions.`,
  quote: "Music is not merely sound; it is an invisible sanctuary where the soul speaks without words and hearts unite across time.",
  stats: [
    { label: "Years of Heritage", value: "15+" },
    { label: "Live Grand Concerts", value: "400+" },
    { label: "Global Listener Streams", value: "8.5M+" },
    { label: "Prestigious Awards", value: "18" },
  ],
  heroPortrait: heroPortraitImg,
  concertStage: concertStageImg,
  albumCover: albumCoverImg,
  socialLinks: {
    spotify: "https://open.spotify.com",
    appleMusic: "https://music.apple.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    wikipedia: "https://wikipedia.org",
  },
  agencyContact: {
    management: "Aura Global Artist Management",
    email: "management@maitreyeedebi.com",
    bookingEmail: "bookings@maitreyeedebi.com",
    pressContact: "press@maitreyeedebi.com",
    phone: "+1 (800) 928-8742 / +91 98301 23456",
    address: "London • Mumbai • New York",
  }
};

export const FEATURED_TRACKS: SongTrack[] = [
  {
    id: "track-1",
    title: "Celestial Raga: Bairagi Echoes",
    album: "Celestial Ragas",
    year: 2024,
    duration: "4:32",
    genre: "Classical",
    coverUrl: albumCoverImg,
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-ambient-112282.mp3",
    streams: "2.4M",
    featuredArtist: "London Philharmonic Strings",
    lyricsSnippet: "In the quietude of dawn, the soul wakes to the timeless melody of the universe...",
    isPopular: true
  },
  {
    id: "track-2",
    title: "Anandadhara (Stream of Joy)",
    album: "Tagore in Symphony",
    year: 2023,
    duration: "5:14",
    genre: "Rabindra Sangeet",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c2f82283a0.mp3?filename=gentle-acoustic-10234.mp3",
    streams: "1.8M",
    lyricsSnippet: "Anandadhara bohichhe bhubane, jagaatare taaro nahi paaye...",
    isPopular: true
  },
  {
    id: "track-3",
    title: "Sufi Mirage (Noor-e-Nazar)",
    album: "Mystic Horizons",
    year: 2024,
    duration: "6:08",
    genre: "Sufi",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=sufi-flute-ambient-9283.mp3",
    streams: "3.1M",
    featuredArtist: "Ustad Rashid Ali (Flute)",
    lyricsSnippet: "Light of my eyes, soul of the night, guide my steps through the desert sky...",
    isPopular: true
  },
  {
    id: "track-4",
    title: "Midnight Thumri in Raag Bageshri",
    album: "Nocturne Whispers",
    year: 2022,
    duration: "7:20",
    genre: "Classical",
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_9932128712.mp3?filename=indian-classical-ambient-8890.mp3",
    streams: "950K",
    isPopular: false
  },
  {
    id: "track-5",
    title: "Ganga Reverie (Fusion Suite)",
    album: "Rivers of the East",
    year: 2023,
    duration: "4:48",
    genre: "Fusion",
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_284712.mp3?filename=ambient-piano-strings-10023.mp3",
    streams: "1.2M",
    featuredArtist: "Prague Chamber Cello Ensemble",
    isPopular: true
  },
  {
    id: "track-6",
    title: "Shedin Dekha Hoyechilo",
    album: "Tagore in Symphony",
    year: 2023,
    duration: "4:15",
    genre: "Rabindra Sangeet",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c39832812.mp3?filename=soft-classical-instrumental-11920.mp3",
    streams: "890K",
    isPopular: false
  }
];

export const ALBUMS_LIST: Album[] = [
  {
    id: "album-1",
    title: "Celestial Ragas",
    releaseYear: 2024,
    coverUrl: albumCoverImg,
    genre: "Classical & Symphonic",
    tracksCount: 8,
    description: "A breathtaking acoustic tapestry melding ancient Hindustani ragas with Western classical string arrangements recorded at Abbey Road Studios.",
    spotifyUrl: "https://spotify.com",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-2",
    title: "Tagore in Symphony",
    releaseYear: 2023,
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    genre: "Rabindra Sangeet Orchestral",
    tracksCount: 10,
    description: "An homage to Nobel laureate Rabindranath Tagore, re-imagined with grand cinematic brass and intricate vocal ornamentation.",
    spotifyUrl: "https://spotify.com",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-3",
    title: "Mystic Horizons",
    releaseYear: 2022,
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    genre: "Sufi & World Fusion",
    tracksCount: 9,
    description: "Deep spiritual trance and mystical Sufi poetry meets contemporary acoustic percussion and ambient electronic layers.",
    spotifyUrl: "https://spotify.com",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-4",
    title: "Rivers of the East",
    releaseYear: 2021,
    coverUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    genre: "Folk & Acoustic Fusion",
    tracksCount: 12,
    description: "A musical river cruise exploring the rich vocal folk heritage of Bengal, Assam, and the Himalayan foothills.",
    spotifyUrl: "https://spotify.com",
    appleMusicUrl: "https://apple.com"
  }
];

export const PERFORMANCES: Performance[] = [
  {
    id: "perf-1",
    title: "Royal Albert Hall Symphony Gala",
    venue: "Royal Albert Hall",
    location: "London, UK",
    date: "October 14, 2024",
    category: "Symphony",
    thumbnailUrl: concertStageImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A sold-out headline evening featuring 70 orchestral musicians accompanying Maitreyee's vocal solos to a standing ovation of 5,200 patrons.",
    attendance: "5,200 Guests"
  },
  {
    id: "perf-2",
    title: "NCPA World Music Festival",
    venue: "Tata Theatre, NCPA",
    location: "Mumbai, India",
    date: "February 22, 2024",
    category: "Concert",
    thumbnailUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description: "Opening recital for the NCPA International World Music Series, showcasing vocal Khyal improvisations and delicate Thumri compositions.",
    attendance: "1,200 Guests"
  },
  {
    id: "perf-3",
    title: "Symphony of the Sun Festival",
    venue: "Sydney Opera House",
    location: "Sydney, Australia",
    date: "November 08, 2023",
    category: "Festival",
    thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    description: "A landmark multi-cultural concert uniting East & West heritage under the sails of the iconic Opera House.",
    attendance: "2,600 Guests"
  },
  {
    id: "perf-4",
    title: "BBC Proms Cultural Heritage Night",
    venue: "Cadogan Hall",
    location: "London, UK",
    date: "August 18, 2023",
    category: "Television",
    thumbnailUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    description: "Broadcast live on BBC Radio 3 and BBC Four Television, celebrating global vocal traditions with special guests.",
    attendance: "Broadcast to 2.1M Viewers"
  }
];

export const AWARDS: Award[] = [
  {
    id: "award-1",
    title: "Global Cultural Icon Award",
    organization: "International Performing Arts Council",
    year: 2024,
    category: "Lifetime Excellence",
    description: "Conferred for outstanding global contribution to preserving classical vocal arts while forging cross-continental creative bridges.",
    badge: "Gold Medal Honor"
  },
  {
    id: "award-2",
    title: "Best World Music Album",
    organization: "World Music Critics Guild",
    year: 2023,
    category: "Discography",
    description: "Awarded to 'Tagore in Symphony' for groundbreaking orchestral innovation in classical Bengali song recording.",
    badge: "Winner"
  },
  {
    id: "award-3",
    title: "National Classical Vocalist Honor",
    organization: "Ministry of Cultural Heritage",
    year: 2022,
    category: "Vocal Mastery",
    description: "Recognized for exceptional virtuosity in Hindustani Khyal presentation and mentorship of young musical aspirants.",
    badge: "National Citation"
  },
  {
    id: "award-4",
    title: "Best Original Vocal Score",
    organization: "Asian Film & Theatre Awards",
    year: 2021,
    category: "Cinema & Stage",
    description: "For composing and performing the mystical vocal background score for the historical drama film 'Shanti Sangeet'.",
    badge: "Special Jury Award"
  }
];

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: "press-1",
    outlet: "VOGUE ART",
    logoText: "VOGUE",
    title: "Maitreyee Debi: The Voice Translating Heritage into High Art",
    quote: "Standing in the center of Royal Albert Hall with a golden sari cascading like liquid light, Maitreyee Debi didn't just sing — she commanded the quiet between notes with regal elegance.",
    date: "November 2024",
    readTime: "6 min read",
    linkUrl: "#",
    coverImage: heroPortraitImg
  },
  {
    id: "press-2",
    outlet: "THE ROLLING STONE",
    logoText: "ROLLING STONE",
    title: "How 'Celestial Ragas' Redefines Contemporary World Music",
    quote: "Debi’s pitch precision is breathtaking. She hits micro-tonal srutis with the effortless grace of a master, making ancient ragas sound as urgent and intimate as today's heartbeats.",
    date: "August 2024",
    readTime: "4 min read",
    linkUrl: "#",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "press-3",
    outlet: "BBC CULTURAL TIMES",
    logoText: "BBC MUSIC",
    title: "Inside the Recording Sessions at Abbey Road",
    quote: "A rare fusion where neither orchestra nor traditional vocalist compromises — Maitreyee's voice floats like silk above the cello sections.",
    date: "May 2024",
    readTime: "5 min read",
    linkUrl: "#",
    coverImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Royal Albert Hall Headline Concert",
    category: "Performances",
    imageUrl: concertStageImg,
    caption: "Performing live with the London Philharmonic Strings at Royal Albert Hall, London.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-2",
    title: "Abbey Road Studio Orchestral Tracking",
    category: "Studio",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    caption: "In Studio 1 at Abbey Road, reviewing vocal takes with maestro conductor.",
    aspectRatio: "portrait"
  },
  {
    id: "gal-3",
    title: "Editorial Portrait Shoot - Paris",
    category: "Red Carpet",
    imageUrl: heroPortraitImg,
    caption: "Vogue Cultural Feature editorial shoot in Paris, styled in handloom gold silk.",
    aspectRatio: "portrait"
  },
  {
    id: "gal-4",
    title: "Backstage Warmups with Tanpura",
    category: "Behind The Scenes",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    caption: "A quiet moment of Riyaz (vocal practice) before taking the stage in Sydney.",
    aspectRatio: "square"
  },
  {
    id: "gal-5",
    title: "World Music Summit Collaboration",
    category: "Collaborations",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    caption: "Sharing vocal harmonies with Grammy-winning cellist Yo-Yo Ma ensemble.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-6",
    title: "NCPA Golden Jubilee Recital",
    category: "Performances",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    caption: "Captivating the audience at the Tata Theatre in Mumbai.",
    aspectRatio: "square"
  }
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "event-1",
    title: "Celestial Ragas World Tour — Opening Night",
    venue: "Symphony Hall",
    city: "Boston",
    country: "USA",
    date: "September 18, 2026",
    time: "7:30 PM EST",
    ticketStatus: "Selling Fast",
    ticketLink: "#booking"
  },
  {
    id: "event-2",
    title: "An Autumn of Tagorean Melodies",
    venue: "Lincoln Center (Avery Fisher Hall)",
    city: "New York",
    country: "USA",
    date: "October 05, 2026",
    time: "8:00 PM EST",
    ticketStatus: "Selling Fast",
    ticketLink: "#booking"
  },
  {
    id: "event-3",
    title: "Diwali Classical Grand Night",
    venue: "Jio World Garden",
    city: "Mumbai",
    country: "India",
    date: "November 12, 2026",
    time: "6:30 PM IST",
    ticketStatus: "RSVP Open",
    ticketLink: "#booking"
  },
  {
    id: "event-4",
    title: "Royal Festival Hall Winter Recital",
    venue: "Southbank Centre",
    city: "London",
    country: "UK",
    date: "December 04, 2026",
    time: "7:00 PM GMT",
    ticketStatus: "VIP Only",
    ticketLink: "#booking"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Maitreyee Debi possesses one of the rarest vocal gifts of our generation. Her ability to blend pristine classical discipline with raw emotional resonance leaves audiences in tears of joy.",
    author: "Sir Christopher Sterling",
    role: "Senior Artistic Director",
    organization: "London Symphony Orchestra",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-2",
    quote: "Working with Maitreyee on 'Celestial Ragas' was transformative. Her instinct for microtonal melody combined with effortless rhythm brought our string arrangements to a higher spiritual realm.",
    author: "Dr. Arundhati Sen",
    role: "Eminent Musicologist & Critic",
    organization: "Royal Society of Performing Arts",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-3",
    quote: "The energy in the room during her Royal Albert Hall concert was electricity incarnate. You felt part of an historic cultural event.",
    author: "Marcella Rossi",
    role: "Global Programming Director",
    organization: "World Performing Arts Gala, Milan",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];
