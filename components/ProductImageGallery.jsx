"use client";
import { useState } from "react";

export default function ProductImageGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      {/* Main Image */}
      <div className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                selectedIndex === index
                  ? "border-2 border-cyan-600 shadow-md ring-2 ring-cyan-100 ring-offset-1"
                  : "border border-slate-200 hover:border-cyan-400 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-white"></div>
              <img
                src={img}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-contain p-1 relative z-10"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
