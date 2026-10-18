import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Starfield from './starfield';
import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* <Starfield /> */}
      <Nav pathname={pathname} />
      <Box sx={{ flexGrow: 1, pt: 8, pb: 4 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}