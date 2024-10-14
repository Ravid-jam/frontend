"use client";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import EmblaCarouselDotButton from "./DotButton";

type EmblaCarouselProps = {
  slides?: string[];
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
      <div className="embla__container h-44 md:h-52 cursor-pointer">
        {slides?.map((item, index) => (
          <div
            className="embla__slide flex justify-center items-center"
            key={index}
          >
            <img
              src={item}
              className="h-full w-full object-fill md:object-cover"
            />
          </div>
        ))}
      </div>
      <div className="embla__dots flex justify-center items-center ">
        {slides &&
          slides.length > 1 &&
          slides?.map((_, index) => (
            <EmblaCarouselDotButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
      </div>
    </div>
  );
}
