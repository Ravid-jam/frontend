"use client";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import EmbalmCarouselDotButton from "./EmbalmCarouselDotButton";
import { IImage } from "../app/(main)/homepage/components/Product";

type EmblaCarouselProps = {
  slides?: IImage[];
  autoplayInterval?: number;
};
export default function ProductCarousel({
  slides,
  autoplayInterval = 10000,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Fade(),
    Autoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      scrollNext();
    }, autoplayInterval);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, autoplayInterval, scrollNext]);

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container h-60 md:h-72 cursor-pointer">
        {slides?.map((item, index) => (
          <div
            className="embla__slide flex justify-center items-center"
            key={index}
          >
            <Image
              src={item.url}
              alt="product image"
              quality={100}
              priority
              fill
              className="h-full w-full rounded-t-lg"
            />
          </div>
        ))}
      </div>
      <div className="embla__dots flex justify-center items-center">
        {slides &&
          slides.length > 1 &&
          slides?.map((_, index) => (
            <EmbalmCarouselDotButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
      </div>
    </div>
  );
}
