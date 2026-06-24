"use client";

import { motion } from "framer-motion";
import { Trophy, Terminal, FileText, Star, ArrowUpRight } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  stat?: string;
  badge?: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Smart India Hackathon (Internal)",
      category: "Hackathons",
      description: "Secured 2nd Runner-Up out of 45 teams for building an AI-powered student grievance portal with auto-routing tickets.",
      icon: <Trophy className="text-amber-500" size={24} />,
      badge: "Runner-Up",
    },
    {
      id: 2,
      title: "LeetCode coding metrics",
      category: "Coding Competitions",
      description: "Solved 250+ data structures and algorithm challenges. Consistently active with a top 15% global rating metric.",
      icon: <Terminal className="text-blue-500 dark:text-purple-400" size={24} />,
      stat: "250+ Solved",
    },
    {
      id: 3,
      title: "State-Level Tech Symposium",
      category: "Technical Events",
      description: "Won 1st prize in Paper Presentation on 'Secure Decentralized Database Schemas' at the annual engineering symposium.",
      icon: <FileText className="text-cyan-500" size={24} />,
      badge: "First Place",
    },
    {
      id: 4,
      title: "Semester Academic Topper",
      category: "Academic Achievements",
      description: "Awarded college merit certificate and scholarship rewards for academic excellence in computer science semesters.",
      icon: <Star className="text-yellow-500" size={24} />,
      stat: "Merit Scholar",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="achievements" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 relative">
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
            <Trophy size={16} />
            <span>07. Accolades</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Honors & <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-350/10 dark:border-slate-800/20">
                    {ach.icon}
                  </div>
                  
                  {ach.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider bg-green-500/10 text-green-600 dark:text-green-450 uppercase">
                      {ach.badge}
                    </span>
                  )}
                  {ach.stat && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider bg-blue-500/10 text-blue-600 dark:text-purple-400 uppercase">
                      {ach.stat}
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {ach.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2">
                  {ach.title}
                </h3>

                <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-mono font-bold text-blue-600 dark:text-purple-400 mt-4 cursor-pointer hover:underline">
                <span>View Details</span>
                <ArrowUpRight size={14} className="ml-1" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
