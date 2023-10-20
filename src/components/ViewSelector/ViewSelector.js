import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  List as ListIcon,
  GridOn,
  ViewCarousel,
  ViewModule,
} from "@mui/icons-material";

const ViewSelector = ({ onViewChange }) => {
  const handleViewChange = (newView) => {
    onViewChange(newView);
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="end">
        <Grid item>
          <List>
            <ListItem data-testid="card-list-item" onClick={() => handleViewChange("card")}>
              <ListItemIcon>
                <ViewModule />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List>
            <ListItem data-testid="grid-list-item" onClick={() => handleViewChange("grid")}>
              <ListItemIcon>
                <GridOn />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List>
            <ListItem data-testid="carousel-list-item" onClick={() => handleViewChange("carousel")}>
              <ListItemIcon>
                <ViewCarousel />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewSelector;
