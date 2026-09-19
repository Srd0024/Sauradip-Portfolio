import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#notable-projects" },
    { label: "case studies", href: "#case-studies" },
    { label: "testimonials", href: "#testimonials" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4 pb-2">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Brand name */}
        <a href="#" className="flex items-center gap-1.5 group">
          <span className="font-heading font-extrabold text-xl tracking-tight text-[#111111] lowercase">
            sauradip<span className="text-[#F5A461]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-[#FDE8D7] text-[#E8874A] px-2 py-0.5 rounded-full border border-[#E8874A]/20">
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold lowercase tracking-wide text-neutral-600">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#E8874A] transition-colors relative py-1 hover:font-bold"
            >
              {item.label}.
            </a>
          ))}
        </nav>

        {/* Action pills */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onContactClick}
            id="nav-hire-me-btn"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#E8874A] transition-colors shadow-sm cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire me</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-[#E8874A] rounded-full hover:bg-neutral-200/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-md bg-[#FAF7F2] border border-neutral-300 rounded-3xl p-5 shadow-xl">
          <div className="flex flex-col gap-3 text-sm font-semibold lowercase text-neutral-800">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-[#FDE8D7] hover:text-[#E8874A] transition-colors"
              >
                {item.label}.
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 bg-[#111111] text-white rounded-full text-xs font-bold text-center"
              >
                Hire me 👋
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
