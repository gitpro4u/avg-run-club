'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="max-w-2xl">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-3">OUR STORY</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px] leading-none mb-6">
          Started in 2024.<br />Growing every week.
        </h2>
        <p className="text-xl text-white/70">
          AVG Run Club was born from a simple idea: running is better together. 
          What started with 8 friends in Bharuch has become a movement.
        </p>
      </div>
    </section>
  );
}
