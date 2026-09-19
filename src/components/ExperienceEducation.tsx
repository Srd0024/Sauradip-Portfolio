import React from 'react';
import { CompanyLogo } from './LogosAndIcons';
import { HELMI_EXPERIENCES, HELMI_EDUCATION, HELMI_ACCOLADES } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Card: experience. */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-neutral-300 shadow-2xs">
          {/* Heading: experience. */}
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#111111] tracking-tight lowercase mb-8">
            experience.
          </h2>

          <div className="space-y-6 sm:space-y-7">
            {HELMI_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="flex items-start gap-3.5 sm:gap-4">
                {/* Company Logo Mark */}
                <div className="shrink-0 mt-0.5">
                  <CompanyLogo type={exp.logoType} className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111111] leading-snug">
                    {exp.company} - {exp.role}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5 mb-1.5 font-medium">
                    {exp.date}
                  </p>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: education. & accolades. */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-neutral-300 shadow-2xs flex flex-col justify-between">
          <div>
            {/* Heading: education. */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#111111] tracking-tight lowercase mb-8">
              education.
            </h2>

            <div className="space-y-7 mb-10">
              {/* Item 1: Universitas Pelita Bangsa */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="shrink-0 mt-0.5">
                  <CompanyLogo type="pelita" className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111111] leading-snug">
                      {HELMI_EDUCATION[0].institution}
                    </h3>
                    <span className="text-[10px] font-bold text-white bg-[#F5A461] px-2.5 py-0.5 rounded-full">
                      {HELMI_EDUCATION[0].badge}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5 mb-1 font-medium">
                    {HELMI_EDUCATION[0].date}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {HELMI_EDUCATION[0].details}
                  </p>
                </div>
              </div>

              {/* Item 2: Rakamin Academy */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="shrink-0 mt-0.5">
                  <CompanyLogo type="rakamin" className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111111] leading-snug">
                    {HELMI_EDUCATION[1].institution} - {HELMI_EDUCATION[1].degreeOrProgram}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5 mb-1 font-medium">
                    {HELMI_EDUCATION[1].date}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {HELMI_EDUCATION[1].details}
                  </p>
                </div>
              </div>
            </div>

            {/* Heading: accolades. */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#111111] tracking-tight lowercase mb-3">
              accolades.
            </h2>
            <p className="text-xs sm:text-[13px] text-neutral-600 mb-6 font-medium">
              {HELMI_ACCOLADES[0].title} - {HELMI_ACCOLADES[0].year}
            </p>
          </div>

          {/* Fun Sticker Badge Graphic: "Ohh I forgot, i still Have..." + See on My LinkedIn */}
          <div className="pt-4 border-t border-neutral-100 relative">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200">
              
              {/* Comic Speech Bubble */}
              <div className="flex items-center gap-2">
                <div className="text-blue-600 font-black text-sm font-sans rotate-[-3deg]">
                  <p className="font-extrabold text-sm text-blue-600">Ohh I forgot,</p>
                  <p className="font-extrabold text-xs text-blue-600">i still Have...</p>
                </div>
                <svg viewBox="0 0 40 20" fill="none" className="w-8 h-4 text-blue-500 stroke-current stroke-2">
                  <path d="M4 10h28m-6-6l6 6-6 6" />
                </svg>
              </div>

              {/* LinkedIn Button Sticker */}
              <a 
                href="https://www.linkedin.com/in/sauradip-das-6333b6122/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] text-white text-xs font-bold shadow-md hover:bg-[#084e96] transition-all hover:scale-105"
              >
                <span className="text-[11px] text-blue-100">See on My LinkedIn</span>
                <span className="w-5 h-5 bg-white text-[#0A66C2] rounded font-black flex items-center justify-center text-xs">
                  in
                </span>
              </a>
            </div>

            {/* Small floating sticky tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full">
                1 Experience More
              </span>
              <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full">
                Product Business Development through Project Manager
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
