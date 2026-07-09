import { useState } from "react";
import ImageLightbox from "../../../components/ImageLightbox";
import * as S from "./Screenshots.styled";

const Screenshots = ({ screenshots }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <S.EmptyState>
        <p>No screenshots available for this project.</p>
      </S.EmptyState>
    );
  }

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <S.Section aria-labelledby="screenshots-heading">
        <S.Header>
          <S.Label>Gallery</S.Label>
          <S.Heading id="screenshots-heading">Project Screenshots</S.Heading>
          <S.Description>
            A visual walkthrough of the project's key interfaces and features.
          </S.Description>
        </S.Header>

        <S.Grid role="list">
          {screenshots.map((screenshot, index) => (
            <S.ImageWrapper
              key={index}
              role="listitem"
              onClick={() => handleImageClick(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleImageClick(index);
                }
              }}
              tabIndex={0}
              aria-label={`View screenshot ${index + 1} of ${screenshots.length}`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt || `Screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                width="600"
                height="337"
              />
            </S.ImageWrapper>
          ))}
        </S.Grid>
      </S.Section>

      <ImageLightbox
        images={screenshots}
        initialIndex={selectedIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
      />
    </>
  );
};

export default Screenshots;
