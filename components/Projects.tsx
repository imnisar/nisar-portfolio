"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, PlayCircle } from "lucide-react";

const projects = [
  {
    title: "Chill Party",
    category: "Social Audio / Community",
    image: "/assets/chillParty.png",
    description: "Flutter-based social audio app with live voice rooms, animated gifts, and a virtual store system. Features seamless real-time interaction using Agora and Socket.io.",
    stack: ["Flutter", "Agora RTC", "Socket.io", "Firebase", "GetX"],
  },
  {
    title: "Shortzz / KitKet",
    category: "Short Video & Live Streaming",
    image: "/assets/Shortzz-app-logo.png",
    description: "Flutter social media app for reels, live streaming, real-time chat, and creator monetization. Includes AR filters, subscriptions, and a virtual gift system.",
    stack: ["Flutter", "Zego Engine", "Firebase", "DeepAR", "RevenueCat"],
  },
  {
    title: "Christ Match",
    category: "Faith-based Social / Dating",
    image: "/assets/faithMatch.png",
    description: "Flutter-based Christian dating app focused on faith-driven relationships and church connections. Includes advanced faith filters, real-time chat, and face verification.",
    stack: ["Flutter", "Firebase", "AWS Rekognition", "GetX", "RevenueCat"],
  },
  {
    title: "Eventyzze",
    category: "Events / Live Streaming",
    image: "/assets/Eventyzze.png",
    description: "Flutter-based event discovery and live streaming platform where users can browse trending shows, create events with media ads, and join live streams powered by Agora.",
    stack: ["Flutter", "Agora RTC", "Firebase", "GetX", "Dio"],
  },
  {
    title: "Pitch Live",
    category: "Social Commerce / Streaming",
    image: "/assets/pitchLive.png",
    description: "Flutter-based live streaming and social commerce app connecting creators and buyers through real-time video, short-video feeds, and interactive gifting.",
    stack: ["Flutter", "Agora RTC", "Firebase", "GetX", "Socket.io"],
  },
  {
    title: "Zilo Live",
    category: "Mobile Application / Social",
    image: "/assets/ic_app_logo.webp",
    description: "Real-time social live streaming and audio room platform with PK battles, private chat, virtual gifts, and wallet management. Built for high-scale interaction with a complete creator economy.",
    stack: ["Flutter", "Node.js", "Agora RTC", "Socket.io", "MongoDB"],
  },
  {
    title: "Legal Ace",
    category: "Mobile Application",
    image: "/assets/legalAce.png",
    description: "AI-powered legal study mobile app published on the Play Store. Built for law students with smart case briefs, quiz modules, and collaborative group audio discussions.",
    stack: ["Flutter", "Firebase", "AI APIs", "Audio SDK"],
    link: "https://play.google.com/store/apps/details?id=com.legalace.legalace&hl=en",
  },
  {
    title: "Copono",
    category: "Mobile Application",
    image: "/assets/copono.png",
    description: "Rewards-based coupon mobile application that enables users to earn points by uploading purchase receipts and compete for monthly cash prizes.",
    stack: ["Flutter", "Rewards System", "Receipt Upload"],
    link: "https://play.google.com/store/apps/details?id=com.copono.copono",
  },
  {
    title: "Vera Live App",
    category: "Mobile Application",
    image: "/assets/veraAppLogo.png",
    description: "Full-featured live audio and video streaming platform with multi-seat room management, virtual economy, and real-time rankings.",
    stack: ["Flutter", "Agora SDK", "Socket.io", "REST APIs"],
  },
  {
    title: "Omly Chat App",
    category: "Mobile Application",
    image: "/assets/omlyChat.png",
    description: "Social app combining one-to-one messaging and group audio rooms with live gifting and a smooth live-app-style UI experience.",
    stack: ["Flutter", "Firebase", "GetX"],
  },
  {
    title: "TRACAM",
    category: "Mobile Application",
    image: "/assets/tracam.png",
    description: "AI-assisted PTZ auto-tracking mobile system for track & field events. Enables automatic race tracking and live streaming.",
    stack: ["Flutter", "RTMP", "AI Tracking", "PTZ IP"],
  },
  {
    title: "Lifedock",
    category: "Web Application / Healthcare",
    image: "/assets/lifedock.png",
    description: "Modern healthcare platform connecting doctors and patients, enabling smooth communication and appointment management.",
    stack: ["Flutter Web", "Firebase", "Clean Arch"],
  },
  {
    title: "Car Assist",
    category: "Mobile Application",
    image: "/assets/carassest.png",
    description: "Car-sharing platform with dual roles (borrower & lender), eKYC onboarding, secure payments, and real-time chat.",
    stack: ["Flutter", "Firebase", "Google Maps"],
  },
  {
    title: "Fit_Jessie",
    category: "Mobile Application",
    image: "/assets/fit-jessi.svg",
    description: "Modern fitness & gym mobile application helping users manage workouts, training routines, and overall fitness journey.",
    stack: ["Flutter", "REST APIs", "GetX"],
  },
  {
    title: "Admin / Live Panels",
    category: "Web / Internal Tools",
    image: "/assets/live-pannel.svg",
    description: "Comprehensive admin dashboards powering live audio apps — managing user moderation, virtual economy, and real-time room monitoring.",
    stack: ["Flutter Web", "Firebase", "Realtime DB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue text-sm font-bold tracking-widest uppercase mb-4 block">Production Apps</span>
            <h2 className="text-4xl lg:text-5xl font-bold">Real Apps. Real Users.<br /><span className="gradient-text">Real Impact.</span></h2>
          </div>
          <p className="text-muted max-w-md">
            A selection of my professional work, ranging from real-time streaming platforms to AI-powered educational tools and internal web panels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border-white/5 hover:border-blue/30 transition-all flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    unoptimized={project.image.endsWith('.svg')}
                  />
                </div>
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <PlayCircle size={24} />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center cursor-default">
                      <ExternalLink size={24} />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue mb-2">{project.category}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue transition-colors">{project.title}</h3>
                <p className="text-sm text-muted mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-muted2 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/imnisar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary group inline-block"
          >
            See More Projects
            <motion.span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
