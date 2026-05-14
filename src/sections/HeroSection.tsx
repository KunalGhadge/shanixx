import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Effect 1: Scroll Scaling (Moves from 1 to 1.15 as you scroll)
  const portraitScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full flex flex-col overflow-x-clip bg-background">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} tag="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        <div className="flex gap-4 md:gap-8 lg:gap-12 w-full justify-between max-w-7xl mx-auto">
          {[
            { label: "About", href: "#about" },
            { label: "Music", href: "#music" },
            { label: "Spotify", href: "#spotify" },
            { label: "Contact", href: "#contact" }
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-6 md:px-10">
        
        {/* Mobile: Stacked Layout | PC: Overlay Layout */}
        <div className="relative w-full flex flex-col items-center justify-center sm:block">
          
          {/* Portrait with Scroll Scaling & Glow Pulse */}
          <motion.div 
            style={{ scale: portraitScale, y: portraitY }}
            className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 z-10 sm:z-10 pointer-events-none sm:pointer-events-auto mb-6 sm:mb-0"
          >
            <FadeIn delay={0.6} y={30}>
              <div className="relative group">
                {/* Effect 2: Dynamic Glow Pulse */}
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-accent/20 blur-[60px] sm:blur-[100px] rounded-full z-0"
                />

                <Magnet
                  padding={150}
                  strength={3}
                  activeTransition="transform 0.3s ease-out"
                  inactiveTransition="transform 0.6s ease-in-out"
                  className="w-[240px] sm:w-[520px] md:w-[670px] lg:w-[800px] relative z-10"
                >
                  <img
                    src="/assets/portrait.png"
                    alt="SHANIX! Portrait"
                    className="w-full h-auto max-h-[50vh] sm:max-h-[98vh] object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  />
                </Magnet>
              </div>
            </FadeIn>
          </motion.div>

          {/* Heading */}
          <div className="relative z-20 sm:z-0 w-full overflow-hidden">
            <FadeIn delay={0.15} y={40}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] text-center mt-0 sm:mt-4 md:-mt-5">
                Hi, i&apos;m SHANIX!
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full flex justify-between items-end relative z-20">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1">
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-lg sm:text-xl md:text-2xl">
              I&apos;m SHANIX!
            </span>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
              Father of Indian Phonk music
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <a href="#contact">
            <ContactButton />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
