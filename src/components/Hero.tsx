"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Cinematic Glowing Background Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-500/10 dark:bg-purple-650/10 blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-items-center lg:justify-items-stretch">
          
          {/* Hero Content Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass border border-blue-500/10 dark:border-purple-500/10 text-xs font-semibold text-blue-600 dark:text-purple-400 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for Internships & Projects</span>
            </motion.div>

            {/* Hello Statement */}
            <motion.h4
              variants={itemVariants}
              className="text-base sm:text-lg font-mono font-medium text-slate-500 dark:text-slate-400 mb-2"
            >
              Hello, World! I&apos;m
            </motion.h4>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              <span className="text-gradient">Thiruselvan</span>
            </motion.h1>

            {/* Title / Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-mono text-slate-700 dark:text-slate-300 min-h-[40px] mb-6 flex items-center"
            >
              <span className="mr-2">I build solutions as a</span>
              <TypingEffect
                words={["Software Developer", "AI Enthusiast", "ECE Student"]}
                typingSpeed={80}
                deletingSpeed={40}
                delayBetweenWords={2500}
              />
            </motion.div>

            {/* Short Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed font-sans"
            >
              I am a passionate Electronics and Communication Engineering student with a strong interest in software development, artificial intelligence, and modern web technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer text-white bg-blue-600 dark:bg-purple-600 hover:scale-103 active:scale-97 shadow-lg shadow-blue-500/20 dark:shadow-purple-500/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30 flex items-center justify-center space-x-2 transition-all glow-card"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer text-slate-800 dark:text-slate-100 bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40 hover:scale-103 active:scale-97 flex items-center justify-center space-x-2 transition-all glass"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href="/resume.pdf"
                download="Thiruselvan_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer text-blue-600 dark:text-purple-400 bg-blue-50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-800/30 hover:bg-blue-100 dark:hover:bg-purple-950/45 hover:scale-103 active:scale-97 flex items-center justify-center space-x-2 transition-all"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-5"
            >
              <a
                href="https://github.com/thiru-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full cursor-pointer text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-purple-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800/40 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full cursor-pointer text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-purple-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800/40 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Avatar Right */}
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Spinning decorative outline ring */}
            <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-blue-500/30 dark:border-purple-500/20 animate-[spin_80s_linear_infinite] pointer-events-none" />
            
            {/* Floating details badge */}
            <div className="absolute -top-3 -right-3 sm:-right-6 glass border border-blue-500/20 dark:border-purple-500/20 rounded-xl px-4 py-2.5 shadow-md flex items-center space-x-2 animate-bounce [animation-duration:6s] z-20">
              <span className="text-2xl">💻</span>
              <div className="text-left font-mono">
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Coding Since</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">2022</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-left-6 glass border border-blue-500/20 dark:border-purple-500/20 rounded-xl px-4 py-2.5 shadow-md flex items-center space-x-2 animate-bounce [animation-duration:5s] z-20">
              <span className="text-2xl">🚀</span>
              <div className="text-left font-mono">
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Deployments</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">15+ Live</p>
              </div>
            </div>

            {/* Main Avatar Container */}
            <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden flex items-center justify-center relative">
                {/* Tech Code Overlay Background */}
                <div className="absolute inset-0 opacity-10 dark:opacity-[0.03] font-mono text-[8px] p-4 select-none pointer-events-none overflow-hidden">
                  {`const developer = {
  name: "Thiruselvan",
  role: "Full Stack",
  skills: ["React", "Node", "AI", "Cloud"],
  passionate: true,
  code: () => {
    while(alive) {
      eat();
      code();
      sleep();
    }
  }
}`}
                </div>

                {/* Profile Placeholder Visual Avatar */}
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                  <Terminal size={96} className="text-blue-500/40 dark:text-purple-500/30 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400">&lt;THIRUSELVAN /&gt;</span>
                  <span className="font-sans text-xs text-slate-400 dark:text-slate-500 mt-1">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
