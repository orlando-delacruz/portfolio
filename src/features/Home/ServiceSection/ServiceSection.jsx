import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchServicesSection } from "../../../services/hygraph";
import { getIcon } from "../../../utils/iconMap";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import * as S from "./ServiceSection.styled";
import {
  staggerContainer,
  cardIn,
  fadeIn,
  hoverLift,
  iconHover,
  stagger,
  duration,
  ease,
  viewport,
} from "../../../animations";

const ServiceSection = ({ id }) => {
  const shouldReduceMotion = useReducedMotion();

  const { data, loading, error, retry , ref } = useCmsQuery(fetchServicesSection, { defer: true });

  const cardWhileHover = shouldReduceMotion
    ? undefined
    : { ...hoverLift.hover, y: -8, scale: 1.02 };

  const iconWhileHover = shouldReduceMotion
    ? undefined
    : { ...iconHover.hover, rotate: 2 };

  const gridVariants = shouldReduceMotion
    ? fadeIn
    : staggerContainer(stagger.group);
  const cardVariants = shouldReduceMotion ? fadeIn : cardIn;

  if (loading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <SectionSkeleton label="Loading services..." lines={3} />
      </S.SectionWrapper>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <QueryError
          message={error || "Services content is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  const { services, heading } = data;

  return (
    <S.SectionWrapper ref={ref} id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label="services-heading"
        id="services-heading"
      />

      <S.AccentLine
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport(0.6)}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: duration.item, ease: ease.standard }
        }
      />

      {services.length > 0 ? (
        <S.ContentGrid
          role="list"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.25)}
        >
          {services.map(({ slug, iconKey, title, description, tag }) => {
            const Icon = getIcon(iconKey);
            return (
              <S.ServiceCard
                key={slug}
                as="article"
                role="listitem"
                variants={cardVariants}
                whileHover={cardWhileHover}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              >
                <S.CardHead>
                  <motion.span
                    className="icon-wrap"
                    whileHover={iconWhileHover}
                    whileTap={shouldReduceMotion ? undefined : iconHover.tap}
                  >
                    <Icon
                      aria-hidden="true"
                      style={{ fontSize: "3.125rem", color: "inherit" }}
                    />
                  </motion.span>
                  <S.CardTitle>{title}</S.CardTitle>
                </S.CardHead>

                <S.CardBody>{description}</S.CardBody>

                {tag && <S.ServiceTag>{tag}</S.ServiceTag>}
              </S.ServiceCard>
            );
          })}
        </S.ContentGrid>
      ) : (
        <S.EmptyState
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.2)}
        >
          No services listed yet.
        </S.EmptyState>
      )}
    </S.SectionWrapper>
  );
};

export default ServiceSection;
