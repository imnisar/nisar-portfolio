"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Cpu } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActive(navItems.find(item => item.name.toLowerCase() === section)?.name || "Home");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-1 p-2 rounded-full border border-white/10 transition-all duration-300",
          scrolled ? "bg-navy/80 backdrop-blur-xl shadow-2xl" : "bg-white/5 backdrop-blur-md"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all group flex items-center gap-2",
              active === item.name ? "text-white" : "text-muted hover:text-white"
            )}
          >
            {active === item.name && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-gradient-to-r from-blue/20 to-indigo/20 border border-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon size={16} className={cn("hidden sm:block", active === item.name ? "text-blue" : "text-muted2 group-hover:text-blue transition-colors")} />
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
