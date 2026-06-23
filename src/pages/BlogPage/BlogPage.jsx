import Hero from "../../features/Blog/Hero";
import Featured from "../../features/Blog/Featured";
import BlogList from "../../features/Blog/BlogList";
import CallToAction from "../../components/CallToAction";

const BlogPage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <BlogList />
      <CallToAction />
    </>
  );
};

export default BlogPage;
