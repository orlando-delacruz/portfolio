import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { featured } from "../../../data/blogs";
import * as S from "./Featured.styled";

const Featured = () => {
  const {
    badge,
    thumbnail,
    thumbnailAlt,
    date,
    dateTime,
    duration,
    title,
    description,
    link,
  } = featured;

  return (
    <S.FeaturedSection aria-labelledby="featured-article-heading">
      <S.SectionLabel aria-hidden="true">Featured</S.SectionLabel>
      <S.Card>
        <S.Thumbnail>
          <img
            src={thumbnail}
            alt={thumbnailAlt}
            loading="eager"
            fetchPriority="high" // 👈 camelCase
            decoding="async"
            width="720"
            height="480"
          />
        </S.Thumbnail>
        <S.Content>
          <S.Badge aria-label="Featured article">{badge}</S.Badge>
          <S.Meta>
            <time dateTime={dateTime}>{date}</time>
            <GoDotFill className="sep" aria-hidden="true" />
            <span className="duration">{duration}</span>
          </S.Meta>
          <S.Title id="featured-article-heading">{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ReadBtn as={Link} to={link} aria-label={`Read article: ${title}`}>
            Read Article <FiArrowRight aria-hidden="true" />
          </S.ReadBtn>
        </S.Content>
      </S.Card>
    </S.FeaturedSection>
  );
};

export default Featured;
