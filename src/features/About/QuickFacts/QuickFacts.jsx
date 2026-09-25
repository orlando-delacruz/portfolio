import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchQuickFacts } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import * as S from "./QuickFacts.styled";

const QuickFacts = () => {
  const { data: cards, loading, error, retry , ref } = useCmsQuery(fetchQuickFacts, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} aria-label="Loading quick facts">
        <SectionSkeleton label="Loading quick facts..." lines={2} />
      </S.Section>
    );
  }

  if (error || !cards) {
    return (
      <S.Section ref={ref} aria-label="Quick facts">
        <QueryError
          message={error || "Quick facts are not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  return (
    <S.Section ref={ref} aria-labelledby="quick-facts-heading">
      <S.Header>
        <S.Heading id="quick-facts-heading">Quick Facts</S.Heading>
        <S.HeadingAccent aria-hidden="true" />
      </S.Header>

      <S.Grid role="list" aria-label="Quick facts about me">
        {cards.map(({ label, value }, index) => (
          <S.Card key={label} role="listitem">
            <S.CardNumber aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
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
