'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import JoinSection from '../components/JoinSection';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import JoinModal from '../components/JoinModal';
import { useClub } from '../context/ClubContext';

export default function AvgRunClub() {
  const { events, members, addMember } = useClub();
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleRegisterEvent = (id: number) => {
    // For now, just show alert (real implementation can reduce slots)
    alert("Successfully registered for the run!");
  };

  const handleJoinSubmit = (data: any) => {
    const newId = `AVG-${Date.now().toString().slice(-6)}`;
    
    addMember({
      name: data.fullName,
      email: data.email,
      level: data.level,
    });

    setMemberId(newId);
    setShowJoinModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <Navbar onJoinClick={() => setShowJoinModal(true)} />
      <Hero onJoinClick={() => setShowJoinModal(true)} />
      <About />
      <Events events={events} onRegister={handleRegisterEvent} />
      <Locations />
      <JoinSection onJoinClick={() => setShowJoinModal(true)} />
      <Community members={members} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Gallery />
      <Testimonials />
      <Footer />

      <JoinModal 
        isOpen={showJoinModal} 
        onClose={() => setShowJoinModal(false)} 
        onSubmit={handleJoinSubmit} 
      />

      {showSuccess && (
        <div className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-8xl mb-4">🏃</div>
            <div className="text-4xl font-semibold mb-3 tracking-tight">Welcome to the club!</div>
            <div className="text-[#FF002E] font-mono text-4xl tracking-[5px]">{memberId}</div>
          </div>
        </div>
      )}
    </div>
  );
}
