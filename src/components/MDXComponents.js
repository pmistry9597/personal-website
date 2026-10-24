/**
 * MDX Component Registry
 * Maps HTML elements to styled components using plain style objects
 * (Avoids MUI sx prop which requires ThemeProvider during static generation)
 * Extend this object to add custom components like ProjectImage, ProjectCarousel, Callout, etc.
 */

const baseStyles = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  color: '#cbd5e1',
  lineHeight: 1.8,
};

// Inline code styling
const InlineCode = ({ children, ...props }) => (
  <code
    style={{
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: '0.85em',
      background: 'rgba(34, 211, 238, 0.1)',
      color: '#22d3ee',
      padding: '0.125em 0.375em',
      borderRadius: '4px',
      ...props.style,
    }}
    {...props}
  >
    {children}
  </code>
);

// Code block styling
const CodeBlock = ({ children, ...props }) => {
  const code = Array.isArray(children) ? children[0] : children;
  return (
    <pre
      style={{
        fontFamily: '"JetBrains Mono", "Fira Code", monospace',
        fontSize: '0.8rem',
        lineHeight: 1.6,
        background: '#0a0e17',
        color: '#e8eaf2',
        padding: '1.5rem',
        borderRadius: '8px',
        overflow: 'auto',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        margin: '1.5rem 0',
        ...props.style,
      }}
      {...props}
    >
      {code}
    </pre>
  );
};

// Blockquote styling
const Blockquote = ({ children, ...props }) => (
  <div
    style={{
      borderLeft: '3px solid #22d3ee',
      paddingLeft: '1.5rem',
      marginLeft: '1rem',
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      color: '#94a3b8',
      fontStyle: 'italic',
      ...props.style,
    }}
    {...props}
  >
    <p style={{ lineHeight: 1.7, margin: 0 }}>{children}</p>
  </div>
);

// Table wrapper for markdown tables
const TableWrapper = ({ children, ...props }) => (
  <div
    style={{
      overflowX: 'auto',
      margin: '1.5rem 0',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '8px',
      ...props.style,
    }}
    {...props}
  >
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>
  </div>
);

// Table header cell
const Th = ({ children, ...props }) => (
  <th
    style={{
      padding: '12px 16px',
      textAlign: 'left',
      background: 'rgba(34, 211, 238, 0.1)',
      color: '#22d3ee',
      fontWeight: 600,
      fontSize: '0.85rem',
      borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
      fontFamily: '"Oswald", sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      ...props.style,
    }}
    {...props}
  >
    {children}
  </th>
);

// Table data cell
const Td = ({ children, ...props }) => (
  <td
    style={{
      padding: '10px 16px',
      color: '#cbd5e1',
      fontSize: '0.9rem',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      ...props.style,
    }}
    {...props}
  >
    {children}
  </td>
);

// Table row
const Tr = ({ children, ...props }) => (
  <tr style={{ ...props.style }} {...props}>{children}</tr>
);

// Table header
const Thead = ({ children, ...props }) => (
  <thead style={{ ...props.style }} {...props}>{children}</thead>
);

// Table body
const Tbody = ({ children, ...props }) => (
  <tbody style={{ ...props.style }} {...props}>{children}</tbody>
);

// Styled list components
const Ul = ({ children, ...props }) => (
  <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', ...props.style }} {...props}>{children}</ul>
);

const Ol = ({ children, ...props }) => (
  <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem', ...props.style }} {...props}>{children}</ol>
);

const Li = ({ children, ...props }) => (
  <li style={{ marginBottom: '0.5rem', lineHeight: 1.7, color: '#cbd5e1', ...props.style }} {...props}>
    {children}
  </li>
);

// Link styling for markdown links
const Link = ({ href, children, ...props }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    style={{
      color: '#22d3ee',
      textDecoration: 'underline',
      textUnderlineOffset: 2,
      transition: 'color 0.2s',
      ...props.style,
    }}
    onMouseEnter={(e) => (e.target.style.color = '#d946ef')}
    onMouseLeave={(e) => (e.target.style.color = '#22d3ee')}
    {...props}
  >
    {children}
  </a>
);

// Heading components with Orbitron font
const Heading = ({ level, children, ...props }) => {
  const styles = {
    1: { fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1.5rem', color: '#e8eaf2' },
    2: { fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: '#22d3ee' },
    3: { fontSize: '1.1rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem', color: '#94a3b8' },
  };
  const Tag = `h${level}`;
  return (
    <Tag
      style={{
        fontFamily: '"Orbitron", sans-serif',
        letterSpacing: '0.05em',
        ...styles[level],
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

const H1 = (props) => <Heading level={1} {...props} />;
const H2 = (props) => <Heading level={2} {...props} />;
const H3 = (props) => <Heading level={3} {...props} />;

// Paragraph
const P = (props) => (
  <p
    style={{
      ...baseStyles,
      marginBottom: '1rem',
      fontSize: '0.95rem',
      ...props.style,
    }}
    {...props}
  >
    {props.children}
  </p>
);

// Horizontal rule
const Hr = (props) => (
  <hr
    style={{
      margin: '2rem 0',
      border: 'none',
      borderTop: '1px solid rgba(148, 163, 184, 0.2)',
      ...props.style,
    }}
    {...props}
  />
);

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  code: InlineCode,
  pre: CodeBlock,
  blockquote: Blockquote,
  table: TableWrapper,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  hr: Hr,
  a: Link,
  // Custom components (add here when ready)
  // ProjectImage,
  // ProjectCarousel,
  // Callout,
};
