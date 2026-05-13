import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
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
            className="w-[120px] sm:w-[160px] md:w-[210px] opacity-30 will-change-transform"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            className="w-[100px] sm:w-[140px] md:w-[180px] opacity-30 will-change-transform"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] opacity-30 will-change-transform"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group"
            className="w-[130px] sm:w-[170px] md:w-[220px] opacity-30 will-change-transform"
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
            <AnimatedText
              text="I started as a creator in 2016, diving into horror and Minecraft content before finding my true passion in music production and hacking. Known as India's first Phonk producer, I fused Indian vibes into rare Phonk and aesthetic rap, hitting 1 million views with 'Phonky India'."
              className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]"
            />
            <AnimatedText
              text="After a brief hiatus, I've returned in 2023 to dominate fresh genres like Brazilian Funk, Krushclub, and Hardwave. My unique fusion of styles connects with international listeners, solidifying my place as a pioneer in the Indian electronic scene. The legacy continues."
              className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]"
            />
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
