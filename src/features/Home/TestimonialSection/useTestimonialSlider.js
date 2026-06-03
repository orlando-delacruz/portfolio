import { useState, useCallback, useRef, useEffect } from "react";

const buildSlides = (items, perPage) =>
  Array.from({ length: Math.ceil(items.length / perPage) }, (_, i) =>
    items.slice(i * perPage, i * perPage + perPage)
  );

const useTestimonialSlider = (testimonials, cardsPerView) => {
  const slides = buildSlides(testimonials, cardsPerView);
  const totalSlides = slides.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const liveRegionRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [goToPrevious, goToNext]
  );

  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `Showing testimonials page ${currentIndex + 1} of ${totalSlides}`;
    }
  }, [currentIndex, totalSlides]);

  return {
    slides,
    currentIndex,
    visibleTestimonials: slides[currentIndex],
    liveRegionRef,
    goTo,
    goToPrevious,
    goToNext,
    handleKeyDown,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalSlides - 1,
  };
};

export default useTestimonialSlider;