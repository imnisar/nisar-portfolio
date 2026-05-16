"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";

const GithubIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={size} height={size}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/muhammad-nisar-b84a46363/", color: "hover:text-blue" },
  { icon: GithubIcon, href: "https://github.com/imnisar", color: "hover:text-white" },
  { icon: InstagramIcon, href: "https://www.instagram.com/inisar_dev/", color: "hover:text-violet" },
  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61559807730322", color: "hover:text-blue-600" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20 -z-10" />

      <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue text-sm font-medium mb-6"
          >
            Available for New Projects
          </motion.span>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Hi, I&apos;m <br />
            <span className="gradient-text">Muhammad Nisar</span>
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-8 max-w-xl">
            Flutter Mobile App Developer specialized in building <span className="text-white font-medium">real-time systems</span>, 
            virtual economies, and high-performance applications with clean architecture.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-10">
            <button className="btn-primary flex items-center gap-2 group">
              Hire Me
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="btn-secondary">View Work</button>
          </div>

          <div className="flex gap-6 items-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={cn("text-muted2 transition-colors duration-300", social.color)}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
            <div className="h-px w-20 bg-gradient-to-r from-muted2 to-transparent" />
          </div>
        </motion.div>

        {/* Right Content - Arched Profile Photo */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Arched Frame */}
            <div className="w-[320px] h-[450px] lg:w-[400px] lg:h-[550px] rounded-t-[200px] overflow-hidden border-2 border-white/10 relative z-10 bg-navy-mid/50 backdrop-blur-sm">
              <Image
                src="/assets/profile.png"
                alt="Muhammad Nisar"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Background Arch Decoration */}
            <div className="absolute -inset-4 rounded-t-[220px] bg-gradient-to-b from-blue/30 to-transparent blur-2xl -z-10 opacity-50" />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl z-20 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/20 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <p className="text-xs text-muted">Experience</p>
                <p className="text-sm font-bold text-white">2+ Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue to-transparent" />
      </motion.div>
    </section>
  );
}
