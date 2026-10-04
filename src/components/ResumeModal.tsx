import { useState } from "react";
import { motion } from "motion/react";
import { X, Mail, Github, Linkedin, Phone, MapPin, GraduationCap, Briefcase, Award, Printer, Download, Check, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { downloadResumePdf } from "../utils/downloadResume";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    downloadResumePdf("James_Darrel_G_Umpad_Resume.pdf");
    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  const googleAiCerts = [
    {
      title: "Google AI",
      url: "https://coursera.org/share/2b5b208efab8e716a6df78e3885d507b"
    },
    {
      title: "AI for APP Building",
      url: "https://coursera.org/share/dfccd91beedd21c0d2d35863db9d2579"
    },
    {
      title: "AI Fundamentals",
      url: "https://coursera.org/share/58aca1ef9b5a93a37ba1bebde0ce6b78"
    },
    {
      title: "AI for Data Analysis",
      url: "https://coursera.org/share/7be2b8053f153d8a93d8c5b4c7966928"
    },
    {
      title: "AI for Content Creation",
      url: "https://coursera.org/share/a9562e7a622a871b562f6e802876ad3b"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs overflow-y-auto">
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        className="relative bg-white border border-[#E5E5E2] w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
      >
        
        {/* Modal Toolbar (hidden during print) */}
        <div className="flex justify-between items-center bg-[#FAFAF9] border-b border-[#E5E5E2] px-6 py-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-tight text-zinc-700">James_Darrel_G_Umpad_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-full bg-[#121212] hover:bg-black text-white font-sans text-xs font-medium inline-flex items-center gap-1.5 transition duration-150 cursor-pointer shadow-xs active:scale-95"
              title="Download Resume PDF"
            >
              {downloading ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span>Download Resume</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg hover:bg-zinc-200 text-zinc-600 transition cursor-pointer"
              title="Print / Save PDF"
              aria-label="Print resume"
            >
              <Printer size={15} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200 text-zinc-500 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Resume Document Workspace */}
        <div className="p-8 md:p-12 overflow-y-auto select-text font-sans text-zinc-800 bg-white print:p-0 print:overflow-visible">
          
          <div id="print-section" className="space-y-8 max-w-3xl mx-auto">
            {/* Document Header */}
            <div className="text-center border-b border-[#E5E5E2] pb-6 space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 font-sans">
                James Darrel G. Umpad
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-zinc-600 font-sans">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} className="text-zinc-400" />
                  A. Tumulak Street, Gun-ob Lapu-Lapu City
                </span>
                <span className="text-zinc-300 hidden sm:inline">&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Phone size={12} className="text-zinc-400" />
                  <a href="tel:+639948028107" className="hover:text-zinc-950 hover:underline">+639948028107</a>
                </span>
                <span className="text-zinc-300 hidden sm:inline">&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Mail size={12} className="text-zinc-400" />
                  <a href="mailto:jamesdarrelumpad@gmail.com" className="hover:text-zinc-950 hover:underline">jamesdarrelumpad@gmail.com</a>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-500 pt-1">
                <a
                  href="https://github.com/DarDGreed"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-zinc-950 inline-flex items-center gap-1.5 transition text-indigo-600"
                >
                  <Github size={13} />
                  github.com/DarDGreed
                </a>
                <span className="text-zinc-300">&bull;</span>
                <a
                  href="https://www.linkedin.com/in/darrel-umpad-040276288"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-zinc-950 inline-flex items-center gap-1.5 transition text-indigo-600"
                >
                  <Linkedin size={13} />
                  linkedin.com/in/darrel-umpad-040276288
                </a>
              </div>
            </div>

            {/* SECTION 1: Professional Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                <Briefcase size={16} className="text-zinc-800" />
                <h2 className="text-base font-bold font-sans tracking-tight text-zinc-900 uppercase">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900">
                      Technology Recruiter&apos;s Inc. (Ryzen Solutions)
                    </h3>
                    <p className="text-xs font-semibold text-zinc-650">Associate Technical Recruiter</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200 self-start sm:self-auto">
                    June 2025 – present
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-zinc-650 leading-relaxed list-disc list-outside ml-4">
                  <li>Screened and evaluated candidates across California for a wide range of roles including Software Engineers, Technicians, Project Managers, Electrical Engineers, and QA professionals</li>
                  <li>Partnered closely with Senior Recruiters and U.S.-based Hiring Managers to understand role requirements, hiring priorities, and timelines</li>
                  <li>Conducted initial candidate screenings to assess technical skills, experience, and cultural fit before advancing candidates in the hiring process</li>
                  <li>Utilized Boolean search techniques and sourcing tools to identify, attract, and engage qualified candidates across multiple platforms</li>
                  <li>Managed candidate pipelines and provided regular hiring updates to Project Managers and co-recruiters</li>
                  <li>Participated in cross-functional meetings to align on recruiting strategies, hiring progress, and workforce needs</li>
                  <li>Supported end-to-end recruiting efforts by coordinating interviews, sharing candidate feedback, and maintaining accurate documentation</li>
                </ul>
              </div>
            </div>

            {/* SECTION 2: Personal Web Development Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                <Code2 size={16} className="text-zinc-800" />
                <h2 className="text-base font-bold font-sans tracking-tight text-zinc-900 uppercase">
                  Personal Web Development Projects
                </h2>
              </div>

              <div className="space-y-3">
                <ul className="space-y-2.5 text-xs text-zinc-650 leading-relaxed list-disc list-outside ml-4">
                  <li>
                    <span className="font-semibold text-zinc-800">Online Rent Management (Capstone Project):</span> Created an online rent management platform where Laravel was used for the backend and Vue.js for the frontend. Directly in charge of building and structuring the user-facing frontend.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-800">60+ Simple Landing Pages:</span> Created 60+ responsive landing pages using HTML and CSS, successfully deployed via Netlify and configured with Namecheap custom domain names.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-800">Spotify Clone App:</span> Engineered a Spotify clone application to master Node.js, Express.js, backend architecture, and media API integration.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-800">Online Notepad / Todo List:</span> Built an interactive real-time notepad and task manager using Vue.js coupled with Firebase for persistent cloud data storage.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-800">Netflix &amp; Twitter Clones:</span> Built functional clones of Netflix and Twitter to gain hands-on mastery of React, MongoDB, Express.js, and Node.js (MERN stack).
                  </li>
                </ul>
              </div>
            </div>

            {/* SECTION 3: Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                <GraduationCap size={16} className="text-zinc-800" />
                <h2 className="text-base font-bold font-sans tracking-tight text-zinc-900 uppercase">
                  Education
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-bold text-sm text-zinc-900">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-xs text-zinc-600 font-medium">Cordova Public College</p>
                  <p className="text-[11px] text-zinc-400 font-light">Barangay Gabi, Municipality of Cordova, Cebu</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200 self-start sm:self-auto">
                  2021 – 2025
                </span>
              </div>
            </div>

            {/* SECTION 4: Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                <Award size={16} className="text-zinc-800" />
                <h2 className="text-base font-bold font-sans tracking-tight text-zinc-900 uppercase">
                  Certifications
                </h2>
              </div>

              <div className="space-y-3 text-xs">
                {/* NCII CSS */}
                <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50">
                  <div className="flex items-center gap-2 font-semibold text-zinc-900">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>National Certificate II in Computer Systems Servicing (NCII CSS)</span>
                  </div>
                  <p className="text-zinc-500 text-[11px] mt-0.5 ml-5">
                    Certification received after successful government/TESDA assessment.
                  </p>
                </div>

                {/* Google AI Certifications */}
                <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold text-zinc-900">
                      <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                      <span>Google AI Certifications</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">Coursera Verified</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 ml-5">
                    {googleAiCerts.map((cert) => (
                      <a
                        key={cert.title}
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-between p-2 rounded-md bg-white border border-zinc-200 hover:border-indigo-400 hover:bg-indigo-50/30 text-zinc-800 transition text-[11px] group"
                      >
                        <span className="font-medium group-hover:text-indigo-600">{cert.title}</span>
                        <ExternalLink size={11} className="text-zinc-400 group-hover:text-indigo-600 shrink-0" />
                      </a>
                    ))}
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
