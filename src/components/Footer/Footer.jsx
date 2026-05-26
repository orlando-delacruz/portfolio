import * as S from "./Footer.styled";
import footerData from "../../data/footer";

const Footer = () => {

    const {
        logo, title, subtitle, description, socialLinks, quickLinksTitle, quickLinks, pageLinksTitle, pageLinks, contactTitle, contactLinks, } = footerData;

    return (
        <S.FooterWrapper role="contentinfo" aria-labelledby="footer-heading">
            <S.FooterContent id="contacts">
                <S.Overlay aria-hidden="true" />

                <S.ContentGrid>
                    {/* Brand Column */}
                    <S.Column1>
                        <S.Logo as="a" href="/" aria-label={`${title} - Go to Homepage`}>
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
                                <S.SocialLink key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Icon aria-hidden="true" />
                                </S.SocialLink>
                            ))}
                        </S.FooterSocials>
                    </S.Column1>

                    {/* Quick Links Column */}
                    <S.Column2 as="nav" aria-labelledby="quick-links-heading">
                        <S.FooterTitle id="quick-links-heading">{quickLinksTitle}</S.FooterTitle>
                        <S.FooterLinks as="ul">
                            {quickLinks.map(({ id, href, label }) => (
                                <li key={id}>
                                    <S.FooterLink href={href}>
                                        {label}
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
                                    <S.FooterLink href={href}>
                                        {label}
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
                                    <S.FooterLink href={href} target="_blank" rel="noopener noreferrer">
                                        <Icon aria-hidden="true" />
                                        {label}
                                    </S.FooterLink>
                                </li>
                            ))}
                        </S.FooterLinks>
                    </S.Column4>
                </S.ContentGrid>
            </S.FooterContent>
        </S.FooterWrapper >
    );
};

export default Footer;