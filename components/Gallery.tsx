'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800", type: "image" },
  { id: 2, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800", type: "image" },
  { id: 3, url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800", type: "image" },
  { id: 4, url: "https://images.unsplash.com/photo-1506629905607-21b4457d3f1e?w=800", type: "image" },
  { id: 5, url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", type: "image" },
  { id: 6, url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", type: "image" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
      <div className="mb-12 text-center">
        <div className="text-[#FF002E] text-xs tracking-[4px] mb-2">CAPTURED MOMENTS</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-2px]">Run Gallery</h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(index)}
            className="mb-4 break-inside-avoid overflow-hidden rounded-3xl cursor-pointer relative group"
          >
            <img 
              src={img.url} 
              alt={`Run moment ${index + 1}`} 
              className="w-full rounded-3xl transition-transform group-hover:scale-[1.03]" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[80] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
          >
            <X size={28} />
          </button>
          <img 
            src={images[selectedImage].url} 
            alt="Full size" 
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain" 
          />
        </div>
      )}
    </section>
  );
}
