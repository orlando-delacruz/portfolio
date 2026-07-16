// TestimonialCard.jsx
import { useState, useRef, useLayoutEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { ImQuotesRight } from "react-icons/im";
import * as S from "./TestimonialSection.styled";
import StarRating from "./StarRating";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  iconHover,
  hoverLift,
  duration,
  ease,
} from "../../../animations";

// Local: fade + slight scale/rotate for the quote glyph's one-time
// reveal. Not a hover effect — no shared variant covers this shape.
const quoteIconIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: duration.hover, ease: ease.standard },
  },
};

const TestimonialCard = ({
  profile,
  name,
  position,
  quote,
  rating,
  variants,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const quoteRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    setIsClamped(el.scrollHeight > el.clientHeight);
  }, [quote]);

  return (
    <S.TestimonialCard
      itemScope
      itemType="https://schema.org/Review"
      itemProp="review"
      variants={variants}
      whileHover={
        shouldReduceMotion ? undefined : { ...hoverLift.hover, scale: 1.02 }
      }
    >
      <meta itemProp="reviewRating" content={rating ?? 5} />

      <S.CardHeader>
        <S.QuoteIcon
          aria-hidden="true"
          variants={shouldReduceMotion ? fadeIn : quoteIconIn}
        >
          <ImQuotesRight />
        </S.QuoteIcon>

        <S.Profile
          src={profile}
          alt={`${name} profile picture`}
          loading="lazy"
          decoding="async"
          width={58}
          height={58}
          variants={shouldReduceMotion ? fadeIn : scaleIn}
          whileHover={shouldReduceMotion ? undefined : iconHover.hover}
        />

        <S.Details>
          <S.ProfileDetails>
            <S.Name
              itemScope
              itemType="https://schema.org/Person"
              itemProp="author"
              variants={shouldReduceMotion ? fadeIn : fadeUp}
            >
              <span itemProp="name">{name}</span>
            </S.Name>
            <S.Position variants={shouldReduceMotion ? fadeIn : fadeUp}>
              {position}
            </S.Position>
          </S.ProfileDetails>
          <StarRating rating={rating ?? 5} reviewerName={name} />
        </S.Details>
      </S.CardHeader>

      <S.Quote
        ref={quoteRef}
        className={!expanded ? "clamped" : ""}
        itemProp="reviewBody"
        variants={shouldReduceMotion ? fadeIn : fadeUp}
      >
        {quote}
      </S.Quote>

      {(isClamped || expanded) && (
        <S.SeeMoreButton
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "See less" : "See more"}
        </S.SeeMoreButton>
      )}
    </S.TestimonialCard>
  );
};

export default TestimonialCard;
