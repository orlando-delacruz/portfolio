import { useEffect, useRef, useCallback, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import * as S from "./ImageLightbox.styled";

const ImageLightbox = ({ images, initialIndex = 0, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => document.body.classList.remove("lightbox-open");
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const goToPrevious = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [isOpen, onClose, goToPrevious, goToNext],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  return (
    <>
      <S.GlobalStyle />
      <S.Overlay onClick={onClose}>
        <S.Modal
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={(e) => e.stopPropagation()}
        >
          <S.Image
            src={currentImage.src}
            alt={currentImage.alt || "Screenshot"}
          />
        </S.Modal>

        <S.CloseButton
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close lightbox"
        >
          <FiX />
        </S.CloseButton>

        <S.NavButton
          $side="prev"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          aria-label="Previous image"
          disabled={!hasMultiple}
          style={{ visibility: hasMultiple ? "visible" : "hidden" }}
        >
          <FiChevronLeft />
        </S.NavButton>

        <S.NavButton
          $side="next"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          aria-label="Next image"
          disabled={!hasMultiple}
          style={{ visibility: hasMultiple ? "visible" : "hidden" }}
        >
          <FiChevronRight />
        </S.NavButton>

        {hasMultiple && (
          <S.Counter>
            {currentIndex + 1} / {images.length}
          </S.Counter>
        )}
      </S.Overlay>
    </>
  );
};

export default ImageLightbox;
