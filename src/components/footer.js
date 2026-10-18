import { Box, Typography, Link } from '@mui/material';
import LinkComponent from 'next/link';

export default function Footer() {
  return (
    <Box
      sx={{
        background: '#0a0e17',
        borderTop: '1px solid rgba(35, 48, 74, 0.6)',
        pt: 4,
        pb: 2,
        color: '#94a3b8',
        fontSize: '0.85rem',
      }}
    >
      <Box sx={{ px: 4 }}>
        <Typography sx={{ textAlign: 'center', mb: 1 }}>
          © {new Date().getFullYear()} Preet Mistry. Built with Next.js.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <LinkComponent href="https://github.com/pmistry9597" target="_blank" rel="noopener">
            <Link sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#22d3ee' } }}>
              GitHub
            </Link>
          </LinkComponent>
          <LinkComponent href="/preet_mistry_resume.pdf" target="_blank" rel="noopener">
            <Link sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#22d3ee' } }}>
              Resume
            </Link>
          </LinkComponent>
        </Box>
      </Box>
    </Box>
  );
}