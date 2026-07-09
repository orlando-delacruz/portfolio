import { useState, useEffect, useMemo, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import {
  fetchAllProjects,
  fetchProjectCategories,
} from "../../../services/hygraph";
import { getSortedProjectCategories } from "../../../utils/categoryUtils";
import ProjectFilters from "../Filter/Filter";
import ProjectCard from "../../../components/ProjectCard";
import Loading from "../../../components/Loading";
import * as S from "./ProjectGrid.styled";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [projectsData, categoriesData] = await Promise.all([
          fetchAllProjects(),
          fetchProjectCategories(), // 👈 from Project model
        ]);
        setProjects(projectsData);
        const sorted = getSortedProjectCategories(categoriesData);
        setCategories(sorted);
        if (sorted.length > 0) {
          setActiveFilter(sorted[0]);
        } else {
          setActiveFilter("all");
        }
      } catch (err) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleFilterChange = useCallback((key) => setActiveFilter(key), []);
  const handleSearchChange = useCallback((value) => setSearchQuery(value), []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "all" || p.category === activeFilter;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies?.some((t) => t.name.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  if (loading) {
    return (
      <S.GridSection>
        <Loading fullPage text="Loading projects..." />
      </S.GridSection>
    );
  }

  if (error) {
    return (
      <S.GridSection>
        <S.ErrorWrapper>
          <p>Error loading projects: {error}</p>
        </S.ErrorWrapper>
      </S.GridSection>
    );
  }

  return (
    <>
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categories={categories}
      />
      <S.GridSection aria-label="Projects grid" aria-live="polite">
        {filtered.length > 0 ? (
          <>
            <S.ResultCount>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
            </S.ResultCount>
            <S.Grid role="list">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </S.Grid>
          </>
        ) : (
          <S.EmptyState role="status">
            <FiSearch aria-hidden="true" />
            <p>
              No projects match your search. Try a different keyword or filter.
            </p>
          </S.EmptyState>
        )}
      </S.GridSection>
    </>
  );
};

export default ProjectsGrid;
