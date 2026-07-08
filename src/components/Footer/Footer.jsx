import { Link } from "react-router-dom";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import * as S from "./Footer.styled";
import footerData from "../../data/footer";

const Footer = () => {
    const { navigateToSection, navigateToPage } = useSectionNavigation();

    const {
        logo,
        title,
        subtitle,
        description,
        socialLinks,
        quickLinksTitle,
        quickLinks,
        pageLinksTitle,
        pageLinks,
        contactTitle,
        contactLinks,
    } = footerData;

    const handleLinkClick = (e, href, type) => {
        e.preventDefault();

        if (type === "section") {
            const sectionId = href.replace("#", "");
            navigateToSection(sectionId);
        } else if (type === "page") {
            navigateToPage(href);
        } else {
            navigateToPage(href);
        }
    };

    const renderLink = (href, label, type = "page") => {
        const isSection = type === "section";
        const isExternal =
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:");

        if (isExternal) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                </a>
            );
        }

        if (isSection) {
            return (
                <a
                    href={href}
                    onClick={(e) => handleLinkClick(e, href, "section")}
                >
                    {label}
                </a>
            );
        }

        return (
            <Link to={href} onClick={(e) => handleLinkClick(e, href, "page")}>
                {label}
            </Link>
        );
    };

    // FIXED: parameter is `Icon` (capitalized) – no type annotation
    const renderLinkWithIcon = (href, Icon, label, type = "page") => {
        const isSection = type === "section";
        const isExternal =
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:");

        if (isExternal) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon aria-hidden="true" />
                    {label}
                </a>
            );
        }

        if (isSection) {
            return (
                <a
                    href={href}
                    onClick={(e) => handleLinkClick(e, href, "section")}
                >
                    <Icon aria-hidden="true" />
                    {label}
                </a>
            );
        }

        return (
            <Link to={href} onClick={(e) => handleLinkClick(e, href, "page")}>
                <Icon aria-hidden="true" />
                {label}
            </Link>
        );
    };

    return (
        <S.FooterWrapper role="contentinfo" aria-labelledby="footer-heading">
            <S.FooterContent id="contacts">
                <S.Overlay aria-hidden="true" />

                <S.ContentGrid>
                    {/* Brand Column */}
                    <S.Column1>
                        <S.Logo as={Link} to="/" aria-label={`${title} - Go to Homepage`}>
                            <S.LogoImage>
                                <img src={logo.image} alt={logo.alt} loading="eager" decoding="async" width={45} height={45} />
                            </S.LogoImage>
                            <S.LogoDetails>
                                <S.LogoTitle id="footer-heading">{title}</S.LogoTitle>
                                <S.LogoSubTitle>{subtitle}</S.LogoSubTitle>
                            </S.LogoDetails>
                        </S.Logo>

                        <S.FooterDescription>{description}</S.FooterDescription>

                        <S.FooterSocials aria-label="Social Media Links">
                            {socialLinks.map(({ id, href, icon: Icon, label }) => (
                                <S.SocialLink
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                >
                                    <Icon aria-hidden="true" />
                                </S.SocialLink>
                            ))}
                        </S.FooterSocials>
                    </S.Column1>

                    {/* Quick Links Column */}
                    <S.Column2 as="nav" aria-labelledby="quick-links-heading">
                        <S.FooterTitle id="quick-links-heading">{quickLinksTitle}</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {quickLinks.map(({ id, href, label, type }) => (
                                <li key={id}>
                                    <S.FooterLink as="span">
                                        {renderLink(href, label, type)}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column2>

                    {/* Page Links Column */}
                    <S.Column3 as="nav" aria-labelledby="page-links-heading">
                        <S.FooterTitle id="page-links-heading">{pageLinksTitle}</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {pageLinks.map(({ id, href, label }) => (
                                <li key={id}>
                                    <S.FooterLink as="span">
                                        {renderLink(href, label, "page")}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column3>

                    {/* Contact Column */}
                    <S.Column4 as="nav" aria-labelledby="contact-heading">
                        <S.FooterTitle id="contact-heading">{contactTitle}</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {contactLinks.map(({ id, href, icon: Icon, label }) => (
                                <li key={id}>
                                    <S.FooterLink as="span">
                                        {renderLinkWithIcon(href, Icon, label)}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column4>
                </S.ContentGrid>
            </S.FooterContent>
        </S.FooterWrapper>
    );
};

export default Footer;