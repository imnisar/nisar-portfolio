"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Layout, Database, Zap, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Building high-performance, cross-platform apps using Flutter for iOS and Android.",
    color: "text-blue",
    bg: "bg-blue/10",
  },
  {
    icon: Layout,
    title: "UI/UX Design to Code",
    desc: "Translating complex Figma designs into pixel-perfect, responsive Flutter interfaces.",
    color: "text-indigo",
    bg: "bg-indigo/10",
  },
  {
    icon: Database,
    title: "Backend Integration",
    desc: "Seamlessly connecting apps with Firebase, Supabase, or custom REST APIs.",
    color: "text-violet",
    bg: "bg-violet/10",
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    desc: "Implementing live audio/video, chat, and real-time data synchronization.",
    color: "text-blue",
    bg: "bg-blue/10",
  },
  {
    icon: Shield,
    title: "Clean Architecture",
    desc: "Writing maintainable, scalable, and testable code following best practices.",
    color: "text-indigo",
    bg: "bg-indigo/10",
  },
  {
    icon: Globe,
    title: "Flutter Web",
    desc: "Extending mobile expertise to create powerful, responsive web dashboards.",
    color: "text-violet",
    bg: "bg-violet/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">Specialization</span>
          <h2 className="text-4xl lg:text-5xl font-bold">Solutions I Provide</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group border-white/5 hover:border-blue/20 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.color} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue transition-colors">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
