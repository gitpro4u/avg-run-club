'use client';

import React, { useState } from 'react';
import { useClub } from '../../context/ClubContext';

export default function AdminDashboard() {
  const { events, members, addEvent, deleteEvent } = useClub();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', distance: '', location: '', slots: 20 });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') setIsLoggedIn(true);
    else alert('Wrong password');
  };

  const handleAddEvent = () => {
    if (!newEvent.name || !newEvent.date) return alert("Please fill required fields");
    addEvent({ ...newEvent, slots: Number(newEvent.slots) });
    setNewEvent({ name: '', date: '', time: '', distance: '', location: '', slots: 20 });
  };

  const exportMembers = () => {
    const csv = [
      ['Name', 'Email', 'Level', 'Join Date'],
      ...members.map(m => [m.name, m.email, m.level, m.joinDate])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'avg-members.csv';
    a.click();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6">
        <div className="glass p-10 rounded-3xl w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-6 text-center tracking-tight">Admin Access</h1>
          <form onSubmit={handleLogin}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-black border border-white/10 px-5 py-3.5 rounded-2xl mb-4" />
            <button type="submit" className="w-full py-3.5 bg-[#FF002E] rounded-2xl font-semibold">Login</button>
          </form>
          <p className="text-center text-xs text-white/40 mt-4">Password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-[-1px]">Admin Dashboard</h1>
            <p className="text-white/60">AVG Run Club • Bharuch</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-sm px-4 py-2 border border-white/20 rounded-full">Logout</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Events */}
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-6">Events</h2>
            <div className="space-y-4 mb-8">
              {events.map(event => (
                <div key={event.id} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl">
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-xs text-white/50">{event.date} • {event.slots} slots</div>
                  </div>
                  <button onClick={() => deleteEvent(event.id)} className="text-red-500 text-sm">Delete</button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="font-medium mb-4">Add New Event</h3>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Event Name" value={newEvent.name} onChange={e => setNewEvent({...newEvent, name: e.target.value})} className="input" />
                <input type="date" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} className="input" />
                <input placeholder="Time" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} className="input" />
                <input placeholder="Distance" value={newEvent.distance} onChange={e => setNewEvent({...newEvent, distance: e.target.value})} className="input" />
              </div>
              <button onClick={handleAddEvent} className="mt-4 w-full py-3 bg-[#FF002E] rounded-2xl font-semibold">Add Event</button>
            </div>
          </div>

          {/* Members */}
          <div className="glass p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Members ({members.length})</h2>
              <button onClick={exportMembers} className="text-sm px-4 py-2 bg-white text-black rounded-full font-medium">Export CSV</button>
            </div>

            <div className="space-y-4">
              {members.length > 0 ? members.map(member => (
                <div key={member.id} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl">
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-white/50">{member.email}</div>
                  </div>
                  <div className="text-xs px-3 py-1 bg-white/10 rounded-full inline-block">{member.level}</div>
                </div>
              )) : <p className="text-white/50">No members yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
