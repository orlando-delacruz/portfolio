import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import * as S from "./ServiceSection.styled";
import serviceData from "../../../data/pages/Home/serviceData";
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

const { heading, services } = serviceData;

const ServiceSection = ({ id }) => {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label={heading.ariaLabel}
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
          {services.map(({ id: serviceId, icon, title, description, tag }) => (
            <S.ServiceCard
              key={serviceId}
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
                  <S.CardIcon
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </motion.span>
                <S.CardTitle>{title}</S.CardTitle>
              </S.CardHead>

              <S.CardBody>{description}</S.CardBody>

              {tag && <S.ServiceTag>{tag}</S.ServiceTag>}
            </S.ServiceCard>
          ))}
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
