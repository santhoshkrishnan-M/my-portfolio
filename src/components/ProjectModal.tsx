import React, { useEffect } from 'react';
import { X, ShieldAlert, Cpu, CheckCircle2, Workflow, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#101319] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-[#050608]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex flex-col gap-1 pr-6">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-xl text-[#00E5FF]">
                PROJECT {project.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#2563FF]/20 text-[#00E5FF] font-mono text-[11px]">
                {project.category}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.fullTitle}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Image Banner */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 max-h-80 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101319] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-[#00E5FF]">
              <span className="bg-black/60 px-3 py-1 rounded backdrop-blur border border-white/10">
                STATUS: {project.status}
              </span>
            </div>
          </div>

          {/* Ethical / Research Disclaimer Note */}
          {project.ethicalNote && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  Ethical Use Notice
                </h4>
                <p className="text-xs text-amber-200/90 font-sans leading-relaxed">
                  {project.ethicalNote}
                </p>
              </div>
            </div>
          )}

          {project.note && (
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-1">
                  Project Context & Status
                </h4>
                <p className="text-xs text-[#9CA3AF] font-sans leading-relaxed">
                  {project.note}
                </p>
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#00E5FF]" /> Problem / Need Addressed
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                {project.problemAddressed}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-mono text-xs text-[#2563FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563FF]" /> Proposed Technical Solution
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="font-mono text-xs text-white uppercase tracking-wider mb-3">
              // Detailed Overview
            </h3>
            <p className="text-base text-[#F5F7FA] font-sans leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Workflow Steps if available */}
          {project.workflow && (
            <div>
              <h3 className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Multi-Step Workflow Pipeline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 font-mono text-xs text-[#F5F7FA]"
                  >
                    <span className="w-5 h-5 rounded bg-[#2563FF] text-white flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features list if available */}
          {project.features && (
            <div>
              <h3 className="font-mono text-xs text-white uppercase tracking-wider mb-3">
                Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                    <span className="text-[#00E5FF] font-bold">›</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#8B5CF6]" /> Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#00E5FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#050608] flex items-center justify-between">
          <span className="font-mono text-xs text-[#9CA3AF]">
            Development Status: <strong className="text-white font-normal">{project.status}</strong>
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2563FF] text-white font-mono text-xs font-semibold hover:bg-[#2563FF]/80 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repo
              </a>
            ) : (
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-[#9CA3AF] italic">
                Details & Repo Access Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
