import React from "react";
import { CssBaseline, Grid } from "@material-ui/core"; //CssBaseLine bcz it simply normalizes the styles, so it just fix some padding, margins, background chores immediately for us
import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";

const App = () => {
  const [places, setPlaces] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState({});
  const [boundary, setBoundary] = React.useState({});

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  React.useEffect(() => {
    getPlacesData(boundary?.sw, boundary?.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, boundary]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBoundary={setBoundary}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
