import { ImQuotesRight } from "react-icons/im";
import * as S from "./TestimonialSection.styled";
import StarRating from "./StarRating";

const TestimonialCard = ({ profile, name, position, quote, rating }) => (
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

    <S.Quote itemProp="reviewBody">{quote}</S.Quote>
  </S.TestimonialCard>
);

export default TestimonialCard;