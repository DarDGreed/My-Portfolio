/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ArrowUp, Menu, X } from "lucide-react";

import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import Skills from "./components/Skills";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll back to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F8] dot-grid selection:bg-zinc-200 selection:text-[#121212]">
      
      {/* Top Header / Navigation Utility Bar */}
      <header className="sticky top-0 z-40 bg-[rgba(249,249,248,0.8)] backdrop-blur-md border-b border-[#E5E5E2]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full border border-[#E5E5E2] flex items-center justify-center bg-white shadow-xs transition group-hover:bg-[#121212] group-hover:text-white">
              <span className="text-xs font-bold font-sans">JD</span>
            </div>
            <span className="font-display font-semibold text-zinc-900 tracking-tight text-sm group-hover:text-zinc-700 transition">
              James Darrel
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-500">
            <a href="#featured-project" className="hover:text-zinc-900 transition">FEATURED</a>
            <a href="#skills" className="hover:text-zinc-900 transition">SKILLS</a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-4 py-1.5 rounded-full border border-[#E5E5E2] bg-white hover:border-[#121212] hover:text-[#121212] text-xs font-medium text-zinc-600 transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <FileText size={12} />
              Resume
            </button>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-3 py-1.5 rounded-full border border-[#E5E5E2] bg-white text-zinc-650 font-sans text-2xs flex items-center gap-1"
            >
              <FileText size={11} />
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-lg hover:bg-zinc-150 text-zinc-680 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-[#E5E5E2] bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-xs font-mono text-zinc-650">
                <a
                  href="#featured-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#121212] transition"
                >
                  FEATURED WORK
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#121212] transition"
                >
                  SKILLS INVENTORY
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Sections Body */}
      <main className="pb-20">
        
        {/* HERO SECTION */}
        <Hero />

        {/* FEATURED PROJECT SECTION */}
        <FeaturedProject />

        {/* SKILLS INVENTORY SECTION */}
        <Skills />

      </main>

      {/* FOOTER SECTION: Ample spacing, clean alignment */}
      <footer className="border-t border-[#E5E5E2] bg-[#F9F9F8] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Metadata credit */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-semibold text-sm text-zinc-950">James Darrel</h4>
            <p className="text-zinc-500 text-xs font-light max-w-sm leading-relaxed">
              IT Analyst &amp; Software Builder. Bridging technical precision with multimedia creativity and digital storytelling.
            </p>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider select-none pt-1">
              &copy; 2026 JAMES DARREL. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Socials & Resume CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/jamesdarrel"
                target="_blank"
                rel="referrer noopener"
                className="p-2.5 rounded-full border border-[#E5E5E2] bg-white hover:border-zinc-400 hover:text-zinc-900 text-zinc-500 transition shadow-2xs"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/jamesdarrel"
                target="_blank"
                rel="referrer noopener"
                className="p-2.5 rounded-full border border-[#E5E5E2] bg-white hover:border-zinc-400 hover:text-zinc-900 text-zinc-500 transition shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:jamesdarrelumpad@gmail.com"
                className="p-2.5 rounded-full border border-[#E5E5E2] bg-white hover:border-zinc-400 hover:text-zinc-900 text-zinc-500 transition shadow-2xs"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Print/Download CTA */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2.5 bg-[#121212] text-white text-xs font-medium rounded-full shadow-lg shadow-gray-200 hover:bg-black transition-all cursor-pointer font-sans inline-flex items-center gap-2"
            >
              <FileText size={15} />
              Download Resume
            </button>
          </div>

        </div>

        {/* Back to top micro utility */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-[#E5E5E2] flex justify-between items-center text-[10px] font-mono text-zinc-400">
          <span>HOST: GOOGLE CLOUD_RUN</span>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1 hover:text-[#121212] transition uppercase cursor-pointer"
          >
            SCROLL TO TOP
            <ArrowUp size={10} className="group-hover:-translate-y-0.5 transition duration-150" />
          </button>
        </div>
      </footer>

      {/* PORTAL/OVERLAY MODAL FOR RESUME METRICS */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
