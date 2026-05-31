'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  distance: string;
  location: string;
  slots: number;
}

interface Member {
  id: number;
  name: string;
  email: string;
  level: string;
  joinDate: string;
}

interface ClubContextType {
  events: Event[];
  members: Member[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: number) => void;
  addMember: (member: Omit<Member, 'id' | 'joinDate'>) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export function ClubProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>([
    { id: 1, name: "Riverfront Sunrise Run", date: "2026-06-02", time: "05:30", distance: "5K", location: "Bharuch Riverfront", slots: 28 },
    { id: 2, name: "City Garden Loop", date: "2026-06-05", time: "06:00", distance: "8K", location: "City Garden", slots: 15 },
    { id: 3, name: "Highway Endurance", date: "2026-06-08", time: "05:00", distance: "15K", location: "Highway Start Point", slots: 12 },
  ]);

  const [members, setMembers] = useState<Member[]>([]);

  // Load from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('avg_events');
    const savedMembers = localStorage.getItem('avg_members');
    
    if (savedEvents) setEvents(JSON.parse(savedEvents));
    if (savedMembers) setMembers(JSON.parse(savedMembers));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('avg_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('avg_members', JSON.stringify(members));
  }, [members]);

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent = { ...event, id: Date.now() };
    setEvents(prev => [...prev, newEvent]);
  };

  const deleteEvent = (id: number) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addMember = (member: Omit<Member, 'id' | 'joinDate'>) => {
    const newMember: Member = {
      ...member,
      id: Date.now(),
      joinDate: new Date().toISOString().split('T')[0],
    };
    setMembers(prev => [newMember, ...prev]);
  };

  return (
    <ClubContext.Provider value={{ events, members, addEvent, deleteEvent, addMember }}>
      {children}
    </ClubContext.Provider>
  );
}

export const useClub = () => {
  const context = useContext(ClubContext);
  if (!context) throw new Error('useClub must be used within ClubProvider');
  return context;
};
