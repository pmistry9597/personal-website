import { Box, Typography, Paper, Link } from '@mui/material';
import SkillChip from './skill_chip';
import { formatDate } from '@/data/timeline';

const typeIcons = {
  work: '💼',
  education: '🎓',
  break: '🌿',
  project: '🚀',
  travel: '✈️',
};

const typeColors = {
  work: '#22d3ee',
  education: '#8b5cf6',
  break: '#34d399',
  project: '#d946ef',
  travel: '#fbbf24',
};

function renderIcon({ entry, color, size = 48, fontSize = '1.5rem' }) {
  if (entry.image?.url) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
          border: `1px solid ${color}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <img
          src={entry.image.url}
          alt={entry.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
        border: `1px solid ${color}50`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
        flexShrink: 0,
      }}
    >
      {typeIcons[entry.type] || '📍'}
    </Box>
  );
}

export default function TimelineHighlight({ entry }) {
  const color = typeColors[entry.type] || '#22d3ee';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        paddingLeft: 72,
        mb: 6,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 24,
          top: 12,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: color,
          border: '3px solid #0a0e17',
          boxShadow: `0 0 0 2px ${color}`,
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 31,
          top: 38,
          bottom: -40,
          width: 1,
          borderLeft: `2px dashed ${color}40`,
        }}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: 820,
        }}
      >
        <Paper
          sx={{
            background: 'rgba(18, 24, 38, 0.7)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${color}40`,
            borderRadius: 3,
            p: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: color,
              boxShadow: `0 8px 32px ${color}20`,
            },
          }}
          elevation={0}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
            {renderIcon({ entry, color })}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                <Typography
                  sx={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                </Typography>
                {entry.subtitle && (
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {entry.subtitle}
                  </Typography>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#e8eaf2',
                  mb: 0.5,
                  lineHeight: 1.3,
                }}
              >
                {entry.title}
              </Typography>
              {entry.company && (
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    mb: 0.5,
                  }}
                >
                  {entry.company} {entry.location && `· ${entry.location}`}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '0.75rem', color: '#64748b' }}>
                <span>{formatDate(entry.startDate)} — {entry.endDate === 'Present' ? 'Present' : formatDate(entry.endDate)}</span>
              </Box>
            </Box>
          </Box>

          {entry.description && (
            <Typography
              sx={{
                color: '#cbd5e1',
                lineHeight: 1.7,
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              {entry.description}
            </Typography>
          )}

          {entry.highlights && entry.highlights.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {entry.highlights.slice(0, 3).map((highlight, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.75 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  />
                  <Typography sx={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {highlight}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {entry.tech && entry.tech.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
              {entry.tech.slice(0, 5).map((tech, i) => (
                <SkillChip key={i} name={tech} color={color} />
              ))}
              {entry.tech.length > 5 && (
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    mt: 0.5,
                  }}
                >
                  +{entry.tech.length - 5} more
                </Typography>
              )}
            </Box>
          )}

          {entry.links && entry.links.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {entry.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: color,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: '"Oswald", sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    '&:hover': {
                      color: '#fff',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}