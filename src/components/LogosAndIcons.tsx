import React from 'react';

// Brand Logos for Experience & Education
export const CompanyLogo: React.FC<{ type: string; className?: string }> = ({ type, className = "w-10 h-10" }) => {
  switch (type) {
    case 'brandveda':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/brandveda-logo.png" alt="Brandveda" className="w-full h-full object-contain" />
        </div>
      );
    case 'yup':
      return (
        <div className={`${className} bg-black rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/yup-logo.png" alt="Young Urban Project" className="w-full h-full object-contain" />
        </div>
      );
    case 'digitalvidya':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/digitalvidya-logo.png" alt="Digital Vidya" className="w-full h-full object-contain" />
        </div>
      );
    case 'pme':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/pme-logo.png" alt="Project Made Easy" className="w-full h-full object-contain scale-[1.2]" />
        </div>
      );
    case 'spill':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/syt-logo.png" alt="Spill Your Thoughts" className="w-full h-full object-contain" />
        </div>
      );
    case 'amber':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/amber-logo.png" alt="Amber Student" className="w-full h-full object-contain" />
        </div>
      );
    case 'seedwill':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/seedwill-logo.png" alt="Seedwill Consulting" className="w-full h-full object-contain" />
        </div>
      );
    case 'iilm':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/iilm-logo.png" alt="IILM Institute" className="w-full h-full object-contain scale-[1.1]" />
        </div>
      );
    case 'kcdas':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1`}>
          <img src="/kcdas-logo.png" alt="KC Das Commerce College" className="w-full h-full object-contain" />
        </div>
      );
    case 'hago':
      return (
        <div className={`${className} bg-[#FFD700] rounded-xl flex items-center justify-center text-[#111111] font-bold text-sm shadow-xs`}>
          <div className="flex flex-col items-center">
            <span className="text-base leading-none">😊</span>
          </div>
        </div>
      );
    case 'bluebird':
      return (
        <div className={`${className} bg-[#1D71B8] rounded-xl flex items-center justify-center text-white shadow-xs p-1.5`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        </div>
      );
    case 'lazada':
      return (
        <div className={`${className} bg-gradient-to-tr from-[#0F146D] via-[#F36F21] to-[#F0134D] rounded-xl flex items-center justify-center text-white shadow-xs p-1.5`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      );
    case 'kompas':
      return (
        <div className={`${className} bg-[#F4A91E] rounded-full flex items-center justify-center text-[#111111] font-serif font-black text-base shadow-xs`}>
          K
        </div>
      );
    case 'pelita':
      return (
        <div className={`${className} bg-[#1E3A8A] rounded-xl flex items-center justify-center text-white shadow-xs p-1`}>
          <div className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center font-serif text-[10px] font-bold">
            UPB
          </div>
        </div>
      );
    case 'rakamin':
      return (
        <div className={`${className} bg-[#059669] rounded-xl flex items-center justify-center text-white shadow-xs font-mono font-black text-sm`}>
          &lt;/&gt;
        </div>
      );
    case 'coursera':
      return (
        <div className={`${className} bg-[#0056D2] rounded-xl flex items-center justify-center text-white shadow-xs font-heading font-black text-xs`}>
          coursera
        </div>
      );
    case 'dataquest':
      return (
        <div className={`${className} bg-[#1E293B] rounded-xl flex items-center justify-center text-[#38BDF8] shadow-xs font-mono font-bold text-sm`}>
          DQ
        </div>
      );
    case 'google-ads':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1.5`}>
          <img src="/google-ads-logo.png" alt="Google Ads" className="w-full h-full object-contain" />
        </div>
      );
    case 'semrush':
      return (
        <div className={`${className} bg-[#111111] rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1.5`}>
          <img src="/semrush-logo.png" alt="Semrush" className="w-full h-full object-contain scale-[1.2]" />
        </div>
      );
    case 'hubspot':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1.5`}>
          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=128" alt="HubSpot" className="w-full h-full object-contain" />
        </div>
      );
    case 'skillshop':
      return (
        <div className={`${className} bg-white rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs p-1.5`}>
          <img src="/google-ads-logo.png" alt="Skillshop" className="w-full h-full object-contain" />
        </div>
      );
    default:
      return (
        <div className={`${className} bg-neutral-200 rounded-xl flex items-center justify-center text-neutral-700 font-bold text-xs`}>
          {type.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};

// Tool icons matching the 4 quadrants in the screenshot
export const ToolAppIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'higgsfield':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=higgsfield.ai&sz=128" alt="Higgsfield" className="w-full h-full object-contain" />
        </div>
      );
    case 'analytics':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="/google-analytics-logo.png" alt="Google Analytics" className="w-full h-full object-contain" />
        </div>
      );
    case 'search-console':
      return (
        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-2xs text-blue-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </div>
      );
    case 'trends':
      return (
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-2xs text-emerald-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
      );
    case 'instagram':
      return (
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shadow-2xs">
          <div className="w-5 h-5 rounded-md border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full border border-white" />
          </div>
        </div>
      );
    case 'capcut':
      return (
        <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white shadow-2xs font-sans font-black text-xs">
          <div className="flex gap-0.5">
            <div className="w-2 h-4 border-l-2 border-t-2 border-white -rotate-12" />
            <div className="w-2 h-4 border-r-2 border-b-2 border-white -rotate-12" />
          </div>
        </div>
      );
    case 'figma':
      return (
        <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center shadow-2xs">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-6">
            <span className="w-2 h-2 rounded-l-full bg-[#F24E1E]" />
            <span className="w-2 h-2 rounded-r-full bg-[#FF7262]" />
            <span className="w-2 h-2 rounded-l-full bg-[#A259FF]" />
            <span className="w-2 h-2 rounded-full bg-[#1ABCFE]" />
            <span className="w-2 h-2 rounded-l-full bg-[#0ACF83]" />
          </div>
        </div>
      );
    case 'powerbi':
      return (
        <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-end justify-center p-1.5 gap-0.5 text-white shadow-2xs">
          <span className="w-1.5 h-2 bg-yellow-200 rounded-t-xs" />
          <span className="w-1.5 h-3.5 bg-yellow-100 rounded-t-xs" />
          <span className="w-1.5 h-5 bg-white rounded-t-xs" />
        </div>
      );
    case 'office':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#EB3C00] flex items-center justify-center text-white shadow-2xs font-black text-xs">
          <div className="w-5 h-5 rounded-md border-2 border-white flex items-center justify-center font-bold text-[10px]">
            O
          </div>
        </div>
      );
    case 'meta':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100">
          <img src="https://cdn.simpleicons.org/meta/0668E1" alt="Meta" className="w-5 h-5" />
        </div>
      );
    case 'google-ads':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="/google-ads-logo.png" alt="Google Ads" className="w-full h-full object-contain" />
        </div>
      );
    case 'semrush':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-[#111111] rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="/semrush-logo.png" alt="Semrush" className="w-full h-full object-contain scale-[1.2]" />
        </div>
      );
    case 'hubspot':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=128" alt="HubSpot" className="w-full h-full object-contain" />
        </div>
      );
    case 'pabbly':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=pabbly.com&sz=128" alt="Pabbly" className="w-full h-full object-contain" />
        </div>
      );
    case 'funnelytics':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=funnelytics.io&sz=128" alt="Funnelytics" className="w-full h-full object-contain" />
        </div>
      );
    case 'aisensy':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=aisensy.com&sz=128" alt="AiSensy" className="w-full h-full object-contain" />
        </div>
      );
    case 'brevo':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=brevo.com&sz=128" alt="Brevo" className="w-full h-full object-contain" />
        </div>
      );
    case 'lovable':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=lovable.dev&sz=128" alt="Lovable" className="w-full h-full object-contain" />
        </div>
      );
    case 'antigravity':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="/antigravity-logo.png" alt="Antigravity IDE" className="w-full h-full object-contain" />
        </div>
      );
    case 'shopify':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=shopify.com&sz=128" alt="Shopify" className="w-full h-full object-contain" />
        </div>
      );
    case 'photoshop':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="w-6 h-6 object-contain" />
        </div>
      );
    case 'premiere':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere Pro" className="w-6 h-6 object-contain" />
        </div>
      );
    case 'canva':
      return (
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow-2xs border border-neutral-100 overflow-hidden p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=canva.com&sz=128" alt="Canva" className="w-full h-full object-contain" />
        </div>
      );
    default:
      return (
        <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 font-bold text-xs">
          ★
        </div>
      );
  }
};
