import React from 'react';
import { Terminal, Code2, ShieldCheck, Cpu, Brain, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#101319]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
              Technical Stack
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            TOOLS & TECHNOLOGIES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2563FF] to-[#00E5FF] mt-4 rounded-full" />
          <p className="text-[#9CA3AF] text-sm max-w-xl mt-4 font-sans">
            An honest taxonomy of tools, programming languages, security software, and frameworks I am actively learning and applying in projects.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#00E5FF]">
                      {idx === 0 && <Code2 className="w-5 h-5" />}
                      {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                      {idx === 2 && <Terminal className="w-5 h-5" />}
                      {idx === 3 && <Cpu className="w-5 h-5" />}
                      {idx === 4 && <Brain className="w-5 h-5" />}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:bg-white/10 hover:border-white/10 transition-all"
                    >
                      <span className="font-sans font-medium text-sm text-[#F5F7FA] flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        {skill.name}
                      </span>

                      {skill.level && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                          {skill.level}
                        </span>
                      )}

                      {skill.tag && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#2563FF]/10 text-[#2563FF] border border-[#2563FF]/20">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span>Status</span>
                <span className="text-[#00E5FF]">Continuous Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
