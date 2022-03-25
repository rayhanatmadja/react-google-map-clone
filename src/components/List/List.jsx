import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useList from "./styles";
const List = ({ restaurant }) => {
  const classes = useList();

  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState();

  const typeChangeHanlder = event => {
    const newValue = event.target.value;
    setType(newValue);
  };

  const ratingChangeHandler = event => {
    const newValue = event.target.value;
    setRating(newValue);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">Hotels, Restaurants, and attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={typeChangeHanlder}>
          <MenuItem value="restaurant">Restaurant</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="attraction">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={ratingChangeHandler}>
          <MenuItem value={0}>All Ratings</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {restaurant?.map((item, index) => (
          <Grid item xs={12} key={index}>
            <PlaceDetails item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
