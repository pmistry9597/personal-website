import { Box, Toolbar, Typography } from '@mui/material';
import LinkComponent from 'next/link';

export default function Nav({ pathname }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        background: 'rgba(10, 14, 23, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(35, 48, 74, 0.6)',
      }}
    >
      <Toolbar sx={{ px: 4 }}>
        <LinkComponent href="/" passHref legacyBehavior>
          <Typography
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
            }}
          >
            PREET
          </Typography>
        </LinkComponent>
        <Box sx={{ flexGrow: 1 }} />
        {['/', '/projects', '/about'].map((route) => (
          <LinkComponent key={route} href={route} passHref legacyBehavior>
            <Typography
              sx={{
                color: pathname === route ? '#22d3ee' : '#94a3b8',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: `1px solid ${pathname === route ? 'rgba(34, 211, 238, 0.5)' : 'rgba(148, 163, 184, 0.3)'}`,
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                ml: 1,
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'rgba(34, 211, 238, 0.6)',
                },
              }}
            >
              {route === '/' ? 'Home' : route === '/projects' ? 'Projects' : 'About'}
            </Typography>
          </LinkComponent>
        ))}
      </Toolbar>
    </Box>
  );
}