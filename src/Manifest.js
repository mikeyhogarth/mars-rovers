import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import RoverImage from "./RoverImage";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  proceedButtonContainer: {
    textAlign: "center",
    padding: theme.spacing(2)
  }
});

const MANIFEST_QUERY = gql`
  query Manifest($rover: Rover!) {
    manifest(rover: $rover) {
      name
      status
      max_sol
      launch_date
      landing_date
      total_photos
    }
  }
`;

const Manifest = ({ classes, rover }) => (
  <Query query={MANIFEST_QUERY} variables={{ rover }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;

      const { manifest } = data;

      return (
        <>
          <div style={{ textAlign: "center" }}>
            <RoverImage rover={rover} />
          </div>

          <Typography>
            Greetings, I am the rover known as <strong>{manifest.name}</strong>.
          </Typography>
          <Typography>
            I began my journey to the red planet on{" "}
            <strong>{manifest.launch_date}</strong> and I finally arrived on
            Mars on <strong>{manifest.landing_date}</strong>.
          </Typography>
          <Typography>
            I have been here for <strong>{manifest.max_sol} sols</strong>{" "}
            (Mars-days). In this time I have taken{" "}
            <strong>{manifest.total_photos}</strong> photos.
          </Typography>
          <Typography>
            The current status of my mission is: <em>{manifest.status}</em>.
          </Typography>

          <div className={classes.proceedButtonContainer}>
            <Button
              color="primary"
              component={Link}
              to={`/rovers/${rover.toLowerCase()}`}
            >
              Explore Further
            </Button>
          </div>
        </>
      );
    }}
  </Query>
);

export default withStyles(styles)(Manifest);
