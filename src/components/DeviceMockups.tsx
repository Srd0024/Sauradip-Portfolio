import React from 'react';
import { ArrowUpRight, TrendingUp, ShieldCheck, CreditCard, Sparkles, Activity, Check, Layers, BarChart2 } from 'lucide-react';

export const PhoneMockup: React.FC<{
  title?: string;
  variant?: 'fintech' | 'ecommerce' | 'token';
  className?: string;
}> = ({ title = "FinFlow Mobile", variant = 'fintech', className = "" }) => {
  return (
    <div
      className={`relative w-[240px] sm:w-[270px] md:w-[290px] h-[480px] sm:h-[530px] rounded-[38px] p-3 bg-[#1A1A1A] border-4 border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col ${className}`}
    >
      {/* Top speaker notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#2A2A2A] rounded-full mr-2" />
        <div className="w-8 h-1 bg-[#222222] rounded-full" />
      </div>

      {/* Screen inner */}
      <div className="w-full h-full bg-[#FAF7F2] rounded-[28px] overflow-hidden flex flex-col pt-7 px-4 pb-4 text-[#111111] select-none text-left">
        {/* Status bar */}
        <div className="flex justify-between items-center text-[10px] font-semibold text-gray-400 mb-3 px-1">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>5G</span>
          </div>
        </div>

        {variant === 'fintech' && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Balance</p>
                  <p className="text-xl font-extrabold text-[#111111] font-heading">$24,850.40</p>
                </div>
                <span className="text-[10px] font-bold bg-[#FDE8D7] text-[#E8874A] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +14.2%
                </span>
              </div>

              {/* Card visual */}
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2825] p-3.5 rounded-2xl text-white shadow-md relative overflow-hidden mb-3">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#E8874A]/20 rounded-full blur-lg" />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] tracking-widest uppercase text-gray-400 font-mono">FINFLOW BLACK</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A461]" />
                </div>
                <p className="font-mono text-xs tracking-wider mb-2 text-gray-200">•••• 8492</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] uppercase text-gray-400">Card Holder</p>
                    <p className="text-[10px] font-semibold">SAURADIP DAS</p>
                  </div>
                  <div className="w-6 h-4 bg-[#E8874A] rounded opacity-90" />
                </div>
              </div>

              {/* Mini action pills */}
              <div className="grid grid-cols-3 gap-1.5 mb-3 text-center">
                <div className="bg-white p-2 rounded-xl border border-gray-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-[#111111]">Send</p>
                </div>
                <div className="bg-[#E8874A] p-2 rounded-xl text-white shadow-xs">
                  <p className="text-[10px] font-bold">Invest</p>
                </div>
                <div className="bg-white p-2 rounded-xl border border-gray-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-[#111111]">Insights</p>
                </div>
              </div>

              {/* Transactions */}
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Recent Activity</p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-[#E8874A] font-bold text-[10px]">
                      S
                    </div>
                    <div>
                      <p className="text-[10px] font-bold leading-tight">Spotify Premium</p>
                      <p className="text-[8px] text-gray-400">Subscription</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#111111]">-$12.99</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px]">
                      +
                    </div>
                    <div>
                      <p className="text-[10px] font-bold leading-tight">Payroll Dividend</p>
                      <p className="text-[8px] text-gray-400">Direct Deposit</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600">+$4,250.00</span>
                </div>
              </div>
            </div>

            {/* Bottom nav simulation */}
            <div className="pt-2 border-t border-gray-200 flex justify-around text-gray-400 text-[10px]">
              <span className="text-[#E8874A] font-bold">Wallet</span>
              <span>Cards</span>
              <span>Growth</span>
              <span>Profile</span>
            </div>
          </div>
        )}

        {variant === 'ecommerce' && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-extrabold text-xs tracking-wide uppercase">BOTANICA</span>
                <span className="w-2 h-2 rounded-full bg-[#E8874A]"></span>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 mb-3 text-center">
                <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Diagnostic Quiz Match
                </span>
                <p className="text-xs font-bold text-[#111111] mt-1">Glow Recovery Serum</p>
                <p className="text-[9px] text-gray-600 mb-2">99.4% Organic Botanical Retinol</p>
                <div className="w-20 h-20 mx-auto bg-white rounded-xl shadow-xs flex items-center justify-center border border-emerald-200/50">
                  <div className="w-10 h-14 bg-gradient-to-b from-[#E8874A] to-[#F5A461] rounded-t-md rounded-b-xl shadow-inner flex items-center justify-center text-white text-[8px] font-bold">
                    SERUM
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-gray-200 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold">Monthly Refill Plan</span>
                  <span className="text-[11px] font-black text-[#E8874A]">$44/mo</span>
                </div>
                <p className="text-[8px] text-gray-500">Save 25% • Cancel anytime • Free shipping</p>
              </div>
            </div>
            <button className="w-full bg-[#111111] text-white py-2.5 rounded-xl font-bold text-[11px] hover:bg-[#E8874A] transition-colors">
              Subscribe & Add to Bag ↗
            </button>
          </div>
        )}

        {variant === 'token' && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full uppercase">
                Design Tokens
              </span>
              <p className="text-sm font-extrabold mt-2 font-heading">Color & Radius Tokens</p>
              <div className="mt-3 space-y-2">
                <div className="p-2 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#E8874A]" />
                    <span className="text-[10px] font-mono">accent-orange</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">#E8874A</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#111111]" />
                    <span className="text-[10px] font-mono">ink-black</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">#111111</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-sm bg-purple-500" />
                    <span className="text-[10px] font-mono">radius-card</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">24px</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FAF7F2] p-2 rounded-xl border border-dashed border-gray-300 text-center">
              <span className="text-[9px] font-bold text-[#E8874A]">Exported 24 tokens to Tailwind v4</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const LaptopMockup: React.FC<{
  title?: string;
  badge?: string;
  className?: string;
}> = ({ title = "PulseOps Global Telemetry", badge = "Live Production", className = "" }) => {
  return (
    <div className={`w-full max-w-[580px] bg-[#1C1C1E] p-3 rounded-2xl shadow-2xl border border-neutral-700/60 flex flex-col ${className}`}>
      {/* Top window controls */}
      <div className="flex items-center justify-between pb-2 px-1 border-b border-neutral-800">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="text-[10px] text-neutral-400 font-mono ml-2">{title}</span>
        </div>
        <span className="text-[9px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full">
          ● {badge}
        </span>
      </div>

      {/* Screen interior */}
      <div className="bg-[#0F1117] rounded-xl p-4 mt-2 text-white font-sans overflow-hidden">
        {/* Metric widgets row */}
        <div className="grid grid-cols-3 gap-2.5 mb-3.5">
          <div className="bg-[#181B24] p-2.5 rounded-lg border border-neutral-800">
            <p className="text-[9px] uppercase tracking-wider text-neutral-400">P99 Latency</p>
            <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">14.2 ms</p>
            <span className="text-[8px] text-emerald-500 font-semibold">↓ 32% vs last week</span>
          </div>
          <div className="bg-[#181B24] p-2.5 rounded-lg border border-neutral-800">
            <p className="text-[9px] uppercase tracking-wider text-neutral-400">Throughput</p>
            <p className="text-base font-bold text-white font-mono mt-0.5">384.2K</p>
            <span className="text-[8px] text-[#F5A461] font-semibold">req / sec</span>
          </div>
          <div className="bg-[#181B24] p-2.5 rounded-lg border border-neutral-800">
            <p className="text-[9px] uppercase tracking-wider text-neutral-400">Error Rate</p>
            <p className="text-base font-bold text-[#E8874A] font-mono mt-0.5">0.001%</p>
            <span className="text-[8px] text-neutral-400">All nodes nominal</span>
          </div>
        </div>

        {/* Visual telemetry bars / graph */}
        <div className="bg-[#181B24] p-3 rounded-lg border border-neutral-800 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-semibold text-neutral-300">Distributed Trace Ingress</span>
            <span className="text-[9px] font-mono text-neutral-400">Last 60 Minutes</span>
          </div>
          <div className="h-16 flex items-end gap-1 px-1">
            {[42, 68, 55, 78, 90, 64, 82, 45, 60, 95, 88, 70, 85, 92, 75, 89, 98, 80, 84, 91].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-xs transition-all duration-300 ${
                  i === 16 ? 'bg-[#E8874A]' : 'bg-gradient-to-t from-neutral-800 to-emerald-500/80 hover:to-[#F5A461]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active microservices list */}
        <div className="space-y-1.5 text-[9px] font-mono">
          <div className="flex items-center justify-between p-1.5 bg-[#141720] rounded border border-neutral-800/70">
            <span className="text-neutral-300">us-east1 / auth-cluster-04</span>
            <span className="text-emerald-400">HEALTHY (18 pods)</span>
            <span className="text-neutral-400">0.4ms</span>
          </div>
          <div className="flex items-center justify-between p-1.5 bg-[#141720] rounded border border-neutral-800/70">
            <span className="text-neutral-300">eu-west1 / ingest-pipeline-02</span>
            <span className="text-emerald-400">HEALTHY (24 pods)</span>
            <span className="text-neutral-400">1.1ms</span>
          </div>
        </div>
      </div>

      {/* Laptop bottom hinge simulation */}
      <div className="w-16 h-1 bg-neutral-600 rounded-full mx-auto mt-2 opacity-50" />
    </div>
  );
};
