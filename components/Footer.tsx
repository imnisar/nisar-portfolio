"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black mb-2">
              Muhammad <span className="text-blue">Nisar</span>
            </h3>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Flutter Mobile App Developer building real-time, scalable, and user-focused mobile applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-sm text-muted hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-sm text-muted hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-muted hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-muted2 mb-2">
              © {currentYear} FlutterCraft by Muhammad Nisar.
            </p>
            <p className="text-xs text-muted2 flex items-center justify-center md:justify-end gap-1.5">
              Built with <Heart size={12} className="text-red-500 fill-red-500" /> in Islamabad, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
