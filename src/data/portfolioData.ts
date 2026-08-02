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
    title: "জানবে নাতো কেউ - মুহিন || Janbe nato kew - Muhin",
    album: "Celestial Ragas",
    year: 2024,
    duration: "4:15",
    genre: "Classical",
    coverUrl: "/images/featured/janbe-nato-kew.jpg",
    audioUrl: "https://www.youtube.com/watch?v=DU6Z2NW58-M",
    streams: "17",
    featuredArtist: "London Philharmonic Strings",
    lyricsSnippet: "In the quietude of dawn, the soul wakes to the timeless melody of the universe...",
    isPopular: true
  },
  {
    id: "track-2",
    title: "ঘুড়ি",
    album: "Celestial Ragas",
    year: 2024,
    duration: "4:46",
    genre: "Classical",
    coverUrl: "/images/featured/ghuri.jpg",
    audioUrl: "https://www.youtube.com/watch?v=c0aFfQPWykU",
    streams: "17",
    featuredArtist: "London Philharmonic Strings",
    lyricsSnippet: "In the quietude of dawn, the soul wakes to the timeless melody of the universe...",
    isPopular: false
  },
  {
    id: "track-3",
    title: "সুরের জাদুওয়ালা || Surer Jaduwala - Joyotree Chakraborti",
    album: "Celestial Ragas",
    year: 2024,
    duration: "4:44",
    genre: "Classical",
    coverUrl: "/images/featured/surer-jaduwala.jpg",
    audioUrl: "https://www.youtube.com/watch?v=3X57lWlG-8w",
    streams: "1.01K",
    featuredArtist: "London Philharmonic Strings",
    lyricsSnippet: "In the quietude of dawn, the soul wakes to the timeless melody of the universe...",
    isPopular: false
  },


];

export const ALBUMS_LIST: Album[] = [
  {
    id: "album-1",
    title: "তুমি নেই || Tumi Nei",
    releaseYear: 2026,
    coverUrl: "/images/music/tumi-nei.jpg", // or replace with actual thumbnail
    genre: "Bengali Contemporary / Original",
    tracksCount: 6, // approx. recent date-titled + Tumi Nei
    description: "Recent original compositions and uploads from 2026, led by the heartfelt track তুমি নেই (Tumi Nei).",
    spotifyUrl: "https://www.youtube.com/watch?v=WzG03lYjUpw",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-2",
    title: "সুরের জাদুওয়ালা || Surer Jaduwala - Joyotree Chakraborti",
    releaseYear: 2026,
    coverUrl: "/images/music/surer-jaduwala.jpg",
    genre: "Bengali Cover / Classical Fusion",
    tracksCount: 1,
    description: "Cover of Joyotree Chakraborti’s সুরের জাদুওয়ালা (Surer Jaduwala).",
    spotifyUrl: "https://www.youtube.com/watch?v=3X57lWlG-8w",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-3",
    title: "জানবে নাতো কেউ - মুহিন || Janbe Nato Kew ",
    releaseYear: 2026,
    coverUrl: "/images/music/janbe-nato-kew.jpg",
    genre: "Bengali Cover",
    tracksCount: 2, // full + short/promo version
    description: "Cover of Muhin’s জানবে নাতো কেউ (Janbe Nato Kew), including promo version.",
    spotifyUrl: "https://www.youtube.com/watch?v=DU6Z2NW58-M",
    appleMusicUrl: "https://apple.com"
  },
  {
    id: "album-4",
    title: "ছুঁয়ে দাও যখন । Chuye Dau Jokhon",
    releaseYear: 2026,
    coverUrl: "/images/music/chuye-dau-jokhon.jpg",
    genre: "Bengali / Misc",
    tracksCount: 4,
    description: "Additional short clips, promos and earlier uploads from the official channel.",
    spotifyUrl: "https://www.youtube.com/watch?v=hwDJokybHGE&list=RDhwDJokybHGE&start_radio=1",
    appleMusicUrl: "https://apple.com"
  },
  // {
  //   id: "album-4",
  //   title: "প্রিয় মা || Priyo Ma",
  //   releaseYear: 2026,
  //   coverUrl: "/images/music/priyo-ma.jpg",
  //   genre: "Bengali / Misc",
  //   tracksCount: 4,
  //   description: "Additional short clips, promos and earlier uploads from the official channel.",
  //   spotifyUrl: "https://www.youtube.com/watch?v=dxdiXZhJXdI",
  //   appleMusicUrl: "https://apple.com"
  // },

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


export const BOOK_PUBLICATIONS: BookPublication[] = [
  {
    id: "book-1",
    title: "Ragas in Silk & Shadow",
    subtitle: "The Philosophy & Aesthetics of Indian Vocal Arts",
    author: "Maitreyee Debi",
    publisher: "Oxford University Press",
    publishYear: 2024,
    isbn: "978-0-19-983021-4",
    category: "Musicology",
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description: "A seminal volume exploring the microtonal architecture, emotional dynamics (rasa), and spiritual philosophy of Hindustani classical vocal traditions, bridging ancient treatises with modern acoustic performance theory.",
    pages: 348,
    language: "English (Sanskrit Transliterated)",
    awards: ["IMS International Musicological Book of the Year 2024", "National Cultural Heritage Citation"],
    rating: 4.9,
    reviewsCount: 128,
    isFeatured: true,
    excerpt: "To sing a raga is to step into a living sanctuary where time bends to resonance. In Khyal, the voice does not merely hit notes; it traces the invisible contours of human longing across micro-intervals (srutis). When morning's first light meets Raag Bairagi, the acoustic frequencies vibrate in resonance with the human pulse, unlocking emotional landscapes that words alone can never touch.",
    buyLinks: [
      { label: "Amazon Hardcover", url: "https://amazon.com", platform: "amazon" },
      { label: "Oxford University Press Edition", url: "https://global.oup.com", platform: "publisher" },
      { label: "Google Books Digital Edition", url: "https://books.google.com", platform: "google" }
    ]
  },
  {
    id: "book-2",
    title: "Shonar Pakhi (Golden Bird)",
    subtitle: "Verses of Memory, Dawn & Solitude",
    author: "Maitreyee Debi",
    publisher: "Penguin Random House",
    publishYear: 2023,
    isbn: "978-0-14-345892-1",
    category: "Poetry & Verses",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description: "An evocative collection of 85 original poems and lyrical meditations written during tour journeys across global capitals, celebrating nature, spiritual solitude, love, and the transcendent power of melody.",
    pages: 216,
    language: "Bengali Original with English Translations",
    awards: ["Tagore Literary Society Gold Medal 2023"],
    rating: 4.8,
    reviewsCount: 94,
    isFeatured: false,
    excerpt: "On the banks of the Seine at twilight, I heard the faint echo of a distant Ektara. The golden bird inside my chest fluttered its wings—singing not of caged sorrow, but of the endless sky waiting beyond the horizon. Music is where memory turns into light.",
    buyLinks: [
      { label: "Penguin Store", url: "https://penguin.com", platform: "publisher" },
      { label: "Amazon Paperback", url: "https://amazon.com", platform: "amazon" }
    ]
  },
  {
    id: "book-3",
    title: "Tagore's Harmonious Universe",
    subtitle: "Unveiling Orchestrated Rabindra Sangeet",
    author: "Maitreyee Debi",
    coAuthors: "Dr. Christopher Sterling",
    publisher: "Routledge Cultural Studies",
    publishYear: 2022,
    isbn: "978-1-138-49012-8",
    category: "Cultural Philosophy",
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    description: "An authoritative study on Rabindranath Tagore's musical philosophy, exploring how his 2,000+ compositions synthesize Western symphonic structures with Indian folk and classical ragas.",
    pages: 292,
    language: "English",
    awards: ["Asian Performing Arts Book Award"],
    rating: 4.9,
    reviewsCount: 76,
    isFeatured: false,
    excerpt: "Tagore understood that music is the ultimate universal currency. When he composed Anandadhara, he did not just write a melody; he transcribed the cosmic stream of joy flowing through galaxies, rivers, and human hearts alike. Modern orchestral arrangements only expand the acoustic wings of his vision.",
    buyLinks: [
      { label: "Routledge Academic Store", url: "https://routledge.com", platform: "publisher" },
      { label: "Amazon Hardcover", url: "https://amazon.com", platform: "amazon" }
    ]
  },
  {
    id: "book-4",
    title: "Vocal Riyaz & Resonance",
    subtitle: "A Masterclass in Hindustani Khyal Technique",
    author: "Maitreyee Debi",
    publisher: "Sangeet Natak Akademi Publications",
    publishYear: 2021,
    isbn: "978-81-230-3104-5",
    category: "Pedagogy",
    coverUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    description: "A practical guide for vocalists covering diaphragmatic breath control, vocal health, pitch accuracy (sur), gamak, tanas, and stage presentation for classical concerts.",
    pages: 260,
    language: "English & Hindi Dual Edition",
    awards: ["National Conservatory Recommended Textbook"],
    rating: 5.0,
    reviewsCount: 210,
    isFeatured: false,
    excerpt: "True vocal resonance comes not from physical strain, but from perfect alignment between breath support, abdominal diaphragmatic expansion, and relaxed upper resonance cavities. Daily Riyaz is not a mechanical drill; it is a sacred daily ritual of self-discovery.",
    buyLinks: [
      { label: "Akademi Bookstore", url: "https://sangeetnatak.gov.in", platform: "bookstore" },
      { label: "Amazon Paperback", url: "https://amazon.com", platform: "amazon" }
    ]
  },
  {
    id: "book-5",
    title: "Whispers of the Baul",
    subtitle: "Echoes of Bengal's Mystics",
    author: "Maitreyee Debi",
    publisher: "HarperCollins India",
    publishYear: 2019,
    isbn: "978-0-00-832109-7",
    category: "Translations",
    coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    description: "A captivating translation and commentary on the mystical folk songs of Bengal's Baul singers, celebrating divine love, human brotherhood, and spiritual freedom without dogma.",
    pages: 224,
    language: "English & Bengali",
    awards: ["UNESCO Cultural Heritage Preservation Citation"],
    rating: 4.7,
    reviewsCount: 88,
    isFeatured: false,
    excerpt: "The Baul sings with no temple walls surrounding him. His sanctuary is the open road, his instrument the simple dotara, and his deity the Moner Manush — the Unknown Beloved residing within every human heart. In these pages, we listen to their timeless wisdom.",
    buyLinks: [
      { label: "HarperCollins Store", url: "https://harpercollins.com", platform: "publisher" },
      { label: "Amazon Paperback", url: "https://amazon.com", platform: "amazon" }
    ]
  }
];
