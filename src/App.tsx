import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsAndRibbon } from './components/StatsAndRibbon';
import { AboutSection } from './components/AboutSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { SkillsTools } from './components/SkillsTools';
import { NotableProjects } from './components/NotableProjects';
import { CaseStudies } from './components/CaseStudies';
import { PersonalProjects } from './components/PersonalProjects';
import { Testimonials } from './components/Testimonials';
import { SupportingDocuments } from './components/SupportingDocuments';
import { ClosingCTA } from './components/ClosingCTA';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] flex flex-col relative selection:bg-[#E8874A] selection:text-white">
      {/* Sticky floating navigation */}
      <Navbar
        onContactClick={() => window.location.href = 'mailto:sauradip.work@gmail.com'}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onPortfolioClick={() => handleScrollToSection('notable-projects')}
          onHireMeClick={() => window.location.href = 'mailto:sauradip.work@gmail.com'}
        />

        {/* 2. Stats Strip + 3. Skills Ribbon */}
        <StatsAndRibbon />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Experience & Education (two-column) + Accolades */}
        <ExperienceEducation />

        {/* 6. Skills, Tools & Certifications */}
        <SkillsTools />

        {/* 7. Notable Projects (numbered case studies with pastel 2x2 grid) */}
        <NotableProjects
          onSelectCaseStudy={() => handleScrollToSection('case-studies')}
        />

        {/* 8. Deep-Dive Case Studies (overlapping mockups, black result tiles, strategy band) */}
        <CaseStudies />

        {/* 9. Personal Projects (deep purple/navy accent, mockup + result tiles) */}
        <PersonalProjects />

        {/* 10. Testimonials ("what others say") */}
        <Testimonials />

        {/* 11. Supporting Documents (certificates + teal award recognition slides) */}
        <SupportingDocuments />

        {/* 12. Closing CTA / Footer */}
        <ClosingCTA />
      </main>
    </div>
  );
}
