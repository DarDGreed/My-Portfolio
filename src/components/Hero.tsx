import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 -z-10" />
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-gradient-to-tr from-slate-200 to-zinc-100 rounded-full blur-3xl opacity-40 -z-10" />

      {/* Intro Text */}
      <div className="max-w-3xl space-y-8">
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
            Web Developer & Designer
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-zinc-600 font-sans leading-relaxed text-base md:text-lg max-w-2xl font-light"
        >
          I believe design is at its best when form and function exist in perfect balance. I create thoughtful, minimalist experiences that remove the unnecessary and bring focus to what truly matters. For me, good design isn’t about being noticed, it’s about making every interaction feel natural, purposeful, and effortless.
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
    </section>
  );
}
