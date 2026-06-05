import { useId } from "react";
import { FiSearch } from "react-icons/fi";
import { filtersData } from "../../../data/pages/Project/project.data";
import * as S from "./Filter.styled";

const Filter = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) => {
  const searchId = useId();

  return (
    <S.FiltersSection aria-label="Project filters">
      {/* Search */}
      <S.SearchWrapper>
        <FiSearch aria-hidden="true" />
        <S.SearchInput
          id={searchId}
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search projects"
          autoComplete="off"
          spellCheck="false"
        />
      </S.SearchWrapper>

      {/* Filter tabs */}
      <S.TabRow role="group" aria-label="Filter projects by category">
        {filtersData.map(({ key, label }) => (
          <S.TabBtn
            key={key}
            $active={activeFilter === key}
            aria-pressed={activeFilter === key}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </S.TabBtn>
        ))}
      </S.TabRow>
    </S.FiltersSection>
  );
};

export default Filter;