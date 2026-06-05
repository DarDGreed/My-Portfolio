import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Terminal, Sparkles, Film, ArrowRight, Layers, FileCode, Check } from "lucide-react";

interface SkillItem {
  name: string;
  description: string;
  level: "Advanced" | "Proficient" | "Specialist";
}

interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tags: string[];
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("core-dev");

  const GROUPS: SkillGroup[] = [
    {
      id: "core-dev",
      title: "Core Dev & IT Systems",
      subtitle: "Bespoke Fullstack Code & Admin",
      icon: <Terminal size={20} />,
      tags: ["TypeScript", "React", "Node.js", "Docker", "Linux Admin", "Networking"],
      skills: [
        { name: "TypeScript & React", description: "Designing fast, responsive client-side SPAs or modular tools styled with modern utility classes.", level: "Advanced" },
        { name: "Node.js Server Buildout", description: "Writing structured Express architectures, bundling backends with esbuild, creating secure endpoints.", level: "Proficient" },
        { name: "Linux Administration", description: "Managing VM droplets, firewalls, secure SSH workflows, cron timers, and reverse proxy routes.", level: "Advanced" },
        { name: "IT Network Systems", description: "Configuring subnet structures, DNS configurations, routing procedures, and system diagnostics safely.", level: "Proficient" },
        { name: "Docker Containerization", description: "Writing reusable Dockerfiles, volumes binding configurations, and local virtualization layers.", level: "Proficient" }
      ]
    },
    {
      id: "ai-prompt",
      title: "AI & Prompt Engineering",
      subtitle: "Model Orchestration & System Persona design",
      icon: <Sparkles size={20} />,
      tags: ["AI Studio", "Gemini API", "Strict JSON Matching", "Few-shot Prompting", "RAG Systems"],
      skills: [
        { name: "Google AI Studio", description: "Rigorous system instruction development, tuning parameters (temperature, Top-P) for repeatable results.", level: "Specialist" },
        { name: "Strict JSON Casting", description: "Forcing LLMs to resolve dynamic parameters into strongly typed structural outputs for API ingestion.", level: "Specialist" },
        { name: "Prompt Architecture", description: "Techniques including chain-of-thought, structured system parameters, few-shot prompting, and validation layers.", level: "Advanced" },
        { name: "RAG & Document Tuning", description: "Chunking information and designing semantic retrieval layers to ground generative models with custom documents.", level: "Proficient" }
      ]
    },
    {
      id: "multimedia",
      title: "Multimedia & Animation",
      subtitle: "Dynamic Frame Syncing & Motion Mechanics",
      icon: <Film size={20} />,
      tags: ["Stickman Animation", "Video Editing", "Vector Graphics", "Creative Mechanics", "Premiere & AE"],
      skills: [
        { name: "Digital Stickman Animation", description: "Crafting hand-drawn or vector stickman animation loops, aligning keyframe layouts and movement pacing.", level: "Specialist" },
        { name: "Non-Linear Video Editing", description: "Structuring clean footage timelines, setting jump-cut rhythms, tracking screen motion, and applying audio beds.", level: "Proficient" },
        { name: "Adobe Premiere & After Effects", description: "Configuring precise dynamic keyframing for camera zooms, panning transitions, and custom render formats.", level: "Proficient" },
        { name: "SVG Motion & Drawing Mechanics", description: "Using code (CSS/JS) to animate vector shapes and design reactive web icons with minimal size overhead.", level: "Proficient" }
      ]
    }
  ];

  const currentGroup = GROUPS.find((g) => g.id === activeTab) || GROUPS[0];

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-[#E5E5E2]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Subtitles & Toggle Buttons */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-zinc-500 uppercase">
              <Layers size={14} />
              Professional Competence
            </div>
            <h2 className="text-3xl font-sans tracking-tight font-bold text-zinc-950">
              Skills Inventory
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Structured across engineering channels. Select an stream to inspect detailed competency matrices.
            </p>
          </div>

          {/* Tab selectors */}
          <div className="flex flex-col gap-2.5">
            {GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`text-left w-full px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                  activeTab === group.id
                    ? "bg-[#121212] border-zinc-950 text-white shadow-sm"
                    : "bg-white/80 border-[#E5E5E2] text-zinc-600 hover:border-zinc-350"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === group.id ? "bg-zinc-800 text-zinc-100" : "bg-zinc-50 text-zinc-650"}`}>
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-display font-medium text-xs tracking-wider uppercase">
                    {group.title}
                  </h3>
                  <p className={`text-[11px] ${activeTab === group.id ? "text-zinc-400" : "text-zinc-400"}`}>
                    {group.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Skills details view */}
        <div className="lg:col-span-8">
          <div className="glass-card p-6 md:p-8 min-h-[420px] shadow-2xs flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Header inside details panel */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                <div>
                  <p className="text-2xs font-mono tracking-wider text-zinc-400 uppercase">INSPECTING ARCHIVE</p>
                  <h3 className="text-xl font-display font-semibold text-zinc-900">{currentGroup.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentGroup.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-50 text-zinc-500 border border-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills breakdown items list */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentGroup.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 divide-y divide-zinc-50"
                  >
                    {currentGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 justify-between">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 block" />
                            {skill.name}
                          </h4>
                          <p className="text-zinc-500 text-xs font-light max-w-xl leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                        <span className={`self-start text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.level === "Specialist" 
                            ? "bg-zinc-100 border-zinc-200 text-zinc-800 font-medium" 
                            : skill.level === "Advanced" 
                            ? "bg-zinc-50 border-zinc-100 text-zinc-700" 
                            : "bg-zinc-50/50 border-zinc-100/60 text-zinc-500"
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom meta details bar */}
            <div className="border-t border-zinc-100 mt-8 pt-4 flex items-center justify-between text-2xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 uppercase">
                <FileCode size={12} />
                Updated Q2 2026
              </span>
              <span>VERIFIED_CAPABILITIES</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
