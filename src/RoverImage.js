import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  copyright: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(0.5),
    margin: 0
  }
});

const RoverImage = ({ classes, rover }) => {
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

export default withStyles(styles)(RoverImage);
