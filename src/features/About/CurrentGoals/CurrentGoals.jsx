import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./CurrentGoals.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchCurrentGoals } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import HygraphRichText from "../../../components/RichText";

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
  const { data: goals, loading, error, retry , ref } = useCmsQuery(fetchCurrentGoals, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} id="current-goals" aria-label="Loading current goals">
        <SectionSkeleton label="Loading current goals..." lines={3} />
      </S.Section>
    );
  }

  if (error || !goals) {
    return (
      <S.Section ref={ref} id="current-goals" aria-label="Current goals">
        <QueryError
          message={error || "Goals content is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const { pretitle, title, highlight, paragraphs, tags } = goals;

  return (
    <S.Section ref={ref} id="current-goals" aria-labelledby={headingId}>
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
            arialabel={headingId}
            id={headingId}
          />

          <S.TextBlock>
            <HygraphRichText content={paragraphs?.raw} />
          </S.TextBlock>

          <S.ShimmerDivider aria-hidden="true" />

          <S.TagList aria-label="Technologies and topics I am currently learning">
            {(tags || []).map((tag, i) => (
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
