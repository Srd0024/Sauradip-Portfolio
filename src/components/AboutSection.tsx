import React from 'react';
import { HELMI_HERO, HELMI_ABOUT } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Huge Lowercase Heading: "about." */}
      <div className="mb-10 sm:mb-12">
        <h2 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight lowercase">
          {HELMI_ABOUT.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Bio Paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-neutral-800 font-sans text-sm sm:text-base md:text-[17px] leading-relaxed">
          {HELMI_ABOUT.paragraphs.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {/* Right Column: Photo */}
        <div className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[550px] h-auto flex items-center justify-center z-10 -translate-y-8 lg:-translate-y-20 xl:-translate-y-28 lg:-ml-6">
            <img
              src={HELMI_HERO.aboutPhoto}
              alt="About Photo"
              className="w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-125"
            />
          </div>
        </div>

      </div>

    </section>
  );
};
