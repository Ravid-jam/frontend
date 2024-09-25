"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import EmblaCarouselDotButton from "./DotButton";

export const data = [
  {
    img: "https://juniperfashion.com/cdn/shop/files/juniper_banner_tulssi.png?v=1712321177&width=1600",
  },
  {
    img: "https://juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=300%20300w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=400%20400w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=500%20500w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=600%20600w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=700%20700w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=800%20800w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=900%20900w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1000%201000w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1200%201200w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1400%201400w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1600%201600w",
  },
  {
    img: "https://juniperfashion.com/cdn/shop/files/WhatsApp_Image_2024-04-05_at_18.46.32.jpg?v=1712323299&width=1600",
  },
  {
    img: "https://juniperfashion.com/cdn/shop/files/Juniper_Fashion_Banner_1_-_Desktop_7295af3f-dcce-4ef0-9c5a-862c2bca5782.webp?v=1725968256&width=1600",
  },
  {
    img: "https://juniperfashion.com/cdn/shop/files/Juniper_Fashion_Banner_2_-_Desktop_751c255a-193d-42a3-8850-1faf6fc81cb5.webp?v=1725968642&width=1600",
  },
];

type EmblaCarouselProps = {
  slides?: string[];
  autoplayInterval?: number;
};
export default function Hero({ autoplayInterval = 6000 }: EmblaCarouselProps) {
  // const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
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
    <div
      className="embla relative h-64 md:h-80 lg:h-[450px] xl:h-auto"
      ref={emblaRef}
    >
      <div className="embla__container h-full ">
        {data.map((item, index) => (
          <div
            className="embla__slide flex justify-center items-center"
            key={index}
          >
            <img src={item.img} className=" h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="md:flex items-center hidden">
        <div className="flex gap-x-3 m-2">
          <button
            onClick={scrollPrev}
            className="absolute left-4 bottom-0 transform -translate-y-1/2 bg-[#E40046] text-white p-2 rounded-full hover:bg-[#E40046]"
            aria-label="Previous"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="absolute left-20 bottom-0 transform -translate-y-1/2 bg-[#E40046] text-white p-2 rounded-full hover:bg-[#E40046]"
            aria-label="Next"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="absolute right-3 bottom-7  flex justify-end mr-4">
          {data.map((_, index) => (
            <EmblaCarouselDotButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
