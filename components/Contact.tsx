"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let&apos;s Build Something<br />
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-muted text-lg mb-12 max-w-md">
              Open to Flutter development roles, freelance projects, and exciting collaborations.
            </p>

            <div className="space-y-8">
              <a href="mailto:inisar.mail@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue/10 transition-colors">
                  <Mail className="text-blue group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg text-white font-medium">inisar.mail@gmail.com</p>
                </div>
              </a>

              <a href="tel:+923369420295" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo/10 transition-colors">
                  <Phone className="text-indigo group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg text-white font-medium">+92 336 9420295</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-violet/10 transition-colors">
                  <MapPin className="text-violet group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-white font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/muhammad-nisar-b84a46363/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 group px-8"
              >
                <LinkedinIcon className="group-hover:text-blue transition-colors" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form 
              action="https://formsubmit.co/inisar.mail@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              {/* Hidden settings for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://muhammadnisarportfolio.vercel.app/" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue/50 transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue/50 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue/50 transition-colors text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue/50 transition-colors text-white resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
