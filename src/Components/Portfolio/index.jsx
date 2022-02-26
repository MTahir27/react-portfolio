import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Portfolio = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>I'm a flexbox container that uses inline-flex!</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>I'm a flexbox container that uses inline-flex!</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>I'm a flexbox container that uses inline-flex!</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>I'm a flexbox container that uses inline-flex!</Item>
      </Grid>
    </>
  );
};

export default Portfolio;
