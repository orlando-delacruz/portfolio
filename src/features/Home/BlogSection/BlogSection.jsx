import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./BlogSection.styled";
import SectionHeading from "../../../components/SectionHeading";
import blogData from "../../../data/pages/Home/blogData";
import ViewAll from "../../../components/Buttons/ViewAll";

const { heading, blogs } = blogData;

const MainBlogCard = ({ blog, onClick }) => {
  const handleClick = () => onClick();

  return (
    <S.MainBlogCard
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`Read full article: ${blog.title}`}
    >
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

const SecondaryBlogCard = ({ blog, onClick }) => {
  const handleClick = () => onClick();

  return (
    <S.SecondaryBlogCard
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${blog.title}`}
    >
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

const BlogSection = ({ id }) => {
  const navigate = useNavigate();
  const featuredBlog = useMemo(() => blogs[0], []);
  const otherBlogs = useMemo(() => blogs.slice(1), []);

  const handleBlogClick = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  return (
    <S.SectionWrapper id={id} aria-labelledby="blog-section-heading">
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

        <ViewAll
          link="/blogs"
          label="View All Blogs"
        />
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default BlogSection;