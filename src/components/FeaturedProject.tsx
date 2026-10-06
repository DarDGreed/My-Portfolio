import React, { useState } from "react";
import { Sparkles, Wallet, ExternalLink, Lock, Globe, ShoppingBag, ArrowUpRight } from "lucide-react";
import budgetBuddyImg from "../assets/images/budget_buddy_app_1791249233809.jpg";
import quickOrderImg from "../assets/images/quickorder_kiosk_ui_1791249353868.jpg";

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
  ogImage: string;
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
    iconName: "wallet",
    ogImage: budgetBuddyImg
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
    iconName: "shopping-bag",
    ogImage: quickOrderImg
  }
];

export default function FeaturedProject() {
  const [activeProjectId, setActiveProjectId] = useState<string>("budget-buddy");

  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const handleProjectSelect = (id: string) => {
    setActiveProjectId(id);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "wallet":
        return <Wallet size={16} />;
      case "shopping-bag":
        return <ShoppingBag size={16} />;
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

      {/* Main Grid: Directory + OG Image Preview Card */}
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

        {/* OpenGraph Visual Preview Showcase (Right Column) */}
        <div className="lg:col-span-12 xl:col-span-7 glass-card bg-white/60 p-5 md:p-6 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Top Navigation & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-[#E5E5E2] gap-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-zinc-900 font-sans text-xs font-semibold">
                  <Globe size={13} className="text-indigo-500" />
                  Preview: {currentProject.title}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 font-medium bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE APPLICATION
                </span>
              </div>
            </div>

            {/* BROWSER / OG CARD VIEW */}
            <div className="mt-5 space-y-4">
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
                    <span className="truncate select-all text-zinc-500">
                      {currentProject.url.replace("https://", "").replace("http://", "")}
                    </span>
                  </div>

                  {/* Open in new tab link */}
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-1 rounded hover:bg-zinc-200 transition text-zinc-600 flex items-center gap-1 text-[11px] font-sans"
                    title="Open application in a new tab"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* OpenGraph Image Preview Container */}
                <div className="relative group overflow-hidden bg-zinc-950 aspect-video flex items-center justify-center">
                  <img
                    src={currentProject.ogImage}
                    alt={`${currentProject.title} Preview`}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Interactive Launch Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-6 text-center">
                    <div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <p className="text-white font-sans font-bold text-base drop-shadow-sm">
                        {currentProject.title}
                      </p>
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 rounded-full font-sans text-xs font-semibold hover:bg-zinc-100 transition shadow-lg cursor-pointer"
                      >
                        Launch Live App
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details & Features Summary */}
              <div className="p-4 rounded-xl border border-zinc-200 bg-white/70 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold font-sans text-zinc-900">{currentProject.title}</h3>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">{currentProject.description}</p>
                  </div>
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-medium font-sans transition shrink-0 shadow-xs cursor-pointer"
                  >
                    Open Live
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="border-t border-zinc-100 pt-3 flex flex-wrap gap-1.5">
                  {currentProject.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-sans bg-zinc-50 text-zinc-600 border border-zinc-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
