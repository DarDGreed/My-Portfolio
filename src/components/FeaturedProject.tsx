import React, { useState } from "react";
import { Sparkles, Wallet, Check, ExternalLink, RefreshCw, Laptop, Smartphone, Lock, Globe, Terminal, ShoppingBag } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  llm: string;
  tier: string;
  features: string[];
  iconName: string;
}

const PROJECTS: Project[] = [
  {
    id: "budget-buddy",
    title: "BudgetBuddy Tracker",
    subtitle: "FINTECH PLATFORM ENGINE",
    description: "Designing structured transaction schemas and clear interfaces to turn messy, disorganized budgets and natural ledger receipts into readable, persistent financial profiles.",
    url: "https://budgetbuddy-941995268222.asia-southeast1.run.app/",
    llm: "GEMINI-2.5-FLASH",
    tier: "PROMPT_TIER_1",
    features: [
      "Structured transaction classification & matching",
      "Durable cloud persistence & ledger reconciliation",
      "Responsive layout rendering & instant budget allocation"
    ],
    iconName: "wallet"
  },
  {
    id: "quickorder-kiosk",
    title: "QuickOrder Kiosk",
    subtitle: "SELF-SERVICE ORDERING SYSTEM",
    description: "An interactive self-service kiosk interface tailored for swift food ordering, interactive cart management, dynamic category filtering, and point-of-sale workflows.",
    url: "https://quickorder-kiosk.ai.studio/",
    llm: "GEMINI-2.5-FLASH",
    tier: "KIOSK_AI_SYSTEM",
    features: [
      "Touch-optimized self-service menu catalog & item customization",
      "Interactive cart aggregation and instant order calculation",
      "Streamlined kiosk point-of-sale checkout simulation"
    ],
    iconName: "shopping-bag"
  },
  {
    id: "portfolio",
    title: "System Portfolio",
    subtitle: "INTEGRATED WORKSPACE",
    description: "A professional, responsive portfolio showcasing deep IT network systems knowledge, fullstack TypeScript configurations, and fluid print-ready stylesheet integration.",
    url: typeof window !== "undefined" ? window.location.origin : "https://ais-pre-5p62rlfigrsa46ziw3vfgy-318245575133.us-west1.run.app",
    llm: "GEMINI-3.5-FLASH",
    tier: "CRAFT_TIER_SYSTEM",
    features: [
      "Tailwind CSS responsive design with elegant display typography",
      "Optimized print-to-PDF stylesheet configuration for resumes",
      "Modular functional components structure & strict type safety"
    ],
    iconName: "terminal"
  }
];

export default function FeaturedProject() {
  const [activeProjectId, setActiveProjectId] = useState<string>("budget-buddy");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const handleProjectSelect = (id: string) => {
    setActiveProjectId(id);
    setIframeLoaded(false);
    // Force fresh load on changed selection
    setIframeKey((prev) => prev + 1);
  };

  const handleReloadIframe = () => {
    setIframeLoaded(false);
    setIframeKey((prev) => prev + 1);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "wallet":
        return <Wallet size={16} />;
      case "shopping-bag":
        return <ShoppingBag size={16} />;
      case "terminal":
        return <Terminal size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <section id="featured-project" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Title block */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-zinc-500 uppercase">
          <Globe size={14} />
          Strategic System Launch
        </div>
        <h2 className="text-3xl md:text-4xl font-sans tracking-tight font-bold text-zinc-950">
          Featured Works
        </h2>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl font-light">
          An exploration of advanced systems orchestration, user state management, and interactive digital interfaces.
        </p>
      </div>

      {/* Main Grid: Directory + Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Project Context & Directory selection list (Left Column) */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between glass-card p-6 md:p-8 shadow-2xs relative overflow-hidden bg-white/70">
          <div>
            {/* Header label */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono tracking-wider text-zinc-500 font-semibold">PROJECTS DIRECTORY</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-100/90 text-zinc-700 tracking-wide border border-zinc-200">
                <Sparkles size={9} className="text-indigo-500" />
                Live Node Feed
              </span>
            </div>

            {/* Interactive Selector Buttons */}
            <div className="flex flex-col gap-2.5 mb-8">
              {PROJECTS.map((proj) => {
                const isActive = proj.id === activeProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => handleProjectSelect(proj.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? "bg-zinc-900 border-zinc-950 text-white shadow-xs"
                        : "bg-white border-[#E5E5E2] hover:border-zinc-400 text-zinc-700 hover:bg-zinc-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-zinc-800 text-white" : "bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200/60"}`}>
                        {renderIcon(proj.iconName)}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm tracking-tight">{proj.title}</h4>
                        <p className={`text-[10px] font-mono ${isActive ? "text-zinc-400" : "text-zinc-400"}`}>
                          {proj.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual indicators */}
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ) : (
                      <span className="text-[9px] font-mono font-semibold text-zinc-400 group-hover:text-zinc-650 transition duration-150">SELECT &rarr;</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Embedded Browser-Style Simulator (Right Column) */}
        <div className="lg:col-span-12 xl:col-span-7 glass-card bg-white/40 p-5 md:p-6 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Top Navigation & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-[#E5E5E2] gap-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-zinc-800 font-sans text-xs font-semibold">
                  <Globe size={13} className="text-indigo-500" />
                  Live Preview: {currentProject.title}
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
                        {currentProject.url.replace("https://", "").replace("http://", "")}
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
                        href={currentProject.url}
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
                          <p className="text-[10px] text-zinc-500 font-light mt-1 font-sans">Connecting securely to {currentProject.title} endpoints...</p>
                        </div>
                      </div>
                    )}

                    <div 
                      className={`h-full w-full flex items-center justify-center transition-all duration-300 ${
                        deviceMode === "mobile" ? "py-4 bg-zinc-100/50" : ""
                      }`}
                    >
                      <iframe
                        key={`${activeProjectId}-${iframeKey}`}
                        src={currentProject.url}
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
