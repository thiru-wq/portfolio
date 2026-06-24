"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-350 bg-slate-200/60 hover:bg-slate-300/60 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 border border-slate-300/40 dark:border-slate-700/40"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute text-amber-500"
      >
        <Sun size={20} className="fill-amber-500/10" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute text-violet-400"
      >
        <Moon size={20} className="fill-violet-400/10" />
      </motion.div>
    </button>
  );
}
