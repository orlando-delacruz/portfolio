import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./MyApproach.styled";
import {
  approachCards,
  approachHeading,
  approachDescription,
} from "../../../data/pages/About/myApproach.data";

const MyApproach = () => {
  const headingId = "my-approach-heading";

  return (
    <S.Section id="my-approach" aria-labelledby={headingId}>
      <S.Layout>
        {/* ── Left: heading + description ─────────────────── */}
        <S.Left>
          <SectionHeading
            pretitle={approachHeading.pretitle}
            title={approachHeading.title}
            highlight={approachHeading.highlight}
            arialabel={approachHeading.ariaLabel}
            id={headingId}
          />

          <S.Divider />

          <S.TextBlock>
            {approachDescription.map((para, i) => (
              <S.Paragraph key={i}>{para}</S.Paragraph>
            ))}
          </S.TextBlock>
        </S.Left>

        {/* ── Right: value cards ───────────────────────────── */}
        <S.Right
          role="list"
          aria-label="Core approach values"
        >
          {approachCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <S.Card
                key={card.id}
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