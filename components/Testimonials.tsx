'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Sneha Kapoor", text: "Best decision I made. The community is incredibly supportive!", level: "Intermediate" },
  { name: "Vikram Singh", text: "From couch to 10K in 4 months. AVG Run Club changed my life.", level: "Advanced" },
];

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="text-center mb-12">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-2">REAL STORIES</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px]">What our runners say</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass p-9 rounded-3xl"
          >
            <div className="text-2xl leading-tight mb-8">“{t.text}”</div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-white/60">{t.level} Runner</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
