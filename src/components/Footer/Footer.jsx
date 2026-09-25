import { Link } from "react-router-dom";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import * as S from "./Footer.styled";
import useCmsQuery from "../../hooks/useCmsQuery";
import { fetchFooterSection } from "../../services/hygraph";
import { getIcon } from "../../utils/iconMap";
import { QueryError, SectionSkeleton } from "../QueryState";

const Footer = () => {
    const { navigateToSection, navigateToPage } = useSectionNavigation();
    const { data: footer, loading, error, retry, ref } = useCmsQuery(fetchFooterSection, { defer: true });

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
    const renderLinkWithIcon = (href, iconKey, label, type = "page") => {
        const Icon = getIcon(iconKey);
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

    if (loading) {
        return (
            <S.FooterWrapper ref={ref} role="contentinfo" aria-label="Loading footer">
                <SectionSkeleton label="Loading footer..." lines={2} />
            </S.FooterWrapper>
        );
    }

    if (error || !footer) {
        return (
            <S.FooterWrapper ref={ref} role="contentinfo" aria-label="Footer">
                <QueryError
                    message={error || "Footer content is not published yet."}
                    onRetry={retry}
                />
            </S.FooterWrapper>
        );
    }

    const {
        logo,
        logoAlt,
        footerBg,
        title,
        subtitle,
        description,
        socials = [],
        links = [],
    } = footer;

    const quickLinks = links.filter((l) => l.group === "quick");
    const pageLinks = links.filter((l) => l.group === "pages");
    const contactLinks = links.filter((l) => l.group === "contact");

    return (
        <S.FooterWrapper ref={ref} role="contentinfo" aria-labelledby="footer-heading">
            <S.FooterContent id="contacts" $bg={footerBg?.url}>
                <S.Overlay aria-hidden="true" />

                <S.ContentGrid>
                    {/* Brand Column */}
                    <S.Column1>
                        <S.Logo as={Link} to="/" aria-label={`${title} - Go to Homepage`}>
                            <S.LogoImage>
                                <img src={logo?.url} alt={logoAlt} loading="eager" decoding="async" width={45} height={45} />
                            </S.LogoImage>
                            <S.LogoDetails>
                                <S.LogoTitle id="footer-heading">{title}</S.LogoTitle>
                                <S.LogoSubTitle>{subtitle}</S.LogoSubTitle>
                            </S.LogoDetails>
                        </S.Logo>

                        <S.FooterDescription>{description}</S.FooterDescription>

                        <S.FooterSocials aria-label="Social Media Links">
                            {socials.map(({ url, label, iconKey }) => {
                                const Icon = getIcon(iconKey);
                                return (
                                    <S.SocialLink
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Icon aria-hidden="true" />
                                    </S.SocialLink>
                                );
                            })}
                        </S.FooterSocials>
                    </S.Column1>

                    {/* Quick Links Column */}
                    <S.Column2 as="nav" aria-labelledby="quick-links-heading">
                        <S.FooterTitle id="quick-links-heading">Quick Links</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {quickLinks.map(({ label, href, linkType }) => (
                                <li key={`${label}-${href}`}>
                                    <S.FooterLink as="span">
                                        {renderLink(href, label, linkType)}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column2>

                    {/* Page Links Column */}
                    <S.Column3 as="nav" aria-labelledby="page-links-heading">
                        <S.FooterTitle id="page-links-heading">Landing Pages</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {pageLinks.map(({ label, href }) => (
                                <li key={`${label}-${href}`}>
                                    <S.FooterLink as="span">
                                        {renderLink(href, label, "page")}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column3>

                    {/* Contact Column */}
                    <S.Column4 as="nav" aria-labelledby="contact-heading">
                        <S.FooterTitle id="contact-heading">Contact Us</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {contactLinks.map(({ label, href, linkType, iconKey }) => (
                                <li key={`${label}-${href}`}>
                                    <S.FooterLink as="span">
                                        {renderLinkWithIcon(href, iconKey, label, linkType)}
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
