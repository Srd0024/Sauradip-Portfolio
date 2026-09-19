import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HELMI_HERO } from '../data/portfolioData';

interface HeroSectionProps {
  onPortfolioClick: () => void;
  onHireMeClick: () => void;
}

// Multilingual cycling greetings exactly matching the attached video:
// 00:00 "Hello!" -> 00:01 "Horas" -> 00:02 "Ciao" -> 00:03 "नमस्ते" -> 00:04 "你好" -> 00:05 "Hello!" -> 00:06 "Hola" -> 00:07 "Bonjour"
const VIDEO_GREETINGS = HELMI_HERO.greetings;

export const HeroSection: React.FC<HeroSectionProps> = ({ onPortfolioClick, onHireMeClick }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Cycle through greetings every 1.3s just like in the video
  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % VIDEO_GREETINGS.length);
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-12 sm:pt-16 md:pt-20 pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      
      {/* 1. Top Cycling Multilingual Greeting Pill + 3 Orange Radiating Doodles */}
      <div className="relative inline-flex flex-col items-center mb-5 sm:mb-6">
        {/* 3 Curved orange doodle lines radiating above the pill */}
        <svg
          viewBox="0 0 60 20"
          fill="none"
          className="w-16 h-6 sm:w-20 sm:h-7 text-[#F5A461] mb-2 stroke-current stroke-[3] stroke-linecap-round pointer-events-none"
        >
          {/* Left curved stroke */}
          <path d="M16 16C15 10 11 5 6 3" />
          {/* Center vertical stroke */}
          <path d="M30 16L30 3" />
          {/* Right curved stroke */}
          <path d="M44 16C45 10 49 5 54 3" />
        </svg>

        {/* The Greeting Pill with smooth text transition */}
        <div className="min-w-[120px] sm:min-w-[140px] h-9 sm:h-11 px-6 sm:px-8 rounded-full border border-neutral-300/90 bg-white/90 backdrop-blur-xs text-sm sm:text-base font-bold text-neutral-800 tracking-wide shadow-2xs flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={VIDEO_GREETINGS[greetingIndex]}
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="inline-block"
            >
              {VIDEO_GREETINGS[greetingIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Headline: "I'm Sauradip 🖐️," + "A Performance Marketer & Automation Builder" */}
      <div className="relative mb-6 sm:mb-8 max-w-4xl mx-auto">
        
        {/* Line 1: "I'm Sauradip 🖐️," */}
        <div className="relative inline-flex items-center justify-center flex-wrap gap-x-2.5">
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] tracking-tight leading-none inline-flex items-center">
            <span>I'm </span>
            <span className="text-[#F5A461] ml-2">Sauradip</span>
          </h1>

          {/* Waving Hand with 3 orange radiating doodle rays above it */}
          <div className="relative inline-flex items-center">
            {/* 3 Radiating Orange Doodle Rays above the hand */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-none">
              <svg
                viewBox="0 0 32 18"
                fill="none"
                className="w-7 h-3.5 text-[#F5A461] stroke-current stroke-[2.5] stroke-linecap-round"
              >
                <path d="M6 14L2 4" />
                <path d="M16 14L16 2" />
                <path d="M26 14L30 4" />
              </svg>
            </div>

            {/* Hand Emoji with subtle waving animation */}
            <span className="text-3xl sm:text-5xl md:text-6xl inline-block origin-bottom-right animate-wave select-none ml-1">
              🖐️
            </span>
            <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-none">
              ,
            </span>
          </div>
        </div>

        {/* Line 2: "A Performance Marketer & Automation Builder" */}
        <div className="relative mt-1 sm:mt-2">
          {/* Two small diagonal orange doodle strokes '//' under 'A Brand' on the left */}
          <div className="absolute -left-6 sm:-left-8 top-1 hidden sm:block pointer-events-none">
            <svg
              viewBox="0 0 28 28"
              fill="none"
              className="w-6 h-6 text-[#F5A461] stroke-current stroke-[2.5] stroke-linecap-round"
            >
              <path d="M6 22L16 6" />
              <path d="M14 22L24 6" />
            </svg>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-tight">
            {HELMI_HERO.role}
          </h2>
        </div>
      </div>

      {/* 3. Center Portrait Stage + Floating Badges + Left Pull-Quote + Right Metric */}
      <div className="relative w-full max-w-5xl xl:max-w-6xl my-2 sm:my-6 flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
        


        {/* Center Portrait with Soft-Orange Semicircle / Arch */}
        <div className="relative flex flex-col items-center justify-end w-full">

          {/* Portrait Cutout and Badges Wrapper */}
          <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex items-end justify-center overflow-visible mx-auto">
            <img
              src={HELMI_HERO.heroPhoto}
              alt="Sauradip - Brand & Marketing Specialist"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl z-10"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
            />

            {/* 4 Floating Black Badges exactly matching the video */}
            {/* 1. Top-Left: [ 📢 Marketing ] */}
            <div className="absolute top-[18%] sm:top-[22%] left-[2%] sm:left-[8%] md:left-[12%] z-20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#111111] text-white text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 animate-float-1 cursor-default">
              <span>📢</span>
              <span>Marketing</span>
            </div>

            {/* 2. Mid-Left: [ ⚙️ Automation ] */}
            <div className="absolute bottom-[35%] sm:bottom-[40%] -left-[2%] sm:left-[2%] md:left-[8%] z-20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#111111] text-white text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 animate-float-2 cursor-default">
              <span>⚙️</span>
              <span>Automation</span>
            </div>

            {/* 3. Top-Right: [ 🚀 Ads ] */}
            <div className="absolute top-[25%] sm:top-[28%] right-[2%] sm:right-[8%] md:right-[12%] z-20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#111111] text-white text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 animate-float-3 cursor-default">
              <span>🚀</span>
              <span>Ads</span>
            </div>

            {/* 4. Bottom-Right: [ 📞 Social Media ] */}
            <div className="absolute bottom-[25%] sm:bottom-[30%] -right-[2%] sm:right-[2%] md:right-[8%] z-20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#111111] text-white text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 animate-float-4 cursor-default">
              <span>📞</span>
              <span>Social Media</span>
            </div>
          </div>

          {/* Center Bottom: Dual Capsule Action Button [ Portfolio ↗ | Hire me ] */}
          <div className="z-30 -mt-6 sm:-mt-8 inline-flex items-center p-1 rounded-full bg-[#1E1E1E] text-white shadow-xl border border-neutral-800">
            <button
              onClick={onPortfolioClick}
              className="px-5 py-2 rounded-full bg-[#F5A461] hover:bg-[#D86D2C] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              <span>Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onHireMeClick}
              className="px-5 py-2 text-xs sm:text-sm font-bold text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              Hire me
            </button>
          </div>

        </div>

        {/* Right Side: Stat Callout */}
        <div className="hidden lg:flex flex-col items-center text-center max-w-[210px] xl:max-w-[230px] absolute right-2 xl:right-4 top-1/2 -translate-y-1/2 p-2">
          <div className="font-heading font-black text-3xl xl:text-4xl text-[#111111] leading-none mb-1">
            2+ Years
          </div>
          <p className="text-xs text-neutral-600 font-medium leading-tight">
            Experience in Marketing
          </p>
        </div>

      </div>

      {/* Mobile Stat View for responsive screens */}
      <div className="lg:hidden w-full max-w-[200px] mt-6 mx-auto text-center">
        <div className="p-4 bg-white rounded-2xl border border-neutral-200 shadow-2xs flex flex-col items-center justify-center">
          <span className="font-heading font-black text-2xl text-[#111111]">2+ Years</span>
          <span className="text-[11px] text-neutral-500 font-medium mt-1">Experience in Marketing</span>
        </div>
      </div>

    </section>
  );
};
