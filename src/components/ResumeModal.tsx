import { motion } from "motion/react";
import { X, Mail, Github, Linkedin, Calendar, GraduationCap, Briefcase, Award, Printer, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs overflow-y-auto">
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        className="relative bg-white border border-[#E5E5E2] w-full max-w-3xl rounded-xl shadow-xl flex flex-col overflow-hidden max-h-[90vh]"
      >
        
        {/* Modal Toolbar */}
        <div className="flex justify-between items-center bg-[#FAFAF9] border-b border-[#E5E5E2] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-tight text-zinc-650">RESUME_EXPLORER.PDF (104 KB)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full border border-[#E5E5E2] bg-white hover:border-zinc-400 text-zinc-700 font-sans text-2xs inline-flex items-center gap-1.5 transition duration-150 cursor-pointer shadow-2xs"
            >
              <Printer size={12} />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200 text-zinc-500 transition"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Resume Document Workspace */}
        <div className="p-8 md:p-12 overflow-y-auto select-text font-sans text-zinc-800 bg-white print:p-0">
          
          <div id="print-section" className="space-y-10">
            {/* Document Header */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#E5E5E2] pb-8 gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 font-sans">James Darrel</h1>
                <p className="text-sm font-display font-semibold text-zinc-500 uppercase tracking-widest">IT Graduate, Software Developer &amp; Creator</p>
                <p className="text-zinc-650 text-xs font-light max-w-lg leading-relaxed pt-1">
                  Bridging the gap between robust IT systems infrastructure, prompt-optimized AI development, and multimedia frame alignments.
                </p>
              </div>

              {/* Contact Block */}
              <div className="text-xs font-mono space-y-2 text-zinc-500 shrink-0 md:text-right pt-2 md:pt-0">
                <div className="flex md:justify-end items-center gap-2">
                  <span>jamesdarrelumpad@gmail.com</span>
                  <Mail size={12} className="text-zinc-400" />
                </div>
                <div className="flex md:justify-end items-center gap-2">
                  <span>github.com/jamesdarrel</span>
                  <Github size={12} className="text-zinc-400" />
                </div>
                <div className="flex md:justify-end items-center gap-2">
                  <span>linkedin.com/in/jamesdarrel</span>
                  <Linkedin size={12} className="text-zinc-400" />
                </div>
              </div>
            </div>

            {/* Document Body Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              
              {/* Main Column */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Academic Stream */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold tracking-wider text-zinc-450 uppercase flex items-center gap-2">
                    <GraduationCap size={15} className="text-zinc-500" />
                    EDUCATION CREDENTIALS
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="border border-[#E5E5E2] bg-[#FAFAF9]/60 rounded-lg p-4">
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
                        <h4 className="font-semibold text-sm text-zinc-900">Bachelor of Science in Information Technology</h4>
                        <span className="font-mono text-[10px] text-zinc-450 bg-white border border-[#E5E5E2] px-2 py-0.5 rounded">Graduated 2026</span>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Integrated infrastructure design, computer networking, systems operations, database normalization, and secure system administrations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Core streams with bullet parameters */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold tracking-wider text-zinc-450 uppercase flex items-center gap-2">
                    <Briefcase size={15} className="text-zinc-500" />
                    PROJECT EXPERIENCES
                  </h3>

                  <div className="space-y-6">
                    {/* Project Item */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-sm text-zinc-900">AI-Powered Budget &amp; Expense Tracker</h4>
                          <span className="font-mono text-[10px] text-zinc-400">FINTECH PLATFORM &bull; OWNER &amp; ENGINEER</span>
                        </div>
                        <span className="font-mono text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-150">ACTIVE</span>
                      </div>
                      <p className="text-xs text-zinc-650 font-light leading-relaxed">
                        Constructed a comprehensive natural-language financial mapper inside Google AI Studio. Uses structured JSON parameters, system tuning, and robust rule parameters to dynamically categorize unstructured text expenditures into accurate financial ledger categories.
                      </p>
                    </div>

                    {/* Project Item */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-sm text-zinc-900">Digital Creator Portfolio Showcase</h4>
                          <span className="font-mono text-[10px] text-zinc-400">PORTFOLIO &bull; INDEPENDENT DEVELOPER</span>
                        </div>
                        <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-150">LIVE</span>
                      </div>
                      <p className="text-xs text-zinc-650 font-light leading-relaxed">
                        Designed a high-affinity minimalist portfolio using React, SVG, and custom canvas-drawn stickman coordinate animations. Implements vector systems and interactive simulators, focusing on pristine aesthetic layouts and clean interface pacing.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar Column */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Tech Skills Box */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-450 uppercase flex items-center gap-2">
                    <Award size={14} className="text-zinc-500" />
                    SKILL STREAMS
                  </h3>

                  <div className="space-y-3 text-xs font-light">
                    <div className="space-y-1.5">
                      <p className="font-semibold text-zinc-800 font-display text-2xs uppercase tracking-wider">IT &amp; Infrastructure</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Networking</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Docker</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Linux CLI</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Git / CI-CD</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="font-semibold text-zinc-800 font-display text-2xs uppercase tracking-wider">Software Engineering</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">TypeScript</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">React</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Node JS</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Express</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="font-semibold text-zinc-800 font-display text-2xs uppercase tracking-wider">AI Prompt Design</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">AI Studio</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Few-Shot</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">JSON Schemas</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">RAG</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="font-semibold text-zinc-800 font-display text-2xs uppercase tracking-wider">Multimedia Stream</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Stickman Anim</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Video TIMELINE</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">SVG Design</span>
                        <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] text-zinc-600">Premiere</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Highlights */}
                <div className="space-y-3.5 border-t border-zinc-100 pt-5">
                  <h3 className="text-2xs font-mono font-bold tracking-wider text-zinc-450 uppercase">
                    METRICS VERIFIED
                  </h3>
                  <div className="space-y-2 text-xs font-light text-zinc-550">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                      <span>Clean structural coding patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                      <span>Robust IT diagnostics skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                      <span>Modern interactive web design</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
