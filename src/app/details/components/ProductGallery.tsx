"use client";

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border",
              selectedImage === i && "ring-2 ring-primary"
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
