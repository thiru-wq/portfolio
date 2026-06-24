"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  organization: string;
  stars: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Thiruselvan stands out as an exceptional, proactive problem solver. His architectural choices on our department portal project were highly optimized, showcasing mature engineering instincts.",
      name: "Dr. Rajesh Kumar",
      role: "Head of CSE Department",
      organization: "Engineering College",
      stars: 5,
    },
    {
      id: 2,
      text: "During his developer internship, Thiruselvan built modular React interfaces and robust Express routing modules. He picks up new frameworks quickly and integrates APIs seamlessly.",
      name: "Amit Sharma",
      role: "Technical Lead",
      organization: "Apex Digital Solutions",
      stars: 5,
    },
    {
      id: 3,
      text: "Thiruselvan's full stack skills and calm demeanor were the backbone of our hackathon project. He is a phenomenal collaborator who designs schemas and writes clean, self-documenting code.",
      name: "Priya Patel",
      role: "Engineering Peer",
      organization: "Hackathon Teammate",
      stars: 5,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

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
            <MessageSquare size={16} />
            <span>09. Feedback</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Professional <span className="text-gradient">Endorsements</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1 transition-all duration-350 shadow-sm hover:shadow-md flex flex-col justify-between relative glow-card"
            >
              {/* Quote Mark watermark decoration */}
              <div className="absolute top-4 right-6 text-slate-200/50 dark:text-slate-800/30 font-serif text-6xl pointer-events-none select-none">
                &ldquo;
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-500 mb-6">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-650 dark:text-slate-400 italic leading-relaxed font-sans mb-8">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-200/55 dark:border-slate-800/55">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-purple-500/10 flex items-center justify-center font-mono text-sm font-bold text-blue-600 dark:text-purple-400">
                  {test.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 leading-none">
                    {test.role}, <span className="font-semibold text-slate-700 dark:text-slate-300">{test.organization}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
