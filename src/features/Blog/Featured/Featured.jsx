import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { fetchFeaturedBlogPost } from "../../../services/hygraph";
import Loading from "../../../components/Loading";
import * as S from "./Featured.styled";

const Featured = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedBlogPost();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);

  if (loading) {
    return (
      <S.FeaturedSection>
        <Loading fullPage text="Loading featured article..." />
      </S.FeaturedSection>
    );
  }

  if (error || !post) {
    return (
      <S.FeaturedSection>
        <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
          No featured article available.
        </p>
      </S.FeaturedSection>
    );
  }

  const { thumbnail, date, duration, title, excerpt, slug, blogCategory } =
    post;
  const thumbnailUrl = thumbnail?.url || "/images/placeholder.webp";

  return (
    <S.FeaturedSection aria-labelledby="featured-article-heading">
      <S.SectionLabel aria-hidden="true">Featured</S.SectionLabel>
      <S.Card>
        <S.Thumbnail>
          <img
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="720"
            height="480"
          />
        </S.Thumbnail>
        <S.Content>
          <S.Badge aria-label="Featured article">Featured Article</S.Badge>
          <S.Meta>
            <time dateTime={date}>{date}</time>
            <GoDotFill className="sep" aria-hidden="true" />
            <span className="duration">{duration}</span>
          </S.Meta>
          {blogCategory && (
            <span
              style={{
                color: "var(--color-primary)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "inline-block",
              }}
            >
              {blogCategory.name}
            </span>
          )}
          <S.Title id="featured-article-heading">{title}</S.Title>
          <S.Description>{excerpt}</S.Description>
          <S.ReadBtn
            as={Link}
            to={`/blogs/${slug}`}
            aria-label={`Read article: ${title}`}
          >
            Read Article <FiArrowRight aria-hidden="true" />
          </S.ReadBtn>
        </S.Content>
      </S.Card>
    </S.FeaturedSection>
  );
};

export default Featured;
