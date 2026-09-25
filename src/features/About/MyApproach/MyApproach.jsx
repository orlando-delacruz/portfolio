import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./MyApproach.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchApproachSection } from "../../../services/hygraph";
import { getIcon } from "../../../utils/iconMap";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import HygraphRichText from "../../../components/RichText";

const MyApproach = () => {
  const headingId = "my-approach-heading";

  const { data, loading, error, retry , ref } = useCmsQuery(fetchApproachSection, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} id="my-approach" aria-label="Loading my approach">
        <SectionSkeleton label="Loading my approach..." lines={3} />
      </S.Section>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.Section ref={ref} id="my-approach" aria-label="My approach">
        <QueryError
          message={error || "Approach content is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const { cards, intro, heading } = data;

  return (
    <S.Section ref={ref} id="my-approach" aria-labelledby={headingId}>
      <S.Layout>
        {/* ── Left: heading + description ─────────────────── */}
        <S.Left>
          <SectionHeading
            pretitle={heading.pretitle}
            title={heading.title}
            highlight={heading.highlight}
            arialabel={headingId}
            id={headingId}
          />

          <S.Divider />

          <S.TextBlock>
            <HygraphRichText content={intro?.paragraphs?.raw} />
          </S.TextBlock>
        </S.Left>

        {/* ── Right: value cards ──────────────────────────── */}
        <S.Right role="list" aria-label="Core approach values">
          {cards.map((card, index) => {
            const Icon = getIcon(card.iconKey);
            return (
              <S.Card
                key={card.slug}
                role="article"
                aria-label={card.title}
                $index={index}
              >
                <S.IconCircle aria-hidden="true">
                  <Icon />
                </S.IconCircle>

                <S.CardInfo>
                  <S.CardTitle>{card.title}</S.CardTitle>
                  <S.CardContent>{card.content}</S.CardContent>
                </S.CardInfo>
              </S.Card>
            );
          })}
        </S.Right>
      </S.Layout>
    </S.Section>
  );
};

export default MyApproach;
