import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import * as S from "./Hero.styled";

const Hero = ({
  thumbnail,
  thumbnailAlt,
  category,
  date,
  dateTime,
  duration,
  title,
  intro,
}) => (
  <S.HeroSection aria-labelledby="blog-detail-title">
    <S.BgGlow aria-hidden="true" />

    <BreadCrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/blogs" },
        { label: title },
      ]}
    />

    <S.Inner>
      <S.BackLink as={Link} to="/blogs" aria-label="Back to all articles">
        <FiArrowLeft aria-hidden="true" /> All Articles
      </S.BackLink>

      <S.CategoryBadge aria-label={`Category: ${category}`}>
        {category}
      </S.CategoryBadge>

      <S.MetaRow>
        <time dateTime={dateTime}>{date}</time>
        <GoDotFill className="sep" aria-hidden="true" />
        <span aria-label={`Reading time: ${duration}`}>{duration}</span>
      </S.MetaRow>

      <S.Title id="blog-detail-title">{title}</S.Title>

      <S.TitleDivider aria-hidden="true" />

      <S.IntroWrapper>
        {intro.map((paragraph, i) => (
          <S.IntroParagraph key={i}>{paragraph}</S.IntroParagraph>
        ))}
      </S.IntroWrapper>

      <S.CoverImage>
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="860"
          height="480"
        />
      </S.CoverImage>
    </S.Inner>
  </S.HeroSection>
);

export default Hero;