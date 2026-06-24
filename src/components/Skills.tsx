"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BrainCircuit } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  const categories: SkillCategory[] = [
    {
      id: "technical",
      name: "Technical Skills",
      icon: <Cpu size={18} />,
      skills: [
        { name: "C Programming", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript (Basic)", level: 80 },
        { name: "Git & GitHub", level: 88 },
        { name: "AI Tools", level: 85 },
      ],
    },
    {
      id: "soft",
      name: "Soft Skills",
      icon: <BrainCircuit size={18} />,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 88 },
        { name: "Teamwork", level: 92 },
        { name: "Time Management", level: 85 },
      ],
    },
  ];

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-sm font-mono text-blue-600 dark:text-purple-400 font-semibold mb-2"
          >
            <Cpu size={16} />
            <span>02. Technologies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Core <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === category.id
                  ? "bg-blue-600 dark:bg-purple-600 text-white shadow-lg shadow-blue-500/10 dark:shadow-purple-500/10 scale-103"
                  : "bg-slate-200/50 hover:bg-slate-200/80 dark:bg-slate-900/60 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-350 border border-slate-350/20 dark:border-slate-800/40"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Panel Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 glow-card hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3 font-mono text-sm">
                    <span className="font-semibold text-slate-850 dark:text-slate-100">{skill.name}</span>
                    <span className="text-blue-650 dark:text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress track */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
