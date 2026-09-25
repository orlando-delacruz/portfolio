import SectionHeading from "../../../components/SectionHeading";
import * as S from "./ExperienceSection.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchExperienceSection } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
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

  const { data, loading, error, retry , ref } = useCmsQuery(fetchExperienceSection, { defer: true });

  const entryVariants = shouldReduceMotion ? fadeIn : timelineEntryVariants;
  const cardVariants = shouldReduceMotion ? fadeIn : journeyCardVariants;
  const dotVariants = shouldReduceMotion ? dotInReduced : dotIn;

  if (loading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <SectionSkeleton label="Loading experience..." lines={3} />
      </S.SectionWrapper>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <QueryError
          message={error || "Experience content is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  const { experience, heading } = data;

  return (
    <S.SectionWrapper ref={ref} id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label="experience-heading"
        id="experience-heading"
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

        {experience.map(({ slug, date, position, company, description }) => (
          <S.TimelineEntry key={slug} variants={entryVariants}>
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
        ))}
      </S.Timeline>
    </S.SectionWrapper>
  );
};

export default ExperienceSection;
