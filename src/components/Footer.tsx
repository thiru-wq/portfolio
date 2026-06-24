"use client";

import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-200/50 dark:bg-slate-950/80 border-t border-slate-300/40 dark:border-slate-800/40 py-12 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand Details */}
          <div className="flex items-center space-x-2 text-base font-bold font-mono text-slate-850 dark:text-slate-200">
            <Terminal size={18} className="text-blue-600 dark:text-purple-400" />
            <span>Thiruselvan</span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              Home
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              About
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, "#experience")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              Experience
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors cursor-pointer">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/thiru-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors p-1 rounded-lg cursor-pointer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors p-1 rounded-lg cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:thiruthiru31thiru@gmail.com"
              className="hover:text-blue-650 dark:hover:text-purple-400 transition-colors p-1 rounded-lg cursor-pointer"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-300/20 dark:border-slate-800/20 text-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Thiruselvan. All Rights Reserved. Engineered with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
