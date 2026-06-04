import { useState, useRef, useLayoutEffect } from "react";
import { ImQuotesRight } from "react-icons/im";
import * as S from "./TestimonialSection.styled";
import StarRating from "./StarRating";

const TestimonialCard = ({ profile, name, position, quote, rating }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const quoteRef = useRef(null);

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
    >
      <meta itemProp="reviewRating" content={rating ?? 5} />

      <S.CardHeader>
        <S.QuoteIcon aria-hidden="true">
          <ImQuotesRight />
        </S.QuoteIcon>

        <S.Profile
          src={profile}
          alt={`${name} profile picture`}
          loading="lazy"
          decoding="async"
          width={58}
          height={58}
        />

        <S.Details>
          <S.ProfileDetails>
            <S.Name
              itemScope
              itemType="https://schema.org/Person"
              itemProp="author"
            >
              <span itemProp="name">{name}</span>
            </S.Name>
            <S.Position>{position}</S.Position>
          </S.ProfileDetails>
          <StarRating rating={rating ?? 5} reviewerName={name} />
        </S.Details>
      </S.CardHeader>

      <S.Quote
        ref={quoteRef}
        className={!expanded ? "clamped" : ""}
        itemProp="reviewBody"
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