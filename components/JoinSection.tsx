'use client';

import React from 'react';

interface JoinSectionProps {
  onJoinClick: () => void;
}

export default function JoinSection({ onJoinClick }: JoinSectionProps) {
  return (
    <section id="join" className="bg-zinc-950 py-24 border-y border-white/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-3">BECOME A MEMBER</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px] mb-4">Join The Club</h2>
        <p className="text-xl text-white/70 mb-10">All paces welcome. No judgment. Just progress.</p>
        
        <button 
          onClick={onJoinClick}
          className="px-12 py-4 bg-[#FF002E] rounded-2xl text-lg font-semibold hover:bg-[#FF002E]/90 transition-all"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
