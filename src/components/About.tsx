"use client";

import { motion } from "framer-motion";
import { User, Target, BookOpen, Sparkles } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 relative">
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
            <User size={16} />
            <span>01. About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Who is <span className="text-gradient">Thiruselvan</span>?
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bio Panel */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles size={22} className="text-blue-500 dark:text-purple-400" />
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                I am a passionate Electronics and Communication Engineering student with a strong interest in software development, artificial intelligence, and modern web technologies. I enjoy building practical projects, learning new technologies, and continuously improving my technical skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center font-mono">
              <div>
                <p className="text-2xl font-bold text-gradient">2028</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Grad Year</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">15+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">4+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Certifications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">90%+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">GPA Target</p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Objective Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4 shadow-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 bg-blue-500/10 dark:bg-purple-500/10 text-blue-600 dark:text-purple-400 rounded-xl">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Career Objective</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  To secure a challenging role as a Software Developer or Intern, where I can apply my expertise in programming, web development, and AI tools to build impactful projects.
                </p>
              </div>
            </motion.div>

            {/* Education Highlight Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4 shadow-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 bg-blue-500/10 dark:bg-purple-500/10 text-blue-600 dark:text-purple-400 rounded-xl">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Academic Profile</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  Pursuing a Bachelor of Engineering in Electronics and Communication Engineering (ECE) at AVS Engineering College. Actively engaged in coding, learning new tech stacks, and building practical solutions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
