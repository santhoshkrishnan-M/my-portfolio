import React from 'react';
import { Terminal, Trophy, Star, Users, Presentation } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#101319]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
              Honors & Activities
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            MILESTONES
          </h2>
          <div className="accent-line mt-4" />
          <div className="max-w-xl mt-4">
            <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={2} blurStrength={4}>
              Recognitions in hackathons, paper presentations, ideathons, and technical community volunteering.
            </ScrollReveal>
          </div>
        </div>

        {/* Milestones Horizontal Timeline / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563FF]/20 to-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                    {item.type === 'Hackathon' && <Trophy className="w-6 h-6" />}
                    {item.type === 'Ideathon' && <Star className="w-6 h-6 text-amber-400" />}
                    {item.type === 'Paper Presentation' && <Presentation className="w-6 h-6 text-[#8B5CF6]" />}
                    {item.type === 'Volunteering' && <Users className="w-6 h-6 text-[#00E5FF]" />}
                  </div>

                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E5FF]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-[#2563FF] mb-4">
                  {item.organization}
                </p>

                <p className="text-xs text-[#9CA3AF] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Footer Role Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-[#9CA3AF]">Role:</span>
                <span className="text-white font-medium">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
