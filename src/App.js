import React from "react";
import { CssBaseline, Grid } from "@material-ui/core"; //CssBaseLine bcz it simply normalizes the styles, so it just fix some padding, margins, background chores immediately for us
import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;