"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star, FolderGit2 } from "lucide-react";
import { useState } from "react";

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Generate grid values for simulated contribution graph
  // 7 rows (days of week) x 26 columns (half year)
  const rows = 7;
  const cols = 28;
  const contributionGrid: number[][] = [];
  
  // Seed random-like but organic-looking contribution grid
  for (let r = 0; r < rows; r++) {
    contributionGrid[r] = [];
    for (let c = 0; c < cols; c++) {
      // Create patterns: more commits on weekdays, fewer on weekends, random sparks
      const weekdayFactor = r === 0 || r === 6 ? 0.3 : 0.85;
      const waveFactor = Math.sin(c / 4) * 0.3 + 0.5;
      const val = Math.random() * waveFactor * weekdayFactor;
      
      if (val < 0.2) contributionGrid[r][c] = 0; // zero commits
      else if (val < 0.45) contributionGrid[r][c] = 1; // light green
      else if (val < 0.7) contributionGrid[r][c] = 2; // medium green
      else contributionGrid[r][c] = 3; // dark green
    }
  }

  // Language Breakdown
  const languages = [
    { name: "TypeScript / JS", percent: 52, color: "bg-amber-500" },
    { name: "HTML / CSS", percent: 24, color: "bg-blue-500" },
    { name: "Python", percent: 16, color: "bg-emerald-500" },
    { name: "Java", percent: 8, color: "bg-red-500" },
  ];

  const statCards = [
    { label: "Total Commits", val: "1,452", icon: <GitCommit size={18} /> },
    { label: "PRs Merged", val: "42", icon: <GitPullRequest size={18} /> },
    { label: "Stars Earned", val: "18", icon: <Star size={18} /> },
    { label: "Public Repos", val: "15", icon: <FolderGit2 size={18} /> },
  ];

  return (
    <section id="github" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
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
            <Github size={16} />
            <span>08. Activity</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            GitHub <span className="text-gradient">Statistics</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-4xl mx-auto rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 overflow-hidden shadow-md">
          {/* Header */}
          <div className="bg-slate-200/40 dark:bg-slate-900/50 px-6 py-4 flex items-center justify-between border-b border-slate-350/10 dark:border-slate-800/40 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <Github size={16} className="text-slate-700 dark:text-slate-300" />
              <span className="font-bold text-slate-850 dark:text-slate-100">github.com/thiruselvan</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-500 font-semibold animate-pulse">
              Active Contributions
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statCards.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-200/30 dark:bg-slate-900/40 border border-slate-350/10 dark:border-slate-850/30 flex items-center space-x-3 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-purple-500/10 text-blue-600 dark:text-purple-400">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold font-mono">{stat.label}</p>
                    <p className="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Grid for Graph and Languages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contribution Grid Left */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Contribution Graph (Past 6 Months)</h4>
                
                {/* Scroll Wrapper */}
                <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="inline-flex flex-col space-y-1.5 min-w-[380px]">
                    {contributionGrid.map((rowArr, rowIndex) => (
                      <div key={rowIndex} className="flex gap-1.5">
                        {rowArr.map((cellVal, colIndex) => {
                          let colorClass = "bg-slate-200 dark:bg-slate-900"; // level 0
                          let commits = 0;
                          
                          if (cellVal === 1) {
                            colorClass = "bg-green-300 dark:bg-green-950";
                            commits = Math.floor(Math.random() * 2) + 1;
                          } else if (cellVal === 2) {
                            colorClass = "bg-green-400 dark:bg-green-800";
                            commits = Math.floor(Math.random() * 3) + 3;
                          } else if (cellVal === 3) {
                            colorClass = "bg-green-600 dark:bg-green-600";
                            commits = Math.floor(Math.random() * 5) + 6;
                          }

                          return (
                            <div
                              key={colIndex}
                              className={`w-3.5 h-3.5 rounded-[3px] transition-colors cursor-crosshair ${colorClass}`}
                              onMouseEnter={() => {
                                setHoveredDay({
                                  count: commits,
                                  date: `Week ${colIndex + 1}, Day ${rowIndex + 1}`,
                                });
                              }}
                              onMouseLeave={() => setHoveredDay(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Graph Legend & Status Banner */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1">
                  <div className="flex items-center space-x-1">
                    <span>Less</span>
                    <div className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-900" />
                    <div className="w-2.5 h-2.5 rounded bg-green-300 dark:bg-green-950" />
                    <div className="w-2.5 h-2.5 rounded bg-green-400 dark:bg-green-800" />
                    <div className="w-2.5 h-2.5 rounded bg-green-600 dark:bg-green-600" />
                    <span>More</span>
                  </div>

                  <div className="h-4 min-w-[120px] text-right font-medium">
                    {hoveredDay ? (
                      <span className="text-slate-800 dark:text-slate-200">
                        {hoveredDay.count} commits on {hoveredDay.date}
                      </span>
                    ) : (
                      <span>Hover grid nodes for details</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Language Breakdown Right */}
              <div className="lg:col-span-4 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Most Used Languages</h4>
                
                <div className="space-y-3 font-mono text-xs">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-850 dark:text-slate-250">{lang.name}</span>
                        <span className="text-slate-550">{lang.percent}%</span>
                      </div>
                      
                      {/* Bar */}
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${lang.color} rounded-full`}
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
