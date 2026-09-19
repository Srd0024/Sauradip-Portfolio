import React from 'react';
import { Quote, Sparkles, Star, Linkedin } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full">
      {/* Full-width Black Section Header */}
      <div className="w-full bg-[#111111] text-white py-12 sm:py-16 px-4 sm:px-8 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8874A] mb-2 block">
              / peer & founder recommendations
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight lowercase">
              what others say<span className="text-[#E8874A]">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1 text-[#E8874A]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#E8874A]" />
            ))}
            <span className="text-xs font-mono text-neutral-400 ml-2">5.0 / 5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* 3-Column Grid of Testimonial Cards */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/90 shadow-editorial shadow-editorial-hover relative flex flex-col justify-between h-full"
            >
              <div>
                {/* Large orange quotation mark icon & subtle LinkedIn icon */}
                <div className="mb-5 flex justify-between items-start">
                  <div className="w-10 h-10 rounded-2xl bg-[#FDE8D7] flex items-center justify-center text-[#E8874A]">
                    <Quote className="w-5 h-5 fill-[#E8874A]" />
                  </div>
                  <a href={test.linkedinUrl || "https://linkedin.com"} target="_blank" rel="noreferrer" aria-label="LinkedIn Review">
                    <Linkedin className="w-5 h-5 text-neutral-300 hover:text-[#0A66C2] transition-colors" />
                  </a>
                </div>

                {/* Testimonial text */}
                <p className="font-body text-sm sm:text-[15px] text-neutral-700 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E8874A]/30 shadow-xs shrink-0">
                  <img
                    src={test.avatarUrl}
                    alt={test.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#111111] leading-tight">
                    {test.author}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-medium leading-snug mt-0.5 line-clamp-2">
                    {test.role} {test.company && <><span className="mx-1">•</span><span className="font-bold text-neutral-700">{test.company}</span></>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
