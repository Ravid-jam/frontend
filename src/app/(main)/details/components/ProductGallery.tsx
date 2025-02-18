"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { IImage } from "../../homepage/components/Product";

interface ProductGalleryProps {
  images: IImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const settings = {
    dots: true,
    customPaging: (i: number) => (
      <div
        className={`relative h-24 w-24 overflow-hidden rounded-lg border transition-all duration-300 ${
          selectedImage === i
            ? "border-primary ring-2 ring-primary"
            : "border-gray-300"
        }`}
      >
        <Image
          src={images[i]?.url}
          alt={`Thumbnail ${i + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ),
    dotsClass: "slick-dots custom-dots flex gap-2 mt-4",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current: number) => setSelectedImage(current),
  };

  return (
    <div className="space-y-4">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div
            key={i}
            className="relative  aspect-[4/6] max-h-[600px] w-full overflow-hidden border border-gray-200"
          >
            <Image
              src={image.url}
              alt={`Product image ${i + 1}`}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
