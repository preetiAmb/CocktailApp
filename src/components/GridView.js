import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CocktailsContext } from "./CocktailsContext";

const GridView = () => {
  const { cocktails } = useContext(CocktailsContext);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {cocktails.map((cocktail) => (
        <Grid item xs={2} sm={4} md={4} key={cocktail.id}>
          <img
            src={cocktail.image}
            alt={cocktail.name}
            height="auto"
            width="100%"
          />
          <div>{cocktail.name}</div>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;
