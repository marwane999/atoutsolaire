"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg">
        <Image
          src={images[selected]}
          alt={name}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selected === index ? "border-primary" : "border-border"
              }`}
            >
              <Image
                src={img}
                alt={`${name} - vue ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
