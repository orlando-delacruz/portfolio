// StarRating.jsx
import { FaStar } from "react-icons/fa";
import { useReducedMotion } from "framer-motion";
import * as S from "./TestimonialSection.styled";
import { scaleIn, fadeIn, staggerContainer } from "../../../animations";

const StarRating = ({ rating = 5, reviewerName }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <S.Ratings
      aria-label={`${rating} out of 5 stars — ${reviewerName}`}
      variants={shouldReduceMotion ? fadeIn : staggerContainer(0.05)}
    >
      {Array.from({ length: rating }, (_, i) => (
        <S.StarWrap key={i} variants={shouldReduceMotion ? fadeIn : scaleIn}>
          <FaStar className="star-icon" aria-hidden="true" />
        </S.StarWrap>
      ))}
    </S.Ratings>
  );
};

export default StarRating;
