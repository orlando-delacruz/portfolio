import SectionHeading from "../../../components/SectionHeading";
import * as S from "./ServiceSection.styled";
import serviceData from "../../../data/pages/Home/serviceData";

const { heading, services } = serviceData;

const ServiceSection = ({ id }) => {
  return (
    <S.SectionWrapper id={id}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        aria-label={heading.ariaLabel}
      />

      <S.ContentGrid role="list">
        {services.map(({ id: serviceId, icon, title, description, tag }) => (
          <S.ServiceCard key={serviceId} as="article" role="listitem">
            <S.CardHead>
              <S.CardIcon
                src={icon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={50}
                height={50}
              />
              <S.CardTitle>{title}</S.CardTitle>
            </S.CardHead>

            <S.CardBody>{description}</S.CardBody>

            {tag && <S.ServiceTag>{tag}</S.ServiceTag>}
          </S.ServiceCard>
        ))}
      </S.ContentGrid>
    </S.SectionWrapper>
  );
};

export default ServiceSection;