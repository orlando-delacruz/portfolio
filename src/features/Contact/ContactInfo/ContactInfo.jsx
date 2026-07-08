import SectionHeading from '../../../components/SectionHeading';
import contactInfoData from '../../../data/pages/Contact/contactInfo.data';
import * as S from './ContactInfo.styled';

const ContactInfo = () => {
  const { heading, cards } = contactInfoData;

  return (
    <S.Section aria-labelledby="contact-info-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.ariaLabel}
        id="contact-info-heading"
      />

      <S.Grid role="list" aria-label="Contact details">
        {cards.map(({ id, icon: Icon, title, value, href, description }) => (
          <S.Card key={id} role="listitem">
            <S.IconWrapper aria-hidden="true">
              <Icon />
            </S.IconWrapper>

            <S.CardBody>
              <S.CardTitle>{title}</S.CardTitle>

              {href ? (
                <S.CardLink
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {value}
                </S.CardLink>
              ) : (
                <S.CardValue>{value}</S.CardValue>
              )}

              <S.CardDescription>{description}</S.CardDescription>
            </S.CardBody>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default ContactInfo;