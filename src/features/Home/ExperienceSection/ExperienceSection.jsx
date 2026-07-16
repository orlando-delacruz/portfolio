import SectionHeading from "../../../components/SectionHeading";
import * as S from "./ExperienceSection.styled";
import experienceData from "../../../data/pages/Home/experienceData";
import {
  fadeUp,
  cardIn,
  fadeIn,
  hoverLift,
  staggerContainer,
  stagger,
  duration,
  ease,
  viewport,
} from "../../../animations";
import { useReducedMotion } from "framer-motion";

const { heading, experience } = experienceData;

const timelineEntryVariants = {
  hidden: fadeUp.hidden,
  visible: {
    ...fadeUp.visible,
    transition: { ...fadeUp.visible.transition, staggerChildren: 0.1 },
  },
};

const journeyCardVariants = {
  hidden: cardIn.hidden,
  visible: {
    ...cardIn.visible,
    transition: {
      ...cardIn.visible.transition,
      staggerChildren: stagger.group * 0.6,
      delayChildren: 0.05,
    },
  },
};

const dotIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: [0, 1.2, 1],
    transition: { duration: duration.item, ease: ease.standard },
  },
};

const dotInReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.item } },
};

const ExperienceSection = ({ id }) => {
  const shouldReduceMotion = useReducedMotion();

  const entryVariants = shouldReduceMotion ? fadeIn : timelineEntryVariants;
  const cardVariants = shouldReduceMotion ? fadeIn : journeyCardVariants;
  const dotVariants = shouldReduceMotion ? dotInReduced : dotIn;

  return (
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label={heading.ariaLabel}
      />

      <S.Timeline
        aria-label="Work experience timeline"
        variants={staggerContainer(stagger.section)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport(0.25)}
      >
        <S.TimelineLine
          aria-hidden="true"
          variants={
            shouldReduceMotion
              ? fadeIn
              : {
                  hidden: { scaleY: 0 },
                  visible: {
                    scaleY: 1,
                    transition: {
                      duration: duration.container,
                      ease: ease.standard,
                    },
                  },
                }
          }
        />

        {experience.map(
          ({ id: entryId, date, position, company, description }) => (
            <S.TimelineEntry key={entryId} variants={entryVariants}>
              <S.DotCol aria-hidden="true">
                <S.Dot variants={dotVariants} />
              </S.DotCol>

              <S.JourneyCard
                as="article"
                variants={cardVariants}
                whileHover={shouldReduceMotion ? undefined : hoverLift.hover}
              >
                <S.DateBadge variants={shouldReduceMotion ? fadeIn : fadeUp}>
                  <time>{date}</time>
                </S.DateBadge>

                <S.Position variants={shouldReduceMotion ? fadeIn : fadeUp}>
                  {position}
                </S.Position>
                <S.Company variants={shouldReduceMotion ? fadeIn : fadeUp}>
                  {company}
                </S.Company>
                <S.CardBody variants={shouldReduceMotion ? fadeIn : fadeUp}>
                  {description}
                </S.CardBody>
              </S.JourneyCard>
            </S.TimelineEntry>
          ),
        )}
      </S.Timeline>
    </S.SectionWrapper>
  );
};

export default ExperienceSection;
