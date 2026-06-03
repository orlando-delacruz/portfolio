import { FaStar } from "react-icons/fa";
import * as S from "./TestimonialSection.styled";

const StarRating = ({ rating = 5, reviewerName }) => (
  <S.Ratings aria-label={`${rating} out of 5 stars — ${reviewerName}`}>
    {Array.from({ length: rating }, (_, i) => (
      <FaStar key={i} className="star-icon" aria-hidden="true" />
    ))}
  </S.Ratings>
);

export default StarRating;