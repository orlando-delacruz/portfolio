import * as S from "./Overview.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchProjectOverview } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import HygraphRichText from "../../../components/RichText";

/**
 * ProjectOverview
 * Two-column section: sticky heading on the left, body paragraphs on the right.
 */
const Overview = () => {
  const { data: overview, loading, error, retry , ref } = useCmsQuery(fetchProjectOverview, { defer: true });

  if (loading) {
    return (
      <S.OverviewSection ref={ref} aria-label="Loading overview">
        <SectionSkeleton label="Loading overview..." lines={3} />
      </S.OverviewSection>
    );
  }

  if (error || !overview) {
    return (
      <S.OverviewSection ref={ref} aria-label="Overview">
        <QueryError
          message={error || "Overview content is not published yet."}
          onRetry={retry}
        />
      </S.OverviewSection>
    );
  }

  const { headingMain, headingHighlight, paragraphs } = overview;

  return (
    <S.OverviewSection ref={ref} aria-labelledby="overview-heading">
      <S.Grid>
        {/* ── Left: sticky heading ── */}
        <S.Left>
          <S.Label aria-hidden="true">Overview</S.Label>
          <S.Heading id="overview-heading">
            {headingMain} <S.Highlight>{headingHighlight}</S.Highlight>
          </S.Heading>
        </S.Left>

        {/* ── Right: body copy ── */}
        <S.Right>
          <S.RightInner>
            <S.AccentBar aria-hidden="true" />
            <S.TextStack>
              <HygraphRichText content={paragraphs?.raw} />
            </S.TextStack>
          </S.RightInner>
        </S.Right>
      </S.Grid>
    </S.OverviewSection>
  );
};

export default Overview;
