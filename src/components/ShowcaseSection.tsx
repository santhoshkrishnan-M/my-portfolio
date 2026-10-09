import React from 'react';
import ScrollExpand from './ScrollExpand';
import StarBorder from './StarBorder';

export const ShowcaseSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050608] py-12 overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest block mb-2">
          // Interactive Motion Showcase
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
          CYBERSECURITY & ETHICAL HACKING SPECTRUM
        </h3>
      </div>

      <div className="w-full h-[540px] relative">
        <ScrollExpand
          src="/images/scrollexpand_hero.png"
          alt="Santhosh Krishnan M. — Cybersecurity Silhouette Showcase"
          title="EXPLORE. TEST. SECURE."
          scrollHint="Scroll to expand view"
          useWindowScroll={true}
          mediaZoom={1.3}
          startWidth={45}
          startHeight={65}
          startRadius={24}
          endRadius={0}
          overlayScrim={0.55}
        >
          <div className="max-w-2xl mx-auto text-center p-8 bg-[#050608]/85 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-2 uppercase tracking-tight">
              SANTHOSH KRISHNAN M.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#00E5FF] mb-6 uppercase tracking-wider">
              Aspiring Cybersecurity Professional • Ethical Hacking • Web Security
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <StarBorder
                as="a"
                href="#projects"
                color="#00E5FF"
                trailColor="#2563FF"
                glow={0.8}
                radius={12}
                stars={2}
                className="px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider"
              >
                View Selected Projects
              </StarBorder>

              <StarBorder
                as="a"
                href="#contact"
                color="#2563FF"
                radius={12}
                stars={1}
                className="px-6 py-3 font-mono text-xs font-semibold uppercase"
              >
                Get In Touch
              </StarBorder>
            </div>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
};
