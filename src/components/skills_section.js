import { Box, Grid, Typography, Paper } from '@mui/material';
import SkillChip from './skill_chip';
import { skills } from '@/data/skills';

const categoryConfig = {
  languages: { label: 'Languages', color: '#22d3ee' },
  frontend: { label: 'Frontend', color: '#8b5cf6' },
  backend: { label: 'Backend', color: '#d946ef' },
  cloudDevOps: { label: 'Cloud & DevOps', color: '#fbbf24' },
  dataGraphics: { label: 'Data & Graphics', color: '#34d399' },
  methodologies: { label: 'Methodologies', color: '#94a3b8' },
};

const categoryOrder = Object.keys(categoryConfig);

export default function SkillsSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#e8eaf2',
          }}
        >
          Skills
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {categoryOrder.map((catKey) => (
          <Grid key={catKey} item xs={12} sm={6} lg={2}>
            <Paper
              sx={{
                borderRadius: '12px',
                border: '1px solid rgba(35, 48, 74, 0.6)',
                background: 'rgba(26, 35, 53, 0.6)',
                p: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: categoryConfig[catKey].color,
                  mb: 1.5,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {categoryConfig[catKey].label}
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {skills[catKey].map(([name, color], i) => (
                  <SkillChip key={i} name={name} color={color} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}