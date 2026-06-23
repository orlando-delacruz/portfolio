import { blogList } from "../../../data/blogs";
import BlogCard from "./BlogCard";
import * as S from "./BlogList.styled";

const BlogList = () => (
  <S.ListSection aria-labelledby="blog-list-heading">
    <S.SectionLabel id="blog-list-heading" as="h2">
      All Articles
    </S.SectionLabel>
    <S.Grid role="list">
      {blogList.map((article, index) => (
        <BlogCard key={article.slug} article={article} index={index} />
      ))}
    </S.Grid>
  </S.ListSection>
);

export default BlogList;