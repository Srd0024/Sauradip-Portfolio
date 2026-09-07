import React from 'react';
import { Award, FileText, CheckCircle2, ExternalLink, Sparkles, Trophy } from 'lucide-react';
import { SUPPORTING_DOCS } from '../data/portfolioData';

export const SupportingDocuments: React.FC = () => {
  return (
    <section id="supporting-docs" className="w-full">
      {/* Black Divider: "supporting document" */}
      <div className="w-full bg-[#111111] text-white py-10 sm:py-12 px-4 sm:px-8 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-heading font-black text-3xl sm:text-4xl text-[#E8874A]">
              11
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight lowercase">
              supporting document<span className="text-[#E8874A]">.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Credentials, Diplomas & Industry Honors
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8">
        
        {/* Top Subsection: Certificate Thumbnail Cards */}
        <div className="mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Verified Certifications & Accreditations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORTING_DOCS.filter(d => d.type === 'certificate').map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-6 rounded-[24px] border border-neutral-200/90 shadow-editorial shadow-editorial-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Simulated Certificate Thumbnail Graphic */}
                  <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F2EDE4] border border-neutral-200 p-4 mb-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#E8874A] transition-colors">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#E8874A]/10 rounded-bl-full pointer-events-none" />
                    
                    <div className="flex justify-between items-center">
                      <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-2xs flex items-center justify-center text-[#E8874A]">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>

                    <div>
                      <div className="h-1.5 w-16 bg-neutral-300 rounded mb-1.5" />
                      <div className="h-1.5 w-24 bg-[#E8874A]/40 rounded" />
                    </div>

                    <div className="flex justify-between items-end text-[9px] font-mono text-neutral-400">
                      <span>REF: 2023-VER</span>
                      <span className="font-bold text-neutral-600">{doc.date}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="font-heading font-extrabold text-base text-[#111111] leading-snug">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">
                    {doc.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E8874A]">
                  <span>{doc.badge}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Subsection: A couple of "award/recognition" slide-style graphics in teal/brand-card style */}
        <div>
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Industry Recognition Slides
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPORTING_DOCS.filter(d => d.type === 'award').map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-gradient-to-br from-[#0F3836] to-[#0A2624] text-white p-8 sm:p-10 rounded-[32px] border border-[#1B5754] shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative background grid & glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-dot-grid-dark opacity-30 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Slide Header */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-teal-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-teal-900/80 border border-teal-700/60 flex items-center justify-center text-teal-300">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-teal-300 font-bold">
                        Global Design Recognition
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold bg-teal-400 text-teal-950 px-3 py-1 rounded-full shadow-xs">
                      {doc.badge}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-teal-200/80 font-medium">
                    {doc.issuer} — {doc.date}
                  </p>
                </div>

                {/* Slide Card Bottom Meta */}
                <div className="relative z-10 pt-6 mt-8 border-t border-teal-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-teal-400">
                    Jury Verified • International Evaluation
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-300">
                    ✦
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
