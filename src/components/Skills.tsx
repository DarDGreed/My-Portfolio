import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Code2, Database, Sparkles, Users, FileCode, ExternalLink } from "lucide-react";

interface SkillItem {
  name: string;
  description: string;
  link?: string;
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
  const [activeTab, setActiveTab] = useState<string>("frontend-web");

  const GROUPS: SkillGroup[] = [
    {
      id: "frontend-web",
      title: "Frontend & Web Dev",
      subtitle: "Vue.js, React, HTML/CSS & Modern UI",
      icon: <Code2 size={20} />,
      tags: ["Vue.js", "React", "HTML5 & CSS3", "JavaScript", "Netlify", "Responsive Design"],
      skills: [
        {
          name: "Vue.js Frontend Architecture",
          description: "Engineered user interfaces for Capstone Online Rent Management and an interactive real-time Notepad / Todo application with reactive state."
        },
        {
          name: "React & Component UI",
          description: "Constructed functional Netflix and Twitter clones to master React hooks, component lifecycles, and modular UI structure."
        },
        {
          name: "HTML5 & CSS3 Page Design",
          description: "Built and styled over 60+ responsive landing pages from scratch with high aesthetic polish, semantic layouts, and fast load times."
        },
        {
          name: "Modern JavaScript (ES6+)",
          description: "Writing clean client-side logic, asynchronous API handling, DOM manipulation, and modular architecture."
        },
        {
          name: "Netlify & DNS Configuration",
          description: "Deploying production-ready web apps through Netlify workflows and configuring custom domains with Namecheap."
        }
      ]
    },
    {
      id: "backend-cloud",
      title: "Backend & Databases",
      subtitle: "Node.js, Express, MongoDB & Firebase",
      icon: <Database size={20} />,
      tags: ["Node.js", "Express.js", "Firebase", "MongoDB", "Laravel", "REST APIs"],
      skills: [
        {
          name: "Node.js & Express.js",
          description: "Built scalable backend services for Spotify, Twitter, and Netflix clones, implementing RESTful endpoints and routing logic."
        },
        {
          name: "Firebase Cloud Services",
          description: "Integrated real-time database persistence, user data storage, and authentication rules for reactive web applications."
        },
        {
          name: "MongoDB & MERN Stack",
          description: "Designed document schemas, collections, and database connections to back fullstack React and Node applications."
        },
        {
          name: "Laravel & PHP Integration",
          description: "Collaborated on capstone architecture with Laravel backend integration, routing, and controller endpoints."
        }
      ]
    },
    {
      id: "google-ai",
      title: "Google AI & Applied AI",
      subtitle: "5x Certified Coursera Credentials",
      icon: <Sparkles size={20} />,
      tags: ["AI App Building", "AI Fundamentals", "Data Analysis", "Content Creation", "Coursera Verified"],
      skills: [
        {
          name: "AI for App Building",
          description: "Certified skills in leveraging AI APIs and model workflows to power user-facing applications.",
          link: "https://coursera.org/share/dfccd91beedd21c0d2d35863db9d2579"
        },
        {
          name: "Google AI Certification",
          description: "Comprehensive foundational credential verifying core principles, generative AI techniques, and model deployment.",
          link: "https://coursera.org/share/2b5b208efab8e716a6df78e3885d507b"
        },
        {
          name: "AI Fundamentals",
          description: "In-depth understanding of prompt design, system instructions, tokenization, and model capabilities.",
          link: "https://coursera.org/share/58aca1ef9b5a93a37ba1bebde0ce6b78"
        },
        {
          name: "AI for Data Analysis",
          description: "Utilizing AI tools for dataset processing, structured data extraction, insights discovery, and reporting.",
          link: "https://coursera.org/share/7be2b8053f153d8a93d8c5b4c7966928"
        },
        {
          name: "AI for Content Creation",
          description: "Mastering generative workflows for content strategy, digital copy, image generation, and creative assets.",
          link: "https://coursera.org/share/a9562e7a622a871b562f6e802876ad3b"
        }
      ]
    },
    {
      id: "recruitment-systems",
      title: "Technical Sourcing & IT",
      subtitle: "Candidate Evaluation & NCII CSS",
      icon: <Users size={20} />,
      tags: ["Technical Screening", "Boolean Search", "NCII CSS Certified", "Talent Pipelines", "U.S. Tech Roles"],
      skills: [
        {
          name: "Technical Screening & Evaluation",
          description: "Screened and evaluated candidates across California for Software Engineers, QA, Project Managers, and Electrical Engineers at Ryzen Solutions."
        },
        {
          name: "Boolean Sourcing & Pipeline Management",
          description: "Leveraged advanced Boolean strings and sourcing platforms to engage high-caliber engineering talent and maintain candidate tracking."
        },
        {
          name: "Computer Systems Servicing (NCII CSS)",
          description: "Certified by TESDA in computer hardware assembly, network configuration, operating systems installation, and hardware troubleshooting."
        },
        {
          name: "Hiring Manager & Cross-Functional Alignment",
          description: "Partnered closely with U.S.-based Hiring Managers and Senior Recruiters to align on role requirements, technical priorities, and timelines."
        }
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
              <Sparkles size={14} className="text-indigo-500" />
              Verified Competencies
            </div>
            <h2 className="text-3xl font-sans tracking-tight font-bold text-zinc-950">
              Skills Inventory
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Grounded in real production projects, technical recruiting experience, and certified credentials.
            </p>
          </div>

          {/* Tab selectors */}
          <div className="flex flex-col gap-2.5">
            {GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`text-left w-full px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                  activeTab === group.id
                    ? "bg-[#121212] border-zinc-950 text-white shadow-sm"
                    : "bg-white/80 border-[#E5E5E2] text-zinc-600 hover:border-zinc-350 hover:bg-zinc-50/50"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === group.id ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-650"}`}>
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
          <div className="glass-card p-6 md:p-8 min-h-[420px] shadow-2xs flex flex-col justify-between bg-white/70">
            
            <div className="space-y-6">
              {/* Header inside details panel */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                <div>
                  <p className="text-2xs font-mono tracking-wider text-zinc-400 uppercase">CREDENTIAL STREAM</p>
                  <h3 className="text-xl font-display font-semibold text-zinc-900">{currentGroup.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentGroup.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-50 text-zinc-600 border border-zinc-200"
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
                    className="space-y-4 divide-y divide-zinc-100"
                  >
                    {currentGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="pt-4 first:pt-0">
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 block" />
                            {skill.name}
                            {skill.link && (
                              <a
                                href={skill.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-indigo-600 hover:text-indigo-800 text-xs inline-flex items-center gap-1 font-normal font-sans"
                                title="View Coursera Certificate"
                              >
                                <ExternalLink size={11} />
                                <span className="text-[10px] font-mono">Verify</span>
                              </a>
                            )}
                          </h4>
                          <p className="text-zinc-600 text-xs font-light leading-relaxed pl-3.5">
                            {skill.description}
                          </p>
                        </div>
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
                Bachelor of Science in Information Technology
              </span>
              <span>CERTIFIED_EXPERTISE</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
