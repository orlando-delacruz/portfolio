import { useState, useMemo, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import projects from "../../../data/pages/Project/project.data";
import ProjectFilters from "../Filter/Filter";
import ProjectCard from "./ProjectCard";
import * as S from "./ProjectGrid.styled";

/**
 * ProjectsGrid
 * Owns the filter/search state and renders the full masonry grid.
 * Composed with ProjectFilters (controlled) and ProjectCard (pure display).
 */
const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = useCallback((key) => {
    setActiveFilter(key);
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "all" || p.categoryKey === activeFilter;

      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <>
      {/* Filters — rendered above the grid but state lives here */}
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <S.GridSection aria-label="Projects grid" aria-live="polite">
        {filtered.length > 0 ? (
          <>
            <S.ResultCount aria-live="polite">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
            </S.ResultCount>

            <S.Grid role="list">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </S.Grid>
          </>
        ) : (
          <S.EmptyState role="status">
            <FiSearch aria-hidden="true" />
            <p>No projects match your search. Try a different keyword or filter.</p>
          </S.EmptyState>
        )}
      </S.GridSection>
    </>
  );
};

export default ProjectsGrid;