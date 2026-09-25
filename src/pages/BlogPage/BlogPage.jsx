import SEO from "../../components/common/SEO";
import Hero from "../../features/Blog/Hero";
import Featured from "../../features/Blog/Featured";
import BlogList from "../../features/Blog/BlogList";

const BlogPage = () => {
  return (
    <>
      <SEO
        title="Blog | Orlando Dela Cruz"
        description="Articles by Orlando Dela Cruz on front-end development, React, JavaScript, and building responsive web experiences."
        path="/blogs"
      />

      <Hero />
      <Featured />
      <BlogList />
    </>
  );
};

export default BlogPage;
