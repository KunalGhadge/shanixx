import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const portraitScale = useTransform(scrollY, [0, 500], [1, 1.4]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full flex flex-col overflow-hidden bg-background">
      
      {/* DESKTOP PORTRAIT LAYER */}
      <div className="hidden sm:flex absolute inset-0 z-10 items-center justify-center pointer-events-none">
        
        {/* Glow - Static position to save GPU performance */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B600A8]/20 to-[#7621B0]/20 blur-[60px] rounded-full z-0 pointer-events-none smooth-gpu"
        />

        <motion.div 
          style={{ scale: portraitScale, y: portraitY, translateZ: 0 }}
          className="pointer-events-auto relative z-10 smooth-gpu"
        >
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={200} strength={3} className="w-[520px] md:w-[670px] lg:w-[800px]">
              <img
                src="/assets/portrait.png"
                alt="SHANIX!"
                className="w-full h-auto max-h-[98vh] object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.4)]"
              />
            </Magnet>
          </FadeIn>
        </motion.div>
      </div>

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
      <div className="flex-1 flex flex-col justify-center items-center relative px-6 md:px-10 z-0">
        <div className="relative w-full flex flex-col items-center justify-center">
          
          {/* MOBILE PORTRAIT (Stacked) */}
          <motion.div 
            style={{ scale: portraitScale, y: portraitY }}
            className="block sm:hidden relative z-10 mb-6 pointer-events-none"
          >
            <FadeIn delay={0.6} y={30}>
              <div className="relative">
                {/* Simplified Mobile Glow */}
                <div className="absolute inset-0 bg-accent/10 blur-[40px] rounded-full z-0" />
                <Magnet padding={150} strength={3} className="w-[240px] relative z-10">
                  <img
                    src="/assets/portrait.png"
                    alt="SHANIX!"
                    className="w-full h-auto max-h-[50vh] object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                  />
                </Magnet>
              </div>
            </FadeIn>
          </motion.div>

          {/* SHARED HEADING */}
          <div className="relative z-0 w-full overflow-hidden">
            <FadeIn delay={0.15} y={40}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] text-center">
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
              SHANIX! | Internet Artist
            </p>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.72rem, 1.2vw, 1.25rem)" }}>
              Widely recognized as the Pioneer of Indian Phonk Music
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
