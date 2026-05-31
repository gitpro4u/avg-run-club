'use client';

import React from 'react';

const locations = [
  { name: "Bharuch Riverfront", distance: "5-8K", duration: "45-60 min", coords: "21.7051,72.9959" },
  { name: "City Garden Route", distance: "6-10K", duration: "50-70 min", coords: "21.7123,73.0021" },
  { name: "Highway Endurance", distance: "12-18K", duration: "90-120 min", coords: "21.6894,72.9784" },
  { name: "Weekend Long Run", distance: "15-22K", duration: "2-2.5 hrs", coords: "21.6987,73.0156" },
];

export default function Locations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="mb-12">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-2">WHERE WE RUN</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px]">Run Locations</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-3xl overflow-hidden border border-white/10 h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.5!2d72.99!3d21.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQyJzE4LjQiTiA3MsKwNTknMjEuNiJF!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Locations List */}
        <div className="space-y-4">
          {locations.map((loc, index) => (
            <div key={index} className="glass p-6 rounded-3xl flex justify-between items-center card">
              <div>
                <div className="font-semibold text-xl tracking-tight">{loc.name}</div>
                <div className="text-sm text-white/60 mt-1">{loc.distance} • {loc.duration}</div>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${loc.coords}`}
                target="_blank"
                className="px-6 py-2.5 bg-white text-black rounded-2xl text-sm font-semibold hover:bg-[#FF002E] hover:text-white transition-all"
              >
                Navigate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
