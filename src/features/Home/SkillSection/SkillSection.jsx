import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import Loading from "../../../components/Loading";
import { fetchTechnologiesWithCategories } from "../../../services/hygraph";
import {
  getDisplayLabel,
  getSortedCategories,
} from "../../../utils/categoryUtils";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  cardIn,
  hoverLift,
  iconHover,
  stagger,
  viewport,
} from "../../../animations";
import * as S from "./SkillSection.styled";

const heading = {
  pretitle: "Skills & Technologies",
  title: "My Tech",
  highlight: "Stack",
  ariaLabel: "skills and technologies",
};

const SkillSection = ({ id }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const data = await fetchTechnologiesWithCategories();
        setTechnologies(data);

        if (data.length > 0) {
          const categories = getSortedCategories(data.map((t) => t.category));
          if (categories.length > 0) {
            setActiveCategory(categories[0]);
          }
        }
      } catch (err) {
        setError(err.message || "Failed to load technologies");
      } finally {
        setLoading(false);
      }
    };
    loadTechnologies();
  }, []);

  const groupedTechnologies = useMemo(() => {
    const groups = {};
    technologies.forEach((tech) => {
      const category = tech.category || "Uncategorized";
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(tech);
    });
    return groups;
  }, [technologies]);

  const categories = useMemo(() => {
    return getSortedCategories(Object.keys(groupedTechnologies));
  }, [groupedTechnologies]);

  const activeSkills = useMemo(() => {
    return groupedTechnologies[activeCategory] || [];
  }, [groupedTechnologies, activeCategory]);

  const handleKeyDown = useCallback(
    (e, index) => {
      if (e.key === "ArrowRight") {
        const next = (index + 1) % categories.length;
        setActiveCategory(categories[next]);
        document.getElementById(`tab-${categories[next]}`)?.focus();
      }
      if (e.key === "ArrowLeft") {
        const prev = (index - 1 + categories.length) % categories.length;
        setActiveCategory(categories[prev]);
        document.getElementById(`tab-${categories[prev]}`)?.focus();
      }
    },
    [categories],
  );

  // Card hover: hoverLift covers the y-lift; scale is composed in
  // since the shared variant doesn't define one. Skipped entirely
  // under reduced motion.
  const cardWhileHover = shouldReduceMotion
    ? undefined
    : { ...hoverLift.hover, scale: 1.03 };

  // Icon hover: iconHover covers scale/y; a small rotation is
  // composed in for this one spot per the "2-4deg max" guidance.
  const iconWhileHover = shouldReduceMotion
    ? undefined
    : { ...iconHover.hover, rotate: 3 };

  const gridVariants = shouldReduceMotion
    ? fadeIn
    : staggerContainer(stagger.group);
  const itemVariants = shouldReduceMotion ? fadeIn : cardIn;

  if (loading) {
    return (
      <S.SectionWrapper id={id}>
        <Loading fullPage text="Loading skills..." />
      </S.SectionWrapper>
    );
  }

  if (error) {
    return (
      <S.SectionWrapper id={id}>
        <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          Failed to load skills. Please try again later.
        </p>
      </S.SectionWrapper>
    );
  }

  if (categories.length === 0) {
    return (
      <S.SectionWrapper id={id}>
        <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
          No skills found. Please add technologies with categories in Hygraph.
        </p>
      </S.SectionWrapper>
    );
  }

  return (
    <S.SectionWrapper
      id={id}
      variants={staggerContainer(stagger.section, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport(0.25)}
    >
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.ariaLabel}
      />

      <S.SkillNavigation
        aria-label="Skill categories"
        variants={shouldReduceMotion ? fadeIn : fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport(0.3)}
      >
        <S.TabList role="tablist">
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            const displayLabel = getDisplayLabel(category);

            return (
              <S.TabButton
                key={category}
                id={`tab-${category}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="skill-tabpanel"
                $active={isActive}
                onClick={() => setActiveCategory(category)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={isActive ? 0 : -1}
              >
                {isActive && (
                  <S.ActiveIndicator
                    layoutId="activeTabPill"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  />
                )}
                <span className="tab-label">{displayLabel}</span>
              </S.TabButton>
            );
          })}
        </S.TabList>
      </S.SkillNavigation>

      <S.TabPanel
        id="skill-tabpanel"
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory}`}
        tabIndex={0}
      >
        {activeSkills.length > 0 ? (
          <S.ContentGrid
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport(0.25)}
          >
            {activeSkills.map((skill) => (
              <S.SkillCard
                key={skill.slug}
                variants={itemVariants}
                whileHover={cardWhileHover}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                {skill.icon?.url ? (
                  <motion.span
                    className="icon-wrap"
                    whileHover={iconWhileHover}
                    whileTap={shouldReduceMotion ? undefined : iconHover.tap}
                  >
                    <img
                      className="icon"
                      src={skill.icon.url}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      width={50}
                      height={50}
                    />
                  </motion.span>
                ) : (
                  <div className="icon-placeholder" aria-hidden="true" />
                )}
                <p className="skill-title">{skill.name}</p>
              </S.SkillCard>
            ))}
          </S.ContentGrid>
        ) : (
          <S.EmptyState
            key={`${activeCategory}-empty`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport(0.2)}
          >
            No skills listed for this category yet.
          </S.EmptyState>
        )}
      </S.TabPanel>
    </S.SectionWrapper>
  );
};

export default SkillSection;
