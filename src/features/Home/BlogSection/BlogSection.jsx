// BlogSection.jsx
import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import * as S from "./BlogSection.styled";
import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchBlogSectionPosts } from "../../../services/hygraph";
import { QueryError } from "../../../components/QueryState";
import {
  fadeIn,
  cardIn,
  scaleIn,
  hoverLift,
  staggerContainer,
  stagger,
  viewport,
} from "../../../animations";

const BlogSection = ({ id }) => {
  const shouldReduceMotion = useReducedMotion();

  const fetchData = useCallback(async () => {
    const { posts, heading } = await fetchBlogSectionPosts();
    const sorted = [...posts].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      if (a.isFeatured && b.isFeatured) {
        if (a.sortingOrder !== b.sortingOrder) {
          return (a.sortingOrder || 0) - (b.sortingOrder || 0);
        }
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(b.date) - new Date(a.date);
    });
    return { posts: sorted.slice(0, 3), heading };
  }, []);

  const { data, loading, error, retry , ref } = useCmsQuery(fetchData, { defer: true });
  const posts = data?.posts || [];
  const heading = data?.heading;

  if (loading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <S.SkeletonGrid aria-label="Loading blog posts">
          {[0, 1, 2].map((key) => (
            <S.SkeletonCard key={key} aria-hidden="true" />
          ))}
        </S.SkeletonGrid>
      </S.SectionWrapper>
    );
  }

  if (error || !heading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <QueryError
          message={error || "Blog content is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  if (posts.length === 0) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <SectionHeading
          pretitle={heading.pretitle}
          title={heading.title}
          highlight={heading.highlight}
          arialabel="blog-section-heading"
          id="blog-section-heading"
        />
        <S.EmptyState
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.2)}
        >
          No blog posts yet. Check back soon!
        </S.EmptyState>
      </S.SectionWrapper>
    );
  }

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  const cardWhileHover = shouldReduceMotion ? undefined : hoverLift.hover;
  const thumbWhileHover = shouldReduceMotion ? undefined : { scale: 1.05 };

  return (
    <S.SectionWrapper ref={ref} id={id} aria-labelledby="blog-section-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel="blog-section-heading"
        id="blog-section-heading"
      />

      <S.ContentWrapper>
        <S.ContentGrid
          variants={
            shouldReduceMotion ? fadeIn : staggerContainer(stagger.group)
          }
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.25)}
        >
          <S.LeftContent>
            <S.MainBlogCard
              to={`/blogs/${featuredPost.slug}`}
              aria-label={`Read full article: ${featuredPost.title}`}
              variants={shouldReduceMotion ? fadeIn : cardIn}
              whileHover={cardWhileHover}
              $featured={featuredPost.isFeatured}
            >
              <S.MainBlogThumbnailWrap>
                {featuredPost.isFeatured && (
                  <S.FeaturedBadge
                    variants={shouldReduceMotion ? fadeIn : scaleIn}
                  >
                    Featured
                  </S.FeaturedBadge>
                )}
                <S.MainBlogThumbnail
                  as={motion.img}
                  whileHover={thumbWhileHover}
                  src={
                    featuredPost.thumbnail?.url || "/images/placeholder.webp"
                  }
                  alt={`${featuredPost.title} - featured article thumbnail`}
                  loading="eager"
                  width={490}
                  height={250}
                />
              </S.MainBlogThumbnailWrap>
              <S.MainBlogBody>
                <div className="card-head">
                  <time className="date" dateTime={featuredPost.date}>
                    {featuredPost.date}
                  </time>
                  <div className="title-wrapper">
                    <h3 className="title">{featuredPost.title}</h3>
                    <span
                      className="badge"
                      aria-label={`Reading time: ${featuredPost.duration}`}
                    >
                      {featuredPost.duration}
                    </span>
                  </div>
                </div>
                <p className="card-description">{featuredPost.excerpt}</p>
              </S.MainBlogBody>
            </S.MainBlogCard>
          </S.LeftContent>

          <S.RightContent>
            {secondaryPosts.map((post) => (
              <S.SecondaryBlogCard
                key={post.slug}
                to={`/blogs/${post.slug}`}
                aria-label={`Read article: ${post.title}`}
                variants={shouldReduceMotion ? fadeIn : cardIn}
                whileHover={cardWhileHover}
              >
                <S.SecondaryBlogThumbnailWrap>
                  <S.SecondaryBlogThumbnail
                    as={motion.img}
                    whileHover={thumbWhileHover}
                    src={post.thumbnail?.url || "/images/placeholder.webp"}
                    alt={`${post.title} - article thumbnail`}
                    loading="lazy"
                    width={200}
                    height={117}
                  />
                </S.SecondaryBlogThumbnailWrap>
                <S.SecondaryBlogBody>
                  <div className="card-head">
                    <time className="date" dateTime={post.date}>
                      {post.date}
                    </time>
                    <div className="title-wrapper">
                      <h4 className="title">{post.title}</h4>
                      <span
                        className="badge"
                        aria-label={`Reading time: ${post.duration}`}
                      >
                        {post.duration}
                      </span>
                    </div>
                  </div>
                  <p className="card-description">{post.excerpt}</p>
                </S.SecondaryBlogBody>
              </S.SecondaryBlogCard>
            ))}
          </S.RightContent>
        </S.ContentGrid>

        <ViewAll link="/blogs" label="View All Blogs" />
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default BlogSection;
