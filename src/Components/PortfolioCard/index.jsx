import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function PortfolioCard({ name, img, desc, url }) {
  return (
    <Card>
      <CardMedia component="img" image={img} alt={`${name}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={url} target="_blank" color="inherit" underline="none">
            Go to website
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
