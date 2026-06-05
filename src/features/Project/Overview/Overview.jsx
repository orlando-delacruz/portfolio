import * as S from "./Overview.styled";
import overviewData from "../../../data/pages/Project/overview.data";

/**
 * ProjectOverview
 * Two-column section: sticky heading on the left, body paragraphs on the right.
 */
const Overview = () => {
  const { heading, paragraphs } = overviewData;

  return (
    <S.OverviewSection aria-labelledby="overview-heading">
      <S.Grid>
        {/* ── Left: sticky heading ── */}
        <S.Left>
          <S.Label aria-hidden="true">Overview</S.Label>
          <S.Heading id="overview-heading">
            {heading.main}{" "}
            <S.Highlight>{heading.highlight}</S.Highlight>
          </S.Heading>
        </S.Left>

        {/* ── Right: body copy ── */}
        <S.Right>
          <S.RightInner>
            <S.AccentBar aria-hidden="true" />
            <S.TextStack>
              {paragraphs.map((text, i) => (
                <S.Body
                  key={i}
                  $delay={`${0.25 + i * 0.12}s`}
                >
                  {text}
                </S.Body>
              ))}
            </S.TextStack>
          </S.RightInner>
        </S.Right>
      </S.Grid>
    </S.OverviewSection>
  );
};

export default Overview;