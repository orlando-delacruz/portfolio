import quickFactsData from "../../../data/pages/About/quickFacts.data";
import * as S from "./QuickFacts.styled";

const QuickFacts = () => {
  const { heading, cards } = quickFactsData;

  return (
    <S.Section aria-labelledby="quick-facts-heading">
      <S.Header>
        <S.Heading id="quick-facts-heading">{heading}</S.Heading>
        <S.HeadingAccent aria-hidden="true" />
      </S.Header>

      <S.Grid role="list" aria-label="Quick facts about me">
        {cards.map(({ id, label, value }) => (
          <S.Card key={id} role="listitem">
            <S.CardNumber aria-hidden="true">
              {String(id).padStart(2, "0")}
            </S.CardNumber>
            <S.CardLabel>{label}</S.CardLabel>
            <S.CardValue>{value}</S.CardValue>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default QuickFacts;