import { useEffect, useState } from "react";
import { fetchAllBlogPosts } from "../../../services/hygraph";
import BlogCard from "./BlogCard";
import Loading from "../../../components/Loading";
import * as S from "./BlogList.styled";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllBlogPosts();
        // Sort: featured first (by sortingOrder if available, else by date),
        // then non-featured by date (newest first)
        const sorted = [...data].sort((a, b) => {
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
        setPosts(sorted);
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
      <S.ListSection>
        <Loading fullPage text="Loading blog posts..." />
      </S.ListSection>
    );
  }

  if (error) {
    return (
      <S.ListSection>
        <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          Failed to load blog posts. Please try again later.
        </p>
      </S.ListSection>
    );
  }

  if (posts.length === 0) {
    return (
      <S.ListSection>
        <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
          No blog posts yet. Check back soon!
        </p>
      </S.ListSection>
    );
  }

  return (
    <S.ListSection aria-labelledby="blog-list-heading">
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
