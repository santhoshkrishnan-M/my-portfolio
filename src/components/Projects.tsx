import React, { useState } from 'react';
import { Terminal, ArrowUpRight, ShieldAlert, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import StarBorder from './StarBorder';
import ScrollReveal from './ScrollReveal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Multi-Agent AI', 'Fintech & AI', 'AI & RAG', 'Cybersecurity', 'Workflow Automation', 'Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3 w-fit">
              <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
                Technical Work
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              SELECTED PROJECTS
            </h2>
            <div className="accent-line mt-4" />
          </div>

          <div className="text-[#9CA3AF] text-sm max-w-md mt-4 md:mt-0 font-sans">
            <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={2} blurStrength={4}>
              Displaying six confirmed technical projects across cybersecurity, artificial intelligence, supply chain orchestration, and workflow automation.
            </ScrollReveal>
          </div>
        </div>

        {/* Category Filter Chips using StarBorder */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <StarBorder
              key={cat}
              as="button"
              onClick={() => setActiveCategory(cat)}
              color={activeCategory === cat ? '#00E5FF' : '#2563FF'}
              trailColor={activeCategory === cat ? '#2563FF' : '#101319'}
              glow={activeCategory === cat ? 0.8 : 0.2}
              radius={12}
              stars={activeCategory === cat ? 2 : 1}
              thickness={1.5}
              className={`px-4 py-2 font-mono text-xs transition-all ${
                activeCategory === cat ? 'text-white font-bold' : 'text-[#9CA3AF]'
              }`}
            >
              {cat}
            </StarBorder>
          ))}
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl glass-panel glass-panel-hover border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div>
                {/* Image Container with Zoom & Overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-[#050608]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101319] via-transparent to-transparent opacity-90" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-display font-black text-2xl text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur border border-white/10 text-[#00E5FF] font-mono text-[10px] font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button with StarBorder */}
                  <div className="absolute inset-0 bg-[#2563FF]/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <StarBorder
                      as="span"
                      color="#00E5FF"
                      radius={12}
                      stars={2}
                      glow={0.9}
                      className="px-4 py-2 font-mono text-xs text-[#00E5FF] font-bold"
                    >
                      <Eye className="w-4 h-4" /> View Details
                    </StarBorder>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00E5FF] transition-colors leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#9CA3AF]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#9CA3AF] font-sans leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Ethical / Status Alert Banner */}
                  {project.ethicalNote && (
                    <div className="mb-4 px-2.5 py-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{project.ethicalNote}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Tech Labels */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#F5F7FA]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF]">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#9CA3AF] text-[11px]">Explore Architecture</span>
                  <span className="text-[#00E5FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
