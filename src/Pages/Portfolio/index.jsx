import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PortfolioCard from "../../Components/PortfolioCard";
import portfolioArray from "../../Api/portfolioData";

export default function PorfolioPage() {
    const portfolios = portfolioArray;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {portfolioArray.map(({id, ...otherPortfolioProps}) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <PortfolioCard  {...otherPortfolioProps} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
