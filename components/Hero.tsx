'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback image if video fails */}
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#080808]/90 to-[#080808]" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.img 
          src="/avg-logo.svg" 
          alt="AVG Run Club" 
          className="h-14 mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-4.5px] leading-none mb-4">
          AVG RUN CLUB
        </h1>
        
        <p className="text-4xl md:text-6xl font-semibold tracking-[-2px] text-[#FF002E] mb-4">
          Run Far, Not Fast.
        </p>
        <p className="text-2xl text-white/80 mb-12">All Paces Welcome.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onJoinClick}
            className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-2xl text-lg font-semibold hover:bg-[#FF002E] hover:text-white transition-all active:scale-[0.985]"
          >
            Join The Club
          </button>
          <a href="#runs" className="flex items-center justify-center px-10 py-4 border border-white/30 rounded-2xl text-lg font-medium hover:bg-white/5 transition-all">
            Upcoming Runs
          </a>
        </div>
      </div>
    </section>
  );
}
