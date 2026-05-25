import * as S from "./Footer.styled";
import footerData from "../../data/footer";

const Footer = () => {

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

    return (
        <S.FooterWrapper>
            <S.FooterContent id="contacts">
                <S.Overlay />

                <S.ContentGrid>
                    {/* Brand Column */}
                    <S.Column1>
                        <S.Logo>
                            <S.LogoImage>
                                <img src={logo.image} alt={logo.alt} />
                            </S.LogoImage>
                            <S.LogoDetails>
                                <S.LogoTitle>{title}</S.LogoTitle>
                                <S.LogoSubTitle>{subtitle}</S.LogoSubTitle>
                            </S.LogoDetails>
                        </S.Logo>

                        <S.FooterDescription>{description}</S.FooterDescription>

                        <S.FooterSocials>
                            {socialLinks.map(({ id, href, icon: Icon }) => (
                                <S.SocialLink key={id} href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon />
                                </S.SocialLink>
                            ))}
                        </S.FooterSocials>
                    </S.Column1>

                    {/* Quick Links Column */}
                    <S.Column2>
                        <S.FooterTitle>{quickLinksTitle}</S.FooterTitle>
                        <S.FooterLinks>
                            {quickLinks.map(({ id, href, label }) => (
                                <S.FooterLink key={id} href={href}>
                                    {label}
                                </S.FooterLink>
                            ))}
                        </S.FooterLinks>
                    </S.Column2>

                    {/* Page Links Column */}
                    <S.Column3>
                        <S.FooterTitle>{pageLinksTitle}</S.FooterTitle>
                        <S.FooterLinks>
                            {pageLinks.map(({ id, href, label }) => (
                                <S.FooterLink key={id} href={href}>
                                    {label}
                                </S.FooterLink>
                            ))}
                        </S.FooterLinks>
                    </S.Column3>

                    {/* Contact Column */}
                    <S.Column4>
                        <S.FooterTitle>{contactTitle}</S.FooterTitle>
                        <S.FooterLinks>
                            {contactLinks.map(({ id, href, icon: Icon, label }) => (
                                <S.FooterLink key={id} href={href}>
                                    <Icon />
                                    {label}
                                </S.FooterLink>
                            ))}
                        </S.FooterLinks>
                    </S.Column4>
                </S.ContentGrid>
            </S.FooterContent>
        </S.FooterWrapper>
    );
};

export default Footer;