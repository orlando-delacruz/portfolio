import SectionHeading from "../../../components/SectionHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as S from "./TestimonialSection.styled";
import testimonialsData from "../../../data/pages/Home/testimonialsData";
import useTestimonialSlider from "./useTestimonialSlider";
import TestimonialCard from "./TestimonialCard";

const { heading, testimonials } = testimonialsData;
const CARDS_PER_VIEW = 6;

const TestimonialSection = () => {
  const {
    totalSlides,
    currentIndex,
    visibleTestimonials,
    liveRegionRef,
    goToPrevious,
    goToNext,
    handleKeyDown,
    isFirst,
    isLast,
  } = useTestimonialSlider(testimonials, CARDS_PER_VIEW);

  return (
    <S.SectionWrapper
      id="testimonials"
      aria-labelledby="testimonial-heading"
      onKeyDown={handleKeyDown}
    >

      <SectionHeading
        id="testimonial-heading"
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        ariaLabel={heading.ariaLabel}
      />

      <S.ContentWrapper>
        <S.ContentGrid role="region" aria-label="Client testimonials">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </S.ContentGrid>

        <span
          ref={liveRegionRef}
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />

        <S.ActionButtons role="group" aria-label="Testimonial navigation">
          <S.NavButton
            type="button"
            onClick={goToPrevious}
            aria-label={`Previous testimonials, page ${currentIndex} of ${totalSlides}`}
            disabled={isFirst}
          >
            <FaChevronLeft aria-hidden="true" />
          </S.NavButton>

          <S.NavButton
            type="button"
            onClick={goToNext}
            aria-label={`Next testimonials, page ${currentIndex + 2} of ${totalSlides}`}
            disabled={isLast}
          >
            <FaChevronRight aria-hidden="true" />
          </S.NavButton>
        </S.ActionButtons>


      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default TestimonialSection;