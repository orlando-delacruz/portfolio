import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./CallToAction.styled";
import useCmsQuery from "../../hooks/useCmsQuery";
import { fetchCtaContent } from "../../services/hygraph";
import { QueryError, SectionSkeleton } from "../QueryState";

const CallToAction = () => {
  const { data: cta, loading, error, retry, ref } = useCmsQuery(fetchCtaContent, { defer: true });

  const imageUrl = cta?.image?.url;

  useEffect(() => {
    if (!imageUrl) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = imageUrl;
    link.fetchPriority = "high";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [imageUrl]);

  if (loading) {
    return (
      <S.CtaWrapper ref={ref} id="call-to-action" aria-label="Loading call to action">
        <SectionSkeleton label="Loading call to action..." lines={2} />
      </S.CtaWrapper>
    );
  }

  if (error || !cta) {
    return (
      <S.CtaWrapper ref={ref} id="call-to-action" aria-label="Call to action">
        <QueryError
          message={error || "Call to action is not published yet."}
          onRetry={retry}
        />
      </S.CtaWrapper>
    );
  }

  const {
    title,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    image,
    imageAlt,
  } = cta;

  return (
    <S.CtaWrapper ref={ref} id="call-to-action" aria-labelledby="cta-title">
      <S.CtaContent>
        <S.CtaDetails>
          <S.Title id="cta-title">{title}</S.Title>
          <S.Description>{description}</S.Description>

          <S.ActionButtons>
            <S.PrimaryButton
              as={Link}
              to={primaryHref}
              aria-label="Go to contact page"
            >
              {primaryLabel}
            </S.PrimaryButton>

            <S.SecondaryButton
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {secondaryLabel}
            </S.SecondaryButton>
          </S.ActionButtons>
        </S.CtaDetails>

        <S.RightColumn>
          <S.CtaImage>
            <img
              src={image?.url}
              alt={imageAlt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={image?.width || 456}
              height={image?.height || 392}
            />
          </S.CtaImage>
        </S.RightColumn>
      </S.CtaContent>
    </S.CtaWrapper>
  );
};

export default CallToAction;
