import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./WhatIDo.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchWhatIDoSection } from "../../../services/hygraph";
import { getIcon } from "../../../utils/iconMap";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";

const WhatIDo = () => {
  const headingId = "what-i-do-heading";

  const { data, loading, error, retry , ref } = useCmsQuery(fetchWhatIDoSection, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} id="what-i-do" aria-label="Loading what I do">
        <SectionSkeleton label="Loading what I do..." lines={3} />
      </S.Section>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.Section ref={ref} id="what-i-do" aria-label="What I do">
        <QueryError
          message={error || "What-I-do content is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const { cards, heading } = data;

  return (
    <S.Section ref={ref} id="what-i-do" aria-labelledby={headingId}>
      <S.Container>
        {/* Section heading */}
        <SectionHeading
          pretitle={heading.pretitle}
          title={heading.title}
          highlight={heading.highlight}
          arialabel={headingId}
          id={headingId}
        />

        {/* Cards */}
        <S.Grid role="list" aria-label="Services list">
          {cards.map((card, index) => {
            const Icon = getIcon(card.iconKey);
            return (
              <S.Card
                key={card.slug}
                role="article"
                aria-label={`${card.title} service`}
                $index={index}
              >
                <S.IconWrapper aria-hidden="true">
                  <Icon />
                </S.IconWrapper>

                <S.CardBody>
                  <S.CardTitle>{card.title}</S.CardTitle>
                  <S.CardContent>{card.content}</S.CardContent>
                </S.CardBody>

                <S.CornerAccent aria-hidden="true" />
              </S.Card>
            );
          })}
        </S.Grid>
      </S.Container>
    </S.Section>
  );
};

export default WhatIDo;
