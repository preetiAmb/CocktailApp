import React, { useState } from "react";
import ViewSelector from "../components/ViewSelector/ViewSelector";
import GridView from "../components/GridView/GridView";
import CarouselView from "../components/CarouselView/CarouselView";
import CardView from "../components/CardView/CardView";
import { Toolbar, Typography } from "@mui/material";

const Home = () => {
  const [view, setView] = useState("grid");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <Toolbar disableGutters>
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          justifyContent="center"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Cocktail Recipes
        </Typography>
      </Toolbar>
      <ViewSelector onViewChange={handleViewChange} />
      {view === "grid" && <GridView />}
      {view === "carousel" && <CarouselView />}
      {view === "card" && <CardView />}
    </>
  );
};

export default Home;
