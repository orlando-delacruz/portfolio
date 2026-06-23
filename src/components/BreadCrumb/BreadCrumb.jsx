import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import * as S from "./BreadCrumb.styled";

const BreadCrumb = ({ items = [] }) => (
  <S.BreadCrumb aria-label="Breadcrumb">
    <S.List>
      {items.map(({ label, href }, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        return (
          <S.Item key={label}>
            {index > 0 && (
              <S.Separator aria-hidden="true">
                <FiChevronRight />
              </S.Separator>
            )}
            {isLast ? (
              <S.CurrentPage aria-current="page">{label}</S.CurrentPage>
            ) : (
              <S.NavLink as={Link} to={href ?? "/"}>
                {isFirst && (
                  <S.HomeIcon aria-hidden="true">
                    <FaHome />
                  </S.HomeIcon>
                )}
                <span className="label">{label}</span>
              </S.NavLink>
            )}
          </S.Item>
        );
      })}
    </S.List>
  </S.BreadCrumb>
);

export default BreadCrumb;