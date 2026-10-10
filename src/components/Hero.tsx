import React from 'react';
import { Shield, Terminal, Sparkles, ExternalLink, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import StarBorder from './StarBorder';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Abstract M87 Black Hole Visual Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] sm:w-[48rem] sm:h-[48rem] pointer-events-none z-0">
        {/* Accretion Disk Ring 1 */}
        <div className="absolute inset-0 rounded-full border border-[#00E5FF]/20 animate-black-hole" />
        {/* Accretion Disk Ring 2 */}
        <div className="absolute inset-6 rounded-full border border-[#2563FF]/30 animate-radar opacity-60" />
        {/* Core Photon Sphere */}
        <div className="absolute inset-28 sm:inset-36 rounded-full bg-gradient-to-tr from-[#050608] via-[#101319] to-[#050608] border border-[#00E5FF]/40 shadow-[0_0_100px_rgba(37,99,255,0.4)] flex items-center justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-black shadow-[inset_0_0_50px_rgba(0,229,255,0.5)] border border-white/5 opacity-90" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101319]/80 border border-[#00E5FF]/30 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(0,229,255,0.15)] animate-pulse-glow">
          <Shield className="w-4 h-4 text-[#00E5FF]" />
          <span className="font-mono text-xs text-[#F5F7FA] font-medium tracking-wide">
            {personalInfo.availability}
          </span>
        </div>

        {/* Oversized Dramatic Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5F7FA] to-[#9CA3AF] mb-8 select-none">
          EXPLORE.<br />
          <span className="text-shimmer">
            TEST.
          </span><br />
          SECURE.
        </h1>

        {/* Supporting Bio Text */}
        <p className="max-w-2xl text-base sm:text-lg text-[#9CA3AF] font-sans font-normal leading-relaxed mb-10 text-balance">
          I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Computer Science and Engineering student building my skills in cybersecurity, ethical hacking, and secure digital systems.
        </p>

        {/* CTA Buttons with StarBorder */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <StarBorder
            as="a"
            href="#projects"
            color="#00E5FF"
            trailColor="#2563FF"
            glow={0.9}
            radius={14}
            stars={3}
            thickness={2}
            className="w-full sm:w-auto px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold"
          >
            <span>Explore My Projects</span>
            <Terminal className="w-4 h-4 text-[#00E5FF]" />
          </StarBorder>

          <StarBorder
            as="a"
            href="#contact"
            color="#2563FF"
            trailColor="#8B5CF6"
            glow={0.7}
            radius={14}
            stars={2}
            thickness={1.5}
            className="w-full sm:w-auto px-8 py-4 font-mono text-sm uppercase tracking-wider font-semibold"
          >
            <span>Let's Connect</span>
            <ExternalLink className="w-4 h-4 text-[#00E5FF]" />
          </StarBorder>
        </div>

        {/* Technical Taxonomy Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl opacity-80">
          <span className="font-mono text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#9CA3AF] flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-[#00E5FF]" /> Python & C Programming
          </span>
          <span className="font-mono text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#9CA3AF] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#2563FF]" /> Ethical Hacking Fundamentals
          </span>
          <span className="font-mono text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#9CA3AF] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" /> Web App Security Testing
          </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-[#00E5FF] transition-colors group cursor-pointer"
        aria-label="Scroll to About Me section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-[#00E5FF]/50 transition-colors">
          <div className="w-1.5 h-3 rounded-full bg-[#00E5FF] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
