import * as S from "./BreadCrumb.styled"
import { FaHome } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const BreadCrumb = ({ label, paths = [] }) => {
  return (
    <S.BreadCrumb aria-label="breadcrumb">
      <S.List>
        <S.Item>
          <S.NavLink to="/">
            <S.HomeIcon>
              <FaHome />
            </S.HomeIcon>
            <span className="label">Home</span>
          </S.NavLink>
        </S.Item>

        {paths.map((path, index) => (
          <>
            <S.Item key={`sep-${index}`} aria-hidden="true">
              <S.Separator><FiChevronRight /></S.Separator>
            </S.Item>
            <S.Item key={`path-${index}`}>
              <S.NavLink to={path.href}>
                <span className="label">{path.label}</span>
              </S.NavLink>
            </S.Item>
          </>
        ))}

        <S.Item aria-hidden="true">
          <S.Separator><FiChevronRight /></S.Separator>
        </S.Item>

        <S.Item>
          <S.CurrentPage aria-current="page">{label}</S.CurrentPage>
        </S.Item>
      </S.List>
    </S.BreadCrumb>
  );
};

export default BreadCrumb;