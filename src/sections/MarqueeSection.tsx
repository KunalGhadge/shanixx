import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { marqueeTracks } from "../data/musicData";

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const renderRow = (rowTracks: typeof marqueeTracks, x: any) => {
    // Tripled for seamless scrolling
    const tripledTracks = [...rowTracks, ...rowTracks, ...rowTracks];
    
    return (
      <motion.div 
        className="flex gap-4 py-2 smooth-gpu"
        style={{ x, translateZ: 0 }}
      >
        {tripledTracks.map((track, idx) => (
          <a
            key={`${track.id}-${idx}`}
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-[300px] sm:w-[420px] h-[200px] sm:h-[270px] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] active:scale-95 shrink-0 smooth-gpu"
          >
            <img
              src={track.cover}
              alt={track.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center px-4">
                <span className="text-white font-medium uppercase tracking-widest text-xs bg-black/80 px-4 py-2 rounded-full border border-white/10">
                  Listen to {track.title}
                </span>
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-background pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-6">
        {renderRow(marqueeTracks.slice(0, 4), x1)}
        {renderRow(marqueeTracks.slice(4, 8), x2)}
      </div>
    </section>
  );
};
