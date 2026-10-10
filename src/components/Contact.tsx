import React, { useState } from 'react';
import { Terminal, Mail, Copy, Check, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import StarBorder from './StarBorder';
import ScrollReveal from './ScrollReveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please complete all required fields before submitting.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Form validated! Opening your email client to complete transmission...'
      });

      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            LET'S BUILD SOMETHING SECURE.
          </h2>
          <div className="accent-line mt-4" />
          <div className="text-[#9CA3AF] text-base max-w-2xl mt-4 font-sans leading-relaxed">
            <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={2} blurStrength={4}>
              I'm open to cybersecurity internship opportunities, technical collaborations, and conversations about security, software engineering, and practical learning.
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Feature */}
            <div className="p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2563FF]/20 border border-[#2563FF]/40 flex items-center justify-center text-[#00E5FF]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#9CA3AF] block uppercase">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm sm:text-base text-white font-semibold hover:text-[#00E5FF] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <StarBorder
                  as="a"
                  href={`mailto:${personalInfo.email}`}
                  color="#2563FF"
                  radius={12}
                  className="flex-1 text-center py-2.5 text-xs font-mono font-semibold"
                >
                  Send Email
                </StarBorder>

                <StarBorder
                  as="button"
                  onClick={handleCopyEmail}
                  color={copied ? '#10B981' : '#00E5FF'}
                  radius={12}
                  className="py-2.5 px-4 text-xs font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00E5FF]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </StarBorder>
              </div>
            </div>

            {/* Social Link Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <LinkedinIcon className="w-6 h-6 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[10px] text-[#9CA3AF]">LinkedIn</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00E5FF] transition-colors">
                    Santhosh Krishnan M.
                  </h4>
                  <span className="font-mono text-xs text-[#9CA3AF]">Connect on LinkedIn →</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <GithubIcon className="w-6 h-6 text-[#2563FF] group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[10px] text-[#9CA3AF]">GitHub</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00E5FF] transition-colors">
                    santhoshkrishnan-M
                  </h4>
                  <span className="font-mono text-xs text-[#9CA3AF]">View Repositories →</span>
                </div>
              </a>
            </div>

            {/* Location & Status Notice */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between font-mono text-xs text-[#9CA3AF]">
              <span>Location: <strong>Coimbatore, India</strong></span>
              <span className="text-[#00E5FF] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Open to Opportunities
              </span>
            </div>
          </div>

          {/* Interactive Validated Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl glass-panel border border-white/10">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-[#9CA3AF] font-sans mb-8">
              Fill out the form below to transmit a direct message request.
            </p>

            {formStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl border flex items-start gap-3 font-mono text-xs ${
                  formStatus.type === 'error'
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                }`}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-[#F5F7FA] uppercase tracking-wider mb-2">
                  Your Name <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#F5F7FA] uppercase tracking-wider mb-2">
                  Your Email Address <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#F5F7FA] uppercase tracking-wider mb-2">
                  Message <span className="text-[#00E5FF]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Inquire about cybersecurity internships, collaborations, or general inquiries..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors resize-none"
                />
              </div>

              <StarBorder
                as="button"
                type="submit"
                disabled={isSubmitting}
                color="#00E5FF"
                trailColor="#2563FF"
                glow={0.9}
                stars={3}
                radius={12}
                className="w-full py-4 text-xs font-mono font-bold uppercase tracking-wider text-white"
              >
                {isSubmitting ? (
                  <span>Validating Input...</span>
                ) : (
                  <>
                    <span>Transmit Message Request</span>
                    <Send className="w-4 h-4 text-[#00E5FF]" />
                  </>
                )}
              </StarBorder>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
