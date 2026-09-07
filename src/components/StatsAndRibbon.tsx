import React from 'react';
import { HELMI_STATS, HELMI_SKILLS_RIBBON } from '../data/portfolioData';

export const StatsAndRibbon: React.FC = () => {
  return (
    <div className="w-full z-20">
      {/* 1. Full-Width Black Horizontal Stats Strip */}
      <section id="stats-strip" className="w-full bg-[#111111] text-white py-8 sm:py-10 px-4 sm:px-8 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          


          {/* 1M+ achieved in sales */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
            <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              1M+
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">
              achieved in sales
            </span>
          </div>



          {/* 2+ Years Experience */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
            <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              2+
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">
              Years Experience
            </span>
          </div>

          {/* 5+ Projects Done */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
            <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              5+
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">
              Projects Done
            </span>
          </div>



          {/* 3+ People Recommend Me */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
            <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              3+
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-0.5">
              People Recomen...
            </span>
          </div>

        </div>
      </section>

      {/* 2. Skills Ribbon / Marquee: White band with orange star glyphs */}
      <div className="w-full bg-[#FAF8F5] py-4 border-b border-neutral-300 overflow-hidden shadow-2xs">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...HELMI_SKILLS_RIBBON, ...HELMI_SKILLS_RIBBON, ...HELMI_SKILLS_RIBBON].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-4 text-base sm:text-lg font-heading font-extrabold text-[#111111]">
              <span>{item}</span>
              <span className="text-[#F5A461] text-base inline-block">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
