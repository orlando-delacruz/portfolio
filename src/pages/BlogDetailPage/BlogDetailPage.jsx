import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import { blogDetailData } from "../../data/blogs";
import Hero from "../../features/BlogDetail/Hero";
import BlogContent from "../../features/BlogDetail/Content";
import CallToAction from "../../components/CallToAction";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  h2 {
    font-size: ${theme.typography.heading.h2};
    font-weight: ${theme.typography.weight.semibold};
  }
  p { color: rgba(255, 255, 255, 0.5); }
  a {
    color: ${theme.colors.primary};
    margin-top: 0.5rem;
    &:hover { text-decoration: underline; }
  }
`;

const BlogDetailPage = () => {
  const { slug } = useParams();
  const article = blogDetailData[slug];

  if (!article) {
    return (
      <NotFound>
        <h2>Article not found</h2>
        <p>This article doesn't exist or may have been removed.</p>
        <Link to="/blogs">← Back to Blogs</Link>
      </NotFound>
    );
  }

  return (
    <main>
      <Hero
        thumbnail={article.thumbnail}
        thumbnailAlt={article.thumbnailAlt}
        category={article.category}
        date={article.date}
        dateTime={article.dateTime}
        duration={article.duration}
        title={article.title}
        intro={article.intro}
      />
      <BlogContent
        sections={article.sections}
        takeaways={article.takeaways}
        related={article.related}
      />

      <CallToAction />
    </main>
  );
};

export default BlogDetailPage;