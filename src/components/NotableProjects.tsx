import React, { useState } from 'react';
import { Share2, Target, TrendingUp, Sparkles, ExternalLink, X, ChevronRight, Check } from 'lucide-react';
import { CompanyLogo } from './LogosAndIcons';
import { HELMI_NOTABLE_PROJECTS, NotableProjectItem } from '../data/portfolioData';

interface NotableProjectsProps {
  onSelectCaseStudy?: () => void;
}

export const NotableProjects: React.FC<NotableProjectsProps> = ({ onSelectCaseStudy }) => {
  const [activeProject, setActiveProject] = useState<NotableProjectItem | null>(null);

  return (
    <section id="notable-projects" className="w-full pt-16 pb-24">
      
      {/* 1. Full-Width Dark Band: "00 notable Projects" */}
      <div className="w-full bg-[#1E1E1E] text-white py-10 sm:py-14 px-4 sm:px-8 mb-12 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
          
          {/* Outlined "00" numerals */}
          <span
            className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-transparent tracking-tighter"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)'
            }}
          >
            00
          </span>

          {/* Heading: notable Projects */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight flex items-baseline gap-2">
            <span>notable</span>
            <span className="italic font-bold font-serif text-neutral-100">Projects</span>
          </h2>
        </div>
      </div>

      {/* 2. Grid of Project Cards matching the screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Social Media And Brand Strategy (Kahf) */}
          <div className="bg-[#EAEFF5]/60 hover:bg-[#EAEFF5] border border-neutral-300/80 rounded-[32px] p-6 sm:p-8 transition-all hover:shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <div>
              {/* Header: Title and Client Watermark */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] max-w-[280px] leading-tight">
                  {HELMI_NOTABLE_PROJECTS[0].title}
                </h3>
                
                {/* Kahf Watermark Logo */}
                <span className="text-3xl sm:text-4xl font-serif font-black text-neutral-400/70 tracking-wider">
                  Kahf
                </span>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {HELMI_NOTABLE_PROJECTS[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/80 bg-white text-xs font-semibold text-neutral-800 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sub features with icons */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                      Social Media Strategy
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    +240% Growth
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#E8874A] flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                      TikTok Content & Livestream
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8874A] bg-orange-50 px-2 py-0.5 rounded-md">
                    1.2M Views
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <button
              onClick={() => {
                setActiveProject(HELMI_NOTABLE_PROJECTS[0]);
                onSelectCaseStudy?.();
              }}
              className="w-full py-3.5 rounded-2xl bg-[#111111] hover:bg-[#F5A461] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Case Study</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Project 2: Business And Growth Strategy (Kompas & Lazada) */}
          <div className="bg-[#F5EFE6]/60 hover:bg-[#F5EFE6] border border-neutral-300/80 rounded-[32px] p-6 sm:p-8 transition-all hover:shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <div>
              {/* Header: Title and Client Watermark Logos */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] max-w-[280px] leading-tight">
                  {HELMI_NOTABLE_PROJECTS[1].title}
                </h3>
                
                {/* Kompas 'K' and Lazada Heart */}
                <div className="flex items-center gap-1.5">
                  <CompanyLogo type="kompas" className="w-8 h-8" />
                  <CompanyLogo type="lazada" className="w-8 h-8" />
                </div>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {HELMI_NOTABLE_PROJECTS[1].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full border border-neutral-400/80 bg-white text-xs font-semibold text-neutral-800 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sub features with icons */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                      Growth Marketing Strategy
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    +180% Orders
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/80 border border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#111111]">
                      CRM & Lifecycle Funnels
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
                    42% Open Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <button
              onClick={() => {
                setActiveProject(HELMI_NOTABLE_PROJECTS[1]);
                onSelectCaseStudy?.();
              }}
              className="w-full py-3.5 rounded-2xl bg-[#111111] hover:bg-[#F5A461] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Case Study</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#FAF8F5] w-full max-w-3xl rounded-[32px] border border-neutral-300 p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono text-[#E8874A] uppercase tracking-wider font-bold">
                Featured Case Study
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] mt-1">
                {activeProject.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-8">
              {activeProject.details.context}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {activeProject.details.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-neutral-200 text-center">
                  <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-medium">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Strategy Highlights */}
            <div className="mb-8">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-neutral-900 mb-3">
                Execution & Strategy
              </h4>
              <div className="space-y-2.5">
                {activeProject.details.strategy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-[#E8874A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#E8874A] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}



    </section>
  );
};
