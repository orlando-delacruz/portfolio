import blogListData from "../../../data/pages/Blog/blogList.data";
import BlogCard from "./BlogCard";
import * as S from "./BlogList.styled";

/**
 * BlogList
 * 3-column grid (2 on tablet, 1 on mobile) of equal-height article cards.
 * No filter/search here — this is the full static list for the Blog page.
 */
const BlogList = () => (
  <S.ListSection aria-labelledby="blog-list-heading">
    <S.SectionLabel id="blog-list-heading" as="h2">
      All Articles
    </S.SectionLabel>

    <S.Grid role="list">
      {blogListData.map((article, index) => (
        <BlogCard key={article.id} article={article} index={index} />
      ))}
    </S.Grid>
  </S.ListSection>
);

export default BlogList;