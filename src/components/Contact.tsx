"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    {
      title: "Email Address",
      val: "thiruthiru31thiru@gmail.com",
      href: "mailto:thiruthiru31thiru@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      title: "Contact Number",
      val: "8122040374",
      href: "tel:8122040374",
      icon: <Phone size={20} />,
    },
    {
      title: "Primary Location",
      val: "Tamil Nadu, India",
      icon: <MapPin size={20} />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

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
            <Send size={16} />
            <span>10. Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Contact <span className="text-gradient">Information</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Info Details Column Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Let&apos;s talk about a project</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                I am eager to explore upcoming intern listings, software engineering openings, and full stack project collaborations. Drop a line via this form or direct channels!
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-250/20 dark:hover:bg-slate-900/40 transition-colors"
                >
                  <div className="p-3 bg-blue-500/10 dark:bg-purple-500/10 text-blue-650 dark:text-purple-400 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold font-mono">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-bold text-slate-850 dark:text-slate-250 hover:text-blue-600 dark:hover:text-purple-400 transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-slate-850 dark:text-slate-250">
                        {item.val}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Grid */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/thiru-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl cursor-pointer text-slate-800 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-900/60 hover:bg-slate-200/80 dark:hover:bg-slate-900/90 border border-slate-350/10 dark:border-slate-800/40 flex items-center justify-center space-x-2 transition-colors font-mono text-xs font-semibold"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl cursor-pointer text-slate-800 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-900/60 hover:bg-slate-200/80 dark:hover:bg-slate-900/90 border border-slate-350/10 dark:border-slate-800/40 flex items-center justify-center space-x-2 transition-colors font-mono text-xs font-semibold"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column Right */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 shadow-sm relative overflow-hidden">
              
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-200/40 dark:bg-slate-900/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-purple-500/40 transition-all ${
                      errors.name ? "border-red-500 focus:ring-red-500/40" : "border-slate-300/40 dark:border-slate-800/50 focus:border-blue-500 dark:focus:border-purple-600"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-500 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-200/40 dark:bg-slate-900/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-purple-500/40 transition-all ${
                      errors.email ? "border-red-500 focus:ring-red-500/40" : "border-slate-300/40 dark:border-slate-800/50 focus:border-blue-500 dark:focus:border-purple-600"
                    }`}
                    placeholder="thiruselvan@example.com"
                  />
                  {errors.email && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-500 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-200/40 dark:bg-slate-900/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-purple-500/40 transition-all ${
                      errors.subject ? "border-red-500 focus:ring-red-500/40" : "border-slate-300/40 dark:border-slate-800/50 focus:border-blue-500 dark:focus:border-purple-600"
                    }`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-500 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-200/40 dark:bg-slate-900/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-purple-500/40 transition-all resize-none ${
                      errors.message ? "border-red-500 focus:ring-red-500/40" : "border-slate-300/40 dark:border-slate-800/50 focus:border-blue-500 dark:focus:border-purple-600"
                    }`}
                    placeholder="Type details here..."
                  />
                  {errors.message && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-500 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 dark:bg-purple-600 hover:scale-101 active:scale-99 shadow-lg shadow-blue-500/20 dark:shadow-purple-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed glow-card"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Popups */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-slate-50/95 dark:bg-slate-950/95 flex flex-col items-center justify-center text-center p-6"
                  >
                    <CheckCircle className="text-green-500 mb-4 animate-[bounce_1s_ease_1]" size={56} />
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Received!</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                      Thank you! Your message has been successfully transmitted. I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-350/15 dark:border-slate-800/50 hover:bg-slate-200/90 dark:hover:bg-slate-900/90 cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
