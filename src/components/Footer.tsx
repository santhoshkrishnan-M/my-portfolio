import React from 'react';
import { ArrowUp, Shield, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import StarBorder from './StarBorder';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2563FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                {personalInfo.name}
              </h4>
              <p className="font-mono text-xs text-[#9CA3AF]">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-[#9CA3AF]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00E5FF] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00E5FF] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#00E5FF] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          {/* Back to Top with StarBorder */}
          <StarBorder
            as="button"
            onClick={scrollToTop}
            color="#00E5FF"
            radius={12}
            stars={1}
            glow={0.6}
            className="font-mono text-xs text-white"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#00E5FF]" />
          </StarBorder>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9CA3AF]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-[#9CA3AF]/80">
            Crafted for Cybersecurity Internship & Entry-Level Opportunities • Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
};
