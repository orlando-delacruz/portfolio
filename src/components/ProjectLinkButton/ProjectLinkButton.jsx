import { useState } from "react";
import * as S from "./ProjectLinkButton.styled";

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
  const [showTooltip, setShowTooltip] = useState(false);

  const isDisabled =
    visibility === "PRIVATE" ||
    visibility === "NONE" ||
    visibility === "COMING_SOON" ||
    visibility === "UNAVAILABLE";
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

  const getDefaultTooltip = () => {
    if (tooltipText) return tooltipText;
    switch (visibility) {
      case "PRIVATE":
        return "This repository is private and cannot be viewed publicly.";
      case "NONE":
        return "No GitHub repository is available for this project.";
      case "COMING_SOON":
        return "Coming Soon";
      case "UNAVAILABLE":
        return "Unavailable";
      default:
        return "";
    }
  };

  const defaultStatusText =
    statusText ||
    (visibility === "PRIVATE"
      ? "Private"
      : visibility === "NONE"
        ? "None"
        : "");

  return (
    <S.ButtonWrapper
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <S.StyledButton {...buttonProps}>
        {Icon && <Icon aria-hidden="true" />}
        {label}
        {defaultStatusText && (
          <S.StatusBadge>{defaultStatusText}</S.StatusBadge>
        )}
      </S.StyledButton>
      {isDisabled && getDefaultTooltip() && (
        <S.Tooltip className="tooltip" $visible={showTooltip} role="tooltip">
          {getDefaultTooltip()}
        </S.Tooltip>
      )}
    </S.ButtonWrapper>
  );
};

export default ProjectLinkButton;
