import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./BlogSection.styled";
import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import Loading from "../../../components/Loading";
import { fetchAllBlogPosts } from "../../../services/hygraph";

const BlogSection = ({ id }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllBlogPosts();
        // Sort: featured first by sortingOrder, then date desc; non-featured after
        const sorted = [...data].sort((a, b) => {
          // Featured first
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;

          // Both featured: sort by sortingOrder (asc), then date desc
          if (a.isFeatured && b.isFeatured) {
            if (a.sortingOrder !== b.sortingOrder) {
              return (a.sortingOrder || 0) - (b.sortingOrder || 0);
            }
            return new Date(b.date) - new Date(a.date);
          }

          // Both non-featured: sort by date desc
          return new Date(b.date) - new Date(a.date);
        });

        // Take only first 3 for homepage
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
        <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
          No blog posts yet. Check back soon!
        </p>
      </S.SectionWrapper>
    );
  }

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

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
        <S.ContentGrid>
          {/* Main Blog Card */}
          <S.LeftContent>
            <S.MainBlogCard
              as={Link}
              to={`/blogs/${featuredPost.slug}`}
              aria-label={`Read full article: ${featuredPost.title}`}
            >
              <S.MainBlogThumbnail
                src={featuredPost.thumbnail?.url || "/images/placeholder.webp"}
                alt={`${featuredPost.title} - featured article thumbnail`}
                loading="eager"
                width={490}
                height={250}
              />
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

          {/* Secondary Blog Cards */}
          <S.RightContent>
            {secondaryPosts.map((post) => (
              <S.SecondaryBlogCard
                key={post.slug}
                as={Link}
                to={`/blogs/${post.slug}`}
                aria-label={`Read article: ${post.title}`}
              >
                <S.SecondaryBlogThumbnail
                  src={post.thumbnail?.url || "/images/placeholder.webp"}
                  alt={`${post.title} - article thumbnail`}
                  loading="lazy"
                  width={200}
                  height={117}
                />
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
