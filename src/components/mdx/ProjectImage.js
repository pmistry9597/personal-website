/**
 * ProjectImage - Custom image component for MDX content
 * Supports captions, lazy loading, hover effects, and space-theme styling
 */
export function ProjectImage({ 
  src, 
  alt = '', 
  caption, 
  width, 
  lazy = true,
  ...props 
}) {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    background: 'rgba(18, 24, 38, 0.5)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'block',
    margin: '0 auto',
    ...(width && { width }),
    ...props.style,
  };

  return (
    <figure style={{ margin: '2rem 0', textAlign: 'center', ...props.figureStyle }}>
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        style={imgStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.01)';
          e.target.style.boxShadow = '0 8px 32px rgba(34, 211, 238, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
        }}
        {...props}
      />
      {caption && (
        <figcaption style={{
          marginTop: '0.75rem',
          fontSize: '0.8rem',
          color: '#94a3b8',
          fontStyle: 'italic',
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.5,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
