// BlogSection.jsx
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import * as S from "./BlogSection.styled";
import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import Loading from "../../../components/Loading";
import { fetchAllBlogPosts } from "../../../services/hygraph";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllBlogPosts();
        const sorted = [...data].sort((a, b) => {
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
        setPosts(sorted.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <S.SectionWrapper id={id}>
        <Loading fullPage text="Loading blog posts..." />
      </S.SectionWrapper>
    );
  }

  if (error) {
    return (
      <S.SectionWrapper id={id}>
        <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          Failed to load blog posts. Please try again later.
        </p>
      </S.SectionWrapper>
    );
  }

  if (posts.length === 0) {
    return (
      <S.SectionWrapper id={id}>
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
    <S.SectionWrapper id={id} aria-labelledby="blog-section-heading">
      <SectionHeading
        pretitle="Blogs"
        title="Latest Articles &"
        highlight="Learning Journey"
        arialabel="latest articles"
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
