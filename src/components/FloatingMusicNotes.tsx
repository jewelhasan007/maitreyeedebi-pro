import React, { useMemo } from 'react';

const MUSIC_SYMBOLS = ['♩', '♪', '♫', '♬', '♭', '♮', '♯', '🎼'];

export const FloatingMusicNotes: React.FC = () => {
  const notes = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      symbol: MUSIC_SYMBOLS[i % MUSIC_SYMBOLS.length],
      left: `${(i * 7 + (i * 13) % 20) % 95}%`,
      animationDuration: `${7 + (i % 5) * 2.5}s`,
      animationDelay: `${(i * 1.2) % 6}s`,
      fontSize: `${16 + (i % 4) * 6}px`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {notes.map((note) => (
        <span
          key={note.id}
          className="absolute bottom-[-50px] text-[#D4AF37]/25 font-serif-luxury animate-float-note select-none"
          style={{
            left: note.left,
            animationDuration: note.animationDuration,
            animationDelay: note.animationDelay,
            fontSize: note.fontSize,
          }}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
};
