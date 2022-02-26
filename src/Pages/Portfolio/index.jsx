import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PortfolioCard from "../../Components/PortfolioCard";

export default function PorfolioPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PortfolioCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PortfolioCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PortfolioCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PortfolioCard />
        </Grid>
      </Grid>
    </Box>
  );
}
