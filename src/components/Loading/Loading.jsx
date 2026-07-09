import * as S from "./Loading.styled";

/**
 * Loading component with spinner and optional text.
 *
 * @param {string} size - 'small' | 'medium' | 'large' (default: 'medium')
 * @param {string} text - Loading text to display below the spinner (optional)
 * @param {boolean} fullPage - Whether to take up full viewport height (default: false)
 */
const Loading = ({
  size = "medium",
  text = "Loading...",
  fullPage = false,
}) => {
  return (
    <S.SpinnerWrapper $fullPage={fullPage}>
      <S.Spinner $size={size} aria-label="Loading" />
      {text && <S.LoadingText>{text}</S.LoadingText>}
    </S.SpinnerWrapper>
  );
};

export default Loading;
