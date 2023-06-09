import React, { useContext } from "react";
import { CocktailsContext } from "../CocktailsContext";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CardView = () => {
  const { cocktails } = useContext(CocktailsContext);

  return (
    <Grid container spacing={3}>
      {cocktails.map((cocktail) => (
        <Grid item xs={12} sm={6} md={4} key={cocktail.id}>
          <Card
            sx={{
              maxWidth: 345,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={cocktail.image}
              alt={cocktail.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {cocktail.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div" style={{color:"grey"}}>
                {cocktail.info}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ lineHeight: "1.5em" }}
              >
                {cocktail.instructions}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardView;
