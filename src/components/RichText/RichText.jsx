import { RichText as RichTextRenderer } from "@graphcms/rich-text-react-renderer";
import * as S from "./RichText.styled";

/**
 * Custom Rich Text renderer for Hygraph content.
 * Maps Hygraph nodes to styled components.
 */
const HygraphRichText = ({ content }) => {
  if (!content) return null;

  // Define custom renderers for each node type
  const renderers = {
    // ─── Marks (inline) ────────────────────────────────
    bold: ({ children }) => <S.Bold>{children}</S.Bold>,
    italic: ({ children }) => <S.Italic>{children}</S.Italic>,
    underline: ({ children }) => <S.Underline>{children}</S.Underline>,
    code: ({ children }) => <S.InlineCode>{children}</S.InlineCode>,
    link: ({ children, href, openInNewTab }) => (
      <S.RichLink
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </S.RichLink>
    ),

    // ─── Block nodes ─────────────────────────────────────
    h1: ({ children }) => <S.H1>{children}</S.H1>,
    h2: ({ children }) => <S.H2>{children}</S.H2>,
    h3: ({ children }) => <S.H3>{children}</S.H3>,
    h4: ({ children }) => <S.H4>{children}</S.H4>,
    h5: ({ children }) => <S.H5>{children}</S.H5>,
    h6: ({ children }) => <S.H6>{children}</S.H6>,
    paragraph: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
    blockquote: ({ children }) => <S.Blockquote>{children}</S.Blockquote>,
    hr: () => <S.HorizontalRule />,

    // ─── Lists ───────────────────────────────────────────
    ul: ({ children }) => <S.UnorderedList>{children}</S.UnorderedList>,
    ol: ({ children }) => <S.OrderedList>{children}</S.OrderedList>,
    li: ({ children }) => <S.ListItem>{children}</S.ListItem>,

    // ─── Code blocks ────────────────────────────────────
    code_block: ({ children, language }) => (
      <S.CodeBlock language={language}>
        <pre>
          <code>{children}</code>
        </pre>
      </S.CodeBlock>
    ),

    // ─── Images ──────────────────────────────────────────
    img: ({ src, altText, width, height }) => (
      <S.RichImage
        src={src}
        alt={altText || "Rich text image"}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    ),
  };

  return (
    <S.RichTextContainer>
      <RichTextRenderer content={content} renderers={renderers} />
    </S.RichTextContainer>
  );
};

export default HygraphRichText;
