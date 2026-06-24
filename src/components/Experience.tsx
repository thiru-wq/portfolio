"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  type: "internship" | "training" | "freelance";
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Apex Digital Solutions",
      location: "Chennai, India (Hybrid)",
      duration: "Jan 2026 - Present",
      description: [
        "Collaborated on designing and engineering Next.js frontend interfaces, achieving a 20% increase in layout performance scores.",
        "Created and integrated REST API endpoints utilizing Node.js, Express, and MongoDB.",
        "Engaged in client code reviews, Git branching deployments, and automated testing cycles.",
      ],
      type: "internship",
    },
    {
      id: 2,
      role: "Full Stack Development Trainee",
      company: "Infosys Springboard Program",
      location: "Online / University Campus",
      duration: "June 2025 - Dec 2025",
      description: [
        "Completed comprehensive modules in Java backend, Python scripts, SQL architectures, and frontend standards.",
        "Built a capstone React and Express.js inventory application, deploying it successfully on render server nodes.",
        "Solved 100+ logical coding challenges in Java and Python, earning badge accomplishments.",
      ],
      type: "training",
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Self-Employed / Freelance",
      location: "Remote",
      duration: "Sept 2024 - June 2025",
      description: [
        "Configured landing sites, custom forms, and portfolio layouts for small businesses and academic teams.",
        "Designed SEO-optimized structures that led to an organic Google search visibility boost for a local e-commerce vendor.",
        "Created UI wireframes and visual components in Figma, translating them into responsive Tailwind CSS modules.",
      ],
      type: "freelance",
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-sm font-mono text-blue-600 dark:text-purple-400 font-semibold mb-2"
          >
            <Briefcase size={16} />
            <span>05. History</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Work & <span className="text-gradient">Experience</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 pointer-events-none" />

          {/* Timeline list */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer spacing spacer for desktop centering */}
                  <div className="hidden md:block w-1/2" />

                  {/* Bullet Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-950 border-[3px] border-blue-600 dark:border-purple-600 shadow-md flex items-center justify-center -translate-x-1/2 z-10">
                    <span className="text-xs">
                      {exp.type === "internship" ? "💼" : exp.type === "training" ? "🎓" : "🚀"}
                    </span>
                  </div>

                  {/* Card Content block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 hover:shadow-lg transition-shadow duration-300 relative glow-card">
                      
                      {/* Badge and Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase ${
                          exp.type === "internship"
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            : exp.type === "training"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                        }`}>
                          {exp.type}
                        </span>
                        
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <Calendar size={13} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                        <div className="flex items-center space-x-1">
                          <Building2 size={13} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description Bulletins */}
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
                        {exp.description.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-purple-400 shrink-0 mt-1.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
