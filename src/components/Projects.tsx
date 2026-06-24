"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Github, ExternalLink, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  emoji: string;
  accent: string;
  isFeatured?: boolean;
  status?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { name: "All", id: "all" },
    { name: "Web App", id: "web" },
    { name: "AI Integration", id: "ai" },
    { name: "Tools", id: "tools" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Food Spoilage Detector",
      description: "A smart web application designed to assess food safety and freshness. It uses web technologies to calculate storage index, evaluate freshness levels, and provide safety recommendations.",
      category: ["web", "tools"],
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      features: [
        "Storage index calculator",
        "Real-time safety recommendation",
        "Freshness level evaluation",
        "Clean responsive layout"
      ],
      github: "https://github.com/thiru-wq",
      demo: "https://thiru-wq.github.io/food-safety/",
      emoji: "🍎",
      accent: "shadow-emerald-500/5 hover:border-emerald-500/40 dark:hover:border-emerald-500/45 border-emerald-500/20 dark:border-emerald-500/10",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Onverse AI",
      description: "An intelligent AI chatbot platform designed to provide real-time conversations using advanced AI models. The application offers a clean user interface, fast responses, and an engaging chat experience.",
      category: ["ai", "web"],
      tech: ["HTML", "CSS", "JavaScript", "AI APIs", "GitHub"],
      features: [
        "Real-time AI chat",
        "Modern responsive design",
        "Fast AI responses",
        "User-friendly interface",
        "Cross-device compatibility"
      ],
      github: "https://github.com/thiru-wq",
      demo: "https://github.com/thiru-wq",
      emoji: "🤖",
      accent: "shadow-blue-500/5 hover:border-blue-500/40 dark:hover:border-blue-500/45",
      status: "Under Development",
    },
    {
      id: 3,
      title: "SEO Analysis Tool",
      description: "A lightweight SEO diagnostic utility that audits page layouts, assesses metadata, and benchmarks Web Vitals performance.",
      category: ["tools", "web"],
      tech: ["HTML", "CSS", "JavaScript", "Cheerio"],
      features: ["Automated website audit", "Interactive speed checks", "Keyword density reports"],
      github: "https://github.com/thiru-wq",
      demo: "https://github.com/thiru-wq",
      emoji: "🔍",
      accent: "shadow-cyan-500/5 hover:border-cyan-500/40 dark:hover:border-cyan-500/45",
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "A financial dashboard visualizer helping users construct budgets, categorize expense transactions, and monitor savings trends.",
      category: ["web"],
      tech: ["HTML", "CSS", "JavaScript", "Firebase", "Chart.js"],
      features: ["OAuth sign-in", "Visual analytics charts", "Automated budget alarms"],
      github: "https://github.com/thiru-wq",
      demo: "https://github.com/thiru-wq",
      emoji: "💳",
      accent: "shadow-purple-500/5 hover:border-purple-500/40 dark:hover:border-purple-500/45",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 relative">
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
            <Code size={16} />
            <span>03. Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Featured & <span className="text-gradient">Recent Work</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-blue-600 dark:bg-purple-600 text-white shadow-md scale-103"
                  : "bg-slate-200/55 hover:bg-slate-200/90 dark:bg-slate-900/60 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-350 border border-slate-300/10 dark:border-slate-800/40"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all duration-350 glow-card ${project.accent} ${
                  project.isFeatured ? "md:col-span-2 border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/[0.02]" : ""
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-purple-500/10 flex items-center justify-center text-2xl shadow-inner border border-blue-500/10 dark:border-purple-500/10">
                        {project.emoji}
                      </div>
                      {project.isFeatured && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold font-mono uppercase tracking-wider">
                          <Sparkles size={10} className="fill-emerald-600/15" />
                          <span>Featured Project</span>
                        </span>
                      )}
                      {project.status && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold font-mono uppercase tracking-wider">
                          {project.status}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors p-1.5 hover:bg-slate-200/40 dark:hover:bg-slate-800/40 rounded-lg cursor-pointer"
                        title="View Source"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors p-1.5 hover:bg-slate-200/40 dark:hover:bg-slate-800/40 rounded-lg cursor-pointer"
                        title="Live Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-650 dark:text-slate-400 mb-6 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">Key Highlights</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-450 font-sans">
                      {project.features.map((feat) => (
                        <li key={feat} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-purple-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-wide bg-slate-200/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 border border-slate-350/10 dark:border-slate-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
