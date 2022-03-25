import React, { Fragment, useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [restaurant, setRestaurant] = useState();

  // dynamic map state
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  // automatically set the user location when they open for the first time
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw).then(data => {
      console.log(data);
      setRestaurant(data);
    });
  }, [coordinates, bounds]);

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={4} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List restaurant={restaurant} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
