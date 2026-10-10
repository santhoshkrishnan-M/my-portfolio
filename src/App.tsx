import { useState, useEffect } from 'react';
import PixelBlast from './components/PixelBlast';
import { GlyphStream } from './components/GlyphStream';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseSection } from './components/ShowcaseSection';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] relative selection:bg-[#2563FF]/30 selection:text-[#00E5FF]">
      {/* PixelBlast Full-Site Background */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <PixelBlast
          variant="circle"
          pixelSize={5}
          color="#1e4fd8"
          patternScale={3.2}
          patternDensity={1.2}
          pixelSizeJitter={0.45}
          enableRipples={false}
          liquid={false}
          speed={0.35}
          edgeFade={0.2}
          transparent={true}
          style={{ opacity: 0.45, pointerEvents: 'none' }}
        />
      </div>

      {/* React Bits Pro Glyph Stream Cursor & Splash Effect */}
      <GlyphStream />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <ShowcaseSection />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
