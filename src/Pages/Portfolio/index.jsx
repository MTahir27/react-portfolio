import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PortfolioCard from "../../Components/PortfolioCard";

export default function PorfolioPage() {
  const portfolioArray = [
    {
      name: "Project Name",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      type: "Ecommerce App",
      id: "1",
    },
    {
      name: "Project Name",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      type: "Ecommerce App",
      id: "1",
    },
    {
      name: "Eduaction Website",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      type: "Eduaction Website",
      id: "3",
    },
    {
      name: "LMS Website",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      type: "LMS Website",
      id: "4",
    },
    {
      name: "Real Estate App",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      type: "Real Estate App",
      id: "5",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PortfolioCard />
        </Grid>
      </Grid>
    </Box>
  );
}
