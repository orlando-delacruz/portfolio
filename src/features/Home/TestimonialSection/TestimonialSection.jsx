// TestimonialSection.jsx
import { AnimatePresence, useReducedMotion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as S from "./TestimonialSection.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchTestimonialsSection } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import useTestimonialSlider from "./useTestimonialSlider";
import TestimonialCard from "./TestimonialCard";
import {
  fadeIn,
  cardIn,
  buttonHover,
  stagger,
  duration,
  ease,
  viewport,
} from "../../../animations";

const CARDS_PER_VIEW = 3;

// Local composition: page-level crossfade for slider navigation.
// Needs a spring (per spec) and staggerChildren for the cards inside —
// neither shape exists in the shared variant set.
const gridVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: stagger.group,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: duration.hover, ease: ease.standard },
  },
};

// Extends the shared cardIn shape with staggerChildren so each card's
// internal content (icon, avatar, name, rating, quote) reveals in order.
const cardVariants = {
  hidden: cardIn.hidden,
  visible: {
    ...cardIn.visible,
    transition: {
      ...cardIn.visible.transition,
      staggerChildren: stagger.group * 0.6,
      delayChildren: 0.05,
    },
  },
};

const TestimonialSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const { data, loading, error, retry , ref } = useCmsQuery(fetchTestimonialsSection, { defer: true });

  const finalGridVariants = shouldReduceMotion ? fadeIn : gridVariants;
  const finalCardVariants = shouldReduceMotion ? fadeIn : cardVariants;

  if (loading) {
    return (
      <S.SectionWrapper ref={ref} id="testimonials">
        <SectionSkeleton label="Loading testimonials..." lines={3} />
      </S.SectionWrapper>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.SectionWrapper ref={ref} id="testimonials">
        <QueryError
          message={error || "Testimonials content is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  const { testimonials, heading } = data;

  return (
    <TestimonialSlider
      testimonials={testimonials}
      heading={heading}
      shouldReduceMotion={shouldReduceMotion}
      finalGridVariants={finalGridVariants}
      finalCardVariants={finalCardVariants}
      sectionRef={ref}
    />
  );
};

const TestimonialSlider = ({
  testimonials,
  heading,
  shouldReduceMotion,
  finalGridVariants,
  finalCardVariants,
  sectionRef,
}) => {
  const {
    totalSlides,
    currentIndex,
    visibleTestimonials,
    goToPrevious,
    goToNext,
    handleKeyDown,
    isFirst,
    isLast,
  } = useTestimonialSlider(testimonials, CARDS_PER_VIEW);

  if (!testimonials.length) {
    return (
      <S.SectionWrapper ref={sectionRef} id="testimonials">
        <SectionHeading
          pretitle={heading.pretitle}
          title={heading.title}
          highlight={heading.highlight}
          ariaLabel="testimonials-heading"
          id="testimonials-heading"
        />
        <S.EmptyState
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.2)}
        >
          No testimonials yet.
        </S.EmptyState>
      </S.SectionWrapper>
    );
  }

  return (
    <S.SectionWrapper ref={sectionRef}
      id="testimonials"
      aria-labelledby="testimonial-heading"
      onKeyDown={handleKeyDown}
    >
      <SectionHeading
        id="testimonial-heading"
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        ariaLabel={heading.ariaLabel || "testimonials-heading"}
      />

      <S.ContentWrapper>
        <AnimatePresence mode="wait">
          <S.ContentGrid
            key={currentIndex}
            role="region"
            aria-label="Client testimonials"
            variants={finalGridVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={viewport(0.25)}
          >
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                variants={finalCardVariants}
                profile={testimonial.avatar?.url}
                name={testimonial.name}
                position={testimonial.position}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </S.ContentGrid>
        </AnimatePresence>

        <S.ActionButtons role="group" aria-label="Testimonial navigation">
          <S.NavButton
            type="button"
            onClick={goToPrevious}
            aria-label={`Previous testimonials, page ${currentIndex} of ${totalSlides}`}
            disabled={isFirst}
            whileHover={
              shouldReduceMotion || isFirst ? undefined : buttonHover.hover
            }
            whileTap={
              shouldReduceMotion || isFirst ? undefined : { scale: 0.96 }
            }
          >
            <FaChevronLeft aria-hidden="true" />
          </S.NavButton>

          <S.NavButton
            type="button"
            onClick={goToNext}
            aria-label={`Next testimonials, page ${currentIndex + 2} of ${totalSlides}`}
            disabled={isLast}
            whileHover={
              shouldReduceMotion || isLast ? undefined : buttonHover.hover
            }
            whileTap={
              shouldReduceMotion || isLast ? undefined : { scale: 0.96 }
            }
          >
            <FaChevronRight aria-hidden="true" />
          </S.NavButton>
        </S.ActionButtons>
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default TestimonialSection;
