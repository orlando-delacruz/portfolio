import * as S from "./ProjectLinkButton.styled";

/**
 * A reusable button for project links with visibility control.
 *
 * @param {Object} props
 * @param {string} props.url - The link URL (optional)
 * @param {string} props.visibility - 'PUBLIC' | 'PRIVATE' | 'NONE' | 'AVAILABLE' | 'COMING_SOON' | 'UNAVAILABLE'
 * @param {string} props.label - Button label (e.g., 'GitHub')
 * @param {React.ElementType} [props.icon] - Icon component
 * @param {string} [props.variant='ghost'] - 'primary' or 'ghost'
 * @param {string} [props.statusText=''] - Optional status text to show as badge
 * @param {string} [props.tooltipText=''] - Optional tooltip text (shown on hover)
 * @param {string} [props.className=''] - Additional CSS class
 */
const ProjectLinkButton = ({
  url,
  visibility,
  label,
  icon: Icon,
  variant = "ghost",
  statusText = "",
  tooltipText = "",
  className = "",
}) => {
  // Determine if the button should be rendered
  const isVisible = visibility !== "NONE" && visibility !== "UNAVAILABLE";
  if (!isVisible) return null;

  const isDisabled = visibility === "PRIVATE" || visibility === "COMING_SOON";
  const isEnabled = !isDisabled && url;

  const buttonProps = {
    className,
    $variant: variant,
    $disabled: isDisabled,
    as: isEnabled ? "a" : "button",
    ...(isEnabled && {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
    }),
    ...(isDisabled && { disabled: true, "aria-disabled": true }),
  };

  const tooltipMessage =
    tooltipText ||
    (visibility === "PRIVATE"
      ? "The source code for this project is private."
      : visibility === "COMING_SOON"
        ? "Live demo coming soon."
        : "");

  return (
    <S.ButtonWrapper>
      <S.StyledButton {...buttonProps}>
        {Icon && <Icon aria-hidden="true" />}
        {label}
        {statusText && <S.StatusBadge>{statusText}</S.StatusBadge>}
      </S.StyledButton>
      {isDisabled && tooltipMessage && (
        <S.Tooltip role="tooltip">{tooltipMessage}</S.Tooltip>
      )}
    </S.ButtonWrapper>
  );
};

export default ProjectLinkButton;
