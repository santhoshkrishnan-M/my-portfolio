import React from 'react';
import { Terminal, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
              Academic Background
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            THE FOUNDATION
          </h2>
          <div className="accent-line mt-4" />
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap className="w-48 h-48 text-[#00E5FF]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#00E5FF] font-mono text-xs mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{personalInfo.education.period}</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
                {personalInfo.education.degree}
              </h3>

              <div className="flex items-center gap-2 text-base text-[#00E5FF] font-sans font-medium">
                <GraduationCap className="w-5 h-5 text-[#00E5FF]" />
                <span>{personalInfo.education.institution}</span>
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <span className="font-mono text-xs text-[#9CA3AF] mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" /> {personalInfo.education.location}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#F5F7FA]">
                Status: {personalInfo.education.status}
              </span>
            </div>
          </div>

          {/* Academic Focus Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-[#9CA3AF]">
              <span className="text-[#00E5FF] font-bold block mb-1">01. Core CS Fundamentals</span>
              <span>Data Structures, Operating Systems, Computer Networks & Programming</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-[#9CA3AF]">
              <span className="text-[#2563FF] font-bold block mb-1">02. Security Studies</span>
              <span>Network Security, Vulnerability Analysis, Web App Testing & Hacking Labs</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-[#9CA3AF]">
              <span className="text-[#8B5CF6] font-bold block mb-1">03. Project Engineering</span>
              <span>Multi-agent Workflows, RAG Architecture & Python Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
