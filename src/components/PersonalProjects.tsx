import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, ArrowUp, Star, Code, Heart } from 'lucide-react';
import { PERSONAL_PROJECTS } from '../data/portfolioData';
import { PhoneMockup } from './DeviceMockups';

export const PersonalProjects: React.FC = () => {
  return (
    <section id="personal-projects" className="w-full">
      {PERSONAL_PROJECTS.map((proj) => (
        <div key={proj.id} className="w-full border-b border-neutral-300">
          
          {/* Numbered-divider pattern, styled with a deep purple/navy accent */}
          <div className="w-full bg-[#18182A] text-white py-8 sm:py-10 px-4 sm:px-8 border-y border-[#2E2E4A]">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-baseline gap-4">
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#F5A461]">
                  {proj.number}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white capitalize">
                  {proj.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-200 uppercase tracking-widest bg-purple-950/80 border border-purple-800 px-3 py-1 rounded-full self-start sm:self-auto">
                {proj.category}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Context & Mockup */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold font-mono">
                  <Code className="w-3.5 h-3.5 text-purple-700" />
                  <span>Independent & Open Source</span>
                </div>

                <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111111] leading-snug">
                  Building tools for the global design and developer community.
                </h4>

                <p className="font-body text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {proj.description}
                </p>

                {/* Simulated interactive console card */}
                <div className="bg-[#12131F] text-white p-6 rounded-[28px] border border-purple-900/60 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-xs font-mono text-neutral-400 ml-2">
                        {proj.mockupDetails.screenTitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-900/60 px-2 py-0.5 rounded-full">
                      {proj.mockupDetails.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-[10px] uppercase font-mono text-neutral-400">Monthly Traffic</span>
                      <p className="font-heading font-extrabold text-2xl text-[#F5A461] mt-1">
                        {proj.mockupDetails.statNumber}
                      </p>
                      <p className="text-xs text-neutral-300 mt-0.5">{proj.mockupDetails.statLabel}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-[10px] uppercase font-mono text-neutral-400">License</span>
                      <p className="font-heading font-extrabold text-2xl text-emerald-400 mt-1">
                        MIT
                      </p>
                      <p className="text-xs text-neutral-300 mt-0.5">Free for commercial use</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Community Supported
                    </span>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F5A461] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Phone Mockup Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-6 bg-gradient-to-tr from-purple-100 to-[#FAF7F2] rounded-[36px] border border-purple-200">
                  <PhoneMockup variant="token" title="Design System Studio" />
                </div>
              </div>

            </div>

            {/* Row of Result Tiles with bold numbers, up-arrows, and captions */}
            <div className="mt-14">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4">
                Community Engagement & Adoption
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {proj.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-[#18182A] text-white p-6 rounded-[24px] border border-[#2E2E4A] shadow-xl flex flex-col justify-between hover:border-[#F5A461] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider">
                        IMPACT 0{mIdx + 1}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-purple-900/80 flex items-center justify-center text-[#F5A461]">
                        <ArrowUp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="font-heading font-black text-2xl sm:text-3xl text-white block">
                        {metric.value}
                      </span>
                      <p className="text-xs font-medium text-neutral-300 mt-1">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
};
