import React from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, ArrowUp, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { DEEP_DIVE_CASE_STUDIES } from '../data/portfolioData';
import { PhoneMockup, LaptopMockup } from './DeviceMockups';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="w-full">
      {DEEP_DIVE_CASE_STUDIES.map((study, idx) => (
        <div key={study.id} className="w-full border-b border-neutral-300">
          
          {/* Black Divider Band: "0[N] [Category Name]" */}
          <div className="w-full bg-[#111111] text-white py-8 sm:py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-baseline gap-4">
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#E8874A]">
                  {study.number}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white capitalize">
                  {study.category}
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full self-start sm:self-auto">
                Case Study / {study.client}
              </span>
            </div>
          </div>

          {/* Case Study Content Body */}
          <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8">
            
            {/* Client/brand name + 2–3 sentence context paragraph */}
            <div className="max-w-4xl mb-12 sm:mb-16">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8874A] bg-[#FDE8D7] px-3 py-0.5 rounded-full">
                  Client: {study.client}
                </span>
                {study.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold text-neutral-600 bg-neutral-200/70 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111111] leading-snug mb-4">
                {study.tagline}
              </h4>
              <p className="font-body text-base sm:text-lg text-neutral-700 leading-relaxed">
                {study.context}
              </p>
            </div>

            {/* A Cluster of Overlapping Phone / Laptop Mockup Screenshots */}
            <div className="my-14 py-12 px-4 sm:px-8 bg-gradient-to-b from-[#F5F0EB]/60 to-[#FAF7F2] rounded-[36px] border border-neutral-300/80 shadow-inner relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
              {/* Background ambient lighting */}
              <div className="absolute w-[450px] h-[300px] bg-[#E8874A]/10 rounded-full blur-3xl pointer-events-none" />

              {study.mockupType === 'phone-cluster' && (
                <div className="relative w-full max-w-2xl h-[560px] sm:h-[600px] flex items-center justify-center">
                  {/* Left tilted phone */}
                  <div className="absolute left-2 sm:left-12 -rotate-6 scale-90 sm:scale-95 transition-transform hover:rotate-0 hover:z-30 duration-300">
                    <PhoneMockup variant="fintech" title="FinFlow Onboarding" />
                  </div>
                  {/* Right elevated phone */}
                  <div className="absolute right-2 sm:right-12 rotate-6 scale-90 sm:scale-95 transition-transform hover:rotate-0 hover:z-30 duration-300 z-10">
                    <PhoneMockup variant="fintech" title="FinFlow Insights" />
                  </div>
                </div>
              )}

              {study.mockupType === 'laptop-phone' && (
                <div className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">
                  {/* Center Laptop */}
                  <div className="w-full max-w-xl z-10">
                    <LaptopMockup title={study.category} badge="Production Verified" />
                  </div>
                  {/* Overlapping Phone */}
                  <div className="lg:-ml-16 z-20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                    <PhoneMockup variant={idx === 1 ? 'ecommerce' : 'fintech'} />
                  </div>
                </div>
              )}

              {study.mockupType === 'dual-phone' && (
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                  <PhoneMockup variant="ecommerce" className="-rotate-3" />
                  <PhoneMockup variant="token" className="rotate-3" />
                </div>
              )}
            </div>

            {/* A Row of Black Rounded-Square Result Tiles with big bold number, up-arrow, and caption */}
            <div className="my-12">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4">
                Key Performance Impact
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {study.heroMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-[#111111] text-white p-6 sm:p-7 rounded-[24px] border border-neutral-800 shadow-xl flex flex-col justify-between hover:border-[#E8874A] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        METRIC 0{mIdx + 1}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#E8874A]/20 flex items-center justify-center text-[#E8874A]">
                        <ArrowUp className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="font-heading font-black text-3xl sm:text-4xl text-white flex items-baseline gap-1">
                        {metric.value}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-neutral-300 mt-1">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Sub-Section: "Strategy & What I Did" with bullet list + row of result tiles on soft colored background band */}
            <div className={`mt-14 p-8 sm:p-12 rounded-[32px] border ${study.bannerTint}`}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#E8874A]" />
                <h5 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111]">
                  {study.strategyTitle}
                </h5>
              </div>

              {/* Bullet list of strategy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {study.strategyBullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-black/5 shadow-2xs flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8874A] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secondary row of result tiles on soft colored background band */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 mb-3">
                  Long-term Systemic Milestones
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {study.secondaryMetrics.map((sMetric, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white p-4 rounded-2xl border border-black/10 shadow-2xs text-center"
                    >
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#111111] block">
                        {sMetric.value}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-600 mt-0.5 block leading-tight">
                        {sMetric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      ))}
    </section>
  );
};
