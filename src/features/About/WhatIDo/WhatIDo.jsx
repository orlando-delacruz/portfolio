import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import * as S from "./WhatIDo.styled";
import { whatIDoCards, whatIDoHeading } from "../../../data/pages/About/whatIDo.data";

const WhatIDo = () => {
  const headingId = "what-i-do-heading";

  return (
    <S.Section
      id="what-i-do"
      aria-labelledby={headingId}
    >
      <S.Container>
        {/* Section heading */}
        <SectionHeading
          pretitle={whatIDoHeading.pretitle}
          title={whatIDoHeading.title}
          highlight={whatIDoHeading.highlight}
          arialabel={whatIDoHeading.ariaLabel}
          id={headingId}
        />

        {/* Cards */}
        <S.Grid role="list" aria-label="Services list">
          {whatIDoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <S.Card
                key={card.id}
                role="article"
                aria-label={card.ariaLabel}
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