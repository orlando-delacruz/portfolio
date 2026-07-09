import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import * as S from "./BlogList.styled";

const BlogCard = ({ article, index }) => {
  const { thumbnail, date, duration, blogCategory, title, excerpt, slug } =
    article;

  const thumbnailUrl = thumbnail?.url || "/images/placeholder.webp";
  const href = `/blogs/${slug}`;

  return (
    <S.Card $index={index} aria-label={title}>
      <S.Thumbnail>
        <img
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          loading={index < 3 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : undefined}
          decoding="async"
          width="480"
          height="270"
        />
      </S.Thumbnail>
      <S.CardContent>
        <S.CardMeta>
          <S.CategoryBadge>
            {blogCategory?.name || "Uncategorized"}
          </S.CategoryBadge>
          <S.Duration aria-label={`Reading time: ${duration}`}>
            {duration}
          </S.Duration>
        </S.CardMeta>
        <S.DateText dateTime={date}>{date}</S.DateText>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{excerpt}</S.CardDescription>
        <S.Divider />
        <S.ReadMore as={Link} to={href} aria-label={`Read article: ${title}`}>
          Read More <FiArrowRight aria-hidden="true" />
        </S.ReadMore>
      </S.CardContent>
    </S.Card>
  );
};

export default BlogCard;
