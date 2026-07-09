import styled from 'styled-components';
import theme from '../../styles/theme';

export const RichTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

// ─── Inline marks ────────────────────────────────────────────

export const Bold = styled.strong`
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
`;

export const Italic = styled.em`
  font-style: italic;
`;

export const Underline = styled.u`
  text-decoration: underline;
  text-underline-offset: 0.15em;
`;

export const InlineCode = styled.code`
  font-family: ui-monospace, 'Fira Code', monospace;
  font-size: 0.9em;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.07);
  color: ${theme.colors.primary};
`;

export const RichLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: underline;
  text-underline-offset: 0.15em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

// ─── Headings ────────────────────────────────────────────────

export const H1 = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.2;
  color: ${theme.colors.white};
  margin-bottom: 0.25rem;
`;

export const H2 = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.25;
  color: ${theme.colors.white};
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const H3 = styled.h3`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.3;
  color: ${theme.colors.white};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const H4 = styled.h4`
  font-size: ${theme.typography.heading.h4};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.35;
  color: ${theme.colors.white};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const H5 = styled.h5`
  font-size: ${theme.typography.heading.h5};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.4;
  color: ${theme.colors.white};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const H6 = styled.h6`
  font-size: ${theme.typography.heading.h6};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.4;
  color: ${theme.colors.white};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

// ─── Paragraph ───────────────────────────────────────────────

export const Paragraph = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

// ─── Blockquote ──────────────────────────────────────────────

export const Blockquote = styled.blockquote`
  padding: 1rem 1.5rem;
  margin: 0;
  border-left: 4px solid ${theme.colors.primary};
  background: rgba(${theme.colors.primaryRgb}, 0.06);
  border-radius: 0 8px 8px 0;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.75);
    font-size: ${theme.typography.size.md};
    font-style: italic;
  }

  ${Paragraph} {
    color: rgba(255, 255, 255, 0.75);
    font-size: ${theme.typography.size.md};
    font-style: italic;
  }
`;

// ─── Horizontal Rule ─────────────────────────────────────────

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 1rem 0;
`;

// ─── Lists ───────────────────────────────────────────────────

export const UnorderedList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: disc;

  ul {
    list-style-type: circle;
    margin-top: 0.25rem;
  }

  ul ul {
    list-style-type: square;
  }
`;

export const OrderedList = styled.ol`
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: decimal;

  ol {
    list-style-type: lower-alpha;
    margin-top: 0.25rem;
  }

  ol ol {
    list-style-type: lower-roman;
  }
`;

export const ListItem = styled.li`
  font-size: ${theme.typography.size.body};
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// ─── Code Block ──────────────────────────────────────────────

export const CodeBlock = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: ${theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.07);

  pre {
    padding: 1.25rem;
    margin: 0;
    overflow-x: auto;
    background: transparent;
  }

  code {
    font-family: ui-monospace, 'Fira Code', monospace;
    font-size: ${theme.typography.size.sm};
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

// ─── Images ──────────────────────────────────────────────────

export const RichImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  margin: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media ${theme.media.mobile} {
    border-radius: 8px;
  }
`;