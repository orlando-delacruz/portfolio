import SectionHeading from '../../../components/SectionHeading';
import useCmsQuery from '../../../hooks/useCmsQuery';
import { fetchContactInfoSection } from '../../../services/hygraph';
import { getIcon } from '../../../utils/iconMap';
import { QueryError, SectionSkeleton } from '../../../components/QueryState';
import * as S from './ContactInfo.styled';

const ContactInfo = () => {
  const { data, loading, error, retry , ref } = useCmsQuery(fetchContactInfoSection, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} aria-label="Loading contact information">
        <SectionSkeleton label="Loading contact information..." lines={3} />
      </S.Section>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.Section ref={ref} aria-label="Contact information">
        <QueryError
          message={error || "Contact information is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const { cards, heading } = data;

  return (
    <S.Section ref={ref} aria-labelledby="contact-info-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel="contact-info-heading"
        id="contact-info-heading"
      />

      <S.Grid role="list" aria-label="Contact details">
        {cards.map(({ slug, iconKey, title, value, href, description }) => {
          const Icon = getIcon(iconKey);
          return (
            <S.Card key={slug} role="listitem">
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
          );
        })}
      </S.Grid>
    </S.Section>
  );
};

export default ContactInfo;
