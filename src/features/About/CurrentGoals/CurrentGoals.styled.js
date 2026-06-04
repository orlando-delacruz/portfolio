import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ──────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const driftLeft = keyframes`
  0%   { transform: translateX(0)   translateY(0)   scale(1); }
  33%  { transform: translateX(-18px) translateY(12px)  scale(1.04); }
  66%  { transform: translateX(10px)  translateY(-8px)  scale(0.97); }
  100% { transform: translateX(0)   translateY(0)   scale(1); }
`;

const driftRight = keyframes`
  0%   { transform: translateX(0)   translateY(0)   scale(1); }
  33%  { transform: translateX(14px)  translateY(-14px) scale(1.06); }
  66%  { transform: translateX(-10px) translateY(8px)   scale(0.96); }
  100% { transform: translateX(0)   translateY(0)   scale(1); }
`;

const tagPop = keyframes`
  from { opacity: 0; transform: scale(0.8) translateY(8px); }
  to   { opacity: 1; transform: scale(1)   translateY(0); }
`;

const shimmerLine = keyframes`
  0%   { background-position: -300% center; }
  100% { background-position:  300% center; }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  position: relative;
  overflow: hidden;
`;

/* ─── Highlight card ──────────────────────────────────────── */
export const Card = styled.article`
  position: relative;
  z-index: 1;
  border-radius: 24px;
  overflow: hidden;
  padding: 72px 80px;
  animation: ${fadeUp} 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;

  /* multi-stop gradient background */
  background: linear-gradient(
    135deg,
    #0d1b3e 0%,
    #0b1222 35%,
    #091430 65%,
    #061028 100%
  );
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.2);
  box-shadow:
    0 0 0 1px rgba(${theme.colors.primaryRgb}, 0.08),
    0 32px 80px rgba(0, 0, 0, 0.55),
    0 8px 24px rgba(${theme.colors.primaryRgb}, 0.1);

  @media ${theme.media.tablet} {
    padding: 52px 44px;
  }

  @media ${theme.media.mobile} {
    padding: 40px 28px;
    border-radius: 18px;
  }
`;

/* animated blobs */
export const BlobLeft = styled.span`
  position: absolute;
  top: -80px;
  left: -80px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(${theme.colors.primaryRgb}, 0.22) 0%,
    transparent 70%
  );
  pointer-events: none;
  animation: ${driftLeft} 14s ease-in-out infinite;

  @media ${theme.media.mobile} {
    width: 220px;
    height: 220px;
    top: -60px;
    left: -60px;
  }
`;

export const BlobRight = styled.span`
  position: absolute;
  bottom: -100px;
  right: -80px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(${theme.colors.primaryRgb}, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
  animation: ${driftRight} 18s ease-in-out infinite;

  @media ${theme.media.mobile} {
    width: 240px;
    height: 240px;
    bottom: -60px;
    right: -60px;
  }
`;

/* subtle dot-grid overlay */
export const DotGrid = styled.span`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.04) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  pointer-events: none;
`;

/* ─── Inner layout ────────────────────────────────────────── */
export const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  text-align: center;
`;

/* ─── Text block ──────────────────────────────────────────── */
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 760px;
`;

export const Paragraph = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.85;
  margin: 0;

  &:first-of-type {
    color: rgba(255, 255, 255, 0.78);
  }
`;

/* ─── Shimmer divider ─────────────────────────────────────── */
export const ShimmerDivider = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  max-width: 480px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(${theme.colors.primaryRgb}, 0.6) 30%,
    rgba(${theme.colors.primaryRgb}, 0.9) 50%,
    rgba(${theme.colors.primaryRgb}, 0.6) 70%,
    transparent 100%
  );
  background-size: 300% auto;
  animation: ${shimmerLine} 4s linear infinite;
`;

/* ─── Tag pill list ───────────────────────────────────────── */
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Tag = styled.li`
  padding: 7px 18px;
  border-radius: 999px;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: rgba(${theme.colors.primaryRgb}, 1);
  background: rgba(${theme.colors.primaryRgb}, 0.1);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.25);
  letter-spacing: 0.02em;
  transition: background 0.25s ease, border-color 0.25s ease,
    color 0.25s ease, transform 0.25s ease;
  cursor: default;

  /* staggered pop-in */
  animation: ${tagPop} 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: ${({ $index }) => 0.3 + $index * 0.07}s;

  &:hover {
    background: rgba(${theme.colors.primaryRgb}, 0.22);
    border-color: rgba(${theme.colors.primaryRgb}, 0.55);
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`;