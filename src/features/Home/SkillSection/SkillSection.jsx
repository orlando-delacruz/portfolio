import { useState, useMemo, useCallback } from "react";
import SectionHeading from "../../../components/SectionHeading";
import * as S from "./SkillSection.styled";
import skillsData from "../../../data/pages/Home/skillsData";

const { heading, categories } = skillsData;

const SkillSection = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  const activeSkills = useMemo(
    () => categories.find((c) => c.id === activeCategory)?.skills ?? [],
    [activeCategory]
  );

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === "ArrowRight") {
      const next = (index + 1) % categories.length;
      setActiveCategory(categories[next].id);
      document.getElementById(`tab-${categories[next].id}`)?.focus();
    }
    if (e.key === "ArrowLeft") {
      const prev = (index - 1 + categories.length) % categories.length;
      setActiveCategory(categories[prev].id);
      document.getElementById(`tab-${categories[prev].id}`)?.focus();
    }
  }, []);

  return (
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label={heading.ariaLabel}
      />

      {/* Tab navigation */}
      <S.SkillNavigation aria-label="Skill categories">
        <S.TabList role="tablist">
          {categories.map(({ id: catId, label }, index) => {
            const isActive = catId === activeCategory;
            return (
              <S.TabButton
                key={catId}
                id={`tab-${catId}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="skill-tabpanel"
                $active={isActive}
                onClick={() => setActiveCategory(catId)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={isActive ? 0 : -1}
              >
                {label}
              </S.TabButton>
            );
          })}
        </S.TabList>
      </S.SkillNavigation>

      {/* Tab panel */}
      <S.TabPanel
        id="skill-tabpanel"
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory}`}
        tabIndex={0}
      >
        {activeSkills.length > 0 ? (
          <S.ContentGrid>
            {activeSkills.map(({ id: skillId, icon, label }) => (
              <S.SkillCard key={skillId} as="article">
                <img
                  className="icon"
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={50}
                  height={50}
                />
                <p className="skill-title">{label}</p>
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