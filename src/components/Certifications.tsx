"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Calendar, ExternalLink } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  emoji: string;
}

export default function Certifications() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Google AI Fundamentals",
      issuer: "Google",
      date: "May 2025",
      credentialId: "G-AI-FUND-92384",
      verifyUrl: "https://google.com",
      emoji: "🧠",
    },
    {
      id: 2,
      title: "SEO Certification",
      issuer: "HubSpot Academy",
      date: "March 2025",
      credentialId: "HS-SEO-882371",
      verifyUrl: "https://hubspot.com",
      emoji: "📈",
    },
    {
      id: 3,
      title: "Python Programming",
      issuer: "Kaggle / University Course",
      date: "December 2024",
      credentialId: "KAG-PY-771239",
      verifyUrl: "https://kaggle.com",
      emoji: "🐍",
    },
    {
      id: 4,
      title: "Full Stack Development",
      issuer: "Infosys Springboard / Coursera",
      date: "September 2024",
      credentialId: "FS-DEV-554832",
      verifyUrl: "https://coursera.org",
      emoji: "💻",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-sm font-mono text-blue-600 dark:text-purple-400 font-semibold mb-2"
          >
            <Award size={16} />
            <span>04. Credentials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Licenses & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="flex flex-col justify-between p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-md glow-card"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{cert.emoji}</span>
                  <ShieldCheck size={18} className="text-green-500" />
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-blue-600 dark:text-purple-450 font-semibold mb-4">
                  {cert.issuer}
                </p>

                {/* Info List */}
                <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-mono mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="shrink-0" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <div className="text-[10px] break-all leading-relaxed bg-slate-100 dark:bg-slate-900/60 p-2 rounded border border-slate-350/10 dark:border-slate-800/30">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-slate-200/40 hover:bg-slate-200/70 dark:bg-slate-850/40 dark:hover:bg-slate-850/80 text-slate-800 dark:text-slate-200 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer border border-slate-300/10 dark:border-slate-800/20"
              >
                <span>Verify Credential</span>
                <ExternalLink size={12} />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
