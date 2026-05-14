import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col overflow-x-clip bg-background">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 px-6 md:px-10">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] text-center mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m SHANIX!
            </h1>
          </FadeIn>
        </div>

        {/* Portrait - Absolutely Centered at bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 pointer-events-none sm:pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            >
              <img
                src="/assets/portrait.png"
                alt="SHANIX! Portrait"
                className="w-full h-auto"
              />
            </Magnet>
          </FadeIn>
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
