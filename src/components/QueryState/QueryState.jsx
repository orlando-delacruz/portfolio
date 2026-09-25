import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";
import * as S from "./QueryState.styled";

/**
 * QueryError — shared CMS error state with retry.
 * Sections render this (inside their own SectionWrapper) when
 * their Hygraph query fails. No static content is shown.
 */
export const QueryError = ({ message, onRetry, retryLabel = "Try again" }) => (
  <S.ErrorWrapper role="alert">
    <FiAlertCircle aria-hidden="true" />
    <p>{message || "Failed to load content. Please try again later."}</p>
    {onRetry && (
      <S.RetryButton type="button" onClick={onRetry}>
        <FiRefreshCw aria-hidden="true" />
        {retryLabel}
      </S.RetryButton>
    )}
  </S.ErrorWrapper>
);

/**
 * SectionSkeleton — generic shimmer placeholder for CMS sections
 * while their query is in flight. Keeps layout space reserved
 * (min-height) so content arrival doesn't shift the page.
 */
export const SectionSkeleton = ({ label = "Loading content...", lines = 3 }) => (
  <S.SkeletonWrapper
    role="status"
    aria-label={label}
    aria-busy="true"
  >
    <span className="visually-hidden">{label}</span>
    {Array.from({ length: lines }).map((_, i) => (
      <S.SkeletonLine key={i} aria-hidden="true" $narrow={i === lines - 1} />
    ))}
  </S.SkeletonWrapper>
);
