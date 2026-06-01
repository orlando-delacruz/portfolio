import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import theme from "../../../styles/theme";

const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.weight.medium};
  font-size: ${theme.typography.size.sm};
  border: 1px solid ${theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 3.125rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  svg {
    font-size: 0.875rem;
  }

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 3.125rem;
  }
`;
const ViewAll = ({ link, target, label, rel, "aria-label": ariaLabel }) => {
  return (
    <ViewAllLink
      href={link}
      target={target}
      rel={rel}
      aria-label={ariaLabel || label}
    >
      <FaArrowRight aria-hidden="true" />
      {label}
    </ViewAllLink>
  );
};

export default ViewAll;