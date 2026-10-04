import { jsPDF } from "jspdf";

export function generateResumeDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  function checkPageBreak(neededHeight: number) {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  }

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.text("James Darrel G. Umpad", pageWidth / 2, y, { align: "center" });
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  doc.text(
    "A. Tumulak Street, Gun-ob Lapu-Lapu City   |   Contact: +639948028107",
    pageWidth / 2,
    y,
    { align: "center" }
  );
  y += 5;

  doc.setTextColor(30, 64, 175);
  doc.text("jamesdarrelumpad@gmail.com", pageWidth / 2, y, { align: "center" });
  doc.link(pageWidth / 2 - 25, y - 3, 50, 4, {
    url: "mailto:jamesdarrelumpad@gmail.com",
  });
  y += 5;

  const githubText = "https://github.com/DarDGreed";
  const linkedinText = "https://www.linkedin.com/in/darrel-umpad-040276288";
  doc.text(`${githubText}    |    ${linkedinText}`, pageWidth / 2, y, {
    align: "center",
  });
  y += 8;

  function addSectionTitle(title: string) {
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title, margin, y);
    y += 2;
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;
  }

  function addBullet(text: string, boldPrefix = "") {
    const bulletX = margin + 3;
    const textX = margin + 7;
    const maxW = contentWidth - 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);

    const fullText = boldPrefix ? `${boldPrefix} ${text}` : text;
    const lines = doc.splitTextToSize(fullText, maxW);
    checkPageBreak(lines.length * 4.2 + 2);

    doc.text("•", bulletX, y);
    doc.text(lines, textX, y);
    y += lines.length * 4.2 + 1.5;
  }

  // 1. Professional Experience
  addSectionTitle("Professional Experience");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(
    "Technology Recruiter's Inc. (Ryzen Solutions) | June 2025 – present",
    margin,
    y
  );
  y += 4.5;

  doc.setFont("helvetica", "bolditalic");
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text("Associate Technical Recruiter", margin, y);
  y += 5;

  const expBullets = [
    "Screened and evaluated candidates across California for a wide range of roles including Software Engineers, Technicians, Project Managers, Electrical Engineers, and QA professionals",
    "Partnered closely with Senior Recruiters and U.S.-based Hiring Managers to understand role requirements, hiring priorities, and timelines",
    "Conducted initial candidate screenings to assess technical skills, experience, and cultural fit before advancing candidates in the hiring process",
    "Utilized Boolean search techniques and sourcing tools to identify, attract, and engage qualified candidates across multiple platforms",
    "Managed candidate pipelines and provided regular hiring updates to Project Managers and co-recruiters",
    "Participated in cross-functional meetings to align on recruiting strategies, hiring progress, and workforce needs",
    "Supported end-to-end recruiting efforts by coordinating interviews, sharing candidate feedback, and maintaining accurate documentation",
  ];

  expBullets.forEach((b) => addBullet(b));
  y += 3;

  // 2. Personal Web Development Projects
  addSectionTitle("Personal Web Development Projects");

  const projectBullets = [
    {
      prefix: "Online Rent Management (Capstone Project):",
      desc: "Made an online rent Management as our capstone project where we used Laravel as backend and Vue.js as frontend. And I was in charge working on our frontend.",
    },
    {
      prefix: "60+ Simple Landing Pages:",
      desc: "Created 60+ simple landing pages using HTML CSS, which I deployed using Netlify and used Namecheap as domain name.",
    },
    {
      prefix: "Spotify Clone App:",
      desc: "Made a Spotify clone app to learn Node.js and Express.js.",
    },
    {
      prefix: "Online Notepad or Todo List:",
      desc: "Made an online notepad or Todo list using Vue.js and Firebase.",
    },
    {
      prefix: "Netflix & Twitter Clones:",
      desc: "Made a simple Netflix clone and Twitter clone to learn React, MongoDB, Express.js and Node.js.",
    },
  ];

  projectBullets.forEach((p) => addBullet(p.desc, p.prefix));
  y += 3;

  // 3. Education
  addSectionTitle("Education");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("Bachelor of Science in Information Technology", margin, y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text("Cordova Public College (2021-2025)", margin, y);
  y += 4;
  doc.setTextColor(100, 116, 139);
  doc.text("Barangay Gabi, Municipality of Cordova, Cebu", margin, y);
  y += 7;

  // 4. Certifications
  addSectionTitle("Certifications");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(
    "National Certificate II in Computer Systems Servicing (NCII CSS)",
    margin,
    y
  );
  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Certification received after successful assessment.", margin, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Google AI Certifications", margin, y);
  y += 4.5;

  const certs = [
    {
      name: "Google AI",
      url: "https://coursera.org/share/2b5b208efab8e716a6df78e3885d507b",
    },
    {
      name: "AI for APP Building",
      url: "https://coursera.org/share/dfccd91beedd21c0d2d35863db9d2579",
    },
    {
      name: "AI Fundamentals",
      url: "https://coursera.org/share/58aca1ef9b5a93a37ba1bebde0ce6b78",
    },
    {
      name: "AI for Data Analysis",
      url: "https://coursera.org/share/7be2b8053f153d8a93d8c5b4c7966928",
    },
    {
      name: "AI for Content Creation",
      url: "https://coursera.org/share/a9562e7a622a871b562f6e802876ad3b",
    },
  ];

  certs.forEach((c) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text(`• ${c.name}:`, margin + 3, y);

    const nameWidth = doc.getTextWidth(`• ${c.name}: `);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(37, 99, 235);
    doc.text(c.url, margin + 3 + nameWidth, y);
    doc.link(margin + 3 + nameWidth, y - 3, doc.getTextWidth(c.url), 4, {
      url: c.url,
    });
    y += 4.5;
  });

  return doc;
}

export function downloadResumePdf(filename = "James_Darrel_G_Umpad_Resume.pdf") {
  try {
    const doc = generateResumeDocument();
    doc.save(filename);
  } catch (error) {
    console.error("Client-side PDF generation failed, falling back to static download:", error);
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
