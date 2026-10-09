import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import StarBorder from './StarBorder';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Milestones', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050608]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 via-[#2563FF]/30 to-[#8B5CF6]/20 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Shield className="w-5 h-5 text-[#00E5FF] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wider text-white flex items-center gap-1.5">
                SANTHOSH KRISHNAN M.
                <span className="inline-block w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              </span>
              <span className="font-mono text-[10px] text-[#9CA3AF] tracking-tight uppercase">
                Ethical Hacking & Security
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2563FF] text-white font-medium shadow-[0_0_12px_rgba(37,99,255,0.5)]'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Availability Badge & Connect StarBorder Action */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              <span className="font-mono text-[11px] text-[#00E5FF] tracking-wider uppercase">
                Internship Open
              </span>
            </div>

            <StarBorder
              as="a"
              href="#contact"
              color="#00E5FF"
              trailColor="#2563FF"
              glow={0.8}
              radius={12}
              stars={2}
              thickness={1.5}
              className="font-mono text-xs text-white"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4 text-[#00E5FF]" />
            </StarBorder>
          </div>

          {/* Mobile Menu Button with StarBorder */}
          <StarBorder
            as="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            color="#00E5FF"
            radius={10}
            glow={0.5}
            stars={1}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </StarBorder>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#050608]/95 border-b border-white/10 backdrop-blur-xl p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Terminal className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">
                {personalInfo.availability}
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-mono text-[#F5F7FA] hover:bg-white/10 hover:text-[#00E5FF] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#9CA3AF]">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <StarBorder
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                color="#00E5FF"
                radius={12}
                className="w-full text-center py-2.5 text-xs font-mono"
              >
                LinkedIn Profile
              </StarBorder>
              <StarBorder
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                color="#2563FF"
                radius={12}
                className="w-full text-center py-2.5 text-xs font-mono"
              >
                GitHub Profile
              </StarBorder>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
