import React from 'react';
import { Quote, Sparkles, Star } from 'lucide-react';
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

      {/* 2-Column Grid of Testimonial Cards */}
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white p-8 sm:p-10 rounded-[30px] border border-neutral-200/90 shadow-editorial shadow-editorial-hover relative flex flex-col justify-between"
            >
              <div>
                {/* Large orange quotation mark icon */}
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDE8D7] flex items-center justify-center text-[#E8874A]">
                    <Quote className="w-6 h-6 fill-[#E8874A]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#E8874A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E8874A]" />
                    ))}
                  </div>
                </div>

                {/* 2–3 sentence testimonial text */}
                <p className="font-body text-base sm:text-lg text-neutral-800 leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info with small circular headshot, name, title/role */}
              <div className="pt-6 border-t border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8874A] shadow-xs shrink-0">
                  <img
                    src={test.avatarUrl}
                    alt={test.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#111111]">
                    {test.author}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
                    {test.role}, <span className="font-bold text-neutral-700">{test.company}</span>
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
