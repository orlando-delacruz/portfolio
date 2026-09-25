import { useCallback } from "react";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchAllBlogPosts } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import BlogCard from "./BlogCard";
import * as S from "./BlogList.styled";

const BlogList = () => {
  const fetchData = useCallback(async () => {
    const data = await fetchAllBlogPosts();
    // Sort: featured first (by sortingOrder if available, else by date),
    // then non-featured by date (newest first)
    return [...data].sort((a, b) => {
      // Featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;

      // Both featured: sort by sortingOrder (if exists) or date
      if (a.isFeatured && b.isFeatured) {
        // If sortingOrder exists, use it; otherwise fallback to date
        if (a.sortingOrder !== undefined && b.sortingOrder !== undefined) {
          return (a.sortingOrder || 0) - (b.sortingOrder || 0);
        }
        return new Date(b.date) - new Date(a.date);
      }

      // Both non-featured: sort by date descending
      return new Date(b.date) - new Date(a.date);
    });
  }, []);

  const { data: posts, loading, error, retry, ref } = useCmsQuery(fetchData, { defer: true });

  if (loading) {
    return (
      <S.ListSection ref={ref}>
        <SectionSkeleton label="Loading blog posts..." lines={3} />
      </S.ListSection>
    );
  }

  if (error || !posts) {
    return (
      <S.ListSection ref={ref}>
        <QueryError
          message={error || "Failed to load blog posts. Please try again later."}
          onRetry={retry}
        />
      </S.ListSection>
    );
  }

  if (posts.length === 0) {
    return (
      <S.ListSection ref={ref}>
        <p style={{ color: "#9aa4b5", textAlign: "center" }}>
          No blog posts yet. Check back soon!
        </p>
      </S.ListSection>
    );
  }

  return (
    <S.ListSection ref={ref} aria-labelledby="blog-list-heading">
      <S.SectionLabel id="blog-list-heading" as="h2">
        All Articles
      </S.SectionLabel>
      <S.Grid role="list">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} article={post} index={index} />
        ))}
      </S.Grid>
    </S.ListSection>
  );
};

export default BlogList;
