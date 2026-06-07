import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BsCheckCircleFill, BsLightbulbFill } from "react-icons/bs";
import blogDetailData, { authorData } from "../../../data/pages/BlogDetail/blogDetail.data";
import * as S from "./Content.styled";

/* ─── Author initials fallback ────────────────────────────── */
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

/* ─── Sub-components ──────────────────────────────────────── */

const ArticleSections = ({ sections }) => (
  <>
    {sections.map(({ id, heading, paragraphs }, index) => (
      <S.ArticleSection key={id} id={id} $index={index} aria-labelledby={`section-${id}`}>
        <S.SectionHeading id={`section-${id}`}>{heading}</S.SectionHeading>
        {paragraphs.map((p, i) => (
          <S.SectionParagraph key={i}>{p}</S.SectionParagraph>
        ))}
      </S.ArticleSection>
    ))}
  </>
);

const KeyTakeaways = ({ takeaways }) => {
  if (!takeaways?.length) return null;
  return (
    <S.TakeawaysBox aria-labelledby="takeaways-heading">
      <S.TakeawaysHeading id="takeaways-heading">
        <BsLightbulbFill aria-hidden="true" /> Key Takeaways
      </S.TakeawaysHeading>
      <S.TakeawaysList role="list">
        {takeaways.map((item, i) => (
          <S.TakeawayItem key={i} role="listitem">
            <BsCheckCircleFill aria-hidden="true" />
            {item}
          </S.TakeawayItem>
        ))}
      </S.TakeawaysList>
    </S.TakeawaysBox>
  );
};

const AuthorBox = () => {
  const initials = useMemo(() => getInitials(authorData.name), []);
  return (
    <S.AuthorCard aria-label={`Written by ${authorData.name}`}>
      <S.AuthorAvatar aria-hidden="true">
        {authorData.avatar ? (
          <img src={authorData.avatar} alt={authorData.name} />
        ) : (
          initials
        )}
      </S.AuthorAvatar>
      <S.AuthorInfo>
        <S.AuthorName>{authorData.name}</S.AuthorName>
        <S.AuthorRole>{authorData.role}</S.AuthorRole>
        <S.AuthorDescription>{authorData.description}</S.AuthorDescription>
      </S.AuthorInfo>
    </S.AuthorCard>
  );
};

const RelatedArticles = ({ relatedSlugs }) => {
  const relatedArticles = useMemo(
    () => relatedSlugs.map((slug) => blogDetailData[slug]).filter(Boolean),
    [relatedSlugs]
  );

  if (!relatedArticles.length) return null;

  return (
    <S.RelatedSection aria-labelledby="related-heading">
      <S.RelatedHeading id="related-heading">Related Articles</S.RelatedHeading>
      <S.RelatedGrid role="list">
        {relatedArticles.map(({ slug, thumbnail, thumbnailAlt, category, title, date, duration }) => (
          <S.RelatedCard
            key={slug}
            as={Link}
            to={`/blogs/${slug}`}
            role="listitem"
            aria-label={`Read: ${title}`}
          >
            <S.RelatedThumb>
              <img
                src={thumbnail}
                alt={thumbnailAlt}
                loading="lazy"
                decoding="async"
                width="400"
                height="225"
              />
            </S.RelatedThumb>
            <S.RelatedBody>
              <S.RelatedCategory>{category}</S.RelatedCategory>
              <S.RelatedTitle>{title}</S.RelatedTitle>
              <S.RelatedMeta>{date} · {duration}</S.RelatedMeta>
            </S.RelatedBody>
          </S.RelatedCard>
        ))}
      </S.RelatedGrid>
    </S.RelatedSection>
  );
};

const BlogContent = ({ sections, takeaways, related }) => (
  <S.ContentWrapper>
    {/* Article body sections */}
    {sections?.length > 0 && (
      <S.ReadingColumn>
        <ArticleSections sections={sections} />
        <KeyTakeaways takeaways={takeaways} />
        <AuthorBox />
      </S.ReadingColumn>
    )}

    {/* Related articles — full width */}
    <RelatedArticles relatedSlugs={related} />
  </S.ContentWrapper>
);

export default BlogContent;