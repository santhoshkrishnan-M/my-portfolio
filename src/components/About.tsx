import React from 'react';
import { Terminal, ShieldCheck, Cpu, BookOpen, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo, focusAreas } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Layout Matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Tag */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-4 w-fit">
              <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
                Profile Overview
              </span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase mb-2">
              ABOUT
            </h2>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm text-[#00E5FF] hover:underline mb-8 inline-block"
            >
              {personalInfo.email}
            </a>

            <div className="space-y-6 text-[#9CA3AF] font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                I'm a <strong className="text-white font-semibold">Computer Science and Engineering student at SNS College of Technology</strong> with a growing interest in cybersecurity and ethical hacking. I enjoy understanding how systems work, exploring security tools, and building practical software projects.
              </p>
              <p>
                My current focus is strengthening my programming fundamentals, learning web application security testing, and developing the practical skills required for a cybersecurity career.
              </p>
            </div>

            {/* Bottom Location Indicator matching Reference UI */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 font-mono text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#00E5FF]" />
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#2563FF]" />
                <span>SNS College of Technology (2024–2028)</span>
              </div>
            </div>
          </div>

          {/* Right Column: User's Photo with Dark Atmosphere Gradient (Matching Reference Image) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              {/* Santhosh's Portrait Photo */}
              <img
                src="/images/santhosh.jpg"
                alt="Santhosh Krishnan M. — Aspiring Cybersecurity Professional"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />

              {/* Edge Gradient Fades to blend into near-black background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/60 via-transparent to-[#050608]/60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

              {/* Monogram Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#101319]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    Santhosh Krishnan M.
                  </h3>
                  <p className="font-mono text-[11px] text-[#00E5FF]">
                    Cybersecurity & Ethical Hacking
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#00E5FF] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563FF]">
                    {area.number}
                  </span>
                  {area.number === '01' && <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />}
                  {area.number === '02' && <BookOpen className="w-6 h-6 text-[#2563FF]" />}
                  {area.number === '03' && <Cpu className="w-6 h-6 text-[#8B5CF6]" />}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 font-sans">
                  {area.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 text-[#F5F7FA] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
