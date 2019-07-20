import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    copyright: {
      backgroundColor: "black",
      color: "white",
      padding: theme.spacing(0.5),
      margin: 0
    }
  })
);

const RoverImage = ({ rover }) => {
  const classes = useStyles();

  const imageName =
    rover.toLowerCase() === "curiosity"
      ? "curiosity.jpg"
      : "spirit-opportunity.jpg";
  return (
    <div>
      <p className={classes.copyright}>Image courtesy of NASA/JPL-Caltech</p>
      <img width="100%" src={`/images/rovers/${imageName}`} alt={rover} />
    </div>
  );
};

export default RoverImage;
