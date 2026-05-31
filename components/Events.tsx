'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Event {
  id: number; name: string; date: string; time: string; distance: string; location: string; slots: number;
}

interface EventsProps {
  events: Event[];
  onRegister: (id: number) => void;
}

export default function Events({ events, onRegister }: EventsProps) {
  return (
    <section id="runs" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="mb-12">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-2">THIS WEEK</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px]">Upcoming Runs</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl card"
          >
            <div className="flex justify-between mb-8">
              <div>
                <div className="font-semibold text-2xl tracking-tight">{event.name}</div>
                <div className="text-[#FF002E] mt-1">{event.distance}</div>
              </div>
              <div className="text-right text-sm">
                {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}<br />
                <span className="text-white/60">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70 mb-10">
              <MapPin size={16} /> {event.location}
            </div>

            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs text-white/50">SLOTS LEFT</div>
                <div className="text-5xl font-semibold tracking-tighter tabular-nums">{event.slots}</div>
              </div>
              <button 
                onClick={() => onRegister(event.id)}
                className="px-8 py-3 bg-white text-black rounded-2xl font-semibold text-sm hover:bg-[#FF002E] hover:text-white transition-all"
              >
                Register
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
