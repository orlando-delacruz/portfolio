import { useState, useCallback } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionHeading from "../../../components/SectionHeading";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchFaqSection } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import * as S from "./FAQ.styled";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const { data, loading, error, retry , ref } = useCmsQuery(fetchFaqSection, { defer: true });

  const toggleItem = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  if (loading) {
    return (
      <S.Section ref={ref} aria-label="Loading frequently asked questions">
        <SectionSkeleton label="Loading frequently asked questions..." lines={4} />
      </S.Section>
    );
  }

  if (error || !data?.heading) {
    return (
      <S.Section ref={ref} aria-label="Frequently asked questions">
        <QueryError
          message={error || "FAQ content is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const { items, heading } = data;

  return (
    <S.Section ref={ref} aria-labelledby="faq-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel="faq-heading"
        id="faq-heading"
      />

      <S.Accordion role="list" aria-label="Frequently asked questions">
        {items.map(({ question, answer }, index) => {
          const id = `faq-${index}`;
          const isOpen = openId === id;

          return (
            <S.AccordionItem key={id} role="listitem">
              <S.QuestionButton
                onClick={() => toggleItem(id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${id}`}
                id={`faq-question-${id}`}
              >
                <S.QuestionText>{question}</S.QuestionText>
                <S.Indicator aria-hidden="true">
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </S.Indicator>
              </S.QuestionButton>

              <S.AnswerWrapper
                id={`faq-answer-${id}`}
                role="region"
                aria-labelledby={`faq-question-${id}`}
                $isOpen={isOpen}
              >
                <S.AnswerText>{answer}</S.AnswerText>
              </S.AnswerWrapper>
            </S.AccordionItem>
          );
        })}
      </S.Accordion>
    </S.Section>
  );
};

export default FAQ;
