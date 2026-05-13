import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Github, 
  Music, 
  Disc,
  Send,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  { icon: Twitter, label: "Twitter", url: "https://x.com/SHANIXofc" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/ishxronraj.exe" },
  { icon: Youtube, label: "Youtube", url: "https://www.youtube.com/@SHANIXMUSICS" },
  { icon: Github, label: "GitHub", url: "https://github.com/DevAbhay-555" },
  { icon: Music, label: "SoundCloud", url: "https://soundcloud.com/SHANIXOFC" },
  { icon: Disc, label: "Discord", url: "https://discord.gg/9U8Uu5aQPp" },
  { icon: Send, label: "Telegram", url: "https://t.me/@shanixofc" },
  { icon: ExternalLink, label: "Spotify", url: "https://open.spotify.com/artist/72E9kEuXfIHx2MpFbLEUlU" },
];

export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-background px-5 sm:px-8 md:px-10 py-20 sm:py-32 relative overflow-hidden border-t border-accent/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
        
        {/* Call to action */}
        <div className="text-center flex flex-col items-center gap-8">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tighter" style={{ fontSize: "clamp(3rem, 12vw, 120px)" }}>
              The legacy <br /> continues
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm sm:text-base max-w-md mx-auto">
              India&apos;s Phonk pioneer returning to define the next era of electronic music. Let&apos;s connect.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a href="mailto:sharonrajvasave@gmail.com">
              <Magnet padding={50} strength={4}>
                <ContactButton />
              </Magnet>
            </a>
          </FadeIn>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 w-full">
          {socialLinks.map((social, i) => (
            <FadeIn key={social.label} delay={0.05 * i} y={20} className="flex justify-center">
              <Magnet padding={20} strength={2}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-accent/20 flex items-center justify-center text-accent transition-colors hover:bg-accent hover:text-background group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              </Magnet>
            </FadeIn>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-accent/5">
          <FadeIn x={-20} y={0}>
            <div className="flex flex-col">
              <span className="hero-heading font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
                SHAN!X
              </span>
              <span className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-xs sm:text-sm mt-2">
                Sharonraj Vasave &mdash; Music Producer
              </span>
            </div>
          </FadeIn>

          <FadeIn x={20} y={0} className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-xs sm:text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} SHAN!X &mdash; OFFICIAL PORTFOLIO</p>
            <p className="mt-1">All rights reserved &mdash; Father of Indian Phonk</p>
          </FadeIn>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none w-full text-center">
        <h2 className="hero-heading font-black uppercase tracking-tighter leading-none" style={{ fontSize: "25vw" }}>
          SHAN!X
        </h2>
      </div>
    </footer>
  );
};
