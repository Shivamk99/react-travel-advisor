import React from "react";
import useStyles from "./styles.js";
import GoogleMapReact from "google-map-react";
import { Paper, useMediaQuery, Typography } from "@material-ui/core";
import LocatioOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

const Map = ({ coordinates, setCoordinates, setBoundary }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBkmv3LWD7-gOgOnsTtV5P61bfE2d_-GQ0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBoundary({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
