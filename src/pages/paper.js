import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '20%',
          height: '300px',
          borderRadius: '10px',
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={10} />
    </Box>
  );
}