import { motion } from "motion/react";
import { Sparkles, Terminal, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 -z-10" />
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-gradient-to-tr from-slate-200 to-zinc-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Text */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-xs text-xs font-mono text-zinc-600 shadow-2xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Projects
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-sans tracking-tight font-extrabold text-zinc-900"
            >
              James Darrel
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl font-display font-medium text-zinc-500 tracking-wide uppercase"
            >
              IT Graduate & Digital Builder
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-zinc-600 font-sans leading-relaxed text-base md:text-lg max-w-2xl font-light"
          >
            Bridging the gap between robust IT infrastructure and cutting-edge software development. Highly focused on harnessing AI integrations and multimedia creativity to build scalable, human-centered digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#featured-project"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-950 text-white font-sans text-sm font-medium hover:bg-zinc-800 transition duration-150 inline-flex items-center gap-2 shadow-xs group"
            >
              View Featured Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                &rarr;
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Decorative Modern Abstract Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square w-full max-w-[360px] mx-auto lg:max-w-none glass-card p-6 flex flex-col justify-between overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-300 select-none">
              JD_SYS_INFO
            </div>

            {/* Top decorative tech bar */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 animate-pulse" />
              </div>
              <span className="font-mono text-2xs text-zinc-400">STATUS.OK</span>
            </div>

            {/* Central design grid representing IT & Build focus */}
            <div className="py-8 flex flex-col gap-6 justify-center flex-1">
              <div className="flex items-start gap-4">
                <div className="p-2 py-2.5 rounded-lg border border-zinc-100 bg-zinc-50/65 text-zinc-600">
                  <Terminal size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-zinc-800 text-sm">System Architect</h3>
                  <p className="font-sans text-xs text-zinc-400 leading-snug">Structuring secure network environments & clean codebase workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 py-2.5 rounded-lg border border-zinc-100 bg-zinc-50/65 text-zinc-600">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-zinc-800 text-sm">AI Engineer</h3>
                  <p className="font-sans text-xs text-zinc-400 leading-snug">Designing robust model prompts & state machines for custom apps.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 py-2.5 rounded-lg border border-zinc-100 bg-zinc-50/65 text-zinc-600">
                  <Activity size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-zinc-800 text-sm">Digital Animator</h3>
                  <p className="font-sans text-xs text-zinc-400 leading-snug">Syncing visuals, frame rhythms, and physics-driven micro-interactions.</p>
                </div>
              </div>
            </div>

            {/* Bottom visual overlay bar */}
            <div className="border-t border-zinc-100 pt-4 flex items-center justify-between font-mono text-2xs text-zinc-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                COORDINATES: LAT.JD / LON.DEV
              </span>
              <span>2026_SYS_LIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
