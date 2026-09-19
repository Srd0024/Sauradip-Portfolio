import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Twitter, Copy, Check, Send, Sparkles, Heart, ArrowUp } from 'lucide-react';

interface ClosingCTAProps {
  isContactModalOpen?: boolean;
  onCloseContactModal?: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "sauradip.work@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#FAF7F2] border-t border-neutral-300">
      
      {/* Big Closing CTA Section */}
      <div className="max-w-5xl mx-auto py-24 sm:py-32 px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Friendly Emoji / Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FDE8D7] border-2 border-[#E8874A]/40 flex items-center justify-center text-3xl sm:text-4xl shadow-md mb-6 animate-bounce">
          👋
        </div>

        {/* Large "thank you!" heading */}
        <h2 className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight lowercase mb-4">
          thank you<span className="text-[#E8874A]">!</span>
        </h2>

        {/* "Looking forward to working with you" subtext */}
        <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-neutral-700 max-w-2xl leading-snug mb-8">
          Looking forward to working with you<span className="text-[#E8874A]">.</span>
        </p>

        <p className="font-body text-sm sm:text-base text-neutral-600 max-w-lg mb-10 leading-relaxed">
          Whether you're scaling a high-growth venture, redesigning a complex digital product, or seeking a growth design advisor, let's craft something remarkable.
        </p>

        {/* Primary Email Pill with 1-Click Copy */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm sm:text-base hover:bg-[#E8874A] transition-all flex items-center gap-2.5 shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#F5A461]" />
            <span>{email}</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-neutral-300 ml-1">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>

          <a
            href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`}
            className="px-6 py-3.5 rounded-full border-2 border-[#111111] text-[#111111] font-bold text-sm sm:text-base hover:bg-[#111111] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Send Email ↗</span>
          </a>
        </div>

        {/* Row of Contact Icons / Links: LinkedIn, Instagram/TikTok, Email */}
        <div className="flex items-center gap-4 flex-wrap justify-center relative z-20">
          <a
            href="https://www.linkedin.com/in/sauradip-das-6333b6122/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#E8874A] hover:border-[#E8874A] hover:scale-110 transition-all shadow-xs"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#E8874A] hover:border-[#E8874A] hover:scale-110 transition-all shadow-xs"
            aria-label="Instagram or TikTok"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>



      </div>

      {/* Simple dark footer bar with location and copyright */}
      <div className="w-full bg-[#0A0A0A] text-white py-8 px-4 sm:px-8 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5A461]" />
            <span>Based in Assam, India</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Sauradip Das. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
