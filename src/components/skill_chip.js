import { Box } from '@mui/material';

export default function SkillChip({ name, color }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${color}30 0%, rgba(18, 24, 38, 0.7) 50%, ${color}15 100%)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${color}80`,
        borderRadius: 4,
        px: 1.5,
        py: 0.5,
        fontSize: '0.7rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: '"Orbitron", sans-serif',
        color: '#e8eaf2',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease',
        '&:hover': {
          borderColor: color,
          transform: 'scale(1.02)',
          boxShadow: `0 0 20px ${color}60, inset 0 0 1px ${color}A0`,
          background: `linear-gradient(135deg, ${color}40 0%, rgba(18, 24, 38, 0.8) 50%, ${color}25 100%)`,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${color}35 0%, ${color}15 30%, transparent 60%)`,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: `linear-gradient(180deg, ${color}30 0%, transparent 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      {name}
    </Box>
  );
}