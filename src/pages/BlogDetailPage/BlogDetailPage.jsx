import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchBlogPostBySlug } from "../../services/hygraph";
import HygraphRichText from "../../components/RichText";
import Loading from "../../components/Loading";
import CallToAction from "../../components/CallToAction";
import Author from "../../features/BlogDetail/Author";
import * as S from "./BlogDetailPage.styled";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError(err.message || "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <S.PageWrapper>
        <Loading fullPage text="Loading article..." />
      </S.PageWrapper>
    );
  }

  if (error || !post) {
    return (
      <S.NotFoundWrapper>
        <h2>Article not found</h2>
        <p>
          {error || "This article does not exist or may have been removed."}
        </p>
        <Link to="/blogs">← Back to Blogs</Link>
      </S.NotFoundWrapper>
    );
  }

  const { title, content, thumbnail, date, duration, blogCategory, author } =
    post;

  return (
    <>
      <Helmet>
        <title>{`${title} | Orlando Dela Cruz`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <S.PageWrapper>
        {/* Hero */}
        <S.HeroSection>
          <S.HeroInner>
            {blogCategory && (
              <S.CategoryLabel>{blogCategory.name}</S.CategoryLabel>
            )}
            <S.Title>{title}</S.Title>
            <S.MetaRow>
              <span>{date}</span>
              <span>•</span>
              <span>{duration}</span>
            </S.MetaRow>
            {author && (
              <S.AuthorInfoInline>By {author.name}</S.AuthorInfoInline>
            )}
            {thumbnail && (
              <S.FeaturedImage
                src={thumbnail.url}
                alt={title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            )}
          </S.HeroInner>
        </S.HeroSection>

        {/* Content */}
        <S.ContentSection>
          <HygraphRichText content={content?.raw} />

          {/* Author Section */}
          {author && <Author author={author} />}
        </S.ContentSection>

        <CallToAction />
      </S.PageWrapper>
    </>
  );
};

export default BlogDetailPage;
