"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Headphones } from "lucide-react";

const stats = [
  { icon: Award, title: "Experience", desc: "2+ Years Working", color: "text-blue" },
  { icon: Briefcase, title: "Completed", desc: "10+ Projects", color: "text-indigo" },
  { icon: Headphones, title: "Support", desc: "Online 24/7", color: "text-violet" },
];

const highlights = [
  { icon: "🔥", title: "Real-Time Expert", desc: "Live audio rooms, chat, virtual gifting" },
  { icon: "🏗️", title: "Clean Architecture", desc: "MVC / MVVM patterns with GetX" },
  { icon: "🚀", title: "Play Store Published", desc: "Apps with real users and impact" },
  { icon: "🎨", title: "Figma → Flutter", desc: "Pixel-perfect UI implementation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image/Stats */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl text-center group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors`}>
                    <stat.icon className={stat.color} size={24} />
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{stat.title}</h4>
                  <p className="text-xs text-muted">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m a Flutter Mobile App Developer with 2+ years of hands-on experience delivering production-grade mobile applications. My expertise lies in building <span className="text-white font-medium">real-time systems</span> — from live audio rooms and virtual gifting ecosystems to complex monetization flows.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Strong believer in <span className="text-white font-medium">clean architecture</span> and performance optimization. I thrive at the intersection of technical depth and smooth user experience.
              </p>
            </div>
          </div>

          {/* Right Content - Title/Highlights */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">About Me</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Flutter Developer.<br />
                <span className="gradient-text">Builder at Core.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-blue transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
