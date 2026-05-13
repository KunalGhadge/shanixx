import { FadeIn } from "../components/FadeIn";

const services = [
  {
    number: "01",
    title: "Music Production",
    description: "Crafting high-energy tracks across Phonk, Brazilian Funk, Krushclub, and more, with a focus on unique genre fusions.",
  },
  {
    number: "02",
    title: "Beat Making",
    description: "Custom hip-hop, aesthetic rap, and trap beats tailored for artists and creators looking for an edge.",
  },
  {
    number: "03",
    title: "Sound Design",
    description: "Unique atmospheric textures and hard-hitting samples that define the modern underground and electronic sound.",
  },
  {
    number: "04",
    title: "Mixing & Mastering",
    description: "Professional audio processing to ensure your music sounds crisp, powerful, and ready for global streaming platforms.",
  },
  {
    number: "05",
    title: "Ethical Hacking",
    description: "Expert insights into game hacking, app modding, and cybersecurity, blending technical skill with creative logic.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            Expertise
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={30} className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-0">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="font-black text-[#0C0C0C] leading-none shrink-0" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
                  {service.number}
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <h3 className="font-medium uppercase leading-tight" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
