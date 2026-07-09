import { useState, useEffect, useMemo, useCallback } from "react";
import SectionHeading from "../../../components/SectionHeading";
import Loading from "../../../components/Loading";
import { fetchTechnologiesWithCategories } from "../../../services/hygraph";
import {
  getDisplayLabel,
  getSortedCategories,
} from "../../../utils/categoryUtils";
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

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const data = await fetchTechnologiesWithCategories();
        setTechnologies(data);

        // Set first available category as active
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

  // Group technologies by category
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

  // Get sorted categories
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
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.ariaLabel}
      />

      <S.SkillNavigation aria-label="Skill categories">
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
                {displayLabel}
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
          <S.ContentGrid>
            {activeSkills.map((skill) => (
              <S.SkillCard key={skill.slug} as="article">
                {skill.icon?.url ? (
                  <img
                    className="icon"
                    src={skill.icon.url}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className="icon-placeholder" aria-hidden="true" />
                )}
                <p className="skill-title">{skill.name}</p>
              </S.SkillCard>
            ))}
          </S.ContentGrid>
        ) : (
          <S.EmptyState>No skills listed for this category yet.</S.EmptyState>
        )}
      </S.TabPanel>
    </S.SectionWrapper>
  );
};

export default SkillSection;
