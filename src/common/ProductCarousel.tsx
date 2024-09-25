import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect } from "react";

type EmblaCarouselProps = {
  slides?: string[];
  autoplayInterval?: number;
};
export default function ProductCarousel({
  slides,
  autoplayInterval = 10000,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay(),
  ]);

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

    const autoplay = setInterval(() => {
      scrollNext();
    }, autoplayInterval);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, autoplayInterval, scrollNext]);
  return (
    <div>
      <div
        className="embla relative h-[450px] md:h-80 lg:h-[450px] xl:h-auto"
        ref={emblaRef}
      >
        <div className="embla__container h-full ">
          {slides?.map((item, index) => (
            <div
              className="embla__slide flex justify-center items-center"
              key={index}
            >
              <img src={item} className=" h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="md:flex items-center hidden">
          <div className="flex gap-x-3 m-2">
            <button
              onClick={scrollPrev}
              className="absolute right-14 bottom-2 transform -translate-y-1/2 bg-[#E40046] text-white p-1 rounded-full hover:bg-[#E40046]"
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 bottom-2 transform -translate-y-1/2 bg-[#E40046] text-white p-1 rounded-full hover:bg-[#E40046]"
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
