// src/features/Home/BlogSection/BlogSection.jsx
import { useCallback, useMemo } from "react";
import * as S from "./BlogSection.styled";
import SectionHeading from "../../../components/SectionHeading";
import blogData from "../../../data/pages/Home/blogData";

const { heading, blogs } = blogData;

/**
 * Blog card component for the main (featured) blog post
 * Displays large thumbnail, full title, description and metadata
 */
const MainBlogCard = ({ blog, onClick }) => {
  const handleClick = () => onClick(blog.id);

  return (
    <S.MainBlogCard onClick={handleClick} onKeyDown={(e) => e.key === 'Enter' && handleClick()} tabIndex={0} role="button" aria-label={`Read full article: ${blog.title}`}>
      <S.MainBlogThumbnail
        src={blog.thumbnail}
        alt={`${blog.title} - featured article thumbnail`}
        loading="eager"
        width={490}
        height={250}
      />
      <S.MainBlogBody>
        <div className="card-head">
          <time className="date" dateTime={new Date(blog.date).toISOString()}>
            {blog.date}
          </time>
          <div className="title-wrapper">
            <h3 className="title">{blog.title}</h3>
            <span className="badge" aria-label={`Reading time: ${blog.duration}`}>
              {blog.duration}
            </span>
          </div>
        </div>
        <p className="card-description">{blog.description}</p>
      </S.MainBlogBody>
    </S.MainBlogCard>
  );
};

/**
 * Secondary blog card component for the right column list
 * Displays horizontal layout with thumbnail, truncated title and description
 */
const SecondaryBlogCard = ({ blog, onClick }) => {
  const handleClick = () => onClick(blog.id);

  return (
    <S.SecondaryBlogCard onClick={handleClick} onKeyDown={(e) => e.key === 'Enter' && handleClick()} tabIndex={0} role="button" aria-label={`Read article: ${blog.title}`}>
      <S.SecondaryBlogThumbnail
        src={blog.thumbnail}
        alt={`${blog.title} - article thumbnail`}
        loading="lazy"
        width={200}
        height={117}
      />
      <S.SecondaryBlogBody>
        <div className="card-head">
          <time className="date" dateTime={new Date(blog.date).toISOString()}>
            {blog.date}
          </time>
          <div className="title-wrapper">
            <h4 className="title">{blog.title}</h4>
            <span className="badge" aria-label={`Reading time: ${blog.duration}`}>
              {blog.duration}
            </span>
          </div>
        </div>
        <p className="card-description">{blog.description}</p>
      </S.SecondaryBlogBody>
    </S.SecondaryBlogCard>
  );
};

const BlogSection = () => {
  // Memoize blog data to prevent unnecessary recalculations
  const featuredBlog = useMemo(() => blogs[0], []);
  const otherBlogs = useMemo(() => blogs.slice(1), []);

  // Navigation handlers with proper accessibility
  const handleBlogClick = useCallback((blogId) => {
    // In a real application, use react-router or Next.js navigation
    // Example: navigate(`/blog/${blogId}`)
    console.log(`Navigating to blog post with ID: ${blogId}`);
    // For demonstration, you could also use:
    // window.location.href = `/blog/${blogId}`;
  }, []);

  const handleViewAllBlogs = useCallback(() => {
    // Navigate to blogs listing page
    console.log("Navigating to all blogs page");
    // Example: navigate('/blogs');
    // For demonstration:
    // window.location.href = '/blogs';
  }, []);

  return (
    <S.SectionWrapper aria-labelledby="blog-section-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.ariaLabel}
        id="blog-section-heading"
      />

      <S.ContentWrapper>
        <S.ContentGrid>
          <S.LeftContent>
            <MainBlogCard blog={featuredBlog} onClick={handleBlogClick} />
          </S.LeftContent>

          <S.RightContent>
            {otherBlogs.map((blog) => (
              <SecondaryBlogCard key={blog.id} blog={blog} onClick={handleBlogClick} />
            ))}
          </S.RightContent>
        </S.ContentGrid>

        <S.ViewAllButton
          onClick={handleViewAllBlogs}
          aria-label="View all blog articles"
          type="button"
        >
          View All Blogs
        </S.ViewAllButton>
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default BlogSection;