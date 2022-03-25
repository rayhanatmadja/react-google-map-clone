import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
import MdPhone from "@material-ui/icons/Phone";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

const PlaceDetails = ({ item }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardActionArea
        onClick={() => {
          window.open(item.web_url, "_blank");
        }}
      >
        <CardMedia
          style={{ height: 350 }}
          image={
            item.photo
              ? item.photo.images.large.url
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seattlemet.com%2Feat-and-drink%2Fseattle-s-100-best-restaurants-right-now&psig=AOvVaw1N4qjUKMDiOPKd66JyfOW5&ust=1647938680375000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODUk5Po1vYCFQAAAAAdAAAAABAP"
          }
          title={item.name}
          alt={item.caption}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          {item.address && (
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.subtitle}
            >
              <LocationOnRoundedIcon /> {item.address}
            </Typography>
          )}
          {item.phone && (
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.spacing}
            >
              <MdPhone /> {item.phone}
            </Typography>
          )}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" gutterBottom>
              Price
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.price ? item.price : "Not available"}
            </Typography>
          </Box>
          {item.rating && (
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.spacing}
            >
              Rating {item.rating}
            </Typography>
          )}
          {item.cuisine?.map(({ key, name }) => {
            return (
              <Chip
                key={key}
                label={name}
                className={classes.chip}
                size="small"
              />
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaceDetails;
