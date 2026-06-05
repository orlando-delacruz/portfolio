import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const FiltersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-top: 0 !important;
  padding-bottom: 2rem !important;
  background-color: ${theme.colors.sectionBackground};
  animation: ${fadeUp} 0.5s ease forwards;
`;

/* ─── Search input ────────────────────────────────────────── */
export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;

  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.35);
    font-size: 15px;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem 0.625rem 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.sm};
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: rgba(37, 98, 234, 0.06);
  }
`;

/* ─── Tab row ─────────────────────────────────────────────── */
export const TabRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

/* ─── Individual tab button ───────────────────────────────── */
export const TabBtn = styled.button`
  padding: 0.5rem 1.125rem;
  border-radius: 50px;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  font-family: inherit;
  cursor: pointer;
  border: 1px solid
    ${({ $active }) =>
    $active ? theme.colors.primary : "rgba(255,255,255,0.12)"};
  background: ${({ $active }) =>
    $active
      ? theme.colors.primary
      : "rgba(255,255,255,0.04)"};
  color: ${({ $active }) =>
    $active ? theme.colors.white : "rgba(255,255,255,0.6)"};
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease,
    transform 0.15s ease;

  &:hover:not([aria-pressed="true"]) {
    border-color: rgba(255, 255, 255, 0.3);
    color: ${theme.colors.white};
    background: rgba(255, 255, 255, 0.08);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;