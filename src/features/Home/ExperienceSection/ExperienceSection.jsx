import SectionHeading from "../../../components/SectionHeading";
import * as S from "./ExperienceSection.styled";
import experienceData from "../../../data/pages/Home/experienceData";

const { heading, experience } = experienceData;

const ExperienceSection = ({ id }) => {
  return (
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label={heading.ariaLabel}
      />

      <S.Timeline aria-label="Work experience timeline">
        {experience.map(({ id: entryId, date, position, company, description }) => (
          <S.TimelineEntry key={entryId}>
            <S.DotCol aria-hidden="true">
              <S.Dot />
            </S.DotCol>

            <S.JourneyCard as="article">
              <S.DateBadge>
                <time>{date}</time>
              </S.DateBadge>

              <S.Position>{position}</S.Position>
              <S.Company>{company}</S.Company>
              <S.CardBody>{description}</S.CardBody>
            </S.JourneyCard>
          </S.TimelineEntry>
        ))}
      </S.Timeline>
    </S.SectionWrapper>
  );
};

export default ExperienceSection; S