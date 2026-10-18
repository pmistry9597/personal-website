import { Box, Typography } from '@mui/material';

export default function SkillChip({ item }) {
  const [name, color] = item;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        background: color || 'rgba(34, 211, 238, 0.15)',
        color: '#fff',
        border: `1px solid ${color || 'rgba(34, 211, 238, 0.4)'}`,
        borderRadius: 4,
        px: 1.5,
        py: 0.5,
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {name}
    </Box>
  );
}