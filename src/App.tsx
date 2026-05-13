import { useEffect } from "react";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { FooterSection } from "./sections/FooterSection";

function App() {
  // Ensure the page starts at the top on reload
  useEffect(() => {
    window.scrollTo(0, 0);
    // Standard practice for handling browser history scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="bg-background text-accent selection:bg-accent selection:text-background">
      <HeroSection />
      <div id="music">
        <MarqueeSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <div id="spotify">
        <ProjectsSection />
      </div>
      <FooterSection />
    </main>
  );
}

export default App;
