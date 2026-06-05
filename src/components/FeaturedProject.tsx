import React, { useState } from "react";
import { Sparkles, Wallet, Check, ExternalLink, RefreshCw, Laptop, Smartphone, Lock, Globe } from "lucide-react";

export default function FeaturedProject() {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleReloadIframe = () => {
    setIframeLoaded(false);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="featured-project" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-zinc-500 uppercase">
          <Globe size={14} />
          Strategic System Launch
        </div>
        <h2 className="text-3xl md:text-4xl font-sans tracking-tight font-bold text-zinc-950">
          Featured Project
        </h2>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl font-light">
          An exploration of advanced systems orchestration, user state management, and financial transactions.
        </p>
      </div>

      {/* Main Grid: Card detail + Live Interactive prompt simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Project Context & Product Card */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between glass-card p-8 shadow-2xs relative overflow-hidden">
          <div className="absolute top-0 right-0 p-5 font-sans">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-2xs font-mono font-semibold bg-zinc-100/90 text-zinc-700 tracking-wide border border-zinc-200">
              <Sparkles size={10} className="text-indigo-500" />
              Built with AI Studio
            </span>
          </div>

          <div className="space-y-6 pt-10">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-white border border-zinc-800">
              <Wallet size={24} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold text-zinc-900">
                AI-Powered Budget &amp; Expense Tracker
              </h3>
              <p className="text-zinc-400 font-mono text-xs">FINTECH PLATFORM ENGINE</p>
            </div>

            <p className="text-zinc-650 font-sans text-sm leading-relaxed font-light">
              Designing structured transaction schemas and clear interfaces to turn messy, disorganized budgets and natural ledger receipts into readable, persistent financial profiles.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-600 font-sans">
                <Check size={14} className="text-emerald-500 shrink-0" />
                <span>Structured JSON Output Schema enforcement</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-600 font-sans">
                <Check size={14} className="text-emerald-500 shrink-0" />
                <span>Durable cloud persistence &amp; ledger reconciliation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-600 font-sans">
                <Check size={14} className="text-emerald-500 shrink-0" />
                <span>Responsive visuals &amp; instant budgeting</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-150 mt-8 pt-6 flex items-center justify-between text-xs font-mono text-zinc-405 font-sans">
            <span>LLM: GEMINI-2.5-FLASH</span>
            <span>PROMPT_TIER_1</span>
          </div>
        </div>

        {/* Live Embedded App Panel */}
        <div className="lg:col-span-12 xl:col-span-7 glass-card bg-white/40 p-5 md:p-6 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Top Navigation & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-[#E5E5E2] gap-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-zinc-800 font-sans text-xs font-medium">
                  <Globe size={13} className="text-indigo-500" />
                  Live BudgetBuddy Application
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1 bg-zinc-100/80 p-0.5 rounded-full border border-zinc-200">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`p-1 rounded-full transition cursor-pointer ${
                      deviceMode === "desktop" ? "bg-white text-zinc-900 shadow-3xs" : "text-zinc-400"
                    }`}
                    title="Desktop Layout"
                  >
                    <Laptop size={13} />
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`p-1 rounded-full transition cursor-pointer ${
                      deviceMode === "mobile" ? "bg-white text-zinc-900 shadow-3xs" : "text-zinc-400"
                    }`}
                    title="Mobile Responsive Viewport"
                  >
                    <Smartphone size={13} />
                  </button>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 font-semibold select-none">
                  ACTIVE_IFRAME
                </span>
              </div>
            </div>

            {/* IFRAME FRAME VIEW */}
            <div className="mt-5">
              <div className="space-y-4">
                {/* Browser Sandbox Shell Mockup */}
                <div className="border border-zinc-200 rounded-xl overflow-hidden shadow-xs bg-white">
                  {/* Browser Address Bar / Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50/80 border-b border-zinc-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                    </div>

                    {/* URL Box */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200/80 rounded-md max-w-sm sm:max-w-md w-full mx-4 text-[10px] font-mono text-zinc-500">
                      <Lock size={10} className="text-emerald-500 shrink-0" />
                      <span className="truncate select-all text-zinc-450">
                        budgetbuddy-941995268222.asia-southeast1.run.app
                      </span>
                    </div>

                    {/* Shell Utils */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleReloadIframe}
                        className="p-1 rounded hover:bg-zinc-200 transition text-zinc-500 cursor-pointer"
                        title="Reload Live App"
                      >
                        <RefreshCw size={11} className={!iframeLoaded ? "animate-spin" : ""} />
                      </button>
                      <a
                        href="https://budgetbuddy-941995268222.asia-southeast1.run.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-1 rounded hover:bg-zinc-200 transition text-zinc-500 cursor-any"
                        title="Open application in a new tab"
                      >
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  {/* Viewport Iframe Container */}
                  <div className="relative bg-[#FAFAF9]" style={{ height: "420px" }}>
                    {!iframeLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#FAFAF9] z-10">
                        <div className="h-6 w-6 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                        <div>
                          <p className="text-[11px] font-semibold text-zinc-800 uppercase tracking-wider font-sans">Establishing Connection</p>
                          <p className="text-[10px] text-zinc-500 font-light mt-1 font-sans">Connecting securely to budgetbuddy live platform endpoints...</p>
                        </div>
                      </div>
                    )}

                    <div 
                      className={`h-full w-full flex items-center justify-center transition-all duration-300 ${
                        deviceMode === "mobile" ? "py-4 bg-zinc-100/50" : ""
                      }`}
                    >
                      <iframe
                        key={iframeKey}
                        src="https://budgetbuddy-941995268222.asia-southeast1.run.app/"
                        className={`border-0 transition-all duration-300 shadow-sm ${
                          deviceMode === "mobile" 
                            ? "max-w-[340px] w-full h-[380px] rounded-3xl border-[8px] border-[#121212] bg-white" 
                            : "w-full h-full"
                        }`}
                        onLoad={() => setIframeLoaded(true)}
                        allow="clipboard-write"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
