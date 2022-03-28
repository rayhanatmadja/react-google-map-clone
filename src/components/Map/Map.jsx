import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOnRounded";
import { Rating } from "@material-ui/lab";

import useStyle from "./styles";

const Map = ({ coordinates, setBounds, setCoordinates, restaurant }) => {
  const classes = useStyle();
  const mobielMedia = useMediaQuery("(max-width:600px)");

  const changeCoordinatesHanlder = event => {
    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
    setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBK2M-8MNwHS5wJvDUPnwuP7NivBhdeBgQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={changeCoordinatesHanlder}
        onChildClick={""}
      >
        {restaurant?.map((place, index) => {
          return (
            <div
              key={index}
              className={classes.markerContainer}
              lat={place.lattitude}
              lng={place.longitude}
            >
              {mobielMedia ? (
                <LocationIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2">{place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seattlemet.com%2Feat-and-drink%2Fseattle-s-100-best-restaurants-right-now&psig=AOvVaw1N4qjUKMDiOPKd66JyfOW5&ust=1647938680375000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODUk5Po1vYCFQAAAAAdAAAAABAP"
                    }
                    alt={place.name}
                  />
                </Paper>
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
