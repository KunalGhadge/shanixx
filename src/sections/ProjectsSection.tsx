import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { featuredTracks } from "../data/musicData";
import type { Track } from "../data/musicData";

const TrackCard = ({ track, index, range, targetScale, progress }: { 
  track: Track; 
  index: number; 
  range: [number, number]; 
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ 
          scale, 
          top: `${index * 28}px`,
          backgroundColor: "#0C0C0C",
          willChange: "transform",
        }}
        className="relative w-full max-w-7xl h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center mb-6 md:mb-10 gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
              0{index + 1}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm sm:text-base">
                {track.genre}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {track.title}
              </h3>
            </div>
          </div>
          <a href={track.link} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-6 min-h-0">
          {/* Left Column (40%) */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: "clamp(130px, 16vw, 230px)" }}>
                <img
                src={track.cover}
                alt={`${track.title} vibe 1`}
                className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: "clamp(160px, 22vw, 340px)" }}>
                <img
                src={track.cover}
                alt={`${track.title} vibe 2`}
                className="w-full h-full object-cover"
                />
            </div>
          </div>
          {/* Right Column (60%) */}
          <div className="w-[60%] h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img
              src={track.cover}
              alt={`${track.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="music"
      ref={container}
      className="bg-background rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pb-[10vh]"
    >
      <div className="px-5 sm:px-8 md:px-10 pt-20">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-10" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            Releases
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {featuredTracks.map((track, i) => {
            const targetScale = 1 - ((featuredTracks.length - 1 - i) * 0.03);
            return (
              <TrackCard 
                key={track.id} 
                track={track} 
                index={i} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale} 
                progress={scrollYProgress} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
