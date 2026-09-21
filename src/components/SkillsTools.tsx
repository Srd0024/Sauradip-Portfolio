import React from 'react';
import { ToolAppIcon, CompanyLogo } from './LogosAndIcons';
import { HELMI_SKILLS_PILLS, HELMI_TOOLS, HELMI_CERTIFICATIONS } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* 1. *skills. Section with Orange Doodles and 2 Rows of Rounded Pill Badges */}
      <div className="flex flex-col items-center text-center my-12">
        
        {/* Heading: *skills. with orange doodle strokes on left and right */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
          {/* Left curved orange doodles */}
          <svg viewBox="0 0 35 30" fill="none" className="w-7 sm:w-9 h-6 sm:h-8 text-[#F5A461] stroke-current stroke-[3] stroke-linecap-round">
            <path d="M28 4C18 6 10 14 12 26" />
            <path d="M20 10C12 12 6 18 8 26" />
          </svg>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight lowercase">
            *skills.
          </h2>

          {/* Right curved orange doodles */}
          <svg viewBox="0 0 35 30" fill="none" className="w-7 sm:w-9 h-6 sm:h-8 text-[#F5A461] stroke-current stroke-[3] stroke-linecap-round">
            <path d="M7 4C17 6 25 14 23 26" />
            <path d="M15 10C23 12 29 18 27 26" />
          </svg>
        </div>

        {/* Two Rows of Rounded Border Pill Tags */}
        <div className="flex flex-col items-center gap-3 max-w-4xl">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {HELMI_SKILLS_PILLS.row1.map((pill, idx) => (
              <div
                key={idx}
                className="px-5 sm:px-6 py-2 rounded-full border border-neutral-400/80 bg-white/70 text-xs sm:text-sm font-bold text-[#111111] shadow-2xs hover:border-[#F5A461] transition-colors"
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {HELMI_SKILLS_PILLS.row2.map((pill, idx) => (
              <div
                key={idx}
                className="px-5 sm:px-6 py-2 rounded-full border border-neutral-400/80 bg-white/70 text-xs sm:text-sm font-bold text-[#111111] shadow-2xs hover:border-[#F5A461] transition-colors"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. Side-by-Side Cards: tools. & certification. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-12">
        
        {/* Left Card: tools. */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-neutral-300 shadow-2xs">
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#111111] tracking-tight lowercase mb-8">
            tools.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HELMI_TOOLS.map((cat) => (
              <div key={cat.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200/80 flex flex-col justify-between">
                <div>
                  {/* Top Icons Row */}
                  <div className="flex items-center gap-2.5 mb-3">
                    {cat.icons.map((icon, iIdx) => (
                      <ToolAppIcon key={iIdx} type={icon.type} />
                    ))}
                  </div>

                  {/* Category Title */}
                  <h3 className="font-heading font-extrabold text-xs sm:text-[13px] text-[#111111] mb-2 leading-tight">
                    {cat.category}
                  </h3>

                  {/* Bulleted List */}
                  <div className="space-y-1 text-[11px] text-neutral-600 font-medium">
                    {cat.bullets.map((bullet, bIdx) => (
                      <p key={bIdx}>{bullet}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: certification. */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-neutral-300 shadow-2xs">
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#111111] tracking-tight lowercase mb-8">
            certification.
          </h2>

          <div className="space-y-6">
            {HELMI_CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="flex items-start gap-3.5 sm:gap-4">
                <div className="shrink-0 mt-0.5">
                  <CompanyLogo type={cert.logoType} className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111111] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 mt-0.5 font-medium">
                    {cert.provider}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1 font-medium">
                    {cert.date}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5 font-medium">
                    Credential ID {cert.credentialId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
