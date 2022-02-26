import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Portfolio from '../../Components/Portfolio';

export default function PorfolioPage(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Portfolio />
      </Grid>
    </Box>
  );
}