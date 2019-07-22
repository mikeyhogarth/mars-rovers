import React, { useState } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import {
  Breadcrumbs,
  Typography,
  Slider,
  Grid,
  Input,
  LinearProgress,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  proceedButtonContainer: {
    textAlign: "center",
    padding: theme.spacing(2)
  },
  solInput: {
    textAlign: "center"
  },
  breadcrumbs: {
    padding: theme.spacing(3)
  },
  content: {
    padding: theme.spacing(3)
  }
});

const PHOTO_SUMMARY_QUERY = gql`
  query Manifest($rover: Rover!) {
    manifest(rover: $rover) {
      total_photos
      max_sol
      photos {
        sol
        earth_date
        cameras
        total_photos
      }
    }
  }
`;

function SolChooser({
  classes,
  match: {
    params: { rover }
  }
}) {
  const [sol, setSol] = useState(0);

  function handleSolChange(newValue) {
    if (typeof newValue === "number") setSol(newValue);
    else setSol(0);
  }

  return (
    <>
      <Breadcrumbs
        className={classes.breadcrumbs}
        separator="›"
        aria-label="Breadcrumb"
      >
        <Link color="inherit" to="/">
          Rovers
        </Link>
        <Typography color="textPrimary">{rover}</Typography>
      </Breadcrumbs>

      <Query
        query={PHOTO_SUMMARY_QUERY}
        variables={{ rover: rover.toUpperCase() }}
      >
        {({ loading, error, data: { manifest } }) => {
          if (loading) return <LinearProgress />;
          if (error) return <p>Error :( </p>;

          const summary = manifest.photos.find(p => p.sol === sol);

          return (
            <div className={classes.content}>
              {" "}
              <Typography variant="h3" gutterBottom>
                The {rover} rover
              </Typography>
              <Typography id="sols-slider" gutterBottom>
                Choose a sol...
              </Typography>
              <Grid container>
                <Grid item xs={9}>
                  <Slider
                    min={0}
                    max={manifest.max_sol}
                    aria-labelledby="sols-slider"
                    value={sol}
                    onChange={(e, newValue) => handleSolChange(newValue)}
                  />
                </Grid>
                <Grid className={classes.solInput} item xs={3}>
                  <Input
                    value={sol}
                    margin="dense"
                    onChange={e => handleSolChange(Number(e.target.value))}
                    inputProps={{
                      min: 0,
                      max: manifest.max_sol,
                      type: "number",
                      "aria-labelledby": "sols-slider"
                    }}
                  />
                </Grid>
              </Grid>
              {!summary && <Typography>I took no photos today</Typography>}
              {summary && (
                <div>
                  <Typography>
                    Data for Sol <strong>{sol}</strong>
                    {summary.earth_date && (
                      <span>
                        , which would have been{" "}
                        <strong>{summary.earth_date}</strong> back on Earth.
                      </span>
                    )}
                  </Typography>
                  <Typography>
                    Today I took <strong>{summary.total_photos}</strong> photos.
                  </Typography>
                  <Typography>
                    I used the following cameras:{" "}
                    <strong>{summary.cameras.join(", ")}</strong>
                  </Typography>
                  <div className={classes.proceedButtonContainer}>
                    <Button
                      color="primary"
                      component={Link}
                      to={`/rovers/${rover.toLowerCase()}/sols/${sol}`}
                    >
                      Explore Sol {sol}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      </Query>
    </>
  );
}

export default withStyles(styles)(SolChooser);
