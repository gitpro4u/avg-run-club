'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function JoinModal({ isOpen, onClose, onSubmit }: JoinModalProps) {
  
  const [formData, setFormData] = React.useState({
    fullName: '', age: '', email: '', phone: '', level: 'Beginner', emergencyContact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ fullName: '', age: '', email: '', phone: '', level: 'Beginner', emergencyContact: '' });
  };

  

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="glass w-full max-w-md rounded-3xl p-9 relative"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white">
              <X size={22} />
            </button>

            <div className="text-center mb-8">
              <img src="/avg-logo.svg" alt="" className="h-9 mx-auto mb-4" />
              <div className="text-3xl font-bold tracking-tight">Join AVG Run Club</div>
            </div>

            <button
              className="w-full bg-[#FF002E] py-3 rounded-xl"
            >
                Join AVG Run Club
            </button>

            <div className="text-center text-xs text-white/50 mb-6">or</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="fullName" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} placeholder="Full Name" required className="w-full bg-black border border-white/10 px-5 py-3.5 rounded-2xl" />
              <div className="grid grid-cols-2 gap-4">
                <input name="age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} placeholder="Age" type="number" required className="bg-black border border-white/10 px-5 py-3.5 rounded-2xl" />
                <input name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Phone" required className="bg-black border border-white/10 px-5 py-3.5 rounded-2xl" />
              </div>
              <input name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email" type="email" required className="w-full bg-black border border-white/10 px-5 py-3.5 rounded-2xl" />
              <input name="emergencyContact" value={formData.emergencyContact} onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})} placeholder="Emergency Contact" required className="w-full bg-black border border-white/10 px-5 py-3.5 rounded-2xl" />
              
              <select name="level" value={formData.level} onChange={(e) => setFormData({...formData, level: e.target.value})} className="w-full bg-black border border-white/10 px-5 py-3.5 rounded-2xl">
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </select>

              <button type="submit" className="w-full py-4 bg-[#FF002E] rounded-2xl font-semibold mt-2">Join AVG Run Club</button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
