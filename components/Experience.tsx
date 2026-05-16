"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Quant Aeonix",
    period: "Nov 2024 – Present",
    status: "Current",
    desc: [
      "Developing scalable Flutter mobile applications for production environments.",
      "Firebase & REST API integration with clean architecture patterns.",
      "Implementing real-time features including live audio rooms and gift systems.",
      "Performance optimization and code quality across cross-functional teams.",
    ],
    tech: ["Flutter", "Firebase", "Agora", "Socket.io", "GetX"],
  },
  {
    role: "Flutter Developer Trainee",
    company: "Logic Craft Technologies",
    period: "Apr 2024 – Nov 2024",
    status: "6 Months",
    desc: [
      "Completed 6-month intensive professional Flutter development training.",
      "Built production-ready mobile applications from concept to deployment.",
      "Improved app performance by up to 30% through profiling and optimization.",
      "Mastered GetX, Sqflite alongside clean architectural patterns.",
    ],
    tech: ["Flutter", "GetX", "Sqflite", "Firebase", "Clean Arch"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-navy-mid/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">Career</span>
          <h2 className="text-4xl lg:text-5xl font-bold">Professional Journey</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 last:pb-0 border-l border-white/10"
            >
              {/* Timeline Marker */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-navy-mid border-2 border-blue flex items-center justify-center">
                {exp.status === "Current" && (
                  <div className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                )}
              </div>

              <div className="glass-card p-8 rounded-2xl border-white/5 hover:border-blue/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-blue font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="flex items-center gap-2 text-sm text-muted mb-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${exp.status === "Current" ? "bg-blue/20 text-blue" : "bg-white/5 text-muted2"}`}>
                      {exp.status}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-muted font-medium border border-white/5 group-hover:border-blue/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
