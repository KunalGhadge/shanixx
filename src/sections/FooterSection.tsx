import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Github, 
  Send,
  ExternalLink
} from "lucide-react";

// Custom Brand Icons using SVGs for authenticity
const SpotifyIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.305c-.218.358-.684.474-1.042.256-2.87-1.754-6.482-2.152-10.737-1.177-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.656-1.066 8.653-.61 11.863 1.348.358.218.474.684.256 1.042zm1.468-3.262c-.274.446-.853.588-1.299.314-3.284-2.018-8.291-2.607-12.176-1.428-.5.152-1.03-.131-1.182-.631-.152-.5.131-1.03.631-1.182 4.437-1.348 9.948-.696 13.713 1.613.446.274.588.853.314 1.299zm.127-3.409C15.22 8.243 8.79 8.03 5.034 9.17c-.608.184-1.25-.164-1.434-.772-.184-.608.164-1.25.772-1.434 4.314-1.31 11.41-1.06 15.894 1.6 1.107.657 1.48 2.083.823 3.19-.657 1.107-2.083 1.48-3.19.823z"/>
  </svg>
);

const SoundCloudIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.08 13.013c-.023.11-.035.224-.035.342 0 .548.258 1.037.662 1.353.111.087.234.161.365.22.122.054.252.096.388.125.132.028.269.043.409.043.085 0 .167-.006.248-.016.155-.021.303-.061.442-.12a1.696 1.696 0 0 0 .57-.406c.026-.03.049-.06.071-.092V8.922a.417.417 0 0 0-.012-.093 1.693 1.693 0 0 0-1.444-1.303.418.418 0 0 0-.063-.004c-.08 0-.158.006-.234.016a1.706 1.706 0 0 0-1.254.996c-.052.124-.089.255-.11.391-.02.13-.03.262-.03.398 0 .133.009.263.027.39zm2.463 2.09c0 .141.015.278.043.409.029.136.071.266.124.388.06.131.134.254.221.366.087.112.186.211.298.298.112.087.235.161.366.22.122.053.252.095.388.124.131.028.268.043.409.043.141 0 .278-.015.409-.043.136-.029.266-.071.388-.124.131-.06.254-.134.366-.22.112-.087.211-.186.298-.298.087-.112.161-.235.22-.366.053-.122.095-.252.124-.388.028-.131.043-.268.043-.409s-.015-.278-.043-.409a1.706 1.706 0 0 0-.124-.388c-.06-.131-.133-.254-.22-.366a1.71 1.71 0 0 0-.298-.298 1.696 1.696 0 0 0-.366-.22c-.122-.053-.252-.095-.388-.124a1.693 1.693 0 0 0-.409-.043c-.141 0-.278.015-.409.043a1.706 1.706 0 0 0-.388.124c-.131.06-.254.133-.366.22-.112.087-.211.186-.298.298a1.696 1.696 0 0 0-.221.366c-.053.122-.095.252-.124.388-.028.131-.043.268-.043.409zm2.463-.996c0 .141.015.278.043.409.029.136.071.266.124.388.06.131.134.254.221.366.087.112.186.211.298.298.112.087.235.161.366.22.122.053.252.095.388.124.131.028.268.043.409.043.141 0 .278-.015.409-.043.136-.029.266-.071.388-.124.131-.06.254-.134.366-.22.112-.087.211-.186.298-.298.087-.112.161-.235.22-.366.053-.122.095-.252.124-.388.028-.131.043-.268.043-.409V6.012a2.083 2.083 0 0 0-2.071 1.956c-.006.039-.01.079-.012.119V14.11zm2.463 1.545c0 .141.015.278.043.409.029.136.071.266.124.388.06.131.133.254.221.366.087.112.186.211.298.298.112.087.234.161.365.22.122.053.253.095.388.124.131.028.269.043.409.043.141 0 .278-.015.409-.043a1.706 1.706 0 0 0 .388-.124c.131-.06.254-.133.366-.22.112-.087.211-.186.298-.298.087-.112.161-.235.22-.366.053-.122.095-.252.124-.388.028-.131.043-.268.043-.409V4.653a2.08 2.08 0 0 0-2.071 1.956c-.006.039-.01.079-.012.119V15.655zm2.462.628c0 .141.015.278.043.409.029.136.072.266.124.388.06.131.134.254.221.366.087.112.186.211.298.298.112.087.235.161.366.22.122.053.252.095.388.124.131.028.268.043.409.043.141 0 .278-.015.409-.043a1.706 1.706 0 0 0 .388-.124c.132-.06.255-.133.366-.22a1.71 1.71 0 0 0 .298-.298 1.696 1.696 0 0 0 .22-.366c.053-.122.096-.252.125-.388.028-.131.043-.268.043-.409V3.535A2.083 2.083 0 0 0 10.963 5.49c-.006.039-.01.079-.012.119V16.283zM22.912 11.24a4.42 4.42 0 0 0-2.127.538 4.414 4.414 0 0 0-2.26 2.015V7.794a2.083 2.083 0 0 0-2.071 1.956c-.006.039-.01.079-.012.119v8.665c0 1.22.99 2.21 2.21 2.21h4.26a4.42 4.42 0 0 0 4.42-4.42c0-2.441-1.979-4.42-4.42-4.42z"/>
  </svg>
);

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

const socialLinks = [
  { icon: Twitter, label: "Twitter", url: "https://x.com/SHANIXofc" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/ishxronraj.exe" },
  { icon: Youtube, label: "Youtube", url: "https://www.youtube.com/@SHANIXofc" },
  { icon: Github, label: "GitHub", url: "https://github.com/DevAbhay-555" },
  { icon: SoundCloudIcon, label: "SoundCloud", url: "https://soundcloud.com/SHANIXOFC" },
  { icon: DiscordIcon, label: "Discord", url: "https://discord.gg/9U8Uu5aQPp" },
  { icon: Send, label: "Telegram", url: "https://t.me/@shanixofc" },
  { icon: SpotifyIcon, label: "Spotify", url: "https://open.spotify.com/artist/72E9kEuXfIHx2MpFbLEUlU" },
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
              India&apos;s Phonk pioneer returning to define the next era of internet music. Let&apos;s connect.
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
                SHANIX!
              </span>
              <span className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-xs sm:text-sm mt-2">
                Sharonraj Vasave
              </span>
            </div>
          </FadeIn>

          <FadeIn x={20} y={0} className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-xs sm:text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} SHANIX! &mdash; OFFICIAL PORTFOLIO</p>
            <p className="mt-1">All rights reserved &mdash; Father of Indian Phonk</p>
          </FadeIn>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none w-full text-center">
        <h2 className="hero-heading font-black uppercase tracking-tighter leading-none" style={{ fontSize: "25vw" }}>
          SHANIX!
        </h2>
      </div>
    </footer>
  );
};
