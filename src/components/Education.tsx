"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming (Java/Python)",
    "Operating Systems",
    "Computer Networks",
    "Web Development Technologies",
    "Artificial Intelligence & Machine Learning",
    "Software Engineering Principles",
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
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
            <GraduationCap size={16} />
            <span>06. Academics</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Education & <span className="text-gradient">Coursework</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Degree Card (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between glow-card shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-purple-500/10 text-blue-600 dark:text-purple-450 flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Calendar size={13} />
                  <span>2024 - 2028</span>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase">
                Bachelor of Engineering
              </span>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-1">
                Electronics and Communication Engineering
              </h3>
              
              <p className="text-sm text-slate-650 dark:text-slate-400 mb-6 font-semibold">
                AVS Engineering College
              </p>

              <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                <MapPin size={13} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {/* CGPA Stats Box */}
            <div className="flex items-center space-x-3 p-4 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-350/10 dark:border-slate-800/30">
              <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                <Award size={20} />
              </div>
              <div className="font-mono">
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Current Academic Score</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">CGPA: 8.74 / 10.0</p>
              </div>
            </div>

          </motion.div>

          {/* Coursework Card (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 glow-card shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-500 dark:text-purple-400" />
              Relevant Coursework
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-200/40 dark:bg-slate-900/40 border border-slate-300/10 dark:border-slate-800/30 text-xs text-slate-650 dark:text-slate-300 font-sans hover:bg-slate-200/65 dark:hover:bg-slate-900/70 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-purple-400 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{course}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
