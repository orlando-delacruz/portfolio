import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import * as S from "./BlogList.styled";

const BlogCard = ({ article, index }) => {
  const {
    thumbnail,
    thumbnailAlt,
    date,
    dateTime,
    duration,
    category,
    title,
    description,
    slug,
  } = article;

  const href = `/blogs/${slug}`;

  return (
    <S.Card $index={index} aria-label={title}>
      <S.Thumbnail>
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          loading={index < 3 ? "eager" : "lazy"}
          fetchpriority={index === 0 ? "high" : undefined}
          decoding="async"
          width="480"
          height="270"
        />
      </S.Thumbnail>
      <S.CardContent>
        <S.CardMeta>
          <S.CategoryBadge>{category}</S.CategoryBadge>
          <S.Duration aria-label={`Reading time: ${duration}`}>{duration}</S.Duration>
        </S.CardMeta>
        <S.DateText dateTime={dateTime}>{date}</S.DateText>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        <S.Divider />
        <S.ReadMore as={Link} to={href} aria-label={`Read article: ${title}`}>
          Read More <FiArrowRight aria-hidden="true" />
        </S.ReadMore>
      </S.CardContent>
    </S.Card>
  );
};

export default BlogCard;