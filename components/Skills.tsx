"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Flutter & Dart", level: 95, icon: "/assets/flutter.png" },
  { name: "Firebase Suite", level: 90, icon: "/assets/Firebase.png" },
  { name: "GetX State Management", level: 92, icon: "/assets/REST API.png" }, // Using REST API icon for placeholder or better icon if available
  { name: "REST API Integration", level: 88, icon: "/assets/REST API.png" },
  { name: "Agora SDK", level: 82, icon: "/assets/Agora SDK.png" },
  { name: "Socket.io", level: 80, icon: "/assets/socketio.png" },
  { name: "Clean Architecture", level: 90, icon: "/assets/flutter.png" },
  { name: "Sqflite / Local DB", level: 78, icon: "/assets/flutter.png" },
  { name: "Git & GitHub", level: 95, icon: "/assets/GitHub-Logo.png" },
  { name: "Figma → Flutter UI", level: 95, icon: "/assets/figma_logo.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-mid/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">Technical Stack</span>
          <h2 className="text-4xl lg:text-5xl font-bold">What I Build With</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group transition-all hover:border-blue/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 relative flex-shrink-0 bg-white/5 rounded-xl p-2 group-hover:scale-110 transition-transform">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-bold text-white group-hover:text-blue transition-colors">{skill.name}</h3>
                    <span className="text-xs font-mono text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue to-indigo rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Extensive experience in building scalable solutions using {skill.name} with industry best practices.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
