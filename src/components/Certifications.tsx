import React, { useState } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import StarBorder from './StarBorder';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Certification' | 'Course' | 'Job Simulation'>('All');

  const filteredCerts = activeTab === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeTab);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3 w-fit">
              <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
                Continuous Education
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              LEARNING & CERTIFICATIONS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563FF] to-[#00E5FF] mt-4 rounded-full" />
          </div>

          <p className="text-[#9CA3AF] text-sm max-w-md mt-4 md:mt-0 font-sans">
            Verified course completions, technical certifications, and hands-on industry job simulations.
          </p>
        </div>

        {/* Category Selector with StarBorder */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-white/10 pb-6">
          {(['All', 'Certification', 'Course', 'Job Simulation'] as const).map((tab) => (
            <StarBorder
              key={tab}
              as="button"
              onClick={() => setActiveTab(tab)}
              color={activeTab === tab ? '#00E5FF' : '#2563FF'}
              trailColor={activeTab === tab ? '#2563FF' : '#101319'}
              glow={activeTab === tab ? 0.8 : 0.2}
              radius={12}
              stars={activeTab === tab ? 2 : 1}
              thickness={1.5}
              className={`px-4 py-2 font-mono text-xs transition-all ${
                activeTab === tab ? 'text-white font-bold' : 'text-[#9CA3AF]'
              }`}
            >
              {tab === 'All' ? 'All Credentials' : `${tab}s`}
            </StarBorder>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-[#00E5FF] font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#2563FF]/20 text-[#2563FF] border border-[#2563FF]/30">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#9CA3AF] font-sans leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-[#9CA3AF] text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" /> Completed & Verified
                </span>
                <span className="text-white/40 text-[10px]">Honest Record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
