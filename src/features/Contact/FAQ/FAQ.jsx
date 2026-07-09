import { useState, useCallback, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionHeading from "../../../components/SectionHeading";
import faqData from "../../../data/pages/Contact/faq.data";
import * as S from "./FAQ.styled";

const FAQ = () => {
  const { heading, items } = faqData;
  const [openId, setOpenId] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  const toggleItem = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  // Measure height when an item is opened
  useEffect(() => {
    if (openId && contentRefs.current[openId]) {
      const height = contentRefs.current[openId].scrollHeight;
      setHeights((prev) => ({ ...prev, [openId]: height }));
    }
  }, [openId]);

  return (
    <S.Section aria-labelledby="faq-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.ariaLabel}
        id="faq-heading"
      />

      <S.Accordion role="list" aria-label="Frequently asked questions">
        {items.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          const height = heights[id] || 0;

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
                $height={isOpen ? height : 0}
              >
                <S.AnswerText ref={(el) => (contentRefs.current[id] = el)}>
                  {answer}
                </S.AnswerText>
              </S.AnswerWrapper>
            </S.AccordionItem>
          );
        })}
      </S.Accordion>
    </S.Section>
  );
};

export default FAQ;
