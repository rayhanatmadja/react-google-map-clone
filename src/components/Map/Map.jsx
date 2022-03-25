import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOnRounded";
import { Rating } from "@material-ui/lab";

import useStyle from "./styles";

const Map = ({ coordinates, setBounds, setCoordinates }) => {
  const classes = useStyle();
  const mobielMedia = useMediaQuery("(min-width:600px)");

  const changeCoordinatesHanlder = event => {
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
    setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCbY6q1XrR9LRyzQAp-6XEBodVAP8CBFJ4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={changeCoordinatesHanlder}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
