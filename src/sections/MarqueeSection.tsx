import { marqueeTracks } from "../data/musicData";

export const MarqueeSection = () => {
  const renderRow = (rowTracks: typeof marqueeTracks, direction: "left" | "right") => {
    // Duplicate tracks for seamless loop
    const duplicatedTracks = [...rowTracks, ...rowTracks, ...rowTracks, ...rowTracks];
    
    return (
      <div className="flex overflow-hidden py-4 select-none">
        <div className={`flex gap-6 animate-marquee-${direction} will-change-transform`}>
          {duplicatedTracks.map((track, idx) => (
            <a
              key={`${track.id}-${idx}`}
              href={track.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-[280px] sm:w-[400px] h-[180px] sm:h-[260px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 shrink-0"
            >
              <img
                src={track.cover}
                alt={track.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-white font-medium uppercase tracking-widest text-[10px] sm:text-xs bg-black/80 px-4 py-2 rounded-full border border-white/10">
                    Listen to {track.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-background pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-left { animation-duration: 25s; }
          .animate-marquee-right { animation-duration: 25s; }
        }
      `}} />
      <div className="flex flex-col gap-4 sm:gap-8">
        {renderRow(marqueeTracks.slice(0, 4), "left")}
        {renderRow(marqueeTracks.slice(4, 8), "right")}
      </div>
    </section>
  );
};
