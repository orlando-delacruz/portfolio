import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./CurrentGoals.styled";
import { currentGoalsContent } from "../../../data/pages/About/currentGoals.data";

/**
 * CurrentGoals — "Looking Ahead" full-width highlight card section.
 *
 * Structure:
 *  - Outer <section> wraps an oversized gradient card (<article>)
 *  - Card contains animated blobs, dot-grid texture, SectionHeading,
 *    descriptive paragraphs, shimmer divider, and technology tag pills
 *
 * Accessibility:
 *  - <section> is labelled via aria-labelledby
 *  - Decorative blobs / dot-grid are aria-hidden
 *  - Tag list has an accessible aria-label
 */
const CurrentGoals = () => {
  const headingId = "current-goals-heading";
  const { pretitle, title, highlight, ariaLabel, paragraphs, tags } =
    currentGoalsContent;

  return (
    <S.Section id="current-goals" aria-labelledby={headingId}>
      <S.Card>
        {/* ── Decorative layers ─────────────────────────── */}
        <S.BlobLeft aria-hidden="true" />
        <S.BlobRight aria-hidden="true" />
        <S.DotGrid aria-hidden="true" />

        {/* ── Content ───────────────────────────────────── */}
        <S.Inner>
          <SectionHeading
            pretitle={pretitle}
            title={title}
            highlight={highlight}
            arialabel={ariaLabel}
            id={headingId}
          />

          <S.TextBlock>
            {paragraphs.map((para, i) => (
              <S.Paragraph key={i}>{para}</S.Paragraph>
            ))}
          </S.TextBlock>

          <S.ShimmerDivider aria-hidden="true" />

          <S.TagList aria-label="Technologies and topics I am currently learning">
            {tags.map((tag, i) => (
              <S.Tag key={tag} $index={i}>
                {tag}
              </S.Tag>
            ))}
          </S.TagList>
        </S.Inner>
      </S.Card>
    </S.Section>
  );
};

export default CurrentGoals;