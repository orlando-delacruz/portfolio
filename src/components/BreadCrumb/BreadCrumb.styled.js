import styled from "styled-components"
import theme from "../../styles/theme"
import { Link } from "react-router-dom"

export const BreadCrumb = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 65px;

  @media ${theme.media.tablet} {
  padding: 10px 20px;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
`

export const Separator = styled.span`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  user-select: none;
`

export const HomeIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.sm};
  font-weight: 400;
  letter-spacing: 0.01em;
  padding: 4px 6px;
  border-radius: 4px;
  transition: color 0.15s ease, background 0.15s ease;
  cursor: pointer;

  .label {
    line-height: 1.5;
  }

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
`

export const CurrentPage = styled.span`
  font-size: ${theme.typography.size.sm};
  font-weight: 500;
  color: #ffffff;
  padding: 4px 6px;
  letter-spacing: 0.01em;
  line-height: 1;

  background: rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
`