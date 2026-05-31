'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Member {
  id: number; name: string; level: string; joinDate: string; avatar: string;
}

interface CommunityProps {
  members: Member[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Community({ members, searchTerm, setSearchTerm }: CommunityProps) {
  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="community" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <div className="text-[#FF002E] text-xs tracking-[4px] mb-2">OUR RUNNERS</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-2px]">Community</h2>
        </div>
        <input 
          type="text" 
          placeholder="Search members..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-zinc-900 border border-white/10 px-5 py-3 rounded-2xl text-sm w-full md:w-80"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl flex items-center gap-5 card"
          >
            <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
            <div>
              <div className="font-semibold text-xl tracking-tight">{member.name}</div>
              <div className="text-sm text-white/60">{member.level} • Joined {member.joinDate}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
