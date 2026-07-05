import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-background overflow-hidden">
      {/* Decorative 3D Images */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon icon"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] opacity-30 smooth-gpu"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            loading="lazy"
            className="w-[100px] sm:w-[140px] md:w-[180px] opacity-30 smooth-gpu"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego icon"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] opacity-30 smooth-gpu"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group"
            loading="lazy"
            className="w-[130px] sm:w-[170px] md:w-[220px] opacity-30 smooth-gpu"
          />
        </FadeIn>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}>
            The Journey
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
          <div className="space-y-12">
            <div className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[800px] flex flex-col gap-6" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}>
              <p>
                <strong>SHANIX!</strong> is the primary artist name and alter ego of <strong>Sharonraj Vasave</strong>, an Indian music producer, content creator, ethical hacker, and game developer. His journey began on YouTube in 2016, where he started with funny videos before moving into horror content, Minecraft gaming, and music production.
              </p>
              <p>
                Around 2018, he began making hip-hop, aesthetic rap, trap, and Phonk music while teaching himself ethical hacking, game hacking, app modding, and game development. His mix of Phonk with Indian vibes, aesthetic rap, and experimental sounds helped him stand out, earning recognition as one of the earliest and most influential Indian Phonk producers.
              </p>
              <p>
                After stepping away from music in 2021 to focus on personal life, hacking, and game development, he returned in 2023 with a fresh direction across Brazilian Funk, Hardwave, Krushclub, EDM, and other internet-driven genres. Today, SHANIX! continues to push creative boundaries across Spotify, SoundCloud, YouTube, and beyond.
              </p>
            </div>
          </div>
          
          <FadeIn delay={0.4}>
            <a href="#contact">
              <ContactButton />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
