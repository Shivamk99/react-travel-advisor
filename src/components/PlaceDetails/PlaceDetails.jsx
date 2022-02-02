import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  console.log("places", place);
  console.log("places", place?.phone);
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place?.photo
            ? place?.photo?.images?.large?.url
            : "https://png.pngitem.com/pimgs/s/176-1760449_hotel-png-file-clipart-hotel-transparent-png.png"
        }
        title={place?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place?.name ?? `Laila's county`}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place?.price}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place?.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, key) => (
          <Box
            my={1}
            display={"flex"}
            justifyContent={"space-between"}
            key={key}
          >
            <img src={award?.images?.small} alt={award?.display_name} />
            <Typography variant="subtitle2" color={"textSecondary"}>
              {award?.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name, key }) => (
          <Chip
            key={key}
            label={name}
            size={"small"}
            className={classes.chip}
          />
        ))}
        {place?.address && (
          <Typography
            variant="subtitle2"
            color={"textSecondary"}
            gutterBottom
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place?.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant="subtitle2"
            color={"textSecondary"}
            gutterBottom
            className={classes.spacing}
          >
            <PhoneIcon /> {place?.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size={"small"}
            color={"primary"}
            onClick={() => {
              window.open(place?.webs_url, "_blank");
            }}
          >
            Trip Advisor
          </Button>
          <Button
            size={"small"}
            color={"primary"}
            onClick={() => {
              window.open(place?.website, "_blank");
            }}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
